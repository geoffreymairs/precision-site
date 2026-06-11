import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Stump & Green Waste Removal | Precision Digger Worx — Hawke's Bay",
  description:
    "Professional stump removal and green waste clearing across Napier, Hastings and Hawke's Bay. Eco-friendly disposal, full site cleanup.",
};

const related = [
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Residential Backyard Work", href: "/services/backyard-work" },
  { label: "General Excavations", href: "/services/excavation" },
  { label: "Driveways", href: "/services/driveways" },
];

export default function StumpRemovalPage() {
  return (
    <ServicePage
      title="Greenwaste & Stump Removal"
      subtitle="Safe, efficient removal of tree stumps and green waste across Hawke's Bay — leaving your property clean, hazard-free, and ready to use."
      image="/images/stump-removal.png"
      imageAlt="Yellow machinery grinding and removing a tree stump"
      description="Tree stumps and accumulated green waste are more than an eyesore — they can be hazardous, attract pests, and prevent you from making full use of your outdoor space. Precision Digger Worx removes stumps and clears green waste efficiently using the right equipment for the job. We dispose of all material responsibly and leave your property clean and clear. Whether you have one stump or a whole section to clear, we can help."
      bullets={[
        "Tree stump removal and grinding",
        "Green waste and vegetation clearing",
        "Scrub and bush clearing",
        "Root system removal",
        "Eco-friendly and responsible disposal",
        "Large and small stumps handled",
        "Site clearing for new builds and landscaping",
        "Full site cleanup on completion",
      ]}
      relatedServices={related}
    />
  );
}
