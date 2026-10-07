"use client";

import { useState, useEffect, useRef } from "react";
import { X, Check, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { getActivePopup } from "@/services/popup";

// Expiry date for the SEBI campaign popup: 31st October 2026 23:59:59 IST
const SEBI_CAMPAIGN_EXPIRY_TIMESTAMP = new Date("2026-10-31T23:59:59+05:30").getTime();

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
    "Understand Before You Invest",
    "Choose Regulated Investment Products",
    "Start Early, Stay Invested",
    "Beware of Investment Frauds",
    "Understand Before",
    "Regulated Investment",
    "Start Early",
    "Investment Frauds",
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

/**
 * Reusable Popup Card Component matching exact design aesthetics
 */
function PopupCard({
  title,
  subtitle,
  description,
  points = [],
  links = [],
  imageSrc,
  imageAlt,
  onClose,
  titleId,
  isSebi = false,
}) {
  return (
    <div
      role="region"
      aria-labelledby={titleId}
      className="relative w-full max-w-[420px] max-h-[90vh] bg-white rounded-[24px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border border-slate-100 transition-all duration-300"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Top Header Banner */}
      <div
        className="relative bg-[#004f7a] bg-gradient-to-r from-[#004f7a] via-[#005a8c] to-[#003859] px-5 py-4 text-white overflow-hidden select-none shrink-0 min-h-[90px] flex flex-col justify-between"
        style={{ backgroundColor: "#004f7a" }}
      >
        {/* Subtle Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent pointer-events-none" />

        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-950 shadow-md border border-slate-100 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close Announcement"
        >
          <X size={16} strokeWidth={2.5} aria-hidden="true" />
        </button>

        {/* Title & Image Grid */}
        <div className="relative z-10 flex items-center justify-between gap-2 pr-7">
          {/* Left Side: Main Title */}
          <div className="max-w-[200px]">
            <h3
              id={titleId}
              className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight"
            >
              {isSebi ? (
                <>
                  <span className="text-sky-100 text-xs sm:text-[13px] block font-semibold uppercase tracking-wider mb-0.5">
                    SEBI presents
                  </span>
                  Samajh Se
                  <br />
                  Investing Simple
                </>
              ) : title && title.includes("Welcome to") ? (
                <>
                  Welcome to
                  <br />
                  Ratnakar Securities
                </>
              ) : (
                title
              )}
            </h3>
            {/* Cyan Accent Line */}
            <div className="w-8 h-[3px] bg-[#7dd3fc] rounded-full mt-1.5 shadow-xs" />
          </div>

          {/* Right Side: Header Graphic */}
          <div className="shrink-0 relative right-1 top-1.5 pointer-events-none">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt || "Header Graphic"}
                width={105}
                height={105}
                className="w-[85px] sm:w-[96px] h-auto object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)]"
                priority
              />
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-xs">
                <ShieldCheck className="w-8 h-8 text-sky-200" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Body */}
      <div
        className="p-4 sm:p-5 space-y-3.5 bg-white overflow-y-auto flex-1 sidebar-scrollbar"
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Description */}
        <p className="text-xs sm:text-[13px] text-[#334155] font-medium leading-relaxed">
          {description}
        </p>

        {/* Highlights Light-Blue Box with SVG Checkmarks */}
        {points && points.length > 0 && (
          <div
            className="bg-[#F0F7FF] rounded-xl p-3.5 border border-[#cce3fc] space-y-2.5"
            style={{ backgroundColor: "#f0f7ff" }}
          >
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1e293b]"
              >
                {/* Blue Checkmark Circle */}
                <div
                  className="w-4 h-4 rounded-full bg-[#004f7a] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs"
                  style={{ backgroundColor: "#004f7a" }}
                >
                  <Check size={11} strokeWidth={3.5} />
                </div>
                <div className="leading-snug">{formatPointText(pt)}</div>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons Stack */}
        {links && links.length > 0 && (
          <div className="space-y-2.5 pt-1">
            {links.map((lnk, idx) => {
              const isPrimary = idx === 0;

              return (
                <a
                  key={idx}
                  href={lnk.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-[13px] transition-all duration-200 flex items-center justify-between shadow-xs active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004f7a] ${isPrimary
                    ? "bg-[#004f7a] hover:bg-[#003d5e] text-white shadow-md"
                    : "bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#0F172A] border border-[#cbd5e1]"
                    }`}
                  style={
                    isPrimary
                      ? { backgroundColor: "#004f7a", color: "#ffffff" }
                      : { backgroundColor: "#f8fafc", color: "#0f172a" }
                  }
                >
                  <span className="tracking-tight">
                    {lnk.label || `Action ${idx + 1}`}
                  </span>
                  <ArrowRight size={16} className="shrink-0 ml-2" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Startup Advisory Announcement Popup Modal
 * 
 * - Dual Popups mode active up to 31st October 2026:
 *   - Left: Existing Welcome / Ratnakar Securities Popup
 *   - Right: SEBI presents Samajh Se Investing Simple Awareness Popup
 * - After 31st October 2026:
 *   - Reverts back to a single centered popup.
 */
export default function StartupPopupModal() {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [isSebiOpen, setIsSebiOpen] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const modalRef = useRef(null);

  const isOpen = isMainOpen || isSebiOpen;
  const isDualMode = isMainOpen && isSebiOpen;

  useEffect(() => {
    let isMounted = true;

    // Check if SEBI campaign is within active date window (<= 31 Oct 2026)
    const activeSebi = Date.now() <= SEBI_CAMPAIGN_EXPIRY_TIMESTAMP;

    async function loadPopup() {
      if (typeof window !== "undefined" && sessionStorage.getItem("welcomePopupSeen")) {
        return;
      }

      try {
        const res = await getActivePopup();
        if (!isMounted) return;

        if (res && res.success && res.data && res.data.isShowPopup) {
          setPopupData(res.data);
          setIsMainOpen(true);
          if (activeSebi) setIsSebiOpen(true);
          sessionStorage.setItem("welcomePopupSeen", "true");
        } else if (!res || !res.data) {
          // If backend popup service is not configured/offline, show default popup
          setPopupData({ isShowPopup: true });
          setIsMainOpen(true);
          if (activeSebi) setIsSebiOpen(true);
          sessionStorage.setItem("welcomePopupSeen", "true");
        }
      } catch (err) {
        console.warn("Popup fetch error:", err);
        if (isMounted) {
          setPopupData({ isShowPopup: true });
          setIsMainOpen(true);
          if (activeSebi) setIsSebiOpen(true);
          sessionStorage.setItem("welcomePopupSeen", "true");
        }
      }
    }

    loadPopup();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCloseMain = () => {
    setIsMainOpen(false);
  };

  const handleCloseSebi = () => {
    setIsSebiOpen(false);
  };

  const handleCloseAll = () => {
    setIsMainOpen(false);
    setIsSebiOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseAll();
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
    firstElement.focus();

    return () => window.removeEventListener("keydown", handleTabKey);
  }, [isOpen]);

  if (!isOpen || !popupData) return null;

  // Existing Left Popup Data
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

  // SEBI Right Popup Data (Active until 31st October 2026)
  const sebiTitle = "SEBI presents Samajh Se Investing Simple";
  const sebiDesc =
    "SEBI Investor Awareness initiative to empower every investor with key financial knowledge for safe, informed, and smart investing.";
  const sebiPoints = [
    "Understand Before You Invest",
    "Choose Regulated Investment Products",
    "Start Early, Stay Invested",
    "Beware of Investment Frauds",
  ];
  const sebiLinks = [];

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={handleCloseAll}
      onKeyDown={(e) => e.key === "Escape" && handleCloseAll()}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={
          isDualMode
            ? undefined
            : isMainOpen
            ? "startup-modal-title"
            : "sebi-modal-title"
        }
        aria-label={isDualMode ? "Important Announcements and Investor Advisories" : undefined}
        className={
          isDualMode
            ? "relative w-full max-w-4xl my-auto py-2 flex flex-col md:flex-row items-center md:items-stretch justify-center gap-4 sm:gap-6"
            : "relative w-[92vw] max-w-[420px] max-h-[90vh] my-auto flex flex-col items-center justify-center"
        }
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Card: Welcome to Ratnakar Securities */}
        {isMainOpen && (
          <PopupCard
            title={displayTitle}
            description={displayDesc}
            points={displayPoints}
            links={displayLinks}
            imageSrc={encodeURI("/images/about/Stock trading on sleek iPhones.png")}
            imageAlt="Stock trading on sleek iPhones"
            onClose={handleCloseMain}
            titleId="startup-modal-title"
            isSebi={false}
          />
        )}

        {/* Right Card: SEBI presents Samajh Se Investing Simple (Rendered up to 31st October 2026) */}
        {isSebiOpen && (
          <PopupCard
            title={sebiTitle}
            description={sebiDesc}
            points={sebiPoints}
            links={sebiLinks}
            imageSrc={encodeURI("/images/about/Stock trading on sleek iPhones.png")}
            imageAlt="SEBI Investor Awareness"
            onClose={handleCloseSebi}
            titleId="sebi-modal-title"
            isSebi={true}
          />
        )}
      </div>
    </div>
  );
}

