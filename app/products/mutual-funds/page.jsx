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
import ProductSidebar from "@/components/common/ProductSidebar";
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
    <div className="bg-[#f7f9fc] min-h-screen pb-12">
      {/* Top Banner Section */}
      <HeroSection
        title={product.title}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.title }
        ]}
        image="/images/about/Mutual Funds.jpg"
        mobileImage="/images/about/mobile banner/mutual fund mobile.jpg"
        height="h-[300px] md:h-[400px]"
        imageClassName="object-top"
      />

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE: MAIN CONTENT */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-5 md:p-10">

            {/* 1. Header & Intro */}
            <div className="mb-10 pb-8 border-b border-black/5">
              <span
                className="inline-block px-3 py-1 bg-[#fee2e2] text-[#7f1d1d] font-bold text-xs tracking-widest rounded-full uppercase mb-4"
                style={{ backgroundColor: "#fee2e2", color: "#7f1d1d" }}
              >
                {product.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight mb-6">
                Why Choose Mutual Funds?
              </h2>
              <p className="text-[16px] leading-relaxed mb-4 text-[#1e293b]">
                Mutual Funds are one of the most convenient investment options for individuals looking to build long-term wealth. They allow investors to participate in professionally managed portfolios across equities, debt securities, hybrid assets, and money market instruments. Whether you are a first-time investor or an experienced market participant, mutual funds provide an investment solution tailored to your financial goals and risk appetite.
              </p>
              <p className="text-[16px] leading-relaxed text-[#1e293b] font-medium">
                Our experienced advisors help you identify the right investment strategy based on your financial objectives, investment horizon, and risk profile.
              </p>
            </div>

            {/* 2. Benefits Section */}
            <div className="mb-12">
              <h3 className="text-[18px] font-bold text-slate-900 mb-6">Benefits of Investing in Mutual Funds</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-3 bg-[#f8fafc] p-4 rounded-xl border border-black/5 hover:border-[#a7181e]/30 transition-all cursor-default"
                    style={{ backgroundColor: "#f8fafc" }}
                  >
                    <CircleCheck className="w-5 h-5 text-[#a7181e] shrink-0 mt-0.5 transition-all duration-300 group-hover:fill-[#a7181e] group-hover:text-white" />
                    <span
                      className="text-[16px] text-slate-800 leading-relaxed group-hover:text-black transition-colors"
                      style={{ color: "#1e293b" }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Why Invest with Ratnakar Securities */}
              <div 
                className="bg-[#012e54] p-8 rounded-2xl shadow-lg border border-black/5 text-white"
                style={{
                  backgroundColor: "#012e54",
                  backgroundImage: "linear-gradient(to bottom right, #006da0, #012e54)",
                  color: "#ffffff"
                }}
              >
                <h3 className="text-[18px] font-bold mb-6 text-white">Why Invest with Ratnakar Securities?</h3>
                <ul className="space-y-4">
                  {whyInvest.map((item, idx) => (
                    <li key={idx} className="group flex items-start gap-3 cursor-default">
                      <CircleCheck className="w-5 h-5 text-white shrink-0 mt-0.5" />
                      <span className="text-[16px] text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Should Invest */}
              <div 
                className="bg-[#012e54] p-8 rounded-2xl shadow-lg border border-black/5 text-white"
                style={{
                  backgroundColor: "#012e54",
                  backgroundImage: "linear-gradient(to bottom right, #006da0, #012e54)",
                  color: "#ffffff"
                }}
              >
                <h3 className="text-[18px] font-bold mb-6 text-white">Who Should Invest?</h3>
                <ul className="space-y-4">
                  {whoShouldInvest.map((item, idx) => (
                    <li key={idx} className="group flex items-start gap-3 cursor-default">
                      <CircleCheck className="w-5 h-5 text-white shrink-0 mt-0.5" />
                      <span className="text-[16px] text-white">{item}</span>
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
                    <span
                      key={idx}
                      className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-full text-[16px] font-medium shadow-sm hover:border-[#a7181e]/50 hover:text-[#a7181e] transition-colors cursor-default"
                      style={{ backgroundColor: "#ffffff", color: "#1e293b" }}
                    >
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
                      <div
                        className="w-8 h-8 rounded-full bg-[#a7181e] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: "#a7181e", color: "#ffffff" }}
                      >
                        {idx + 1}
                      </div>
                      <span
                        className="text-[16px] font-medium text-slate-800 group-hover:text-[#a7181e] transition-colors"
                        style={{ color: "#1e293b" }}
                      >
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. FAQs Section with Accordion */}
            <div className="mb-10">
              <h3 className="text-[18px] font-bold text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#a7181e]" />
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-black/5 bg-[#f8fafc] overflow-hidden"
                    style={{ backgroundColor: "#f8fafc" }}
                  >
                    <button
                      type="button"
                      id={`mf-faq-btn-${idx}`}
                      aria-expanded={openIndex === idx}
                      aria-controls={`mf-faq-panel-${idx}`}
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-3 font-bold text-slate-900 text-[15px] md:text-[17px] bg-[#f8fafc] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e]"
                      style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
                    >
                      <span className="flex-1 min-w-0" style={{ color: "#0f172a" }}>{faq.q}</span>
                      <span
                        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#fee2e2]"
                        style={{ backgroundColor: "rgba(167, 24, 30, 0.1)" }}
                      >
                        {openIndex === idx ? (
                          <Minus className="w-4 h-4 text-[#a7181e]" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#a7181e]" />
                        )}
                      </span>
                    </button>
                    {openIndex === idx && (
                      <div
                        id={`mf-faq-panel-${idx}`}
                        role="region"
                        aria-labelledby={`mf-faq-btn-${idx}`}
                        className="px-5 pb-5 pt-0 text-slate-700 text-[16px] leading-relaxed bg-[#f8fafc]"
                        style={{ backgroundColor: "#f8fafc", color: "#334155" }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Disclaimer */}
            <div
              className="mb-8 p-4 bg-[#fffcf7] border border-amber-200 rounded-xl flex gap-3 items-start"
              style={{ backgroundColor: "#fffcf7" }}
            >
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
                <strong className="text-slate-900">Disclaimer:</strong> Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
              </p>
            </div>

            {/* 8. CTA Button */}
            <div className="pt-6 md:pt-8 border-t border-black/5">
              <Link
                href="/contact"
                className="w-full md:w-auto inline-flex bg-[#a7181e] hover:bg-[#8e1419] text-white font-bold text-[15px] md:text-[16px] py-3.5 md:py-4 px-6 md:px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e] focus-visible:ring-offset-2"
                style={{ backgroundColor: "#a7181e", color: "#ffffff" }}
              >
                Start Your Investment Journey
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE: ALL PRODUCTS SIDEBAR */}
          <ProductSidebar currentSlug={slug} />

        </div>
      </Container>
    </div>
  );
}