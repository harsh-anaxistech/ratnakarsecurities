"use client";

import { X, Download } from "lucide-react";

export default function ChooseAppModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const apps = [
    {
      name: "Android",
      label: "Google Play",
      description: "Ratnakar TradeExpress – Apps on Google Play",
      link: "https://play.google.com/store/apps/details?id=com.wave.ratnakartradeexpress",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3DDC84">
          <path d="M17.523 15.341a.976.976 0 0 1-.973-.975.976.976 0 0 1 .973-.974.976.976 0 0 1 .973.974.976.976 0 0 1-.973.975m-11.046 0a.976.976 0 0 1-.973-.975.976.976 0 0 1 .973-.974.976.976 0 0 1 .973.974.976.976 0 0 1-.973.975M17.75 9.5l1.938-3.354a.403.403 0 0 0-.148-.55.403.403 0 0 0-.55.148l-1.963 3.4A11.64 11.64 0 0 0 12 8.25a11.64 11.64 0 0 0-5.027 1.144L4.01 5.744a.403.403 0 0 0-.55-.148.403.403 0 0 0-.148.55L5.25 9.5C2.95 10.8 1.5 13.14 1.5 15.75h21c0-2.61-1.45-4.95-3.75-6.25" />
        </svg>
      ),
      iconBg: "rgba(61,220,132,0.12)",
      badge: "GET IT ON",
      accentColor: "#3DDC84",
    },
    {
      name: "Apple iOS",
      label: "App Store",
      description: "Ratnakar TradeExpress App – App Store",
      link: "https://apps.apple.com/in/app/ratnakar-tradeexpress/id6742447581",
      iconSvg: (
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#555">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
      iconBg: "rgba(0,0,0,0.06)",
      badge: "DOWNLOAD ON THE",
      accentColor: "#888888",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(5px)" }}
      onClick={onClose}
    >
      {/* Card — white background */}
      <div
        className="relative w-full max-w-md rounded-3xl shadow-2xl bg-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-7 pt-8 pb-5 border-b border-gray-100">

          {/* "Download App" label — red */}
          <div className="flex items-center gap-2 mb-2">
            <Download className="w-4 h-4" style={{ color: "#ea2830" }} />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#ea2830" }}
            >
              Download App
            </span>
          </div>

          {/* Heading — blue */}
          <h2
            className="text-xl font-bold leading-snug"
            style={{ color: "#0056a0" }}
          >
            Ratnakar&apos;s Online Trading
            <br />
            Mobile APP – TradeXpress
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Choose your platform to download
          </p>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 hover:bg-red-50"
            style={{ color: "#ea2830" }}
            aria-label="Close"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Download boxes */}
        <div className="flex flex-col sm:flex-row gap-4 p-6">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center gap-3 rounded-2xl p-5 border-2 border-gray-100 bg-white transition-all duration-200 hover:shadow-md"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = app.accentColor;
                e.currentTarget.style.background = app.iconBg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#f3f4f6";
                e.currentTarget.style.background = "#fff";
              }}
            >
              {/* Platform icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: app.iconBg }}
              >
                {app.iconSvg}
              </div>

              {/* Text */}
              <div className="text-center">
                <p className="text-[10px] font-semibold text-gray-400 tracking-wider mb-0.5">
                  {app.badge}
                </p>
                <p className="text-base font-bold text-gray-900">{app.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{app.name}</p>
              </div>

              {/* Download icon — red circle */}
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full"
                style={{ background: "#ea2830" }}
              >
                <Download className="w-4 h-4 text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer tip */}
        <div className="mx-6 mb-6 p-3 rounded-xl border border-blue-100 bg-blue-50">
          <p className="text-xs text-blue-700 text-center">
            💡 You can also access our platform from any web browser.
          </p>
        </div>
      </div>
    </div>
  );
}

