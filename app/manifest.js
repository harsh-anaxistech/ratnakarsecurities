/**
 * Web Application Manifest Generator
 * 
 * Generates the dynamic `/manifest.webmanifest` configuration for Progressive Web App (PWA) installation:
 * - Application branding (name, icons, theme colors).
 * - Standalone display mode and Indian English locale configuration.
 * 
 * @returns {import('next').MetadataRoute.Manifest}
 */
import { SITE } from "@/constants/site";

export default function manifest() {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ea2830",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["finance", "business"],
    lang: "en-IN",
  };
}
