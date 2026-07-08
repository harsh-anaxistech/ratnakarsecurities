import { SITE } from "./site";

/**
 * Base metadata for the site
 */
export const baseMetadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "stockbroker India",
    "equity trading",
    "derivatives trading",
    "mutual funds",
    "IPO investing",
    "SEBI registered broker",
    "portfolio management",
    "online trading platform",
    "stock market India",
    "bonds NCD investment",
    "Ratnakar Securities",
    "Mumbai stockbroker",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: `${SITE.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE.name} – ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    creator: SITE.twitter,
    images: [`${SITE.url}/og-image.png`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: SITE.url,
  },
};

/**
 * Generate page-level metadata with canonical URL
 */
export function generatePageMetadata({ title, description, path = "", image }) {
  const url = `${SITE.url}${path}`;
  const ogImage = image || `${SITE.url}/og-image.png`;

  return {
    title,
    description: description || SITE.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description: description || SITE.description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      title: `${title} | ${SITE.name}`,
      description: description || SITE.description,
      images: [ogImage],
    },
  };
}
