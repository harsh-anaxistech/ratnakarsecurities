"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight, CheckCircle2, HelpCircle, AlertCircle,
  Plus, Minus, TrendingUp, ShieldCheck, PieChart, Target, Zap, BarChart3, PlayCircle
} from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import { PRODUCTS_DATA } from "../data";

export default function ProductDetailsPage() {
  const slug = "commodities";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);

  if (!product) notFound();

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    { q: "What are Commodities?", a: "Commodities are basic raw materials or primary agricultural products that can be bought and sold on regulated exchanges. They include precious metals, base metals, energy products, and agricultural commodities." },
    { q: "What is Commodity Futures Trading?", a: "Commodity futures trading involves buying or selling standardized contracts that obligate the purchase or sale of a commodity at a predetermined price on a future date. Futures are commonly used for both speculation and hedging." },
    { q: "Which exchanges are used for commodity trading in India?", a: "Commodity trading in India primarily takes place on recognized exchanges such as MCX (Multi Commodity Exchange) and NCDEX (National Commodity & Derivative Exchange)." },
    { q: "Can beginners invest in commodities?", a: "Yes. Beginners can start commodity trading after understanding market fundamentals, associated risks, and suitable trading strategies. Research and professional guidance can help investors make informed decisions." },
    { q: "What factors affect commodity prices?", a: "Commodity prices are influenced by global demand and supply, inflation, interest rates, currency movements, weather conditions, geopolitical developments, government policies, and overall economic activity." },
    { q: "Is commodity trading risky?", a: "Commodity trading is subject to market risks due to price volatility. Investors should understand the risks involved, adopt appropriate risk management strategies, and invest according to their financial goals and risk tolerance." }
  ];

  return (
    <main className="bg-[#f7f9fc] min-h-screen pb-12">
      <HeroSection
        title={product.title}
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: product.title }]}
        image="/images/about/Commodities.png"
        mobileImage="/images/about/mobile banner/Commodities mobile.jpg"
        height="h-[300px] md:h-[400px]"
        imagePosition="object-right sm:object-center"
      />

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-5 md:p-10">
            {/* Intro */}
            <div className="mb-10 pb-8 border-b border-black/5">
              <span className="inline-block px-3 py-1 bg-[#ea2830]/10 text-[#ea2830] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                {product.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-black mb-6">{product.mainTitle}</h2>
              <p className="text-[16px] text-[#314158] leading-relaxed mb-6">Commodity investing enables investors to participate in the price movements of essential raw materials such as precious metals, base metals, energy products, and agricultural commodities. Commodities play an important role in building a diversified investment portfolio by offering opportunities to hedge against inflation, reduce overall portfolio risk, and benefit from changing global market trends.</p>
              <p className="text-[16px] text-[#314158] leading-relaxed mb-6">Unlike traditional equity investments, commodity prices are influenced by factors such as global demand and supply, geopolitical events, weather conditions, currency fluctuations, and economic policies. This makes commodities an effective asset class for investors seeking diversification beyond stocks and bonds.</p>
              <p className="text-[16px] text-[#314158] leading-relaxed">At Ratnakar Securities, we provide seamless access to commodity trading through leading exchanges like MCX (Multi Commodity Exchange) and NCDEX (National Commodity & Derivative Exchange). Our experienced research team, advanced trading platform, and timely market insights empower investors to make informed trading decisions while effectively managing market risks.</p>
            </div>

            {/* Commodity Investment Solutions */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Commodity Investment Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Precious Metals Trading", icon: ShieldCheck, desc: "Trade in highly valued commodities such as Gold and Silver, which are widely regarded as safe-haven investments." },
                { title: "Base Metals Trading", icon: TrendingUp, desc: "Invest in industrial metals including Copper, Zinc, Aluminium, Nickel, and Lead, driven by industrial demand." },
                { title: "Energy Commodities", icon: Zap, desc: "Participate in trading energy products such as Crude Oil and Natural Gas, influenced by global consumption." },
                { title: "Agricultural Commodities", icon: PieChart, desc: "Trade agricultural products including spices, grains, oilseeds, and other farm-based commodities." },
                { title: "Commodity Futures Trading", icon: Target, desc: "Take positions in standardized futures contracts to speculate or hedge existing exposures." },
                { title: "Hedging Solutions", icon: PlayCircle, desc: "Protect your business or investment portfolio from adverse price fluctuations." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-black/5 hover:border-[#ea2830]/30 transition-all">
                  <item.icon className="w-8 h-8 text-[#ea2830] mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-[16px] text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Benefits & Why Us (Gradient Backgrounds) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {["Diversifies your portfolio.", "Hedge against inflation.", "Benefit from global trends.", "Effective risk management.", "High market liquidity.", "Transparent price discovery."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px]"><CheckCircle2 className="w-5 h-5" /> {b}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Why Ratnakar Securities?</h3>
                <ul className="space-y-3">
                  {["Access to MCX and NCDEX.", "Expert trading recommendations.", "Dedicated advisory support.", "Advanced trading platform.", "Secure & fast execution.", "Daily market analysis."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px]"><CheckCircle2 className="w-5 h-5" /> {b}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Strategies */}
            <div className="bg-slate-50 rounded-2xl p-8 text-slate-900 mb-12">
              <h3 className="text-2xl font-bold mb-6">Commodity Trading Strategies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Trend Following Strategy", "Hedging Strategy", "Seasonal Trading", "Technical Analysis Trading", "Fundamental Analysis", "Spread Trading", "Diversified Commodity Portfolio"].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl text-[16px] border border-black/5">
                    <BarChart3 className="w-5 h-5 text-[#ea2830]" /> {s}
                  </div>
                ))}
              </div>
            </div>

            {/* How to Start & FAQ */}
            <div className="mb-12 bg-gradient-to-br from-[#00aeee] to-[#0088c2] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">How to Start Commodity Trading</h3>
              <ol className="list-decimal list-inside space-y-2 text-[16px] text-[#ffffff]">
                <li>Open your Trading and Demat Account with Ratnakar Securities.</li>
                <li>Complete the online KYC process.</li>
                <li>Activate the Commodity Trading Segment.</li>
                <li>Add funds and explore our research.</li>
                <li>Select your contract and execute trades.</li>
              </ol>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><HelpCircle className="w-6 h-6 text-[#ea2830]" /> FAQs</h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="rounded-xl border border-black/5 bg-slate-50 overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-3 font-bold text-slate-900 text-[15px] md:text-[17px] hover:bg-slate-100 transition-colors"
                    >
                      <span className="flex-1 min-w-0">{faq.q}</span>
                      <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#ea2830]/10">
                        {openIndex === idx ? <Minus className="w-4 h-4 text-[#ea2830]" /> : <Plus className="w-4 h-4 text-[#ea2830]" />}
                      </span>
                    </button>
                    {openIndex === idx && <div className="px-5 pb-5 pt-0 text-[16px] text-slate-600">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl flex gap-3 text-[14px] text-slate-500">
              <AlertCircle className="w-5 h-5 text-orange-500 shrink-0" />
              <p><strong>Disclaimer:</strong> Commodity trading involves market risk. Please read all related documents carefully before investing. Past performance is not indicative of future results.</p>
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