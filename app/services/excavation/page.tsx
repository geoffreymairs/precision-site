import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { relatedServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Excavation Napier & Hastings | Precision Digger Worx",
  description:
    "Residential excavation across Hawke's Bay. House sites, foundations, retaining wall digs and earthworks with operated hire. Free quotes, call 022 649 1618.",
  alternates: { canonical: "/services/excavation" },
};

export default function ExcavationPage() {
  return (
    <ServicePage
      jobType="Residential excavation"
      title="Residential Excavation"
      heading="Residential Excavation Napier & Hastings"
      subtitle="Excavation for house sites, foundations, retaining walls and residential earthworks across Napier, Hastings and the wider Bay."
      image="/images/excavation1.jpeg"
      imageAlt="CAT and Yanmar excavators carrying out residential excavation in front of a villa on Napier Hill"
      description="Precision Digger Worx handles residential excavation for homeowners, builders and engineers across Hawke's Bay. From digging out a new house site and foundations to excavating for retaining walls and general residential earthworks, Billy brings the right machine and years of experience so the job is done accurately with no wasted digging. We cart away spoil or reuse it on site, work carefully around existing homes and services, and keep you updated the whole way."
      bullets={[
        "House site excavation for new builds",
        "Foundation and footing excavation",
        "Retaining wall digs",
        "Residential earthworks, cut and fill",
        "Levelling and building platforms",
        "Spoil removal or on-site redistribution",
        "Tight or tricky access sites",
        "Working alongside builders and engineers",
      ]}
      relatedServices={relatedServices(
        "/services/foundations",
        "/services/land-section-prep",
        "/services/pool-digouts",
        "/services/trenching",
        "/services/digger-hire",
      )}
    />
  );
}
