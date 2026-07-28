"use client";

import { useState, useEffect } from "react";
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
      <section className="py-12 bg-[#f7f9fc]">
        <Container>
          <div className="text-center">
            <div
              className="text-[14px] font-black tracking-widest uppercase mb-3"
              style={{ color: "rgb(234, 40, 48)" }}
            >
              Resources & Support
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight mb-4">
              {activeSectionTitle}
            </h2>
            <p className="text-[16px] text-gray-700 max-w-3xl mx-auto font-medium">
              Access all our important documents, forms, and resources for your convenience.
            </p>
          </div>
        </Container>
      </section>

      {/* 1. Header Tabs (Sections) */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-40 shadow-sm">
        <Container>
          <div className="flex gap-2 overflow-x-auto py-1 scrollbar-none">
            {loadingSections ? (
              <div className="flex items-center gap-4 py-4 text-sm text-gray-500 font-medium">
                <Loader2 className="w-4 h-4 animate-spin text-red-600" />
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
                    onClick={() => setActiveSectionId(secId)}
                    className={`px-6 py-4 font-semibold text-base border-b-2 cursor-pointer transition-all duration-300 whitespace-nowrap rounded-t-lg ${isActive
                      ? "border-red-600 text-red-600 bg-red-50/70 shadow-sm"
                      : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
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
      <div className="bg-white py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* 2. Sidebar - Subheaders (Subsections) Updated Design (Desktop & Mobile) */}
            <aside className="lg:col-span-1 space-y-4">
              <h2 className="hidden lg:block text-[13px] font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">
                Categories
              </h2>

              {loadingSubsections ? (
                <div className="py-8 text-center text-gray-400 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hidden lg:block">
                  <Loader2 className="w-5 h-5 animate-spin mx-auto mb-2 text-[#EA2830]" />
                  <span className="text-xs font-medium">Loading categories...</span>
                </div>
              ) : subsections.length === 0 ? (
                <div className="text-xs text-gray-500 p-3 italic text-center bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hidden lg:block">
                  No categories found
                </div>
              ) : (
                <>
                  {/* Desktop Navigation */}
                  <nav
                    aria-label="Research Categories - Desktop"
                    className="hidden lg:flex flex-col gap-1 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-3"
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
                          className={`w-full flex items-center justify-between px-4 py-3.5 text-left text-[15px] transition-all duration-200 border-l-[3.5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA2830] focus-visible:ring-offset-1 ${isSubActive
                            ? "bg-gradient-to-r from-red-50 to-white/40 border-[#EA2830] text-[#EA2830] font-bold rounded-r-xl rounded-l-[4px] shadow-[0_2px_10px_rgba(234,40,48,0.06)]"
                            : "text-[#0f172a] border-transparent hover:bg-slate-50 rounded-xl font-bold"
                            }`}
                        >
                          <span>{subName}</span>
                          <ChevronRight
                            className={`h-[18px] w-[18px] transition-transform duration-200 ${isSubActive ? "text-[#EA2830] translate-x-1" : "text-slate-400"
                              }`}
                            aria-hidden="true"
                          />
                        </button>
                      );
                    })}
                  </nav>

                  {/* Mobile Navigation */}
                  <nav
                    aria-label="Research Categories - Mobile"
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
                          className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all border shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA2830] ${isSubActive
                            ? "bg-[#EA2830] text-white border-[#EA2830]"
                            : "bg-white text-gray-700 border-gray-200 hover:border-[#EA2830]/50 hover:text-[#EA2830]"
                            }`}
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
                      className="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm flex flex-col items-center text-center animate-pulse"
                    >
                      <div className="w-14 h-14 bg-gray-200 rounded-full mb-5" />
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
                      <div className="h-4 bg-gray-200 rounded w-1/2 mb-6" />
                      <div className="mt-auto w-full h-10 bg-gray-200 rounded-xl" />
                    </div>
                  ))}
                </div>
              ) : items.length === 0 ? (
                <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl shadow-sm">
                  <FileBadge className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900">No documents found</h3>
                  <p className="text-gray-500 mt-2 font-medium">
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
                        className="group p-6 border border-gray-200 rounded-2xl bg-white shadow-sm cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-[#EA2830]/10 hover:border-[#EA2830]/30 flex flex-col items-center text-center h-full focus:ring-2 focus:ring-red-600"
                      >
                        <div className="w-14 h-14 bg-[#EA2830] rounded-full flex items-center justify-center text-white mb-5 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                          <FileText size={24} aria-hidden="true" />
                        </div>

                        <h3 className="text-[16px] font-sans font-medium text-gray-900 mb-6 line-clamp-3 leading-snug group-hover:text-[#EA2830] transition-colors duration-300">
                          {fileTitle}
                        </h3>

                        <div className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 text-gray-600 text-sm font-semibold group-hover:bg-[#EA2830] group-hover:text-white transition-colors duration-300">
                          <DownloadIcon size={16} className="stroke-[2.5]" />
                          <span>Download</span>
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