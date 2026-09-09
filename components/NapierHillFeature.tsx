"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

type GalleryImage = { src: string; alt: string };

const heroImage: GalleryImage = {
  src: "/images/excavation1.jpeg",
  alt: "CAT and Yanmar excavators carrying out large-scale excavation in front of a white villa on Napier Hill",
};

const supportingImages: GalleryImage[] = [
  { src: "/images/excavation3.jpeg", alt: "Wide view of the villa on temporary timber piles beside a deep excavated site with survey equipment" },
  { src: "/images/excavation7.jpeg", alt: "Excavated swimming pool pit with a Yanmar excavator working below and a CAT excavator above" },
  { src: "/images/excavation2.jpeg", alt: "CAT 311F excavator carrying out demolition and loading debris into a tip truck beside the house" },
  { src: "/images/excavation5.jpeg", alt: "Two excavators shaping the excavation with the villa supported on timber piles behind" },
  { src: "/images/excavation4.jpeg", alt: "Excavators forming footings with string lines set out across the prepared site" },
  { src: "/images/excavation6.jpeg", alt: "Excavation in progress with silt fencing installed and machines working near the house" },
  { src: "/images/excavation8.jpeg", alt: "Close excavation alongside the villa foundations with a Yanmar excavator and hand tools" },
];

const allImages = [heroImage, ...supportingImages];

const works = [
  "Demolition and site preparation",
  "Swimming pool excavation",
  "Pavilion excavation",
  "Excavation for required footings",
  "Thickenings for various block walls",
  "Detailed earthworks and site preparation",
];

export default function NapierHillFeature() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + allImages.length) % allImages.length)),
    [],
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % allImages.length)),
    [],
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
    <section className="bg-stone-950 pt-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Featured Project
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance">
              Napier Hill &ndash; Excavation &amp; Siteworks
            </h2>
          </div>
          <div className="flex items-center gap-2 text-stone-400 sm:pb-2 flex-shrink-0">
            <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
            <span className="text-lg">Napier Hill, New Zealand</span>
          </div>
        </div>

        {/* Full-width hero image */}
        <button
          onClick={() => setLightboxIndex(0)}
          className="relative block w-full overflow-hidden rounded-2xl group cursor-zoom-in aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] bg-stone-900"
          aria-label={`View larger: ${heroImage.alt}`}
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
            Recent Project
          </span>
        </button>

        {/* Description + works */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 mt-8">
          <div className="lg:col-span-3">
            <p className="text-stone-300 text-lg leading-relaxed">
              A recent Precision Digger Worx project on Napier Hill involving detailed excavation,
              demolition and site preparation. This job combined careful demolition work with
              swimming pool and pavilion excavation, along with all required footings and thickenings
              for the various block walls across the site &mdash; showcasing the scale and precision of
              earthworks we deliver.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Excavation", "Demolition", "Siteworks", "Footings", "Earthworks"].map((tag) => (
                <span
                  key={tag}
                  className="bg-stone-800 text-stone-200 text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Project work included
            </h3>
            <ul className="space-y-3">
              {works.map((item) => (
                <li key={item} className="flex items-start gap-3 text-stone-300">
                  <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Supporting image grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {supportingImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(i + 1)}
              className="relative block w-full overflow-hidden rounded-xl group cursor-zoom-in aspect-[4/3]"
              aria-label={`View larger: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-stone-800" />
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center" onClick={close}>
          <div
            className="relative w-full h-full max-w-5xl max-h-[90vh] mx-4 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[lightboxIndex].src}
              alt={allImages[lightboxIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={close}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-3 transition-colors"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {allImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
