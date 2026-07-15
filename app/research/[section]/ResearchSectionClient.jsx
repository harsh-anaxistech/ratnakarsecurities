"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Download,
  FileText,
  ChevronRight,
  ChevronLeft,
  Search,
  Grid,
  List,
  X,
  ArrowUpDown,
} from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { cn } from "@/lib/utils";

// Helper function to calculate the Indian Financial Year (April 1st to March 31st)
function getFinancialYear(dateString) {
  if (!dateString) return "Other Reports";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Other Reports";
  
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-indexed: 0 = Jan, 11 = Dec
  
  if (month >= 3) {
    // April (3) to December (11) -> FY starts in current calendar year
    return `Financial year ${year}-${year + 1}`;
  } else {
    // January (0) to March (2) -> FY starts in previous calendar year
    return `Financial year ${year - 1}-${year}`;
  }
}

// ── SKELETON LOADERS FOR MODERN UX ──
const GridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch pb-6">
    {Array.from({ length: 6 }).map((_, idx) => (
      <div
        key={idx}
        className="flex flex-col bg-white border border-border rounded-lg p-6 shadow-sm justify-between min-h-[180px]"
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="h-4.5 w-24 rounded skeleton animate-pulse bg-muted" />
            <div className="h-3.5 w-16 rounded skeleton animate-pulse bg-muted" />
          </div>
          <div className="h-4.5 w-full rounded skeleton animate-pulse bg-muted mb-3" />
          <div className="h-4.5 w-3/4 rounded skeleton animate-pulse bg-muted mb-6" />
        </div>
        <div>
          <div className="h-10 w-full rounded skeleton animate-pulse bg-muted" />
        </div>
      </div>
    ))}
  </div>
);

const TableSkeleton = () => (
  <div className="overflow-x-auto border border-border rounded-lg shadow-sm bg-white">
    <table className="w-full text-left border-collapse">
      <thead className="bg-[#011628] text-white">
        <tr>
          {["S.No", "Document Title", "Category", "Financial Year", "Release Date", "Format", "Action"].map((h) => (
            <th key={h} scope="col" className="px-6 py-4 text-xs font-extrabold tracking-wider uppercase text-gray-300">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        {Array.from({ length: 5 }).map((_, idx) => (
          <tr key={idx}>
            <td className="px-6 py-5.5"><div className="h-4 w-4 rounded skeleton animate-pulse bg-muted" /></td>
            <td className="px-6 py-5.5"><div className="h-4.5 w-56 rounded skeleton animate-pulse bg-muted" /></td>
            <td className="px-6 py-5.5"><div className="h-4 w-20 rounded skeleton animate-pulse bg-muted" /></td>
            <td className="px-6 py-5.5"><div className="h-4.5 w-24 rounded skeleton animate-pulse bg-muted" /></td>
            <td className="px-6 py-5.5"><div className="h-4 w-20 rounded skeleton animate-pulse bg-muted" /></td>
            <td className="px-6 py-5.5"><div className="h-5 w-10 rounded-full skeleton animate-pulse bg-muted" /></td>
            <td className="px-6 py-5.5 text-right"><div className="h-8.5 w-24 rounded skeleton animate-pulse bg-muted ml-auto" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function ResearchSectionClient({
  section,
  matchedSectionName,
  initialReports = [],
  initialSections = [],
}) {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [isNavigating, setIsNavigating] = useState(false);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsNavigating(false);
  }

  // Search, Filter, Sort, View, Pagination States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFY, setSelectedFY] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc"); // date-desc, date-asc, name-asc, name-desc
  const [viewMode, setViewMode] = useState("grid"); // grid, table
  const [currentPage, setCurrentPage] = useState(1);

  // Use dynamic sections if loaded, otherwise fall back to static list
  const sectionsList = initialSections.length > 0 
    ? initialSections 
    : [
        { SRNO: "1", section_code: "1", section_name: "Company" },
        { SRNO: "2", section_code: "2", section_name: "IPOs" },
        { SRNO: "3", section_code: "3", section_name: "News" },
        { SRNO: "4", section_code: "4", section_name: "Announcements" }
      ];

  // Extract unique financial years from initial reports for filtering options
  const availableFYs = Array.from(
    new Set(
      initialReports
        .map((doc) => getFinancialYear(doc.date || doc.param1))
        .filter((fy) => fy && fy !== "Other Reports")
    )
  ).sort().reverse();

  // Filter client-side based on search term and selected FY
  const filteredReports = initialReports.filter((doc) => {
    const filename = (doc.filename || "Research Report").toLowerCase();
    const matchesSearch = filename.includes(searchTerm.toLowerCase());

    const docFY = getFinancialYear(doc.date || doc.param1);
    const matchesFY = selectedFY === "all" || docFY === selectedFY;

    return matchesSearch && matchesFY;
  });

  // Sort client-side
  const sortedReports = [...filteredReports].sort((a, b) => {
    if (sortBy === "date-desc") {
      const dateA = new Date(a.date || a.param1 || 0);
      const dateB = new Date(b.date || b.param1 || 0);
      return dateB - dateA;
    } else if (sortBy === "date-asc") {
      const dateA = new Date(a.date || a.param1 || 0);
      const dateB = new Date(b.date || b.param1 || 0);
      return dateA - dateB;
    } else if (sortBy === "name-asc") {
      const nameA = (a.filename || "Research Report").toLowerCase();
      const nameB = (b.filename || "Research Report").toLowerCase();
      return nameA.localeCompare(nameB);
    } else if (sortBy === "name-desc") {
      const nameA = (a.filename || "Research Report").toLowerCase();
      const nameB = (b.filename || "Research Report").toLowerCase();
      return nameB.localeCompare(nameA);
    }
    return 0;
  });

  // Pagination parameters
  const itemsPerPage = viewMode === "grid" ? 9 : 10;
  const totalItems = sortedReports.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedReports = sortedReports.slice(startIndex, startIndex + itemsPerPage);

  // Table header sorting toggle helper
  const handleSortHeader = (type) => {
    if (type === "name") {
      setSortBy(sortBy === "name-asc" ? "name-desc" : "name-asc");
    } else if (type === "date" || type === "fy") {
      setSortBy(sortBy === "date-desc" ? "date-asc" : "date-desc");
    }
    setCurrentPage(1);
  };

  // Format section heading correctly
  const displayHeading = matchedSectionName.toLowerCase().includes("research") 
    ? matchedSectionName 
    : `${matchedSectionName} Research`;

  return (
    <div className="bg-background min-h-screen">
      {/* Visual accessibility live region for status announcements */}
      <div className="sr-only" aria-live="polite">
        {searchTerm || selectedFY !== "all" 
          ? `Filtered results updated. Showing ${filteredReports.length} of ${initialReports.length} reports.`
          : `Showing all ${initialReports.length} reports.`}
      </div>

      {/* ── HERO BANNER ── */}
      <section className="bg-[#011628] text-white h-[240px] flex flex-col justify-center relative overflow-hidden" aria-labelledby="page-title">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/2150970201.jpg"
            alt="Research Banner Background"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,174,238,0.15),transparent_50%)]" />
        <Container>
          {/* Breadcrumbs conforming to GIGW & WCAG */}
          <nav aria-label="Breadcrumbs" className="mb-4 relative z-10">
            <ol className="flex items-center gap-2 text-sm text-gray-400 p-0 m-0 list-none">
              <li className="flex items-center">
                <Link href="/" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2" aria-hidden="true">
                <ChevronRight size={14} className="opacity-60" />
              </li>
              <li className="text-gray-300">
                Research
              </li>
              <li className="flex items-center gap-2" aria-hidden="true">
                <ChevronRight size={14} className="opacity-60" />
              </li>
              <li className="text-secondary font-medium" aria-current="page">
                {matchedSectionName}
              </li>
            </ol>
          </nav>

          <h1 id="page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white relative z-10">
            {displayHeading}
          </h1>
          <p className="text-gray-300 mt-2 max-w-2xl text-sm md:text-base relative z-10">
            Access our comprehensive database of {matchedSectionName.toLowerCase()} research papers, compliance notes, and market intelligence documents.
          </p>
        </Container>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            {/* ── SIDEBAR / TAB NAVIGATION ── */}
            <aside className="lg:col-span-1 space-y-4">
              <h2 className="hidden lg:block text-xs font-bold uppercase tracking-wider text-muted-foreground px-3 mb-2">
                Research Categories
              </h2>
              
              {/* Desktop Vertical Menu */}
              <nav aria-label="Research Categories - Desktop" className="hidden lg:flex flex-col gap-2 bg-muted/40 p-2 rounded-lg border border-border">
                {sectionsList.map((sec) => {
                  const secCode = sec.section_name.toLowerCase();
                  const isActive = pathname.toLowerCase() === `/research/${secCode}`;
                  
                  return (
                    <Link
                      key={sec.SRNO}
                      href={`/research/${secCode}`}
                      onClick={() => {
                        if (!isActive) setIsNavigating(true);
                      }}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-md text-base font-semibold transition-all duration-200 border-l-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",
                        isActive
                          ? "bg-primary/5 text-primary border-primary font-bold shadow-sm"
                          : "text-foreground border-transparent hover:bg-muted hover:text-primary hover:border-primary/40"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{sec.section_name}</span>
                      <ChevronRight size={16} className={cn("opacity-40 transition-transform", isActive && "translate-x-1 opacity-100")} />
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Horizontal Scroll Menu */}
              <nav aria-label="Research Categories - Mobile" className="lg:hidden -mx-4 px-4 overflow-x-auto scrollbar-none flex gap-3 pb-2">
                {sectionsList.map((sec) => {
                  const secCode = sec.section_name.toLowerCase();
                  const isActive = pathname.toLowerCase() === `/research/${secCode}`;
                  
                  return (
                    <Link
                      key={sec.SRNO}
                      href={`/research/${secCode}`}
                      onClick={() => {
                        if (!isActive) setIsNavigating(true);
                      }}
                      className={cn(
                        "whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        isActive
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-700 border-border hover:border-primary/50 hover:text-primary"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {sec.section_name}
                    </Link>
                  );
                })}
              </nav>
            </aside>

            {/* ── REPORTS LISTING AREA ── */}
            <main className="lg:col-span-3 min-h-[300px]">
              
              {/* ── SEARCH, FILTERS & VIEW TOGGLE BAR ── */}
              <div className="bg-white border border-border rounded-lg p-4 md:p-6 mb-6 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
                {/* Search Bar */}
                <div className="flex-1 min-w-[260px] relative">
                  <label htmlFor="search-input" className="sr-only">
                    Search documents by name
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground w-4.5 h-4.5" aria-hidden="true" />
                    <input
                      id="search-input"
                      type="search"
                      placeholder="Search by report title..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full pl-10 pr-10 py-2 border border-border rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-muted/20 focus-visible:ring-2"
                    />
                    {searchTerm && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchTerm("");
                          setCurrentPage(1);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Clear search input"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Filters & Toggles */}
                <div className="flex flex-wrap items-center gap-4">
                  {/* Financial Year Filter */}
                  <div className="flex items-center gap-2">
                    <label htmlFor="fy-filter" className="text-xs font-bold text-muted-foreground whitespace-nowrap">
                      Financial Year:
                    </label>
                    <select
                      id="fy-filter"
                      value={selectedFY}
                      onChange={(e) => {
                        setSelectedFY(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-white border border-border rounded-md px-3 py-1.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer hover:border-gray-400 transition-colors focus-visible:ring-2"
                    >
                      <option value="all">All Years</option>
                      {availableFYs.map((fy) => (
                        <option key={fy} value={fy}>
                          {fy}
                        </option>
                      ))}
                      {initialReports.some(doc => getFinancialYear(doc.date || doc.param1) === "Other Reports") && (
                        <option value="Other Reports">Other Reports</option>
                      )}
                    </select>
                  </div>

                  {/* Sort Order Filter */}
                  <div className="flex items-center gap-2">
                    <label htmlFor="sort-order" className="text-xs font-bold text-muted-foreground whitespace-nowrap">
                      Sort By:
                    </label>
                    <select
                      id="sort-order"
                      value={sortBy}
                      onChange={(e) => {
                        setSortBy(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-white border border-border rounded-md px-3 py-1.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer hover:border-gray-400 transition-colors focus-visible:ring-2"
                    >
                      <option value="date-desc">Date (Newest)</option>
                      <option value="date-asc">Date (Oldest)</option>
                      <option value="name-asc">Title (A-Z)</option>
                      <option value="name-desc">Title (Z-A)</option>
                    </select>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block h-6 w-[1px] bg-border" aria-hidden="true" />

                  {/* Table vs Grid Layout View Selector */}
                  <div className="flex items-center border border-border rounded-md p-1 bg-muted/40" role="group" aria-label="Layout View Settings">
                    <button
                      type="button"
                      onClick={() => {
                        setViewMode("grid");
                        setCurrentPage(1);
                      }}
                      className={cn(
                        "p-1.5 rounded transition-all focus:outline-none focus:ring-2 focus:ring-primary",
                        viewMode === "grid"
                          ? "bg-white text-primary shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      aria-pressed={viewMode === "grid"}
                      aria-label="Grid card view layout"
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setViewMode("table");
                        setCurrentPage(1);
                      }}
                      className={cn(
                        "p-1.5 rounded transition-all focus:outline-none focus:ring-2 focus:ring-primary",
                        viewMode === "table"
                          ? "bg-white text-primary shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      aria-pressed={viewMode === "table"}
                      aria-label="Table list view layout"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filter Indicators */}
              {(searchTerm || selectedFY !== "all") && (
                <div className="flex items-center justify-between bg-primary-light/10 border border-primary/20 rounded-md px-4 py-2.5 mb-6 text-sm">
                  <div className="flex flex-wrap items-center gap-2 text-foreground font-semibold">
                    <span>Active Filters:</span>
                    {searchTerm && (
                      <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                        Search: &ldquo;{searchTerm}&rdquo;
                        <button
                          type="button"
                          onClick={() => {
                            setSearchTerm("");
                            setCurrentPage(1);
                          }}
                          aria-label="Remove search filter"
                          className="hover:text-primary-dark"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                    {selectedFY !== "all" && (
                      <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-1.5">
                        FY: {selectedFY}
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedFY("all");
                            setCurrentPage(1);
                          }}
                          aria-label="Remove financial year filter"
                          className="hover:text-primary-dark"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedFY("all");
                      setCurrentPage(1);
                    }}
                    className="text-xs font-extrabold text-primary hover:text-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* ── REPORTS RENDER AREA ── */}
              {isNavigating ? (
                // Display Skeleton loaders on category transition
                viewMode === "grid" ? <GridSkeleton /> : <TableSkeleton />
              ) : initialReports.length === 0 ? (
                /* Original Empty State (Backend down / no files) */
                <div className="flex flex-col items-center justify-center py-16 px-6 bg-white border border-border rounded-lg text-center shadow-sm max-w-xl mx-auto my-4 hover:shadow-md transition-shadow">
                  <div className="text-gray-400 mb-4 bg-muted p-4 rounded-full" aria-hidden="true">
                    <FileText className="h-12 w-12 text-muted-foreground/60" />
                  </div>
                  <h3 className="text-xl font-extrabold text-light-blue mb-2">
                    {matchedSectionName} Research
                  </h3>
                  <p className="text-sm font-semibold text-danger mb-4">
                    No Reports Found
                  </p>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    We could not find any research reports or documents uploaded for this section at the moment.
                  </p>
                </div>
              ) : filteredReports.length === 0 ? (
                /* Dynamic Search Empty State */
                <div className="flex flex-col items-center justify-center py-16 px-6 bg-white border border-border rounded-lg text-center shadow-sm max-w-xl mx-auto my-4">
                  <div className="text-gray-400 mb-4 bg-muted p-4 rounded-full" aria-hidden="true">
                    <Search className="h-12 w-12 text-muted-foreground/60" />
                  </div>
                  <h3 className="text-xl font-extrabold text-light-blue mb-2">
                    No matching reports
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-sm mb-4">
                    {"We couldn't find any documents matching your current filters or search term. Try adjusting your query or filters."}
                  </p>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedFY("all");
                      setCurrentPage(1);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              ) : viewMode === "grid" ? (
                /* ── GRID CARD VIEW ── */
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch pb-6">
                    {paginatedReports.map((doc) => {
                      const docFY = getFinancialYear(doc.date || doc.param1);
                      const fileUrl = doc.fileurl || doc.FILEURL;
                      const docDate = doc.date || doc.param1
                        ? new Date(doc.date || doc.param1).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : null;

                      return (
                        <div
                          key={doc.srno}
                          className="flex flex-col bg-white border border-border hover:border-primary rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group justify-between"
                        >
                          <div>
                            {/* Card Header Info */}
                            <div className="flex items-center justify-between gap-2 mb-4">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground px-2 py-0.5 bg-muted rounded-full">
                                {docFY}
                              </span>
                              {docDate && (
                                <span className="text-[11px] font-semibold text-muted-foreground">
                                  {docDate}
                                </span>
                              )}
                            </div>

                            {/* Report Title */}
                            <h3 className="text-[15px] font-bold text-light-blue group-hover:text-primary transition-colors leading-relaxed mb-6">
                              {doc.filename || "Research Report"}
                            </h3>
                          </div>

                          {/* Actions */}
                          <div className="mt-auto">
                            <Button
                              as="a"
                              href={fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              variant="outlined"
                              color="primary"
                              fullWidth
                              className="group-hover:bg-primary group-hover:text-white transition-all text-sm font-bold inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-offset-2"
                              aria-label={`Download document: ${doc.filename || "Research Report"}`}
                              leftIcon={<Download size={16} className="stroke-[2.5]" />}
                            >
                              Download Report
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Render pagination */}
                  {renderPagination()}
                </>
              ) : (
                /* ── TABLE VIEW ── */
                <>
                  <div className="overflow-x-auto border border-border rounded-lg shadow-sm bg-white mb-6">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                      <thead className="bg-[#011628] text-white">
                        <tr>
                          <th scope="col" className="px-6 py-4 text-xs font-extrabold tracking-wider uppercase text-gray-300 w-16">
                            S.No
                          </th>
                          <th scope="col" className="px-6 py-4 text-xs font-extrabold tracking-wider uppercase text-gray-300">
                            <button
                              type="button"
                              onClick={() => handleSortHeader("name")}
                              className="flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-extrabold tracking-wider uppercase cursor-pointer"
                            >
                              Document Title
                              <ArrowUpDown size={14} className="opacity-75" aria-hidden="true" />
                            </button>
                          </th>
                          <th scope="col" className="px-6 py-4 text-xs font-extrabold tracking-wider uppercase text-gray-300">
                            Category
                          </th>
                          <th scope="col" className="px-6 py-4 text-xs font-extrabold tracking-wider uppercase text-gray-300">
                            <button
                              type="button"
                              onClick={() => handleSortHeader("fy")}
                              className="flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-extrabold tracking-wider uppercase cursor-pointer"
                            >
                              Financial Year
                              <ArrowUpDown size={14} className="opacity-75" aria-hidden="true" />
                            </button>
                          </th>
                          <th scope="col" className="px-6 py-4 text-xs font-extrabold tracking-wider uppercase text-gray-300">
                            <button
                              type="button"
                              onClick={() => handleSortHeader("date")}
                              className="flex items-center gap-1.5 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary font-extrabold tracking-wider uppercase cursor-pointer"
                            >
                              Release Date
                              <ArrowUpDown size={14} className="opacity-75" aria-hidden="true" />
                            </button>
                          </th>
                          <th scope="col" className="px-6 py-4 text-xs font-extrabold tracking-wider uppercase text-gray-300">
                            Format
                          </th>
                          <th scope="col" className="px-6 py-4 text-xs font-extrabold tracking-wider uppercase text-gray-300 text-right">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {paginatedReports.map((doc, idx) => {
                          const docFY = getFinancialYear(doc.date || doc.param1);
                          const docDate = doc.date || doc.param1
                            ? new Date(doc.date || doc.param1).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })
                            : "N/A";
                          const fileUrl = doc.fileurl || doc.FILEURL;
                          const isPdf = fileUrl?.toLowerCase().endsWith(".pdf") || true;

                          return (
                            <tr key={doc.srno} className="hover:bg-muted/40 transition-colors group">
                              <td className="px-6 py-4.5 text-sm text-muted-foreground font-medium">
                                {startIndex + idx + 1}
                              </td>
                              <td className="px-6 py-4.5 text-sm font-bold text-light-blue group-hover:text-primary transition-colors">
                                {doc.filename || "Research Report"}
                              </td>
                              <td className="px-6 py-4.5 text-sm text-muted-foreground font-medium">
                                {matchedSectionName}
                              </td>
                              <td className="px-6 py-4.5 text-sm font-semibold text-foreground">
                                {docFY}
                              </td>
                              <td className="px-6 py-4.5 text-sm text-muted-foreground font-medium">
                                {docDate}
                              </td>
                              <td className="px-6 py-4.5">
                                <span className={cn(
                                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border",
                                  isPdf 
                                    ? "bg-danger/10 text-danger border-danger/25" 
                                    : "bg-info/10 text-info border-info/25"
                                )}>
                                  {isPdf ? "PDF" : "DOC"}
                                </span>
                              </td>
                              <td className="px-6 py-4.5 text-right">
                                <Button
                                  as="a"
                                  href={fileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  variant="outlined"
                                  color="primary"
                                  size="sm"
                                  className="group-hover:bg-primary group-hover:text-white transition-all text-xs font-bold inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-offset-2"
                                  aria-label={`Download report: ${doc.filename || "Research Report"}`}
                                  leftIcon={<Download size={14} className="stroke-[2.5]" />}
                                >
                                  Download
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Render pagination */}
                  {renderPagination()}
                </>
              )}
            </main>

          </div>
        </Container>
      </section>
    </div>
  );

  // ── RENDER PAGINATION HELPER ──
  function renderPagination() {
    if (totalPages <= 1) return null;

    return (
      <nav aria-label="Reports list pagination" className="flex items-center justify-between border-t border-border px-4 py-4.5 sm:px-6 mt-6 bg-muted/20 rounded-lg">
        {/* Mobile pagination buttons */}
        <div className="flex flex-1 justify-between sm:hidden">
          <Button
            variant="outlined"
            color="muted"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-xs font-bold"
            aria-label="Go to previous page of reports"
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="muted"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-xs font-bold"
            aria-label="Go to next page of reports"
          >
            Next
          </Button>
        </div>

        {/* Desktop pagination panel */}
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold text-muted-foreground">
              Showing <span className="font-extrabold text-foreground">{startIndex + 1}</span> to{" "}
              <span className="font-extrabold text-foreground">
                {Math.min(startIndex + itemsPerPage, totalItems)}
              </span>{" "}
              of <span className="font-extrabold text-foreground">{totalItems}</span> reports
            </p>
          </div>
          <div>
            <ul className="flex items-center gap-1.5 list-none p-0 m-0" role="list">
              <li>
                <Button
                  variant="outlined"
                  color="muted"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-2 h-8 min-w-[32px]"
                  aria-label="Go to previous page of reports"
                  leftIcon={<ChevronLeft size={16} />}
                />
              </li>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const isCurrent = page === currentPage;
                return (
                  <li key={page}>
                    <Button
                      variant={isCurrent ? "contained" : "outlined"}
                      color={isCurrent ? "primary" : "muted"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="w-8 h-8 px-0 text-xs font-bold rounded-md"
                      aria-label={`Go to page number ${page}`}
                      aria-current={isCurrent ? "page" : undefined}
                    >
                      {page}
                    </Button>
                  </li>
                );
              })}

              <li>
                <Button
                  variant="outlined"
                  color="muted"
                  size="sm"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-2 h-8 min-w-[32px]"
                  aria-label="Go to next page of reports"
                  leftIcon={<ChevronRight size={16} />}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
