
import Link from "next/link";

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
