"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight, CheckCircle2, ArrowRight, HelpCircle, AlertCircle,
  Plus, Minus, TrendingUp, ShieldCheck, PieChart, Target, Zap, BarChart3, PlayCircle, Users, BookOpen
} from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { PRODUCTS_DATA } from "../data";

export default function ProductDetailsPage() {
  const slug = "nris";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);

  if (!product) notFound();

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    { q: "Who is eligible to invest as an NRI?", a: "Indian citizens residing outside India who qualify as Non-Resident Indians (NRIs) under applicable regulations can invest in Indian financial markets, subject to RBI, FEMA, SEBI, and other regulatory guidelines." },
    { q: "Can NRIs invest in Indian stock markets?", a: "Yes. NRIs can invest in Indian equities by opening an NRI Demat and Trading Account and complying with applicable regulations." },
    { q: "What types of investments are available for NRIs?", a: "NRIs can invest in equities, mutual funds, IPOs, bonds, ETFs, government securities, and certain real estate investments, subject to prevailing regulations." },
    { q: "What documents are required to open an NRI account?", a: "Generally, documents include: Passport, Visa or overseas residence proof, PAN Card, Overseas and Indian address proof (if applicable), Passport-size photographs, and NRE/NRO bank account details." },
    { q: "Can NRIs invest online?", a: "Yes. Ratnakar Securities offers a secure online platform that enables NRIs to manage investments, monitor portfolios, and execute transactions conveniently from anywhere in the world." },
    { q: "Are NRI investments regulated?", a: "Yes. NRI investments are governed by regulations issued by the Reserve Bank of India (RBI), the Foreign Exchange Management Act (FEMA), the Securities and Exchange Board of India (SEBI), and other applicable authorities." }
  ];

  return (
    <main className="bg-[#f7f9fc] min-h-screen pb-12">
    <HeroSection
    title={product.title}
    breadcrumbs={[{ label: "Products", href: "/products" }, { label: product.title }]}
    image="/images/about/600 (1).jpg"
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
                Non-Resident Indians (NRIs) can continue to participate in India's growing economy by investing in a wide range of financial products. Whether your objective is long-term wealth creation, portfolio diversification, regular income, or maintaining financial ties with India, NRI investment opportunities provide a secure and regulated pathway to achieve your financial goals.
              </p>
              <p className="text-[16px] text-[#314158] leading-relaxed mb-6">
                India remains one of the world's fastest-growing economies, offering investment opportunities across equities, mutual funds, bonds, IPOs, and real estate. With the right guidance and regulatory support, NRIs can efficiently manage their investments while residing anywhere across the globe.
              </p>
              <p className="text-[16px] text-[#314158] leading-relaxed">
                At Ratnakar Securities, we simplify the investment journey for NRIs by offering comprehensive investment solutions, seamless account opening, regulatory guidance, and dedicated relationship management. Our experienced professionals assist investors throughout the investment lifecycle—from account setup and compliance to portfolio management and ongoing investment support.
              </p>
            </div>

            {/* NRI Investment Solutions */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6">NRI Investment Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "NRI Demat & Trading Account", icon: ShieldCheck, desc: "Open an NRI Demat and Trading Account to invest in Indian equity markets through a secure, fully digital, and hassle-free process." },
                { title: "Equity Investments", icon: TrendingUp, desc: "Invest in shares of leading Indian companies listed on NSE and BSE to participate in India's long-term economic growth." },
                { title: "Mutual Fund Investments", icon: PieChart, desc: "Build a diversified investment portfolio through professionally managed mutual fund schemes across equity, debt, hybrid, and index funds." },
                { title: "IPO Investments", icon: Target, desc: "Apply for Initial Public Offerings (IPOs) and participate in the growth journey of promising Indian companies." },
                { title: "Bonds & Fixed Income", icon: Zap, desc: "Invest in government securities, corporate bonds, tax-saving bonds, and other fixed-income products." },
                { title: "Wealth Management", icon: BookOpen, desc: "Comprehensive wealth management services designed to help NRIs preserve, grow, and efficiently manage their financial assets in India." }
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
                  {["Participate in India's long-term economic growth.", "Diversify your global investment portfolio.", "Invest across multiple regulated financial products.", "Easy online account opening.", "Dedicated relationship management."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px]"><CheckCircle2 className="w-5 h-5" /> {b}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Why Ratnakar Securities?</h3>
                <ul className="space-y-3">
                  {["Dedicated NRI investment specialists.", "Seamless digital onboarding process.", "Compliance support for RBI, FEMA, and SEBI.", "Research-backed investment recommendations.", "Secure online investment platform."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px]"><CheckCircle2 className="w-5 h-5" /> {b}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who Can Invest */}
            <div className="bg-gray-200 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Who Can Invest?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Non-Resident Indians (NRIs)", "Persons of Indian Origin (PIOs)", "Overseas Citizens of India (OCIs)", "Indian professionals abroad", "Business owners overseas", "Global investors"].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl text-[16px] border border-black/5">
                    <Users className="w-5 h-5 text-[#ea2830]" /> {s}
                  </div>
                ))}
              </div>
            </div>

            {/* How to Start */}
            <div className="mb-12 bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">How to Start Investing as an NRI</h3>
              <ol className="list-decimal list-inside space-y-2 text-[16px] text-[#314158]">
                <li>Open an NRI Demat and Trading Account.</li>
                <li>Complete the online KYC and documentation process.</li>
                <li>Link your NRE or NRO bank account.</li>
                <li>Complete regulatory formalities.</li>
                <li>Add funds and explore our research recommendations.</li>
                <li>Build and monitor your diversified portfolio.</li>
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
              <p><strong>Disclaimer:</strong> Investments in the securities market are subject to market risks. NRI investments are governed by applicable RBI, FEMA, SEBI, Income Tax, and other regulatory guidelines. Past performance is not indicative of future results.</p>
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