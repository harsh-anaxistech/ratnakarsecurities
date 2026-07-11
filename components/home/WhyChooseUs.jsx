"use client";

import Container from "@/components/common/Container";
import { Users, Search, ShieldCheck, Home, Globe } from "lucide-react";

const REASONS = [
  {
    Icon: Users,
    title: "A Real Person, Not Just an App",
    desc: "Every client gets a dedicated relationship manager — one call away for advice, execution and reviews.",
  },
  {
    Icon: Search,
    title: "Research You Can Act On",
    desc: "In‑house company research, IPO notes and market insights — so your decisions are informed, not impulsive.",
  },
  {
    Icon: ShieldCheck,
    title: "Fully Regulated & Transparent",
    desc: "SEBI registered; member of NSE, BSE, NSDL, MCX and NCDEX. Your investments sit safely in your own demat.",
  },
  {
    Icon: Home,
    title: "Everything Under One Roof",
    desc: "Stocks, funds, commodities, bonds, insurance, PMS and real estate — one relationship covers it all.",
  },
  {
    Icon: Globe,
    title: "Specialist NRI & HNI Desks",
    desc: "Dedicated teams for non‑resident and high‑net‑worth investors, with tailored compliance and reporting.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20" style={{ background: "#011628", color: "#fff" }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left — sticky heading */}
          <div className="lg:sticky lg:top-28">
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#00aeee" }}>
              Why Choose Ratnakar Securities
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Relationships first.<br />Returns follow.
            </h2>
            <p className="mt-5 text-base leading-relaxed max-w-md" style={{ color: "#9fc8e0" }}>
              For 25 years, families across Gujarat and beyond have trusted us with their savings — because we treat every rupee like our own.
            </p>
          </div>

          {/* Right — reasons list */}
          <div className="divide-y" style={{ borderColor: "rgba(0,174,238,0.2)" }}>
            {REASONS.map((r) => (
              <div key={r.title} className="flex gap-5 py-6 group">
                {/* Icon box */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #ea2830, #c41f26)" }}>
                  <r.Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1.5" style={{ color: "#00aeee" }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#c8dff0" }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}