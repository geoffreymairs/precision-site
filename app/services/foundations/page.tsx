import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Foundation Excavation | Precision Digger Worx — Hawke's Bay",
  description:
    "Foundation digging and site preparation for new builds and extensions across Napier, Hastings and Hawke's Bay.",
};

const related = [
  { label: "Concrete Preparation", href: "/services/concrete-prep" },
  { label: "Service Trenching", href: "/services/trenching" },
  { label: "General Excavations", href: "/services/excavation" },
  { label: "Driveways", href: "/services/driveways" },
];

export default function FoundationsPage() {
  return (
    <ServicePage
      title="Foundations"
      subtitle="Accurate foundation excavation for new builds, extensions, and outbuildings across Napier, Hastings, and the Hawke's Bay region."
      image="/images/b8eb9784-d8fa-4293-8a14-f07d01c02038.jpg"
      imageAlt="Excavator working on coastal foundation site with truck and team"
      description="Getting the foundation right sets everything else up for success. Precision Digger Worx works closely with builders, architects, and engineers to ensure that site preparation meets the exact specifications required. We dig to the correct depth and profile, manage spoil efficiently, and leave the site ready for the next trade to move straight in. We understand that build timelines are critical — we work to schedule and communicate clearly throughout."
      bullets={[
        "New home foundation excavation",
        "Extension and addition footings",
        "Outbuilding and shed foundations",
        "Site clearing and levelling",
        "Cut and fill earthworks",
        "Spoil removal and management",
        "Coordination with builders and engineers",
        "Accurate depth and profile to specification",
      ]}
      relatedServices={related}
      extraImages={[
        { src: "/images/2-pdw.jpeg", alt: "Yanmar excavator with Precision Digger Worx branding at levelled foundation site" },
        { src: "/images/3-pdw.jpeg", alt: "Levelled and prepared foundation pad ready for concrete" },
      ]}
    />
  );
}
