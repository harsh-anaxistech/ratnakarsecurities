"use client"; // Add this at the very top of your file for client-side interactivity

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, ArrowRight, HelpCircle, AlertCircle, Plus, Minus } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import ProductSidebar from "@/components/common/ProductSidebar";
import { PRODUCTS_DATA } from "../data";

export default function ProductDetailsPage() {
  const slug = "equity";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  // State for FAQ accordion
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-12">
      <HeroSection
        title={product.title}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.title }
        ]}
        image="/images/about/Equities.jpg"
        mobileImage="/images/about/mobile banner/equity mobile.jpg"
        height="h-[300px] md:h-[400px]"
        imageClassName="object-top"
        imagePosition="object-right sm:object-center"
      />

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE: MAIN CONTENT */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-4 md:p-8">
            <div className="mb-8 pb-6 border-b border-black/5">
              <span 
                className="inline-block px-3 py-1 font-bold text-xs tracking-widest rounded-full uppercase mb-4"
                style={{ backgroundColor: "#fee2e2", color: "#7f1d1d" }}
              >
                {product.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900 leading-tight" style={{ color: "#0f172a" }}>
                {product.mainTitle}
              </h2>
            </div>

            <div className="max-w-none mb-12">
              <p className="text-[16px] leading-relaxed mb-6 text-slate-700" style={{ color: "#334155" }}>{product.description1}</p>
              {product.description2.split('\n').map((line, i) => (
                <p key={i} className="text-[16px] leading-relaxed mb-5 text-slate-700" style={{ color: "#334155" }}>{line}</p>
              ))}

              <h3 className="text-[18px] font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>Understanding Equities</h3>
              <p className="text-[16px] leading-relaxed mb-6 text-slate-700" style={{ color: "#334155" }}>Equity investing allows individuals to become shareholders in publicly listed companies, giving them an opportunity to participate in the company's long-term growth and wealth creation. Whether you're a first-time investor or an experienced trader, equities provide the potential for capital appreciation, dividend income, and portfolio diversification.</p>

              <h3 className="text-[18px] font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>Equity Investment Solutions</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Cash Market Trading – Buy and sell shares of listed companies through a secure and reliable trading platform with real-time execution.",
                  "Equity SIP – Build wealth gradually by investing a fixed amount in selected stocks at regular intervals through Stock SIPs.",
                  "Long-Term Investing – Create a diversified portfolio of fundamentally strong companies for long-term capital appreciation.",
                  "Intraday Trading – Take advantage of short-term market movements with fast execution and live market tracking.",
                  "IPO Investments – Apply for Initial Public Offerings (IPOs) directly through our seamless online platform.",
                  "Portfolio Advisory – Receive personalized stock recommendations and portfolio management guidance based on your investment goals."
                ].map((item, i) => {
                  const [title, desc] = item.split(" – ");
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#a7181e] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-[16px] leading-relaxed" style={{ color: "#334155" }}>
                        <strong className="font-bold text-slate-900" style={{ color: "#0f172a" }}>{title}</strong> — {desc}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <h3 className="text-[18px] font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>Benefits of Investing in Equities</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "Opportunity for long-term wealth creation.",
                  "Potential to earn dividend income.",
                  "Ownership in leading listed companies.",
                  "High liquidity with easy buying and selling.",
                  "Diversification across various industries and sectors.",
                  "Inflation-beating return potential.",
                  "Transparent and regulated trading.",
                  "Access to real-time market information and research."
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 shadow-sm"
                    style={{ backgroundColor: "#f8fafc" }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#a7181e] shrink-0" aria-hidden="true" />
                    <span className="text-[16px]" style={{ color: "#334155" }}>{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-[18px] font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>Why Invest in Equities with Ratnakar Securities?</h3>
              <div 
                className="bg-[#012e54] p-8 rounded-2xl shadow-md text-white mb-8 border border-black/5"
                style={{
                  backgroundColor: "#012e54",
                  backgroundImage: "linear-gradient(to bottom right, #006da0, #012e54)",
                  color: "#ffffff"
                }}
              >
                <ul className="space-y-4">
                  {[
                    "Research-backed stock recommendations.",
                    "Advanced online trading platform.",
                    "Dedicated relationship managers.",
                    "Fast and secure order execution.",
                    "Personalized investment advisory."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" aria-hidden="true" />
                      <span className="text-[16px] text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section with Accordion Logic */}
              <h3 className="text-[18px] font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>Frequently Asked Questions (FAQs)</h3>
              <div className="space-y-4 mb-8">
                {[
                  { q: "What are Equities?", a: "Equities represent ownership in a company. When you purchase shares, you become a shareholder and may benefit from the company's growth and profitability." },
                  { q: "What is a Demat Account?", a: "A Demat Account holds your shares and securities electronically, making investing and trading convenient and secure." },
                  { q: "Can I start investing with a small amount?", a: "Yes. You can begin investing in equities with a small investment and gradually increase your portfolio over time." },
                  { q: "Is equity investing risky?", a: "Equity investments are subject to market fluctuations. However, long-term investing in fundamentally strong companies has historically helped investors create wealth." },
                  { q: "How do I choose the right stocks?", a: "Stock selection should be based on financial goals, risk appetite, company fundamentals, and market research. Ratnakar Securities provides research-backed recommendations to support informed investment decisions." }
                ].map((faq, i) => (
                  <div 
                    key={i} 
                    className="rounded-xl border border-slate-200 overflow-hidden shadow-sm"
                    style={{ backgroundColor: "#f8fafc" }}
                  >
                    <button
                      type="button"
                      id={`equity-faq-btn-${i}`}
                      aria-expanded={openIndex === i}
                      aria-controls={`equity-faq-panel-${i}`}
                      onClick={() => toggleFAQ(i)}
                      className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 font-bold text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e]"
                      style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
                    >
                      <span className="flex items-center gap-2 flex-1 min-w-0" style={{ color: "#0f172a" }}>
                        <HelpCircle className="w-5 h-5 text-[#a7181e] shrink-0" aria-hidden="true" />
                        {faq.q}
                      </span>
                      <span 
                        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: "#fee2e2" }}
                      >
                        {openIndex === i ? <Minus className="w-4 h-4 text-[#a7181e]" aria-hidden="true" /> : <Plus className="w-4 h-4 text-[#a7181e]" aria-hidden="true" />}
                      </span>
                    </button>
                    {openIndex === i && (
                      <div
                        id={`equity-faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`equity-faq-btn-${i}`}
                        className="px-6 pb-6 pt-0 text-[16px] leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200"
                        style={{ backgroundColor: "#f8fafc", color: "#334155" }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div 
                className="mb-8 p-4 border border-amber-200 rounded-xl flex gap-3 items-start shadow-sm"
                style={{ backgroundColor: "#fffcf7", color: "#334155" }}
              >
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[16px] leading-relaxed" style={{ color: "#334155" }}>
                  <strong className="font-bold text-slate-900" style={{ color: "#0f172a" }}>Disclaimer:</strong> Investments in the securities market are subject to market risks. Please read all related documents carefully before investing. Past performance is not indicative of future results.
                </p>
              </div>

              <div className="pt-8 border-t border-black/5">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e] focus-visible:ring-offset-2"
                  style={{ backgroundColor: "#a7181e", color: "#ffffff" }}
                >
                  {product.buttonText || "Get Started"} <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ALL PRODUCTS SIDEBAR */}
          <ProductSidebar currentSlug={slug} />
        </div>
      </Container>
    </div>
  );
}