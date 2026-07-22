"use client";

import React from "react";
import { X, ExternalLink, Globe2, Landmark } from "lucide-react";
import Image from "next/image";

export default function BackofficeLoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const loginOptions = [
    {
      title: "New Combined TradeNET-WEB",
      subtitle: "Branch / Retail",
      icon: Globe2,
      logins: [
        {
          name: "Login",
          url: "https://twx.ratnakarsecurities.com:4433/twx/signin",
        },
      ],
      cardBg: "rgba(0,174,238,0.03)",
      borderHover: "#00aeee",
      iconBg: "rgba(0,174,238,0.12)",
      iconColor: "#00aeee",
      btnBg: "#00aeee",
    },
    {
      title: "Tradenet Backoffice",
      subtitle: "Trading Backoffice For Branches / Associates",
      icon: Landmark,
      logins: [
        {
          name: "Login 1",
          url: "https://tradenet1.ratnakarsecurities.com:8087/",
        },
        {
          name: "Login 2",
          url: "https://tradenet2.ratnakarsecurities.com:8087/",
        },
      ],
      cardBg: "rgba(61,220,132,0.03)",
      borderHover: "#3DDC84",
      iconBg: "rgba(61,220,132,0.12)",
      iconColor: "#3DDC84",
      btnBg: "#00b33c",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* BLUE HEADER */}
        <div
          className="relative flex items-center justify-between overflow-hidden px-6 pb-5 pt-6"
          style={{
            background:
              "radial-gradient(1400px 700px at 85% 20%, #1a6eb5 0%, #012e54 50%, #011628 100%)",
          }}
        >
          {/* Left side content */}
          <div className="relative z-10 max-w-[60%]">
            <h2 className="font-serif text-[16px] leading-snug text-white sm:text-[22px]">
              Ratnakar&apos;s Online Portals <br />
              <span style={{ color: "#00aeee" }}>Back Office Logins</span>
            </h2>
            <p
              className="mt-1 text-[12px] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Access your back office portals and manage your trading accounts seamlessly.
            </p>
          </div>

          {/* Right side image */}
          <Image
            src="/images/about/Stock trading on sleek iPhones.png"
            alt="Trading Phone Preview"
            width={180}
            height={180}
            className="max-h-[160px] w-auto select-none object-contain"
            priority
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-2.5 top-2.5 z-20 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}
            aria-label="Close"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* WHITE BODY */}
        <div className="bg-white p-5 sm:p-6">
          <div className="flex flex-col gap-3.5 sm:flex-row">
            {loginOptions.map((option) => {
              const Icon = option.icon;

              return (
                <div
                  key={option.title}
                  className="flex flex-1 flex-col items-center justify-between gap-3 rounded-2xl border-2 p-4 text-center transition-all duration-200"
                  style={{ borderColor: "#f0f0f0", background: "#fff" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = option.borderHover;
                    e.currentTarget.style.background = option.cardBg;
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
                  <div className="flex flex-col items-center gap-2.5">
                    {/* Icon Container */}
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ background: option.iconBg }}
                    >
                      <Icon size={24} style={{ color: option.iconColor }} strokeWidth={2} />
                    </div>

                    {/* Titles */}
                    <div>
                      <p className="mb-0.5 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                        {option.subtitle}
                      </p>
                      <p className="text-sm font-bold text-gray-900">{option.title}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-1 flex w-full flex-wrap justify-center gap-2">
                    {option.logins.map((login) => (
                      <a
                        key={login.name}
                        href={login.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-full px-4 py-1.5 shadow-sm transition-all duration-150 hover:opacity-90"
                        style={{ background: option.btnBg }}
                      >
                        <span className="text-[11px] font-semibold text-white">
                          {login.name}
                        </span>
                        <ExternalLink style={{ width: "11px", height: "11px", color: "#fff" }} />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}