import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const serviceList = [
  "Operated digger hire",
  "Earthmoving & excavation",
  "Service trenching",
  "Driveways & concrete prep",
  "Foundations",
];

const heroTrust = [
  { label: "5.0 Google rating [REPLACE]", star: true },
  { label: "Same-day replies", star: false },
  { label: "Napier & Hastings based", star: false },
];

export default function Hero() {
  return (
    <section className="relative flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/IMG20240924151517-scaled.jpg"
          alt="CAT mini excavator grading a rural site with Hawke's Bay hills in the background"
          fill
          sizes="100vw"
          quality={70}
          className="object-cover object-center"
          preload
        />
        <div className="absolute inset-0 bg-stone-950/82" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div>
            <p className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
              Napier · Hastings · Hawke&apos;s Bay
            </p>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4 text-balance">
              Operated Digger Hire &amp;{" "}
              <span className="text-amber-400">Earthmoving</span>
            </h1>

            <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-5" aria-label="Why customers choose us">
              {heroTrust.map((item) => (
                <li key={item.label} className="flex items-center gap-1.5 text-sm text-stone-200">
                  {item.star ? (
                    <span className="text-amber-400 tracking-tight" aria-hidden="true">
                      {"★★★★★"}
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                  )}
                  {item.label}
                </li>
              ))}
            </ul>

            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg text-lg sm:text-xl transition-colors shadow-lg shadow-amber-900/30"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Billy {PHONE_DISPLAY}
            </a>

            <p className="hidden sm:block text-stone-300 text-base mt-6 mb-4">
              Billy operates every job, done on time, on budget and fully cleaned up on completion.
            </p>
            <ul className="hidden sm:block space-y-2">
              {serviceList.map((service) => (
                <li key={service} className="flex items-center gap-3 text-stone-200 text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <QuoteForm heading="Get a free quote" idPrefix="hero" />
        </div>
      </div>
    </section>
  );
}
