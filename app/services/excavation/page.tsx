import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "General Excavations | Precision Digger Worx — Hawke's Bay",
  description:
    "General excavation and bulk earthworks across Napier, Hastings and Hawke's Bay. Residential, rural, and light commercial.",
};

const related = [
  { label: "Foundations", href: "/services/foundations" },
  { label: "Service Trenching", href: "/services/trenching" },
  { label: "Concrete Preparation", href: "/services/concrete-prep" },
  { label: "Driveways", href: "/services/driveways" },
];

export default function ExcavationPage() {
  return (
    <ServicePage
      title="General Excavations"
      subtitle="Residential, rural, and light commercial excavation across Napier, Hastings, and the Hawke's Bay region — any scale, done right."
      image="/images/IMG20240924151517-scaled.jpg"
      imageAlt="CAT mini excavator on large earthworks site with Hawke's Bay hills in the background"
      description="Precision Digger Worx handles general excavation jobs of all sizes across Hawke's Bay. From small residential cuts to large-scale bulk earthworks, we bring the right machine and the right experience. Our operator has an eye for efficient earthmoving — minimising excess work while achieving the correct result. We haul spoil as needed, manage site access, and deliver projects on time. If you're not sure whether we can help, just call — we're happy to discuss your project."
      bullets={[
        "Site excavation for new builds",
        "Bulk earthworks and cut and fill",
        "Pond and dam excavation",
        "Levelling and platform creation",
        "Spoil removal and on-site redistribution",
        "Rural and lifestyle block earthworks",
        "Access to tight or difficult sites",
        "Residential and light commercial projects",
      ]}
      relatedServices={related}
    />
  );
}
