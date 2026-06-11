"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ACCESS_KEY = "ac6dd25a-6e5a-4f49-87ed-223a9dc4158e";

type Status = "idle" | "loading" | "error";

export default function Contact() {
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
      console.log("[Contact Form] Web3Forms response:", json);
      if (json.success) {
        console.log("[Contact Form] Submission successful — redirecting to /thank-you");
        form.reset();
        router.push("/thank-you");
      } else {
        console.error("[Contact Form] Submission failed. Message:", json.message, "| Full response:", json);
        setStatus("error");
      }
    } catch (err) {
      console.error("[Contact Form] Network error:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — details */}
          <div>
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Get in Touch
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4">
              Talk to Us About Your Project
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-10">
              We provide expert digger services across Napier, Hastings, and the
              Hawke&apos;s Bay region. Call us for a free quote or leave a message
              and we&apos;ll get back to you quickly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-0.5">Phone</p>
                  <a href="tel:0226491618" className="text-xl font-bold text-stone-900 hover:text-amber-600 transition-colors">
                    022 649 1618
                  </a>
                  <p className="text-sm text-stone-400 mt-0.5">Call Billy directly</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-0.5">Email</p>
                  <a href="mailto:precisiondiggerworx@gmail.com" className="text-stone-900 font-semibold hover:text-amber-600 transition-colors break-all">
                    precisiondiggerworx@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-0.5">Location</p>
                  <p className="text-stone-900 font-semibold">Dartmoor Road, Puketapu 4186</p>
                  <p className="text-sm text-stone-400 mt-0.5">Serving all of Hawke&apos;s Bay</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-stone-50 border border-stone-100 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-semibold text-stone-700 mb-1.5">
                      Name <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-semibold text-stone-700 mb-1.5">
                      Phone <span className="text-amber-500">*</span>
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      name="phone"
                      placeholder="Your phone number"
                      required
                      className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-email" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-sm font-semibold text-stone-700 mb-1.5">
                    Message <span className="text-amber-500">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows={5}
                    placeholder="Describe your project or what you need..."
                    required
                    className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm text-center">Something went wrong — please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-bold py-4 rounded-lg text-lg transition-colors"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>

                <p className="text-xs text-stone-400 text-center">
                  Or call us directly on{" "}
                  <a href="tel:0226491618" className="text-amber-600 font-semibold hover:underline">
                    022 649 1618
                  </a>
                </p>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}
