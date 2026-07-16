import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { PRODUCTS_DATA } from "../data";

export default function ProductDetailsPage() {
  const slug = "derivatives";
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-[#f7f9fc] min-h-screen pb-12">
      {/* Top Banner Section with Niche Image */}
      <HeroSection
        title={product.title}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.title }
        ]}
        image={product.imageSrc}
        height="h-[300px] md:h-[400px]" />

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ==========================================
              LEFT SIDE: TITLE & MAIN CONTENT BOX
          ========================================== */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-4 md:p-8">

            {/* Top Title & Tagline */}
            <div className="mb-8 pb-6 border-b border-black/5">
              <span className="inline-block px-3 py-1 bg-[#ea2830]/10 text-[#ea2830] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                {product.tagline}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight">
                {product.mainTitle}
              </h1>
            </div>

            {/* Niche Content */}
            <div className="max-w-none mb-12">
              <p className="text-[16px] leading-relaxed mb-6 text-[#314158]">
                {product.description1}
              </p>

              {product.description2.split('\n').map((line, i) => (
                <p key={i} className="text-[16px] leading-relaxed mb-5 text-[#314158]">
                  {line}
                </p>
              ))}

              <div className="mt-10 bg-slate-50 rounded-2xl p-8 border border-black/5">
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {product.featuresTitle}
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
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
                  {product.buttonText}
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </Link>
            </div>

          </div>

          {/* ==========================================
              RIGHT SIDE: ALL PRODUCTS SIDEBAR
          ========================================== */}
          <aside className="w-full lg:w-[30%] space-y-8">

            {/* Services List Box */}
            <div className="rounded-2xl shadow-lg p-6 sticky top-[100px]" style={{ background: "linear-gradient(180deg, #2a689b 0%, #1e4b75 100%)", color: "rgb(255, 255, 255)" }}>
              <h3 className="text-xl font-bold font-serif text-white mb-6 pb-4 border-b border-white/20 uppercase tracking-wide">
                Investment Options
              </h3>
              <ul className="space-y-3">
                {PRODUCTS_DATA.map((item) => {
                  const isActive = item.slug === slug;
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <Link
                        href={`/products/${item.slug}`}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group font-bold text-[16px] ${isActive
                            ? "bg-white text-[#ea2830] border-l-[3px] border-[#ea2830] shadow-md"
                            : "bg-white text-slate-800 border-l-[3px] border-transparent hover:bg-slate-50 hover:text-[#ea2830]"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 ${isActive ? "text-[#ea2830]" : "text-[#ea2830]"}`} />
                          <span>{item.title}</span>
                        </div>
                        <ChevronRight className={`w-5 h-5 transform transition-transform ${isActive ? "text-[#ea2830] translate-x-1" : "text-slate-400 group-hover:translate-x-1 group-hover:text-[#ea2830]"
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
