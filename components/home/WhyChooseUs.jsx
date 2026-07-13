"use client";
import React from "react";
import Container from "@/components/common/Container";
import { Users, Search, ShieldCheck, Home, Globe } from "lucide-react";

const REASONS = [
  {
    Icon: Users,
    title: "A Real Person, Not Just an App",
    desc: "Every client gets a dedicated relationship manager — one call away for advice, execution and reviews.",
  },
  {
    Icon: Search,
    title: "Research You Can Act On",
    desc: "In‑house company research, IPO notes and market insights — so your decisions are informed, not impulsive.",
  },
  {
    Icon: ShieldCheck,
    title: "Fully Regulated & Transparent",
    desc: "SEBI registered; member of NSE, BSE, NSDL, MCX and NCDEX. Your investments sit safely in your own demat.",
  },
  {
    Icon: Home,
    title: "Everything Under One Roof",
    desc: "Stocks, funds, commodities, bonds, insurance, PMS and real estate — one relationship covers it all.",
  },
  {
    Icon: Globe,
    title: "Specialist NRI & HNI Desks",
    desc: "Dedicated teams for non‑resident and high‑net‑worth investors, with tailored compliance and reporting.",
  },
];

export default function WhyChooseUs() {
  return (
    <section 
      className="relative overflow-hidden py-16"
      style={{ 
        background: "radial-gradient(1200px 600px at 85% -10%, #1a6eb5 0%, #012e54 45%, #011628 100%)",
        color: "#fff"
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
            <div 
              style={{ color: "#00aeee" }} 
              className="text-[14px] font-black tracking-widest uppercase"
            >
              Why Choose Ratnakar Securities
            </div>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-[1.15] text-white">
              Relationships first.<br />
              <span className="relative inline-block mt-1">
                Returns follow.
              </span>
            </h2>
            <p className="text-[16px] leading-relaxed text-slate-300 font-medium">
              For 25 years, families across Gujarat and beyond have trusted us with their savings — because we treat every rupee like our own.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REASONS.map((r, idx) => {
              const IconComponent = r.Icon;
              return (
                <div 
                  key={r.title} 
                  className={`flex gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl group transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 ${
                    idx === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105" 
                    style={{ background: "linear-gradient(135deg, #ea2830, #c41f26)" }}
                  >
                    <IconComponent className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white group-hover:text-[#00aeee] transition-colors duration-300">
                      {r.title}
                    </h3>
                    <p className="text-[14px] text-slate-400 leading-relaxed font-medium">
                      {r.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}