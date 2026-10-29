export const PHONE_DISPLAY = "022 649 1618";
export const PHONE_TEL = "tel:0226491618";
export const EMAIL = "precisiondiggerworx@gmail.com";
export const SITE_URL = "https://www.precisiondiggerworx.com";

// [REPLACE] with the real Google Business Profile URL
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Precision+Digger+Worx";

export const navServices = [
  { label: "Driveway Prep", href: "/services/driveways" },
  { label: "Residential Excavation", href: "/services/excavation" },
  { label: "Land & Section Prep", href: "/services/land-section-prep" },
  { label: "Pool Digouts", href: "/services/pool-digouts" },
  { label: "Demolition & Removal", href: "/services/demolition" },
  { label: "Trenching & Drainage", href: "/services/trenching" },
  { label: "Foundations", href: "/services/foundations" },
  { label: "Concrete Preparation", href: "/services/concrete-prep" },
  { label: "Auger Work", href: "/services/auger-work" },
];

export function relatedServices(...hrefs: string[]) {
  return hrefs
    .map((href) => navServices.find((s) => s.href === href))
    .filter((s): s is (typeof navServices)[number] => Boolean(s));
}

export const jobTypes = [
  "Driveway prep",
  "Residential excavation",
  "Land & section prep",
  "Pool digouts",
  "Demolition & removal",
  "Trenching & drainage",
  "Foundations",
  "Concrete preparation",
  "Auger work",
  "Not sure / something else",
] as const;

// Unlisted job types are only offered on their own page (e.g. /services/digger-hire, which is kept out of navigation).
export const unlistedJobTypes = ["Operated digger hire"] as const;

export type JobType = (typeof jobTypes)[number] | (typeof unlistedJobTypes)[number];

export const serviceAreas = [
  "Napier",
  "Hastings",
  "Taradale",
  "Havelock North",
  "Clive",
  "Bay View",
  "Puketapu",
  "Meeanee",
  "Greenmeadows",
  "Ahuriri",
  "Flaxmere",
  "Haumoana",
  "Te Awanga",
  "Eskdale",
  "Bridge Pa",
  "Pakipaki",
];
