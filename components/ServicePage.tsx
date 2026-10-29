import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import TrustSection from "@/components/TrustSection";
import { PHONE_DISPLAY, PHONE_TEL, type JobType } from "@/lib/site";

interface ServicePageProps {
  title: string;
  heading?: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  description: string;
  bullets: string[];
  jobType: JobType;
  relatedServices?: { label: string; href: string }[];
  extraImages?: { src: string; alt: string }[];
  children?: React.ReactNode;
}

export default function ServicePage({
  title,
  heading,
  subtitle,
  image,
  imageAlt,
  description,
  bullets,
  jobType,
  relatedServices = [],
  extraImages = [],
  children,
}: ServicePageProps) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">
              Home
            </Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/#services" className="hover:text-amber-600 transition-colors">
              Services
            </Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-stone-900 font-medium truncate">{title}</span>
          </nav>
        </div>
      </div>

      {/* Page hero with quote form */}
      <div className="bg-stone-900 py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Napier · Hastings · Hawke&apos;s Bay
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 text-balance">
              {heading ?? title}
            </h1>
            <p className="text-stone-300 text-lg max-w-2xl text-pretty">{subtitle}</p>
            <a
              href={PHONE_TEL}
              className="hidden lg:inline-flex mt-8 items-center gap-2 text-white font-bold text-lg hover:text-amber-400 transition-colors"
            >
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Or call Billy on {PHONE_DISPLAY}
            </a>
          </div>
          <QuoteForm defaultJobType={jobType} />
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative h-80 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 576px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">{description}</p>

              <h2 className="text-xl font-bold text-stone-900 mb-5">What&apos;s included:</h2>
              <ul className="space-y-3 mb-10">
                {bullets.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-stone-700">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-bold px-7 py-3.5 rounded-lg transition-colors"
                >
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center border-2 border-stone-200 hover:border-amber-400 hover:text-amber-600 text-stone-700 font-semibold px-7 py-3.5 rounded-lg transition-colors"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {extraImages.length > 0 && (
        <div className="bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className={`grid gap-4 ${extraImages.length === 1 ? "grid-cols-1 max-w-2xl mx-auto" : "grid-cols-1 sm:grid-cols-2"}`}>
              {extraImages.map((img) => (
                <div key={img.src} className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 576px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {children}

      <TrustSection />

      {/* CTA strip */}
      <div className="bg-amber-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to get started?</h2>
          <p className="text-amber-50 mb-7 text-lg">
            Call Billy directly or send us a message and we&apos;ll get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center bg-white text-amber-600 font-bold px-8 py-3.5 rounded-lg hover:bg-amber-50 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-amber-600 transition-colors"
            >
              Get My Free Quote
            </a>
          </div>
        </div>
      </div>

      {relatedServices.length > 0 && (
        <div className="bg-stone-50 py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold text-stone-900 mb-6">Other Services</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center gap-2 bg-white border border-stone-200 hover:border-amber-400 hover:text-amber-600 text-stone-700 font-medium px-4 py-2.5 rounded-lg text-sm transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
