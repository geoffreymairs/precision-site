import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import ServiceExtras from "@/components/ServiceExtras";
import { relatedServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pool Digouts Napier & Hastings | Precision Digger Worx",
  description:
    "Pool digouts across Hawke's Bay. Operated hire for in-ground and plunge pool excavation, dug accurately to plan. Free quotes, call 022 649 1618.",
  alternates: { canonical: "/services/pool-digouts" },
};

export default function PoolDigoutsPage() {
  return (
    <ServicePage
      jobType="Pool digouts"
      title="Pool Digouts"
      heading="Pool Digouts Napier & Hastings"
      subtitle="In-ground and plunge pool excavation for homeowners and pool builders across Hawke's Bay. Dug accurately to plan and left tidy for the next trade."
      image="/images/excavation7.jpeg"
      imageAlt="Excavated pit with a Yanmar excavator working below and a CAT excavator above"
      description="A pool is only as good as the hole it sits in. Billy digs in-ground and plunge pools to the exact shape, depth and levels on your plans, so your pool builder can get straight to work. We work directly with homeowners or alongside pool companies, fit in with their schedule and keep the site safe and tidy throughout. Spoil can be carted away or spread and levelled on site, whatever suits your section."
      bullets={[
        "In-ground pool excavation",
        "Plunge pool and spa digouts",
        "Accurate digs to plan, depth and levels",
        "Working alongside pool builders and installers",
        "Tight-access backyards and sloping sites",
        "Spoil removal or spreading on site",
        "Base levelling ready for the pool shell",
        "Tidy cleanup on completion",
      ]}
      relatedServices={relatedServices(
        "/services/excavation",
        "/services/trenching",
        "/services/concrete-prep",
        "/services/demolition",
      )}
    >
      <ServiceExtras
        whyHeading="Why pool builders and homeowners call Billy"
        whyPoints={[
          {
            title: "Dug to plan",
            text: "Shape, depth and levels checked as we go, so the pool shell or formwork drops in without surprises.",
          },
          {
            title: "Easy to work with",
            text: "We coordinate with your pool company and fit in with their install dates.",
          },
          {
            title: "Spoil sorted",
            text: "We cart spoil away or spread and level it on site, and leave the area tidy.",
          },
        ]}
        faqHeading="Pool digout questions"
        faqItems={[
          {
            q: "Do you work with pool companies?",
            a: "Yes. We regularly dig for pool builders and installers, and we're happy to work from their plans and schedule. Homeowners can also book us directly and we'll coordinate with your pool company.",
          },
          {
            q: "What happens to the soil from the pool dig?",
            a: "We can cart it away, or spread and level it elsewhere on your section if you'd like to keep it. Let us know when you ask for a quote and we'll include it.",
          },
          {
            q: "Can you dig a pool in a small backyard?",
            a: "Usually, yes. We have machines that suit tighter access. Send us a few photos of the access or call Billy and he'll let you know what's possible.",
          },
        ]}
      />
    </ServicePage>
  );
}
