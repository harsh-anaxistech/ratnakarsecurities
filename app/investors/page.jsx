import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Investor Relations & Compliance | Ratnakar Securities",
  description: "Access corporate policies, financial reports, disclosures, and investor relations documents for Ratnakar Securities Limited.",
  path: "/investors",
});

export default function Page() {
  return (
    <div className="py-20 flex items-center justify-center">
      <h1 className="text-4xl font-bold">Investors</h1>
    </div>
  );
}
