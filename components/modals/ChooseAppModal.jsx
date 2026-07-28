"use client";

import React, { useEffect, useRef } from "react";
import { X, Download, Globe } from "lucide-react";
import Image from "next/image";

export default function ChooseAppModal({ isOpen, onClose }) {
  const modalRef = useRef(null);

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

  if (!isOpen) return null;

  const apps = [
    {
      name: "Android",
      label: "Google Play",
      badge: "GET IT ON",
      link: "https://play.google.com/store/apps/details?id=com.wave.ratnakartradeexpress",
      cardBg: "rgba(61,220,132,0.03)",
      borderHover: "#3DDC84",
      iconBg: "rgba(61,220,132,0.12)",
      btnBg: "#00b33c",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="#3DDC84">
          <path d="M17.523 15.341a.976.976 0 0 1-.973-.975.976.976 0 0 1 .973-.974.976.976 0 0 1 .973.974.976.976 0 0 1-.973.975m-11.046 0a.976.976 0 0 1-.973-.975.976.976 0 0 1 .973-.974.976.976 0 0 1 .973.974.976.976 0 0 1-.973.975M17.75 9.5l1.938-3.354a.403.403 0 0 0-.148-.55.403.403 0 0 0-.55.148l-1.963 3.4A11.64 11.64 0 0 0 12 8.25a11.64 11.64 0 0 0-5.027 1.144L4.01 5.744a.403.403 0 0 0-.55-.148.403.403 0 0 0-.148.55L5.25 9.5C2.95 10.8 1.5 13.14 1.5 15.75h21c0-2.61-1.45-4.95-3.75-6.25" />
        </svg>
      ),
    },
    {
      name: "Apple iOS",
      label: "App Store",
      badge: "DOWNLOAD ON THE",
      link: "https://apps.apple.com/in/app/ratnakar-tradeexpress/id6742447581",
      cardBg: "rgba(0,174,238,0.03)",
      borderHover: "#00aeee",
      iconBg: "rgba(0,174,238,0.12)",
      btnBg: "#00aeee",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="#1a6eb5">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="choose-app-modal-title"
        className="relative w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BLUE HEADER */}
        <div
          className="relative px-6 pt-6 pb-5 overflow-hidden flex items-center justify-between"
          style={{ background: "radial-gradient(1400px 700px at 85% 20%, #1a6eb5 0%, #012e54 50%, #011628 100%)" }}
        >
          {/* Left side content */}
          <div className="relative z-10 max-w-[60%]">
            <h2 id="choose-app-modal-title" className="text-[16px] sm:text-[22px] font-serif text-white leading-snug">
              Ratnakar&apos;s Online Trading<br />
              Mobile App &ndash; <span style={{ color: "#00aeee" }}>TradeXpress</span>
            </h2>
            <p className="text-[12px] mt-1 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              Choose your platform and download our app to start trading anywhere.
            </p>
          </div>

          {/* Right side clean image (No background layer overlay) */}
          <Image
            src="/images/about/Stock trading on sleek iPhones.png"
            alt="Trading Phone Preview"
            width={180}
            height={180}
            className="object-contain max-h-[160px] w-auto select-none"
            priority
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 cursor-pointer z-20"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
            aria-label="Close"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* WHITE BODY */}
        <div className="bg-white p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-3.5">
            {apps.map((app) => (
              <a
                key={app.name}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center gap-2.5 rounded-2xl p-4 border-2 transition-all duration-200"
                style={{ borderColor: "#f0f0f0", background: "#fff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = app.borderHover;
                  e.currentTarget.style.background = app.cardBg;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#f0f0f0";
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: app.iconBg }}
                >
                  {app.iconSvg}
                </div>

                <div className="text-center">
                  <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400 mb-0.5">
                    {app.badge}
                  </p>
                  <p className="text-sm font-bold text-gray-900">{app.label}</p>
                  <p className="text-[11px] text-gray-500">{app.name}</p>
                </div>

                <div
                  className="flex items-center gap-1 rounded-full px-4 py-1.5 mt-0.5 shadow-sm"
                  style={{ background: app.btnBg }}
                >
                  <Download style={{ width: "12px", height: "12px", color: "#fff" }} />
                  <span className="text-white text-[11px] font-semibold">Download</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}