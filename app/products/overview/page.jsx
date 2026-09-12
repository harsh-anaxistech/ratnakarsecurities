import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import ProductSidebar from "@/components/common/ProductSidebar";
import { PRODUCTS_DATA } from "../data";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Products & Services Overview | Ratnakar Securities",
  description: "Get a comprehensive overview of how Ratnakar Securities can help you manage and grow your wealth with advanced technology and research.",
  path: "/products/overview",
});

/**
 * Products & Financial Services Comprehensive Overview Page
 * 
 * Summarizes the entire exchange membership ecosystem, technology infrastructure,
 * and wealth management methodology of Ratnakar Securities.
 */
export default function OverviewPage() {
  const content = {
    tagline: "OVERVIEW",
    mainTitle: "Invest at Ease with Ratnakar",
    description1: "Emerging as one of the leading broking houses and investment advisors in India, Ratnakar Securities is a member of NSE, BSE, MSEI, MCX, NCDEX and a depository participant with CDSL. Also, registered as a distributor with AMFI, our mutual funds vertical has partnered with 30+ AMC’s to get you the best schemes fitting your needs.",
    description2: [
      "Offering you the most hassle-free investment and trading experience through our cutting-edge investment platforms and financial solutions, tailormade to your needs.",
      "Simply put, we help you maximize your wealth, while minimizing risks!"
    ],
    featuresTitle: "Why Ratnakar?",
    features: [
      "Research and Advisory driven approach - Tailormade to your needs",
      "Transparent services at affordable rates",
      "Our objectives tied to our customers’ success",
      "Investment Platforms backed by robust technology framework - Easy, Fast and Secure",
      "Round the clock assistance"
    ],
    buttonText: "GET A CALL BACK",
    imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
  };

  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-12">
      {/* Top Banner Section with Niche Image */}
      <HeroSection
        title="Products Overview"
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Overview" }
        ]}
        image="/images/about/Products Overview.jpg"
        mobileImage="/images/about/mobile banner/product overview mobile.jpg"
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
              <span className="inline-block px-3 py-1 bg-[#ea2830]/10 text-[#7f1d1d] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                {content.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight">
                {content.mainTitle}
              </h2>
            </div>

            {/* Niche Content */}
            <div className="max-w-none mb-12">
              <p className="text-[16px] leading-relaxed mb-6 text-slate-800">
                {content.description1}
              </p>

              {content.description2.map((line, i) => (
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
                  {content.featuresTitle}
                </h3>
                <ul className="space-y-4">
                  {content.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div
                        className="mt-1 p-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "#fee2e2", color: "#a7181e" }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#ea2830]" aria-hidden="true" />
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
            </div>

            {/* Button at the last */}
            <div className="pt-8 border-t border-black/5">
              <Link
                href="/contact"
                className="inline-flex bg-[#ea2830] hover:bg-[#c41f26] text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {content.buttonText}
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>

          {/* ==========================================
              RIGHT SIDE: ALL PRODUCTS SIDEBAR
          ========================================== */}
          <ProductSidebar currentSlug="overview" />

        </div>
      </Container>
    </div>
  );
}
