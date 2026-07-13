"use client";
import React from "react";
import Container from "@/components/common/Container";
import { UserPlus, Handshake, PieChart, LineChart } from "lucide-react";

const steps = [
  {
    Icon: UserPlus,
    title: "Open Your Account",
    desc: "Paperless KYC in minutes. Demat + trading account with NSDL, at zero opening cost.",
    iconColor: "text-[#00aeee]",
    badgeColor: "bg-[#ea2830]",
    bgColor: "bg-[#00aeee]/10"
  },
  {
    Icon: Handshake,
    title: "Meet Your Advisor",
    desc: "A dedicated relationship manager understands your goals, income and risk appetite.",
    iconColor: "text-[#ea2830]",
    badgeColor: "bg-[#00aeee]",
    bgColor: "bg-[#ea2830]/10"
  },
  {
    Icon: PieChart,
    title: "Build Your Portfolio",
    desc: "Invest across equity, funds, commodities and bonds — matched to your plan, not the market noise.",
    iconColor: "text-[#00aeee]",
    badgeColor: "bg-[#ea2830]",
    bgColor: "bg-[#00aeee]/10"
  },
  {
    Icon: LineChart,
    title: "Track & Grow",
    desc: "Monitor everything on our app, review quarterly with your RM, and stay the course. Rest assured.",
    iconColor: "text-[#ea2830]",
    badgeColor: "bg-[#00aeee]",
    bgColor: "bg-[#ea2830]/10"
  },
];

export default function InvestmentSteps() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="mb-16 text-center relative z-10">
          <div style={{ color: "#ea2830" }} className="text-[14px] font-black tracking-widest uppercase mb-3">
            Your Investment Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900 leading-tight">
            From first step to first crore 
            <span className="relative inline-block mt-1">
              we walk with you.
            </span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, idx) => {
            const IconComponent = step.Icon;
            return (
              <div key={idx} className="text-center px-4 group flex flex-col items-center">
                
                {/* આઈકોન બોક્સ સાઈઝ નાની કરી (w-16 h-16) */}
                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center relative border border-slate-100 shadow-sm transition-all duration-500 group-hover:scale-110 ${step.bgColor}`}>
                  <IconComponent className={`w-7 h-7 ${step.iconColor} transition-transform duration-500 group-hover:scale-110`} strokeWidth={1.8} />
                  
                  {/* નાનો ડોટ */}
                  <span className={`absolute top-0 right-0 w-3 h-3 rounded-full ${step.badgeColor} border-2 border-white shadow-sm`} />
                </div>

                {/* હેડિંગ */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#00aeee] transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* ડિસ્ક્રિપ્શન */}
                <p className="text-[16px] text-slate-500 leading-relaxed font-medium max-w-[240px]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}