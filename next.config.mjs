import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Next.js Framework Configuration
 * 
 * Configures:
 * - Image optimization formats (AVIF, WebP) and remote host whitelist (Unsplash, UI Avatars, Ratnakar API, Localhost).
 * - Content Security Policy (CSP) headers (upgrade-insecure-requests).
 * - 301 Permanent Redirects preserving SEO equity from legacy .aspx URLs.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "api.ratnakarsecurities.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "upgrade-insecure-requests",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/partner",
        destination: "/partner-with-us",
        permanent: true,
      },
      {
        source: "/static/investor-charter.aspx",
        destination: "/static/investor-charter",
        permanent: true,
      },
      {
        source: "/static/contact-us.aspx",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us.aspx",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/products/products.aspx",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/about.aspx",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/downloads.aspx",
        destination: "/downloads",
        permanent: true,
      },
      {
        source: "/investors.aspx",
        destination: "/investors",
        permanent: true,
      },
    ];
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
