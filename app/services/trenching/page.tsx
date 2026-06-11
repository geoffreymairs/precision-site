import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Trenching Services | Precision Digger Worx — Hawke's Bay",
  description:
    "Expert service trenching for water, gas, electricity and stormwater across Napier, Hastings and Hawke's Bay.",
};

const related = [
  { label: "Foundations", href: "/services/foundations" },
  { label: "Concrete Preparation", href: "/services/concrete-prep" },
  { label: "General Excavations", href: "/services/excavation" },
  { label: "Driveways", href: "/services/driveways" },
];

export default function TrenchingPage() {
  return (
    <ServicePage
      title="Service Trenching"
      subtitle="Precision trenching for utilities and drainage across Napier, Hastings, and the Hawke's Bay region — completed safely, on time, and with minimal disruption."
      image="/images/1-pdw.jpeg"
      imageAlt="Long service trench dug along driveway with excavator bucket visible"
      description="Precision Digger Worx specialises in service trenching for residential, rural, and light commercial projects throughout Hawke's Bay. Whether you need a trench for water, gas, electricity, telecommunications, or stormwater, we dig clean, accurate trenches to the required depth and profile. We work carefully around existing services and structures, and restore the surface on completion. Safety is non-negotiable — we follow all relevant standards and mark or locate services before we dig."
      bullets={[
        "Water, gas, and electricity service trenching",
        "Telecommunications and data cable trenching",
        "Stormwater and drainage trenching",
        "General purpose agricultural trenching",
        "Accurate depth and width control",
        "Safe working around existing services",
        "Clean spoil management and removal",
        "Surface restoration on completion",
      ]}
      relatedServices={related}
    />
  );
}
