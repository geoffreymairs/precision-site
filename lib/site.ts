export const PHONE_DISPLAY = "022 649 1618";
export const PHONE_TEL = "tel:0226491618";
export const EMAIL = "precisiondiggerworx@gmail.com";
export const SITE_URL = "https://www.precisiondiggerworx.com";

// [REPLACE] with the real Google Business Profile URL
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Precision+Digger+Worx";

export const navServices = [
  { label: "Operated Digger Hire", href: "/services/digger-hire" },
  { label: "Service Trenching", href: "/services/trenching" },
  { label: "Driveways", href: "/services/driveways" },
  { label: "Foundations", href: "/services/foundations" },
  { label: "Concrete Preparation", href: "/services/concrete-prep" },
  { label: "Auger Work", href: "/services/auger-work" },
  { label: "Stump Removal", href: "/services/stump-removal" },
  { label: "Backyard Work", href: "/services/backyard-work" },
  { label: "Earthmoving & Excavation", href: "/services/excavation" },
];

export const jobTypes = [
  "Operated digger hire",
  "Earthmoving & excavation",
  "Service trenching",
  "Driveways",
  "Foundations",
  "Concrete preparation",
  "Auger / post hole drilling",
  "Stump & green waste removal",
  "Backyard work",
  "Landscaping",
  "Topsoil",
  "Not sure / something else",
] as const;

export type JobType = (typeof jobTypes)[number];

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
