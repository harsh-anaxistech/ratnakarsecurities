"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";

const calculators = [
  {
    title: "SIP Calculator",
    subtitle: "Calculate returns for SIP investment",
    href: "https://sipcalculator.in/",
    icon: "/images/icon/home/sipcalc-icon_1.png",
  },
  {
    title: "Risk Calculator",
    subtitle: "Assess your financial risk appetite",
    href: "/risk-calculator",
    icon: "/images/icon/home/riskpro-icon_1.png",
  },
];

export default function CalculatorSection() {
  return (
    <section className="pb-12 bg-slate-50/50">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          {calculators.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group w-full flex items-center gap-6 p-6 rounded-2xl border border-slate-200 bg-white hover:border-[#00aeee]/30 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Icon Container - સ્ક્વેર લુક */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white to-blue-50 border border-slate-100 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#00aeee] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[14px] text-slate-500 font-medium mt-0.5 mb-2">
                  {item.subtitle}
                </p>
                <span className="inline-flex items-center text-xs font-bold text-[#ea2830] transition-transform duration-300 group-hover:translate-x-1 uppercase tracking-wider">
                  Calculate Now &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}