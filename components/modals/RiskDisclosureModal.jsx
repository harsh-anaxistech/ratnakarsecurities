"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function RiskDisclosureModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-[440px] sm:max-w-[460px] bg-white rounded-[22px] shadow-2xl overflow-hidden border border-slate-100 transition-all duration-300 transform scale-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Section with Curved Blue Wave & Close Button */}
        <div className="relative pt-2.5 px-4 pb-1">
          {/* Top Blue Wave Background Header */}
          <div className="absolute top-0 left-0 right-0 h-20 sm:h-22 overflow-hidden pointer-events-none rounded-t-[22px]">
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="header-grad-sm" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#003882" />
                  <stop offset="50%" stopColor="#0052cc" />
                  <stop offset="100%" stopColor="#0070f3" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L500,0 L500,90 C380,140 300,60 200,100 C100,140 50,80 0,110 Z"
                fill="url(#header-grad-sm)"
              />
              <path
                d="M0,40 Q250,110 500,40 L500,0 L0,0 Z"
                fill="white"
                fillOpacity="0.08"
              />
            </svg>
          </div>

          {/* Close Button top-right */}
          <div className="relative z-10 flex justify-end items-center">
            <button
              onClick={onClose}
              className="flex items-center gap-1 text-[11px] font-bold tracking-wider text-slate-700 hover:text-slate-950 transition-colors group cursor-pointer bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs border border-slate-200/80"
              aria-label="Close popup"
            >
              <span>CLOSE</span>
              <span className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors">
                <X className="w-3 h-3 stroke-[2.5]" />
              </span>
            </button>
          </div>

          {/* Center Shield Icon Floating Badge */}
          <div className="relative z-10 flex justify-center -mt-1 mb-1.5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-1 shadow-md border border-slate-100 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#0052cc] flex items-center justify-center text-white shadow-inner">
                {/* Shield + Document + Check Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7 sm:w-8 sm:h-8"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(255,255,255,0.15)" stroke="white" strokeWidth="2" />
                  <path d="M9 11.5l2 2 4-4" stroke="white" strokeWidth="2.2" />
                  <line x1="9" y1="16" x2="15" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Modal Header Title */}
          <div className="relative z-10 text-center px-1">
            <h2 className="text-base sm:text-lg font-black tracking-tight text-[#0052cc]">
              RISK DISCLOSURES <span className="text-[#1e293b] font-extrabold">ON DERIVATIVES</span>
            </h2>

            {/* Subtitle Divider with Center Dot */}
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="w-8 sm:w-10 h-[1.5px] bg-blue-200 rounded-full"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0052cc]"></div>
              <div className="w-8 sm:w-10 h-[1.5px] bg-blue-200 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Modal Main Content Container */}
        <div className="px-4 sm:px-5 pb-4 space-y-3">
          {/* Main 4 Points Box */}
          <div className="bg-white border border-slate-200/90 rounded-xl divide-y divide-slate-100 shadow-xs overflow-hidden">
            {/* Point 1: 9 out of 10 */}
            <div className="p-2.5 sm:p-3 flex items-center gap-2.5 hover:bg-slate-50/50 transition-colors">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fff0f0] border border-[#ffd5d5] flex items-center justify-center text-[#ef4444] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs sm:text-[13px] leading-snug font-medium">
                <span className="text-[#ef4444] font-black text-sm mr-1 inline-block select-none">»</span>
                9 out of 10 individual traders in equity Futures and Options Segment. Incurred net losses.
              </p>
            </div>

            {/* Point 2: Loss makers close to 50k */}
            <div className="p-2.5 sm:p-3 flex items-center gap-2.5 hover:bg-slate-50/50 transition-colors">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fff0f0] border border-[#ffd5d5] flex items-center justify-center text-[#ef4444] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                  <polyline points="17 18 23 18 23 12" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs sm:text-[13px] leading-snug font-medium">
                <span className="text-[#ef4444] font-black text-sm mr-1 inline-block select-none">»</span>
                On an average, loss makers registered net trading loss close to ₹ 50,000.
              </p>
            </div>

            {/* Point 3: 28% net trading loss as transaction costs */}
            <div className="p-2.5 sm:p-3 flex items-center gap-2.5 hover:bg-slate-50/50 transition-colors">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fff0f0] border border-[#ffd5d5] flex items-center justify-center text-[#ef4444] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <line x1="19" y1="5" x2="5" y2="19" />
                  <circle cx="6.5" cy="6.5" r="2.5" />
                  <circle cx="17.5" cy="17.5" r="2.5" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs sm:text-[13px] leading-snug font-medium">
                <span className="text-[#ef4444] font-black text-sm mr-1 inline-block select-none">»</span>
                Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.
              </p>
            </div>

            {/* Point 4: Profits 15% to 50% */}
            <div className="p-2.5 sm:p-3 flex items-center gap-2.5 hover:bg-slate-50/50 transition-colors">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fff0f0] border border-[#ffd5d5] flex items-center justify-center text-[#ef4444] shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                </svg>
              </div>
              <p className="text-slate-700 text-xs sm:text-[13px] leading-snug font-medium">
                <span className="text-[#ef4444] font-black text-sm mr-1 inline-block select-none">»</span>
                Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.
              </p>
            </div>
          </div>

          {/* Bottom Source Card Box */}
          <div className="bg-[#f0f7ff] border border-[#d6e8ff] rounded-xl p-2.5 sm:p-3 flex items-start gap-2.5 shadow-xs">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#dbeafe] text-[#0052cc] flex items-center justify-center shrink-0 mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[#0052cc] text-xs sm:text-sm mb-0.5">
                Source:
              </h3>
              <p className="text-[#3b608c] text-[10.5px] sm:text-[11.5px] leading-relaxed font-normal">
                SEBI study dated January 25, 2023 on “Analysis of Profit and Loss of Individual Traders dealing in equity Futures and Options (F&amp;O) Segment”, wherein aggregate level findings are based on annual Profit/Loss incurred by individual traders in equity F&amp;O during FY 2021-22.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Curved Accent Footer Bar */}
        <div className="w-full h-2 sm:h-2.5 bg-gradient-to-r from-[#003882] via-[#0052cc] to-[#003882] rounded-b-[22px]"></div>
      </div>
    </div>
  );
}
