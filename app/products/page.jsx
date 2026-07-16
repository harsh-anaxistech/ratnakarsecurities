"use client";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, CheckCircle2, TrendingUp, ShieldCheck, PieChart, Landmark, Briefcase, Globe, FileText, BadgePercent, Building2, Info } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import HeroSection from "@/components/common/HeroSection";
import { cn } from "@/lib/utils";

// ==========================================
// DATA SETUP FOR ALL TABS
// ==========================================
const TABS_DATA = [
  {
    id: "Overview",
    title: "OVERVIEW",
    icon: Info,
    tagline: "OVERVIEW",
    mainTitle: "Invest at Ease with Ratnakar",
    description1:
      "Emerging as one of the leading broking houses and investment advisors in India, Ratnakar Securities is a member of NSE, BSE, MSEI, MCX, NCDEX and a depository participant with CDSL. Also, registered as a distributor with AMFI, our mutual funds vertical has partnered with 30+ AMC’s to get you the best schemes fitting your needs.",
    description2:
      "Offering you the most hassle-free investment and trading experience through our cutting-edge investment platforms and financial solutions, tailormade to your needs.\n\nSimply put, we help you maximize your wealth, while minimizing risks!",
    featuresTitle: "Why Ratnakar?",
    features: [
      "Research and Advisory driven approach - Tailormade to your needs",
      "Transparent services at affordable rates",
      "Our objectives tied to our customers’ success",
      "Investment Platforms backed by robust technology framework - Easy, Fast and Secure",
      "Round the clock assistance",
    ],
    imageSrc: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
    buttonText: "GET A CALL BACK",
  },
  {
    id: "Equity",
    title: "EQUITY",
    icon: TrendingUp,
    tagline: "SELL",
    mainTitle: "No One Understands Equities, as We Do",
    description1:
      "Backed by a thorough research and comprehensive analysis, our ‘Equities’ division lets you trade across equities and exchanges. Driven by the passion to succeed, our equity experts strive to maximize your returns while minimize risks in this uncertain yet, exciting Indian Financial Markets.",
    description2:
      "From comprehensive insights into the equity markets to live stock prices, from days’ top gainers and losers to recommended stock picks and more - we got you covered, all!",
    featuresTitle: "Why Invest in Equities with Ratnakar?",
    features: [
      "Equity SIP Feature - A disciplined approach that helps you invest in key stocks, periodically",
      "Open your trading account in just 24 hours - Quick and hassle-free",
      "Real time portfolio monitoring",
      "Tailormade alerts to help you buy or sell preferred stocks, just at right price",
    ],
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    buttonText: "Open Your Trading Account",
  },
  {
    id: "Derivatives",
    title: "DERIVATIVES",
    icon: ShieldCheck,
    tagline: "HEDGE",
    mainTitle: "Derivates Done Well with Ratnakar",
    description1:
      "With derivatives, investors can enjoy the liquidity and flexibility of equity markets while safeguard their investments against the future risk.",
    description2:
      "At Ratnakar, with investments in Derivatives, we enable to leverage your current position and hedge the risk by safeguarding your investments against potential losses of future.\n\nWe facilitate Currency Futures, Currency Trading, as well as the quintessential forms of derivative trading, Futures and Options.\n\nWe facilitate arbitrage, hedging, margin trade and all so that you make profits, you deserve.",
    featuresTitle: "Why Ratnakar?",
    features: [
      "We make F&O trading simpler and easier",
      "Our advisory services equip investors with knowledge and techniques to succeed",
      "Derivative reports and recommendations, that may yield good returns with lesser risk",
    ],
    imageSrc: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
    buttonText: "Know More / Contact Us Today",
  },
  {
    id: "Mutual",
    title: "MUTUAL FUNDS",
    icon: PieChart,
    tagline: "GROW",
    mainTitle: "Mutual Funds Sahi Hai, with Ratnakar",
    description1:
      "In recent years, Mutual Funds have emerged as smart and viable alternative to stock markets. A professionally and skillfully managed investment option with flexibility to invest in equities, debt, government bonds, industry sectors and segments of your choice",
    description2:
      "Our wide and reliable network of affiliatesbacked by our proprietary research and-\n\nadvisory driven recommendations help mutual funds investors grow their wealth while keeping a tab on their goal attainment.\n\nSo, if you’re looking at saving tax, growing your wealth with minimal risk OR looking at long-term investments, our mutual fund affiliates help you accomplish all, with ease.",
    featuresTitle: "Ratnakar Advantage - When You Invest in Mutual Funds",
    features: [
      "Safe and secure investments - All Mutual Funds are registered with SEBI",
      "Portfolio diversification helps you minimize risk",
      "Choice and flexibility of choosing funds to meet your investment needs and financial goals",
      "Dedicated customer support to meet your tailormade needs",
    ],
    imageSrc: "/mutual_funds_tab.png",
    buttonText: "Start Investing Today",
  },
  {
    id: "Commodities",
    title: "COMMODITIES",
    icon: Landmark,
    tagline: "DIVERSIFY",
    mainTitle: "Commodities Checked Well with Ratnakar",
    description1:
      "A right mix of equities and commodities in your investment portfolio can help you benefit with attractive returns, while reducing or hedging the overall risk",
    description2:
      "At Ratnakar, we trade in commodities only through the client-based business and not the ‘proprietary trade’.\n\nWe help our clients invest in the commodities futures trading through MCX and NCDEX exchanges under standard contracts.\n\nWe facilitate trading in spot markets (commodities bought / sold for immediate delivery) or in futures market (commodities traded as derivatives).",
    featuresTitle: "Why Ratnakar?",
    features: [
      "We make client-based business in commodities trading simpler and easier",
      "Our commodity researchequips investors with knowledge to gain profits at minimal risk",
    ],
    imageSrc: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=2000&auto=format&fit=crop",
    buttonText: "Know More / Contact Us Today",
  },
  {
    id: "Real",
    title: "REAL ESTATE",
    icon: Building2,
    tagline: "INVEST",
    mainTitle: "Dealing in Real Estates? Ratnakar Makes it Simple!",
    description1:
      "Planning to invest in real estate? At Ratnakar,we do all the homework for you. We offer expert consultancy and well researched real estate investment solutions. Whether you are looking for a residential property or commercial one, looking to rent or lease properties, we will help you get the best deal for the property that best meets your preferences.",
    description2:
      "We work in affiliation with the builders and have strong network of associates so that you have an edge over conventional routes of investment in property. Our networking enables you to get bulk rate deals from the builders/associates and hence makes the best buy possible. We help you buy or sell residential properties, commercial properties and land.",
    featuresTitle: "Why Ratnakar?",
    features: [
      "Our networking and comprehensive know-how of the real estate work best for you",
      "We do all the homework and paperwork for you so that you relax and benefit",
      "Residential Properties, Commercial Properties OR Land, we covered you all",
      "Buy, rent or lease we help you with everything",
    ],
    imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    buttonText: "GET A CALL BACK",
  },
  {
    id: "Wealth",
    title: "WEALTH MANAGEMENT",
    icon: Briefcase,
    tagline: "PROTECT",
    mainTitle: "Comprehensive Wealth Management Services for Every Stage of Life",
    description1:
      "At every stage of your lifetime, your financial goals may vary. At Ratnakar, we understand you and your priorities and go extent in protecting, managing and growing your wealth with our well-structured and comprehensive suite of wealth management services.",
    description2:
      "At Ratnakar Securities, we understand the value of your time and the opportunities it holds for you.\n\nYour personal finances will get the attention they deserve while you attend to your business and professional needs. Our tailor-made Wealth Management Services created exclusively for valued customers like you for managing and enhancing your wealth. Your dedicated Relationship (Wealth) Manager is backed by a structured research and a team of financial experts to bring you best-in-class financial solutions for your different needs.",
    featuresTitle: "Why Ratnakar?",
    features: [
      "Safe and secure investments - Backed by thorough research and tailormade to your needs",
      "Diverse investments to help you minimize risk",
      "Wider network of Financial Service Providers (Affiliates) for your Investments, Insurance and Loan needs",
      "Choice and flexibility of choosing investment and protection solution to meet your financial needs",
      "Dedicated Relationship (Wealth) Manager to support you 24X7, 365 days",
    ],
    imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
    buttonText: "Click Here to Enroll",
  },
  {
    id: "NRIs",
    title: "NRIs",
    icon: Globe,
    tagline: "CONNECT",
    mainTitle: "Investing in India Made Simpler with Ratnakar",
    description1:
      "If you’re a foreign national and live abroad OR you’re a Non-Resident Indian (NRI) investor, Ratnakar Securities offers a comprehensive range of investment options for you. Backed by our extensive research and a dedicated team that understands your needs, we turn your investments in opportunity to prosper.",
    description2:
      "Here are the investment options you can explore with us;\n\nFinancial Advisors\nOur qualified team of financial advisors can help you invest in stocks of Indian companies, in a secondary market. By investing in mutual funds, you can benefit by indirect participation in the stock market.\n\nReal Estate Investments\nOur Real Estate expert team offers you an excellent opportunity to invest in the blooming real estate market in India via investment in commercial or residential properties. From the research to connecting you with the buyer / seller to helping you with all the contractual and legal formalities, we’ll be there for all.",
    featuresTitle: "Why invest with Ratnakar?",
    features: [
      "A dedicated team that understands your needs and your goals",
      "Thorough research backed by our extensive network of affiliates",
      "Availability of resources per your convenience",
      "A tailormade investment options to suit your risk & return profile",
    ],
    imageSrc: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    buttonText: "Apply for our NRI Services Today",
  },
  {
    id: "SLBS",
    title: "SLBS",
    icon: FileText,
    tagline: "LEND",
    mainTitle: "Why let your stocks sit idle when they can earn ‘extra’?",
    description1:
      "Security Landing and Borrowing Scheme\nBy helping you trade through Security Landing and Borrowing Schemes (SLBS), Ratnakar Securities can help you lend your own stocks while borrowing the ones, you don’t own! SLBS helps you increase your liquidity while helping you in benefit from the downturn by short selling your stocks.",
    description2:
      "Our SLBS services include thorough equity research, monitoring selective stocks / schemes and most importantly the advice that always ticks profits and higher return on your investments.",
    featuresTitle: "Why invest with Ratnakar?",
    features: [
      "Comprehensive investment and advisory for you and for your business",
      "We take care of all the headache from lending to borrowing so that you can sit, relax and benefit",
      "A tailormade SLBS options to suit your risk & return profile",
    ],
    imageSrc: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop",
    buttonText: "Learn More",
  },
  {
    id: "Bonds",
    title: "BONDS",
    icon: BadgePercent,
    tagline: "SECURE",
    mainTitle: "We Help You ‘Bond’ with Your Money",
    description1:
      "Bonds are gradually emerging as effective yet a very secure mode of investments in recent times. Ratnakar Securities understand ‘Bonds’ like none and with our deep understanding of the debt markets and unmatched research, we help you invest and mitigate risk by investing into bonds that meet your goals.",
    description2:
      "Why Bonds?\nBonds tend to offer the highest and most reliable income streams, even at times when prevailing rates are low\nWith diversified investments in bonds, investors can reduce the volatility and preserve capital\nBonds allow protection of principal, as a diversified bond portfolio is much less likely to suffer large losses in a short period\nCertain bonds also offer a potential tax advantage when invested into government owned bonds\nBy investing in ‘Bonds’, you not only earn a ‘predetermined interest’ at regular intervals but also earn an assured ‘principal amount’ at the end of the maturity period.",
    featuresTitle: "Why invest with Ratnakar?",
    features: [
      "Safe and secure investments - Backed by a thorough research and recommendations",
      "Investing in ‘Bonds’ helps you minimize risk while assuring, assured returns",
      "Choice and flexibility of choosing bonds to meet your investment needs and financial goals",
      "Dedicated customer support to meet your tailormade needs",
    ],
    imageSrc: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=2070&auto=format&fit=crop",
    buttonText: "Start Investing Today",
  },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const initialTab = tabParam && TABS_DATA.find((t) => t.id === tabParam)
    ? tabParam
    : TABS_DATA[0].id;

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (tabParam && TABS_DATA.find((t) => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const currentTabData = TABS_DATA.find((tab) => tab.id === activeTab) || TABS_DATA[0];

  return (
    <main className="bg-background min-h-screen">
      {/* ==========================================
          TOP BANNER SECTION
      ========================================== */}
      <HeroSection
        title="Our Products"
        breadcrumbs={[{ label: "Products" }]}
        image="/images/about/AboutUs-Ratnakarsec.png"
        height="h-[400px]"
      />

      {/* ==========================================
          MAIN CONTENT SECTION (Tabs & Content)
      ========================================== */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
            {/* --- SIDEBAR / TAB NAVIGATION --- */}
            <aside className="w-full lg:w-1/4 space-y-4 lg:sticky lg:top-[100px] h-fit self-start z-10">


              {/* Desktop Vertical Menu */}
              <nav aria-label="Products Categories - Desktop" className="hidden lg:flex flex-col gap-2 bg-muted/40 p-2 rounded-lg border border-border">
                {TABS_DATA.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-md text-base font-semibold transition-all duration-200 border-l-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 text-left",
                        isActive
                          ? "bg-primary/5 text-primary border-primary font-bold shadow-sm"
                          : "text-foreground border-transparent hover:bg-muted hover:text-primary hover:border-primary/40"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span className="flex items-center uppercase tracking-wide">
                        <Icon className={cn("w-4 h-4 mr-3 transition-colors", isActive ? "text-primary" : "opacity-70")} />
                        {tab.title}
                      </span>
                      <ChevronRight size={16} className={cn("opacity-40 transition-transform", isActive && "translate-x-1 opacity-100")} />
                    </button>
                  );
                })}
              </nav>

              {/* Mobile Horizontal Scroll Menu */}
              <nav aria-label="Products Categories - Mobile" className="lg:hidden -mx-4 px-4 overflow-x-auto scrollbar-none grid grid-rows-2 grid-flow-col gap-3 pb-2">
                {TABS_DATA.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={cn(
                        "whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all border shadow-sm flex items-center uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        isActive
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-700 border-border hover:border-primary/50 hover:text-primary"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon className={cn("w-3.5 h-3.5 mr-2", isActive ? "text-white" : "opacity-70")} />
                      {tab.title}
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* --- RIGHT CONTENT AREA --- */}
            <div className="w-full lg:w-3/4 flex flex-col gap-10 animate-fade-in">

              {/* Top: Title, Image, and Text */}
              <div className="flex flex-col gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border">

                {/* Title and Tagline */}
                <div>
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-bold text-xs tracking-widest rounded-full uppercase mb-3">
                    {currentTabData.tagline}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
                    {currentTabData.mainTitle}
                  </h2>
                </div>

                {/* Full Width Image */}
                <div className="w-full">
                  <div className="relative w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-md group">
                    <Image
                      src={currentTabData.imageSrc}
                      alt={currentTabData.mainTitle}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/60 to-transparent" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4 text-[#111827] leading-relaxed text-[16px]">
                  {currentTabData.description1.split('\n').map((line, i) => (
                    <p key={`desc1-${i}`}>{line}</p>
                  ))}
                  {currentTabData.description2.split('\n').map((line, i) => (
                    <p key={`desc2-${i}`}>{line}</p>
                  ))}
                </div>
              </div>

              {/* Middle: Features Section (4 Boxes) */}
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground relative">
                  {currentTabData.featuresTitle}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentTabData.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="group bg-white border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 hover:border-primary/30"
                    >
                      <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <CheckCircle2 className="w-6 h-6 shrink-0" />
                      </div>
                      <p className="text-foreground font-medium leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Call to Action Button */}
              <div className="pt-4 border-t border-border">
                <Link href="/contact" className="inline-block w-full md:w-auto">
                  <Button
                    variant="contained"
                    color="primary"
                    className="w-full md:w-auto font-bold text-base py-3 px-8 rounded-xl shadow-md transition-transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    {currentTabData.buttonText || "Open Your Trading Account"}
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

              </div>

            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-foreground font-medium">Loading Products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}