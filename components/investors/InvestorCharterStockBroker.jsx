"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  XCircle
} from "lucide-react";
import { getSebiComplaintsPublic } from "@/services/sebiComplaints";

export default function InvestorCharterStockBroker({ defaultTab = "complaints" }) {
  const [data, setData] = useState(null);
  const [selectedFinYear, setSelectedFinYear] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(defaultTab); // "complaints" | "charter-details"

  const fetchTrends = useCallback(async (finyear = "") => {
    try {
      setLoading(true);
      setError(null);
      
      const res = await getSebiComplaintsPublic(finyear);
      
      if (res && res.success && res.data) {
        setData(res.data);
        setSelectedFinYear(res.data.selectedFinYear || finyear);
      } else if (res && res.data) {
        setData(res.data);
        setSelectedFinYear(res.data.selectedFinYear || finyear);
      } else {
        throw new Error(res?.message || "No data returned from SEBI complaints API.");
      }
    } catch (err) {
      console.error("Error fetching SEBI complaints trends:", err);
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

  // Extract primary consolidated PDF URL for the selected financial year
  const activePdfUrl = 
    data?.monthlyTrends?.find((t) => t.fileurl || t.FILEURL)?.fileurl || 
    data?.monthlyTrends?.find((t) => t.fileurl || t.FILEURL)?.FILEURL || 
    null;

  // Latest month data for Table 1 (Month-End status)
  const latestMonthRecord = data?.monthlyTrends && data.monthlyTrends.length > 0
    ? data.monthlyTrends[data.monthlyTrends.length - 1]
    : null;
  const latestMonthName = latestMonthRecord
    ? (latestMonthRecord.month_name || latestMonthRecord.MONTH_NAME || "Latest Month")
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
            <span className="font-semibold text-gray-800">Investor Charter of Stock Broker</span>
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
                  <Building2 className="w-7 h-7 text-[#00aeee]" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#011628] tracking-tight">
                    Investor Charter & Complaints Disposal Trends
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-[#ea2830] uppercase tracking-wider mt-0.5">
                    Stock Broker Division • Ratnakar Securities Ltd.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-1">
                Display of monthly complaints data received against the Stock Broker and annual disposal trends in compliance with SEBI master circular guidelines.
              </p>
            </div>

            {/* Financial Year Selector & Download PDF Toolbar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
              {/* Financial Year Dropdown */}
              <div className="flex items-center bg-gray-50 hover:bg-gray-100/80 rounded-2xl px-4 py-2.5 border border-gray-300 transition shadow-2xs">
                <Calendar className="w-4 h-4 text-gray-500 mr-2 shrink-0" />
                <label htmlFor="finyear-select" className="text-xs font-bold text-gray-600 uppercase tracking-wider mr-2 shrink-0">
                  FY:
                </label>
                <div className="relative inline-block">
                  <select
                    id="finyear-select"
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
                className="p-2.5 rounded-2xl border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 transition shadow-2xs disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-[#00aeee]" : ""}`} />
              </button>

              {/* Download Official SEBI Consolidated PDF */}
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
                  href="https://api.ratnakarsecurities.com/uploads/Investor_Charter_Stock_Broker.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Official Stock Broker Charter PDF"
                  className="inline-flex items-center gap-2 bg-[#011628] hover:bg-[#13304a] text-white text-sm font-bold px-5 py-2.5 rounded-2xl shadow-sm hover:shadow-md transition duration-200"
                >
                  <Download className="w-4 h-4 text-[#00aeee]" /> Official Charter PDF
                </a>
              )}
            </div>
          </div>

          {/* Tab Navigation for SEBI Complaints vs Charter Details */}
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
              <p className="text-base font-bold text-gray-900">Loading SEBI Complaints Trend Data...</p>
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
              className="px-6 py-2.5 bg-[#ea2830] text-white font-bold rounded-xl text-sm hover:bg-[#c91f27] transition shadow-xs"
            >
              Retry
            </button>
          </div>
        )}

        {/* Main Content Area */}
        {!loading && !error && activeTab === "complaints" && (
          <div className="space-y-10">
            
            {/* Table 1: Data for the month ending (SEBI Mandated Source Breakdown) */}
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
                    SEBI Prescribed Format: Status of complaints received by the Stock Broker categorized by source
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
                    Month-wise complaint status received against the Stock Broker for the selected financial year
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

        {/* Tab 2: Investor Charter Informational Guidelines */}
        {activeTab === "charter-details" && (
          <div className="space-y-8">
            
            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3 text-[#ea2830]">
                  <Scale className="w-6 h-6" />
                  <h3 className="text-xl font-bold text-[#011628]">Vision of Stock Broker</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To facilitate investors to trade and invest with complete transparency, high standards of service, best execution practices, and to foster sustainable wealth creation while safeguarding investor interests at all times.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3 text-[#00aeee]">
                  <CheckCircle2 className="w-6 h-6" />
                  <h3 className="text-xl font-bold text-[#011628]">Mission of Stock Broker</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  To provide timely services, execution of orders with highest diligence, transparent reporting, seamless digital account opening, and prompt redressal of investor grievances strictly in line with SEBI &amp; Exchange directives.
                </p>
              </div>
            </div>

            {/* Details of Business Transacted by Stock Broker */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-bold text-[#011628] flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#00aeee]" /> Details of Business Transacted by Stock Broker
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Scope of financial market operations and product facilities offered to clients
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ea2830] mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Cash / Equity Segment</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Execution of equity buy/sell orders across NSE &amp; BSE with electronic contract notes.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00aeee] mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Derivatives (F&amp;O)</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Trading in Equity &amp; Index Futures and Options with real-time risk management.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ea2830] mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Currency &amp; Commodity</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Trading on MCX and currency derivatives for hedging and investment.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00aeee] mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Mutual Funds &amp; SIPs</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Direct and regular mutual fund transaction routing through exchange infrastructure.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#ea2830] mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">SLBM (Securities Lending)</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Lending and borrowing of eligible securities for additional yield.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00aeee] mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900">Primary Markets / IPOs</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Online IPO bidding, debt issues, and Sovereign Gold Bonds (SGB) facilitation.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Timelines for Services */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-bold text-[#011628] flex items-center gap-2">
                  <Timer className="w-5 h-5 text-[#ea2830]" /> Standard Timelines for Service Delivery
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  SEBI mandated turnaround times (TAT) for various client operations
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-700 border-collapse">
                  <thead className="bg-[#011628] text-white text-xs font-semibold uppercase tracking-wider">
                    <tr>
                      <th scope="col" className="px-4 py-3.5 text-center w-14 border-r border-gray-700">S.No.</th>
                      <th scope="col" className="px-6 py-3.5 border-r border-gray-700">Service Activity</th>
                      <th scope="col" className="px-6 py-3.5">Standard Expected Timeline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { sn: 1, activity: "Client Registration / KYC Processing", tat: "Within 7 working days of receipt of complete documentation" },
                      { sn: 2, activity: "Issuance of Electronic Contract Notes (ECN)", tat: "Within 24 hours of trade execution" },
                      { sn: 3, activity: "Payout of Funds & Securities", tat: "Within 24 hours of payout declared by the Exchange" },
                      { sn: 4, activity: "Issuance of Account Statement (Funds & Securities)", tat: "Monthly / Quarterly as per regulatory schedule" },
                      { sn: 5, activity: "Issuance of Retention Statement / Funds Settlement", tat: "Within prescribed settlement dates (monthly/quarterly)" },
                      { sn: 6, activity: "Resolution of Client Grievances", tat: "Within 30 calendar days from receipt of grievance" },
                    ].map((item) => (
                      <tr key={item.sn} className="hover:bg-blue-50/40 transition-colors">
                        <td className="px-4 py-3.5 text-center font-medium text-gray-500 border-r border-gray-100">{item.sn}</td>
                        <td className="px-6 py-3.5 font-semibold text-gray-900 border-r border-gray-100">{item.activity}</td>
                        <td className="px-6 py-3.5 font-medium text-blue-700">{item.tat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Grievance Redressal Mechanism & Escalation Matrix */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-bold text-[#011628] flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#ea2830]" /> Grievance Redressal Mechanism &amp; Escalation Matrix
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  In case of any query or complaint, investors can follow the structured resolution hierarchy:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                  <span className="text-xs font-black bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md uppercase">
                    Level 1 - Support Desk
                  </span>
                  <h4 className="text-base font-bold text-gray-900">Customer Support</h4>
                  <p className="text-xs text-gray-600">Contact customer service via phone or email for initial query redressal.</p>
                  <p className="text-xs font-semibold text-[#011628]">Tel: 079 - 49005200</p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                  <span className="text-xs font-black bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md uppercase">
                    Level 2 - Grievance Cell
                  </span>
                  <h4 className="text-base font-bold text-gray-900">Compliance Officer</h4>
                  <p className="text-xs text-gray-600">If unresolved in 7 working days, escalate directly to the compliance department.</p>
                  <a href="mailto:investorgrievance@ratnakarsecurities.com" className="text-xs font-semibold text-[#ea2830] underline break-all block">
                    investorgrievance@ratnakarsecurities.com
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                  <span className="text-xs font-black bg-red-100 text-red-800 px-2.5 py-1 rounded-md uppercase">
                    Level 3 - SEBI SCORES
                  </span>
                  <h4 className="text-base font-bold text-gray-900">SCORES 2.0 Portal</h4>
                  <p className="text-xs text-gray-600">Lodge complaint directly on SEBI online grievance redressal system.</p>
                  <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1">
                    scores.sebi.gov.in <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                  <span className="text-xs font-black bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md uppercase">
                    Level 4 - SMART ODR
                  </span>
                  <h4 className="text-base font-bold text-gray-900">Online Dispute Portal</h4>
                  <p className="text-xs text-gray-600">Online Dispute Resolution Portal for conciliation and online arbitration.</p>
                  <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-emerald-700 hover:underline inline-flex items-center gap-1">
                    smartodr.in <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Rights & Responsibilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-[#011628] flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-emerald-600" /> Rights of Investors
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-700 list-disc pl-5">
                  <li>Receive transparent copy of Client Registration Documents (KYC/Rights &amp; Obligations).</li>
                  <li>Receive contract notes within 24 hours of execution of trades.</li>
                  <li>Receive funds and securities within prescribed SEBI settlement timelines.</li>
                  <li>Receive statement of accounts at specified periodicity.</li>
                  <li>Opt for dispute resolution through SEBI SCORES or SMART ODR mechanism.</li>
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-[#011628] flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" /> Responsibilities of Investors
                </h3>
                <ul className="space-y-2.5 text-sm text-gray-700 list-disc pl-5">
                  <li>Always verify broker credentials, SEBI registration number, and official bank accounts.</li>
                  <li>Provide correct PAN, mobile number, and email ID for all official communications.</li>
                  <li>Never share login credentials, MPIN, or trading passwords with anyone.</li>
                  <li>Regularly check transaction statements received directly from Depository/Exchanges.</li>
                  <li>Lodge complaints within specified timelines along with supporting documents.</li>
                </ul>
              </div>
            </div>

            {/* SEBI Prescribed DOs and DON'Ts for Investors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* DOs */}
              <div className="bg-emerald-50/60 border border-emerald-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-emerald-900 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600 stroke-[3]" /> DOs for Investors
                </h3>
                <ul className="space-y-2.5 text-sm text-emerald-950">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Deal only with SEBI registered stock brokers and verify authorized person credentials on exchange websites.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Always ensure your mobile number and email ID are updated with the broker and depository for trade alerts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Transfer funds only to designated client bank accounts declared by the Stock Broker.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Verify contract notes received via email and reconcile with monthly depository statement of accounts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>Pay 20% upfront margin of the transaction value before placing orders in the cash market segment.</span>
                  </li>
                </ul>
              </div>

              {/* DON'Ts */}
              <div className="bg-red-50/60 border border-red-200 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-red-900 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600 stroke-[2.5]" /> DON&apos;Ts for Investors
                </h3>
                <ul className="space-y-2.5 text-sm text-red-950">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Do not share password, MPIN, OTP, or trading terminal credentials with anyone, including employees.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Do not sign blank Delivery Instruction Slips (DIS) or transfer forms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Do not transfer funds to personal bank accounts of any employees or associates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Do not fall prey to guaranteed, fixed, or unrealistic returns offered by unauthorized advisors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>Do not leave cash balances idle; opt for regular monthly or quarterly account settlements.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* Regulatory Footer Information Box */}
        <div className="bg-gradient-to-r from-[#011628] to-[#012e54] text-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#00aeee]/20 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">Ratnakar Securities Limited</h4>
              <p className="text-xs text-[#9fc8e0] mt-0.5">
                SEBI Registration No. of NSE &amp; BSE : INZ000191735 | SEBI Registration No. of NSDL : IN-DP-NSDL-66-88
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SEBI SCORES 2.0 Portal"
                className="bg-[#00aeee] hover:bg-[#0098d0] text-[#011628] font-bold px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1"
              >
                SCORES 2.0 <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://smartodr.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMART ODR Dispute Resolution Portal"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1 border border-white/20"
              >
                SMART ODR <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
