import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import ServiceExtras from "@/components/ServiceExtras";
import { relatedServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Land & Section Prep Napier & Hastings | Precision Digger Worx",
  description:
    "Section clearing, levelling and building platforms across Hawke's Bay. Operated hire for new builds and lifestyle blocks. Free quotes, call 022 649 1618.",
  alternates: { canonical: "/services/land-section-prep" },
};

export default function LandSectionPrepPage() {
  return (
    <ServicePage
      jobType="Land & section prep"
      title="Land & Section Prep"
      heading="Land & Section Prep Napier & Hastings"
      subtitle="Section clearing, site levelling and building platforms for new builds and lifestyle blocks across Hawke's Bay."
      image="/images/IMG20240924151517-scaled.jpg"
      imageAlt="CAT mini excavator levelling a rural section with Hawke's Bay hills in the background"
      description="Every good build starts with a well-prepared section. Billy clears vegetation and spoil, levels the site and forms building platforms to the levels your builder or engineer needs. Whether it's a new subdivision section in town or a lifestyle block out in the country, we get the ground ready so your build can get underway without delays. We cart away unwanted material or reuse it on site where it makes sense."
      bullets={[
        "Section clearing and vegetation removal",
        "Site levelling and grading",
        "Building platforms for new builds",
        "Site preparation for lifestyle blocks",
        "Cut and fill to required levels",
        "Spoil removal or on-site redistribution",
        "Access tracks and site entrances",
        "Tidy, ready-to-build finish",
      ]}
      relatedServices={relatedServices(
        "/services/excavation",
        "/services/foundations",
        "/services/demolition",
        "/services/driveways",
        "/services/digger-hire",
      )}
    >
      <ServiceExtras
        whyHeading="Why choose us for section prep"
        whyPoints={[
          {
            title: "Built to level",
            text: "Platforms and levels formed accurately to your builder's or engineer's plans.",
          },
          {
            title: "Local knowledge",
            text: "We know Hawke's Bay soils and terrain, from town sections to rural lifestyle blocks.",
          },
          {
            title: "Ready on time",
            text: "Clear communication and a site ready when your builder needs it.",
          },
        ]}
        faqHeading="Section prep questions"
        faqItems={[
          {
            q: "Can you clear an overgrown section?",
            a: "Yes. We clear vegetation, rubbish and spoil, then level the site ready for the next stage. Green waste and spoil can be carted away.",
          },
          {
            q: "Do you form building platforms?",
            a: "We do. We'll work to the levels on your plans and liaise with your builder or engineer so the platform is right first time.",
          },
          {
            q: "Do you work on lifestyle blocks?",
            a: "Absolutely. We prepare house sites, sheds, access tracks and more on lifestyle blocks across Hawke's Bay.",
          },
        ]}
      />
    </ServicePage>
  );
}
