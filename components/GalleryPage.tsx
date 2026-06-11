"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  { src: "/images/1-pdw.jpeg", alt: "Long service trench dug along driveway with excavator bucket visible" },
  { src: "/images/2-pdw.jpeg", alt: "Yanmar excavator with Precision Digger Worx branding at levelled foundation site" },
  { src: "/images/3-pdw.jpeg", alt: "Levelled and prepared foundation pad ready for concrete" },
  { src: "/images/1000009355.jpg", alt: "Completed site preparation and grading at rural property" },
  { src: "/images/1000009771.jpg", alt: "Gravel patio installation for cabin outdoor area" },
  { src: "/images/1000009768.jpg", alt: "Site preparation and ground works for cabin installation" },
  { src: "/images/1000007779.jpg", alt: "Yanmar excavator auger drilling post holes at new build" },
  { src: "/images/1000009341.jpg", alt: "Large scale residential earthworks and site levelling" },
  { src: "/images/1000003124.jpg", alt: "Foundation excavation with survey markers" },
  { src: "/images/1000009786.jpg", alt: "Completed gravel patio with outdoor entertaining area" },
  { src: "/images/1000004661.jpg", alt: "Residential site preparation and grading" },
  { src: "/images/5332a973-c8de-4042-b416-1c1fe5c11c72-1.jpg", alt: "Landscaping and grading project" },
  { src: "/images/19328041-04e2-427c-82c8-274cf2c11fdc-2.jpg", alt: "Residential backyard works" },
  { src: "/images/b8eb9784-d8fa-4293-8a14-f07d01c02038-2.jpg", alt: "Earthworks and site clearing" },
  { src: "/images/d6534a1b-132f-453e-a00b-8bc0b64b40d5-2.jpg", alt: "Foundation excavation and preparation" },
  { src: "/images/e89629f1-6ad7-4bbf-abbc-c6d5b20ff732-2.jpg", alt: "Completed excavation project" },
  { src: "/images/image_6483441-2_1.jpg", alt: "Gravel driveway and access track work" },
  { src: "/images/image_6483441.jpg", alt: "Residential site preparation" },
  { src: "/images/image_6483441_1.jpg", alt: "Landscaping and outdoor earthworks" },
  { src: "/images/3E27688F_IMG_5148-copy-scaled.webp", alt: "Excavator working on site" },
  { src: "/images/C5BEFDA4_IMG_5304-copy-scaled.webp", alt: "Residential earthworks and grading" },
  { src: "/images/3440A964_IMG_5158-copy-scaled.webp", alt: "Trenching and service installation" },
  { src: "/images/1CE0716F_IMG_5195-copy-scaled.webp", alt: "Concrete preparation and sub-base work" },
  { src: "/images/C18390A1_IMG_5306-copy-scaled.webp", alt: "Site works and earthmoving" },
  { src: "/images/03C973C0_IMG_5154-copy-scaled.webp", alt: "Excavation and groundworks in progress" },
  { src: "/images/IMG20240924151517-scaled.jpg", alt: "CAT mini excavator on large earthworks site" },
  { src: "/images/IMG20250411101602-scaled.jpg", alt: "Yanmar excavator loading dumper truck on access track" },
  { src: "/images/IMG20250304100030-scaled.jpg", alt: "CAT excavator with auger drilling fence post holes" },
  { src: "/images/IMG20250207130657-scaled.jpg", alt: "Freshly poured concrete driveway with traffic cones" },
  { src: "/images/1000009455-scaled.jpg", alt: "Site preparation and grading" },
  { src: "/images/1000009353-1-scaled.jpg", alt: "Excavation and earthworks site" },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)), []);
  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <>
      {/* Hero */}
      <div className="bg-stone-900 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Work Gallery
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Real jobs completed across Napier, Hastings, and the wider Hawke's Bay region.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="bg-stone-950 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="relative block w-full overflow-hidden rounded-xl group cursor-zoom-in aspect-square"
                aria-label={`View larger: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-stone-400 mb-5 text-lg">Ready to get started?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0226491618"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Call 022 649 1618
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-stone-600 hover:border-amber-400 hover:text-amber-400 text-stone-300 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center"
          onClick={close}
        >
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button onClick={close}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
            aria-label="Close">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors"
            aria-label="Previous">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors"
            aria-label="Next">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
