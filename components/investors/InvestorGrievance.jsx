"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  AlertCircle,
  ExternalLink,
  Mail,
  Phone,
  Building2,
  FileText,
  Download,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  Scale,
  Clock,
  Search,
  FileCheck2,
  Send,
  UserCheck,
  Smartphone,
  Bell,
  ArrowLeft,
  Copy,
  Check
} from "lucide-react";
import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";

// Downloadable reports data extracted from NSDL Investor Grievance
const REPORTS_DATA = [
  {
    id: "nsdl-july-2026",
    title: "Disclosure of complaints against National Securities Depository Limited (NSDL) for July 2026",
    category: "Complaints against NSDL",
    updatedDate: "07-August-2026",
    fileUrl: "https://nsdl.com/nsdl/2026-08/Disclosure%20of%20complaints%20aganist%20NSDL_July%202026.xlsx",
    fileType: "XLSX",
  },
  {
    id: "nsdl-june-2026",
    title: "Disclosure of complaints against National Securities Depository Limited (NSDL)",
    category: "Complaints against NSDL",
    updatedDate: "07-July-2026",
    fileUrl: "https://nsdl.com/nsdl/2026-07/Report%203A.xlsx",
    fileType: "XLSX",
  },
  {
    id: "penal-3a-2025-26",
    title: "Report 3A : Penal Actions against Depository Participants (DPs) during 2025-26 (01/04/2025 to 31/03/2026)",
    category: "Penal Actions against DPs",
    updatedDate: "July 1, 2026",
    fileUrl: "https://nsdl.com/nsdl/2026-07/Report%203A.xlsx",
    fileType: "XLSX",
  },
  {
    id: "penal-3b-2026-27",
    title: "Report 3B : Penal Actions against Depository Participants (DPs) during 2026-27 (01/04/2026 to 30/06/2026)",
    category: "Penal Actions against DPs",
    updatedDate: "July 1, 2026",
    fileUrl: "https://nsdl.com/nsdl/2026-07/Report%203B_0.xlsx",
    fileType: "XLSX",
  },
  {
    id: "penal-inspection-2026",
    title: "Disclosure on action taken against Depository Participants pursuant to Inspection",
    category: "Penal Actions against DPs",
    updatedDate: "August 12, 2026",
    fileUrl: "https://nsdl.com/nsdl/2026-08/Action_taken_against_DPs_pursuant_to_Inspections_updated_as_on_August%2012_2026.xls",
    fileType: "XLS",
  },
  {
    id: "enforcement-action-2023",
    title: "Enforcement action taken by NSDL against Depository Participants for non-compliances",
    category: "Penal Actions against DPs",
    updatedDate: "04 October 2023",
    fileUrl: "https://nsdl.com/nsdl/2024-12/Enforcement_action_taken_by_NSDL_against_Depository_Participants_for_non-compliances_Oct042023.xlsx",
    fileType: "XLSX",
  },
  {
    id: "arbitration-2b-2023-24",
    title: "Report 2B : Details of Arbitration Proceedings (where BO is a party) during 2023-24 (01/04/2023 to 31/03/2024)",
    category: "Details of Arbitration",
    updatedDate: "April 2, 2024",
    fileUrl: "https://nsdl.com/nsdl/2024-12/Report-2B.xlsx",
    fileType: "XLSX",
  },
  {
    id: "arbitration-2a-2023-24",
    title: "Report 2A : Details of Arbitration Proceedings (where BO is a party) during 2023-24 (01/04/2023 to 31/08/2023)",
    category: "Details of Arbitration",
    updatedDate: "April 1, 2025",
    fileUrl: "https://nsdl.com/nsdl/2026-07/Report-2A.xlsx",
    fileType: "XLSX",
  },
  {
    id: "complaints-1a-2026-27",
    title: "Report 1A: Complaints received against Depository Participants (DPs) during 2026-27",
    category: "Investor Complaints & Redressal",
    updatedDate: "August 14, 2026",
    fileUrl: "https://nsdl.com/nsdl/2026-08/Report%201A%20as%20on%2014%20aug%202026.xlsx",
    fileType: "XLSX",
  },
  {
    id: "complaint-types-status",
    title: "Type of Complaint & Status (ICAD Analysis)",
    category: "Investor Complaints & Redressal",
    updatedDate: "December 2024",
    fileUrl: "https://nsdl.com/nsdl/2024-12/type-of-complaints-status-icad.xls",
    fileType: "XLS",
  },
  {
    id: "redressal-4a-2025-26",
    title: "Report 4A : Redressal of Complaints lodged by investors against Listed Companies during 2025-26 (01/04/2025 to 31/03/2026)",
    category: "Investor Complaints & Redressal",
    updatedDate: "July 1, 2026",
    fileUrl: "https://nsdl.com/nsdl/2026-07/Report%204A_0.xlsx",
    fileType: "XLSX",
  },
  {
    id: "redressal-4b-2026-27",
    title: "Report 4B : Redressal of Complaints lodged by investors against Listed Companies during 2026-27 (01/04/2026 to 30/06/2026)",
    category: "Investor Complaints & Redressal",
    updatedDate: "July 1, 2026",
    fileUrl: "https://nsdl.com/nsdl/2026-07/Report%204B_0.xlsx",
    fileType: "XLSX",
  },
  {
    id: "redressal-1b-2025-26",
    title: "Report 1B : Redressal of Complaints received against Depository Participants (DPs) during 2025-26 (01/04/2025 to 31/03/2026)",
    category: "Investor Complaints & Redressal",
    updatedDate: "July 1, 2026",
    fileUrl: "https://nsdl.com/nsdl/2026-07/Report%201B_0.xlsx",
    fileType: "XLSX",
  },
  {
    id: "redressal-1c-2026-27",
    title: "Report 1C : Redressal of Complaints received against Depository Participants (DPs) during 2026-27 (01/04/2026 to 30/06/2026)",
    category: "Investor Complaints & Redressal",
    updatedDate: "July 1, 2026",
    fileUrl: "https://nsdl.com/nsdl/2026-07/Report%201C_0.xlsx",
    fileType: "XLSX",
  },
];

const GRC_STEPS = [
  {
    step: 1,
    title: "Log in to Investor's Grievance Portal",
    description: "Visit the NSDL Grievance Redressal Portal using your authorized login credentials.",
  },
  {
    step: 2,
    title: "Select GRC Option",
    description: "Click on the GRC tab at the top of the portal page and select 'Raise Complaint'.",
  },
  {
    step: 3,
    title: "Read & Acknowledge Disclaimer",
    description: "Carefully read the disclaimer terms and click 'Yes' at the bottom of the page to proceed.",
  },
  {
    step: 4,
    title: "Fill Contact & Grievance Details",
    description: "Complete all applicant details, DP information, and specify the grievance category.",
  },
  {
    step: 5,
    title: "Add Previous Complaint Reference",
    description: "Provide your earlier complaint reference number (ensure the reference number is not older than 30 days).",
  },
  {
    step: 6,
    title: "Upload Supporting Documents",
    description: "Attach relevant transaction records, correspondence, and evidence required for GRC assessment.",
  },
  {
    step: 7,
    title: "Save & Generate Reference Number",
    description: "Verify all fields and click 'Save'. A unique reference number will be generated and emailed to you.",
  },
  {
    step: 8,
    title: "Review & Track Status",
    description: "Monitor real-time progress and updates directly via your dashboard profile on the portal.",
  },
];

const ARBITRATION_STEPS = [
  {
    step: 1,
    title: "Log in to Grievance Portal",
    description: "Access your account on the NSDL Investor Grievance Portal.",
  },
  {
    step: 2,
    title: "Initiate Arbitration Request",
    description: "Click on the Arbitration tab at the top of the page and select 'Raise Arbitration'.",
  },
  {
    step: 3,
    title: "Acknowledge Arbitration Terms",
    description: "Read the statutory arbitration terms and conditions and select 'Yes' to accept.",
  },
  {
    step: 4,
    title: "Select Respondent Type",
    description: "In the drop-down menu, select 'Arbitration with Respondent' and mark 'Yes'.",
  },
  {
    step: 5,
    title: "Link GRC Reference Number",
    description: "Acknowledge prior GRC review by entering your existing GRC Reference Number.",
  },
  {
    step: 6,
    title: "Upload Evidence & Declaration",
    description: "Upload necessary statement of claims, contract notes, and select 'Yes' on the declaration form.",
  },
  {
    step: 7,
    title: "Submit & Track Proceedings",
    description: "Click 'Save' to formally file the arbitration reference (concluded with an award within 4 months).",
  },
];

export default function InvestorGrievance() {
  const [activeGuideTab, setActiveGuideTab] = useState("grc"); // "grc" | "arbitration"
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(""), 2000);
  };

  const categories = ["All", "Complaints against NSDL", "Penal Actions against DPs", "Details of Arbitration", "Investor Complaints & Redressal"];

  const filteredReports = REPORTS_DATA.filter((report) => {
    const matchesCategory = selectedCategory === "All" || report.category === selectedCategory;
    const matchesSearch =
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.updatedDate.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-16">
      {/* Banner Section */}
      <HeroSection
        title="Investor Grievance"
        breadcrumbs={[
          { label: "Investors", href: "/investors" },
          { label: "Investor Grievance" },
        ]}
        image="/images/about/our product 1.jpg"
        mobileImage="/images/about/mobile banner/investor mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      <Container className="mt-10 sm:mt-12">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

          {/* Quick Info & Breadcrumb Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Link
                href="/"
                className="inline-flex items-center font-semibold text-[#00aeee] hover:text-[#012e54] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" /> Home
              </Link>
              <span>/</span>
              <Link href="/investors" className="hover:text-slate-900 transition-colors font-medium">
                Investors
              </Link>
              <span>/</span>
              <span className="font-semibold text-slate-800">Investor Grievance</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold bg-[#011628] text-[#00aeee] px-3.5 py-1.5 rounded-full shadow-xs border border-[#00aeee]/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00aeee]" /> NSDL & SEBI Redressal Framework
              </span>
            </div>
          </div>

          {/* Top Quick Escalation Cards (4 Channels) */}
          <div>
            <div className="text-center mb-8">
              <span className="text-xs font-black tracking-widest uppercase text-[#ea2830] mb-2 block">
                Direct Redressal Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#011628]">
                Lodge & Escalate Investor Grievances
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-2">
                Fast, secure and structured portals to lodge, track, and resolve queries and disputes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: NSDL Portal */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#1a6eb5]" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1a6eb5]/10 text-[#1a6eb5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Send className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">
                    NSDL Grievance Portal
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Direct online lodging of complaints with ticket generation & real-time audit trail.
                  </p>
                </div>
                <a
                  href="https://investor.nsdl.com/portal/en/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#1a6eb5] hover:bg-[#011628] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                >
                  <span>Post to NSDL</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Card 2: Designated Email */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00aeee]" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00aeee]/10 text-[#0088c2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">
                    Designated Grievance Email
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Write directly to NSDL or Ratnakar Securities designated grievance desks.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-slate-50 border border-slate-200/60 rounded-lg p-2 text-xs">
                    <span className="font-mono text-slate-700 font-semibold truncate">relations@nsdl.com</span>
                    <button
                      onClick={() => copyToClipboard("relations@nsdl.com")}
                      className="text-slate-400 hover:text-[#1a6eb5] p-1 cursor-pointer"
                      title="Copy email"
                    >
                      {copiedEmail === "relations@nsdl.com" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <a
                    href="mailto:relations@nsdl.com"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg transition-colors"
                  >
                    <span>Send Email</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Card 3: SEBI SCORES 2.0 */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#ea2830]" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#ea2830]/10 text-[#ea2830] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">
                    SEBI SCORES 2.0
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    SEBI Centralized Grievance System. Mandatory resolution timeline within 21 calendar days.
                  </p>
                </div>
                <a
                  href="https://scores.sebi.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#ea2830] hover:bg-[#c91e25] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                >
                  <span>File on SCORES</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Card 4: SMART ODR */}
              <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#011628]" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#011628]/10 text-[#011628] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">
                    SMART ODR Portal
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Securities Market Approach for Resolution Through Online Dispute Resolution.
                  </p>
                </div>
                <a
                  href="https://smartodr.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#011628] hover:bg-[#012e54] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                >
                  <span>SMART ODR</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Grievance Redressal Portal Overview */}
          <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1a6eb5]" />
            <div className="max-w-4xl space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a6eb5]/10 text-[#1a6eb5] rounded-full text-xs font-bold">
                <AlertCircle className="w-3.5 h-3.5" /> Simplified Complaint Handling
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#011628] leading-tight">
                Grievance Redressal Portal: Simplified Complaint Handling
              </h2>
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
                A one-stop platform for investors to seek redressal of their queries and grievances. The queries or grievances can be filed under appropriate categories. Once the query/grievance is submitted by an investor, a unique ticket number is generated. Investors can track the status of their query/grievance at any time with the help of this ticket number. Investors sitting at home or office can lodge queries/grievances effortlessly through mobile or laptop.
              </p>
              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#1a6eb5]" />
                  Investor Support: Online Grievance Submission And Tracking
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The grievance redressal portal eliminates the need for writing physical letters or repetitive emails. Instead, investors can conveniently lodge queries, complaints, and requests directly through NSDL’s website using their secure login credentials while maintaining a complete, transparent audit trail.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Step-by-Step Interactive Guides (GRC vs Arbitration) */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-[#011628]">
                  Escalation Mechanisms & Step-by-Step Procedures
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Procedures for resolving escalated disputes through the Depository Grievance Redressal Committee or Arbitration.
                </p>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center p-1 bg-slate-200/70 rounded-xl shrink-0">
                <button
                  onClick={() => setActiveGuideTab("grc")}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeGuideTab === "grc"
                    ? "bg-white text-[#011628] shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  1. Depository GRC Process
                </button>
                <button
                  onClick={() => setActiveGuideTab("arbitration")}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeGuideTab === "arbitration"
                    ? "bg-white text-[#011628] shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  2. Arbitration Proceedings
                </button>
              </div>
            </div>

            {/* Guide Content: GRC */}
            {activeGuideTab === "grc" && (
              <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#1a6eb5]/5 rounded-2xl border border-[#1a6eb5]/15">
                  <div className="w-10 h-10 rounded-xl bg-[#1a6eb5]/10 text-[#1a6eb5] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Investor Grievance Redressal Committee (GRC) of Depository
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      If you receive no amicable resolution within the prescribed timeline, you have the option to escalate your grievance to NSDL’s Grievance Redressal Committee (GRC). Upon receipt of the reference, the GRC endeavors to resolve the dispute by hearing both parties and evaluating relevant documentation.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {GRC_STEPS.map((item) => (
                    <div
                      key={item.step}
                      className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#1a6eb5]/30 hover:shadow-sm transition-all flex items-start gap-3.5"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#1a6eb5] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                        {item.step}
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Guide Content: Arbitration */}
            {activeGuideTab === "arbitration" && (
              <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-8 space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#ea2830]/5 rounded-2xl border border-[#ea2830]/15">
                  <div className="w-10 h-10 rounded-xl bg-[#ea2830]/10 text-[#ea2830] flex items-center justify-center shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      Statutory Arbitration Proceedings
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      If an investor is not satisfied with the GRC decision, they can opt for Arbitration proceedings under the Depository Byelaws & Business Rules. The arbitration reference is concluded by issuing an arbitral award within <strong className="text-[#ea2830]">4 months</strong> from appointing the arbitrator(s).
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ARBITRATION_STEPS.map((item) => (
                    <div
                      key={item.step}
                      className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#ea2830]/30 hover:shadow-sm transition-all flex items-start gap-3.5"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#ea2830] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-xs">
                        {item.step}
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Section 4: Contact Persons in Case of Any Grievance */}
          <div>
            <div className="text-center mb-8">
              <span className="text-xs font-black tracking-widest uppercase text-[#1a6eb5] mb-2 block">
                Official Contacts
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#011628]">
                Contact Persons for Grievance Redressal
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mt-2">
                Designated regulatory officers and grievance resolution cell details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NSDL Contact Card */}
              <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#1a6eb5]" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#1a6eb5]/10 text-[#1a6eb5] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">NSDL Investor Relationship Cell</h3>
                    <p className="text-xs font-semibold text-[#1a6eb5] uppercase tracking-wide">National Securities Depository Limited</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-600 font-medium">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Designated Officer</p>
                    <p className="font-bold text-slate-900 text-[15px] mt-0.5">Ms. Khilona Behera</p>
                    <p className="text-xs text-slate-500 font-semibold">Deputy Vice President</p>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <p className="leading-relaxed">
                      <strong className="text-slate-800">Address: </strong>
                      301, 3rd Floor, Naman Chamber, Plot C-32, G-Block, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra - 400 051.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#1a6eb5] shrink-0" />
                        <span><strong>Board:</strong> (022) 2499 4200</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#1a6eb5] shrink-0" />
                        <span><strong>Helpline:</strong> 022-48867000</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Mail className="w-3.5 h-3.5 text-[#1a6eb5] shrink-0" />
                        <span><strong>Email:</strong> <a href="mailto:relations@nsdl.com" className="text-[#1a6eb5] hover:underline">relations@nsdl.com</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ratnakar Securities DP & Broker Contact Card */}
              <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#ea2830]" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#ea2830]/10 text-[#ea2830] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Ratnakar Securities Limited</h3>
                    <p className="text-xs font-semibold text-[#ea2830] uppercase tracking-wide">Stock Broker & Depository Participant (DP)</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-600 font-medium">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Investor Grievance Officer</p>
                    <p className="font-bold text-slate-900 text-[15px] mt-0.5">Kushal Shah</p>
                    <p className="text-xs text-slate-500 font-semibold">Compliance Officer</p>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <p className="leading-relaxed">
                      <strong className="text-slate-800">Address: </strong>
                      304, Sankalp Square 2, Nr. Jalaram Temple, Paldi, Ahmedabad, Gujarat - 380006.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#ea2830] shrink-0" />
                        <span><strong>Phone:</strong> 079 4900 5200</span>
                      </div>
                      <div className="flex items-center gap-2 sm:col-span-2">
                        <Mail className="w-3.5 h-3.5 text-[#ea2830] shrink-0" />
                        <span><strong>Grievance ID:</strong> <a href="mailto:investorgrievance@ratnakarsecurities.com" className="text-[#ea2830] hover:underline break-all">investorgrievance@ratnakarsecurities.com</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Regulatory Disclosures & Download Reports */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-black tracking-widest uppercase text-[#ea2830] mb-1 block">
                  Public Disclosures & Reports
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#011628]">
                  Disclosures of Complaints, Arbitration & Penal Actions
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Download official regulatory statements, periodic reports, and statutory inspection disclosures.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search disclosures..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#1a6eb5] transition-colors shadow-2xs font-medium"
                />
              </div>
            </div>

            {/* Filter Category Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${selectedCategory === cat
                    ? "bg-[#011628] text-[#00aeee] shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Reports List / Table */}
            <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#011628] text-white font-bold text-xs uppercase tracking-wider">
                      <th scope="col" className="p-4 w-12 text-center border-r border-slate-700/30">#</th>
                      <th scope="col" className="p-4 border-r border-slate-700/30">Report / Disclosure Title</th>
                      <th scope="col" className="p-4 w-44 border-r border-slate-700/30">Category</th>
                      <th scope="col" className="p-4 w-36 border-r border-slate-700/30">Updated Date</th>
                      <th scope="col" className="p-4 w-32 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-medium text-xs sm:text-sm">
                    {filteredReports.length > 0 ? (
                      filteredReports.map((report, idx) => (
                        <tr key={report.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="p-4 text-center border-r border-slate-100 font-bold text-slate-400">
                            {idx + 1}
                          </td>
                          <td className="p-4 border-r border-slate-100">
                            <div className="font-bold text-slate-900 leading-snug">{report.title}</div>
                          </td>
                          <td className="p-4 border-r border-slate-100">
                            <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-[11px] font-bold">
                              {report.category}
                            </span>
                          </td>
                          <td className="p-4 border-r border-slate-100 text-slate-500 font-semibold whitespace-nowrap">
                            {report.updatedDate}
                          </td>
                          <td className="p-4 text-center">
                            <a
                              href={report.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a6eb5] hover:bg-[#011628] text-white font-bold text-xs rounded-lg transition-colors shadow-2xs"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>Download</span>
                            </a>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="p-8 text-center text-slate-400 font-medium">
                          No reports match your current search criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Section 6: Related Important Investor Services */}
          <div>
            <div className="text-center mb-8">
              <span className="text-xs font-black tracking-widest uppercase text-[#00aeee] mb-2 block">
                Direct Depository Services
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#011628]">
                Related Investor Services & Tools
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service 1 */}
              <a
                href="https://nsdl.com/investor-services-email-and-income-updation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#00aeee]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#00aeee] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-[#00aeee] transition-colors flex items-center justify-between">
                    <span>Email & Income Updation</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Update your registered email address and annual income criteria seamlessly.
                  </p>
                </div>
              </a>

              {/* Service 2 */}
              <a
                href="https://nsdl.com/investor-services-nominee-updation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#1a6eb5]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1a6eb5] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-[#1a6eb5] transition-colors flex items-center justify-between">
                    <span>Nominee Updation</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Add or modify nominee details in your demat account for security.
                  </p>
                </div>
              </a>

              {/* Service 3 */}
              <a
                href="https://nsdl.com/investor-services-Speede-mobile-app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-[#ea2830]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ea2830] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-[#ea2830] transition-colors flex items-center justify-between">
                    <span>NSDL Speed-e Mobile App</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Execute and monitor demat transfer instructions securely from your phone.
                  </p>
                </div>
              </a>

              {/* Service 4 */}
              <a
                href="https://nsdl.com/investor-services-sms-alert"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Bell className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                    <span>SMS Alert Facility</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Receive immediate mobile alerts for all debits and credits in demat account.
                  </p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
