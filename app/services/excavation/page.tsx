import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Earthmoving & Excavation Hawke's Bay | Precision Digger Worx",
  description:
    "Earthmoving, earthworks and excavation across Napier, Hastings and Hawke's Bay. Site cuts, cut and fill, levelling and spoil removal with an experienced local operator.",
};

const related = [
  { label: "Operated Digger Hire", href: "/services/digger-hire" },
  { label: "Foundations", href: "/services/foundations" },
  { label: "Service Trenching", href: "/services/trenching" },
  { label: "Concrete Preparation", href: "/services/concrete-prep" },
  { label: "Driveways", href: "/services/driveways" },
];

export default function ExcavationPage() {
  return (
    <ServicePage
      jobType="Earthmoving & excavation"
      title="Earthmoving & Excavation"
      heading="Earthmoving & Excavation in Hawke's Bay"
      subtitle="Earthmoving and earthworks for homes, lifestyle blocks and light commercial sites across Napier, Hastings and the wider Bay. Any size job, done right."
      image="/images/IMG20240924151517-scaled.jpg"
      imageAlt="CAT mini excavator on a large earthworks site with Hawke's Bay hills in the background"
      description="From a small backyard cut to bulk earthworks on a rural block, Precision Digger Worx handles earthmoving and excavation jobs of all sizes. Billy brings the right machine and years of experience, so the earthworks are done efficiently with no wasted digging. We cart away spoil or redistribute it on site, sort out access and keep you updated the whole way. Not sure if we can help? Just give us a call and talk it through."
      bullets={[
        "Site excavation and earthworks for new builds",
        "Bulk earthmoving, cut and fill",
        "Pond and dam excavation",
        "Levelling and building platforms",
        "Spoil removal or on-site redistribution",
        "Rural and lifestyle block earthworks",
        "Tight or tricky access sites",
        "Residential and light commercial earthmoving",
      ]}
      relatedServices={related}
    />
  );
}
