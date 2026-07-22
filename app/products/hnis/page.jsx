"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight, CheckCircle2, ArrowRight, HelpCircle, AlertCircle,
  Plus, Minus, TrendingUp, ShieldCheck, PieChart, Target, Zap, BarChart3, Users, BookOpen
} from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { PRODUCTS_DATA } from "../data";

export default function ProductDetailsPage() {
  const slug = "hnis";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);

  if (!product) notFound();

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    { q: "What are HNI Services?", a: "HNI Services are specialized financial solutions designed for High Net Worth Individuals, including personalized portfolio management, wealth management, financial planning, and dedicated advisory support." },
    { q: "Who qualifies as an HNI?", a: "An HNI generally refers to an individual with significant investable assets who requires customized financial planning and investment management. Eligibility criteria may vary." },
    { q: "What investment products are available for HNI clients?", a: "HNI clients can access equities, mutual funds, bonds, structured products, fixed-income securities, portfolio management services, and other exclusive investment opportunities." },
    { q: "Why do HNIs need a dedicated Relationship Manager?", a: "A dedicated Relationship Manager provides personalized guidance, portfolio monitoring, market updates, and ongoing support to help achieve financial objectives efficiently." },
    { q: "Are HNI portfolios reviewed regularly?", a: "Yes. HNI portfolios are periodically reviewed to assess performance, manage risks, identify new opportunities, and ensure alignment with changing financial goals." },
    { q: "Can HNI Services help with wealth preservation?", a: "Yes. HNI Services focus on wealth creation, preservation, and transfer through diversification, risk management, tax-efficient investing, and succession planning." }
  ];

  return (
    <main className="bg-[#f7f9fc] min-h-screen pb-12">
      <HeroSection
        title={product.title}
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: product.title }]}
        image="/images/about/HNIs.jpg"
        mobileImage="/images/about/mobile banner/HNIs mobile.jpg"
        height="h-[300px] md:h-[400px]"
        className="object-top"
        imagePosition="object-right sm:object-center"
      />

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-5 md:p-10">
            {/* Intro */}
            <div className="mb-10 pb-8 border-b border-black/5">
              <span className="inline-block px-3 py-1 bg-[#ea2830]/10 text-[#ea2830] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                {product.tagline}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif text-black mb-6">{product.mainTitle}</h1>
              <p className="text-[16px] text-[#314158] leading-relaxed mb-6">
                High Net Worth Individuals (HNIs) require sophisticated financial solutions that go beyond traditional investing. HNI Services are designed to provide personalized wealth management, exclusive investment opportunities, strategic financial planning, and dedicated advisory support tailored to complex financial needs.
              </p>
              <p className="text-[16px] text-[#314158] leading-relaxed">
                At Ratnakar Securities, we offer comprehensive HNI Services backed by experienced relationship managers, research-driven investment strategies, and premium financial solutions designed to help you achieve long-term financial success.
              </p>
            </div>

            {/* HNI Investment Solutions */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">HNI Investment Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Dedicated Relationship Manager", icon: Users, desc: "Personalized assistance from an experienced manager who understands your specific objectives." },
                { title: "Personalized Portfolio Management", icon: BarChart3, desc: "Diversified portfolios tailored to your risk profile and long-term wealth creation strategy." },
                { title: "Premium Investment Opportunities", icon: Zap, desc: "Access exclusive structured products, alternative investments, and high-value equity portfolios." },
                { title: "Wealth Management Services", icon: ShieldCheck, desc: "Comprehensive solutions covering tax-efficient investing, retirement, and wealth preservation." },
                { title: "Equity & Capital Markets", icon: TrendingUp, desc: "Carefully researched equity opportunities with access to expert recommendations." },
                { title: "Estate & Succession Planning", icon: BookOpen, desc: "Plan the smooth transfer of wealth across generations with comprehensive strategies." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-black/5 hover:border-[#ea2830]/30 transition-all">
                  <item.icon className="w-8 h-8 text-[#ea2830] mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-[16px] text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Benefits & Why Us */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {["Personalized investment strategies.", "Dedicated Relationship Manager.", "Access to exclusive opportunities.", "Professional risk management.", "Tax-efficient planning."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px]"><CheckCircle2 className="w-5 h-5" /> {b}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Why Ratnakar Securities?</h3>
                <ul className="space-y-3">
                  {["Expert relationship management.", "Research-backed recommendations.", "Premium and exclusive products.", "Goal-oriented management.", "Secure digital platform."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px]"><CheckCircle2 className="w-5 h-5" /> {b}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#ea2830]" /> FAQs
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="rounded-xl border border-black/5 bg-slate-50 overflow-hidden">
                    <button onClick={() => toggleFAQ(idx)} className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-900 hover:bg-slate-100">
                      {faq.q}
                      {openIndex === idx ? <Minus className="w-5 h-5 text-[#ea2830]" /> : <Plus className="w-5 h-5 text-[#ea2830]" />}
                    </button>
                    {openIndex === idx && <div className="px-5 pb-5 pt-0 text-[16px] text-slate-600 leading-relaxed">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-orange-50 border border-orange-100 rounded-xl flex gap-3 text-[14px] text-slate-500">
              <AlertCircle className="w-5 h-5 text-orange-500 shrink-0" />
              <p><strong>Disclaimer:</strong> Investments are subject to market risks. HNI Services do not guarantee returns or protect against losses. Investors should evaluate their financial goals and risk tolerance before investing.</p>
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