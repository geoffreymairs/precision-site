"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ACCESS_KEY = "ac6dd25a-6e5a-4f49-87ed-223a9dc4158e";

const serviceList = [
  "Landscaping & Outdoor Design",
  "Service Trenching",
  "Driveways",
  "Foundations",
  "Concrete Preparation",
];

const trustBadges = [
  "Local Hawke's Bay operator",
  "Reliable & tidy work",
  "Residential & small commercial",
];

type Status = "idle" | "loading" | "error";

export default function Hero() {
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
        body: JSON.stringify({ access_key: ACCESS_KEY, ...data }),
      });
      const json = await res.json();
      console.log("[Hero Form] Web3Forms response:", json);
      if (json.success) {
        console.log("[Hero Form] Submission successful — redirecting to /thank-you");
        form.reset();
        router.push("/thank-you");
      } else {
        console.error("[Hero Form] Submission failed. Message:", json.message, "| Full response:", json);
        setStatus("error");
      }
    } catch (err) {
      console.error("[Hero Form] Network error:", err);
      setStatus("error");
    }
  }

  return (
    <section className="relative flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG20240924151517-scaled.jpg"
          alt="CAT mini excavator grading a rural site with Hawke's Bay hills in the background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          preload
        />
        <div className="absolute inset-0 bg-stone-950/82" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left — headline + service list + CTA + trust */}
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Napier · Hastings · Hawke&apos;s Bay
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-3">
              Reliable Digger Work<br />
              for Hawke&apos;s Bay<br />
              <span className="text-amber-400">Homes &amp; Site Works</span>
            </h1>
            <p className="text-stone-300 text-base mb-6">
              Done on time, on budget, and fully cleaned up on completion.
            </p>

            <ul className="space-y-2 mb-7">
              {serviceList.map((service) => (
                <li key={service} className="flex items-center gap-3 text-stone-200 text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {service}
                </li>
              ))}
            </ul>

            <a
              href="tel:0226491618"
              className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white font-bold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg shadow-amber-900/30"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 022 649 1618
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-7">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs text-stone-300 bg-white/10 border border-white/15 rounded-full px-3 py-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — contact form card */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl ring-1 ring-stone-100">
            <h2 className="text-3xl font-extrabold text-stone-900 mb-4">Talk to us now</h2>

            <>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                Or request a quick quote below
              </p>

              <form onSubmit={handleSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    className="w-full border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm transition"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm transition"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    className="w-full border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm transition"
                  />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your project — type of work, location, timing..."
                    required
                    className="w-full border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-sm resize-none transition"
                  />

                  {status === "error" && (
                    <p className="text-red-600 text-xs text-center">Something went wrong — please try again or call us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 disabled:opacity-60 text-white font-bold py-4 rounded-lg text-lg transition-colors shadow-md"
                  >
                    {status === "loading" ? "Sending…" : "Send My Quote Request →"}
                  </button>
                  <p className="text-xs text-stone-400 text-center pt-1">
                    ✓ We respond quickly — usually same day
                  </p>
                </form>
            </>
          </div>

        </div>
      </div>
    </section>
  );
}
