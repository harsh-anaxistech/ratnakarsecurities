import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";

const SERVICES_DATA = [
  {
    title: "EQUITIES",
    description:
      "Equity is undoubtedly one of the most captivating investment avenues that lure investors for the enticing returns it can generate. Investing in equities, however, is a matter of patience. As they say, buy right, hold tight.",
    iconName: "Equity-icon",
    href: "/equity",
  },
  {
    title: "DERIVATIVES",
    description:
      "Investing in derivatives enables you to leverage your current position and hedge the risk by safeguarding yourself against potential losses that unfavorable market movements may bring in future.",
    iconName: "Derivatives-icon",
    href: "/derivatives",
  },
  {
    title: "MUTUAL FUND",
    description:
      "Mutual Fund is a pool of small investments made by multiple investors in a particular plan to achieve a common financial goal. The mutual funds work with an objective of generating maximum returns out of the investment.",
    iconName: "mutualFund-icon",
    href: "/mutual-fund",
  },
  {
    title: "COMMODITIES",
    description:
      "Commodity market is as lucrative as trading in equity market. Besides, commodity trading is reckoned as an effective risk management and hedging tool.",
    iconName: "commodity-icon",
    href: "/commodities",
  },
  {
    title: "NRIS",
    description:
      "Ratnakar Securities offers a comprehensive range of investment options for NRIs backed by research and dedicated relationship management.",
    iconName: "NRI",
    href: "/nris",
  },
  {
    title: "WEALTH MANAGEMENT",
    description:
      "Protect, manage and grow your wealth with our comprehensive wealth management services and expert advisory.",
    iconName: "PFM",
    href: "/real-estate",
  },
  {
    title: "SLBS",
    description:
      "Security Lending and Borrowing Scheme helps improve liquidity and enables efficient portfolio management.",
    iconName: "SLBS-icon",
    href: "/slbs",
  },
  {
    title: "HNIS",
    description:
      "Tailor-made investment solutions with a dedicated Relationship Manager for all your investment requirements.",
    iconName: "HNIS",
    href: "/hnis",
  },
  // {
  //   title: "BONDS",
  //   description:
  //     "Secure investment opportunities backed by deep debt market expertise and unmatched research.",
  //   iconName: "Bonds-icon",
  //   href: "/bonds",
  // },
];

export default function InvestmentServices() {
  return (
    <section className="py-16">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Key Offerings
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: "1200px" }}
        >
          {SERVICES_DATA.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block h-[270px]"
            >
              <div
                className="relative h-full w-full duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s",
                }}
              >
                <div className="absolute inset-0 group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d] transition-transform duration-700">

                  {/* FRONT */}
                  <div className="absolute inset-0 rounded-xl shadow bg-muted [backface-visibility:hidden]">
                    <div className="flex h-full flex-col items-center justify-between p-8">
                      {/* Icon */}
                      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110">
                        <Image
                          src={`/images/icon/home/${service.iconName}.svg`}
                          alt={service.title}
                          width={70}
                          height={70}
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <div className="flex justify-center w-full">
                        <div className="w-64 rounded-full bg-white px-4 py-3 ">
                          <h3 className="text-center text-lg font-medium text-secondary">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* BACK */}
                  <div className="absolute inset-0 rounded-lg bg-primary p-7 text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col items-center justify-center">
                      <p className="text-center text-base leading-6 text-white/90 line-clamp-6">
                        {service.description}
                      </p>

                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}