"use client"; // Add this at the very top of your file for client-side interactivity

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, ArrowRight, HelpCircle, AlertCircle, Plus, Minus } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
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
    <main className="bg-[#f7f9fc] min-h-screen pb-12">
   <HeroSection
    title={product.title}
    breadcrumbs={[
      { label: "Products", href: "/products" },
      { label: product.title }
    ]}
    image="/images/about/2151908131 (1).jpg"
    height="h-[300px] md:h-[400px]" 
    imageClassName="object-top" // જો કમ્પોનન્ટમાં આ prop સપોર્ટ કરતો હોય 
/>

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT SIDE: MAIN CONTENT */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-4 md:p-8">
            <div className="mb-8 pb-6 border-b border-black/5">
              <span className="inline-block px-3 py-1 bg-[#ea2830]/10 text-[#ea2830] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                {product.tagline}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight">
                {product.mainTitle}
              </h1>
            </div>

            <div className="max-w-none mb-12">
              <p className="text-[16px] leading-relaxed mb-6 text-[#314158]">{product.description1}</p>
              {product.description2.split('\n').map((line, i) => (
                <p key={i} className="text-[16px] leading-relaxed mb-5 text-[#314158]">{line}</p>
              ))}

              <h3 className="text-[18px] font-bold text-slate-900 mb-6">Understanding Equities</h3>
              <p className="text-[16px] leading-relaxed mb-6 text-[#314158]">Equity investing allows individuals to become shareholders in publicly listed companies, giving them an opportunity to participate in the company's long-term growth and wealth creation. Whether you're a first-time investor or an experienced trader, equities provide the potential for capital appreciation, dividend income, and portfolio diversification.</p>

              <h3 className="text-[18px] font-bold text-slate-900 mb-6">Equity Investment Solutions</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Cash Market Trading – Buy and sell shares of listed companies through a secure and reliable trading platform with real-time execution.",
                  "Equity SIP – Build wealth gradually by investing a fixed amount in selected stocks at regular intervals through Stock SIPs.",
                  "Long-Term Investing – Create a diversified portfolio of fundamentally strong companies for long-term capital appreciation.",
                  "Intraday Trading – Take advantage of short-term market movements with fast execution and live market tracking.",
                  "IPO Investments – Apply for Initial Public Offerings (IPOs) directly through our seamless online platform.",
                  "Portfolio Advisory – Receive personalized stock recommendations and portfolio management guidance based on your investment goals."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#ea2830] shrink-0 mt-0.5" /><span className="text-[16px] text-[#314158]">{item}</span></li>
                ))}
              </ul>

              <h3 className="text-[18px] font-bold text-slate-900 mb-6">Benefits of Investing in Equities</h3>
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
                  <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-black/5"><CheckCircle2 className="w-5 h-5 text-[#ea2830] shrink-0" /><span className="text-[16px] text-[#314158]">{item}</span></div>
                ))}
              </div>

              <h3 className="text-[18px] font-bold text-slate-900 mb-6">Why Invest in Equities with Ratnakar Securities?</h3>
              <div className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] p-8 rounded-2xl shadow-md text-white mb-8">
                <ul className="space-y-4">
                  {[
                    "Research-backed stock recommendations.",
                    "Advanced online trading platform.",
                    "Dedicated relationship managers.",
                    "Fast and secure order execution.",
                    "Personalized investment advisory."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                      <span className="text-[16px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section with Accordion Logic */}
              <h3 className="text-[18px] font-bold text-slate-900 mb-6">Frequently Asked Questions (FAQs)</h3>
              <div className="space-y-4 mb-8">
                {[
                  { q: "What are Equities?", a: "Equities represent ownership in a company. When you purchase shares, you become a shareholder and may benefit from the company's growth and profitability." },
                  { q: "What is a Demat Account?", a: "A Demat Account holds your shares and securities electronically, making investing and trading convenient and secure." },
                  { q: "Can I start investing with a small amount?", a: "Yes. You can begin investing in equities with a small investment and gradually increase your portfolio over time." },
                  { q: "Is equity investing risky?", a: "Equity investments are subject to market fluctuations. However, long-term investing in fundamentally strong companies has historically helped investors create wealth." },
                  { q: "How do I choose the right stocks?", a: "Stock selection should be based on financial goals, risk appetite, company fundamentals, and market research. Ratnakar Securities provides research-backed recommendations to support informed investment decisions." }
                ].map((faq, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl border border-black/5 overflow-hidden">
                    <button 
                      onClick={() => toggleFAQ(i)}
                      className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-900"
                    >
                      <span className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-[#ea2830]" />{faq.q}</span>
                      {openIndex === i ? <Minus className="w-5 h-5 text-slate-500" /> : <Plus className="w-5 h-5 text-slate-500" />}
                    </button>
                    {openIndex === i && (
                      <div className="px-6 pb-6 pt-0 text-[16px] text-[#314158] leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mb-8 p-4 bg-orange-50/50 border border-orange-100 rounded-xl flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-[16px] text-slate-500 leading-relaxed"><strong>Disclaimer:</strong> Investments in the securities market are subject to market risks. Please read all related documents carefully before investing. Past performance is not indicative of future results.</p>
              </div>

              <div className="pt-8 border-t border-black/5">
                <Link href="/contact">
                  <Button variant="contained" className="bg-[#ea2830] hover:bg-[#c41f26] text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2">
                    {product.buttonText} <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
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