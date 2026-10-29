import { GOOGLE_REVIEWS_URL } from "@/lib/site";

const badges = [
  "Local owner-operator",
  "Established 2020",
  "Free quotes",
  "Tidy cleanup guaranteed",
];

export default function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="bg-stone-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Why choose us
            </p>
            <h2 id="trust-heading" className="text-2xl sm:text-3xl font-extrabold text-white text-balance">
              A local operator Hawke&apos;s Bay can rely on
            </h2>
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
