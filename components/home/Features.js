"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";

const SERVICES = [
  { id: "service-equity", icon: "/images/icon/menu/Equity 1.svg", title: "Equity", desc: "Our detailed research, acute investing insights, and real-time market data for your seamless equity investing experience.", href: "/products/equity" },
  { id: "service-derivatives", icon: "/images/icon/menu/derivatives 1.svg", title: "Derivatives", desc: "Your derivatives trading made simple and intuitive with our competitive rates, advanced platforms, and expert research.", href: "/products/derivatives" },
  { id: "service-mutual-funds", icon: "/images/icon/menu/mutual funds 1.svg", title: "Mutual Funds*", desc: "Invest in 5000+ Mutual Funds schemes with the added advantage of our research and ready-made baskets.", href: "/products/mutual-funds" },
  { id: "service-commodities", icon: "/images/icon/menu/commodities 1.svg", title: "Commodities", desc: "Lucrative market trading providing effective risk management and hedging tools.", href: "/products/commodities" },
  { id: "service-nris", icon: "/images/icon/menu/company 1.svg", title: "NRIs", desc: "Comprehensive investment options for foreign nationals, backed by extensive research.", href: "/products/nris" },
  { id: "service-wealth", icon: "/images/icon/menu/invesment 1.svg", title: "Wealth Management", desc: "Managing and growing your wealth through every stage of your life.", href: "/products/wealth-management" },
  { id: "service-slbs", icon: "/images/icon/menu/annual return 1.svg", title: "SLBs", desc: "Lend your stocks or borrow to increase liquidity and benefit from downturns.", href: "/products/slbs" },
  { id: "service-hnis", icon: "/images/icon/menu/leadership 1.svg", title: "HNIs", desc: "Tailormade investment solutions with a dedicated Relationship Manager for guidance.", href: "/products/hnis" },
  { id: "service-bonds", icon: "/images/icon/menu/Bonds 1.svg", title: "Fixed Income*", desc: "Fix your long-term wealth goals with our customized investment solutions, expert guidance, and stable performance.", href: "/products/bonds" },
];

export default function InvestmentServices() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-12">
      <Container>

        {/* Header */}
        <div className="mb-12 text-center">
          <div style={{ color: "#ea2830" }} className="text-[14px] font-black tracking-widest uppercase mb-3">
            Investment Opportunities
          </div>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight">
            Every investment need. One trusted roof.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SERVICES.map((s) => (
            <Link 
              href={s.href} 
              key={s.id}
              className="group bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[240px] block"
            >
              {/* Content */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-[20px] font-bold text-[#ea2830] mb-3 group-hover:text-[#00aeee] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>
                
                {/* Image Icon resized to 64px */}
                <div className="flex-shrink-0 w-[64px] h-[64px] transition-transform duration-500 group-hover:scale-110">
                  <Image 
                    src={s.icon} 
                    alt={s.title} 
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

      </Container>
    </section>
  );
}