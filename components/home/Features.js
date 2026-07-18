"use client";
import React from "react";
import Link from "next/link";
import Container from "@/components/common/Container";
import {
  ArrowRight,
  TrendingUp,
  BarChart2,
  PiggyBank,
  Wheat,
  Briefcase,
  Globe,
  Lock,
  RefreshCw,
  Users
} from "lucide-react";

const SERVICES = [
  { id: "service-equity", Icon: TrendingUp, title: "Equity", desc: "Our detailed research, acute investing insights, and real-time market data for your seamless equity investing experience.", href: "/products/equity" },
  { id: "service-derivatives", Icon: BarChart2, title: "Derivatives", desc: "Your derivatives trading made simple and intuitive with our competitive rates, advanced platforms, and expert research.", href: "/products/derivatives" },
  { id: "service-mutual-funds", Icon: PiggyBank, title: "Mutual Funds*", desc: "Invest in 5000+ Mutual Funds schemes with the added advantage of our research and ready-made baskets.", href: "/products/mutual-funds" },
  { id: "service-commodities", Icon: Wheat, title: "Commodities", desc: "Lucrative market trading providing effective risk management and hedging tools.", href: "/products/commodities" },
  { id: "service-nris", Icon: Globe, title: "NRIs", desc: "Comprehensive investment options for foreign nationals, backed by extensive research.", href: "/products/nris" },
  { id: "service-wealth", Icon: Briefcase, title: "Wealth Management", desc: "Managing and growing your wealth through every stage of your life.", href: "/products/wealth-management" },
  { id: "service-slbs", Icon: RefreshCw, title: "SLBs", desc: "Lend your stocks or borrow to increase liquidity and benefit from downturns.", href: "/products/slbs" },
  { id: "service-hnis", Icon: Users, title: "HNIs", desc: "Tailormade investment solutions with a dedicated Relationship Manager for guidance.", href: "/products/hnis" },
  { id: "service-bonds", Icon: Lock, title: "Fixed Income*", desc: "Fix your long-term wealth goals with our customized investment solutions, expert guidance, and stable performance.", href: "/products/bonds" },
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
          {SERVICES.map(({ Icon, title, desc, href }) => (
            <Link 
              href={href} 
              key={title}
              className="group bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[240px] block"
            >
              {/* Content */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-[20px] font-bold text-[#ea2830] mb-3 group-hover:text-[#00aeee] transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                    {desc}
                  </p>
                </div>
                
                {/* Large Icon on the right side */}
                <div className="flex-shrink-0">
                  <Icon 
                    className="w-[70px] h-[70px] text-gray-200 group-hover:text-[#ea2830] transition-colors duration-500" 
                    strokeWidth={1.2} 
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