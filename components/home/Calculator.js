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
    <section className="bg-white pb-12 md:pb-12">
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          {calculators.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex w-full items-center gap-6 rounded-2xl border border-gray-100 bg-gray-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#ea2830]/20 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(234,40,48,0.15)]"
            >
              {/* Icon Container */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#ea2830]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium mt-1 mb-3">
                  {item.subtitle}
                </p>
                <span className="inline-flex items-center text-sm font-bold text-[#ea2830] transition-transform duration-300 group-hover:translate-x-1">
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