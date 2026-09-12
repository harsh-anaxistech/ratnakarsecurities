import React from "react";
import Link from "next/link";
import Container from "@/components/common/Container";
import {
  Briefcase,
  TrendingUp,
  FileText,
  HelpCircle,
  Shield,
  Calculator,
  ArrowRight,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export const metadata = {
  title: "HTML Site Map - Ratnakar Securities",
  description: "Complete structured site map of Ratnakar Securities Limited covering products, investor relations, research reports, calculators, and statutory disclosures.",
};

const SITEMAP_SECTIONS = [
  {
    title: "Main Navigation",
    icon: Briefcase,
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us & Branches", href: "/contact" },
      { label: "Partner With Us (Franchise / AP)", href: "/partner-with-us" },
      { label: "Downloads Center", href: "/downloads" },
    ],
  },
  {
    title: "Products & Services",
    icon: TrendingUp,
    links: [
      { label: "Products Overview", href: "/products/overview" },
      { label: "Equity Trading (BSE / NSE)", href: "/products/equity" },
      { label: "Derivatives (F&O)", href: "/products/derivatives" },
      { label: "Mutual Funds & SIPs", href: "/products/mutual-funds" },
      { label: "Commodities Trading (MCX)", href: "/products/commodities" },
      { label: "Wealth Management Services", href: "/products/wealth-management" },
      { label: "NRI Services & Investments", href: "/products/nris" },
      { label: "SLBM (Securities Lending & Borrowing)", href: "/products/slbm" },
      { label: "Bonds & NCDs", href: "/products/bonds" },
      { label: "HNI Wealth Solutions", href: "/products/hnis" },
    ],
  },
  {
    title: "Investor Relations & Disclosures",
    icon: Shield,
    links: [
      { label: "Investor Portal Overview", href: "/investors" },
      { label: "Board of Directors & Management", href: "/investors/board-of-directors" },
      { label: "Disclosure of Contact Details (KMP)", href: "/investors/disclosure-of-contact-details-of-key-managerial-personnel" },
      { label: "Statutory & Registration Documents", href: "/investors/statutory-and-registration-certificate-documents" },
      { label: "Company Policies & AML Surveillance", href: "/investors/policies" },
      { label: "Financial Information & Annual Reports", href: "/investors/financial-information-and-annual-report" },
      { label: "Annual Returns", href: "/investors/annual-return" },
      { label: "Shareholding Pattern", href: "/investors/shareholding-pattern" },
      { label: "Newspaper Publications", href: "/investors/newspaper-publication" },
      { label: "Disclosures of Material Events", href: "/investors/disclosures-of-material-events-or-information" },
      { label: "Complaints Trends", href: "/investors/complaints-trends" },
      { label: "Investor Grievance Redressal & Escalation", href: "/investor-grievance" },
      { label: "Investor Charter (Stock Broker)", href: "/investor-charter-stock-broker" },
    ],
  },
  {
    title: "Market Research & Analysis",
    icon: FileText,
    links: [
      { label: "Company Research Reports", href: "/research/company" },
      { label: "IPO Reports & Analysis", href: "/research/ipos" },
      { label: "Market News Updates", href: "/research/news" },
      { label: "Exchange & Corporate Announcements", href: "/research/announcements" },
    ],
  },
  {
    title: "Calculators & Financial Tools",
    icon: Calculator,
    links: [
      { label: "SIP Calculator", href: "/sip-calculator" },
      { label: "Investor Risk Profile Calculator", href: "/risk-calculator" },
    ],
  },
  {
    title: "Regulatory, Legal & Policies",
    icon: HelpCircle,
    links: [
      { label: "Digital Accessibility Statement", href: "/accessibility-statement" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Refund and Cancellation Policy", href: "/refund-and-cancellation" },
      { label: "Nomination Details", href: "/nomination" },
      { label: "SEBI SCORES Portal", href: "https://scores.sebi.gov.in", external: true },
      { label: "SEBI SMART ODR Portal", href: "https://smartodr.in", external: true },
    ],
  },
];

/**
 * Accessible HTML Site Map Page Component
 * 
 * Provides an exhaustive hierarchical index of all site pages:
 * - Products, Investor Relations, Research portals, Calculators, Legal & Compliance.
 * - Supports WCAG 2.2 AA (Multiple Ways 2.4.5) and GIGW 3.0 standards.
 */
export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16" style={{ backgroundColor: "#f8fafc" }}>
      <Container>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
            <li aria-current="page" className="text-slate-900 font-bold">Site Map</li>
          </ol>
        </nav>

        {/* Page Title & Intro */}
        <header className="mb-12 max-w-3xl">
          <span className="text-[#a7181e] font-bold text-xs uppercase tracking-widest block mb-2" style={{ color: "#a7181e" }}>
            Navigation Index
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#011628] mb-4" style={{ color: "#011628" }}>
            HTML Site Map
          </h1>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed" style={{ color: "#334155" }}>
            Welcome to the Ratnakar Securities Site Map. Use this page to quickly locate and navigate to all sections, investment products, research reports, investor documents, and regulatory disclosures available on our digital platform.
          </p>
        </header>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITEMAP_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <section
                key={section.title}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                style={{ backgroundColor: "#ffffff" }}
                aria-labelledby={`sitemap-section-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-secondary shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h2
                      id={`sitemap-section-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-lg font-bold text-[#012e54]"
                      style={{ color: "#012e54" }}
                    >
                      {section.title}
                    </h2>
                  </div>

                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.href + link.label}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between text-sm font-medium text-slate-700 hover:text-primary transition-colors py-1 px-1 rounded"
                          >
                            <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#a7181e] shrink-0" aria-label="(Opens in new tab)" />
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="group flex items-center justify-between text-sm font-medium text-slate-700 hover:text-primary transition-colors py-1 px-1 rounded"
                          >
                            <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-[#a7181e] group-hover:translate-x-1 transition-all shrink-0" aria-hidden="true" />
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
