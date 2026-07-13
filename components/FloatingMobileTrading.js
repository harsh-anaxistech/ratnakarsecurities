"use client";
import React, { useState } from "react";
import { Smartphone, X, Briefcase, TrendingUp } from "lucide-react";

export default function FloatingMobileTrading() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ફ્લોટિંગ ટ્રિગર બટન */}
      <div 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[999] cursor-pointer group"
      >
        <div className="flex items-center  text-white p-4 rounded-full transition-all duration-300 hover:scale-110">
          <Smartphone className="w-6 h-6" />
        </div>
      </div>

      {/* મોડલ (Popup) */}
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl">
            
            {/* ક્લોઝ બટન */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-4 right-4 text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
            >
              <X size={24} strokeWidth={3} />
            </button>

            <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Choose Your App</h2>

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