import type { Metadata } from "next";
import Link from "next/link";
import GoogleAdsConversion from "@/components/GoogleAdsConversion";

export const metadata: Metadata = {
  title: "Thank You | Precision Digger Worx",
  description: "Thanks for getting in touch. We'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="flex-1 flex items-center justify-center bg-stone-50 py-24 px-4 sm:px-6 lg:px-8">
      {/* Google Ads conversion — fires only on /thank-you */}
      <GoogleAdsConversion />
      <div className="max-w-lg w-full text-center">

        {/* Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4">
          Thanks for contacting<br />Precision Digger Worx
        </h1>
        <p className="text-stone-500 text-lg mb-10">
          We&apos;ve received your enquiry and will be in touch shortly.
        </p>

        {/* Divider */}
        <div className="border-t border-stone-200 mb-10" />

        {/* Phone CTA */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
          <p className="text-stone-700 font-semibold mb-1">Need to talk now?</p>
          <p className="text-stone-500 text-sm mb-4">Call Billy directly for a faster response.</p>
          <a
            href="tel:0226491618"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-lg text-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            022 649 1618
          </a>
        </div>

        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-600 font-semibold transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </Link>

      </div>
    </div>
  );
}
