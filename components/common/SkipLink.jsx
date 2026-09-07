"use client";

import React from "react";

/**
 * Accessible Skip to Main Content Link
 * Satisfies GIGW 3.0 5.2.27 & WCAG 2.2 2.4.1 (Bypass Blocks)
 */
export default function SkipLink() {
  const handleSkip = (e) => {
    e.preventDefault();
    const main = document.getElementById("main-content");
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus();
      main.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#004b87] focus:text-white focus:px-5 focus:py-3 focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:font-bold focus:text-sm transition-all"
    >
      Skip to Main Content
    </a>
  );
}
