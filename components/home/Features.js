import Link from "next/link";
import Container from "@/components/common/Container";
import { ArrowRight, TrendingUp, BarChart2, PiggyBank, Wheat, Briefcase, Rocket, Globe, Lock, RefreshCw } from "lucide-react";

const SERVICES = [
  {
    Icon: TrendingUp,
    title: "Equity",
    desc: "Invest in India's growth story with research-backed stock ideas across NSE and BSE. Buy right, hold tight.",
    href: "/equity",
  },
  {
    Icon: BarChart2,
    title: "Derivatives",
    desc: "Hedge your positions and manage risk with futures & options strategies guided by our advisory desk.",
    href: "/derivatives",
  },
  {
    Icon: PiggyBank,
    title: "Mutual Funds & SIPs",
    desc: "Goal-based fund selection with easy SIP setup — build wealth systematically, one month at a time.",
    href: "/mutual-fund",
  },
  {
    Icon: Wheat,
    title: "Commodities",
    desc: "Trade gold, silver and agri commodities on MCX & NCDEX through Ratnakar Commodities Pvt. Ltd.",
    href: "/commodities",
  },
  {
    Icon: Briefcase,
    title: "Wealth Management",
    desc: "Structured portfolios and a dedicated relationship manager for HNIs — protecting and growing family wealth.",
    href: "/real-estate",
  },
  {
    Icon: Rocket,
    title: "IPOs",
    desc: "3-click IPO investing with ₹0 fee via UPI. 2-minute registration, allotment tracking included.",
    href: "/products",
  },
  {
    Icon: Globe,
    title: "NRI Desk",
    desc: "A specialized cell for NRIs — compliant, research-backed investing in Indian markets from anywhere.",
    href: "/nris",
  },
  {
    Icon: Lock,
    title: "Bonds & Fixed Income",
    desc: "Secure, steady returns through our deep understanding of India's debt markets.",
    href: "/products",
  },
  {
    Icon: RefreshCw,
    title: "SLBS",
    desc: "Lend the stocks you own, borrow the ones you don't — unlock liquidity from your existing portfolio.",
    href: "/slbs",
  },
];

export default function InvestmentServices() {
  return (
    <section className="py-20" style={{ background: "#f7f9fc" }}>
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Services We Offer</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark-navy leading-tight">
            Every investment need.<br />One trusted roof.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground mx-auto">
            From your first SIP to a full family portfolio — products and advice matched to your goals,
            risk profile and life stage.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ Icon, title, desc, href }) => (
            <div
              key={title}
              className="group bg-white border border-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20 relative overflow-hidden"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #ea2830, #c41f26)" }}
              >
                <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>

              <h3 className="text-base font-bold text-dark-navy mb-2 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>

              <Link
                href={href}
                className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Subtle accent line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}