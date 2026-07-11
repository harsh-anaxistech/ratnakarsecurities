"use client";
import Link from "next/link";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        background:
          "radial-gradient(1200px 600px at 85% -10%, #1a6eb5 0%, #012e54 45%, #011628 100%)",
        padding: "96px 0 110px",
        color: "#fff",
      }}
      aria-label="Hero banner"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <div className="inline-block text-secondary text-xs font-bold tracking-widest uppercase mb-4 border border-secondary/40 rounded-full px-4 py-1.5">
              Full-Service Broking · Since 2001 · Ahmedabad
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              25 years of making{" "}
              <span className="text-secondary">money grow.</span>
              <br />
              <em className="not-italic text-white/80">Rest assured.</em>
            </h1>
            <p className="mt-6 mb-8 text-lg leading-relaxed max-w-xl" style={{ color: "#c8dff0" }}>
              Equity, mutual funds, commodities and wealth management — guided by
              dedicated relationship managers and research you can actually act on.
              One relationship, every investment need.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="contained" color="primary" size="lg" className="text-base font-bold">
                  Open an Account — Free
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outlined" color="secondary" size="lg" className="text-base">
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["SEBI Registered", "Member: NSE · BSE · NSDL", "MCX · NCDEX", "25,000+ Investors Trust Us"].map((chip) => (
                <span key={chip} className="text-xs font-semibold px-3 py-1.5 rounded-full border text-secondary" style={{ borderColor: "rgba(0,174,238,0.4)" }}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right — SVG Chart */}
          <div className="hidden lg:block">
            <div className="rounded-2xl p-6 border" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(0,174,238,0.25)", backdropFilter: "blur(4px)" }}>
              <svg viewBox="0 0 420 240" role="img" aria-label="Illustration of long-term portfolio growth" className="w-full h-auto">
                <defs>
                  <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00aeee" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#00aeee" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g stroke="rgba(0,174,238,0.15)" strokeWidth="1">
                  <line x1="0" y1="60" x2="420" y2="60" />
                  <line x1="0" y1="120" x2="420" y2="120" />
                  <line x1="0" y1="180" x2="420" y2="180" />
                </g>
                <path d="M0,210 C50,205 70,185 100,180 C140,173 150,150 190,142 C230,134 240,110 280,96 C320,82 340,60 420,30 L420,240 L0,240 Z" fill="url(#fade)" />
                <path
                  d="M0,210 C50,205 70,185 100,180 C140,173 150,150 190,142 C230,134 240,110 280,96 C320,82 340,60 420,30"
                  fill="none" stroke="#00aeee" strokeWidth="3.5" strokeLinecap="round"
                  className="draw"
                  style={{ strokeDasharray: 1200, strokeDashoffset: 1200, animation: "draw 2.2s ease-out 0.3s forwards" }}
                />
                <circle cx="420" cy="30" r="6" fill="#ea2830" />
              </svg>
              <div className="flex justify-between mt-3 text-xs" style={{ color: "#9fc8e0" }}>
                <span>Your portfolio, 2001 → 2026</span>
                <span className="font-bold text-secondary">Disciplined investing wins</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
      `}</style>
    </section>
  );
}