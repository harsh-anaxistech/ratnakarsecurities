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
import ProductSidebar from "@/components/common/ProductSidebar";
import { PRODUCTS_DATA } from "../data";

export default function ProductDetailsPage() {
  const slug = "wealth-management";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  const [openIndex, setOpenIndex] = useState(null);

  if (!product) notFound();

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    { q: "What is Wealth Management?", a: "Wealth Management is a comprehensive financial advisory service that combines investment management, financial planning, tax planning, retirement planning, risk management, and wealth preservation into a personalized financial strategy." },
    { q: "Who should use Wealth Management services?", a: "Wealth Management is suitable for individuals and families seeking professional guidance to grow, manage, and preserve their wealth while achieving long-term financial goals." },
    { q: "How is Wealth Management different from Investment Management?", a: "Investment Management primarily focuses on managing investment portfolios, whereas Wealth Management provides a broader approach that includes financial planning, tax strategies, retirement planning, estate planning, insurance, and overall wealth preservation." },
    { q: "Can Wealth Management help with retirement planning?", a: "Yes. Wealth Management services include retirement planning by creating customized investment strategies that aim to build a sustainable retirement corpus based on your future financial requirements." },
    { q: "How often is my portfolio reviewed?", a: "Your investment portfolio is reviewed periodically based on market conditions, investment performance, and changes in your financial objectives to ensure it remains aligned with your long-term goals." },
    { q: "Is Wealth Management suitable for first-time investors?", a: "Yes. Whether you are a first-time investor or an experienced individual with a diversified portfolio, Wealth Management services can provide structured financial guidance tailored to your investment journey." }
  ];

  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-12">
      <HeroSection
        title={product.title}
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: product.title }]}
        image="/images/about/Wealth Management.jpg"
        mobileImage="/images/about/mobile banner/wealth management mobile_.jpg"
        height="h-[300px] md:h-[400px]"
        className="object-top"
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
                Wealth Management is a comprehensive financial planning and investment solution designed to help individuals, families, and businesses preserve, grow, and transfer their wealth efficiently. It combines investment management, financial planning, tax-efficient strategies, risk management, retirement planning, and estate planning into a personalized approach that aligns with your financial goals and life aspirations.
              </p>
              <p className="text-[16px] text-slate-700 leading-relaxed mb-6" style={{ color: "#334155" }}>
                As your financial needs evolve through different stages of life, your investment strategy should evolve as well. Whether you are building wealth, planning for retirement, funding your children's education, or protecting your legacy, professional wealth management ensures your financial resources are working effectively for your future.
              </p>
              <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
                At Ratnakar Securities, we provide personalized Wealth Management Services backed by experienced relationship managers, in-depth market research, and customized investment strategies. Our goal is to help clients achieve sustainable wealth creation while managing risk through diversified investment solutions and continuous portfolio monitoring.
              </p>
            </div>

            {/* Solutions */}
            <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>Wealth Management Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Personalized Financial Planning", icon: BookOpen, desc: "Receive a customized financial roadmap based on your income, lifestyle, financial objectives, and future aspirations." },
                { title: "Investment Portfolio Management", icon: TrendingUp, desc: "Build a diversified portfolio across equities, mutual funds, bonds, ETFs, and other investment products." },
                { title: "Retirement Planning", icon: Target, desc: "Create a retirement strategy that helps you build a financially secure future through disciplined investing." },
                { title: "Tax-Efficient Investment Planning", icon: ShieldCheck, desc: "Optimize your investments by selecting tax-efficient products and strategies that align with prevailing tax regulations." },
                { title: "Risk Management & Insurance", icon: Zap, desc: "Protect your family's financial future through suitable insurance solutions and risk management strategies." },
                { title: "Estate & Succession Planning", icon: PieChart, desc: "Plan for the smooth transfer of wealth to future generations while safeguarding your family's financial interests." }
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
                  {["Personalized investment strategies.", "Professional portfolio diversification.", "Comprehensive financial planning.", "Long-term wealth creation.", "Continuous portfolio monitoring."].map((b, i) => (
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
                  {["Personalized advisory services.", "Dedicated Relationship Manager.", "Research-driven recommendations.", "Diversified investment opportunities.", "Advanced digital platform."].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[16px] text-white"><CheckCircle2 className="w-5 h-5 text-white shrink-0" aria-hidden="true" /> {b}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who Should Choose */}
            <div 
              className="rounded-2xl p-8 mb-12 border border-slate-200 shadow-sm"
              style={{ backgroundColor: "#f8fafc" }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6" style={{ color: "#0f172a" }}>Who Should Choose Wealth Management?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["High Net Worth Individuals (HNIs)", "Business owners and entrepreneurs", "Salaried professionals", "Corporate executives", "Families seeking long-term security", "Retired individuals"].map((s, i) => (
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
                      id={`wm-faq-btn-${idx}`}
                      aria-expanded={openIndex === idx}
                      aria-controls={`wm-faq-panel-${idx}`}
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
                        id={`wm-faq-panel-${idx}`}
                        role="region"
                        aria-labelledby={`wm-faq-btn-${idx}`}
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
                <strong className="font-bold text-slate-900" style={{ color: "#0f172a" }}>Disclaimer:</strong> Investments in securities are subject to market risks. Wealth Management services provide guidance but do not guarantee returns. Please read all related documents carefully.
              </p>
            </div>

            {/* CTA Link */}
            <div className="pt-8 border-t border-black/5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e] focus-visible:ring-offset-2"
                style={{ backgroundColor: "#a7181e", color: "#ffffff" }}
              >
                {product.buttonText || "Get In Touch Today"} <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <ProductSidebar currentSlug={slug} />
        </div>
      </Container>
    </div>
  );
}