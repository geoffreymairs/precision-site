import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Concrete Preparation | Precision Digger Worx — Hawke's Bay",
  description:
    "Laser-level concrete site preparation across Napier, Hastings and Hawke's Bay. Driveways, slabs, patios, and more.",
};

const related = [
  { label: "Foundations", href: "/services/foundations" },
  { label: "Driveways", href: "/services/driveways" },
  { label: "Service Trenching", href: "/services/trenching" },
  { label: "General Excavations", href: "/services/excavation" },
];

export default function ConcretePrepPage() {
  return (
    <ServicePage
      title="Concrete Preparation"
      subtitle="Meticulous site preparation for concrete pours — laser-level accurate, properly compacted, and ready for your concreter to start."
      image="/images/1CE0716F_IMG_5195-copy-scaled.webp"
      imageAlt="Laser level survey equipment set up for concrete slab preparation in suburban backyard"
      description="The quality of a concrete pour depends entirely on what's underneath it. At Precision Digger Worx, we take concrete preparation seriously — using laser level equipment to achieve a precise, flat surface, correctly compacting the base to prevent future settling, and ensuring proper drainage fall where required. We work alongside concreters across Hawke's Bay and understand what's needed for a successful pour on residential driveways, patios, shed slabs, and commercial floors."
      bullets={[
        "Residential driveway slab preparation",
        "Patio and outdoor entertainment areas",
        "Shed and garage floor preparation",
        "Commercial concrete floor prep",
        "Laser level grading to specification",
        "Base material supply and compaction",
        "Drainage fall and gradient setting",
        "Full site cleanup before pour",
      ]}
      relatedServices={related}
    />
  );
}
