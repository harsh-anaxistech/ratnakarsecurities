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
  const slug = "slbs";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);

  if (!product) notFound();

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    { q: "What is the Securities Lending & Borrowing Scheme (SLBS)?", a: "SLBS is a SEBI-regulated mechanism that allows investors to lend their eligible securities to borrowers for a specified period in exchange for lending fees while retaining ownership of the securities." },
    { q: "Who can participate in SLBS?", a: "Eligible retail investors, High Net Worth Individuals (HNIs), institutional investors, and other qualified market participants can participate in SLBS, subject to applicable exchange and regulatory guidelines." },
    { q: "Do I lose ownership of my shares after lending them?", a: "No. The securities are lent for a specified duration under the exchange-regulated framework. The lender retains beneficial ownership and receives the securities back upon completion of the lending period." },
    { q: "How do I earn income through SLBS?", a: "You earn lending fees from borrowers who temporarily borrow your eligible securities. The fee is determined through the exchange mechanism based on market demand and supply." },
    { q: "Is SLBS safe?", a: "SLBS operates through recognized stock exchanges and clearing corporations under SEBI regulations, providing a transparent and regulated framework." },
    { q: "Which securities are eligible for SLBS?", a: "Only securities approved by the recognized stock exchanges for the Securities Lending & Borrowing Scheme are eligible for lending and borrowing." }
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
                The Securities Lending & Borrowing Scheme (SLBS) is a SEBI-regulated mechanism that allows investors to lend their idle securities to borrowers for a specified period in exchange for lending fees. It enables investors to earn additional income from shares that would otherwise remain unused in their Demat accounts.
              </p>
              <p className="text-[16px] text-[#314158] leading-relaxed mb-6">
                Investors retain ownership of their securities while generating an additional source of income, and borrowers gain temporary access to securities for purposes such as settlement obligations or short selling.
              </p>
              <p className="text-[16px] text-[#314158] leading-relaxed">
                At Ratnakar Securities, we simplify the SLBS process by providing seamless access to the platform, expert guidance, and dedicated support to help you maximize returns from your long-term holdings.
              </p>
            </div>

            {/* SLBS Solutions */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">SLBS Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Securities Lending", icon: ShieldCheck, desc: "Lend eligible securities held in your Demat account and earn fees without selling." },
                { title: "Securities Borrowing", icon: TrendingUp, desc: "Borrow eligible securities for settlement obligations or short-selling strategies." },
                { title: "Portfolio Income Enhancement", icon: PieChart, desc: "Generate an additional stream of income by lending idle shares." },
                { title: "Online SLBS Transactions", icon: Zap, desc: "Access a secure online platform for transparent pricing and efficient execution." },
                { title: "Research-Based Selection", icon: Target, desc: "Get guidance on eligible securities based on comprehensive market analysis." },
                { title: "Dedicated Advisory", icon: BookOpen, desc: "Benefit from experts who guide you through the process and risk management." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-50  rounded-2xl border border-black/5 hover:border-[#ea2830]/30 transition-all">
                  <item.icon className="w-8 h-8 text-[#ea2830] mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-[16px] text-slate-700">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] p-8 rounded-2xl text-white mb-12">
              <h3 className="text-xl font-bold mb-6">Why Choose SLBS with Ratnakar Securities?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Simple and hassle-free process.", "Research-backed recommendations.", "Dedicated advisory support.", "Secure online trading platform.", "Transparent, exchange-regulated transactions.", "Timely market insights."].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-[16px]"><CheckCircle2 className="w-5 h-5" /> {b}</li>
                ))}
              </ul>
            </div>

            {/* How to Get Started */}
            <div className="mb-12 bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">How to Get Started</h3>
              <ol className="list-decimal list-inside space-y-2 text-[16px] text-[#314158]">
                <li>Open a Demat and Trading Account.</li>
                <li>Register for the SLBS facility.</li>
                <li>Ensure eligible securities are in your Demat account.</li>
                <li>Select securities and place your request online.</li>
                <li>Monitor your earnings via the dashboard.</li>
              </ol>
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
              <p><strong>Disclaimer:</strong> SLBS is subject to SEBI regulations and market risks. Lending fees are not guaranteed. Please evaluate all risks before participating.</p>
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