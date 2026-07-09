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
    <section className="bg-muted ">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 md:flex-row">
          {calculators.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group w-full md:w-1/2"
            >
              <div className="flex items-center gap-5 p-4">
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white ">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={42}
                    height={42}
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}