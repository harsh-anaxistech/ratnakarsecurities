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
import ProductSidebar from "@/components/common/ProductSidebar";
import { PRODUCTS_DATA } from "../data";

export default function ProductDetailsPage() {
  const slug = "slbm";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);

  if (!product) notFound();

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    { q: "What is the Securities Lending & Borrowing Scheme (SLBM)?", a: "SLBM is a SEBI-regulated mechanism that allows investors to lend their eligible securities to borrowers for a specified period in exchange for lending fees while retaining ownership of the securities." },
    { q: "Who can participate in SLBM?", a: "Eligible retail investors, High Net Worth Individuals (HNIs), institutional investors, and other qualified market participants can participate in SLBM, subject to applicable exchange and regulatory guidelines." },
    { q: "Do I lose ownership of my shares after lending them?", a: "No. The securities are lent for a specified duration under the exchange-regulated framework. The lender retains beneficial ownership and receives the securities back upon completion of the lending period." },
    { q: "How do I earn income through SLBM?", a: "You earn lending fees from borrowers who temporarily borrow your eligible securities. The fee is determined through the exchange mechanism based on market demand and supply." },
    { q: "Is SLBM safe?", a: "SLBM operates through recognized stock exchanges and clearing corporations under SEBI regulations, providing a transparent and regulated framework." },
    { q: "Which securities are eligible for SLBM?", a: "Only securities approved by the recognized stock exchanges for the Securities Lending & Borrowing Scheme are eligible for lending and borrowing." }
  ];

  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-12">
      <HeroSection
        title={product.title}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.title }
        ]}
        image="/images/about/SLBM.jpg"
        mobileImage="/images/about/mobile banner/SLBM mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />
      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div
            className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-slate-200 p-5 md:p-10"
            style={{ backgroundColor: "#ffffff" }}
          >
            {/* Intro */}
            <div className="mb-10 pb-8 border-b border-slate-200">
              <span
                className="inline-block px-3 py-1 bg-[#fee2e2] text-[#7f1d1d] font-bold text-xs tracking-widest rounded-full uppercase mb-4 border border-[#fecaca]"
                style={{ backgroundColor: "#fee2e2", color: "#7f1d1d" }}
              >
                {product.tagline}
              </span>
              <h2
                className="text-3xl md:text-4xl font-serif text-slate-900 mb-6"
                style={{ color: "#0f172a" }}
              >
                {product.mainTitle}
              </h2>
              <p
                className="text-[16px] text-slate-700 leading-relaxed mb-6"
                style={{ color: "#334155" }}
              >
                The Securities Lending & Borrowing Scheme (SLBM) is a SEBI-regulated mechanism that allows investors to lend their idle securities to borrowers for a specified period in exchange for lending fees. It enables investors to earn additional income from shares that would otherwise remain unused in their Demat accounts.
              </p>
              <p
                className="text-[16px] text-slate-700 leading-relaxed mb-6"
                style={{ color: "#334155" }}
              >
                Investors retain ownership of their securities while generating an additional source of income, and borrowers gain temporary access to securities for purposes such as settlement obligations or short selling.
              </p>
              <p
                className="text-[16px] text-slate-700 leading-relaxed"
                style={{ color: "#334155" }}
              >
                At Ratnakar Securities, we simplify the SLBM process by providing seamless access to the platform, expert guidance, and dedicated support to help you maximize returns from your long-term holdings.
              </p>
            </div>

            {/* SLBM Solutions */}
            <h3
              className="text-2xl font-bold text-slate-900 mb-6"
              style={{ color: "#0f172a" }}
            >
              SLBM Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Securities Lending", icon: ShieldCheck, desc: "Lend eligible securities held in your Demat account and earn fees without selling." },
                { title: "Securities Borrowing", icon: TrendingUp, desc: "Borrow eligible securities for settlement obligations or short-selling strategies." },
                { title: "Portfolio Income Enhancement", icon: PieChart, desc: "Generate an additional stream of income by lending idle shares." },
                { title: "Online SLBM Transactions", icon: Zap, desc: "Access a secure online platform for transparent pricing and efficient execution." },
                { title: "Research-Based Selection", icon: Target, desc: "Get guidance on eligible securities based on comprehensive market analysis." },
                { title: "Dedicated Advisory", icon: BookOpen, desc: "Benefit from experts who guide you through the process and risk management." }
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-[#f8fafc] rounded-2xl border border-slate-200 hover:border-[#a7181e]/30 transition-all shadow-sm"
                  style={{ backgroundColor: "#f8fafc" }}
                >
                  <item.icon className="w-8 h-8 text-[#a7181e] mb-4" aria-hidden="true" />
                  <h4
                    className="font-bold text-slate-900 text-lg mb-2"
                    style={{ color: "#0f172a" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-[16px] text-slate-700 leading-relaxed"
                    style={{ color: "#334155" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div 
              className="bg-[#012e54] p-8 rounded-2xl text-white mb-12 shadow-md border border-black/5"
              style={{
                backgroundColor: "#012e54",
                backgroundImage: "linear-gradient(to bottom right, #006da0, #012e54)",
                color: "#ffffff"
              }}
            >
              <h3 className="text-xl font-bold mb-6 text-white" style={{ color: "#ffffff" }}>
                Why Choose SLBM with Ratnakar Securities?
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
                {["Simple and hassle-free process.", "Research-backed recommendations.", "Dedicated advisory support.", "Secure online trading platform.", "Transparent, exchange-regulated transactions.", "Timely market insights."].map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-[16px] text-white">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0" aria-hidden="true" /> {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Get Started */}
            <div
              className="mb-12 bg-[#f8fafc] p-8 rounded-2xl border border-slate-200"
              style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
            >
              <h3
                className="text-2xl font-bold text-slate-900 mb-6"
                style={{ color: "#0f172a" }}
              >
                How to Get Started
              </h3>
              <ol className="list-none space-y-2">
                {[
                  "Open a Demat and Trading Account.",
                  "Register for the SLBM facility.",
                  "Ensure eligible securities are in your Demat account.",
                  "Select securities and place your request online.",
                  "Monitor your earnings via the dashboard."
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="p-3 bg-white rounded-xl font-semibold text-[16px] flex items-start gap-3 border border-slate-200 shadow-xs"
                    style={{ backgroundColor: "#ffffff", color: "#334155" }}
                  >
                    <span
                      className="font-bold text-lg min-w-fit text-[#a7181e]"
                      style={{ color: "#a7181e" }}
                    >
                      {idx + 1}.
                    </span>
                    <span style={{ color: "#334155" }}>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h3
                className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"
                style={{ color: "#0f172a" }}
              >
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
                      id={`slbm-faq-btn-${idx}`}
                      aria-expanded={openIndex === idx}
                      aria-controls={`slbm-faq-panel-${idx}`}
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
                        id={`slbm-faq-panel-${idx}`}
                        role="region"
                        aria-labelledby={`slbm-faq-btn-${idx}`}
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
                <strong className="text-slate-900 font-bold" style={{ color: "#0f172a" }}>Disclaimer:</strong> SLBM is subject to SEBI regulations and market risks. Lending fees are not guaranteed. Please evaluate all risks before participating.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8 border-t border-slate-200">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex bg-[#a7181e] hover:bg-[#a7181e] text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg items-center justify-center gap-2 transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e] focus-visible:ring-offset-2"
                style={{ backgroundColor: "#a7181e", color: "#ffffff" }}
              >
                {product.buttonText || "Learn More / Contact Us Today"} <ChevronRight className="w-5 h-5" aria-hidden="true" />
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