"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight, CheckCircle2, ArrowRight, HelpCircle, AlertCircle,
  Plus, Minus, TrendingUp, ShieldCheck, PieChart, Target, Zap, Banknote, BookOpen, BarChart3
} from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { PRODUCTS_DATA } from "../data";

export default function ProductDetailsPage() {
  const slug = "bonds";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);

  if (!product) notFound();

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    { q: "What are Bonds?", a: "Bonds are fixed-income securities through which investors lend money to governments or corporations for a specified period in exchange for periodic interest payments and repayment of the principal amount at maturity." },
    { q: "Are Bonds a safe investment?", a: "Government bonds are generally considered among the safest investment options because they are backed by the sovereign government. Corporate bonds may carry varying levels of credit risk depending on the financial strength of the issuer." },
    { q: "How do Bonds generate returns?", a: "Bond investors typically earn returns through periodic interest payments (coupon payments) and receive the principal amount upon maturity, subject to the issuer fulfilling its obligations." },
    { q: "Can I sell Bonds before maturity?", a: "Yes. Many listed bonds can be bought and sold in the secondary market before maturity, although liquidity and market prices may vary." },
    { q: "What is the difference between Government Bonds and Corporate Bonds?", a: "Government bonds are issued by the government and generally carry lower credit risk, while corporate bonds are issued by companies and may offer higher returns with varying levels of credit risk." },
    { q: "Are Bonds suitable for long-term investing?", a: "Yes. Bonds are often used as part of a long-term investment strategy to generate stable income, preserve capital, and reduce overall portfolio volatility." }
  ];

  return (
    <main className="bg-[#f7f9fc] min-h-screen pb-12">
      <HeroSection
        title={product.title}
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: product.title }]}
        image={product.imageSrc}
        height="h-[300px] md:h-[400px]"
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
                Bonds are fixed-income investment instruments that allow investors to lend money to governments, public sector organizations, financial institutions, or corporations in exchange for regular interest payments and the return of the principal amount at maturity. They are considered one of the most reliable investment options for individuals seeking capital preservation, stable income, and portfolio diversification.
              </p>
              <p className="text-[16px] text-[#314158] leading-relaxed">
                At Ratnakar Securities, we help investors identify high-quality bond investment opportunities through comprehensive market research, expert advisory services, and a secure investment platform.
              </p>
            </div>

            {/* Bond Solutions */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Bond Investment Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Government Bonds", icon: ShieldCheck, desc: "Invest in bonds issued by the Government of India that offer high safety, stable returns, and are backed by sovereign credit." },
                { title: "Corporate Bonds", icon: Banknote, desc: "Earn competitive fixed-income returns by investing in bonds issued by financially strong and creditworthy corporations." },
                { title: "Tax-Free & Saving Bonds", icon: PieChart, desc: "Explore eligible tax-efficient bond investments designed to support long-term financial planning." },
                { title: "Sovereign Gold Bonds", icon: TrendingUp, desc: "Diversify your portfolio by investing in SGBs, combining exposure to gold prices with periodic interest income." },
                { title: "Portfolio Planning", icon: Target, desc: "Build a diversified bond portfolio tailored to your investment objectives, liquidity needs, and risk profile." },
                { title: "Bond Advisory Services", icon: BookOpen, desc: "Receive research-backed recommendations and professional guidance to select suitable fixed-income investments." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-black/5 hover:border-[#ea2830]/30 transition-all">
                  <item.icon className="w-8 h-8 text-[#ea2830] mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-[16px] text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Strategies */}
            <div className="bg-slate-50 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Bond Investment Strategies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Income Generation: Stable income stream.",
                  "Capital Preservation: Focus on high-quality bonds.",
                  "Laddering: Diversified maturity dates.",
                  "Interest Rate Strategy: Optimized performance.",
                  "Long-Term: Goal-based alignment.",
                  "Diversification: Minimized concentration risk."
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-[16px] text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#ea2830]" /> {s}
                  </div>
                ))}
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
              <p><strong>Disclaimer:</strong> Investments in bonds are subject to market risks, interest rate risk, credit risk, and liquidity risk. Please read all relevant offer documents carefully before making any investment decision. Past performance is not indicative of future results.</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[30%]">
            <div className="rounded-2xl shadow-lg p-6 sticky top-[100px] bg-gradient-to-b from-[#2a689b] to-[#1e4b75] text-white">
              <h3 className="text-xl font-bold mb-6 pb-4 border-b border-white/20 uppercase tracking-wide">Investment Options</h3>
              <ul className="space-y-3">
                {PRODUCTS_DATA.map((item) => {
                  const isActive = item.slug === slug;
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <Link href={`/products/${item.slug}`} className={`flex items-center justify-between p-4 rounded-xl font-bold ${isActive ? "bg-white text-[#ea2830]" : "bg-white/10 text-white hover:bg-white hover:text-[#ea2830]"}`}>
                        <div className="flex items-center gap-3"><Icon className="w-5 h-5" /> {item.title}</div>
                        <ChevronRight className="w-5 h-5" />
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