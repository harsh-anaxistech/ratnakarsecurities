import { SITE } from "@/constants/site";

/**
 * JSON-LD structured data for Organization schema
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.description,
    foundingDate: String(SITE.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      `https://linkedin.com/company/${SITE.linkedin}`,
      `https://twitter.com/${SITE.twitter.replace("@", "")}`,
      `https://facebook.com/${SITE.facebook}`,
    ],
  };
}

/**
 * JSON-LD structured data for WebSite schema (enables sitelinks searchbox)
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
