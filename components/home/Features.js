import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

const SERVICES_DATA = [
  {
    title: "EQUITIES",
    iconName: "Equity-icon",
    href: "/equity",
  },
  {
    title: "DERIVATIVES",
    iconName: "Derivatives-icon",
    href: "/derivatives",
  },
  {
    title: "MUTUAL FUND",
    iconName: "mutualFund-icon",
    href: "/mutual-fund",
  },
  {
    title: "COMMODITIES",
    iconName: "commodity-icon",
    href: "/commodities",
  },
  {
    title: "NRIS",
    iconName: "NRI",
    href: "/nris",
  },
  {
    title: "WEALTH MANAGEMENT",
    iconName: "PFM",
    href: "/real-estate",
  },
  {
    title: "SLBS",
    iconName: "SLBS-icon",
    href: "/slbs",
  },
  {
    title: "HNIS",
    iconName: "HNIS",
    href: "/hnis",
  },
];

export default function InvestmentServices() {
  return (
    <section className="pb-16">
      <Container>
        <div className="mb-14 text-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl mt-3 font-semibold leading-tight text-foreground md:text-4xl">
              Investment opportunities
            </h2>
            <p className="mt-5 max-w-3xl text-base text-muted-foreground">
              Our comprehensive suite of financial products and services empowers investors
              with the right opportunities, expert insights, and seamless execution to
              achieve their investment objectives.
            </p>
          </div>
        </div>

        {/* Centered with mx-auto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {SERVICES_DATA.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block h-[140px] rounded-lg bg-white  shadow-card"
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full ">
                  <Image
                    src={`/images/icon/home/${service.iconName}.svg`}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-center text-md font-medium text-secondary ">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </Container>
      <div className="flex mt-10 justify-center">
        <Link
          href="/contact"
        >
          <Button variant="contained" color="secondary" rightIcon={<ArrowRight />} size="lg">
            Get Started
          </Button>
        </Link>
        {/* <Link
                href="#"
                className="transition duration-300 hover:-translate-y-1"
              >
                <Image
                  src="/images/mobile/googleplay.svg"
                  alt="Google Play"
                  width={180}
                  height={54}
                />
              </Link> */}
      </div>
    </section>
  );
}