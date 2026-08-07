import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Downloads - Trading Forms & Documents | Ratnakar Securities",
  description: "Download trading account opening forms, Demat forms, statutory documents, policies, and guidelines from Ratnakar Securities.",
  path: "/downloads",
});

export default function DownloadsLayout({ children }) {
  return children;
}
