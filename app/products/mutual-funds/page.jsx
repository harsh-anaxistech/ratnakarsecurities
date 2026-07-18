"use client"; // Required for interactivity

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  CircleCheck,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  PieChart,
  Target,
  HelpCircle,
  AlertCircle,
  Plus,
  Minus
} from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { PRODUCTS_DATA } from "../data";

export default function ProductDetailsPage() {
  const slug = "mutual-funds";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  // State for FAQ accordion
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!product) {
    notFound();
  }

  // --- Content Data ---
  const benefits = [
    "Professionally managed by experienced fund managers.",
    "Diversification across multiple asset classes to reduce investment risk.",
    "Start investing with a small amount through SIP.",
    "Flexible investment options through SIP and Lump Sum.",
    "High liquidity with easy redemption in most open-ended schemes.",
    "Transparent portfolio disclosures and regular performance updates.",
    "Suitable for both short-term and long-term financial goals.",
    "Tax-saving opportunities through ELSS Mutual Funds under Section 80C."
  ];

  const whyInvest = [
    "Personalized investment advisory.",
    "Research-backed fund recommendations.",
    "Easy online investment process.",
    "Dedicated relationship managers.",
    "Regular portfolio review and rebalancing."
  ];

  const whoShouldInvest = [
    "Salaried professionals",
    "Business owners",
    "First-time investors",
    "Retired individuals",
    "Parents planning children's education",
    "Investors planning for retirement",
    "Wealth creation and long-term financial planning"
  ];

  const investmentOptions = [
    "SIP (Systematic Investment Plan)",
    "One-Time Lump Sum Investment",
    "Goal-Based Investing",
    "Child Education Planning",
    "Retirement Planning",
    "Wealth Creation",
    "Tax Saving Investments (ELSS)"
  ];

  const steps = [
    "Complete your KYC.",
    "Choose your investment goal.",
    "Select suitable mutual fund schemes.",
    "Start SIP or make a lump sum investment.",
    "Track and review your portfolio regularly."
  ];

  const faqs = [
    { q: "What is a Mutual Fund?", a: "A Mutual Fund pools money from multiple investors and invests it in a diversified portfolio managed by professional fund managers." },
    { q: "What is SIP?", a: "A Systematic Investment Plan (SIP) allows investors to invest a fixed amount at regular intervals, helping build wealth through disciplined investing." },
    { q: "Can I withdraw my investment anytime?", a: "Most open-ended mutual funds allow redemption at any time, subject to applicable exit loads and fund rules." },
    { q: "Are Mutual Funds safe?", a: "Mutual Funds are regulated by SEBI and managed by professional fund houses. However, returns are subject to market risks." },
    { q: "How much can I start with?", a: "You can start investing through SIPs with amounts as low as ₹500 per month in many schemes." }
  ];

  return (
    <main className="bg-[#f7f9fc] min-h-screen pb-12">
      {/* Top Banner Section */}
     <HeroSection
    title={product.title}
    breadcrumbs={[
      { label: "Products", href: "/products" },
      { label: product.title }
    ]}
    image="/images/about/615 (1).jpg"
    height="h-[300px] md:h-[400px]"
    imageClassName="object-top" // તમારા કમ્પોનન્ટ મુજબ જે પ્રોપ હોય તે વાપરો (દા.ત. className="object-top")
/>

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE: MAIN CONTENT */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-5 md:p-10">

            {/* 1. Header & Intro */}
            <div className="mb-10 pb-8 border-b border-black/5">
              <span className="inline-block px-3 py-1 bg-[#ea2830]/10 text-[#ea2830] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                Wealth Creation
              </span>
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight mb-6">
                Why Choose Mutual Funds?
              </h1>
              <p className="text-[16px] leading-relaxed mb-4 text-[#314158]">
                Mutual Funds are one of the most convenient investment options for individuals looking to build long-term wealth. They allow investors to participate in professionally managed portfolios across equities, debt securities, hybrid assets, and money market instruments. Whether you are a first-time investor or an experienced market participant, mutual funds provide an investment solution tailored to your financial goals and risk appetite.
              </p>
              <p className="text-[16px] leading-relaxed text-[#314158] font-medium">
                Our experienced advisors help you identify the right investment strategy based on your financial objectives, investment horizon, and risk profile.
              </p>
            </div>

            {/* 2. Benefits Section */}
            <div className="mb-12">
              <h3 className="text-[18px] font-bold text-slate-900 mb-6">Benefits of Investing in Mutual Funds</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="group flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-black/5 hover:border-[#ea2830]/30 transition-all cursor-default">
                    <CircleCheck className="w-5 h-5 text-[#ea2830] shrink-0 mt-0.5 transition-all duration-300 group-hover:fill-[#ea2830] group-hover:text-white" />
                    <span className="text-[16px] text-[#314158] leading-relaxed group-hover:text-black transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Why Invest with Ratnakar Securities */}
              <div className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] p-8 rounded-2xl shadow-lg border border-black/5 text-white">
                <h3 className="text-[18px] font-bold mb-6">Why Invest with Ratnakar Securities?</h3>
                <ul className="space-y-4">
                  {whyInvest.map((item, idx) => (
                    <li key={idx} className="group flex items-start gap-3 cursor-default">
                      <CircleCheck className="w-5 h-5 text-white/80 shrink-0 mt-0.5 group-hover:text-white" />
                      <span className="text-[16px] text-white/90 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Should Invest */}
              <div className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] p-8 rounded-2xl shadow-lg border border-black/5 text-white">
                <h3 className="text-[18px] font-bold mb-6">Who Should Invest?</h3>
                <ul className="space-y-4">
                  {whoShouldInvest.map((item, idx) => (
                    <li key={idx} className="group flex items-start gap-3 cursor-default">
                      <CircleCheck className="w-5 h-5 text-white/80 shrink-0 mt-0.5 group-hover:text-white" />
                      <span className="text-[16px] text-white/90 group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. Investment Options & How to Start */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-[18px] font-bold text-slate-900 mb-6">Investment Options</h3>
                <div className="flex flex-wrap gap-2">
                  {investmentOptions.map((opt, idx) => (
                    <span key={idx} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-[16px] font-medium shadow-sm hover:border-[#ea2830]/50 hover:text-[#ea2830] transition-colors cursor-default">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[18px] font-bold text-slate-900 mb-6">How to Start Investing?</h3>
                <div className="space-y-4">
                  {steps.map((step, idx) => (
                    <div key={idx} className="group flex items-center gap-4 cursor-default">
                      <div className="w-8 h-8 rounded-full bg-[#ea2830] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        {idx + 1}
                      </div>
                      <span className="text-[16px] font-medium text-[#314158] group-hover:text-[#ea2830] transition-colors">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. FAQs Section with Accordion */}
            <div className="mb-10">
              <h3 className="text-[18px] font-bold text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#ea2830]" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="rounded-xl border border-black/5 bg-slate-50 overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 text-[18px] hover:bg-slate-100 transition-colors"
                    >
                      {faq.q}
                      {openIndex === idx ? <Minus className="w-5 h-5 text-[#ea2830]" /> : <Plus className="w-5 h-5 text-[#ea2830]" />}
                    </button>
                    {openIndex === idx && (
                      <div className="px-5 pb-5 pt-0 text-slate-600 text-[16px] leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Disclaimer */}
            <div className="mb-8 p-4 bg-orange-50/50 border border-orange-100 rounded-xl flex gap-3 items-start">
              <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
              <p className="text-[16px] text-slate-500 leading-relaxed">
                <strong>Disclaimer:</strong> Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
              </p>
            </div>

            {/* 8. CTA Button */}
            <div className="pt-8 border-t border-black/5">
              <Link href="/contact">
                <Button
                  variant="contained"
                  className="bg-[#ea2830] hover:bg-[#c41f26] text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 group w-full md:w-auto"
                >
                  Start Your Investment Journey
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE: ALL PRODUCTS SIDEBAR */}
          <aside className="w-full lg:w-[30%] space-y-8">
            <div className="rounded-2xl shadow-lg p-6 sticky top-[100px]" style={{ background: "linear-gradient(180deg, #2a689b 0%, #1e4b75 100%)", color: "rgb(255, 255, 255)" }}>
              <h3 className="text-xl font-bold font-serif text-white mb-6 pb-4 border-b border-white/20 uppercase tracking-wide">
                Investment Options
              </h3>
              <ul className="space-y-3">
                {PRODUCTS_DATA.map((item) => {
                  const isActive = item.slug === slug;
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/products/${item.slug}`}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group font-bold text-[16px] ${isActive
                          ? "bg-white text-[#ea2830] border-l-[3px] border-[#ea2830] shadow-md"
                          : "bg-white/10 text-white border-l-[3px] border-transparent hover:bg-white hover:text-[#ea2830]"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          {item.iconPath && <img src={item.iconPath} alt={item.title} className="w-5 h-5" />}
                          <span>{item.title}</span>
                        </div>
                        <ChevronRight className={`w-5 h-5 transform transition-transform ${isActive ? "text-[#ea2830] translate-x-1" : "text-white/60 group-hover:translate-x-1 group-hover:text-[#ea2830]"
                          }`} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

        </div>
      </Container>
    </main>
  );
}