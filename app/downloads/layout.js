import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Downloads | Trading Forms, Demat Forms & Documents | Ratnakar Securities",
  description:
    "Download trading account opening forms, Demat account forms, KYC documents, policies, disclosures, and other important resources from Ratnakar Securities.",
  path: "/downloads",
});

/**
 * Downloads Section Layout
 * 
 * Exports canonical SEO metadata for the downloads resource center.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function DownloadsLayout({ children }) {
  return children;
}
