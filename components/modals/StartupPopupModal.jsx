"use client";

import { useState, useEffect, useRef } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import { getActivePopup } from "@/services/popup";

// Helper to format text with bold keywords if markdown-style **bold** or common financial terms are present
const formatPointText = (text) => {
  if (!text) return "";

  // If text already contains **bold** markers
  if (text.includes("**")) {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-extrabold text-slate-900">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  }

  // Auto-highlight key terms if plain text
  const keywords = [
    "Demat and Trading Account",
    "Demat Account",
    "Equity, Mutual Funds, Bonds",
    "Mutual Funds",
    "0 brokerage",
    "Research Reports",
  ];
  for (const kw of keywords) {
    if (text.includes(kw)) {
      const parts = text.split(kw);
      return (
        <span key={kw}>
          {parts[0]}
          <strong className="font-extrabold text-slate-900">{kw}</strong>
          {parts[1]}
        </span>
      );
    }
  }

  return text;
};

export default function StartupPopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    async function loadPopup() {
      const res = await getActivePopup();
      if (!isMounted) return;

      if (res && res.success && res.data && res.data.isShowPopup) {
        setPopupData(res.data);
        setIsOpen(true);
      }
    }

    loadPopup();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const modalElement = modalRef.current;
    if (!modalElement) return;

    const focusableElements = modalElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleTabKey);
    // Focus first element on mount
    firstElement.focus();

    return () => window.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  if (!isOpen || !popupData) return null;

  const displayTitle = popupData.title || "Welcome to Ratnakar Securities";
  const displayDesc =
    popupData.description ||
    "Discover smarter investment opportunities with Ratnakar Securities. Explore our range of financial products, expert market insights, and easy account opening process.";

  const displayPoints =
    Array.isArray(popupData.points) && popupData.points.length > 0
      ? popupData.points
      : [
          "Open your Demat and Trading Account in just a few simple steps.",
          "Explore Equity, Mutual Funds, Bonds, and other investment opportunities.",
          "Get access to expert market insights and research reports.",
        ];

  const displayLinks =
    Array.isArray(popupData.links) && popupData.links.length > 0
      ? popupData.links
      : popupData.link
      ? [{ label: "Explore Now", url: popupData.link }]
      : [
          {
            label: "TradeX (Play Store)",
            url: "https://play.google.com/store/apps/details?id=com.wave.ratnakartradeexpress",
          },
          {
            label: "TradeX (Apple Store)",
            url: "https://apps.apple.com/in/app/ratnakar-tradeexpress/id6742447581",
          },
        ];

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-hidden"
      onClick={handleClose}
      onKeyDown={(e) => e.key === "Escape" && handleClose()}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="startup-modal-title"
        className="relative w-[92vw] max-w-[420px] max-h-[90vh] bg-white rounded-[24px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border border-slate-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Royal Blue Header Banner with iPhone Graphic */}
        <div className="relative bg-gradient-to-r from-[#0B5ED7] via-[#0D6EFD] to-[#0A4BB7] px-5 py-4 text-white overflow-hidden select-none shrink-0 min-h-[90px] flex flex-col justify-between">
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent pointer-events-none" />

          {/* Close Button Top Right */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-md border border-slate-100 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Close Announcement"
          >
            <X size={16} strokeWidth={2.5} aria-hidden="true" />
          </button>

          {/* Title & Image Grid */}
          <div className="relative z-10 flex items-center justify-between gap-2 pr-7">
            {/* Left Side: Main Title */}
            <div className="max-w-[170px]">
              <h3 id="startup-modal-title" className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight">
                {displayTitle.includes("Welcome to") ? (
                  <>
                    Welcome to
                    <br />
                    Ratnakar Securities
                  </>
                ) : (
                  displayTitle
                )}
              </h3>
              {/* Cyan Accent Line */}
              <div className="w-8 h-[3px] bg-[#38BDF8] rounded-full mt-1.5 shadow-xs" />
            </div>

            {/* Right Side: Sleek iPhones Image */}
            <div className="shrink-0 relative right-1 top-1.5 pointer-events-none">
              <Image
                src="/images/about/Stock trading on sleek iPhones.png"
                alt="Stock trading on sleek iPhones"
                width={105}
                height={105}
                className="w-[85px] sm:w-[96px] h-auto object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-3.5 bg-white overflow-y-auto flex-1 sidebar-scrollbar">
          {/* Description */}
          <p className="text-xs sm:text-[13px] text-[#475569] font-medium leading-relaxed">
            {displayDesc}
          </p>

          {/* Highlights Light-Blue Box with SVG Checkmarks */}
          {displayPoints && displayPoints.length > 0 && (
            <div className="bg-[#F0F7FF] rounded-xl p-3.5 border border-[#E0EDFF] space-y-2.5">
              {displayPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#334155]"
                >
                  {/* Blue Checkmark Circle */}
                  <div className="w-4 h-4 rounded-full bg-[#0D6EFD] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check size={11} strokeWidth={3.5} />
                  </div>
                  <div className="leading-snug">{formatPointText(pt)}</div>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons Stack */}
          <div className="space-y-2.5 pt-1">
            {displayLinks.map((lnk, idx) => {
              const isPrimary = idx === 0;

              return (
                <a
                  key={idx}
                  href={lnk.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-[13px] transition-all duration-200 flex items-center justify-between shadow-xs active:scale-[0.99] ${
                    isPrimary
                      ? "bg-[#0D6EFD] hover:bg-[#0b5ed7] text-white shadow-blue-500/20 shadow-md"
                      : "bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0]"
                  }`}
                >
                  <span className="tracking-tight">
                    {lnk.label || `Action ${idx + 1}`}
                  </span>
                  <ArrowRight size={16} className="shrink-0 ml-2" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
