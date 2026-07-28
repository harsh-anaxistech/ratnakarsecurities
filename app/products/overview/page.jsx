import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { PRODUCTS_DATA } from "../data";

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
              <span className="inline-block px-3 py-1 bg-[#ea2830]/10 text-[#ea2830] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                {content.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight">
                {content.mainTitle}
              </h2>
            </div>

            {/* Niche Content */}
            <div className="max-w-none mb-12">
              <p className="text-[16px] leading-relaxed mb-6 text-[#314158]">
                {content.description1}
              </p>

              {content.description2.map((line, i) => (
                <p key={i} className="text-[16px] leading-relaxed mb-5 text-[#314158]">
                  {line}
                </p>
              ))}

              <div className="mt-10 bg-slate-50 rounded-2xl p-8 border border-black/5">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {content.featuresTitle}
                </h3>
                <ul className="space-y-4">
                  {content.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-[#ea2830]/10 p-1.5 rounded-full text-[#ea2830] shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-[16px] text-[#314158] font-medium leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Button at the last */}
            <div className="pt-8 border-t border-black/5">
              <Link href="/contact">
                <Button
                  variant="contained"
                  className="bg-[#ea2830] hover:bg-[#c41f26] text-white font-bold text-[16px] py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  {content.buttonText}
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </Link>
            </div>

          </div>

          {/* ==========================================
              RIGHT SIDE: ALL PRODUCTS SIDEBAR
          ========================================== */}
          <aside className="w-full lg:w-[30%] space-y-8">
            <div className="rounded-2xl shadow-lg p-6 sticky top-[100px]" style={{ background: "linear-gradient(180deg, #2a689b 0%, #1e4b75 100%)", color: "rgb(255, 255, 255)" }}>
              <h3 className="text-xl font-bold font-serif text-white mb-6 pb-4 border-b border-white/20 uppercase tracking-wide">
                Investment Options
              </h3>
              <ul className="space-y-3">
                {PRODUCTS_DATA.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/products/${item.slug}`}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group font-bold text-[16px] bg-white/10 text-white border-l-[3px] border-transparent hover:bg-white hover:text-[#ea2830]`}
                      >
                        <div className="flex items-center gap-3">
                          <span>{item.title}</span>
                        </div>
                        <ChevronRight className={`w-5 h-5 transform transition-transform text-white/60 group-hover:translate-x-1 group-hover:text-[#ea2830]`} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

        </div>
      </Container>
    </div>
  );
}
