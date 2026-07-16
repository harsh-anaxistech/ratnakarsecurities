import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import { PRODUCTS_DATA } from "./data";

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Top Banner Section */}
      <HeroSection
        title="Our Products"
        breadcrumbs={[{ label: "Products" }]}
        image="/images/about/AboutUs-Ratnakarsec.png"
        height="h-[300px] md:h-[400px]" />

      <section className="relative overflow-hidden bg-[#f7f9fc] py-16">
        <div className="mx-auto w-full max-w-full px-4 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <div className="text-[14px] font-black tracking-widest uppercase mb-3 text-[#ea2830]">
              Investment Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight">
              Every investment need. One trusted roof.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {PRODUCTS_DATA.map((product) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.id}
                  className="group bg-white border border-black/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "linear-gradient(135deg, rgb(234, 40, 48), rgb(196, 31, 38))" }}
                    >
                      <Icon className="w-7 h-7 text-white" aria-hidden="true" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00aeee] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#ea2830] hover:text-[#00aeee] transition-colors"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#ea2830] group-hover:w-full transition-all duration-500"></div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}