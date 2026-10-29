import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import ServiceExtras from "@/components/ServiceExtras";
import { relatedServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demolition & Removal Napier & Hastings | Precision Digger Worx",
  description:
    "Small demolition across Hawke's Bay. Operated hire for sheds, garages, driveways and slabs, with rubble cart-away. Free quotes, call 022 649 1618.",
  alternates: { canonical: "/services/demolition" },
};

export default function DemolitionPage() {
  return (
    <ServicePage
      jobType="Demolition & removal"
      title="Demolition & Removal"
      heading="Demolition & Removal Napier & Hastings"
      subtitle="Small demolition with an operated digger. Sheds, garages, old driveways, paths and slabs broken out, carted away and the site left clean."
      image="/images/excavation2.jpeg"
      imageAlt="CAT excavator carrying out demolition and loading debris into a tip truck beside a house"
      description="Got an old shed, garage or cracked driveway that needs to go? Billy handles small demolition jobs from start to finish with an operated digger. We break out concrete paths, slabs and driveways, pull down small structures, load the rubble and spoil and cart it away. You're left with a clean, level site that's ready for the next stage, whether that's a new driveway, a build or a fresh lawn."
      bullets={[
        "Shed and garage demolition",
        "Old driveway removal",
        "Concrete path and slab removal",
        "Concrete breaking and removal",
        "Cart-away of rubble and spoil",
        "Careful work around houses, fences and services",
        "Site levelled and ready for the next stage",
        "Clean, tidy finish on completion",
      ]}
      relatedServices={relatedServices(
        "/services/driveways",
        "/services/land-section-prep",
        "/services/concrete-prep",
        "/services/excavation",
        "/services/digger-hire",
      )}
    >
      <ServiceExtras
        whyHeading="Why choose us for demolition"
        whyPoints={[
          {
            title: "One-stop job",
            text: "Breaking, loading and cart-away all handled by us, no juggling different contractors.",
          },
          {
            title: "Careful operator",
            text: "Billy works carefully around your house, fences, gardens and underground services.",
          },
          {
            title: "Ready for what's next",
            text: "We leave the site clean and level so your next project can start straight away.",
          },
        ]}
        faqHeading="Demolition questions"
        faqItems={[
          {
            q: "What size demolition jobs do you take on?",
            a: "We focus on small demolition with an operated digger, such as sheds, garages, old driveways, concrete paths and slabs. If you're unsure whether your job suits, give Billy a call and talk it through.",
          },
          {
            q: "Do you take away the rubble and concrete?",
            a: "Yes. We break out the concrete, load the rubble and spoil and cart it away, so you're left with a clean site.",
          },
          {
            q: "Can you prepare the site for a new driveway afterwards?",
            a: "Absolutely. Once the old driveway or slab is out, we can carry on with the excavation and base prep for the new one.",
          },
        ]}
      />
    </ServicePage>
  );
}
