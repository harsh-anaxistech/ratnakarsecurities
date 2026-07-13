"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/common/Container";
import { MonitorPlay, Smartphone, ArrowRight, ShieldCheck, Users, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 2 Slide ઓટો રોટેશન સેટઅપ
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
      // py-16 વડે મોબાઈલમાં ટોપ/બોટમ સ્પેસિંગ સેટ કર્યું છે અને ડેસ્કટોપ પર બેલેન્સ રાખ્યું છે
      className="relative overflow-hidden w-full transition-all duration-500 min-h-[600px] flex items-center py-12 lg:py-12"
      aria-label="Online Trading Hero Dashboard"
    >
      {/* સોફ્ટ બેકગ્રાઉન્ડ એનિમેટેડ ગ્લો ઇફેક્ટ્સ */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#1a6eb5]/10 to-transparent opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#00aeee]/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[6000ms]" />
      
      <Container className="relative z-10 w-full">
        
        {/* ── SLIDE 1: POWERFUL TRADING PLATFORM ── */}
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center transition-all duration-700 ease-in-out",
          currentSlide === 0 ? "opacity-100 translate-x-0 relative" : "opacity-0 absolute pointer-events-none -translate-x-10 invisible"
        )}>
          {/* Left Side Content - મોબાઈલમાં સેન્ટર અને ડેસ્કટોપમાં લેફ્ટ */}
          <div className="lg:col-span-6 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tagline Live Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 shadow-sm mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00aeee] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00aeee]"></span>
              </span>
              <span className="text-white text-xs font-bold tracking-wider">
                Boost your income today!
              </span>
            </div>

            {/* Typography Stack */}
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

            {/* કન્ટેન્ટ બ્લર્બ */}
            <p className="text-white/80 text-base sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              Start investing in equities, derivatives, mutual funds, currency, and more through our next-gen Trading Account and high-performance mobile apps.
            </p>

            {/* એક્શન બટન્સ - મોબાઈલમાં ફૂલ-વિડ્થ સેન્ટર સ્ટાઈલ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full max-w-xl mx-auto lg:mx-0">
              {/* AERO Web Link */}
              <a 
                href="http://trading.ratnakarsecurities.com/AERO/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-sm font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-sky-900/20 transition-all duration-300 transform hover:-translate-y-0.5 sm:w-auto"
              >
                <span>Invest Now</span>
              </a>

              {/* Mobile App Link */}
              <a 
                href="http://dnld.mobile.nowonline.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-bold py-3.5 px-5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 sm:w-auto"
              >
                <span>Explore Our Products</span>
              </a>
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


        {/* ── SLIDE 2: TRUST, SEBI & MEMBERSHIPS ── */}
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center transition-all duration-700 ease-in-out",
          currentSlide === 1 ? "opacity-100 translate-x-0 relative" : "opacity-0 absolute pointer-events-none translate-x-10 invisible"
        )}>
          {/* Left Side Content - મોબાઈલમાં સેન્ટર */}
          <div className="lg:col-span-7 space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Trust Indicator Badge */}
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
                <p className="text-1xl sm:text-3xl font-sans font-extrabold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  25,000+ Investors Trust Us
                </p>
              </div>
            </div>

            {/* Exchange Memberships Layout */}
            <div className="space-y-3 bg-white/[0.03] border border-white/5 rounded-2xl p-5 w-full max-w-2xl mx-auto lg:mx-0">
              <p className="text-white/50 text-xs font-bold tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
                <Landmark className="w-3.5 h-3.5" /> Institutional Memberships
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-base sm:text-lg font-bold text-white/90">
                <span className="hover:text-[#00aeee] transition-colors">NSE</span>
                <span className="text-white/20 hidden sm:inline">·</span>
                <span className="hover:text-[#00aeee] transition-colors">BSE</span>
                <span className="text-white/20 hidden sm:inline">·</span>
                <span className="hover:text-[#00aeee] transition-colors">NSDL</span>
                <span className="text-white/20 hidden sm:inline">·</span>
                <span className="hover:text-[#00aeee] transition-colors">MCX</span>
                <span className="text-white/20 hidden sm:inline">·</span>
                <span className="hover:text-[#00aeee] transition-colors">NCDEX</span>
              </div>
            </div>

            {/* Buttons Setup */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full max-w-xl mx-auto lg:mx-0">
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2.5 bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-sm font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 sm:w-auto"
              >
                <span>Open Demat Account</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link 
                href="/products" 
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/10 text-sm font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 sm:w-auto"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>

          {/* Right Side Visual Grid (Stats / Safe Assets) */}
          <div className="lg:col-span-5 w-full mt-4 lg:mt-0 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-sm shadow-md text-center lg:text-left">
                <h4 className="text-3xl font-extrabold text-[#00aeee]">25+</h4>
                <p className="text-white/70 text-sm sm:text-base mt-1 font-medium leading-relaxed">Years of Financial Legacy across Gujarat & India</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-sm shadow-md text-center lg:text-left">
                <h4 className="text-3xl font-extrabold text-emerald-400">100%</h4>
                <p className="text-white/70 text-sm sm:text-base mt-1 font-medium leading-relaxed">Secure & Compliant Paperless KYC Onboarding</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-sm shadow-md col-span-2 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white/90">Regulated Ecosystem</h4>
                    <p className="text-white/50 text-sm sm:text-base mt-0.5 leading-relaxed">Strict Adherence to Exchange Standard Frameworks</p>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-[#00aeee] drop-shadow-[0_0_6px_rgba(0,174,238,0.4)] shrink-0" />
                </div>
              </div>
            </div>
          </div>
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
      
      {/* Chart SVG Animation Styles */}
      <style jsx global>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}