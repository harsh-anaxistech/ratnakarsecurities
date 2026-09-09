/**
 * Dynamic robots.txt Generator
 * 
 * Configures search engine web crawler indexing rules and links the canonical XML sitemap.
 * 
 * @returns {import('next').MetadataRoute.Robots}
 */
import { SITE } from "@/constants/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
