import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Landscaping Services | Precision Digger Worx — Hawke's Bay",
  description:
    "Professional landscaping services across Napier, Hastings and Hawke's Bay. Garden terracing, retaining, site clearing and full transformations.",
};

const related = [
  { label: "Residential Backyard Work", href: "/services/backyard-work" },
  { label: "Driveways", href: "/services/driveways" },
  { label: "General Excavations", href: "/services/excavation" },
  { label: "Stump Removal", href: "/services/stump-removal" },
];

export default function LandscapingPage() {
  return (
    <ServicePage
      title="Landscaping"
      subtitle="Full outdoor transformations across Napier, Hastings, and the Hawke's Bay region — from garden reshaping to terracing and retaining."
      image="/images/136765321_257505979131328_8465862777364736343_n.jpg"
      imageAlt="Landscaped terraced garden steps with agapanthus in Hawke's Bay"
      description="Our landscaping team brings deep knowledge of local soil conditions, terrain, and climate across Hawke's Bay. Whether you're looking to reshape your garden, create terraced areas on a slope, or completely transform your outdoor space, we have the machinery and experience to get it done precisely and efficiently. Every project is tailored to the specific needs of your property and finished to a high standard — with a full site cleanup on completion."
      bullets={[
        "Garden design and full reshaping",
        "Terracing and slope management",
        "Retaining wall excavation and preparation",
        "Garden bed clearing and soil preparation",
        "Site clearing and vegetation removal",
        "Planting area preparation",
        "Topsoil supply and spreading",
        "Full site cleanup on completion",
      ]}
      relatedServices={related}
    />
  );
}
