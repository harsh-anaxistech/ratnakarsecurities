"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/common/Container";
import { ArrowRight, TrendingUp, BarChart3, PiggyBank, Wallet, UserCheck } from "lucide-react";

export default function HeroBanner() {
  return (
    <section
      style={{
        background: "radial-gradient(1400px 700px at 85% 20%, #1a6eb5 0%, #012e54 50%, #011628 100%)",
        color: "#fff"
      }}
      /* Minimum height lg:min-h-[640px] so rounds are not cut */
      className="relative overflow-hidden w-full min-h-[550px] lg:min-h-[660px] flex items-center pt-8 sm:pt-12 lg:py-0"
      aria-label="Maximize Your Wealth Hero Section"
    >
      {/* ── CUSTOM FLOATING ANIMATIONS STYLE ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes gentleDrift1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-6px) translateX(2px); }
        }
        @keyframes gentleDrift2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(5px) translateX(-3px); }
        }
        @keyframes gentleDrift3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-4px) translateX(-3px); }
        }
        .float-anim-1 { animation: gentleDrift1 5s ease-in-out infinite; }
        .float-anim-2 { animation: gentleDrift2 6s ease-in-out infinite; }
        .float-anim-3 { animation: gentleDrift3 5.5s ease-in-out infinite; }
      `}} />

      {/* ── BACKGROUND AMBIENT GLOW ── */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[500px] h-[500px] bg-[#00aeee]/10 rounded-full blur-[140px] animate-pulse duration-[8000ms] pointer-events-none z-0 hidden lg:block" />

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 items-center">

          {/* ── LEFT COLUMN: TYPOGRAPHY, BUTTONS & MARKET ENTITIES ── */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left pt-4 sm:py-6">

            <div className="space-y-2 sm:space-y-3 w-full">
              <span className="text-[#00aeee] text-[14px] font-bold tracking-wider uppercase block">
                Maximize Your Wealth.
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif text-white tracking-tight leading-[1.15]">
                Trade Smarter. <br />
                <span className="bg-gradient-to-r from-[#00aeee] to-[#008cc3] bg-clip-text text-transparent">
                  Invest Better.
                </span>
              </h1>
            </div>

            <p className="text-white/80 text-sm sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              Your pathway to prosperity where we navigate the realms of Equity, Mutual Funds, IPOs, and more. Trust in us for a journey of smart investments and financial growth.
            </p>

            {/* 🎯 BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full max-w-md mx-auto lg:mx-0 pt-1">
              <a
                href="https://smartkyc.co.in/d/ratnakar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Invest Now - Open a Demat and Trading Account with Ratnakar"
                className="flex items-center justify-center gap-2.5 bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-xs sm:text-sm font-bold py-3 px-5 sm:py-3.5 sm:px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 sm:w-auto text-center focus:ring-2 focus:ring-white"
              >
                <span>Invest Now</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <Link
                href="/products"
                aria-label="Explore Our Products - View Equity, Mutual Funds, and Bonds"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold py-3 px-5 sm:py-3.5 sm:px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 sm:w-auto text-center focus:ring-2 focus:ring-white"
              >
                <span>Explore Our Products</span>
              </Link>
            </div>
            {/* 🏛️ MARKET & REGULATORY ENTITIES CONTENT */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-white/60 text-[12px] sm:text-sm font-bold tracking-widest uppercase">
              <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">NSE</a>
              <span className="text-[#00aeee]/50">|</span>

              <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">BSE</a>
              <span className="text-[#00aeee]/50">|</span>

              <a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">SEBI</a>
              <span className="text-[#00aeee]/50">|</span>

              <a href="https://nsdl.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">NSDL</a>
              <span className="text-[#00aeee]/50">|</span>

              <a href="https://www.mcxindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">MCX</a>
              <span className="text-[#00aeee]/50">|</span>

              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">SCORES</a>
            </div>
          </div>

          {/* ── RIGHT COLUMN: HERO IMAGE & BACKGROUND CIRCLES ── */}
          {/* Shifted circles down slightly using lg:translate-y-[20px] and added items-end */}
          <div className="lg:col-span-6 w-full relative h-[460px] sm:h-[620px] lg:h-[620px] flex items-end justify-center mt-0 sm:mt-6 lg:mt-0">

            {/* ── CONCENTRIC DOT-LINE CIRCLES ── */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 transform translate-x-0 sm:translate-x-[-30px] lg:translate-x-[-30px] lg:translate-y-[20px]">
              <div className="w-[340px] h-[340px] sm:w-[600px] sm:h-[600px] lg:w-[660px] lg:h-[660px] opacity-25 text-white animate-spin" style={{ animationDuration: "90s" }}>
                <svg className="w-full h-full" viewBox="0 0 800 800" fill="none">
                  <circle cx="400" cy="400" r="160" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
                  <circle cx="400" cy="400" r="260" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                  <circle cx="400" cy="400" r="360" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
                </svg>
              </div>
            </div>

            {/* 📸 Grounded Phone/Hand Mockup (Removed gap, shifted left and scaled slightly) */}
            {/* Added `items-end` to div, and ensure `lg:translate-x-[-40px] scale-[1.05]` matches the visual grounding. */}
            <div className="relative w-[230px] h-[460px] sm:w-[420px] sm:h-[640px] lg:w-[420px] lg:h-[620px] z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)] transform translate-x-0 sm:translate-x-[-50px] lg:translate-x-[-40px] scale-[1.05] hover:scale-[1.06] transition-all duration-500 flex items-end">
              <Image
                src="/images/about/2444.png"
                alt="Portfolio Mobile App Dashboard"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* ── FLOATING GLASSMORPHIC BADGES ── */}

            {/* 1. Equity (Top Left) */}
            <div className="absolute top-[10%] left-[0%] sm:left-[8%] lg:left-[10%] z-20 float-anim-1 scale-[0.90] sm:scale-100 origin-left">
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-2 sm:p-2.5 shadow-xl hover:bg-white/15 hover:border-[#00aeee]/40 transition-all duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00aeee]/20 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00aeee]" />
                </div>
                <span className="text-[13px] sm:text-sm font-bold tracking-wide pr-1">Equity</span>
              </div>
            </div>

            {/* 2. Stock Trading (Middle Left) */}
            <div className="absolute top-[34%] left-[-4%] sm:left-[0%] lg:left-[3%] z-20 float-anim-2 scale-[0.90] sm:scale-100 origin-left">
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 shadow-xl hover:bg-white/15 hover:border-[#00aeee]/40 transition-all duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00aeee]" />
                </div>
                <span className="text-[13px] sm:text-sm font-bold tracking-wide pr-1 leading-tight">Stock<br />Trading</span>
              </div>
            </div>

            {/* 3. Mutual Fund Distribution (Bottom Left) */}
            <div className="absolute bottom-[10%] left-[-4%] sm:left-[2%] lg:left-[5%] z-20 float-anim-3 scale-[0.90] sm:scale-100 origin-left">
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 shadow-xl hover:bg-white/15 hover:border-[#00aeee]/40 transition-all duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00aeee]/20 rounded-lg flex items-center justify-center shrink-0">
                  <PiggyBank className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00aeee]" />
                </div>
                <span className="text-[13px] sm:text-sm font-bold tracking-wide pr-1 leading-tight">Mutual Fund<br />Distribution</span>
              </div>
            </div>

            {/* 4. Wealth Management (Top Right) */}
            <div className="absolute top-[18%] right-[-4%] sm:right-[10%] lg:right-[3%] z-20 float-anim-2 scale-[0.90] sm:scale-100 origin-right">
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 shadow-xl hover:bg-white/15 hover:border-[#00aeee]/40 transition-all duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00aeee]" />
                </div>
                <span className="text-[13px] sm:text-sm font-bold tracking-wide pr-1 leading-tight">Wealth<br />Management</span>
              </div>
            </div>

            {/* 5. Investment Advisory (Bottom Right) */}
            <div className="absolute bottom-[20%] right-[-6%] sm:right-[6%] lg:right-[10%] z-20 float-anim-1 scale-[0.90] sm:scale-100 origin-right">
              <div className="flex items-center gap-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-2.5 sm:p-3 shadow-xl hover:bg-white/15 hover:border-[#00aeee]/40 transition-all duration-300">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#00aeee]/20 rounded-lg flex items-center justify-center shrink-0">
                  <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00aeee]" />
                </div>
                <span className="text-[13px] sm:text-sm font-bold tracking-wide pr-1 leading-tight">Investment<br />Advisory</span>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
