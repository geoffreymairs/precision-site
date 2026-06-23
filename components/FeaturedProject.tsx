"use client";

import { useState, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

// Easy to re-assign: just move an image between the "before" and "after" arrays.
const beforeImages = [
  { src: "/images/driveway2.jpeg", alt: "Rough graded dirt access ramp leading up to a concrete culvert and farm gate before works" },
  { src: "/images/driveway3.jpeg", alt: "Large excavated earthworks site with tyre tracks during site preparation" },
  { src: "/images/driveway5.jpeg", alt: "Freshly poured concrete slab with excavator and sand piles mid-project" },
];

const afterImages = [
  { src: "/images/driveway1.jpeg", alt: "Freshly graded curving gravel driveway through tilled earth with rolling green hills behind" },
  { src: "/images/driveway8.jpeg", alt: "Wide curving gravel driveway leading toward farm buildings" },
  { src: "/images/driveway4.jpeg", alt: "Completed concrete pad meeting a graded gravel driveway curving through a green paddock" },
  { src: "/images/driveway6.jpeg", alt: "Elevated view of finished concrete pad and curved gravel driveway looping around fresh topsoil" },
  { src: "/images/driveway7.jpeg", alt: "View through a black farm gate to the completed curved gravel driveway" },
];

const tags = ["Concrete Driveway", "Excavation", "Site Preparation", "Drainage", "Residential"];

type Phase = "before" | "after";

export default function FeaturedProject() {
  const [phase, setPhase] = useState<Phase>("after");
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const activeImages = useMemo(
    () => (phase === "before" ? beforeImages : afterImages),
    [phase],
  );

  const switchPhase = useCallback((next: Phase) => {
    setPhase(next);
    setIndex(0);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + activeImages.length) % activeImages.length);
  }, [activeImages.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % activeImages.length);
  }, [activeImages.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
    touchStartX.current = null;
  };

  const current = activeImages[index];

  return (
    <section className="bg-stone-950 pt-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Gallery — 60% on desktop */}
          <div className="lg:col-span-3">
            {/* Before / After toggle */}
            <div className="inline-flex p-1 rounded-full bg-stone-800 mb-4">
              {(["before", "after"] as Phase[]).map((p) => (
                <button
                  key={p}
                  onClick={() => switchPhase(p)}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-colors ${
                    phase === p
                      ? "bg-amber-500 text-white"
                      : "text-stone-300 hover:text-white"
                  }`}
                  aria-pressed={phase === p}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Primary image */}
            <div
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-stone-900"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover animate-in fade-in duration-500"
                priority
              />

              <span className="absolute top-4 left-4 bg-stone-900/80 text-amber-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                {phase}
              </span>

              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-2.5 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 rounded-full p-2.5 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="absolute bottom-3 right-3 bg-black/50 text-white/80 text-xs px-2.5 py-1 rounded-full">
                {index + 1} / {activeImages.length}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
              {activeImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setIndex(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`relative h-16 w-24 sm:h-20 sm:w-28 flex-shrink-0 overflow-hidden rounded-lg transition-all ${
                    i === index
                      ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-stone-950"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details — 40% on desktop */}
          <div className="lg:col-span-2 lg:pt-2">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Featured Project
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-balance">
              New Driveway Installation
            </h2>

            <div className="flex items-center gap-2 text-stone-400 mb-6">
              <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
              <span className="text-lg">Hawkes Bay, New Zealand</span>
            </div>

            <p className="text-stone-400 leading-relaxed mb-6">
              Precision Digger Worx was engaged to complete a full driveway construction
              project for this Hawke&apos;s Bay property. Starting with raw earthworks and site
              preparation, our team carried out excavation, shaping, basecourse installation,
              drainage considerations, and final concrete works to create a durable,
              low-maintenance driveway designed for long-term performance and improved
              property presentation.
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-stone-800 text-stone-200 text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Call to action */}
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-stone-800" />
      </div>
    </section>
  );
}
