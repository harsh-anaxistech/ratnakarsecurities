"use client";

import { X, Download } from "lucide-react";

export default function ChooseAppModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const apps = [
    {
      name: "Android",
      label: "Google Play",
      badge: "GET IT ON",
      link: "https://play.google.com/store/apps/details?id=com.wave.ratnakartradeexpress",
      iconBg: "rgba(61,220,132,0.12)",
      hoverBorder: "#3DDC84",
      hoverBg: "rgba(61,220,132,0.06)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="#3DDC84">
          <path d="M17.523 15.341a.976.976 0 0 1-.973-.975.976.976 0 0 1 .973-.974.976.976 0 0 1 .973.974.976.976 0 0 1-.973.975m-11.046 0a.976.976 0 0 1-.973-.975.976.976 0 0 1 .973-.974.976.976 0 0 1 .973.974.976.976 0 0 1-.973.975M17.75 9.5l1.938-3.354a.403.403 0 0 0-.148-.55.403.403 0 0 0-.55.148l-1.963 3.4A11.64 11.64 0 0 0 12 8.25a11.64 11.64 0 0 0-5.027 1.144L4.01 5.744a.403.403 0 0 0-.55-.148.403.403 0 0 0-.148.55L5.25 9.5C2.95 10.8 1.5 13.14 1.5 15.75h21c0-2.61-1.45-4.95-3.75-6.25" />
        </svg>
      ),
    },
    {
      name: "Apple iOS",
      label: "App Store",
      badge: "DOWNLOAD ON THE",
      link: "https://apps.apple.com/in/app/ratnakar-tradeexpress/id6742447581",
      iconBg: "rgba(0,0,0,0.06)",
      hoverBorder: "#aaaaaa",
      hoverBg: "rgba(0,0,0,0.04)",
      iconSvg: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="#444">
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
        className="relative w-full max-w-md rounded-3xl shadow-2xl overflow-hidden bg-white"
        onClick={(e) => e.stopPropagation()}
      >

        {/* BLUE HEADER */}
        <div
          className="relative px-7 pt-7 pb-6 overflow-hidden bg-gradient-to-r from-[#2a689b] to-[#1e4b75]"
        >
          <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "110px", height: "110px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-20px", left: "60px", width: "70px", height: "70px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />



          {/* White heading */}
          <h2 className="text-xl font-bold text-white leading-snug">
            Ratnakar&apos;s Online Trading<br />
            Mobile APP &ndash; TradeXpress
          </h2>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.65)" }}>
            Choose your platform below to download
          </p>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
            aria-label="Close"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* WHITE BODY */}
        <div className="bg-white p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {apps.map((app) => (
              <a
                key={app.name}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center gap-3 rounded-2xl p-5 border-2 transition-all duration-200"
                style={{ borderColor: "#f0f0f0", background: "#fff" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = app.hoverBorder;
                  e.currentTarget.style.background = app.hoverBg;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#f0f0f0";
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: app.iconBg }}
                >
                  {app.iconSvg}
                </div>

                <div className="text-center">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-400 mb-0.5">
                    {app.badge}
                  </p>
                  <p className="text-base font-bold text-gray-900">{app.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{app.name}</p>
                </div>

                <div
                  className="flex items-center gap-1.5 rounded-full px-4 py-1.5"
                  style={{ background: "#ea2830" }}
                >
                  <Download style={{ width: "13px", height: "13px", color: "#fff" }} />
                  <span className="text-white text-xs font-semibold">Download</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-xl border border-blue-100 bg-blue-50">
            <p className="text-xs text-blue-700 text-center">
              💡 You can also access our platform from any web browser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

