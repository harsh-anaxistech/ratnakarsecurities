"use client"; // Required for interactivity

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, HelpCircle, AlertCircle, Plus, Minus } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import ProductSidebar from "@/components/common/ProductSidebar";
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
    <div className="bg-[#f7f9fc] min-h-screen pb-12">
      {/* Top Banner Section with Niche Image */}
      <HeroSection
        title={product.title}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.title }
        ]}
        image="/images/about/Derivatives f.jpg"
        mobileImage="/images/about/mobile banner/Derivatives mobile.jpg"
        height="h-[300px] md:h-[400px]"
        imagePosition="object-right sm:object-center"
      />

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ==========================================
              LEFT SIDE: TITLE & MAIN CONTENT BOX
          ========================================== */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-4 md:p-8">

            {/* Top Title & Tagline */}
            <div className="mb-8 pb-6 border-b border-black/5">
              <span className="inline-block px-3 py-1 bg-[#c41f26]/10 text-[#7f1d1d] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                {product.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight">
                {product.mainTitle}
              </h2>
            </div>

            {/* Niche Content */}
            <div className="max-w-none mb-12">
              <p className="text-[16px] leading-relaxed mb-6 text-slate-800">
                {product.description1}
              </p>

              {product.description2.split('\n').map((line, i) => (
                <p key={i} className="text-[16px] leading-relaxed mb-5 text-slate-800">
                  {line}
                </p>
              ))}

              <div
                className="mt-10 rounded-2xl p-8 border border-slate-200"
                style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
              >
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#0f172a" }}
                >
                  {product.featuresTitle}
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div
                        className="mt-1 p-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "#fee2e2", color: "#a7181e" }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#c41f26]" aria-hidden="true" />
                      </div>
                      <span
                        className="text-[16px] font-medium leading-relaxed"
                        style={{ color: "#0f172a" }}
                      >
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
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-black/5 hover:border-[#c41f26]/30 transition-all cursor-default">
                    <CheckCircle2 className="w-5 h-5 text-[#c41f26] shrink-0 mt-0.5 transition-all duration-300" />
                    <span className="text-[16px] text-slate-800 leading-relaxed">Leverage to amplify returns</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-black/5 hover:border-[#c41f26]/30 transition-all cursor-default">
                    <CheckCircle2 className="w-5 h-5 text-[#c41f26] shrink-0 mt-0.5 transition-all duration-300" />
                    <span className="text-[16px] text-slate-800 leading-relaxed">Hedging against market volatility</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-black/5 hover:border-[#c41f26]/30 transition-all cursor-default">
                    <CheckCircle2 className="w-5 h-5 text-[#c41f26] shrink-0 mt-0.5 transition-all duration-300" />
                    <span className="text-[16px] text-slate-800 leading-relaxed">Diversify across asset classes</span>
                  </div>
                  <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-black/5 hover:border-[#c41f26]/30 transition-all cursor-default">
                    <CheckCircle2 className="w-5 h-5 text-[#c41f26] shrink-0 mt-0.5 transition-all duration-300" />
                    <span className="text-[16px] text-slate-800 leading-relaxed">Access multiple markets from one platform</span>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#c41f26]" /> Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="rounded-xl border border-black/5 bg-slate-50 overflow-hidden">
                      <button
                        type="button"
                        id={`faq-btn-${idx}`}
                        aria-expanded={openIndex === idx}
                        aria-controls={`faq-panel-${idx}`}
                        onClick={() => toggleFAQ(idx)}
                        className="w-full p-4 md:p-5 text-left flex items-center justify-between gap-3 font-bold text-slate-900 text-[15px] md:text-[17px] hover:bg-slate-100 transition-colors"
                      >
                        <span className="flex-1 min-w-0">{faq.q}</span>
                        <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#c41f26]/10">
                          {openIndex === idx ? <Minus className="w-4 h-4 text-[#c41f26]" /> : <Plus className="w-4 h-4 text-[#c41f26]" />}
                        </span>
                      </button>
                      {openIndex === idx && (
                        <div
                          id={`faq-panel-${idx}`}
                          role="region"
                          aria-labelledby={`faq-btn-${idx}`}
                          className="px-5 pb-5 pt-0 text-slate-600 text-[16px] leading-relaxed"
                        >
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
              <div className="pt-6 md:pt-8 border-t border-black/5">
                <Link
                  href="/contact"
                  className="w-full md:w-auto inline-flex bg-[#c41f26] hover:bg-[#c41f26] text-white font-bold text-[15px] md:text-[16px] py-3.5 md:py-4 px-6 md:px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {product.buttonText}
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* ==========================================
              RIGHT SIDE: ALL PRODUCTS SIDEBAR
          ========================================== */}
          <ProductSidebar currentSlug={slug} />
        </div>
      </Container>
    </div>
  );
}