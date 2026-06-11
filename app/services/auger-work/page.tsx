import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Auger Work | Precision Digger Worx — Hawke's Bay",
  description:
    "Efficient auger hole drilling for fence posts, building piles, and structures across Napier, Hastings and Hawke's Bay.",
};

const related = [
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Residential Backyard Work", href: "/services/backyard-work" },
  { label: "General Excavations", href: "/services/excavation" },
  { label: "Foundations", href: "/services/foundations" },
];

export default function AugerWorkPage() {
  return (
    <ServicePage
      title="Auger Work"
      subtitle="Precision hole drilling for fence posts, building piles, retaining walls, and structures — fast, accurate, and in the right place every time."
      image="/images/IMG20250304100030-scaled.jpg"
      imageAlt="CAT mini excavator with auger attachment drilling a row of fence post holes along a fence line"
      description="Auger work is one of the most efficient ways to drill accurate, consistent holes for fence posts, building piles, retaining wall posts, and other structures. Precision Digger Worx uses a mini excavator-mounted auger attachment to drill holes of various diameters, both in open areas and in tighter spaces where larger machinery can't access. We can drill multiple holes in a single session efficiently — saving you time and cost versus manual methods."
      bullets={[
        "Fence post hole drilling",
        "Building pile holes",
        "Retaining wall post holes",
        "Various auger diameter sizes available",
        "Residential and rural properties",
        "Tight-access areas and smaller sites",
        "Consistent depth and alignment",
        "Multiple holes drilled efficiently in one visit",
      ]}
      relatedServices={related}
    />
  );
}
