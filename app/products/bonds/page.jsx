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
import ProductSidebar from "@/components/common/ProductSidebar";
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
    <div className="bg-[#f7f9fc] min-h-screen pb-12">
      <HeroSection
        title={product.title}
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: product.title }]}
        image="/images/about/Bonds.jpg"
        mobileImage="/images/about/mobile banner/bonds mobile.jpg"
        height="h-[300px] md:h-[400px]"
        imagePosition="object-right sm:object-center"
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
                Bonds are fixed-income investment instruments that allow investors to lend money to governments, public sector organizations, financial institutions, or corporations in exchange for regular interest payments and the return of the principal amount at maturity. They are considered one of the most reliable investment options for individuals seeking capital preservation, stable income, and portfolio diversification.
              </p>
              <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
                At Ratnakar Securities, we help investors identify high-quality bond investment opportunities through comprehensive market research, expert advisory services, and a secure investment platform.
              </p>
            </div>

            {/* Bond Solutions */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>Bond Investment Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Government Bonds", icon: ShieldCheck, desc: "Invest in bonds issued by the Government of India that offer high safety, stable returns, and are backed by sovereign credit." },
                { title: "Corporate Bonds", icon: Banknote, desc: "Earn competitive fixed-income returns by investing in bonds issued by financially strong and creditworthy corporations." },
                { title: "Tax-Free & Saving Bonds", icon: PieChart, desc: "Explore eligible tax-efficient bond investments designed to support long-term financial planning." },
                { title: "Sovereign Gold Bonds", icon: TrendingUp, desc: "Diversify your portfolio by investing in SGBs, combining exposure to gold prices with periodic interest income." },
                { title: "Portfolio Planning", icon: Target, desc: "Build a diversified bond portfolio tailored to your investment objectives, liquidity needs, and risk profile." },
                { title: "Bond Advisory Services", icon: BookOpen, desc: "Receive research-backed recommendations and professional guidance to select suitable fixed-income investments." }
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

            {/* Strategies */}
            <div 
              className="p-8 rounded-2xl mb-12 border border-slate-200 shadow-sm"
              style={{ backgroundColor: "#f8fafc" }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>Bond Investment Strategies</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Income Generation: Stable income stream.",
                  "Capital Preservation: Focus on high-quality bonds.",
                  "Laddering: Diversified maturity dates.",
                  "Interest Rate Strategy: Optimized performance.",
                  "Long-Term: Goal-based alignment.",
                  "Diversification: Minimized concentration risk."
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-[16px] font-medium" style={{ color: "#334155" }}>
                    <CheckCircle2 className="w-5 h-5 text-[#a7181e] shrink-0" aria-hidden="true" /> {s}
                  </div>
                ))}
              </div>
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
                      id={`bonds-faq-btn-${idx}`}
                      aria-expanded={openIndex === idx}
                      aria-controls={`bonds-faq-panel-${idx}`}
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-3 font-bold text-[15px] md:text-[17px] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e]"
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
                        id={`bonds-faq-panel-${idx}`}
                        role="region"
                        aria-labelledby={`bonds-faq-btn-${idx}`}
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
                <strong className="font-bold text-slate-900" style={{ color: "#0f172a" }}>Disclaimer:</strong> Investments in bonds are subject to market risks, interest rate risk, credit risk, and liquidity risk. Please read all relevant offer documents carefully before making any investment decision. Past performance is not indicative of future results.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8 border-t border-black/5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e] focus-visible:ring-offset-2"
                style={{ backgroundColor: "#a7181e", color: "#ffffff" }}
              >
                {product.buttonText || "Get Started Today"} <ArrowRight className="w-5 h-5" aria-hidden="true" />
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