import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";

const calculators = [
  {
    title: "SIP Calculator",
    href: "/sip-calculator",
    icon: "/images/icon/home/sipcalc-icon_1.png",
  },
  {
    title: "Risk Calculator",
    href: "/risk-calculator",
    icon: "/images/icon/home/riskpro-icon_1.png",
  },
];

export default function CalculatorSection() {
  return (
    <section className="bg-[#f4f5f7]/60 py-12 md:py-16 border-t border-gray-100">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16 md:gap-24">
          {calculators.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-center gap-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl p-2 transition-all duration-300"
            >
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_30px_rgba(234,40,48,0.1)]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={42}
                  height={42}
                  className="object-contain transition-transform duration-300 group-hover:rotate-6"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#012e54] transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500 font-medium group-hover:text-primary/80 transition-colors">
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