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
      className="skip-link fixed -top-40 left-4 z-[99999] bg-[#004b87] text-white px-6 py-3.5 rounded-xl shadow-2xl font-bold text-sm outline-none ring-4 ring-yellow-400 focus:top-4 transition-all duration-200 block"
    >
      Skip to Main Content
    </a>
  );
}
