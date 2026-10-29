"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { jobTypes, PHONE_DISPLAY, PHONE_TEL, type JobType } from "@/lib/site";

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "ac6dd25a-6e5a-4f49-87ed-223a9dc4158e";

type Status = "idle" | "loading" | "error";

interface QuoteFormProps {
  defaultJobType?: JobType;
  heading?: string;
  idPrefix?: string;
}

const fieldClass =
  "w-full bg-white border border-stone-200 rounded-lg px-3.5 py-2.5 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm transition";

export default function QuoteForm({
  defaultJobType = "Not sure / something else",
  heading = "Get a free quote",
  idPrefix = "q",
}: QuoteFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New quote request: ${data.job_type}`,
          from_name: "Precision Digger Worx website",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        form.reset();
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      id="quote"
      className="scroll-mt-24 bg-white rounded-2xl p-5 sm:p-6 shadow-2xl ring-1 ring-stone-100"
    >
      <h2 className="text-2xl font-extrabold text-stone-900 mb-4 text-balance">{heading}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor={`${idPrefix}-name`} className="block text-xs font-semibold text-stone-700 mb-1">
              Name <span className="text-amber-600">*</span>
            </label>
            <input id={`${idPrefix}-name`} name="name" type="text" required autoComplete="name" className={fieldClass} />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-phone`} className="block text-xs font-semibold text-stone-700 mb-1">
              Phone <span className="text-amber-600">*</span>
            </label>
            <input id={`${idPrefix}-phone`} name="phone" type="tel" required autoComplete="tel" inputMode="tel" className={fieldClass} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor={`${idPrefix}-address`} className="block text-xs font-semibold text-stone-700 mb-1">
              Address
            </label>
            <input id={`${idPrefix}-address`} name="address" type="text" autoComplete="street-address" placeholder="e.g. 12 Gloucester St, Taradale" className={fieldClass} />
          </div>
          <div>
            <label htmlFor={`${idPrefix}-job`} className="block text-xs font-semibold text-stone-700 mb-1">
              Job type
            </label>
            <select id={`${idPrefix}-job`} name="job_type" defaultValue={defaultJobType} className={fieldClass}>
              {((jobTypes as readonly JobType[]).includes(defaultJobType)
                ? jobTypes
                : [defaultJobType, ...jobTypes]
              ).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-message`} className="block text-xs font-semibold text-stone-700 mb-1">
            Message
          </label>
          <textarea
            id={`${idPrefix}-message`}
            name="message"
            rows={3}
            placeholder="Tell us a bit about the job, size, access and timing"
            className={`${fieldClass} resize-none`}
          />
        </div>

        {status === "error" && (
          <p role="alert" className="text-red-600 text-sm text-center">
            Something went wrong, please try again or call Billy directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-lg text-lg transition-colors shadow-md"
        >
          {status === "loading" ? "Sending..." : "Get My Free Quote"}
        </button>
        <p className="text-sm text-stone-500 text-center">
          Usually same-day reply. Call Billy on{" "}
          <a href={PHONE_TEL} className="text-amber-600 font-semibold hover:underline whitespace-nowrap">
            {PHONE_DISPLAY}
          </a>
        </p>
      </form>
    </div>
  );
}
