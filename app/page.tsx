import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ServiceArea from "@/components/ServiceArea";
import FAQ from "@/components/FAQ";
import TrustSection from "@/components/TrustSection";
import Contact from "@/components/Contact";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* CTA strip */}
      <div className="bg-amber-500 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-semibold text-lg text-center sm:text-left">
            Free quotes, fast response across Napier, Hastings &amp; Hawke&apos;s Bay
          </p>
          <a
            href={PHONE_TEL}
            className="flex-shrink-0 bg-white text-amber-600 hover:bg-amber-50 font-bold px-8 py-3 rounded-lg text-lg transition-colors shadow-sm whitespace-nowrap"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <WhyUs />
      <Services />
      <Gallery />
      <ServiceArea />
      <FAQ />
      <TrustSection />
      <Contact />
    </>
  );
}
