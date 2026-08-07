import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Investor Relations | Compliance, Disclosures & Corporate Policies | Ratnakar Securities",
  description:
    "Explore investor relations information, corporate governance, compliance documents, financial disclosures, policies, and regulatory updates from Ratnakar Securities.",
  path: "/investors",
});

export default function Page() {
  return (
    <div className="py-20 flex items-center justify-center">
      <h1 className="text-4xl font-bold">Investors</h1>
    </div>
  );
}
