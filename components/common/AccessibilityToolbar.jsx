"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sun,
  Moon,
  Type,
  Pause,
  Play,
  Search,
  Map,
  Eye,
  Sliders
} from "lucide-react";

export default function AccessibilityToolbar({ onOpenSearch }) {
  const [contrastMode, setContrastMode] = useState("normal"); // "normal" | "dark" | "light"
  const [textScale, setTextScale] = useState("base"); // "sm" | "base" | "lg"
  const [animationsPaused, setAnimationsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedContrast = localStorage.getItem("rsl_contrast_mode") || "normal";
    const savedTextScale = localStorage.getItem("rsl_text_scale") || "base";
    const savedAnimations = localStorage.getItem("rsl_pause_animations") === "true";

    setContrastMode(savedContrast);
    setTextScale(savedTextScale);
    setAnimationsPaused(savedAnimations);

    applyContrast(savedContrast);
    applyTextScale(savedTextScale);
    applyAnimations(savedAnimations);
  }, []);

  const applyContrast = (mode) => {
    const root = document.documentElement;
    root.classList.remove("high-contrast-dark", "high-contrast-light");
    if (mode === "dark") root.classList.add("high-contrast-dark");
    if (mode === "light") root.classList.add("high-contrast-light");
    localStorage.setItem("rsl_contrast_mode", mode);
  };

  const applyTextScale = (scale) => {
    const root = document.documentElement;
    root.classList.remove("text-scale-sm", "text-scale-base", "text-scale-lg");
    if (scale === "sm") root.classList.add("text-scale-sm");
    if (scale === "base") root.classList.add("text-scale-base");
    if (scale === "lg") root.classList.add("text-scale-lg");
    localStorage.setItem("rsl_text_scale", scale);
  };

  const applyAnimations = (paused) => {
    const root = document.documentElement;
    if (paused) {
      root.classList.add("pause-animations");
    } else {
      root.classList.remove("pause-animations");
    }
    localStorage.setItem("rsl_pause_animations", String(paused));
  };

  const handleContrastCycle = () => {
    let nextMode = "dark";
    if (contrastMode === "dark") nextMode = "light";
    else if (contrastMode === "light") nextMode = "normal";
    else nextMode = "dark";

    setContrastMode(nextMode);
    applyContrast(nextMode);
  };

  const handleTextScale = (scale) => {
    setTextScale(scale);
    applyTextScale(scale);
  };

  const handleToggleAnimations = () => {
    const nextVal = !animationsPaused;
    setAnimationsPaused(nextVal);
    applyAnimations(nextVal);
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 text-xs text-white/80" aria-hidden="true">
        <span>Accessibility Tools</span>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-label="Accessibility Options"
      className="flex items-center gap-1.5 sm:gap-2 text-xs text-white font-medium"
    >
      {/* Contrast Switcher */}
      <button
        type="button"
        onClick={handleContrastCycle}
        aria-label={`Toggle high contrast mode. Currently ${contrastMode === "dark" ? "High Contrast Dark" : contrastMode === "light" ? "High Contrast Light" : "Standard Contrast"}`}
        title={`Contrast: ${contrastMode === "dark" ? "Dark High Contrast" : contrastMode === "light" ? "Light High Contrast" : "Standard"}`}
        className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/20 transition-colors focus:ring-2 focus:ring-white min-h-[30px]"
      >
        {contrastMode === "dark" ? (
          <Moon className="w-3.5 h-3.5 text-yellow-300" aria-hidden="true" />
        ) : contrastMode === "light" ? (
          <Sun className="w-3.5 h-3.5 text-white" aria-hidden="true" />
        ) : (
          <Eye className="w-3.5 h-3.5 text-white" aria-hidden="true" />
        )}
        <span className="hidden sm:inline">
          {contrastMode === "dark" ? "Dark HC" : contrastMode === "light" ? "Light HC" : "Contrast"}
        </span>
      </button>

      {/* Font Size Adjusters */}
      <div className="flex items-center bg-white/10 border border-white/20 rounded overflow-hidden" role="group" aria-label="Adjust Text Size">
        <button
          type="button"
          onClick={() => handleTextScale("sm")}
          aria-label="Decrease text size (A-)"
          title="Decrease font size"
          className={`px-2 py-1 transition-colors min-h-[30px] font-bold text-[11px] ${
            textScale === "sm" ? "bg-white text-slate-900 font-extrabold" : "text-white hover:bg-white/20"
          }`}
        >
          A-
        </button>
        <button
          type="button"
          onClick={() => handleTextScale("base")}
          aria-label="Reset text size to standard (A)"
          title="Standard font size"
          className={`px-2 py-1 transition-colors min-h-[30px] font-bold text-xs border-x border-white/20 ${
            textScale === "base" ? "bg-white text-slate-900 font-extrabold" : "text-white hover:bg-white/20"
          }`}
        >
          A
        </button>
        <button
          type="button"
          onClick={() => handleTextScale("lg")}
          aria-label="Increase text size (A+)"
          title="Increase font size"
          className={`px-2 py-1 transition-colors min-h-[30px] font-bold text-sm ${
            textScale === "lg" ? "bg-white text-slate-900 font-extrabold" : "text-white hover:bg-white/20"
          }`}
        >
          A+
        </button>
      </div>

      {/* Animation Pause / Resume Button */}
      <button
        type="button"
        onClick={handleToggleAnimations}
        aria-label={animationsPaused ? "Resume webpage animations and moving tickers" : "Pause webpage animations and moving tickers"}
        title={animationsPaused ? "Resume animations" : "Pause animations"}
        className={`flex items-center gap-1 px-2 py-1 rounded border transition-colors min-h-[30px] ${
          animationsPaused
            ? "bg-amber-400 text-slate-950 border-amber-300 font-bold"
            : "bg-white/10 hover:bg-white/20 border-white/20 text-white"
        }`}
      >
        {animationsPaused ? (
          <>
            <Play className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Resume Motion</span>
          </>
        ) : (
          <>
            <Pause className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Pause Motion</span>
          </>
        )}
      </button>

      {/* Search Site Trigger */}
      {onOpenSearch && (
        <button
          type="button"
          onClick={onOpenSearch}
          aria-label="Search website content (Press Ctrl+K or Cmd+K)"
          title="Search site (Ctrl+K)"
          className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors min-h-[30px]"
        >
          <Search className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="hidden md:inline">Search</span>
        </button>
      )}

      {/* HTML Site Map Link */}
      <Link
        href="/sitemap"
        aria-label="Navigate to HTML Site Map"
        title="HTML Site Map"
        className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors min-h-[30px]"
      >
        <Map className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="hidden lg:inline">Site Map</span>
      </Link>

      {/* Accessibility Statement Link */}
      <Link
        href="/accessibility-statement"
        aria-label="Navigate to Digital Accessibility Statement"
        title="Accessibility Statement"
        className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors min-h-[30px]"
      >
        <Sliders className="w-3.5 h-3.5" aria-hidden="true" />
        <span className="hidden xl:inline">Statement</span>
      </Link>
    </div>
  );
}
