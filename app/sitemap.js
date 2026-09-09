/**
 * Dynamic XML Sitemap Generator
 * 
 * Generates the dynamic `/sitemap.xml` for search engine discovery:
 * - Assigns crawl frequency and ranking priorities to top-level public pages.
 * 
 * @returns {import('next').MetadataRoute.Sitemap}
 */
import { SITE } from "@/constants/site";

export default function sitemap() {
  const baseUrl = SITE.url;
  const now = new Date();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return staticPages;
}
