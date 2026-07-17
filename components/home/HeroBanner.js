"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/common/Container";
import { ArrowRight, ShieldCheck, Users, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2 Slide ઓટો રોટેશન સેટઅપ (6 સેકન્ડ)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      style={{
        background: "radial-gradient(1200px 600px at 85% -10%, #1a6eb5 0%, #012e54 45%, #011628 100%)",
        color: "#fff"
      }}
      className="relative overflow-hidden w-full transition-all duration-500 min-h-[600px] flex items-center py-12 lg:py-12"
      aria-label="Online Trading Hero Dashboard"
    >
      {/* ── SLIDE 1 BACKGROUND EFFECTS ── */}
      <div className={cn(
        "absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none",
        currentSlide === 0 ? "opacity-100" : "opacity-0"
      )}>
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#1a6eb5]/10 to-transparent opacity-60" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#00aeee]/10 rounded-full blur-[140px] animate-pulse duration-[6000ms]" />
      </div>

      {/* ── SLIDE 2 BACKGROUND OVERLAY LAYER (60% Left Dark & 40% Right Image) ── */}
      <div 
        className={cn(
          "absolute inset-0 transition-all duration-1000 ease-in-out z-0 flex justify-end pointer-events-none",
          currentSlide === 1 ? "opacity-100 scale-100 visible" : "opacity-0 scale-105 invisible"
        )}
      >
        {/* 📸 જમણી બાજુ રાખેલી તમારી મેઇન ઇમેજ (હવે 40% વિડ્થ જેથી ડાબી બાજુ 60% સ્પેસ મળે) */}
        <div className="relative w-full lg:w-[40%] h-full">
          <Image
            src="/images/hero/2150970201.jpg" 
            alt="Hero Investment Background"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
        
        {/* 🎨 ડાર્ક ગ્રેડિયન્ટ ઓવરલે: via-[60%] નો ઉપયોગ કરીને ડાબો ભાગ 60% ડાર્ક રાખ્યો છે */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#011628] via-[#011628] via-[60%] to-transparent" />
      </div>

      <Container className="relative z-10 w-full">
        
        {/* ── SLIDE 1: POWERFUL TRADING PLATFORM ── */}
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center transition-all duration-700 ease-in-out",
          currentSlide === 0 ? "opacity-100 translate-x-0 relative" : "opacity-0 absolute pointer-events-none -translate-x-10 invisible"
        )}>
          {/* Left Side Content */}
          <div className="lg:col-span-6 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 shadow-sm mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00aeee] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00aeee]"></span>
              </span>
              <span className="text-white text-[14px] font-bold tracking-wider">
                Boost your income today!
              </span>
            </div>

            <div className="space-y-4 w-full">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1]">
                Powerful <br />
                <span className="relative inline-block bg-gradient-to-r from-[#00aeee] to-[#008cc3] bg-clip-text text-transparent font-bold">
                  Online Trading.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-white/70 italic">
                Since 2001 · Ahmedabad
              </p>
            </div>

            <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              Start investing in equities, derivatives, mutual funds, currency, and more through our next-gen Trading Account and high-performance mobile apps.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full max-w-xl mx-auto lg:mx-0">
              <a 
                href="https://smartkyc.co.in/d/ratnakar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-sm font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-sky-900/20 transition-all duration-300 transform hover:-translate-y-0.5 sm:w-auto"
              >
                <span>Invest Now</span>
              </a>

              <Link href="/products" className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-bold py-3.5 px-5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 sm:w-auto">
                <span>Explore Our Products</span>
              </Link>
            </div>
          </div>

          {/* Right Side Graph Dashboard Asset */}
          <div className="lg:col-span-6 w-full relative mt-4 lg:mt-0 max-w-2xl mx-auto">
            <div 
              style={{
                background: "rgba(255, 255, 255, 0.06)",
                borderColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)"
              }} 
              className="rounded-3xl p-4 sm:p-6 border shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <img 
                src="/images/hero/66722.jpg" 
                alt="Portfolio Dashboard" 
                className="w-full h-auto rounded-2xl object-cover shadow-md"
              />
              <div className="text-white/60 flex flex-col sm:flex-row justify-between items-center mt-4 text-xs sm:text-sm font-medium gap-2 text-center">
                <span>Your portfolio, 2001 → 2026</span>
                <span className="font-bold text-[#00aeee]">Disciplined investing wins</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── SLIDE 2: TRUST & PERFORMANCE (60% Left Content Layout) ── */}
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center transition-all duration-700 ease-in-out",
          currentSlide === 1 ? "opacity-100 translate-x-0 relative" : "opacity-0 absolute pointer-events-none translate-x-10 invisible"
        )}>
          {/* Left Side Content - ડાર્ક ભાગ સાથે પ્રોપર સેટ કરવા માટે 7 કોલમ (60%) આપ્યા છે */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 bg-[#00aeee]/10 border border-[#00aeee]/20 rounded-full px-4 py-1.5 shadow-sm mx-auto lg:mx-0">
              <ShieldCheck className="w-4 h-4 text-[#00aeee] shrink-0" />
              <span className="text-[#00aeee] text-xs font-bold tracking-wider uppercase">
                SEBI Registered Investment Partner
              </span>
            </div>

            {/* Main Trust Typography */}
            <div className="space-y-4 w-full">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.15]">
                Backed by Trust. <br />
                <span className="relative inline-block bg-gradient-to-r from-[#00aeee] to-[#008cc3] bg-clip-text text-transparent font-bold">
                  Driven by Performance.
                </span>
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
                <Users className="w-6 h-6 text-[#00aeee] shrink-0" />
                <p className="text-xl sm:text-3xl font-sans font-extrabold text-white">
                  25,000+ Investors Trust Us
                </p>
              </div>
            </div>

            {/* Exchange Memberships Layout */}
            <div className="space-y-3 bg-white/[0.03] border border-white/5 rounded-2xl p-5 w-full max-w-2xl mx-auto lg:mx-0">
              <p className="text-white text-xs font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
                <Landmark className="w-3.5 h-3.5 text-[#00aeee]" /> Institutional Memberships
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-base sm:text-lg font-bold text-white">
                <span className="hover:text-[#00aeee] transition-colors">NSE</span>
                <span className="text-white/40 hidden sm:inline">·</span>
                <span className="hover:text-[#00aeee] transition-colors">BSE</span>
                <span className="text-white/40 hidden sm:inline">·</span>
                <span className="hover:text-[#00aeee] transition-colors">NSDL</span>
                <span className="text-white/40 hidden sm:inline">·</span>
                <span className="hover:text-[#00aeee] transition-colors">MCX</span>
                <span className="text-white/40 hidden sm:inline">·</span>
                <span className="hover:text-[#00aeee] transition-colors">NCDEX</span>
              </div>
            </div>

            {/* Buttons Setup */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full max-w-xl mx-auto lg:mx-0">
              <a 
                href="https://smartkyc.co.in/d/ratnakar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-sm font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 sm:w-auto"
              >
                <span>Open Demat Account</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link 
                href="/products" 
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/10 text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 sm:w-auto"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>

          {/* Right side is intentionally empty in grid to let background image shine through (40% space) */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>

        {/* ── SLIDER DOTS INDICATORS ── */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <button 
            onClick={() => setCurrentSlide(0)}
            aria-label="Go to Slide 1"
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              currentSlide === 0 ? "w-8 bg-[#00aeee] drop-shadow-[0_0_4px_#00aeee]" : "w-2.5 bg-white/30 hover:bg-white/50"
            )}
          />
          <button 
            onClick={() => setCurrentSlide(1)}
            aria-label="Go to Slide 2"
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              currentSlide === 1 ? "w-8 bg-[#00aeee] drop-shadow-[0_0_4px_#00aeee]" : "w-2.5 bg-white/30 hover:bg-white/50"
            )}
          />
        </div>

      </Container>
    </section>
  );
}