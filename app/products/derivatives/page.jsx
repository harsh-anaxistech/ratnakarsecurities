"use client"; // Required for interactivity

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, ArrowRight, HelpCircle, AlertCircle, Plus, Minus } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { PRODUCTS_DATA } from "../data";

export default function ProductDetailsPage() {
  const slug = "derivatives";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  // State for FAQ accordion
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: "What is a Derivative?", a: "A financial contract whose value is derived from an underlying asset such as stocks, indices, commodities, or currencies." },
    { q: "How risky is derivatives trading?", a: "Derivatives involve market risk and leverage. They are suitable for investors who understand the risks and have disciplined risk management." },
    { q: "Can beginners trade derivatives?", a: "Beginners should first learn the basics and may consider professional guidance before trading derivatives." }
  ];

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-[#f7f9fc] min-h-screen pb-12">
      {/* Top Banner Section with Niche Image */}
      <HeroSection
    title={product.title}
    breadcrumbs={[
      { label: "Products", href: "/products" },
      { label: product.title }
    ]}
    image="/images/about/133849 (1).jpg"
    height="h-[300px] md:h-[400px]" 
/>

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ==========================================
              LEFT SIDE: TITLE & MAIN CONTENT BOX
          ========================================== */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-4 md:p-8">

            {/* Top Title & Tagline */}
            <div className="mb-8 pb-6 border-b border-black/5">
              <span className="inline-block px-3 py-1 bg-[#ea2830]/10 text-[#ea2830] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                {product.tagline}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight">
                {product.mainTitle}
              </h1>
            </div>

            {/* Niche Content */}
            <div className="max-w-none mb-12">
              <p className="text-[16px] leading-relaxed mb-6 text-[#314158]">
                {product.description1}
              </p>

              {product.description2.split('\n').map((line, i) => (
                <p key={i} className="text-[16px] leading-relaxed mb-5 text-[#314158]">
                  {line}
                </p>
              ))}

              <div className="mt-10 bg-slate-50 rounded-2xl p-8 border border-black/5">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {product.featuresTitle}
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-[#ea2830]/10 p-1.5 rounded-full text-[#ea2830] shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-[16px] text-[#314158] font-medium leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits Section */}
              <div className="mt-8 mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Benefits of Trading Derivatives</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-black/5 hover:border-[#ea2830]/30 transition-all cursor-default">
                    <CheckCircle2 className="w-5 h-5 text-[#ea2830] shrink-0 mt-0.5 transition-all duration-300" />
                    <span className="text-[16px] text-[#314158] leading-relaxed">Leverage to amplify returns</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-black/5 hover:border-[#ea2830]/30 transition-all cursor-default">
                    <CheckCircle2 className="w-5 h-5 text-[#ea2830] shrink-0 mt-0.5 transition-all duration-300" />
                    <span className="text-[16px] text-[#314158] leading-relaxed">Hedging against market volatility</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-black/5 hover:border-[#ea2830]/30 transition-all cursor-default">
                    <CheckCircle2 className="w-5 h-5 text-[#ea2830] shrink-0 mt-0.5 transition-all duration-300" />
                    <span className="text-[16px] text-[#314158] leading-relaxed">Diversify across asset classes</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-black/5 hover:border-[#ea2830]/30 transition-all cursor-default">
                    <CheckCircle2 className="w-5 h-5 text-[#ea2830] shrink-0 mt-0.5 transition-all duration-300" />
                    <span className="text-[16px] text-[#314158] leading-relaxed">Access multiple markets from one platform</span>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#ea2830]" /> Frequently Asked Questions
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

              {/* Disclaimer */}
              <div className="mb-8 p-4 bg-orange-50/50 border border-orange-100 rounded-xl flex gap-3 items-start">
                <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-[16px] text-slate-500 leading-relaxed"><strong>Disclaimer:</strong> Derivatives trading involves substantial market risk. Please read all risk disclosure documents carefully before trading. Past performance is not indicative of future results.</p>
              </div>

              {/* Button at the last */}
              <div className="pt-8 border-t border-black/5">
                <Link href="/contact">
                  <Button
                    variant="contained"
                    className="bg-[#ea2830] hover:bg-[#c41f26] text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                  >
                    {product.buttonText}
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* ==========================================
              RIGHT SIDE: ALL PRODUCTS SIDEBAR
          ========================================== */}
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