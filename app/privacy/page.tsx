import type { Metadata } from "next";
import Link from "next/link";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Precision Digger Worx",
  description:
    "How Precision Digger Worx Ltd collects, uses and protects your personal information under the New Zealand Privacy Act 2020.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "February 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mb-4 text-balance">{title}</h2>
      <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 list-disc pl-6 marker:text-amber-500">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

const linkClass = "text-amber-600 hover:text-amber-700 underline underline-offset-2";

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">
              Home
            </Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-stone-900 font-medium truncate">Privacy Policy</span>
          </nav>
        </div>
      </div>

      <div className="bg-stone-900 py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Precision Digger Worx Ltd
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-balance">
            Privacy Policy
          </h1>
          <p className="text-stone-300 text-lg max-w-2xl text-pretty">Last updated {LAST_UPDATED}</p>
        </div>
      </div>

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <article className="max-w-[70ch]">
            <Section title="1. Introduction">
              <p>
                Precision Digger Worx Ltd (&quot;we&quot;, &quot;us&quot;) is an owner-operated excavation
                business based in Hawke&apos;s Bay, New Zealand. This policy explains how we collect, use and
                protect your personal information, in line with the New Zealand Privacy Act 2020.
              </p>
            </Section>

            <Section title="2. What we collect">
              <p>When you get in touch with us, we may collect:</p>
              <BulletList
                items={[
                  "Your name",
                  "Your phone number",
                  "Your email address (if provided)",
                  "The suburb or town of your job",
                  "Details about the work you need",
                  "Any photos you send us",
                ]}
              />
            </Section>

            <Section title="3. How we collect it">
              <BulletList
                items={[
                  "When you contact us by phone, text or email",
                  "When you fill in a form on our website",
                ]}
              />
              <p>
                Our website also uses Google Analytics and Google Ads, which use cookies to collect general,
                non-identifying information about how visitors use the site (such as pages viewed and how you
                found us). You can block or delete cookies in your browser settings.
              </p>
            </Section>

            <Section title="4. How we use it">
              <p>We only use your information to:</p>
              <BulletList
                items={[
                  "Respond to your enquiry and give you a quote",
                  "Plan, carry out and invoice your job",
                  "Keep in touch with you about the work",
                  "Understand how our website is used so we can improve it",
                ]}
              />
              <p>We will never sell your personal information or use it for unrelated marketing.</p>
            </Section>

            <Section title="5. Who we share it with">
              <p>
                We only share your information when we need to in order to do the job, or when the law
                requires it. This may include:
              </p>
              <BulletList
                items={[
                  "Web3Forms, the service that delivers website form submissions to our email",
                  "Google, for website analytics and advertising measurement",
                  "Our accountant, for invoicing and tax purposes",
                ]}
              />
              <p>
                Some of these providers may store information outside New Zealand. We only use reputable
                providers that protect personal information to a comparable standard.
              </p>
            </Section>

            <Section title="6. Storage and security">
              <p>
                We take reasonable steps to keep your information safe from loss, misuse and unauthorised
                access. It is stored in password-protected email, phone and accounting systems that only we can
                access.
              </p>
            </Section>

            <Section title="7. How long we keep it">
              <p>
                We keep your information only for as long as we need it for the purposes above, or as required
                by law (for example, New Zealand tax law requires business records to be kept for seven years).
                After that, it is securely deleted.
              </p>
            </Section>

            <Section title="8. Your rights">
              <p>
                Under the Privacy Act 2020, you have the right to ask for a copy of the personal information we
                hold about you, and to ask us to correct it if it is wrong. Just get in touch using the details
                below and we&apos;ll respond as soon as we can, and within 20 working days.
              </p>
              <p>
                If you&apos;re not happy with how we&apos;ve handled your information, please talk to us first.
                You can also contact the{" "}
                <a
                  href="https://www.privacy.org.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Office of the Privacy Commissioner
                </a>
                .
              </p>
            </Section>

            <Section title="9. Contact us">
              <p>For any privacy questions or requests, contact Billy:</p>
              <BulletList
                items={[
                  <>
                    Phone:{" "}
                    <a href={PHONE_TEL} className={linkClass}>
                      {PHONE_DISPLAY}
                    </a>
                  </>,
                  <>
                    Email:{" "}
                    <a href={`mailto:${EMAIL}`} className={`${linkClass} break-all`}>
                      {EMAIL}
                    </a>
                  </>,
                  "Post: Dartmoor Road, Puketapu 4186, Hawke's Bay",
                ]}
              />
            </Section>

            <Section title="10. Changes to this policy">
              <p>
                We may update this policy from time to time. The latest version will always be available on
                this page.
              </p>
            </Section>
          </article>
        </div>
      </div>
    </>
  );
}
