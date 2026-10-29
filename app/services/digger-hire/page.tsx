import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Operated Digger Hire Hawke's Bay | Napier & Hastings | Precision Digger Worx",
  description:
    "Operated digger hire in Napier, Hastings and Hawke's Bay. Every hire comes with Billy, an experienced operator, so the job is done right. Free quotes, call 022 649 1618.",
  alternates: { canonical: "/services/digger-hire" },
};

const related = [
  { label: "Earthmoving & Excavation", href: "/services/excavation" },
  { label: "Service Trenching", href: "/services/trenching" },
  { label: "Auger Work", href: "/services/auger-work" },
  { label: "Driveways", href: "/services/driveways" },
  { label: "Stump Removal", href: "/services/stump-removal" },
];

const whyOperated = [
  {
    title: "No risk of damage",
    text: "No chance of you damaging the machine, your house, fences or underground services.",
  },
  {
    title: "Faster",
    text: "An experienced operator gets more done in an hour than most people do in a day.",
  },
  {
    title: "Tidier",
    text: "Clean cuts, level finishes and a tidy site when we leave.",
  },
];

export default function DiggerHirePage() {
  return (
    <ServicePage
      jobType="Operated digger hire"
      title="Operated Digger Hire"
      heading="Operated Digger Hire in Hawke's Bay"
      subtitle="Every hire comes with Billy on the controls, so you get the job done right without needing a licence or any experience."
      image="/images/IMG20250401090054-scaled.jpg"
      imageAlt="Operator view from the digger cab during an earthworks job in Hawke's Bay"
      description="Precision Digger Worx offers operated digger hire only, no dry hire. When you book, you get the machine plus Billy, a local owner-operator with years of experience on Hawke's Bay sites. Tell us what you need done and we'll turn up with the right buckets and attachments, get stuck in and leave the site tidy. It's the easy way to get digging done without the stress of learning a machine, getting it to site or worrying about damage."
      bullets={[
        "Experienced operator included with every hire",
        "Earthmoving, digging and levelling",
        "Trenching for services and drainage",
        "Post holes and auger drilling",
        "Stump removal and site clearing",
        "Driveway and concrete prep",
        "Spoil and green waste removal available",
        "Hourly hire, half days and full days",
      ]}
      relatedServices={related}
    >
      <section aria-labelledby="why-operated-heading" className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div>
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Why operated hire
            </p>
            <h2 id="why-operated-heading" className="text-2xl sm:text-3xl font-extrabold text-stone-900 mb-6 text-balance">
              Why operated hire beats dry hire
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {whyOperated.map((item) => (
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
        </div>
      </section>

      <FAQ heading="Digger hire questions" />
    </ServicePage>
  );
}
