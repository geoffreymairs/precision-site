import FAQ, { faqs, type FAQItem } from "@/components/FAQ";
import ServiceArea from "@/components/ServiceArea";

interface ServiceExtrasProps {
  whyHeading: string;
  whyPoints: { title: string; text: string }[];
  faqHeading: string;
  faqItems: FAQItem[];
}

const generalFaqs = faqs.filter((f) =>
  ["What areas do you cover?", "How much does a job cost?", "How quickly can you start?"].includes(f.q),
);

export default function ServiceExtras({ whyHeading, whyPoints, faqHeading, faqItems }: ServiceExtrasProps) {
  return (
    <>
      <section aria-labelledby="why-service-heading" className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">Why choose us</p>
          <h2
            id="why-service-heading"
            className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-6 text-balance"
          >
            {whyHeading}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {whyPoints.map((item) => (
              <li key={item.title} className="bg-white rounded-2xl border border-stone-200 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h3 className="font-bold text-stone-900">{item.title}</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceArea />

      <FAQ heading={faqHeading} items={[...faqItems, ...generalFaqs]} />
    </>
  );
}
