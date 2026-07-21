"use client";

import React from "react";
import { X, ExternalLink } from "lucide-react";

export default function BackofficeLoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const loginOptions = [
    {
      title: "New Combined TradeNET-WEB",
      subtitle: "(Branch / Retail)",
      logins: [
        {
          name: "Login",
          url: "https://twx.ratnakarsecurities.com:4433/twx/signin"
        }
      ]
    },
    {
      title: "Tradenet",
      subtitle: "(Trading Backoffice For Branches / Business Associates)",
      logins: [
        {
          name: "Login 1",
          url: "https://tradenet1.ratnakarsecurities.com:8087/"
        },
        {
          name: "Login 2",
          url: "https://tradenet2.ratnakarsecurities.com:8087/"
        }
      ]
    }
  ];

  return (
      <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#2a689b] to-[#1e4b75] text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Back Office Logins</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loginOptions.map((option, idx) => (
              <div
                key={idx}
                className="border-2 border-[#ea2830]/20 rounded-xl p-6 hover:border-[#ea2830]/50 transition-colors"
              >
                {/* Box Title */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    {option.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    {option.subtitle}
                  </p>
                </div>

                {/* Login Links */}
                <div className="space-y-3">
                  {option.logins.map((login, loginIdx) => (
                    <a
                      key={loginIdx}
                      href={login.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-[#ea2830]/5 hover:bg-[#ea2830]/10 rounded-lg border border-[#ea2830]/10 hover:border-[#ea2830]/30 transition-all group"
                    >
                      <span className="font-semibold text-[#ea2830]">
                        {login.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-[#ea2830] opacity-60 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
