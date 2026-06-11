import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Landscaping",
    description:
      "From garden terracing to full outdoor transformations. We understand local soil, flora, and conditions across the Hawke's Bay region.",
    image: "/images/136765321_257505979131328_8465862777364736343_n.jpg",
    alt: "Landscaped terraced garden steps with agapanthus in Hawke's Bay",
    href: "/services/landscaping",
  },
  {
    title: "Service Trenching",
    description:
      "Precision trenching for water, gas, and electrical utilities. Minimal disruption, maximum care, and full adherence to safety standards.",
    image: "/images/trenching_4.png",
    alt: "Service trench dug along a rural property",
    href: "/services/trenching",
  },
  {
    title: "New Lawns & Reseeding",
    description:
      "New lawn installations and reseeding using premium turf and topsoil. We prepare the ground and set your lawn up to thrive.",
    image: "/images/lawns.png",
    alt: "Lush green lawn with curved garden edging",
    href: "/contact",
  },
  {
    title: "Driveways",
    description:
      "Gravel, chip seal, or prepared surfaces — we assess your property and deliver a durable, great-looking driveway.",
    image: "/images/422f472a-27f3-40bb-9eb6-d2e7f8d7778a.jpg",
    alt: "Finished gravel driveway with roller compactor at residential property",
    href: "/services/driveways",
  },
  {
    title: "Concrete Preparation",
    description:
      "Precision site preparation for concrete pours. Laser-level accuracy, correct base compaction, and full site cleanup.",
    image: "/images/1CE0716F_IMG_5195-copy-scaled.webp",
    alt: "Laser level survey equipment for concrete slab preparation",
    href: "/services/concrete-prep",
  },
  {
    title: "Foundations",
    description:
      "Solid foundations for new builds and extensions. We work closely with builders, architects, and engineers throughout.",
    image: "/images/b8eb9784-d8fa-4293-8a14-f07d01c02038.jpg",
    alt: "Excavator working on coastal foundation site",
    href: "/services/foundations",
  },
  {
    title: "Auger Work",
    description:
      "Efficient hole drilling for fence posts, piles, and structures. The right attachment, used precisely where you need it.",
    image: "/images/IMG20250304100030-scaled.jpg",
    alt: "CAT mini excavator with auger attachment drilling fence post holes",
    href: "/services/auger-work",
  },
  {
    title: "Greenwaste & Stump Removal",
    description:
      "Clear stumps and green waste safely and efficiently. Eco-friendly disposal keeping your property clean and hazard-free.",
    image: "/images/stump-removal.png",
    alt: "Yellow machinery grinding a tree stump",
    href: "/services/stump-removal",
  },
  {
    title: "Residential Backyard Work",
    description:
      "Full backyard transformations — excavation, grading, steps, paths, and retaining. Tailored to your space and lifestyle.",
    image: "/images/1000009720.jpg",
    alt: "CAT excavator working on residential backyard steps and gravel path",
    href: "/services/backyard-work",
  },
  {
    title: "General Excavations",
    description:
      "Large or small, residential or commercial — we have the machinery and expertise to handle any excavation requirement.",
    image: "/images/IMG20240924151517-scaled.jpg",
    alt: "CAT excavator on large earthworks site with Hawke's Bay hills in background",
    href: "/services/excavation",
  },
  {
    title: "Top Soil Delivery",
    description:
      "Quality topsoil delivered and spread. Rich, nutrient-dense soil to give your lawn or garden the best possible start.",
    image: "/images/IMG20250401090054-scaled.jpg",
    alt: "Operator view from digger cabin during bulk earthworks and topsoil work",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-2">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-4">
            Our Services
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            Complete excavation, landscaping, and earthmoving across Napier,
            Hastings, and the Hawke's Bay region. Whatever the job, we have the
            machinery and experience to solve it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md hover:border-amber-200 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
              </div>
              {/* Text */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                  <h3 className="font-bold text-stone-900 text-lg group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <p className="mt-3 text-amber-600 text-sm font-semibold flex items-center gap-1">
                  Learn more
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
