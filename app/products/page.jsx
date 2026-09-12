import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/common/HeroSection";
import { PRODUCTS_DATA } from "./data";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Investment Products & Services | Ratnakar Securities",
  description: "Explore our range of investment options including equities, derivatives, mutual funds, commodities, bonds, wealth management, and SLBM services.",
  path: "/products",
});

/**
 * Products & Financial Services Catalog Hub Page
 * 
 * Displays the complete suite of Ratnakar Securities investment services
 * rendered from the centralized `PRODUCTS_DATA` catalog.
 */
export default function ProductsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Top Banner Section */}
      <HeroSection
        title="Our Products"
        breadcrumbs={[{ label: "Products" }]}
        image="/images/about/our product.jpg"
        mobileImage="/images/about/mobile banner/product mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      <section className="relative overflow-hidden bg-[#f7f9fc] py-16">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12 text-center">
            <div 
              className="text-[14px] font-black tracking-widest uppercase mb-3"
              style={{ color: "#a7181e" }}
            >
              Investment Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900 leading-tight" style={{ color: "#0f172a" }}>
              Every investment need. One trusted roof.
            </h2>
          </div>

          {/* Grid with custom card style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {PRODUCTS_DATA.map((product) => (
              <Link
                href={`/products/${product.slug}`}
                key={product.id}
                className="group bg-white border border-slate-200 rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[240px] block shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a7181e]"
                style={{ backgroundColor: "#ffffff" }}
              >
                {/* Content: Title/Desc Left, Image Icon Right */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 
                      className="text-[20px] font-bold mb-3 transition-colors duration-300"
                      style={{ color: "#a7181e" }}
                    >
                      {product.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed font-medium" style={{ color: "#334155" }}>
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Image Icon resized to 64px from public folder */}
                  <div className="flex-shrink-0 w-[64px] h-[64px] transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={product.iconPath}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Bottom Section with Arrow */}
                <div className="mt-auto pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[14px] font-bold transition-colors" style={{ color: "#1e293b" }}>
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: "#a7181e" }} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}