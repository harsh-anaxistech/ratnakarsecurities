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
import ProductSidebar from "@/components/common/ProductSidebar";
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
    <div className="bg-[#f7f9fc] min-h-screen pb-12">
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
              <span
                className="inline-block px-3 py-1 bg-[#fee2e2] text-[#7f1d1d] font-bold text-xs tracking-widest rounded-full uppercase mb-4 border border-[#fecaca]"
                style={{ backgroundColor: "#fee2e2", color: "#7f1d1d" }}
              >
                {product.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6" style={{ color: "#0f172a" }}>
                {product.mainTitle}
              </h2>
              <p className="text-[16px] text-slate-700 leading-relaxed mb-6" style={{ color: "#334155" }}>
                Commodity investing enables investors to participate in the price movements of essential raw materials such as precious metals, base metals, energy products, and agricultural commodities. Commodities play an important role in building a diversified investment portfolio by offering opportunities to hedge against inflation, reduce overall portfolio risk, and benefit from changing global market trends.
              </p>
              <p className="text-[16px] text-slate-700 leading-relaxed mb-6" style={{ color: "#334155" }}>
                Unlike traditional equity investments, commodity prices are influenced by factors such as global demand and supply, geopolitical events, weather conditions, currency fluctuations, and economic policies. This makes commodities an effective asset class for investors seeking diversification beyond stocks and bonds.
              </p>
              <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
                At Ratnakar Securities, we provide seamless access to commodity trading through leading exchanges like MCX (Multi Commodity Exchange) and NCDEX (National Commodity & Derivative Exchange). Our experienced research team, advanced trading platform, and timely market insights empower investors to make informed trading decisions while effectively managing market risks.
              </p>
            </div>

            {/* Commodity Investment Solutions */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>
              Commodity Investment Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Precious Metals Trading", icon: ShieldCheck, desc: "Trade in highly valued commodities such as Gold and Silver, which are widely regarded as safe-haven investments." },
                { title: "Base Metals Trading", icon: TrendingUp, desc: "Invest in industrial metals including Copper, Zinc, Aluminium, Nickel, and Lead, driven by industrial demand." },
                { title: "Energy Commodities", icon: Zap, desc: "Participate in trading energy products such as Crude Oil and Natural Gas, influenced by global consumption." },
                { title: "Agricultural Commodities", icon: PieChart, desc: "Trade agricultural products including spices, grains, oilseeds, and other farm-based commodities." },
                { title: "Commodity Futures Trading", icon: Target, desc: "Take positions in standardized futures contracts to speculate or hedge existing exposures." },
                { title: "Hedging Solutions", icon: PlayCircle, desc: "Protect your business or investment portfolio from adverse price fluctuations." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-200 hover:border-[#a7181e]/30 transition-all shadow-sm"
                  style={{ backgroundColor: "#f8fafc" }}
                >
                  <item.icon className="w-8 h-8 text-[#a7181e] mb-4" aria-hidden="true" />
                  <h4 className="font-bold text-slate-900 text-lg mb-2" style={{ color: "#0f172a" }}>
                    {item.title}
                  </h4>
                  <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits & Why Us (Gradient Backgrounds) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div 
                className="bg-[#012e54] p-8 rounded-2xl text-white shadow-md border border-black/5"
                style={{
                  backgroundColor: "#012e54",
                  backgroundImage: "linear-gradient(to bottom right, #006da0, #012e54)",
                  color: "#ffffff"
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">Key Benefits</h3>
                <ul className="space-y-3" role="list">
                  {["Diversifies your portfolio.", "Hedge against inflation.", "Benefit from global trends.", "Effective risk management.", "High market liquidity.", "Transparent price discovery."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px] text-white">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" aria-hidden="true" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div 
                className="bg-[#012e54] p-8 rounded-2xl text-white shadow-md border border-black/5"
                style={{
                  backgroundColor: "#012e54",
                  backgroundImage: "linear-gradient(to bottom right, #006da0, #012e54)",
                  color: "#ffffff"
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">Why Ratnakar Securities?</h3>
                <ul className="space-y-3" role="list">
                  {["Access to MCX and NCDEX.", "Expert trading recommendations.", "Dedicated advisory support.", "Advanced trading platform.", "Secure & fast execution.", "Daily market analysis."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px] text-white">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0" aria-hidden="true" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Strategies */}
            <div
              className="bg-[#f8fafc] rounded-2xl p-8 text-slate-900 mb-12 border border-slate-200"
              style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: "#0f172a" }}>
                Commodity Trading Strategies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Trend Following Strategy", "Hedging Strategy", "Seasonal Trading", "Technical Analysis Trading", "Fundamental Analysis", "Spread Trading", "Diversified Commodity Portfolio"].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl text-[16px] border border-slate-200 font-medium shadow-sm"
                    style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
                  >
                    <BarChart3 className="w-5 h-5 text-[#a7181e] shrink-0" aria-hidden="true" />
                    <span style={{ color: "#0f172a" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Start */}
            <div 
              className="mb-12 bg-[#012e54] p-8 rounded-2xl text-white shadow-md border border-black/5"
              style={{
                backgroundColor: "#012e54",
                backgroundImage: "linear-gradient(to bottom right, #006da0, #012e54)",
                color: "#ffffff"
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">How to Start Commodity Trading</h3>
              <ol className="list-decimal list-inside space-y-2 text-[16px] text-white">
                <li>Open your Trading and Demat Account with Ratnakar Securities.</li>
                <li>Complete the online KYC process.</li>
                <li>Activate the Commodity Trading Segment.</li>
                <li>Add funds and explore our research.</li>
                <li>Select your contract and execute trades.</li>
              </ol>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2" style={{ color: "#0f172a" }}>
                <HelpCircle className="w-6 h-6 text-[#a7181e]" aria-hidden="true" />
                Frequently Asked Questions (FAQs)
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-[#f8fafc] overflow-hidden"
                    style={{ backgroundColor: "#f8fafc" }}
                  >
                    <button
                      type="button"
                      id={`commodities-faq-btn-${idx}`}
                      aria-expanded={openIndex === idx}
                      aria-controls={`commodities-faq-panel-${idx}`}
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-3 font-bold text-slate-900 text-[15px] md:text-[17px] bg-[#f8fafc] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e]"
                      style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
                    >
                      <span className="flex-1 min-w-0" style={{ color: "#0f172a" }}>{faq.q}</span>
                      <span
                        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#fee2e2]"
                        style={{ backgroundColor: "#fee2e2" }}
                      >
                        {openIndex === idx ? (
                          <Minus className="w-4 h-4 text-[#a7181e]" aria-hidden="true" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#a7181e]" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                    {openIndex === idx && (
                      <div
                        id={`commodities-faq-panel-${idx}`}
                        role="region"
                        aria-labelledby={`commodities-faq-btn-${idx}`}
                        className="px-5 pb-5 pt-0 text-[16px] text-slate-700 leading-relaxed bg-[#f8fafc]"
                        style={{ backgroundColor: "#f8fafc", color: "#334155" }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div
              className="p-4 bg-[#fffcf7] border border-amber-200 rounded-xl flex gap-3 text-[14px] mb-8"
              style={{ backgroundColor: "#fffcf7" }}
            >
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
                <strong className="text-slate-900 font-bold" style={{ color: "#0f172a" }}>Disclaimer:</strong> Commodity trading involves market risk. Please read all related documents carefully before investing. Past performance is not indicative of future results.
              </p>
            </div>

            {/* CTA Link */}
            <div className="pt-8 border-t border-black/5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex bg-[#a7181e] hover:bg-[#a7181e] text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg items-center justify-center gap-2 transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e] focus-visible:ring-offset-2"
                style={{ backgroundColor: "#a7181e", color: "#ffffff" }}
              >
                {product.buttonText || "Know More / Contact Us Today"} <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE: ALL PRODUCTS SIDEBAR */}
          <ProductSidebar currentSlug={slug} showContactCard={true} />
        </div>
      </Container>
    </div>
  );
}