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
    alignRight: true,
  },
  {
    title: "DERIVATIVES",
    description:
      "Investing in derivatives enables you to leverage your current position and hedge the risk by safeguarding yourself against potential losses that unfavorable market movements may bring in future.",
    iconName: "Derivatives-icon",
    href: "/derivatives",
    alignRight: false,
  },
  {
    title: "MUTUAL FUND",
    description:
      "Mutual Fund is a pool of small investments made by multiple investors in a particular plan to achieve a common financial goal. The mutual funds work with an objective of generating maximum returns out of the investment.",
    iconName: "mutualFund-icon",
    href: "/mutual-fund",
    alignRight: true,
  },
  {
    title: "COMMODITIES",
    description:
      "Commodity market is as lucrative as trading in equity market. Besides, commodity trading is reckoned as an effective risk management and hedging tool. We, Ratnakar Commodities Pvt. Ltd.",
    iconName: "commodity-icon",
    href: "/commodities",
    alignRight: false,
  },
  {
    title: "NRIS",
    description:
      "NRI If you're a foreign national and live abroad OR you're a Non-Resident Indian (NRI) investor, Ratnakar Securities offers a comprehensive range of investment options for you. Backed by our extensive research and a dedicated team that understands your needs, we turn your investments in opportunity to prosper.",
    iconName: "NRI",
    href: "/nris",
    alignRight: true,
  },
  {
    title: "WEALTH MANAGEMENT (PFM)",
    description:
      "At every stage of your lifetime, your financial goals may vary. At Ratnakar, we understand you and your priorities and go extent in protecting, managing and growing your wealth with our well-structured and comprehensive suite of wealth management services.",
    iconName: "PFM",
    href: "/real-estate",
    alignRight: false,
  },
  {
    title: "SLBS",
    description:
      "Through Security Landing and Borrowing Schemes (SLBS), Ratnakar Securities can help you lend your own stocks while borrowing the ones, you don't own! SLBS helps you increase your liquidity while helping you in benefit from the downturn by short selling your stocks.",
    iconName: "SLBS-icon",
    href: "/slbs",
    alignRight: true,
  },
  {
    title: "HNIS",
    description:
      "Ratnakar Securities offer tailormade and comprehensive investment solutions across diverse asset categories, helping you make the most from them. We assign a dedicated Relationship Manager as a one-point contact, to guide you and attend all your investment related needs including Portfolio Management Services, Mutual Funds, Insurance etc.",
    iconName: "HNIS",
    href: "/hnis",
    alignRight: false,
  },
  {
    title: "BONDS",
    description:
      "Bonds are gradually emerging as effective yet a very secure mode of investments in recent times. Ratnakar Securities understand 'Bonds' like none and with our deep understanding of the debt markets and unmatched research.",
    iconName: "Bonds-icon",
    href: "/bonds",
    alignRight: true,
  },
];

export default function InvestmentServices() {
  return (
    <section className="w-full py-10">
      <Container>
        <div className="flex justify-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Key Offerings
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {SERVICES_DATA.map((service) => {
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative  flex-col p-8 rounded-sm bg-muted border border-border transition-all duration-300  block space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className=" flex items-center justify-center w-12 h-12 rounded-sm bg-secondary transition-colors group-hover:bg-primary">
                    <Image
                      src={`/images/icon/home/${service.iconName}.svg`}
                      alt={`${service.title} icon`}
                      width={24}
                      height={24}
                      className="object-contain transition-all group-hover:invert group-hover:brightness-0"
                    />
                  </div>

                  <h3 className="text-2xl font-medium text-foreground  group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div>
                  <p className="text-muted-foreground text-base">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
