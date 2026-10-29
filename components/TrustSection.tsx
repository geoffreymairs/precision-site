import { GOOGLE_REVIEWS_URL } from "@/lib/site";

const badges = [
  "Local owner-operator",
  "Established 2020",
  "Free quotes",
  "Tidy cleanup guaranteed",
];

const reviews = [
  {
    author: "Jeremy Yates",
    text: "I can highly recommend Billy, top bloke that does a great job. He has delivered an excellent service on our developments over the last 5yrs. Great communication and takes pride in his work. Will definitely be using him again on our next project.",
  },
  {
    author: "Athir Matti",
    text: "I have known Billy for well over 5 years now and he has done over 5 different jobs for me in different locations. So I can say with full confidence, he is one local legend.",
  },
  {
    author: "Barking Mad Landscapes",
    text: "Great service.",
  },
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

        <ul className="grid gap-4 md:grid-cols-3 mb-8" aria-label="Google reviews">
          {reviews.map((review) => (
            <li key={review.author} className="flex flex-col bg-stone-800 border border-stone-700 rounded-xl p-6">
              <div className="flex gap-0.5 mb-3" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 text-stone-200 text-sm leading-relaxed">
                <p>&ldquo;{review.text}&rdquo;</p>
              </blockquote>
              <p className="mt-4 text-white font-semibold text-sm">{review.author}</p>
              <p className="text-stone-400 text-xs">Google review</p>
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
