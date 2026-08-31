"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import {
  FileText,
  Download,
  Calendar,
  ShieldCheck,
  AlertCircle,
  ArrowLeft,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  Building2,
  CheckCircle2,
  Clock,
  Scale,
  FileCheck2,
  Briefcase,
  Timer,
  Check,
  XCircle,
  Eye,
  Award,
  Layers,
  Printer,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  HelpCircle,
  X,
  AlertTriangle,
  Info,
  Send,
  Building
} from "lucide-react";
import { getDpComplaintsPublic } from "@/services/dpComplaints";

// Modal Component Helper for Annexure A & B Popups
function DpModal({ isOpen, onClose, title, subtitle, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-labelledby="modal-title"
        className="relative w-full max-w-[860px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 transition-all duration-300 transform scale-100 my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative pt-6 px-6 pb-5 border-b border-slate-100 flex items-center justify-between shrink-0 bg-[#011628]">
          <div>
            {subtitle && (
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00aeee] mb-1">
                {subtitle}
              </p>
            )}
            <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-white tracking-wide pr-6">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors cursor-pointer bg-white/10 hover:bg-white/20 p-2.5 rounded-full flex items-center justify-center shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 overflow-y-auto text-slate-700 text-[15px] leading-relaxed flex-1 space-y-4">
          {children}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400 font-medium">Ratnakar Securities Limited • DP Compliance</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#011628] hover:bg-[#1a6eb5] text-white font-semibold text-sm rounded-xl shadow-xs transition-all cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}

export default function InvestorCharterDP({ defaultTab = "complaints" }) {
  const [data, setData] = useState(null);
  const [selectedFinYear, setSelectedFinYear] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(defaultTab); // "complaints" | "charter-details"
  const [annexureTab, setAnnexureTab] = useState("annexure-a"); // "annexure-a" | "annexure-b"
  const [activeModal, setActiveModal] = useState(null);

  const fetchTrends = useCallback(async (finyear = "") => {
    try {
      setLoading(true);
      setError(null);

      const res = await getDpComplaintsPublic(finyear);

      if (res && res.success && res.data) {
        setData(res.data);
        setSelectedFinYear(res.data.selectedFinYear || finyear);
      } else if (res && res.data) {
        setData(res.data);
        setSelectedFinYear(res.data.selectedFinYear || finyear);
      } else {
        throw new Error(res?.message || "No data returned from DP complaints API.");
      }
    } catch (err) {
      console.error("Error fetching DP complaints trends:", err);
      setError("Unable to load complaints trend data. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTrends();
  }, [fetchTrends]);

  const handleYearChange = (e) => {
    const fy = e.target.value;
    setSelectedFinYear(fy);
    fetchTrends(fy);
  };

  // Helper function to print offline form
  const handlePrintForm = () => {
    window.print();
  };

  // Extract primary consolidated PDF URL for the selected financial year
  const activePdfUrl =
    data?.monthlyTrends?.find((t) => t.fileurl || t.FILEURL)?.fileurl ||
    data?.monthlyTrends?.find((t) => t.fileurl || t.FILEURL)?.FILEURL ||
    null;

  // Latest month data for Table 1 (Month-End status)
  const latestMonthRecord =
    data?.monthlyTrends && data.monthlyTrends.length > 0
      ? data.monthlyTrends[data.monthlyTrends.length - 1]
      : null;
  const latestMonthName = latestMonthRecord
    ? latestMonthRecord.month_name || latestMonthRecord.MONTH_NAME || "Latest Month"
    : "Current Month";

  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Breadcrumb & Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link
              href="/"
              className="inline-flex items-center font-semibold text-[#00aeee] hover:text-[#012e54] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" /> Home
            </Link>
            <span>/</span>
            <Link
              href="/investors"
              className="hover:text-gray-900 transition-colors"
            >
              Investors
            </Link>
            <span>/</span>
            <span className="font-semibold text-gray-800">
              Investor Charter of Depository Participant
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold bg-[#011628] text-[#00aeee] px-3.5 py-1.5 rounded-full shadow-xs border border-[#00aeee]/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00aeee]" /> SEBI Regulatory Compliance
            </span>
          </div>
        </div>

        {/* Header Hero Banner */}
        <div className="relative overflow-hidden bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-200">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-100/50 via-red-50/30 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#011628] text-white rounded-2xl shadow-md">
                  <Layers className="w-7 h-7 text-[#00aeee]" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#011628] tracking-tight uppercase">
                    INVESTOR CHARTER FOR DEPOSITORY PARTICIPANTS
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-[#ea2830] uppercase tracking-wider mt-0.5">
                    DEPOSITORY PARTICIPANT (DP) DIVISION • RATNAKAR SECURITIES LTD.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
                Display of monthly complaints data received against the Depository Participant and annual disposal trends in compliance with SEBI and NSDL master circular guidelines.
              </p>
            </div>

            {/* Financial Year Selector & Download PDF Toolbar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
              {/* Financial Year Dropdown */}
              <div className="flex items-center bg-gray-50 hover:bg-gray-100/80 rounded-2xl px-4 py-2.5 border border-gray-300 transition shadow-2xs">
                <Calendar className="w-4 h-4 text-gray-500 mr-2 shrink-0" />
                <label
                  htmlFor="finyear-select-dp"
                  className="text-xs font-bold text-gray-600 uppercase tracking-wider mr-2 shrink-0"
                >
                  FY:
                </label>
                <div className="relative inline-block">
                  <select
                    id="finyear-select-dp"
                    value={selectedFinYear}
                    onChange={handleYearChange}
                    className="bg-transparent text-sm font-bold text-[#011628] focus:outline-none cursor-pointer pr-6 appearance-none"
                    aria-label="Select Financial Year"
                  >
                    {data?.availableFinYears && data.availableFinYears.length > 0 ? (
                      data.availableFinYears.map((fy) => (
                        <option key={fy} value={fy} className="text-gray-900 bg-white font-medium">
                          {fy}
                        </option>
                      ))
                    ) : (
                      <option value={selectedFinYear || "Current"}>{selectedFinYear || "Current"}</option>
                    )}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Refresh Button */}
              <button
                onClick={() => fetchTrends(selectedFinYear)}
                disabled={loading}
                title="Refresh complaints data"
                aria-label="Refresh complaints data"
                className="p-2.5 rounded-2xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 transition shadow-2xs disabled:opacity-50 cursor-pointer"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-[#00aeee]" : ""}`} />
              </button>

              {/* Download Official SEBI / DP Consolidated PDF */}
              {activePdfUrl ? (
                <a
                  href={activePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download SEBI Complaints PDF"
                  className="inline-flex items-center gap-2 bg-[#ea2830] hover:bg-[#c91f27] text-white text-sm font-bold px-5 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" /> Download SEBI PDF
                </a>
              ) : (
                <a
                  href="https://api.ratnakarsecurities.com/uploads/Investor_Charter_DP.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Official DP Charter PDF"
                  className="inline-flex items-center gap-2 bg-[#011628] hover:bg-[#13304a] text-white text-sm font-bold px-5 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
                >
                  <Download className="w-4 h-4 text-[#00aeee]" /> Official DP PDF
                </a>
              )}
            </div>
          </div>

          {/* Tab Navigation for DP Complaints Trends vs Charter Details */}
          <div className="flex border-b border-gray-200 mt-8 gap-6 text-sm font-bold">
            <button
              onClick={() => setActiveTab("complaints")}
              className={`pb-3 transition-colors relative cursor-pointer ${
                activeTab === "complaints"
                  ? "text-[#011628] border-b-2 border-[#ea2830]"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Complaints & Disposal Trends
            </button>
            <button
              onClick={() => setActiveTab("charter-details")}
              className={`pb-3 transition-colors relative cursor-pointer ${
                activeTab === "charter-details"
                  ? "text-[#011628] border-b-2 border-[#ea2830]"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Investor Charter Guidelines
            </button>
          </div>
        </div>

        {/* Loading Spinner / Skeleton */}
        {loading && (
          <div className="bg-white rounded-3xl p-16 text-center border border-gray-200 shadow-sm space-y-4">
            <RefreshCw className="w-10 h-10 text-[#00aeee] animate-spin mx-auto" />
            <div>
              <p className="text-base font-bold text-gray-900">Loading DP Complaints Trend Data...</p>
              <p className="text-xs text-gray-500 mt-1">Retrieving official monthly and annual disposal statistics</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50/80 border border-red-200 rounded-3xl p-8 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-900">Unable to load complaints trend data</h3>
              <p className="text-sm text-red-700 mt-1 max-w-md mx-auto">{error}</p>
            </div>
            <button
              onClick={() => fetchTrends(selectedFinYear)}
              className="px-6 py-2.5 bg-[#ea2830] text-white font-bold rounded-xl text-sm hover:bg-[#c91f27] transition shadow-xs cursor-pointer"
            >
              Retry
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 1: COMPLAINTS & DISPOSAL TRENDS                       */}
        {/* ========================================================= */}
        {!loading && !error && activeTab === "complaints" && (
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Table 1: Data for the Month Ending (SEBI Mandated Source Breakdown) */}
            <section className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00aeee]"></span>
                    <h2 className="text-lg sm:text-xl font-bold text-[#011628]">
                      Data for the Month Ending {latestMonthName}
                    </h2>
                    {selectedFinYear && (
                      <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                        FY {selectedFinYear}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    SEBI Prescribed Format: Status of complaints received by the Depository Participant categorized by source
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700 border-collapse">
                  <thead className="bg-[#011628] text-white text-xs font-semibold uppercase tracking-wider">
                    <tr>
                      <th scope="col" className="px-4 py-4 text-center w-14 border-r border-gray-700">S.No.</th>
                      <th scope="col" className="px-5 py-4 border-r border-gray-700">Received From</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Carried Forward</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Received During Month</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Resolved During Month</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Pending &lt; 3 Months</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Pending &gt; 3 Months</th>
                      <th scope="col" className="px-4 py-4 text-center">Avg Resolution Time (Days)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        sn: 1,
                        source: "Directly from Investors",
                        carried: latestMonthRecord ? (latestMonthRecord.carried_forward ?? 0) : 0,
                        received: latestMonthRecord ? (latestMonthRecord.received ?? 0) : 0,
                        resolved: latestMonthRecord ? (latestMonthRecord.resolved ?? 0) : 0,
                        pendingLt3: latestMonthRecord ? (latestMonthRecord.pending ?? 0) : 0,
                        pendingGt3: 0,
                        avgTime: latestMonthRecord ? (latestMonthRecord.avg_resolution_time || "-") : "-"
                      },
                      {
                        sn: 2,
                        source: "SEBI (SCORES)",
                        carried: 0,
                        received: 0,
                        resolved: 0,
                        pendingLt3: 0,
                        pendingGt3: 0,
                        avgTime: "-"
                      },
                      {
                        sn: 3,
                        source: "Other Sources (if any)",
                        carried: 0,
                        received: 0,
                        resolved: 0,
                        pendingLt3: 0,
                        pendingGt3: 0,
                        avgTime: "-"
                      }
                    ].map((row) => (
                      <tr key={row.sn} className="hover:bg-blue-50/40 transition-colors">
                        <td className="px-4 py-3.5 text-center font-medium text-gray-500 border-r border-gray-100">{row.sn}</td>
                        <td className="px-5 py-3.5 font-semibold text-gray-900 border-r border-gray-100">{row.source}</td>
                        <td className="px-4 py-3.5 text-center font-medium text-gray-700 border-r border-gray-100">{row.carried}</td>
                        <td className="px-4 py-3.5 text-center font-bold text-blue-600 border-r border-gray-100">{row.received}</td>
                        <td className="px-4 py-3.5 text-center font-bold text-emerald-600 border-r border-gray-100">{row.resolved}</td>
                        <td className="px-4 py-3.5 text-center font-bold text-amber-600 border-r border-gray-100">{row.pendingLt3}</td>
                        <td className="px-4 py-3.5 text-center font-bold text-gray-500 border-r border-gray-100">{row.pendingGt3}</td>
                        <td className="px-4 py-3.5 text-center text-gray-600">{row.avgTime}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-100 text-gray-900 font-bold border-t-2 border-gray-300 text-sm">
                    <tr>
                      <td colSpan={2} className="px-5 py-4 text-right uppercase tracking-wider text-xs font-black text-[#011628] border-r border-gray-200">
                        Grand Total
                      </td>
                      <td className="px-4 py-4 text-center font-black border-r border-gray-200">
                        {latestMonthRecord ? (latestMonthRecord.carried_forward ?? 0) : 0}
                      </td>
                      <td className="px-4 py-4 text-center font-black text-blue-700 border-r border-gray-200">
                        {latestMonthRecord ? (latestMonthRecord.received ?? 0) : 0}
                      </td>
                      <td className="px-4 py-4 text-center font-black text-emerald-700 border-r border-gray-200">
                        {latestMonthRecord ? (latestMonthRecord.resolved ?? 0) : 0}
                      </td>
                      <td className="px-4 py-4 text-center font-black text-amber-700 border-r border-gray-200">
                        {latestMonthRecord ? (latestMonthRecord.pending ?? 0) : 0}
                      </td>
                      <td className="px-4 py-4 text-center font-black text-gray-500 border-r border-gray-200">0</td>
                      <td className="px-4 py-4 text-center text-gray-600">
                        {latestMonthRecord ? (latestMonthRecord.avg_resolution_time || "-") : "-"}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </section>

            {/* Table 2: Trend of Monthly Disposal of Complaints */}
            <section className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ea2830]"></span>
                    <h2 className="text-lg sm:text-xl font-bold text-[#011628]">
                      Trend of Monthly Disposal of Complaints
                    </h2>
                    {selectedFinYear && (
                      <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                        FY {selectedFinYear}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Month-wise complaint status received against the Depository Participant for the selected financial year
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700 border-collapse">
                  <thead className="bg-[#011628] text-white text-xs font-semibold uppercase tracking-wider">
                    <tr>
                      <th scope="col" className="px-4 py-4 text-center w-14 border-r border-gray-700">S.No.</th>
                      <th scope="col" className="px-5 py-4 border-r border-gray-700">Month / Year</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Carried Forward</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Received</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Resolved</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Pending</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Avg Resolution Time (Days)</th>
                      <th scope="col" className="px-4 py-4 text-center">Report</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {data?.monthlyTrends && data.monthlyTrends.length > 0 ? (
                      data.monthlyTrends.map((row, idx) => {
                        const fileUrl = row.fileurl || row.FILEURL;
                        const monthName = row.month_name || row.MONTH_NAME || `Month ${row.month || idx + 1}`;
                        const carried = row.carried_forward ?? row.CARRIED_FORWARD ?? 0;
                        const received = row.received ?? row.RECEIVED ?? 0;
                        const resolved = row.resolved ?? row.RESOLVED ?? 0;
                        const pending = row.pending ?? row.PENDING ?? 0;
                        const avgTime = row.avg_resolution_time ?? row.AVG_RESOLUTION_TIME ?? "-";

                        return (
                          <tr key={row.srno || row.SRNO || idx} className="hover:bg-blue-50/40 transition-colors">
                            <td className="px-4 py-3.5 text-center font-medium text-gray-500 border-r border-gray-100">{idx + 1}</td>
                            <td className="px-5 py-3.5 font-semibold text-gray-900 border-r border-gray-100">{monthName}</td>
                            <td className="px-4 py-3.5 text-center font-medium text-gray-700 border-r border-gray-100">{carried}</td>
                            <td className="px-4 py-3.5 text-center font-bold text-blue-600 border-r border-gray-100">{received}</td>
                            <td className="px-4 py-3.5 text-center font-bold text-emerald-600 border-r border-gray-100">{resolved}</td>
                            <td className="px-4 py-3.5 text-center font-bold text-amber-600 border-r border-gray-100">{pending}</td>
                            <td className="px-4 py-3.5 text-center text-gray-600 border-r border-gray-100">{avgTime !== "" ? avgTime : "-"}</td>
                            <td className="px-4 py-3.5 text-center">
                              {fileUrl ? (
                                <a
                                  href={fileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`Download PDF report for ${monthName}`}
                                  className="inline-flex items-center justify-center text-xs font-bold text-[#ea2830] hover:text-[#011628] bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition gap-1.5"
                                >
                                  <FileText className="w-3.5 h-3.5" /> PDF
                                </a>
                              ) : (
                                <span className="text-xs text-gray-400 font-medium">-</span>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={8} className="px-4 py-12 text-center text-gray-400">
                          <FileText className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                          <p className="font-semibold text-gray-700">No complaint records found</p>
                          <p className="text-xs text-gray-400 mt-1">No monthly disposal statistics filed for FY {selectedFinYear}.</p>
                        </td>
                      </tr>
                    )}
                  </tbody>

                  {/* Grand Total Footer */}
                  {data?.monthlyTrends && data.monthlyTrends.length > 0 && (
                    <tfoot className="bg-gray-100 text-gray-900 font-bold border-t-2 border-gray-300 text-sm">
                      <tr>
                        <td colSpan={2} className="px-5 py-4 text-right uppercase tracking-wider text-xs font-black text-[#011628] border-r border-gray-200">
                          Grand Total
                        </td>
                        <td className="px-4 py-4 text-center font-black border-r border-gray-200">
                          {data.monthlyGrandTotal?.carried_forward ?? 0}
                        </td>
                        <td className="px-4 py-4 text-center font-black text-blue-700 border-r border-gray-200">
                          {data.monthlyGrandTotal?.received ?? 0}
                        </td>
                        <td className="px-4 py-4 text-center font-black text-emerald-700 border-r border-gray-200">
                          {data.monthlyGrandTotal?.resolved ?? 0}
                        </td>
                        <td className="px-4 py-4 text-center font-black text-amber-700 border-r border-gray-200">
                          {data.monthlyGrandTotal?.pending ?? 0}
                        </td>
                        <td className="px-4 py-4 text-center text-gray-400 border-r border-gray-200">-</td>
                        <td className="px-4 py-4 text-center text-gray-400">-</td>
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
            </section>

            {/* Table 3: Trend of Annual Disposal of Complaints */}
            <section className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00aeee]"></span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#011628]">
                    Trend of Annual Disposal of Complaints
                  </h2>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Year-on-year historical complaint disposal overview across financial years
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700 border-collapse">
                  <thead className="bg-[#011628] text-white text-xs font-semibold uppercase tracking-wider">
                    <tr>
                      <th scope="col" className="px-4 py-4 text-center w-14 border-r border-gray-700">S.No.</th>
                      <th scope="col" className="px-6 py-4 border-r border-gray-700">Financial Year</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Carried Forward</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Received During Year</th>
                      <th scope="col" className="px-4 py-4 text-center border-r border-gray-700">Resolved During Year</th>
                      <th scope="col" className="px-4 py-4 text-center">Pending At End of Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {data?.annualTrends && data.annualTrends.length > 0 ? (
                      data.annualTrends.map((row, idx) => {
                        const year = row.year || row.YEAR || row.finyear || "-";
                        const carried = row.carried_forward ?? row.CARRIED_FORWARD ?? 0;
                        const received = row.received ?? row.RECEIVED ?? 0;
                        const resolved = row.resolved ?? row.RESOLVED ?? 0;
                        const pending = row.pending ?? row.PENDING ?? 0;

                        return (
                          <tr key={row.sn || row.year || idx} className="hover:bg-blue-50/40 transition-colors">
                            <td className="px-4 py-3.5 text-center font-medium text-gray-500 border-r border-gray-100">{idx + 1}</td>
                            <td className="px-6 py-3.5 font-bold text-gray-900 border-r border-gray-100">{year}</td>
                            <td className="px-4 py-3.5 text-center font-medium text-gray-700 border-r border-gray-100">{carried}</td>
                            <td className="px-4 py-3.5 text-center font-bold text-blue-600 border-r border-gray-100">{received}</td>
                            <td className="px-4 py-3.5 text-center font-bold text-emerald-600 border-r border-gray-100">{resolved}</td>
                            <td className="px-4 py-3.5 text-center font-bold text-amber-600">{pending}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-4 py-12 text-center text-gray-400">
                          <FileText className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                          <p className="font-semibold text-gray-700">No annual records available</p>
                          <p className="text-xs text-gray-400 mt-1">No historical annual trend statistics filed yet.</p>
                        </td>
                      </tr>
                    )}
                  </tbody>

                  {/* Annual Grand Total Footer */}
                  {data?.annualTrends && data.annualTrends.length > 0 && (
                    <tfoot className="bg-gray-100 text-gray-900 font-bold border-t-2 border-gray-300 text-sm">
                      <tr>
                        <td colSpan={2} className="px-6 py-4 text-right uppercase tracking-wider text-xs font-black text-[#011628] border-r border-gray-200">
                          Grand Total
                        </td>
                        <td className="px-4 py-4 text-center font-black border-r border-gray-200">
                          {data.annualGrandTotal?.carried_forward ?? 0}
                        </td>
                        <td className="px-4 py-4 text-center font-black text-blue-700 border-r border-gray-200">
                          {data.annualGrandTotal?.received ?? 0}
                        </td>
                        <td className="px-4 py-4 text-center font-black text-emerald-700 border-r border-gray-200">
                          {data.annualGrandTotal?.resolved ?? 0}
                        </td>
                        <td className="px-4 py-4 text-center font-black text-amber-700">
                          {data.annualGrandTotal?.pending ?? 0}
                        </td>
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: INVESTOR CHARTER GUIDELINES (ANNEXURE A & B)       */}
        {/* ========================================================= */}
        {activeTab === "charter-details" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Regulatory Circular Notification Alert */}
            <div className="bg-gradient-to-r from-[#011628] via-[#092b4a] to-[#011628] text-white rounded-2xl p-5 sm:p-6 shadow-md border border-[#00aeee]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="bg-[#00aeee] text-[#011628] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                    Latest SEBI / NSDL Circular
                  </span>
                  <span className="text-xs text-slate-300 font-medium">Ref: NSDL/POLICY/2024/0154 (Oct 16, 2024)</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Facility for Basic Services Demat Account (BSDA) for Financial Inclusion and Ease of Investing
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                  As per SEBI circular SEBI/HO/MIRSD/MIRSDPoD1/P/CIR/2024/91, revised threshold for BSDA: <strong>No AMC</strong> up to <strong>₹4 Lakhs</strong>, and <strong>Max ₹100 AMC</strong> between <strong>₹4 Lakhs and ₹10 Lakhs</strong> across combined debt and equity holdings.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                <a
                  href="https://api.ratnakarsecurities.com/uploads/2024-0154-Policy-Amendement_to_Publishing_Investor_Charter_for_Depositories_and_Depository_Participants_by_Participants_on_their_websites.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all border border-white/20"
                >
                  <Download className="w-4 h-4 text-[#00aeee]" />
                  <span>Download Circular PDF</span>
                </a>
                <button
                  onClick={() => setActiveModal("BSDA")}
                  className="inline-flex items-center gap-2 bg-[#00aeee] hover:bg-[#0092c8] text-[#011628] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all shadow-sm shrink-0 cursor-pointer"
                >
                  <span>View Updated BSDA Norms</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Navigation Switcher between Annexure A and Annexure B */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="inline-flex p-1 bg-slate-200/70 rounded-xl w-full sm:w-auto">
                <button
                  onClick={() => setAnnexureTab("annexure-a")}
                  className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                    annexureTab === "annexure-a"
                      ? "bg-white text-[#011628] shadow-sm"
                      : "text-slate-600 hover:text-[#011628]"
                  }`}
                >
                  Annexure A: Investor Charter
                </button>
                <button
                  onClick={() => setAnnexureTab("annexure-b")}
                  className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                    annexureTab === "annexure-b"
                      ? "bg-white text-[#011628] shadow-sm"
                      : "text-slate-600 hover:text-[#011628]"
                  }`}
                >
                  Annexure B: Detailed Links & Codes (1–15)
                </button>
              </div>

              <div className="text-xs text-slate-500 font-medium">
                {annexureTab === "annexure-a" ? (
                  <span>Showing <strong>Main Investor Charter</strong> • Click any superscript link to view Annexure B details</span>
                ) : (
                  <span>Showing <strong>Annexure B</strong> • Full mapped content for all 15 points</span>
                )}
              </div>
            </div>

            {/* ========================================================= */}
            {/* ANNEXURE A CONTENT                                        */}
            {/* ========================================================= */}
            {annexureTab === "annexure-a" && (
              <div className="space-y-10 animate-in fade-in duration-300">
                
                {/* Header Box */}
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1a6eb5]">
                    Annexure A
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#011628] font-bold">
                    INVESTOR CHARTER FOR DEPOSITORY PARTICIPANTS
                  </h2>
                  <p className="text-sm text-slate-500 max-w-2xl mx-auto">
                    Prescribed framework by NSDL and SEBI outlining vision, mission, service standards, timelines, and grievance redressal for demat account holders.
                  </p>
                </div>

                {/* 1 & 2. Vision & Mission Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Vision Card */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-7 sm:p-8 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#1a6eb5]" />
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#1a6eb5]/10 flex items-center justify-center text-[#1a6eb5] shrink-0">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-[#1a6eb5] uppercase tracking-wider">Point 1</span>
                          <h3 className="text-xl font-bold text-[#011628]">Vision</h3>
                        </div>
                        <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                          Towards making Indian Securities Market - Transparent, Efficient, &amp; Investor friendly by providing safe, reliable, transparent and trusted record keeping platform for investors to hold and transfer securities in dematerialized form.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mission Card */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-7 sm:p-8 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                    <div className="absolute top-0 left-0 w-2 h-full bg-[#ea2830]" />
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#ea2830]/10 flex items-center justify-center text-[#ea2830] shrink-0">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-[#ea2830] uppercase tracking-wider">Point 2</span>
                          <h3 className="text-xl font-bold text-[#011628]">Mission</h3>
                        </div>
                        <ul className="space-y-3 text-[14px] text-slate-600 leading-relaxed font-medium">
                          <li className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ea2830] shrink-0 mt-2" />
                            <span>To hold securities of investors in dematerialised form and facilitate its transfer, while ensuring safekeeping of securities and protecting interest of investors.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ea2830] shrink-0 mt-2" />
                            <span>To provide timely and accurate information to investors with regard to their holding and transfer of securities held by them.</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ea2830] shrink-0 mt-2" />
                            <span>To provide the highest standards of investor education, investor awareness and timely services so as to enhance Investor Protection and create awareness about Investor Rights.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Details of Business Transacted */}
                <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-7 sm:p-8 relative overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#011628] via-[#1a6eb5] to-[#00aeee]" />
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-3xl">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#1a6eb5] uppercase tracking-wider">Point 3</span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#011628] flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-[#1a6eb5]" />
                          Details of Business Transacted by the Depository and Depository Participant (DP)
                        </h3>
                      </div>
                      <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                        A Depository is an organization which holds securities of investors in electronic form. Depositories provide services to various market participants - Exchanges, Clearing Corporations, Depository Participants (DPs), Issuers and Investors in both primary as well as secondary markets. The depository carries out its activities through its agents which are known as Depository Participants (DP).
                      </p>
                    </div>
                    <a
                      href="https://nsdl.co.in/dpsch.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#011628] hover:bg-[#1a6eb5] text-white text-sm font-bold rounded-xl px-5 py-3 shrink-0 shadow-xs transition-all cursor-pointer"
                    >
                      <span>NSDL DP Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* 4. Description of Services */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#1a6eb5] uppercase tracking-wider">Point 4</span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#011628] font-bold">
                      Description of Services Provided by the Depository through Depository Participants (DP) to Investors
                    </h3>
                  </div>

                  {/* (1) Basic Services */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                    <div className="p-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                      <h4 className="text-base font-bold text-[#011628] flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#1a6eb5]" />
                        (1) Basic Services
                      </h4>
                      <span className="text-xs text-slate-500 font-medium">Mandatory Processing Timelines</span>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[650px] text-left text-sm border-collapse">
                        <thead>
                          <tr className="bg-[#011628] text-white font-bold text-xs uppercase tracking-wider">
                            <th scope="col" className="p-4 w-20 text-center border-r border-slate-700/50">Sr. No.</th>
                            <th scope="col" className="p-4 border-r border-slate-700/50">Brief about the Activity / Service</th>
                            <th scope="col" className="p-4">Expected Timelines for processing by the DP after receipt of proper documents</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                          <tr className="hover:bg-slate-50/75 transition-colors">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">1.</td>
                            <td className="p-4 border-r border-slate-100">Dematerialization of securities</td>
                            <td className="p-4 text-[#1a6eb5] font-bold">7 days</td>
                          </tr>
                          <tr className="hover:bg-slate-50/75 transition-colors bg-slate-50/40">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">2.</td>
                            <td className="p-4 border-r border-slate-100">Rematerialization of securities</td>
                            <td className="p-4 text-[#1a6eb5] font-bold">7 days</td>
                          </tr>
                          <tr className="hover:bg-slate-50/75 transition-colors">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">3.</td>
                            <td className="p-4 border-r border-slate-100">Mutual Fund Conversion</td>
                            <td className="p-4 text-[#1a6eb5] font-bold">5 days</td>
                          </tr>
                          <tr className="hover:bg-slate-50/75 transition-colors bg-slate-50/40">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">4.</td>
                            <td className="p-4 border-r border-slate-100">Re-conversion of Mutual fund units</td>
                            <td className="p-4 text-[#1a6eb5] font-bold">7 days</td>
                          </tr>
                          <tr className="hover:bg-slate-50/75 transition-colors">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">5.</td>
                            <td className="p-4 border-r border-slate-100">Transmission of securities</td>
                            <td className="p-4 text-[#1a6eb5] font-bold">7 days</td>
                          </tr>
                          <tr className="hover:bg-slate-50/75 transition-colors bg-slate-50/40">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">6.</td>
                            <td className="p-4 border-r border-slate-100">Registering pledge request</td>
                            <td className="p-4 text-[#1a6eb5] font-bold">15 days</td>
                          </tr>
                          <tr className="hover:bg-slate-50/75 transition-colors">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">7.</td>
                            <td className="p-4 border-r border-slate-100">Closure of demat account</td>
                            <td className="p-4 text-[#1a6eb5] font-bold">30 days</td>
                          </tr>
                          <tr className="hover:bg-slate-50/75 transition-colors bg-slate-50/40">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">8.</td>
                            <td className="p-4 border-r border-slate-100 font-bold text-[#011628]">Settlement Instruction</td>
                            <td className="p-4 space-y-2">
                              <p className="text-slate-700">
                                For <strong className="text-[#011628]">T+1 day settlements</strong>, Participants shall accept instructions from the Clients, in physical form up to <strong className="text-[#ea2830]">4:00 p.m.</strong> (in case of electronic instructions up to <strong className="text-[#ea2830]">6:00 p.m.</strong>) on <strong>T day</strong> for pay-in of securities.
                              </p>
                              <p className="text-slate-700">
                                For <strong className="text-[#011628]">T+0-day settlements</strong>, Participants shall accept EPI instructions from the clients, till <strong className="text-[#ea2830]">11:00 AM on T day</strong>.
                              </p>
                              <span className="inline-block text-[11px] font-semibold text-slate-500 bg-slate-200/60 px-2 py-0.5 rounded">
                                Note: &apos;T&apos; refers to &apos;Trade Day&apos;
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* (2) Special Services */}
                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                    <div className="p-5 bg-slate-50 border-b border-slate-100">
                      <h4 className="text-base font-bold text-[#011628] flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00aeee]" />
                        (2) Special Services (Pledge, Hypothecation, Internet-based Services, etc.)
                      </h4>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[650px] text-left text-sm border-collapse">
                        <thead>
                          <tr className="bg-[#011628] text-white font-bold text-xs uppercase tracking-wider">
                            <th scope="col" className="p-4 w-20 text-center border-r border-slate-700/50">Sr. No.</th>
                            <th scope="col" className="p-4 w-1/4 border-r border-slate-700/50">Type of Activity / Service</th>
                            <th scope="col" className="p-4">Brief about the Activity / Service</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                          {/* 1. Value Added Services */}
                          <tr className="hover:bg-slate-50/75 transition-colors">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">1.</td>
                            <td className="p-4 border-r border-slate-100 font-bold text-[#011628]">Value Added Services</td>
                            <td className="p-4 space-y-3">
                              <p className="text-slate-700">Depositories also provide value added services such as:</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                                <button 
                                  onClick={() => setActiveModal("BSDA")}
                                  className="p-3 text-left bg-blue-50/60 hover:bg-blue-100/70 rounded-xl border border-blue-200/60 transition-all group cursor-pointer flex items-center justify-between"
                                >
                                  <div>
                                    <span className="text-xs font-bold text-[#1a6eb5] block">
                                      (1) Basic Services Demat Account (BSDA)<sup>1</sup>
                                    </span>
                                    <span className="text-[11px] text-slate-500">Nil AMC up to ₹4 Lakhs • Max ₹100 up to ₹10 Lakhs</span>
                                  </div>
                                  <ArrowUpRight className="w-4 h-4 text-[#1a6eb5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>

                                <button 
                                  onClick={() => setActiveModal("TCD")}
                                  className="p-3 text-left bg-blue-50/60 hover:bg-blue-100/70 rounded-xl border border-blue-200/60 transition-all group cursor-pointer flex items-center justify-between"
                                >
                                  <div>
                                    <span className="text-xs font-bold text-[#1a6eb5] block">
                                      (2) Transposition cum dematerialization<sup>2</sup>
                                    </span>
                                    <span className="text-[11px] text-slate-500">Name order change on physical certificates</span>
                                  </div>
                                  <ArrowUpRight className="w-4 h-4 text-[#1a6eb5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>

                                <button 
                                  onClick={() => setActiveModal("LWCS")}
                                  className="p-3 text-left bg-blue-50/60 hover:bg-blue-100/70 rounded-xl border border-blue-200/60 transition-all group cursor-pointer flex items-center justify-between"
                                >
                                  <div>
                                    <span className="text-xs font-bold text-[#1a6eb5] block">
                                      (3) Linkages with Clearing System<sup>3</sup>
                                    </span>
                                    <span className="text-[11px] text-slate-500">Delivery to and from clearing system</span>
                                  </div>
                                  <ArrowUpRight className="w-4 h-4 text-[#1a6eb5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>

                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-col justify-center">
                                  <span className="font-bold text-slate-800">(4) Corporate Benefits &amp; Others</span>
                                  <span className="text-[11px] text-slate-500">Distribution of cash &amp; non-cash benefits (Bonus, Rights, IPOs), stock lending, demat of NSC/KVP, warehouse receipts.</span>
                                </div>
                              </div>
                            </td>
                          </tr>

                          {/* 2. Consolidated Account Statement */}
                          <tr className="hover:bg-slate-50/75 transition-colors bg-slate-50/40">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">2.</td>
                            <td className="p-4 border-r border-slate-100 font-bold text-[#011628]">Consolidated Account Statement (CAS)</td>
                            <td className="p-4 text-slate-700">
                              CAS is issued <strong>10 days</strong> from the end of the month (if there were transactions in the previous month) or <strong>half yearly</strong> (if no transactions).
                            </td>
                          </tr>

                          {/* 3. Digitalization of Services */}
                          <tr className="hover:bg-slate-50/75 transition-colors">
                            <td className="p-4 text-center border-r border-slate-100 font-bold">3.</td>
                            <td className="p-4 border-r border-slate-100 font-bold text-[#011628]">Digitalization of services provided by depositories</td>
                            <td className="p-4 space-y-3">
                              <p className="text-slate-700">Depositories offer below technology solutions and e-facilities to their demat account holders through DPs:</p>
                              <div className="flex flex-wrap gap-2 pt-1">
                                <button 
                                  onClick={() => setActiveModal("EO")}
                                  className="px-3.5 py-2 bg-[#00aeee]/10 hover:bg-[#00aeee]/20 text-[#012e54] rounded-xl text-xs font-bold transition-all border border-[#00aeee]/30 cursor-pointer flex items-center gap-1.5"
                                >
                                  <span>a. E-account opening<sup>4</sup></span>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00aeee]" />
                                </button>
                                <button 
                                  onClick={() => setActiveModal("OIFE")}
                                  className="px-3.5 py-2 bg-[#00aeee]/10 hover:bg-[#00aeee]/20 text-[#012e54] rounded-xl text-xs font-bold transition-all border border-[#00aeee]/30 cursor-pointer flex items-center gap-1.5"
                                >
                                  <span>b. Online instructions for execution<sup>5</sup> (SPEED-e)</span>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00aeee]" />
                                </button>
                                <button 
                                  onClick={() => setActiveModal("DG")}
                                  className="px-3.5 py-2 bg-[#00aeee]/10 hover:bg-[#00aeee]/20 text-[#012e54] rounded-xl text-xs font-bold transition-all border border-[#00aeee]/30 cursor-pointer flex items-center gap-1.5"
                                >
                                  <span>c. e-DIS / Demat Gateway<sup>6</sup></span>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00aeee]" />
                                </button>
                                <button 
                                  onClick={() => setActiveModal("ECAS")}
                                  className="px-3.5 py-2 bg-[#00aeee]/10 hover:bg-[#00aeee]/20 text-[#012e54] rounded-xl text-xs font-bold transition-all border border-[#00aeee]/30 cursor-pointer flex items-center gap-1.5"
                                >
                                  <span>d. e-CAS facility<sup>7</sup></span>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00aeee]" />
                                </button>
                                <button 
                                  onClick={() => setActiveModal("MS")}
                                  className="px-3.5 py-2 bg-[#00aeee]/10 hover:bg-[#00aeee]/20 text-[#012e54] rounded-xl text-xs font-bold transition-all border border-[#00aeee]/30 cursor-pointer flex items-center gap-1.5"
                                >
                                  <span>e. Miscellaneous services<sup>8</sup></span>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00aeee]" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* 5. Details of Grievance Redressal Mechanism */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#ea2830] uppercase tracking-wider">Point 5</span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#011628] font-bold">
                      5. Details of Grievance Redressal Mechanism
                    </h3>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-8">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#011628] flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-[#ea2830]" />
                        (1) The Process of Investor Grievance Redressal
                      </h4>
                      <p className="text-sm text-slate-600">
                        Investors can lodge complaint / grievance against the Depository / DP through electronic or offline modes:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Electronic Mode */}
                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-[#1a6eb5] text-white flex items-center justify-center text-xs font-bold">a</span>
                          <h5 className="font-bold text-slate-900 text-base">Electronic Mode</h5>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                            <span className="font-bold text-[#011628] block">(i) SCORES Portal (SEBI)</span>
                            <p className="text-xs text-slate-500">
                              Web-based centralized grievance redressal system of SEBI with <strong>Two Level Review</strong>:
                            </p>
                            <ul className="text-xs text-slate-600 list-disc pl-4 space-y-0.5 pt-1">
                              <li><strong>First Review:</strong> Done by Designated Body</li>
                              <li><strong>Second Review:</strong> Done by SEBI</li>
                            </ul>
                            <a 
                              href="https://scores.sebi.gov.in" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-1 text-xs text-[#1a6eb5] hover:underline font-bold mt-1"
                            >
                              <span>https://scores.sebi.gov.in</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>

                          <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                            <span className="font-bold text-[#011628] block">(ii) SMART ODR Portal</span>
                            <p className="text-xs text-slate-500">
                              Securities Market Approach for Resolution Through ODR Portal (Online Dispute Resolution mechanism harness online conciliation and online arbitration).
                            </p>
                            <a 
                              href="https://smartodr.in" 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-1 text-xs text-[#1a6eb5] hover:underline font-bold mt-1"
                            >
                              <span>https://smartodr.in</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>

                          <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                            <span className="font-bold text-[#011628] block">(iii) Depositories Grievance Portals</span>
                            <p className="text-xs text-slate-500">Direct lodging with NSDL / CDSL:</p>
                            <ul className="text-xs text-slate-600 space-y-1 pt-1">
                              <li>
                                <span className="font-semibold text-slate-700">NSDL: </span>
                                <a href="https://www.epass.nsdl.com/Login/Investor" target="_blank" rel="noopener noreferrer" className="text-[#1a6eb5] hover:underline">
                                  https://www.epass.nsdl.com/Login/Investor<sup>9</sup>
                                </a>
                              </li>
                              <li>
                                <span className="font-semibold text-slate-700">Emails: </span>
                                <span className="text-slate-700 font-mono text-[11px]">relations@nsdl.com / complaints@cdslindia.com</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-1">
                            <span className="font-bold text-[#011628] block">(iv) Depository Participant (Ratnakar)</span>
                            <p className="text-xs text-slate-500">Dedicated DP compliance email:</p>
                            <a href="mailto:dpcompliance@ratnakarsecurities.com" className="text-xs font-bold text-[#ea2830] hover:underline">
                              dpcompliance@ratnakarsecurities.com
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Offline Mode */}
                      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4 flex flex-col justify-between">
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-[#ea2830] text-white flex items-center justify-center text-xs font-bold">b</span>
                            <h5 className="font-bold text-slate-900 text-base">Offline Mode</h5>
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-sm text-slate-600">
                            <p className="leading-relaxed">
                              Investors may send hardcopy complaints directly to the DP or Depository.
                            </p>
                            <p className="leading-relaxed text-xs">
                              When submitting a physical complaint, ensure you include:
                            </p>
                            <ul className="text-xs text-slate-600 list-disc pl-4 space-y-1">
                              <li>Full Name, Address, Contact details</li>
                              <li>16-digit Demat Account Number (Client ID + DP ID)</li>
                              <li>Specific details &amp; nature of the grievance with supporting docs</li>
                            </ul>
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => setActiveModal("OFFLINE_FORM")}
                            className="w-full py-3 px-4 bg-white hover:bg-slate-100 text-[#011628] font-bold text-xs rounded-xl border border-slate-300 shadow-2xs flex items-center justify-center gap-2 transition cursor-pointer"
                          >
                            <Printer className="w-4 h-4 text-[#1a6eb5]" />
                            <span>Download / Print Offline Complaint Form</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Multi-Tier Redressal Timelines */}
                    <div className="pt-2">
                      <h4 className="text-base font-bold text-[#011628] mb-3">
                        (2) Redressal Timelines &amp; Multi-Tier Escalation
                      </h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                          <span className="text-[11px] font-bold text-[#1a6eb5] uppercase tracking-wider block">Level 1 • DP</span>
                          <h5 className="font-bold text-slate-900 text-sm">Depository Participant</h5>
                          <p className="text-xs text-slate-500">Direct resolution by DP within <strong className="text-slate-800">21 calendar days</strong>.</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                          <span className="text-[11px] font-bold text-[#1a6eb5] uppercase tracking-wider block">Level 2 • Depository</span>
                          <h5 className="font-bold text-slate-900 text-sm">NSDL Redressal</h5>
                          <p className="text-xs text-slate-500">Escalated to NSDL; hearings &amp; disposal within <strong className="text-slate-800">21 calendar days</strong>.</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                          <span className="text-[11px] font-bold text-[#ea2830] uppercase tracking-wider block">Level 3 • SEBI</span>
                          <h5 className="font-bold text-slate-900 text-sm">SCORES 2.0 Review</h5>
                          <p className="text-xs text-slate-500">Two-tier automated review mechanism on the SEBI portal.</p>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1 shadow-2xs">
                          <span className="text-[11px] font-bold text-[#00aeee] uppercase tracking-wider block">Level 4 • Dispute</span>
                          <h5 className="font-bold text-slate-900 text-sm">SMART ODR / Arbitration</h5>
                          <p className="text-xs text-slate-500">Online conciliation and independent arbitral tribunal resolution.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Guidance Pertaining to Special Circumstances */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#1a6eb5] uppercase tracking-wider">Point 6</span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#011628] font-bold">
                      6. Guidance pertaining to special circumstances related to market activities: Termination of the Depository Participant
                    </h3>
                  </div>

                  <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div className="space-y-2 text-sm text-slate-600 leading-relaxed font-medium">
                        <p>
                          Provided that the Depositories shall notify all clients of the Participant about the termination or closure of the Participant by giving suitable intimation in the newspaper as well as direct communication.
                        </p>
                        <p>
                          In such scenario, the client shall have the right to transfer their securities to another DP of their choice without having to pay any transfer charges.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Dos and Don'ts for Demat Account Holders */}
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#1a6eb5] uppercase tracking-wider">Point 7</span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#011628] font-bold">
                      7. Guidance to Demat Account Holders (Dos &amp; Don&apos;ts)
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* DOS CARD */}
                    <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-6 sm:p-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                          <Check className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-emerald-950">DOs for Investors</h4>
                      </div>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-900 font-medium">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Always deal with a SEBI registered Depository Participant for opening a demat account.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Ensure that mobile number and email ID are updated in the demat account to receive transaction alerts.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Always submit Nomination details or explicit declaration for opting out of nomination.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Verify monthly CAS (Consolidated Account Statement) thoroughly.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>Use e-facilities like SPEED-e and e-DIS for secure digital authorizations.</span>
                        </li>
                      </ul>
                    </div>

                    {/* DON'TS CARD */}
                    <div className="bg-rose-50/50 border border-rose-200/80 rounded-2xl p-6 sm:p-7 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                          <X className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-rose-950">DON&apos;Ts for Investors</h4>
                      </div>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-rose-900 font-medium">
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>Do not sign blank Delivery Instruction Slips (DIS) and never leave them with anyone.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>Do not share OTPs, passwords, or PINs for online depository access with any unauthorized person.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>Do not ignore transaction alerts received directly from NSDL / CDSL via SMS or email.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>Do not fall prey to promises of guaranteed or unrealistic returns.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                          <span>Do not transfer funds or securities to personal accounts of any sub-broker or individual.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 8, 9, 10. Rights, Responsibilities, and Code of Conduct */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Rights */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                    <div className="flex items-center gap-2.5 text-[#1a6eb5]">
                      <Scale className="w-5 h-5" />
                      <h4 className="font-bold text-slate-900 text-base">Rights of Investors</h4>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-4 font-medium leading-relaxed">
                      <li>Right to receive demat account statement at prescribed periodic intervals.</li>
                      <li>Right to appoint nominee for demat holdings.</li>
                      <li>Right to freeze / lock demat account.</li>
                      <li>Right to timely redressal of grievances.</li>
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                    <div className="flex items-center gap-2.5 text-[#ea2830]">
                      <FileCheck2 className="w-5 h-5" />
                      <h4 className="font-bold text-slate-900 text-base">Responsibilities</h4>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-4 font-medium leading-relaxed">
                      <li>Keep KYC details updated at all times (PAN, Aadhaar, Bank, Address).</li>
                      <li>Review contract notes, ledger statements, and CAS regularly.</li>
                      <li>Execute DIS slips with utmost diligence and check execution status.</li>
                    </ul>
                  </div>

                  {/* Code of Conduct */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
                    <div className="flex items-center gap-2.5 text-[#00aeee]">
                      <ShieldCheck className="w-5 h-5" />
                      <h4 className="font-bold text-slate-900 text-base">DP Code of Conduct</h4>
                    </div>
                    <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-4 font-medium leading-relaxed">
                      <li>Adherence to highest standards of professional integrity and fair dealing.</li>
                      <li>Maintaining complete confidentiality of client records and holdings.</li>
                      <li>Prompt execution of client instructions within stipulated statutory timelines.</li>
                    </ul>
                  </div>
                </div>

              </div>
            )}

            {/* ========================================================= */}
            {/* ANNEXURE B CONTENT                                        */}
            {/* ========================================================= */}
            {annexureTab === "annexure-b" && (
              <div className="space-y-10 animate-in fade-in duration-300">
                {/* Header */}
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#ea2830]">
                    Annexure B
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif text-[#011628] font-bold">
                    INFORMATION CONTAINED IN LINKS TO THE INVESTOR CHARTER
                  </h2>
                  <p className="text-sm text-slate-500 max-w-3xl mx-auto">
                    This document contains the complete official contents in the main Investor Charter mapped with the same superscript references (1–15) as notified under SEBI &amp; NSDL Master Circulars.
                  </p>
                </div>

                {/* Section 1: Para 4 (2) of Investor Charter - Value Added Services */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1a6eb5]">
                      Para 4 (2) of Investor Charter
                    </span>
                    <h3 className="text-xl font-bold text-[#011628] mt-1">
                      Point 1: Value Added Services
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* a. BSDA */}
                    <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-[#011628] text-base flex items-center gap-1.5">
                          <span>a. Basic Services Demat Account (BSDA)</span>
                          <sup className="text-[#ea2830] font-black text-sm">1</sup>
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        The facility of BSDA with limited services for eligible individuals was introduced with the objective of achieving wider financial inclusion and to encourage holding of demat accounts.
                      </p>
                      <div className="bg-white p-3.5 rounded-xl border border-blue-200/60 text-xs space-y-2 text-slate-700">
                        <p className="font-semibold text-slate-900">As per SEBI direction:</p>
                        <ul className="list-disc pl-4 space-y-1">
                          <li><strong>Up to ₹4 Lakhs:</strong> <span className="text-emerald-700 font-bold">No AMC</span> (Debt + Equity combined)</li>
                          <li><strong>₹4 Lakhs to ₹10 Lakhs:</strong> AMC <span className="text-blue-700 font-bold">not exceeding ₹100</span></li>
                        </ul>
                      </div>
                    </div>

                    {/* b. Transposition cum Dematerialization */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-[#011628] text-base flex items-center gap-1.5">
                          <span>b. Transposition cum dematerialization</span>
                          <sup className="text-[#ea2830] font-black text-sm">2</sup>
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        In case of transposition-cum-dematerialisation, client can get securities dematerialised in the same account if the names appearing on the certificates match with the names in which the account has been opened but are in a different order.
                      </p>
                      <p className="text-xs text-slate-500 bg-white p-3 rounded-xl border border-slate-200">
                        The same may be done by submitting the security certificates along with the <strong>Transposition Form</strong> and <strong>Demat Request Form (DRF)</strong>.
                      </p>
                    </div>

                    {/* c. Linkages with Clearing System */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-[#011628] text-base flex items-center gap-1.5">
                          <span>c. Linkages with Clearing System</span>
                          <sup className="text-[#ea2830] font-black text-sm">3</sup>
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        For actual delivery of securities to the clearing system from the selling brokers and delivery of securities from the clearing system to the buying broker.
                      </p>
                      <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-600">
                        Enables seamless settlement with Clearing Corporations for automated pay-in and pay-out of securities.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Point 3: Digitization of services provided by the depositories */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1a6eb5]">
                      Para 4 (2) of Investor Charter
                    </span>
                    <h3 className="text-xl font-bold text-[#011628] mt-1">
                      Point 3: Digitization of Services Provided by Depositories
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Technology solutions and e-facilities offered to demat account holders through DPs
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* a. E-account opening */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2.5">
                      <h4 className="font-bold text-[#011628] text-sm flex items-center gap-1.5">
                        <span>a. E-account opening</span>
                        <sup className="text-[#ea2830] font-black">4</sup>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Account opening through digital mode, popularly known as <strong>&quot;On-line Account opening&quot;</strong>, wherein investor intending to open the demat account can visit DP website, fill in the required information, submit the required documents, conduct video IPV and demat account gets opened without visiting DP&apos;s office.
                      </p>
                    </div>

                    {/* b. Online instructions for execution */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2.5">
                      <h4 className="font-bold text-[#011628] text-sm flex items-center gap-1.5">
                        <span>b. Online instructions for execution</span>
                        <sup className="text-[#ea2830] font-black">5</sup>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Internet-enabled services like <strong>Speed-e (NSDL)</strong> empower a demat account holder in managing his/her securities &apos;anytime-anywhere&apos; in an efficient and convenient manner and submit instructions online without the need to use paper. Allows Beneficial Owner (BO) to submit transfer and pledge instructions including margin pledge across android, windows, and iOS platforms.
                      </p>
                    </div>

                    {/* c. e-DIS / Demat Gateway */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2.5">
                      <h4 className="font-bold text-[#011628] text-sm flex items-center gap-1.5">
                        <span>c. e-DIS / Demat Gateway</span>
                        <sup className="text-[#ea2830] font-black">6</sup>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Investors can give instructions for transfer of securities through <strong>e-DIS</strong> apart from physical DIS. For on-market transfers, investors provide settlement number along with ISIN and quantity, and authorize each e-DIS by way of OTP and PIN/password generated at Depository end with robust risk containment measures.
                      </p>
                    </div>

                    {/* d. e-CAS facility */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2.5">
                      <h4 className="font-bold text-[#011628] text-sm flex items-center gap-1.5">
                        <span>d. e-CAS facility</span>
                        <sup className="text-[#ea2830] font-black">7</sup>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <strong>Consolidated Account Statements (CAS)</strong> are available online and could also be accessed through mobile app to facilitate investors to view their holdings in demat form across depositories and mutual funds.
                      </p>
                    </div>

                    {/* e. Miscellaneous services */}
                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2.5 md:col-span-2 lg:col-span-2">
                      <h4 className="font-bold text-[#011628] text-sm flex items-center gap-1.5">
                        <span>e. Miscellaneous services</span>
                        <sup className="text-[#ea2830] font-black">8</sup>
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Transaction alerts through SMS, e-locker facilities, chatbots for instantaneously responding to investor queries, e-Voting platforms, and automatic credit of corporate actions have also been developed.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 3: Para 5 (1) (b) of Investor Charter - Offline Mode Form Preview */}
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
                  {/* Section Header */}
                  <div className="border-b border-gray-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#ea2830]">
                        Para 5 (1) (b) of Investor Charter
                      </span>
                      <h3 className="text-xl font-bold text-[#011628] mt-1 flex items-center gap-2">
                        <span>Offline Mode Complaint / Query Form</span>
                        <sup className="text-[#ea2830] font-black">9</sup>
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Standardized format for lodging physical queries or grievances with the Depository Participant
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="https://api.ratnakarsecurities.com/uploads/2024-0154-Policy-Amendement_to_Publishing_Investor_Charter_for_Depositories_and_Depository_Participants_by_Participants_on_their_websites.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#ea2830] hover:bg-[#c91f27] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition"
                      >
                        <Download className="w-4 h-4" /> Download Official Policy PDF
                      </a>
                      <button
                        onClick={handlePrintForm}
                        className="inline-flex items-center gap-2 bg-[#011628] hover:bg-[#1a6eb5] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition cursor-pointer"
                      >
                        <Printer className="w-4 h-4" /> Print Complaint Form
                      </button>
                    </div>
                  </div>

                  {/* Visual Preview Notification Badge */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-600 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white border border-slate-300 text-[#011628] font-bold text-[11px] uppercase tracking-wider shadow-2xs">
                        <FileText className="w-3 h-3 text-slate-500" />
                        Preview — For Reference Only
                      </span>
                      <span className="font-medium text-slate-600 hidden sm:inline">•</span>
                      <span className="text-slate-500 font-medium">This is a static visual representation of the prescribed physical form.</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">
                      To fill &amp; submit, download the official PDF
                    </span>
                  </div>

                  {/* Static Form Preview Container - Full Width */}
                  <div
                    id="printable-dp-complaint-form"
                    className="w-full border-2 border-gray-200 rounded-2xl p-6 sm:p-8 bg-gray-50/40 space-y-5 select-none"
                  >
                    {/* Document Header */}
                    <div className="text-center space-y-1 border-b border-gray-200 pb-4">
                      <h4 className="text-base sm:text-lg font-bold text-[#011628] uppercase tracking-wide">
                        QUERY / COMPLAINT FORM – FOR DEPOSITORY SERVICES
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">
                        Ratnakar Securities Limited • DP ID: IN301983 • NSDL Reg: IN-DP-633-2021
                      </p>
                    </div>

                    {/* Static Preview Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
                      {/* Date */}
                      <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex flex-col justify-between">
                        <span className="font-semibold text-gray-900 block mb-1">Date:</span>
                        <span className="text-gray-400 font-mono text-xs">DD / MM / YYYY</span>
                      </div>

                      {/* Name of the investor */}
                      <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex flex-col justify-between">
                        <span className="font-semibold text-gray-900 block mb-1">Name of the investor:</span>
                        <div className="w-full border-b border-dotted border-gray-300 h-4" />
                      </div>

                      {/* Demat Account No */}
                      <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex flex-col justify-between">
                        <span className="font-semibold text-gray-900 block mb-1">Demat Account No:</span>
                        <div className="text-gray-700 flex items-center gap-1.5 flex-wrap">
                          <span>DP ID: <strong className="text-gray-900 font-bold">IN301983</strong> ;</span>
                          <span>Client ID:</span>
                          <span className="flex-1 min-w-[80px] border-b border-dotted border-gray-300 h-4 inline-block" />
                        </div>
                      </div>

                      {/* PAN */}
                      <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex flex-col justify-between">
                        <span className="font-semibold text-gray-900 block mb-1">PAN:</span>
                        <div className="w-full border-b border-dotted border-gray-300 h-4" />
                      </div>

                      {/* Mobile No */}
                      <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex flex-col justify-between">
                        <span className="font-semibold text-gray-900 block mb-1">Mobile No:</span>
                        <div className="w-full border-b border-dotted border-gray-300 h-4" />
                      </div>

                      {/* Email ID */}
                      <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex flex-col justify-between">
                        <span className="font-semibold text-gray-900 block mb-1">Email ID:</span>
                        <div className="w-full border-b border-dotted border-gray-300 h-4" />
                      </div>
                    </div>

                    {/* Type & Sub-type of Query / Complaint */}
                    <div className="p-3.5 bg-white rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-700">
                      <span className="font-semibold text-gray-900 block mb-2">Type &amp; Sub-type of Query / Complaint:</span>
                      <div className="w-full border-b border-dotted border-gray-300 h-4" />
                    </div>

                    {/* Query / Complaint in detail */}
                    <div className="p-4 bg-white rounded-xl border border-gray-200 text-xs sm:text-sm space-y-2">
                      <span className="font-semibold text-gray-900 block">Query / Complaint in detail:</span>
                      <div className="min-h-[110px] border border-dashed border-gray-300 rounded-lg p-3.5 text-gray-400 text-xs bg-gray-50/50 flex flex-col justify-between">
                        <span className="italic">[Provide complete description of the grievance with transaction dates, ISIN, and reference numbers]</span>
                        <div className="space-y-3 pt-4">
                          <div className="border-b border-dotted border-gray-200 w-full" />
                          <div className="border-b border-dotted border-gray-200 w-full" />
                        </div>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 leading-relaxed font-medium">
                      <strong>Note:</strong> For trading and broking related queries/complaints, you may approach your stockbroker or exchange, where a stockbroker is a member. Trading and broking related query and complaint doesn&apos;t fall under the purview of depository.
                    </div>

                    {/* Signatures */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-3 border-t border-gray-200 text-xs font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        <span>Date &amp; Place:</span>
                        <span className="border-b border-dotted border-gray-400 w-36 inline-block" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span>Name and signature of Demat account holder/s:</span>
                        <span className="border-b border-dotted border-gray-400 w-40 inline-block" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4: Para 5(2) of Investor Charter - Illustration of New Grievance Redressal System */}
                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 space-y-6">
                  <div className="border-b border-gray-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1a6eb5]">
                      Para 5(2) of Investor Charter
                    </span>
                    <h3 className="text-xl font-bold text-[#011628] mt-1 flex items-center gap-2">
                      <span>Illustration of New Grievance Redressal System</span>
                      <sup className="text-[#ea2830] font-black">10</sup>
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Structured process flow diagram and time limits for resolution through SEBI SCORES and SMART ODR
                    </p>
                  </div>

                  {/* Grievance Flowchart Diagram */}
                  <div className="space-y-4 max-w-3xl mx-auto">
                    {/* Level 1 */}
                    <div className="bg-[#011628] text-white p-4 rounded-2xl text-center shadow-md space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#00aeee]">Level 1</span>
                      <h4 className="text-base font-bold">Client Grievance initiated directly with Market Participant (DP)</h4>
                      <p className="text-xs text-slate-300">Time limit: DP endeavours to resolve within 21 calendar days</p>
                    </div>

                    <div className="flex justify-center">
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </div>

                    {/* Level 2 */}
                    <div className="bg-[#1a6eb5] text-white p-4 rounded-2xl text-center shadow-md space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-sky-200">Level 2</span>
                      <h4 className="text-base font-bold">Escalate through SEBI SCORES 2.0 Portal</h4>
                      <p className="text-xs text-blue-100">
                        Two-level review: First review by Designated Body (NSDL), Second review by SEBI
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </div>

                    {/* Level 3: SMART ODR Portal */}
                    <div className="bg-[#ea2830] text-white p-5 rounded-2xl shadow-md space-y-3">
                      <div className="text-center space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-red-200">Level 3</span>
                        <h4 className="text-lg font-bold">SMART ODR Portal (Online Conciliation &amp; Arbitration)</h4>
                        <p className="text-xs text-red-100">
                          If investor is not satisfied with response on SCORES or from DP, initiate dispute on SMART ODR
                        </p>
                      </div>

                      {/* Stages of ODR */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-slate-900 text-xs">
                        <div className="bg-white p-3.5 rounded-xl space-y-1">
                          <strong className="text-[#011628] block">Stage 1: Review Process</strong>
                          <p className="text-gray-600">MII reviews matter to resolve between DP and investor.</p>
                          <span className="inline-block bg-blue-100 text-[#011628] font-bold px-2 py-0.5 rounded text-[10px]">Time limit: 21 days</span>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl space-y-1">
                          <strong className="text-[#011628] block">Stage 2: Conciliation</strong>
                          <p className="text-gray-600">Conciliator endeavours for amicable settlement.</p>
                          <span className="inline-block bg-blue-100 text-[#011628] font-bold px-2 py-0.5 rounded text-[10px]">21 days (ext. by 10 days)</span>
                        </div>

                        <div className="bg-white p-3.5 rounded-xl space-y-1">
                          <strong className="text-[#011628] block">Stage 3: Arbitration</strong>
                          <p className="text-gray-600">Arbitrator(s) conclude arbitral proceedings and award.</p>
                          <span className="inline-block bg-blue-100 text-[#011628] font-bold px-2 py-0.5 rounded text-[10px]">30 days (ext. by 30 days)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    </div>

                    {/* Courts */}
                    <div className="bg-gray-100 border border-gray-300 text-gray-800 p-3.5 rounded-2xl text-center space-y-0.5">
                      <h5 className="font-bold text-sm">Courts of Law</h5>
                      <p className="text-xs text-gray-600">If investor is not satisfied with the arbitration award, they may approach Court.</p>
                    </div>
                  </div>
                </div>

                {/* Section 5: Para 7 of Investor Charter - Dos and Don'ts for Investor (Full 20 Points) */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ea2830]">
                      Para 7 of Investor Charter
                    </span>
                    <h3 className="text-xl font-bold text-[#011628] mt-1 flex items-center gap-2">
                      <span>Dos and Don&apos;ts for Investors (Full Guidelines i – xx)</span>
                      <sup className="text-[#ea2830] font-black">11</sup>
                    </h3>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#011628] text-white font-bold uppercase text-[11px] tracking-wider">
                          <th scope="col" className="p-3.5 w-16 text-center border-r border-slate-700/50">Sr. No.</th>
                          <th scope="col" className="p-3.5">Guidance for Investors</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                        {[
                          { no: "i.", text: "Always deal with a SEBI registered Depository Participant for opening a demat account." },
                          { no: "ii.", text: "Read all the documents carefully before signing them." },
                          { no: "iii.", text: "Before granting Power of attorney to operate your demat account to an intermediary like Stock Broker, Portfolio Management Services (PMS) etc., carefully examine the scope and implications of powers being granted." },
                          { no: "iv.", text: "Always make payments to registered intermediary using banking channels. No payment should be made in name of employee of intermediary." },
                          { no: "v.", text: "Accept the Delivery Instruction Slip (DIS) book from your DP only (pre-printed with a serial number along with your Client ID) and keep it in safe custody and do not sign or issue blank or partially filled DIS slips. Always mention the details like ISIN, number of securities accurately. In case of any queries, please contact your DP or broker and it should be signed by all demat account holders. Strike out any blank space on the slip and Cancellations or corrections on the DIS should be initialed or signed by all the account holder(s). Do not leave your instruction slip book with anyone else. Do not sign blank DIS as it is equivalent to a bearer cheque." },
                          { no: "vi.", text: "Inform any change in your Personal Information (for example address or Bank Account details, email ID, Mobile number) linked to your demat account in the prescribed format and obtain confirmation of updation in system." },
                          { no: "vii.", text: "Mention your Mobile Number and email ID in account opening form to receive SMS alerts and regular updates directly from depository." },
                          { no: "viii.", text: "Always ensure that the mobile number and email ID linked to your demat account are the same as provided at the time of account opening/updation." },
                          { no: "ix.", text: "Do not share password of your online trading and demat account with anyone." },
                          { no: "x.", text: "Do not share One Time Password (OTP) received from banks, brokers, etc. These are meant to be used by you only." },
                          { no: "xi.", text: "Do not share login credentials of e-facilities provided by the depositories such as e-DIS/demat gateway, SPEED-e/easiest etc. with anyone else." },
                          { no: "xii.", text: "Demat is mandatory for any transfer of securities of Listed public limited companies." },
                          { no: "xiii.", text: "If you have any grievance in respect of your demat account, please write to designated email IDs of depositories or you may lodge the same with SEBI online at https://scores.sebi.gov.in" },
                          { no: "xiv.", text: "Keep a record of documents signed, DIS issued and account statements received." },
                          { no: "xv.", text: "As Investors you are required to verify the transaction statement carefully for all debits and credits in your account. In case of any unauthorized debit or credit, inform the DP or your respective Depository." },
                          { no: "xvi.", text: "Appoint a nominee to facilitate your heirs in obtaining the securities in your demat account, on completion of the necessary procedures." },
                          { no: "xvii.", text: "Register for Depository's internet based facility or download mobile app of the depository to monitor your holdings." },
                          { no: "xviii.", text: "Ensure that, both, your holding and transaction statements are received periodically as instructed to your DP. You are entitled to receive a transaction statement every month if you have any transactions." },
                          { no: "xix.", text: "Do not follow herd mentality for investments. Seek expert and professional advice for your investments." },
                          { no: "xx.", text: "Beware of assured/fixed returns." },
                        ].map((item, idx) => (
                          <tr key={item.no} className={idx % 2 === 1 ? "bg-slate-50/50" : ""}>
                            <td className="p-3.5 text-center font-bold text-[#1a6eb5] border-r border-slate-100">{item.no}</td>
                            <td className="p-3.5 leading-relaxed">{item.text}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section 6: Para 8 of Investor Charter - Rights of Investors (Full 14 Points) */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1a6eb5]">
                      Para 8 of Investor Charter
                    </span>
                    <h3 className="text-xl font-bold text-[#011628] mt-1 flex items-center gap-2">
                      <span>Rights of Investors (Points i – xiv)</span>
                      <sup className="text-[#ea2830] font-black">12</sup>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
                    {[
                      { no: "i.", text: "Receive a copy of KYC, copy of account opening documents." },
                      { no: "ii.", text: "No minimum balance is required to be maintained in a demat account." },
                      { no: "iii.", text: "No charges are payable for opening of demat accounts." },
                      { no: "iv.", text: "If executed, receive a copy of Power of Attorney. However, Power of Attorney is not a mandatory requirement as per SEBI / Stock Exchanges. You have the right to revoke any authorization given at any time." },
                      { no: "v.", text: "You can open more than one demat account in the same name with single DP / multiple DPs." },
                      { no: "vi.", text: "Receive statement of accounts periodically. In case of any discrepancies in statements, take up the same with the DP immediately. If the DP does not respond, take up the matter with the Depositories." },
                      { no: "vii.", text: "Pledge and /or any other interest or encumbrance can be created on demat holdings." },
                      { no: "viii.", text: "Right to give standing instructions with regard to the crediting of securities in demat account." },
                      { no: "ix.", text: "Investor can exercise its right to freeze/defreeze his/her demat account or specific securities / specific quantity of securities in the account, maintained with the DP." },
                      { no: "x.", text: "In case of any grievances, Investor has right to approach Participant or Depository or SEBI for getting the same resolved within prescribed timelines." },
                      { no: "xi.", text: "Every eligible investor shareholder has a right to cast its vote on various resolutions proposed by the companies for which Depositories have developed an internet based 'e-Voting' platform." },
                      { no: "xii.", text: "Receive information about charges and fees. Any charges/tariff agreed upon shall not increase unless a notice in writing of not less than thirty days is given to the Investor." },
                      { no: "xiii.", text: "Right to indemnification for any loss caused due to the negligence of the Depository or the participant." },
                      { no: "xiv.", text: "Right to opt out of the Depository system in respect of any security." },
                    ].map((item) => (
                      <div key={item.no} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                        <span className="font-bold text-[#1a6eb5] shrink-0">{item.no}</span>
                        <span className="leading-relaxed">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 7: Para 9 of Investor Charter - Responsibilities of Investors (Full 9 Points) */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ea2830]">
                      Para 9 of Investor Charter
                    </span>
                    <h3 className="text-xl font-bold text-[#011628] mt-1 flex items-center gap-2">
                      <span>Responsibilities of Investors (Points i – ix)</span>
                      <sup className="text-[#ea2830] font-black">13</sup>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm text-slate-700">
                    {[
                      { no: "i.", text: "Deal with a SEBI registered DP for opening demat account, KYC and Depository activities." },
                      { no: "ii.", text: "Provide complete documents for account opening and KYC (Know Your Client). Fill all required details in Account Opening Form / KYC form in own handwriting and cancel out blanks." },
                      { no: "iii.", text: "Read all documents and conditions being agreed before signing the account opening form." },
                      { no: "iv.", text: "Accept Delivery Instruction Slip (DIS) book from DP only (preprinted with serial number and client ID), keep in safe custody, and do not sign blank DIS." },
                      { no: "v.", text: "Always mention details like ISIN, number of securities accurately." },
                      { no: "vi.", text: "Inform any change in information linked to demat account and obtain confirmation of updation in the system." },
                      { no: "vii.", text: "Regularly verify balances and demat statement and reconcile with trades / transactions." },
                      { no: "viii.", text: "Appoint nominee(s) to facilitate heirs in obtaining securities in their demat account." },
                      { no: "ix.", text: "Do not fall prey to fraudsters sending emails and SMSs luring to trade in stocks / securities promising huge profits." },
                    ].map((item) => (
                      <div key={item.no} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                        <span className="font-bold text-[#ea2830] text-xs block">{item.no}</span>
                        <p className="leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 8: Para 10 of Investor Charter - Code of Conduct for Depositories (Points a – m) */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1a6eb5]">
                      Para 10 of Investor Charter
                    </span>
                    <h3 className="text-xl font-bold text-[#011628] mt-1 flex items-center gap-2">
                      <span>Code of Conduct for Depositories</span>
                      <sup className="text-[#ea2830] font-black">14</sup>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      (Part D of Third Schedule of SEBI (Depositories and Participants) Regulations, 2018)
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <p className="font-bold text-slate-900">A Depository shall:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      {[
                        { pt: "(a)", text: "always abide by the provisions of the SEBI Act, 1992 Depositories Act, 1996, any Rules or Regulations framed thereunder, circulars, guidelines and any other directions issued by the Board from time to time." },
                        { pt: "(b)", text: "adopt appropriate due diligence measures." },
                        { pt: "(c)", text: "take effective measures to ensure implementation of proper risk management framework and good governance practices." },
                        { pt: "(d)", text: "take appropriate measures towards investor protection and education of investors." },
                        { pt: "(e)", text: "treat all its applicants/members in a fair and transparent manner." },
                        { pt: "(f)", text: "promptly inform SEBI of violations of the provisions of the SEBI Act, 1992 the Depositories Act, 1996, rules, regulations, circulars, guidelines or any other directions by any of its issuer or issuer’s agent." },
                        { pt: "(g)", text: "take a proactive and responsible attitude towards safeguarding the interests of investors, integrity of depository’s systems and the securities market." },
                        { pt: "(h)", text: "endeavor for introduction of best business practices amongst itself and its members." },
                        { pt: "(i)", text: "act in utmost good faith and shall avoid conflict of interest in the conduct of its functions." },
                        { pt: "(j)", text: "not indulge in unfair competition, which is likely to harm the interests of any other Depository, their participants or investors or is likely to place them in a disadvantageous position while competing for or executing any assignment." },
                        { pt: "(k)", text: "segregate roles and responsibilities of key management personnel within the depository including: clearly mapping legal/regulatory duties, defining delegation of powers, and assigning regulatory/risk/compliance aspects to business and support teams." },
                        { pt: "(l)", text: "be responsible for the acts or omissions of its employees in respect of the conduct of its business." },
                        { pt: "(m)", text: "monitor the compliance of the rules and regulations by the participants and shall further ensure that their conduct is in a manner that will safeguard the interest of investors and the securities market." },
                      ].map((item) => (
                        <div key={item.pt} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                          <span className="font-bold text-[#1a6eb5] shrink-0">{item.pt}</span>
                          <span className="leading-relaxed">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 9: Para 11 of Investor Charter - Code of Conduct for Participants (Points 1 – 22) */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ea2830]">
                      Para 11 of Investor Charter
                    </span>
                    <h3 className="text-xl font-bold text-[#011628] mt-1 flex items-center gap-2">
                      <span>Code of Conduct for Depository Participants (DPs)</span>
                      <sup className="text-[#ea2830] font-black">15</sup>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      (Part A of Third Schedule of SEBI (Depositories and Participants) Regulations, 2018)
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                    {[
                      { no: "1.", text: "A participant shall make all efforts to protect the interests of investors." },
                      { no: "2.", text: "A participant shall always endeavour to— (a) render the best possible advice to the clients having regard to the client’s needs and environments and his own professional skills; (b) ensure that all professional dealings are effected in a prompt, effective and efficient manner; (c) inquiries from investors are adequately dealt with; (d) grievances of investors are redressed without any delay." },
                      { no: "3.", text: "A participant shall maintain high standards of integrity in all its dealings with its clients and other intermediaries, in the conduct of its business." },
                      { no: "4.", text: "A participant shall be prompt and diligent in opening of a beneficial owner account, dispatch of the dematerialisation request form, rematerialisation request form and execution of debit instruction slip and in all the other activities undertaken by him on behalf of the beneficial owners." },
                      { no: "5.", text: "A participant shall endeavour to resolve all the complaints against it or in respect of the activities carried out by it as quickly as possible, and not later than one month of receipt." },
                      { no: "6.", text: "A participant shall not increase charges/fees for the services rendered without proper advance notice to the beneficial owners." },
                      { no: "7.", text: "A participant shall not indulge in any unfair competition, which is likely to harm the interests of other participants or investors or is likely to place such other participants in a disadvantageous position while competing for or executing any assignment." },
                      { no: "8.", text: "A participant shall not make any exaggerated statement whether oral or written to the clients either about its qualifications or capability to render certain services or about its achievements in regard to services rendered to other clients." },
                      { no: "9.", text: "A participant shall not divulge to other clients, press or any other person any information about its clients which has come to its knowledge except with the approval/authorisation of the clients or when it is required to disclose the information under the requirements of any Act, Rules or Regulations." },
                      { no: "10.", text: "A participant shall co-operate with SEBI as and when required." },
                      { no: "11.", text: "A participant shall maintain the required level of knowledge and competency and abide by the provisions of the Act, Rules, Regulations and circulars and directions issued by the Board. The participant shall also comply with the award of the Ombudsman passed under the SEBI (Ombudsman) Regulations, 2003." },
                      { no: "12.", text: "A participant shall not make any untrue statement or suppress any material fact in any documents, reports, papers or information furnished to SEBI." },
                      { no: "13.", text: "A participant shall not neglect or fail or refuse to submit to SEBI or other agencies with which it is registered, such books, documents, correspondence, and papers or any part thereof as may be demanded/requested from time to time." },
                      { no: "14.", text: "A participant shall ensure that SEBI is promptly informed about any action, legal proceedings, etc., initiated against it in respect of material breach or non-compliance by it, of any law, Rules, regulations, directions of the Board or of any other regulatory body." },
                      { no: "15.", text: "A participant shall maintain proper inward system for all types of mail received in all forms." },
                      { no: "16.", text: "A participant shall follow the maker—checker concept in all of its activities to ensure the accuracy of the data and as a mechanism to check unauthorised transaction." },
                      { no: "17.", text: "A participant shall take adequate and necessary steps to ensure that continuity in data and record keeping is maintained and that the data or records are not lost or destroyed. It shall also ensure that for electronic records and data, up-to-date back up is always available with it." },
                      { no: "18.", text: "A participant shall provide adequate freedom and powers to its compliance officer for the effective discharge of his duties." },
                      { no: "19.", text: "A participant shall ensure that it has satisfactory internal control procedures in place as well as adequate financial and operational capabilities which can be reasonably expected to take care of any losses arising due to theft, fraud and other dishonest acts, professional misconduct or omissions." },
                      { no: "20.", text: "A participant shall be responsible for the acts or omissions of its employees and agents in respect of the conduct of its business." },
                      { no: "21.", text: "A participant shall ensure that the senior management, particularly decision makers have access to all relevant information about the business on a timely basis." },
                      { no: "22.", text: "A participant shall ensure that good corporate policies and corporate governance are in place." },
                    ].map((item) => (
                      <div key={item.no} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5">
                        <span className="font-bold text-[#ea2830] shrink-0">{item.no}</span>
                        <span className="leading-relaxed">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 10: Official Links Summary Table */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold text-[#011628]">
                      Official Reference Links for Annexure B Points
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#011628] text-white font-bold text-xs uppercase tracking-wider">
                          <th scope="col" className="p-3.5 w-16 text-center border-r border-slate-700/50">Point</th>
                          <th scope="col" className="p-3.5 w-1/3 border-r border-slate-700/50">Activity / Category</th>
                          <th scope="col" className="p-3.5">Reference Link / Official Direction</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                        {[
                          { pt: "1", cat: "Basic Services Demat Account (BSDA)", url: "https://nsdl.co.in/downloadables/pdf/BSDA_Scheme.pdf", label: "NSDL BSDA Facility Norms & Guidelines" },
                          { pt: "2", cat: "Transposition cum Dematerialisation", url: "https://nsdl.co.in/downloadables/pdf/Transposition_Request_Form.pdf", label: "NSDL Transposition Form & Procedure" },
                          { pt: "3", cat: "Linkages with Clearing System", url: "https://nsdl.co.in/services/clearing.php", label: "Depository Clearing Settlement Operations" },
                          { pt: "4", cat: "E-account Opening Facility (e-KYC)", url: "https://nsdl.co.in/services/e-kyc.php", label: "Online Digital Demat Onboarding Guidelines" },
                          { pt: "5", cat: "SPEED-e Online Execution Facility", url: "https://eservices.nsdl.com", label: "NSDL SPEED-e Internet Based Instruction System" },
                          { pt: "6", cat: "e-DIS (Electronic Delivery Instruction)", url: "https://nsdl.co.in/services/edis.php", label: "NSDL Demat Gateway & e-DIS Guidelines" },
                          { pt: "7", cat: "e-CAS (Electronic Account Statement)", url: "https://nsdl.co.in/services/cas.php", label: "NSDL Consolidated Account Statement Portal" },
                          { pt: "8", cat: "Miscellaneous Services (SMS / IDeAS)", url: "https://eservices.nsdl.com", label: "NSDL e-Services (IDeAS & Alerts)" },
                          { pt: "9", cat: "Depository Grievance Redressal (ePass)", url: "https://www.epass.nsdl.com/Login/Investor", label: "NSDL e-Pass Investor Complaints Portal" },
                          { pt: "10", cat: "SEBI SCORES 2.0 Redressal", url: "https://scores.sebi.gov.in", label: "SEBI SCORES Centralized Grievance Platform" },
                          { pt: "11", cat: "SMART ODR Portal", url: "https://smartodr.in", label: "Securities Market Online Dispute Resolution Portal" },
                          { pt: "12", cat: "Dos & Don'ts for Demat Holders", url: "https://nsdl.co.in/investor-awareness.php", label: "NSDL Investor Safety Guidelines & Awareness" },
                          { pt: "13", cat: "Rights & Responsibilities of Investors", url: "https://nsdl.co.in/downloadables/pdf/Rights_Responsibilities.pdf", label: "Investor Charter Annexures on Investor Protection" },
                          { pt: "14", cat: "Code of Conduct for Depositories", url: "https://www.sebi.gov.in/legal/regulations/jan-2018/sebi-depositories-and-participants-regulations-2018_40778.html", label: "SEBI (Depositories and Participants) Regulations, 2018" },
                          { pt: "15", cat: "Code of Conduct for Participants (DPs)", url: "https://www.sebi.gov.in/legal/regulations/jan-2018/sebi-depositories-and-participants-regulations-2018_40778.html", label: "SEBI DP Code of Conduct Guidelines" },
                        ].map((item) => (
                          <tr key={item.pt} className="hover:bg-slate-50/75 transition-colors">
                            <td className="p-3.5 text-center font-bold text-slate-900 border-r border-slate-100">{item.pt}</td>
                            <td className="p-3.5 font-bold text-[#011628] border-r border-slate-100">{item.cat}</td>
                            <td className="p-3.5">
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-[#1a6eb5] hover:text-[#011628] font-bold hover:underline"
                              >
                                <span>{item.label}</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            )}

          </div>
        )}

        {/* Regulatory Footer Information Box */}
        <div className="bg-gradient-to-r from-[#011628] to-[#012e54] text-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#00aeee]/20 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">Ratnakar Securities Limited</h4>
              <p className="text-xs text-[#9fc8e0] mt-0.5">
                SEBI Registration No. of NSE &amp; BSE : INZ000191735 | SEBI Registration No. of NSDL : IN-DP-633-2021
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SEBI SCORES 2.0 Portal"
                className="bg-[#00aeee] hover:bg-[#0098d0] text-[#011628] font-bold px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1 cursor-pointer"
              >
                SCORES 2.0 <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://smartodr.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMART ODR Dispute Resolution Portal"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1 border border-white/20 cursor-pointer"
              >
                SMART ODR <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* MODAL DIALOGS                                             */}
      {/* ========================================================= */}
      
      {/* 1. BSDA Modal */}
      <DpModal
        isOpen={activeModal === "BSDA"}
        onClose={() => setActiveModal(null)}
        title="Basic Services Demat Account (BSDA) Guidelines"
        subtitle="SEBI & NSDL Circular Norms"
      >
        <div className="space-y-4">
          <p>
            SEBI has instituted the <strong>Basic Services Demat Account (BSDA)</strong> facility to make holding demat accounts affordable for small retail individual investors:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
            <h5 className="font-bold text-slate-900">Revised Annual Maintenance Charges (AMC) Structure:</h5>
            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-700">
              <li><strong>Holding value up to ₹4,00,000 (Equity + Debt combined):</strong> <span className="text-emerald-700 font-bold">NIL (No AMC)</span></li>
              <li><strong>Holding value between ₹4,00,001 and ₹10,00,000:</strong> <span className="text-blue-700 font-bold">Maximum ₹100 per annum</span></li>
              <li><strong>Holding value above ₹10,00,000:</strong> Regular DP tariff applicable</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500">
            Eligibility: Individual investors holding only one demat account as sole or first holder across all depositories.
          </p>
        </div>
      </DpModal>

      {/* 2. Transposition Modal */}
      <DpModal
        isOpen={activeModal === "TCD"}
        onClose={() => setActiveModal(null)}
        title="Transposition cum Dematerialisation"
        subtitle="Physical Certificates Order Adjustment"
      >
        <div className="space-y-4">
          <p>
            Transposition enables physical share certificates with different joint name orders to be dematerialized directly into a single demat account held by the same joint holders without needing prior title transfer on physical certificates.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 text-sm">
            <p><strong>Required Documents:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Transposition Request Form (TRF) signed by all joint holders</li>
              <li>Demat Request Form (DRF) along with physical certificates</li>
              <li>Client Master Report (CMR) of the destination demat account</li>
            </ul>
          </div>
        </div>
      </DpModal>

      {/* 3. Linkages with Clearing System */}
      <DpModal
        isOpen={activeModal === "LWCS"}
        onClose={() => setActiveModal(null)}
        title="Linkages with Clearing System"
        subtitle="Automatic Settlement Delivery"
      >
        <div className="space-y-4">
          <p>
            Depositories are seamlessly linked with Clearing Corporations of Stock Exchanges (NSE Clearing, Indian Clearing Corporation Limited) for auto-settlement, early pay-in (EPI), and direct payouts of shares into investor demat accounts on trade settlement days.
          </p>
        </div>
      </DpModal>

      {/* 4. E-Account Opening */}
      <DpModal
        isOpen={activeModal === "EO"}
        onClose={() => setActiveModal(null)}
        title="Digital E-Account Opening (e-KYC)"
        subtitle="Paperless Onboarding"
      >
        <div className="space-y-4">
          <p>
            Investors can open a Demat &amp; Trading account paperlessly within minutes using Aadhaar OTP e-Sign, Digilocker KYC document extraction, and online video in-person verification (VIPV).
          </p>
        </div>
      </DpModal>

      {/* 5. Online Instructions (SPEED-e) */}
      <DpModal
        isOpen={activeModal === "OIFE"}
        onClose={() => setActiveModal(null)}
        title="Online Instructions for Execution (SPEED-e)"
        subtitle="Internet Demat Submissions"
      >
        <div className="space-y-4">
          <p>
            <strong>SPEED-e</strong> is NSDL&apos;s internet-based facility that enables demat account holders to submit delivery instructions to their DP electronically using password or digital signature without submitting physical DIS slips.
          </p>
        </div>
      </DpModal>

      {/* 6. e-DIS Modal */}
      <DpModal
        isOpen={activeModal === "DG"}
        onClose={() => setActiveModal(null)}
        title="Electronic Delivery Instruction Slip (e-DIS) & Demat Gateway"
        subtitle="Secure OTP Authentication"
      >
        <div className="space-y-4">
          <p>
            e-DIS allows investors who have not submitted Power of Attorney (POA) / DDPI to pre-authorize the transfer of shares for sell trades using TPIN and OTP verification directly on the depository website.
          </p>
        </div>
      </DpModal>

      {/* 7. e-CAS Modal */}
      <DpModal
        isOpen={activeModal === "ECAS"}
        onClose={() => setActiveModal(null)}
        title="Electronic Consolidated Account Statement (e-CAS)"
        subtitle="Consolidated Portfolio View"
      >
        <div className="space-y-4">
          <p>
            <strong>e-CAS</strong> consolidates all investments across equity shares, mutual funds, corporate bonds, government securities, and sovereign gold bonds held across NSDL, CDSL, and RTAs into a single password-protected electronic statement delivered every month.
          </p>
        </div>
      </DpModal>

      {/* 8. Miscellaneous Services */}
      <DpModal
        isOpen={activeModal === "MS"}
        onClose={() => setActiveModal(null)}
        title="Depository Miscellaneous Value Added Services"
        subtitle="IDeAS & Mobile Alerts"
      >
        <div className="space-y-4">
          <p>
            Includes <strong>IDeAS</strong> (Internet-based Demat Account Statement) for real-time portfolio tracking, automatic SMS alerts on debit/credit transactions, e-Voting for annual general meetings, and direct credit of corporate actions.
          </p>
        </div>
      </DpModal>

      {/* 9. Offline Form Printable Modal */}
      <DpModal
        isOpen={activeModal === "OFFLINE_FORM"}
        onClose={() => setActiveModal(null)}
        title="Offline Investor Grievance Lodgment Form (Form DP-G1)"
        subtitle="Physical Submission to DP / NSDL"
      >
        <div className="space-y-4 text-xs sm:text-sm">
          <p className="text-slate-600">
            Investors can download, print, and submit this standardized physical form to our registered compliance office or nearest branch for depository queries and grievances.
          </p>
          <div className="border border-slate-200 p-5 rounded-2xl space-y-3.5 bg-slate-50/50">
            <div className="border-b border-slate-200 pb-3 text-center">
              <h5 className="font-bold text-[#011628] text-sm uppercase tracking-wider">
                RATNAKAR SECURITIES LIMITED • DEPOSITORY PARTICIPANT
              </h5>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                DP ID: IN301983 • NSDL Reg: IN-DP-633-2021 • Annexure B (Point 9)
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">Applicant Name:</span>
                <span className="font-semibold text-slate-800">Full Name as per Demat Master</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">Demat Client ID:</span>
                <span className="font-mono font-bold text-slate-800">IN301983 - [ 8 Digits ]</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">PAN Number:</span>
                <span className="font-mono font-bold text-slate-800">10-Digit PAN</span>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[10px] font-bold uppercase">Contact Info:</span>
                <span className="font-medium text-slate-800">Registered Mobile &amp; Email</span>
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
              <span className="text-slate-400 block text-[10px] font-bold uppercase mb-1">Grievance Particulars:</span>
              <p className="text-slate-600 text-xs">
                Complete description of issue with relevant Security ISIN, transaction dates, and DIS slip numbers.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <span className="text-xs text-slate-500 font-medium">Compliance Desk: dp@ratnakarsecurities.com</span>
            <button
              onClick={handlePrintForm}
              className="inline-flex items-center gap-2 bg-[#011628] hover:bg-[#1a6eb5] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition cursor-pointer"
            >
              <Printer className="w-4 h-4" /> Print Full Form (A4)
            </button>
          </div>
        </div>
      </DpModal>

      {/* 10. Grievance Redressal Mechanism Modal */}
      <DpModal
        isOpen={activeModal === "GRIEVANCE_FLOW"}
        onClose={() => setActiveModal(null)}
        title="Grievance Redressal Mechanism & Statutory Timelines"
        subtitle="SEBI & NSDL Redressal Escalation Matrix"
      >
        <div className="space-y-4 text-xs sm:text-sm">
          <p className="text-slate-700 leading-relaxed">
            SEBI and Depositories have established a multi-tiered grievance redressal framework to safeguard investor interests:
          </p>
          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="font-bold text-[#011628] block">Tier 1: Depository Participant (DP)</span>
              <p className="text-slate-600 text-xs mt-0.5">
                Resolution within <strong>21 calendar days</strong> from the receipt of physical or online complaint.
              </p>
            </div>
            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-200">
              <span className="font-bold text-[#1a6eb5] block">Tier 2: SEBI SCORES 2.0 Portal</span>
              <p className="text-slate-600 text-xs mt-0.5">
                First review by Designated Body (NSDL) followed by SEBI review if unresolved or dissatisfied.
              </p>
            </div>
            <div className="p-3 bg-red-50/60 rounded-xl border border-red-200">
              <span className="font-bold text-[#ea2830] block">Tier 3: SMART ODR Portal (Online Dispute Resolution)</span>
              <p className="text-slate-600 text-xs mt-0.5">
                Independent conciliation (21 days) and legally binding arbitration (30 days) via <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#ea2830]">smartodr.in</a>.
              </p>
            </div>
          </div>
        </div>
      </DpModal>

    </div>
  );
}
