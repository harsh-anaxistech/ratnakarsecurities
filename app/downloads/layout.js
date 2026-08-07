import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Downloads | Trading Forms, Demat Forms & Documents | Ratnakar Securities",
  description:
    "Download trading account opening forms, Demat account forms, KYC documents, policies, disclosures, and other important resources from Ratnakar Securities.",
  path: "/downloads",
});

export default function DownloadsLayout({ children }) {
  return children;
}
