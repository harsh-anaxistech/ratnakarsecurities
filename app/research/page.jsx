import Link from "next/link";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Research Reports | Stock Market Insights & IPO Analysis | Ratnakar Securities",
  description:
    "Access expert stock market research reports, company analysis, IPO reviews, investment insights, and market updates from Ratnakar Securities to make informed investment decisions.",
  path: "/research",
});
export default function ResearchLanding() {
  return (
    <>

      <div className="p-8">
        <p className="text-lg mb-4">
          Explore our research sections below. Click a section to view detailed reports.
        </p>
        <ul className="list-disc ml-6">
          <li>
            <Link href="/research/company" className="text-blue-600 hover:underline">
              Company Research
            </Link>
          </li>
          <li>
            <Link href="/research/ipos" className="text-blue-600 hover:underline">
              IPO Research
            </Link>
          </li>
          <li>
            <Link href="/research/news" className="text-blue-600 hover:underline">
              News & Updates
            </Link>
          </li>
          <li>
            <Link href="/research/announcements" className="text-blue-600 hover:underline">
              Announcements
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
