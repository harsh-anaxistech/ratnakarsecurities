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
import ProductSidebar from "@/components/common/ProductSidebar";
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
    <div className="bg-[#f7f9fc] min-h-screen pb-12">
      <HeroSection
        title={product.title}
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: product.title }]}
        image="/images/about/NRIs.jpg"
        mobileImage="/images/about/mobile banner/NRIs mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-5 md:p-10">
            {/* Intro */}
            <div className="mb-10 pb-8 border-b border-black/5">
              <span 
                className="inline-block px-3 py-1 font-bold text-xs tracking-widest rounded-full uppercase mb-4"
                style={{ backgroundColor: "#fee2e2", color: "#7f1d1d" }}
              >
                {product.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6" style={{ color: "#0f172a" }}>{product.mainTitle}</h2>
              <p className="text-[16px] text-slate-700 leading-relaxed mb-6" style={{ color: "#334155" }}>
                Non-Resident Indians (NRIs) can continue to participate in India's growing economy by investing in a wide range of financial products. Whether your objective is long-term wealth creation, portfolio diversification, regular income, or maintaining financial ties with India, NRI investment opportunities provide a secure and regulated pathway to achieve your financial goals.
              </p>
              <p className="text-[16px] text-slate-700 leading-relaxed mb-6" style={{ color: "#334155" }}>
                India remains one of the world's fastest-growing economies, offering investment opportunities across equities, mutual funds, bonds, IPOs, and real estate. With the right guidance and regulatory support, NRIs can efficiently manage their investments while residing anywhere across the globe.
              </p>
              <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
                At Ratnakar Securities, we simplify the investment journey for NRIs by offering comprehensive investment solutions, seamless account opening, regulatory guidance, and dedicated relationship management. Our experienced professionals assist investors throughout the investment lifecycle—from account setup and compliance to portfolio management and ongoing investment support.
              </p>
            </div>

            {/* NRI Investment Solutions */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>NRI Investment Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "NRI Demat & Trading Account", icon: ShieldCheck, desc: "Open an NRI Demat and Trading Account to invest in Indian equity markets through a secure, fully digital, and hassle-free process." },
                { title: "Equity Investments", icon: TrendingUp, desc: "Invest in shares of leading Indian companies listed on NSE and BSE to participate in India's long-term economic growth." },
                { title: "Mutual Fund Investments", icon: PieChart, desc: "Build a diversified investment portfolio through professionally managed mutual fund schemes across equity, debt, hybrid, and index funds." },
                { title: "IPO Investments", icon: Target, desc: "Apply for Initial Public Offerings (IPOs) and participate in the growth journey of promising Indian companies." },
                { title: "Bonds & Fixed Income", icon: Zap, desc: "Invest in government securities, corporate bonds, tax-saving bonds, and other fixed-income products." },
                { title: "Wealth Management", icon: BookOpen, desc: "Comprehensive wealth management services designed to help NRIs preserve, grow, and efficiently manage their financial assets in India." }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="p-6 rounded-2xl border border-slate-200 hover:border-[#a7181e]/30 transition-all shadow-sm"
                  style={{ backgroundColor: "#f8fafc" }}
                >
                  <item.icon className="w-8 h-8 text-[#a7181e] mb-4" aria-hidden="true" />
                  <h4 className="font-bold text-slate-900 mb-2" style={{ color: "#0f172a" }}>{item.title}</h4>
                  <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Benefits & Why Us */}
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
                <ul className="space-y-3">
                  {["Participate in India's long-term economic growth.", "Diversify your global investment portfolio.", "Invest across multiple regulated financial products.", "Easy online account opening.", "Dedicated relationship management."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px] text-white"><CheckCircle2 className="w-5 h-5 text-white shrink-0" aria-hidden="true" /> {b}</li>
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
                <ul className="space-y-3">
                  {["Dedicated NRI investment specialists.", "Seamless digital onboarding process.", "Compliance support for RBI, FEMA, and SEBI.", "Research-backed investment recommendations.", "Secure online investment platform."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px] text-white"><CheckCircle2 className="w-5 h-5 text-white shrink-0" aria-hidden="true" /> {b}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who Can Invest */}
            <div 
              className="rounded-2xl p-8 mb-12 border border-slate-200 shadow-sm"
              style={{ backgroundColor: "#f8fafc" }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>Who Can Invest?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Non-Resident Indians (NRIs)", "Persons of Indian Origin (PIOs)", "Overseas Citizens of India (OCIs)", "Indian professionals abroad", "Business owners overseas", "Global investors"].map((s, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 p-4 rounded-xl text-[16px] border border-slate-200 shadow-sm font-medium"
                    style={{ backgroundColor: "#ffffff", color: "#0f172a" }}
                  >
                    <Users className="w-5 h-5 text-[#a7181e] shrink-0" aria-hidden="true" />
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
              <h3 className="text-2xl font-bold text-white mb-6">How to Start Investing as an NRI</h3>
              <ol className="list-decimal list-inside space-y-2 text-[16px] text-white">
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
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2" style={{ color: "#0f172a" }}>
                <HelpCircle className="w-6 h-6 text-[#a7181e]" aria-hidden="true" /> FAQs
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-xl border border-slate-200 overflow-hidden shadow-sm"
                    style={{ backgroundColor: "#f8fafc" }}
                  >
                    <button
                      type="button"
                      id={`nris-faq-btn-${idx}`}
                      aria-expanded={openIndex === idx}
                      aria-controls={`nris-faq-panel-${idx}`}
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-3 font-bold text-slate-900 text-[15px] md:text-[17px] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e]"
                      style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
                    >
                      <span className="flex-1 min-w-0" style={{ color: "#0f172a" }}>{faq.q}</span>
                      <span 
                        className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full"
                        style={{ backgroundColor: "#fee2e2" }}
                      >
                        {openIndex === idx ? <Minus className="w-4 h-4 text-[#a7181e]" aria-hidden="true" /> : <Plus className="w-4 h-4 text-[#a7181e]" aria-hidden="true" />}
                      </span>
                    </button>
                    {openIndex === idx && (
                      <div
                        id={`nris-faq-panel-${idx}`}
                        role="region"
                        aria-labelledby={`nris-faq-btn-${idx}`}
                        className="px-5 pb-5 pt-0 text-[16px] leading-relaxed"
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
              className="p-4 border border-amber-200 rounded-xl flex gap-3 text-[14px] leading-relaxed mb-8 shadow-sm"
              style={{ backgroundColor: "#fffcf7", color: "#334155" }}
            >
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
              <p style={{ color: "#334155" }}>
                <strong className="font-bold text-slate-900" style={{ color: "#0f172a" }}>Disclaimer:</strong> Investments in the securities market are subject to market risks. NRI investments are governed by applicable RBI, FEMA, SEBI, Income Tax, and other regulatory guidelines. Past performance is not indicative of future results.
              </p>
            </div>

            {/* CTA Link */}
            <div className="pt-8 border-t border-black/5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e] focus-visible:ring-offset-2"
                style={{ backgroundColor: "#a7181e", color: "#ffffff" }}
              >
                {product.buttonText || "Open NRI Account"} <ArrowRight className="w-5 h-5" aria-hidden="true" />
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