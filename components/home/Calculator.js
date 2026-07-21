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
              // Updated background gradient and shadows here
              className="group w-full flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#00aeee] to-[#0088c2] shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
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

              {/* Text Content - Updated colors for readability on blue background */}
              <div>
                <h3 className="text-lg font-bold text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[14px] text-blue-100 font-medium mt-0.5 mb-2">
                  {item.subtitle}
                </p>
                <span className="inline-flex items-center text-xs font-bold text-white transition-transform duration-300 group-hover:translate-x-1 uppercase tracking-wider">
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