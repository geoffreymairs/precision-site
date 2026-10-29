import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Concrete, Gravel & Chip Seal Driveways Hawke's Bay | Precision Digger Worx",
  description:
    "Concrete, gravel and chip seal driveways across Napier, Hastings and Hawke's Bay. Excavation, base prep, boxing and pour for homes and rural properties.",
};

const related = [
  { label: "Concrete Preparation", href: "/services/concrete-prep" },
  { label: "Foundations", href: "/services/foundations" },
  { label: "Earthmoving & Excavation", href: "/services/excavation" },
  { label: "Operated Digger Hire", href: "/services/digger-hire" },
];

export default function DrivewaysPage() {
  return (
    <ServicePage
      jobType="Driveways"
      title="Driveways"
      heading="Concrete, Gravel & Chip Seal Driveways in Hawke's Bay"
      subtitle="New driveways for homes and rural properties across the Bay. Concrete, gravel or chip seal, built properly from the ground up so they last."
      image="/images/422f472a-27f3-40bb-9eb6-d2e7f8d7778a.jpg"
      imageAlt="Finished chip seal driveway with roller compactor at a residential property"
      description="A good driveway starts underneath. We look at your soil, slope, drainage and what you want the finished driveway to look like, then manage the whole job from the first dig to the final surface. For concrete driveways we handle the excavation, base prep and compaction, boxing and the pour. For gravel and chip seal we form, compact and finish the surface ready to use. Residential or long rural access, we've got you covered."
      bullets={[
        "Concrete driveways: excavation, base prep, boxing and pour",
        "Gravel driveway construction",
        "Chip seal and prepared surfaces",
        "Site assessment and formation design",
        "Base preparation and layer compaction",
        "Drainage, culverts and crossings",
        "Long rural access tracks",
        "Full site cleanup on completion",
      ]}
      relatedServices={related}
    />
  );
}
