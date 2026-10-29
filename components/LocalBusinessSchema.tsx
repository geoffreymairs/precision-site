import { EMAIL, SITE_URL, serviceAreas } from "@/lib/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Precision Digger Worx",
  url: SITE_URL,
  logo: `${SITE_URL}/images/cropped-512.png`,
  image: `${SITE_URL}/images/IMG20240924151517-scaled.jpg`,
  telephone: "+64226491618",
  email: EMAIL,
  foundingDate: "2020",
  priceRange: "$$",
  description:
    "Operated digger hire, earthmoving, excavation, trenching, driveways and site prep across Napier, Hastings and Hawke's Bay.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dartmoor Road",
    addressLocality: "Puketapu",
    addressRegion: "Hawke's Bay",
    postalCode: "4186",
    addressCountry: "NZ",
  },
  areaServed: [...serviceAreas, "Hawke's Bay"].map((name) => ({ "@type": "Place", name })),
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
