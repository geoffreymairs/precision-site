import { GOOGLE_REVIEWS_URL } from "@/lib/site";

// [REPLACE WITH REAL REVIEW] Swap these for real Google reviews before going live.
const reviews = [
  {
    name: "[Customer name]",
    suburb: "Taradale",
    text: "[REPLACE WITH REAL REVIEW] Billy dug out our driveway and had it prepped for the concreter in a day. Tidy, on time and great to deal with.",
  },
  {
    name: "[Customer name]",
    suburb: "Havelock North",
    text: "[REPLACE WITH REAL REVIEW] Needed post holes and some trenching on our lifestyle block. Quick quote, fair price and left the site spotless.",
  },
  {
    name: "[Customer name]",
    suburb: "Napier",
    text: "[REPLACE WITH REAL REVIEW] Hired Billy and the digger for a backyard levelling job. Way easier than trying to do it ourselves. Highly recommend.",
  },
];

const badges = [
  "Local owner-operator",
  "Established 2020",
  "Fully insured [confirm]",
  "Free quotes",
  "Tidy cleanup guaranteed",
];

export function Stars({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <span className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={className} viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

export default function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="bg-stone-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Google reviews
            </p>
            <h2 id="trust-heading" className="text-2xl sm:text-3xl font-extrabold text-white text-balance">
              What Hawke&apos;s Bay locals say
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <Stars />
              <span className="text-white font-bold">[5.0]</span>
              <span className="text-stone-400 text-sm">from [XX] Google reviews</span>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start sm:self-auto border border-stone-600 hover:border-amber-400 hover:text-amber-400 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
          >
            Read our Google reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {reviews.map((review, i) => (
            <li key={i} className="bg-stone-800/60 border border-stone-700 rounded-2xl p-6 flex flex-col">
              <Stars className="w-4 h-4" />
              <p className="text-stone-200 leading-relaxed mt-3 flex-1">{review.text}</p>
              <p className="mt-4 text-sm">
                <span className="text-white font-semibold">{review.name}</span>
                <span className="text-stone-400">, {review.suburb}</span>
              </p>
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-2.5" aria-label="Why choose us">
          {badges.map((badge) => (
            <li
              key={badge}
              className="flex items-center gap-2 bg-stone-800 border border-stone-700 text-stone-100 text-sm font-medium rounded-full px-4 py-2"
            >
              <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              {badge}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
