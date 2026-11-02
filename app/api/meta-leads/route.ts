import crypto from "node:crypto";
import { after } from "next/server";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

// Meta Lead Ads webhook.
// GET: Meta's verification handshake. POST: leadgen change notifications.
// Each lead is fetched from the Graph API and emailed via Resend.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v21.0";

type FieldDatum = { name: string; values?: string[] };
type Lead = {
  id: string;
  created_time?: string;
  field_data?: FieldDatum[];
  ad_name?: string;
  adset_name?: string;
  campaign_name?: string;
  form_id?: string;
  platform?: string;
};
type LeadgenChange = {
  field?: string;
  value?: { leadgen_id?: string; form_id?: string; page_id?: string; ad_id?: string };
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");
  const expected = process.env.META_VERIFY_TOKEN;

  if (mode === "subscribe" && expected && token === expected && challenge) {
    return new Response(challenge, { status: 200, headers: { "Content-Type": "text/plain" } });
  }
  return new Response("Forbidden", { status: 403 });
}

export async function POST(request: Request) {
  const raw = await request.text();

  if (!validSignature(raw, request.headers.get("x-hub-signature-256"))) {
    return new Response("Invalid signature", { status: 401 });
  }

  let body: { object?: string; entry?: { changes?: LeadgenChange[] }[] };
  try {
    body = JSON.parse(raw);
  } catch {
    return new Response("Bad JSON", { status: 400 });
  }

  const leadIds: string[] = [];
  for (const entry of body.entry ?? []) {
    for (const change of entry.changes ?? []) {
      if (change.field === "leadgen" && change.value?.leadgen_id) {
        leadIds.push(change.value.leadgen_id);
      }
    }
  }

  // Acknowledge Meta straight away; process after the response is sent.
  after(async () => {
    for (const id of leadIds) {
      try {
        await handleLead(id);
      } catch (err) {
        console.error(`[meta-leads] failed to process lead ${id}`, err);
      }
    }
  });

  return Response.json({ received: leadIds.length });
}

function validSignature(raw: string, header: string | null): boolean {
  const secret = process.env.META_APP_SECRET;
  if (!secret || !header?.startsWith("sha256=")) return false;
  const expected = crypto.createHmac("sha256", secret).update(raw, "utf8").digest("hex");
  const given = header.slice("sha256=".length);
  const a = Buffer.from(expected, "hex");
  const b = Buffer.from(given, "hex");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

async function handleLead(leadId: string) {
  const token = process.env.META_PAGE_ACCESS_TOKEN;
  if (!token) throw new Error("META_PAGE_ACCESS_TOKEN is not set");

  const fields = "id,created_time,field_data,ad_name,adset_name,campaign_name,form_id,platform";
  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${encodeURIComponent(leadId)}?fields=${fields}`,
    { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" },
  );
  if (!res.ok) throw new Error(`Graph API ${res.status}: ${await res.text()}`);
  const lead = (await res.json()) as Lead;

  const answers = (lead.field_data ?? []).map((f) => ({
    name: f.name,
    label: prettyLabel(f.name),
    value: (f.values ?? []).join(", "),
  }));
  const find = (...keys: string[]) =>
    answers.find((a) => keys.includes(a.name.toLowerCase()))?.value || "";

  const name =
    find("full_name", "name") ||
    [find("first_name"), find("last_name")].filter(Boolean).join(" ") ||
    "New lead";
  const phone = find("phone_number", "phone");
  const email = find("email");

  await sendLeadEmail({ lead, name, phone, email, answers });

  if (process.env.LEAD_AUTOREPLY === "on" && email) {
    await sendAutoReply(email, name);
  }
}

async function sendLeadEmail(args: {
  lead: Lead;
  name: string;
  phone: string;
  email: string;
  answers: { label: string; value: string }[];
}) {
  const { lead, name, phone, email, answers } = args;
  const to = process.env.LEADS_EMAIL_TO;
  if (!to) throw new Error("LEADS_EMAIL_TO is not set");

  const subject = `New Facebook lead: ${name}${phone ? ` (${phone})` : ""}`;
  const telHref = phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : "";

  const rows = answers
    .map(
      (a) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top">${esc(a.label)}</td><td style="padding:6px 0"><strong>${esc(a.value)}</strong></td></tr>`,
    )
    .join("");
  const source = [lead.campaign_name, lead.adset_name, lead.ad_name].filter(Boolean).join(" / ");

  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#111;max-width:560px">
  <h2 style="margin:0 0 12px">New lead from Facebook/Instagram</h2>
  ${telHref ? `<p><a href="${telHref}" style="display:inline-block;background:#e8a317;color:#111;padding:12px 20px;border-radius:6px;text-decoration:none;font-weight:bold">Call ${esc(name)} on ${esc(phone)}</a></p>` : ""}
  <table style="border-collapse:collapse;margin:12px 0">${rows}</table>
  <p style="color:#555;font-size:13px">${source ? `Ad: ${esc(source)}<br>` : ""}${lead.platform ? `Platform: ${esc(lead.platform)}<br>` : ""}${lead.created_time ? `Received: ${esc(lead.created_time)}<br>` : ""}Lead ID: ${esc(lead.id)}</p>
  ${email ? `<p style="color:#555;font-size:13px">Reply to this email to respond to ${esc(name)} directly.</p>` : ""}
</div>`;

  const text = [
    subject,
    "",
    ...answers.map((a) => `${a.label}: ${a.value}`),
    "",
    source ? `Ad: ${source}` : "",
    `Lead ID: ${lead.id}`,
  ]
    .filter((l) => l !== undefined)
    .join("\n");

  await sendEmail({
    to: to.split(",").map((s) => s.trim()).filter(Boolean),
    subject,
    html,
    text,
    replyTo: email || undefined,
  });
}

async function sendAutoReply(to: string, name: string) {
  const first = name.split(" ")[0] || "there";
  const subject = "Thanks for your enquiry - Precision Digger Worx";
  const text = `Hi ${first},

Thanks for getting in touch with Precision Digger Worx. I've got your details and will be in touch shortly to talk about your job.

If it's urgent, give me a call on ${PHONE_DISPLAY}.

Cheers,
Billy
Precision Digger Worx
${PHONE_DISPLAY}`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#111;max-width:560px">
<p>Hi ${esc(first)},</p>
<p>Thanks for getting in touch with Precision Digger Worx. I've got your details and will be in touch shortly to talk about your job.</p>
<p>If it's urgent, give me a call on <a href="${PHONE_TEL}">${PHONE_DISPLAY}</a>.</p>
<p>Cheers,<br>Billy<br>Precision Digger Worx<br>${PHONE_DISPLAY}</p>
</div>`;
  await sendEmail({ to: [to], subject, html, text, replyTo: process.env.LEADS_EMAIL_TO?.split(",")[0]?.trim() });
}

async function sendEmail(msg: {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key) throw new Error("RESEND_API_KEY is not set");
  if (!from) throw new Error("CONTACT_FROM_EMAIL is not set");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: msg.to,
      subject: msg.subject,
      html: msg.html,
      text: msg.text,
      ...(msg.replyTo ? { reply_to: msg.replyTo } : {}),
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

function prettyLabel(name: string) {
  const s = name.replace(/[_?]+/g, " ").trim();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
