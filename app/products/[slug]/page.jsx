import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { PRODUCTS_DATA } from "../data";

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailsPage({ params }) {
  const { slug } = params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-[#f7f9fc] min-h-screen pb-20">
      {/* Top Banner Section with Niche Image */}
      <HeroSection
        title={product.title}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.title }
        ]}
        image={product.imageSrc}
        height="h-[400px]"
      />

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ==========================================
              LEFT SIDE: TITLE & MAIN CONTENT BOX
          ========================================== */}
          <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow-sm border border-black/5 p-4 md:p-8">

            {/* Top Title & Tagline */}
            <div className="mb-10 pb-8 border-b border-black/5">
              <span className="inline-block px-3 py-1 bg-[#ea2830]/10 text-[#ea2830] font-bold text-xs tracking-widest rounded-full uppercase mb-4">
                {product.tagline}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                {product.mainTitle}
              </h1>
            </div>

            {/* Niche Content */}
            <div className="prose prose-lg max-w-none text-slate-600 mb-12">
              <p className="text-xl leading-relaxed mb-8 font-medium text-slate-700">
                {product.description1}
              </p>

              {product.description2.split('\n').map((line, i) => (
                <p key={i} className="leading-relaxed mb-5">
                  {line}
                </p>
              ))}

              <div className="mt-12 bg-slate-50 rounded-2xl p-8 border border-black/5">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {product.featuresTitle}
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-[#ea2830]/10 p-1.5 rounded-full text-[#ea2830] shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-slate-700 font-medium leading-relaxed">
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
                  className="bg-[#ea2830] hover:bg-[#c41f26] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  {product.buttonText}
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1.5 transition-transform" />
                </Button>
              </Link>
            </div>

          </div>

          {/* ==========================================
              RIGHT SIDE: ALL PRODUCTS SIDEBAR
          ========================================== */}
          <aside className="w-full lg:w-[30%] space-y-8">

            {/* Services List Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-6 sticky top-[100px]">
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-black/5 uppercase tracking-wide">
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
                        className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 group font-bold ${isActive
                            ? "bg-[#ea2830] text-white shadow-md"
                            : "bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-[#ea2830]"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#ea2830]"}`} />
                          <span>{item.title}</span>
                        </div>
                        <ChevronRight className={`w-5 h-5 transform transition-transform ${isActive ? "text-white translate-x-1" : "text-slate-400 group-hover:translate-x-1 group-hover:text-[#ea2830]"
                          }`} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Contact Box */}
            <div
              className="rounded-2xl p-8 text-white relative overflow-hidden group shadow-lg"
              style={{ background: "linear-gradient(135deg, rgb(234, 40, 48), rgb(196, 31, 38))" }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Need Expert Advice?</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Our financial experts are here to guide you through your investment journey.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full bg-white text-[#ea2830] font-bold py-3.5 px-6 rounded-xl transition-transform hover:-translate-y-1 shadow-md"
                >
                  Contact Us Today
                </Link>
              </div>
              {/* Decorative Circles */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>

          </aside>

        </div>
      </Container>
    </main>
  );
}
