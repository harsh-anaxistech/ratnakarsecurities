"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Download as DownloadIcon, FileText, FileBadge, Loader2 } from "lucide-react";
import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";
import { API_BASE_URL } from "@/services/config";
import {
  getDownloadSections,
  getDownloadSubsections,
  getDownloadFront,
} from "@/services/downloads";

function getFileUrl(file) {
  if (!file) return "#";
  let url = file.fileurl || file.FILEURL || file.fileupload || file.pdf || file.url || file.filepath || "";

  if (!url && file.filename && (file.filename.includes(".pdf") || file.filename.includes(".doc"))) {
    const baseUrl = API_BASE_URL.replace(/\/api$/, "");
    url = `${baseUrl}/uploads/Downloads/${file.filename}`;
  }

  // Ensure HTTPS if live API returns http://
  if (url && url.startsWith("http://api.ratnakarsecurities.com")) {
    url = url.replace("http://api.ratnakarsecurities.com", "https://api.ratnakarsecurities.com");
  } else if (url && !url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("/")) {
    const baseUrl = API_BASE_URL.replace(/\/api$/, "");
    url = `${baseUrl}/${url}`;
  }

  return url || "#";
}

const FALLBACK_SECTIONS = [
  { SRNO: "3", section_name: "Documents", secname: "Documents" },
  { SRNO: "2", section_name: "New Update", secname: "NewUpdate" },
  { SRNO: "1", section_name: "Trading & Demat", secname: "TradingDemat" },
];

/**
 * Downloads Center Page Component
 * 
 * Manages the interactive 3-tiered statutory and account-opening document repository:
 * 1. Sections (Top-level categories e.g., Trading & Demat, Documents, New Updates).
 * 2. Subsections (Nested categories).
 * 3. Document Items (Downloadable PDF/Word documents with secure URL normalization).
 */
export default function DownloadsPage() {
  const [sections, setSections] = useState([]);
  const [activeSectionId, setActiveSectionId] = useState(null);

  const [subsections, setSubsections] = useState([]);
  const [activeSubsectionId, setActiveSubsectionId] = useState(null);

  const [items, setItems] = useState([]);

  const [loadingSections, setLoadingSections] = useState(true);
  const [loadingSubsections, setLoadingSubsections] = useState(false);
  const [loadingItems, setLoadingItems] = useState(false);

  // 1. Fetch headers (sections) on page load
  useEffect(() => {
    async function loadSections() {
      setLoadingSections(true);
      try {
        const res = await getDownloadSections();
        const data = res?.data || (Array.isArray(res) ? res : []);
        if (Array.isArray(data) && data.length > 0) {
          setSections(data);
          const firstSecId = data[0].SRNO ?? data[0].id ?? data[0].section_id;
          setActiveSectionId(firstSecId);
        } else {
          setSections(FALLBACK_SECTIONS);
          setActiveSectionId(FALLBACK_SECTIONS[0].SRNO);
        }
      } catch (err) {
        console.error("Error fetching download sections:", err);
        setSections(FALLBACK_SECTIONS);
        setActiveSectionId(FALLBACK_SECTIONS[0].SRNO);
      } finally {
        setLoadingSections(false);
      }
    }
    loadSections();
  }, []);

  // 2. Fetch subheaders (subsections) when active section changes (also runs on page load right after sections load)
  useEffect(() => {
    if (!activeSectionId) return;

    async function loadSubsections() {
      setLoadingSubsections(true);
      setSubsections([]);
      setActiveSubsectionId(null);
      setItems([]);

      try {
        const res = await getDownloadSubsections(activeSectionId);
        const data = res?.data || (Array.isArray(res) ? res : []);
        if (Array.isArray(data) && data.length > 0) {
          setSubsections(data);
          const firstSubId = data[0].SRNO ?? data[0].id ?? data[0].subsection_id;
          setActiveSubsectionId(firstSubId);
        }
      } catch (err) {
        console.error(`Error fetching subsections for section ${activeSectionId}:`, err);
      } finally {
        setLoadingSubsections(false);
      }
    }

    loadSubsections();
  }, [activeSectionId]);

  // 3. Fetch subheader data (items) when active section or active subsection changes
  useEffect(() => {
    if (!activeSectionId || !activeSubsectionId) return;

    async function loadItems() {
      setLoadingItems(true);
      try {
        const res = await getDownloadFront(activeSectionId, activeSubsectionId);
        const data = res?.data || (Array.isArray(res) ? res : []);
        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(
          `Error fetching download items for section ${activeSectionId}, subsection ${activeSubsectionId}:`,
          err
        );
        setItems([]);
      } finally {
        setLoadingItems(false);
      }
    }

    loadItems();
  }, [activeSectionId, activeSubsectionId]);

  const activeSection = sections.find(
    (s) => String(s.SRNO ?? s.id ?? s.section_id) === String(activeSectionId)
  );

  const activeSectionTitle =
    activeSection?.section_name || activeSection?.name || activeSection?.title || "Downloads";

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Hero Banner */}
      <HeroSection
        title="Downloads"
        breadcrumbs={[{ label: "Downloads" }]}
        image="/images/about/AboutUs-Ratnakarsec.png"
        mobileImage="/images/about/mobile banner/investor mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      {/* Section Header */}
      <section className="py-12 bg-[#f7f9fc]" style={{ backgroundColor: "#f7f9fc" }}>
        <Container>
          <div className="text-center">
            <div
              className="text-[14px] font-black tracking-widest uppercase mb-3 text-[#881337]"
              style={{ color: "#881337" }}
            >
              Resources &amp; Support
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#011628] leading-tight mb-4" style={{ color: "#011628" }}>
              {activeSectionTitle}
            </h2>
            <p className="text-[16px] text-slate-700 max-w-3xl mx-auto font-medium" style={{ color: "#334155" }}>
              Access all our important documents, forms, and resources for your convenience.
            </p>
          </div>
        </Container>
      </section>

      {/* 1. Header Tabs (Sections) */}
      <div className="bg-white border-b border-slate-200 sticky top-[72px] z-40 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
        <Container>
          <div className="flex gap-2 overflow-x-auto py-1 scrollbar-none" role="tablist" aria-label="Document Sections">
            {loadingSections ? (
              <div className="flex items-center gap-4 py-4 text-sm text-slate-700 font-medium" style={{ color: "#334155" }}>
                <Loader2 className="w-4 h-4 animate-spin text-[#881337]" aria-hidden="true" style={{ color: "#881337" }} />
                <span>Loading sections...</span>
              </div>
            ) : (
              sections.map((sec) => {
                const secId = sec.SRNO ?? sec.id ?? sec.section_id;
                const secName = sec.section_name || sec.name || sec.title || "Section";
                const isActive = String(secId) === String(activeSectionId);

                return (
                  <button
                    key={secId}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveSectionId(secId)}
                    className={`px-6 py-4 font-semibold text-base border-b-2 cursor-pointer transition-all duration-300 whitespace-nowrap rounded-t-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#881337] ${isActive
                      ? "border-[#881337] text-[#881337] bg-[#fff1f2] shadow-sm font-bold"
                      : "border-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    style={isActive
                      ? { color: "#881337", borderBottomColor: "#881337", backgroundColor: "#fff1f2" }
                      : { color: "#334155" }
                    }
                  >
                    {secName}
                  </button>
                );
              })
            )}
          </div>
        </Container>
      </div>

      {/* Main Content Area */}
      <div className="bg-white py-12" style={{ backgroundColor: "#ffffff" }}>
        <Container>
          {/* Accessible Documents & OCR Guidance Banner (Rule 15(1)(c)(ii)) */}
          <div
            className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#f0f9ff] border border-[#bae6fd] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs"
            style={{ backgroundColor: "#f0f9ff" }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#e0f2fe] flex items-center justify-center text-[#004f7a] shrink-0 mt-0.5" style={{ backgroundColor: "#e0f2fe", color: "#004f7a" }} aria-hidden="true">
                <FileText className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
                <strong className="text-slate-900" style={{ color: "#0f172a" }}>Accessible Document Notice:</strong> Account opening kits, compliance forms, and regulatory documents on this page are provided in searchable, OCR-enabled PDF formats compatible with screen readers (NVDA, JAWS, VoiceOver).
              </p>
            </div>
            <Link
              href="/accessibility-statement"
              className="text-xs font-bold text-[#004f7a] hover:text-[#011628] whitespace-nowrap underline inline-flex items-center gap-1 shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#004f7a]"
              style={{ color: "#004f7a" }}
            >
              Accessibility Statement &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* 2. Sidebar - Subheaders (Subsections) Updated Design (Desktop & Mobile) */}
            <aside className="lg:col-span-1 space-y-4">
              <h2 className="hidden lg:block text-[13px] font-bold text-slate-700 uppercase tracking-widest mb-3 px-1" style={{ color: "#334155" }}>
                Categories
              </h2>

              {loadingSubsections ? (
                <div className="py-8 text-center text-slate-700 bg-white rounded-2xl border border-slate-200 shadow-xs hidden lg:block" style={{ backgroundColor: "#ffffff", color: "#334155" }}>
                  <Loader2 className="w-5 h-5 animate-spin mx-auto mb-2 text-[#881337]" aria-hidden="true" style={{ color: "#881337" }} />
                  <span className="text-xs font-semibold">Loading categories...</span>
                </div>
              ) : subsections.length === 0 ? (
                <div className="text-xs text-slate-700 p-3 italic text-center bg-white rounded-2xl border border-slate-200 shadow-xs hidden lg:block" style={{ backgroundColor: "#ffffff", color: "#334155" }}>
                  No categories found
                </div>
              ) : (
                <>
                  {/* Desktop Navigation */}
                  <nav
                    aria-label="Document Categories - Desktop"
                    className="hidden lg:flex flex-col gap-1 bg-white rounded-2xl border border-slate-200 shadow-xs p-3"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    {subsections.map((sub) => {
                      const subId = sub.SRNO ?? sub.id ?? sub.subsection_id;
                      const subName =
                        sub.subsection_name || sub.name || sub.title || sub.category || "Subsection";
                      const isSubActive = String(subId) === String(activeSubsectionId);

                      return (
                        <button
                          key={`desktop-${subId}`}
                          onClick={() => setActiveSubsectionId(subId)}
                          className={`w-full flex items-center justify-between px-4 py-3.5 text-left text-[15px] transition-all duration-200 border-l-[3.5px] cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#881337] ${isSubActive
                            ? "bg-[#fff1f2] border-[#881337] text-[#881337] font-bold rounded-r-xl rounded-l-[4px]"
                            : "text-slate-900 border-transparent hover:bg-slate-50 rounded-xl font-bold"
                            }`}
                          style={isSubActive
                            ? { backgroundColor: "#fff1f2", borderLeftColor: "#881337", color: "#881337" }
                            : { color: "#0f172a" }
                          }
                        >
                          <span>{subName}</span>
                          <ChevronRight
                            className={`h-[18px] w-[18px] transition-transform duration-200 ${isSubActive ? "text-[#881337] translate-x-1" : "text-slate-500"
                              }`}
                            aria-hidden="true"
                            style={isSubActive ? { color: "#881337" } : undefined}
                          />
                        </button>
                      );
                    })}
                  </nav>

                  {/* Mobile Navigation */}
                  <nav
                    aria-label="Document Categories - Mobile"
                    className="lg:hidden -mx-4 px-4 overflow-x-auto scrollbar-none flex gap-3 pb-2"
                  >
                    {subsections.map((sub) => {
                      const subId = sub.SRNO ?? sub.id ?? sub.subsection_id;
                      const subName =
                        sub.subsection_name || sub.name || sub.title || sub.category || "Subsection";
                      const isSubActive = String(subId) === String(activeSubsectionId);

                      return (
                        <button
                          key={`mobile-${subId}`}
                          onClick={() => setActiveSubsectionId(subId)}
                          className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all border shadow-xs cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#881337] ${isSubActive
                            ? "bg-[#881337] text-white border-[#881337]"
                            : "bg-white text-slate-800 border-slate-200 hover:border-[#881337]/50 hover:text-[#881337]"
                            }`}
                          style={isSubActive
                            ? { backgroundColor: "#881337", color: "#ffffff", borderColor: "#881337" }
                            : { backgroundColor: "#ffffff", color: "#1e293b" }
                          }
                        >
                          {subName}
                        </button>
                      );
                    })}
                  </nav>
                </>
              )}
            </aside>

            {/* 3. Grid View - Subheader Data (Items) */}
            <div className="lg:col-span-4">
              {loadingItems ? (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="p-6 border border-slate-200 rounded-2xl bg-white shadow-xs flex flex-col items-center text-center animate-pulse"
                      style={{ backgroundColor: "#ffffff" }}
                    >
                      <div className="w-14 h-14 bg-slate-200 rounded-full mb-5" />
                      <div className="h-4 bg-slate-200 rounded w-3/4 mb-3" />
                      <div className="h-4 bg-slate-200 rounded w-1/2 mb-6" />
                      <div className="mt-auto w-full h-10 bg-slate-200 rounded-xl" />
                    </div>
                  ))}
                </div>
              ) : items.length === 0 ? (
                <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl shadow-xs" style={{ backgroundColor: "#ffffff" }}>
                  <FileBadge className="mx-auto h-12 w-12 text-slate-400 mb-4" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-slate-900" style={{ color: "#0f172a" }}>No documents found</h3>
                  <p className="text-slate-700 mt-2 font-medium" style={{ color: "#334155" }}>
                    There are currently no documents available for this section.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {items.map((file, idx) => {
                    const fileTitle =
                      file.filename || file.title || file.caption || file.name || "Download Document";
                    const fileUrl = getFileUrl(file);
                    const key = file.SRNO || file.srno || file.id || idx;

                    return (
                      <a
                        key={key}
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        aria-label={`Download document: ${fileTitle}`}
                        className="group p-6 border border-slate-200 rounded-2xl bg-white shadow-xs cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-[#881337]/40 flex flex-col items-center text-center h-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#881337]"
                        style={{ backgroundColor: "#ffffff" }}
                      >
                        <div className="w-14 h-14 bg-[#011628] group-hover:bg-[#881337] rounded-full flex items-center justify-center text-white mb-5 shadow-xs transition-all duration-300 group-hover:-translate-y-1" style={{ backgroundColor: "#011628", color: "#ffffff" }}>
                          <FileText size={24} aria-hidden="true" />
                        </div>

                        <h3 className="text-[16px] font-sans font-medium text-slate-900 mb-6 line-clamp-3 leading-snug group-hover:text-[#881337] transition-colors duration-300" style={{ color: "#0f172a" }}>
                          {fileTitle}
                        </h3>

                        <div
                          className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 border border-slate-300 text-slate-900 text-sm font-bold group-hover:bg-[#881337] group-hover:border-[#881337] group-hover:text-white transition-all duration-300"
                          style={{ backgroundColor: "#f1f5f9", color: "#0f172a" }}
                        >
                          <DownloadIcon size={16} className="stroke-[2.5] text-slate-900 group-hover:text-white" aria-hidden="true" />
                          <span className="text-slate-900 group-hover:text-white font-bold">Download</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}