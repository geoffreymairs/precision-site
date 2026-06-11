"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/06e098f1-4ec7-47d5-9b56-e1ff54900ab7-1.jpg",
    alt: "Yanmar mini excavator loaded on Precision Digger Worx branded truck",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/30c43716-8439-4c9d-922e-e0443349b193.jpg",
    alt: "Rural site preparation with excavator and new build in background",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/3f800add-9234-4f44-bc7a-93ee2d2ef0d9.jpg",
    alt: "Graded site around a completed new residential build",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/422f472a-27f3-40bb-9eb6-d2e7f8d7778a.jpg",
    alt: "Finished chip seal driveway with roller compactor",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/images/93fcba95-08b5-4ab1-9bdd-dededb530135.jpg",
    alt: "Rural residential excavation and timber retaining wall",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/1000009053-1-scaled.jpg",
    alt: "Gravel driveway completed next to modern dark barn-style home",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG20250207130657-scaled.jpg",
    alt: "Freshly poured concrete driveway path with traffic cones",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/1000009750.jpg",
    alt: "Completed gravel garden steps with natural rock edging",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG20250304100030-scaled.jpg",
    alt: "CAT excavator with auger drilling fence post holes along fence line",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/IMG20250411101602-scaled.jpg",
    alt: "Yanmar excavator loading dumper truck on access track",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );

  const next = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

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
      <section id="gallery" className="bg-stone-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Recent Projects
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto text-lg">
              Real jobs completed across Napier, Hastings, and the wider Hawke's Bay region.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`relative overflow-hidden rounded-xl group cursor-zoom-in ${img.span}`}
                aria-label={`View larger: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zm-2 0h-8M11 7v8" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-block border-2 border-amber-400 text-amber-400 hover:bg-amber-500 hover:border-amber-500 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Image container */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
