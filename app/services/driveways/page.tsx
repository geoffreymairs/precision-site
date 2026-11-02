import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import MiniGallery from "@/components/MiniGallery";
import { relatedServices } from "@/lib/site";

const drivewayImages = [
  { src: "/images/driveway-prep2.jpeg", alt: "Compacted basecourse driveway in front of a modern home with a JCB roller by the garage" },
  { src: "/images/driveway-prep3.jpeg", alt: "Yanmar mini excavator beside a new timber-edged garden and freshly compacted driveway base" },
  { src: "/images/driveway-prep1.jpeg", alt: "Long narrow driveway finished in grey chip between two fences with a digger at the far end" },
];

export const metadata: Metadata = {
  title: "Driveway Prep Napier & Hastings | Precision Digger Worx",
  description:
    "Driveway excavation, base prep and compaction for concrete, gravel and chip seal driveways across Hawke's Bay. Free quotes, call 022 649 1618.",
  alternates: { canonical: "/services/driveways" },
};

export default function DrivewaysPage() {
  return (
    <ServicePage
      jobType="Driveway prep"
      title="Driveway Prep"
      heading="Driveway Prep Napier & Hastings"
      subtitle="Driveway excavation, base preparation and compaction for concrete, gravel and chip seal driveways across Hawke's Bay. Built right from the ground up so it lasts."
      image="/images/422f472a-27f3-40bb-9eb6-d2e7f8d7778a.jpg"
      imageAlt="Prepared driveway base with roller compactor at a residential property"
      description="A good driveway starts underneath. We look at your soil, slope and drainage, then excavate to the right depth, bring in and spread the basecourse and compact it in layers to give your driveway a solid, long-lasting foundation. Whether you're going with concrete, gravel or chip seal, we prepare the base so your surface goes down on firm, level ground. Residential driveways or long rural access, we've got you covered."
      bullets={[
        "Driveway excavation to the correct depth",
        "Basecourse supply, spreading and levelling",
        "Layer compaction for a firm, stable base",
        "Base prep for concrete driveways",
        "Gravel driveway formation",
        "Base prep for chip seal surfaces",
        "Drainage, falls and culverts",
        "Full site cleanup on completion",
      ]}
      relatedServices={relatedServices(
        "/services/concrete-prep",
        "/services/demolition",
        "/services/excavation",
        "/services/trenching",
        "/services/digger-hire",
      )}
    >
      <MiniGallery heading="Driveway Prep Projects" images={drivewayImages} />
    </ServicePage>
  );
}
