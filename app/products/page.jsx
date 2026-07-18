import React from "react";
import Link from "next/link";
import Image from "next/image";
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
        height="h-[300px] md:h-[400px]" 
      />

      <section className="relative overflow-hidden bg-[#f7f9fc] py-16">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12 text-center">
            <div className="text-[14px] font-black tracking-widest uppercase mb-3 text-[#ea2830]">
              Investment Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight">
              Every investment need. One trusted roof.
            </h2>
          </div>

          {/* Grid with custom card style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {PRODUCTS_DATA.map((product) => (
              <Link
                href={`/products/${product.slug}`}
                key={product.id}
                className="group bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[240px] block"
              >
                {/* Content: Title/Desc Left, Image Icon Right */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-[20px] font-bold text-[#ea2830] mb-3 group-hover:text-[#00aeee] transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Image Icon resized to 64px from public folder */}
                  {/* ખાતરી કરો કે data.js માં iconPath આ રીતે સેટ કરેલ છે: "/images/icon/menu/Equity1.svg" */}
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
                <div className="mt-auto pt-4 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-[14px] font-bold text-gray-700 group-hover:text-[#ea2830] transition-colors">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-700 group-hover:text-[#ea2830] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}