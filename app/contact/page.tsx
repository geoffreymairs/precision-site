import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Precision Digger Worx — Hawke's Bay",
  description:
    "Get in touch with Precision Digger Worx for a free quote. Call Billy on 022 649 1618 or send a message. Serving Napier, Hastings and Hawke's Bay.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-stone-900 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Call Billy directly for a free quote, or leave a message below and
            we'll get back to you quickly.
          </p>
        </div>
      </div>

      {/* Contact form section */}
      <Contact />
    </>
  );
}
