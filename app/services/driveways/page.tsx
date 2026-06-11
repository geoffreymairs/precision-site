import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Driveway Services | Precision Digger Worx — Hawke's Bay",
  description:
    "Gravel, chip seal, and prepared driveways across Napier, Hastings and Hawke's Bay. Durable, well-built driveways for homes and rural properties.",
};

const related = [
  { label: "Concrete Preparation", href: "/services/concrete-prep" },
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Foundations", href: "/services/foundations" },
  { label: "General Excavations", href: "/services/excavation" },
];

export default function DrivewaysPage() {
  return (
    <ServicePage
      title="Driveways"
      subtitle="Gravel, chip seal, and prepared driveway surfaces for homes and rural properties across Hawke's Bay — built to last and finished to look great."
      image="/images/422f472a-27f3-40bb-9eb6-d2e7f8d7778a.jpg"
      imageAlt="Finished chip seal driveway with roller compactor at residential property"
      description="A well-built driveway is an investment in your property's value and practicality. At Precision Digger Worx, we assess your property's soil conditions, gradient, drainage requirements, and your preferences to design and build a driveway that works for you. From the initial cut and formation through to final surfacing and compaction, we manage the whole process. We work on both residential and rural driveways of all lengths and complexities."
      bullets={[
        "Gravel driveway construction",
        "Chip seal and prepared surfaces",
        "Site assessment and formation design",
        "Base preparation and layer compaction",
        "Drainage planning and integration",
        "Culverts and crossings",
        "Long rural access tracks",
        "Full site cleanup on completion",
      ]}
      relatedServices={related}
    />
  );
}
