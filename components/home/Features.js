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
  { id: "service-equity", Icon: TrendingUp, title: "Equities", desc: "A captivating avenue for returns. Remember: buy right, hold tight.", href: "/products/equity" },
  { id: "service-derivatives", Icon: BarChart2, title: "Derivatives", desc: "Leverage your position and hedge risks against unfavorable market movements.", href: "/products/derivatives" },
  { id: "service-mutual-funds", Icon: PiggyBank, title: "Mutual Funds", desc: "A pool of small investments working together to achieve common financial goals.", href: "/products/mutual-funds" },
  { id: "service-commodities", Icon: Wheat, title: "Commodities", desc: "Lucrative market trading providing effective risk management and hedging tools.", href: "/products/commodities" },
  { id: "service-nris", Icon: Globe, title: "NRIs", desc: "Comprehensive investment options for foreign nationals, backed by extensive research.", href: "/products/nris" },
  { id: "service-wealth", Icon: Briefcase, title: "Wealth Management", desc: "Managing and growing your wealth through every stage of your life.", href: "/products/wealth-management" },
  { id: "service-slbs", Icon: RefreshCw, title: "SLBs", desc: "Lend your stocks or borrow to increase liquidity and benefit from downturns.", href: "/products/slbs" },
  { id: "service-hnis", Icon: Users, title: "HNIs", desc: "Tailormade investment solutions with a dedicated Relationship Manager for guidance.", href: "/products/hnis" },
  { id: "service-bonds", Icon: Lock, title: "Bonds", desc: "Secure mode of investment backed by our deep understanding of debt markets.", href: "/products/bonds" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SERVICES.map(({ Icon, title, desc, href }) => (
            <div
              key={title}
              // અહીં મેં border-black/10 ઉમેર્યું છે
              className="group bg-white border border-black/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #ea2830, #c41f26)" }}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00aeee] transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                  {desc}
                </p>
              </div>

              <div className="mt-5 pt-2">
                <Link
                  href={href}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#ea2830] hover:text-[#00aeee] transition-colors"
                >
                  <span>Learn more</span> 
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#ea2830] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
        
      </Container>
    </section>
  );
}