import { PHONE_DISPLAY } from "@/lib/site";

export const faqs = [
  {
    q: "Do you do dry hire?",
    a: "No, all our digger hire is operated hire only. Billy comes with the machine and does the work for you. It means no licence or experience needed on your end, no risk of damage to the machine, your property or underground services, and the job gets done faster and tidier.",
  },
  {
    q: "What areas do you cover?",
    a: "We're based in Puketapu and cover all of Hawke's Bay, including Napier, Hastings, Taradale, Havelock North, Clive, Bay View and the surrounding rural areas. If you're a bit further out, give us a call and we'll see what we can do.",
  },
  {
    q: "How much does a job cost?",
    a: "Work is charged by the hour, with Billy and the machine on site. The total depends on the size of the job, access and any spoil or green waste removal. Every quote is free and up front, so get in touch and we'll give you a clear price before any work starts.",
  },
  {
    q: "How quickly can you start?",
    a: "We usually reply the same day and can often fit smaller jobs in within a week or so. Bigger projects are booked in around your timeline. Call Billy on " + PHONE_DISPLAY + " for the latest availability.",
  },
  {
    q: "Do you take away spoil and green waste?",
    a: "Yes. We can cart away spoil, rubble, concrete and green waste, or spread and level it on site if you'd like to keep it. Just let us know when you ask for a quote and we'll include it.",
  },
];

export type FAQItem = { q: string; a: string };

export default function FAQ({
  heading = "Frequently asked questions",
  items = faqs,
}: {
  heading?: string;
  items?: FAQItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto">
        <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2 text-center">
          FAQ
        </p>
        <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-8 text-center text-balance">
          {heading}
        </h2>
        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {items.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none font-semibold text-stone-900 hover:text-amber-600 transition-colors [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg
                  className="w-5 h-5 text-amber-500 flex-shrink-0 transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <p className="pb-5 text-stone-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
