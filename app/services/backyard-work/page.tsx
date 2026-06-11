import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Residential Backyard Work | Precision Digger Worx — Hawke's Bay",
  description:
    "Full residential backyard transformations across Napier, Hastings and Hawke's Bay. Excavation, grading, steps, paths, and retaining.",
};

const related = [
  { label: "Landscaping", href: "/services/landscaping" },
  { label: "Driveways", href: "/services/driveways" },
  { label: "Stump Removal", href: "/services/stump-removal" },
  { label: "Auger Work", href: "/services/auger-work" },
];

export default function BackyardWorkPage() {
  return (
    <ServicePage
      title="Residential Backyard Work"
      subtitle="Full backyard transformations for Hawke's Bay homeowners — from simple grading and levelling to steps, retaining, and complete redesigns."
      image="/images/1000009720.jpg"
      imageAlt="CAT mini excavator working on residential backyard steps and gravel path with rock edging"
      description="Your backyard should work for you. Whether it's overgrown and uneven, or you simply want to unlock its potential with better levels, steps, and paths, Precision Digger Worx can help you get there. We work with homeowners across Napier, Hastings, and surrounding areas to understand what they want to achieve and deliver it professionally. We use a compact mini excavator that accesses tight residential spaces without causing damage to the surrounding area."
      bullets={[
        "Ground levelling and grading",
        "Steps and terracing construction",
        "Retaining wall excavation and preparation",
        "Gravel paths and outdoor areas",
        "Rock placement and garden edging",
        "Lawn preparation and topsoil spreading",
        "Access track and small driveway work",
        "Full cleanup and rubbish removal",
      ]}
      relatedServices={related}
    />
  );
}
