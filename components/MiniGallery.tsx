import Image from "next/image";
import Link from "next/link";

interface MiniGalleryProps {
  heading: string;
  images: { src: string; alt: string }[];
}

export default function MiniGallery({ heading, images }: MiniGalleryProps) {
  return (
    <section className="bg-stone-50 py-12 px-4 sm:px-6 lg:px-8" aria-labelledby="mini-gallery-heading">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">Recent Work</p>
            <h2 id="mini-gallery-heading" className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {heading}
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-amber-600 hover:text-amber-700 font-semibold transition-colors"
          >
            View full gallery &rarr;
          </Link>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.map((img) => (
            <li key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 384px"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
