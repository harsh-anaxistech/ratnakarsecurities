"use client";
import React from "react";
import { Smartphone } from "lucide-react";

export default function FloatingMobileTrading() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      {/* બ્રાન્ડ રેડ કલર બેકગ્રાઉન્ડ */}
      <a
        href="http://dnld.mobile.nowonline.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#ea2830] text-white p-4 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 overflow-hidden hover:pr-6 hover:shadow-xl hover:shadow-[#ea2830]/20"
      >
        {/* વ્હાઇટ આઈકોન */}
        <Smartphone className="w-6 h-6 flex-shrink-0 text-white" />

        {/* ટેક્સ્ટ - જે Hover પર ડાબી બાજુથી બહાર આવશે */}
        <span className="max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden font-bold ml-0 group-hover:ml-3">
          Start Mobile Trading
        </span>
      </a>
    </div>
  );
}