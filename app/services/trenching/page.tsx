import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { relatedServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trenching & Drainage Napier & Hastings | Precision Digger Worx",
  description:
    "Trenching and drainage across Hawke's Bay. Water, power and cable trenches, stormwater, soak holes and french drains. Free quotes, call 022 649 1618.",
  alternates: { canonical: "/services/trenching" },
};

export default function TrenchingPage() {
  return (
    <ServicePage
      jobType="Trenching & drainage"
      title="Trenching & Drainage"
      heading="Trenching & Drainage Napier & Hastings"
      subtitle="Service trenching and drainage solutions across Napier, Hastings and Hawke's Bay, completed safely, on time and with minimal disruption."
      image="/images/1-pdw.jpeg"
      imageAlt="Long service trench dug along a driveway with excavator bucket visible"
      description="Precision Digger Worx digs clean, accurate trenches for water, power, telecommunications and data cables, to the required depth and profile. We also sort out drainage problems, from stormwater drainage and soak holes to subsoil and french drains that move water away from your house, driveway or section. We work carefully around existing services and structures, locate services before we dig, and restore the surface on completion."
      bullets={[
        "Water and power service trenching",
        "Telecommunications and data cable trenching",
        "Stormwater drainage",
        "Soak holes",
        "Subsoil drains",
        "French drains",
        "Accurate depth, width and fall control",
        "Clean spoil management and surface restoration",
      ]}
      relatedServices={relatedServices(
        "/services/excavation",
        "/services/foundations",
        "/services/driveways",
        "/services/land-section-prep",
        "/services/digger-hire",
      )}
    />
  );
}
