"use client";
import React, { useState } from "react";
import { X, Briefcase, TrendingUp } from "lucide-react";

export default function FloatingMobileTrading({ isOpen: externalIsOpen, onClose }) {
  const [internalOpen, setInternalOpen] = useState(false);

  // If external control props are provided, use them; otherwise use internal state
  const isControlled = externalIsOpen !== undefined;
  const isOpen = isControlled ? externalIsOpen : internalOpen;
  const handleClose = () => {
    if (isControlled) {
      onClose?.();
    } else {
      setInternalOpen(false);
    }
  };

  return (
    <>
      {/* Modal (Popup) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleClose}
          onKeyDown={(e) => e.key === "Escape" && handleClose()}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="choose-app-modal-title"
            className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Close Choose Your App dialog"
              className="absolute top-4 right-4 text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors focus:ring-2 focus:ring-red-600"
            >
              <X size={24} strokeWidth={3} aria-hidden="true" />
            </button>

            <h2 id="choose-app-modal-title" className="text-2xl font-bold text-center text-slate-900 mb-8">Choose Your App</h2>

            <div className="flex flex-col sm:flex-row justify-center gap-8">
              {/* Option 1: Wealth Management */}
              <a
                href="https://play.google.com/store/apps/details?id=com.tvs.ratnakar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-32 h-32 rounded-full border-2 border-slate-100 flex items-center justify-center bg-white shadow-lg group-hover:border-[#00aeee] transition-all duration-300 mb-4">
                  <Briefcase className="w-12 h-12 text-[#00aeee]" />
                </div>
                <span className="text-sm font-bold text-slate-800 text-center uppercase tracking-wider">WEALTH<br/>MANAGEMENT</span>
              </a>

              {/* Option 2: Trade Express */}
              <a
                href="https://play.google.com/store/apps/details?id=com.wave.ratnakartradeexpress"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <div className="w-32 h-32 rounded-full border-2 border-slate-100 flex items-center justify-center bg-white shadow-lg group-hover:border-[#ea2830] transition-all duration-300 mb-4">
                  <TrendingUp className="w-12 h-12 text-[#ea2830]" />
                </div>
                <span className="text-sm font-bold text-slate-800 text-center uppercase tracking-wider">TRADE<br/>EXPRESS</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}