"use client";
import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, BadgeCheck, Building2, Quote, Info, Users, Flag } from "lucide-react";
import Container from "@/components/common/Container";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "overview", label: "Overview", icon: Info, imageSrc: "/images/about/AboutUs-Ratnakarsec.jpg" },
  { id: "leadership", label: "Leadership", icon: Users, imageSrc: "/images/about/LEADER-Ratnakarsec.jpg" },
  { id: "milestones", label: "Milestones", icon: Flag, imageSrc: "/images/about/Milestones-Ratnakarsec.jpg" },
];

function AboutContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const initialTab = tabParam && TABS.find((t) => t.id === tabParam)
    ? tabParam
    : TABS[0].id;

  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (tabParam && TABS.find((t) => t.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const currentTab = TABS.find(t => t.id === activeTab) || TABS[0];

  return (
    <main className="bg-background min-h-screen">
      {/* Banner Section */}
      <section className="bg-[#011628] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={currentTab.imageSrc}
            alt={`${currentTab.label} Banner`}
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,174,238,0.15),transparent_50%)]" />
        <Container>
          <nav aria-label="Breadcrumbs" className="mb-4 relative z-10">
            <ol className="flex items-center gap-2 text-sm text-gray-400 p-0 m-0 list-none">
              <li className="flex items-center">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2" aria-hidden="true">
                <ChevronRight size={14} className="opacity-60" />
              </li>
              <li className="flex items-center">
                <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setActiveTab('overview')}>
                  About Us
                </span>
              </li>
              <li className="flex items-center gap-2" aria-hidden="true">
                <ChevronRight size={14} className="opacity-60" />
              </li>
              <li className="text-secondary font-medium" aria-current="page">
                {currentTab.label}
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white relative z-10">
            {currentTab.label}
          </h1>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
            {/* Sidebar / Tabs */}
            <aside className="w-full lg:w-1/4 space-y-4 lg:sticky lg:top-[100px] h-fit self-start z-10">
              <h2 className="hidden lg:block text-xs font-bold uppercase tracking-wider text-muted-foreground px-3 mb-2">
                About Us
              </h2>

              {/* Desktop Vertical Menu */}
              <nav aria-label="About Categories - Desktop" className="hidden lg:flex flex-col gap-2 bg-muted/40 p-2 rounded-lg border border-border">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
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
                        {tab.label}
                      </span>
                      <ChevronRight size={16} className={cn("opacity-40 transition-transform", isActive && "translate-x-1 opacity-100")} />
                    </button>
                  );
                })}
              </nav>

              {/* Mobile Horizontal Menu */}
              <nav aria-label="About Categories - Mobile" className="lg:hidden -mx-4 px-4 overflow-x-auto scrollbar-none flex gap-3 pb-2">
                {TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all border shadow-sm flex items-center uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        isActive
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-700 border-border hover:border-primary/50 hover:text-primary"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon className={cn("w-3.5 h-3.5 mr-2", isActive ? "text-white" : "opacity-70")} />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Content Area */}
            <div className="w-full lg:w-3/4 flex flex-col gap-10 animate-fade-in">
              {/* Top: Title, Image, and Main Content Wrap */}
              <div className="flex flex-col gap-6 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border">
                {/* Title */}
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight uppercase">
                    {currentTab.label}
                  </h2>
                </div>

                {/* Full Width Image */}
                <div className="w-full">
                  <div className="relative w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-md group">
                    <Image
                      src={currentTab.imageSrc}
                      alt={currentTab.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#011628]/60 to-transparent" />
                  </div>
                </div>

                {/* Render Specific Tab Content */}
                <div className="mt-2 space-y-10">
                  {activeTab === "overview" && <OverviewContent />}
                  {activeTab === "leadership" && <LeadershipContent />}
                  {activeTab === "milestones" && <MilestonesContent />}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function OverviewContent() {
  return (
    <>
      <div className="space-y-4 text-[#111827] leading-relaxed text-[16px]">
        <p>
          Emerging as one of the leading broking houses and investment advisors in India, Ratnakar Securities with 20 years of expertise in offering financial planning solutions, offers a diversified range of investments and financial products and services.
        </p>
        <p>
          We serve a diverse customer base of retail and institutional investors.
        </p>
      </div>

      <div className="space-y-6 pt-6 border-t border-border">
        <h3 className="text-2xl font-bold text-[#111827]">
          There are innumerable reasons why you should opt for our services, and here are a few of them:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted border border-border rounded-xl p-6 flex gap-4 hover:shadow-md transition-shadow">
            <div className="text-secondary shrink-0 mt-1">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-primary font-medium text-lg">One-stop shop for your investments</h4>
              <p className="text-[#111827] text-[15px]">
                We offer a comprehensive range of investment and protection products and services across equities, derivatives, mutual funds, insurance and real estate. You name it and we have it all to suit your investments and protection needs.
              </p>
            </div>
          </div>
          <div className="bg-muted border border-border rounded-xl p-6 flex gap-4 hover:shadow-md transition-shadow">
            <div className="text-secondary shrink-0 mt-1">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-primary font-medium text-lg">Your interest is our priority</h4>
              <p className="text-[#111827] text-[15px]">
                We understand that at every stage of your life, your goals and needs vary. We simplify ‘investing’ for you and, provide a 360-degree view of financial planning solutions that suit your goals and needs.
              </p>
            </div>
          </div>
          <div className="bg-muted border border-border rounded-xl p-6 flex gap-4 hover:shadow-md transition-shadow">
            <div className="text-secondary shrink-0 mt-1">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-primary font-medium text-lg">Seamless Trading through multiple channels</h4>
              <p className="text-[#111827] text-[15px]">
                You can trade with us through multiple platforms such as online, mobile, telephone or through our associate branches. Through these channels, we intend to make your trading experience seamless and convenient.
              </p>
            </div>
          </div>
          <div className="bg-muted border border-border rounded-xl p-6 flex gap-4 hover:shadow-md transition-shadow">
            <div className="text-secondary shrink-0 mt-1">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-primary font-medium text-lg">Track your investments like ‘Pro’</h4>
              <p className="text-[#111827] text-[15px]">
                We understand that only investing is not enough. We help you track your investments through efficient ways so that you optimize your returns. You can use our portfolio tracker feature OR enroll for SMS alerts to monitor your portfolio, track the markets closely and make timely investment decisions, right!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch border border-border shadow-sm">
        <div className="bg-primary p-6 flex items-center justify-center md:w-48 text-white">
          <Building2 className="w-16 h-16" strokeWidth={1.5} />
        </div>
        <div className="p-6 space-y-2">
          <h5 className="text-secondary text-lg font-semibold">Registered Office / Corporate Office</h5>
          <div className="text-[#111827]">
            <p className="font-bold text-base mb-1">Ratnakar Securities Limited.</p>
            <address className="not-italic text-[15px] space-y-0.5">
              <p>304, Sankalp Square - 2,</p>
              <p>Near Jalaram Mandir Crossing,</p>
              <p>Ellisbridge, Ahmedabad - 380006</p>
            </address>
          </div>
        </div>
      </div>
    </>
  );
}

function LeadershipContent() {
  return (
    <>
      <div className="bg-primary/5 border border-primary/20 p-8 rounded-2xl text-center space-y-4">
        <Quote className="w-10 h-10 text-primary mx-auto opacity-50" />
        <p className="text-xl md:text-2xl font-medium text-foreground italic">
          "A Leader is one who knows the way, goes the way, and shows the way"
        </p>
        <p className="text-secondary font-semibold">— John. C. Maxwell</p>
      </div>

      <div className="space-y-8 pt-6 border-t border-border">
        {/* Ajay Shah */}
        <div className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md">
              <Image src="/images/leadership/ajay-shah.jpg" alt="Shri. Ajay Shah" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-4 pt-4 md:pt-0 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Shri. Ajay Shah</h3>
              <p className="text-secondary font-medium">Founder, Chairman and Managing Director</p>
            </div>
            <div className="space-y-4 text-[#111827] text-[16px] leading-relaxed">
              <p>
                A recognized leader in financial services and capital markets, Shri Ajay Shah represents the third generation of a very reputed business family in Ahmedabad. He founded Ratnakar Securities in 1994 and bootstrapped it to an investment advisory powerhouse.
              </p>
              <p>
                A Science Graduate of 80’s, Mr. Shah possesses an enviable 32+ years of experience in Banking and Capital Markets. Mr. Shah represents various industry bodies and also was a President of Ahmedabad Stock Exchange for consecutive 2 years.
              </p>
            </div>
          </div>
        </div>

        {/* Kushal Shah */}
        <div className="flex flex-col md:flex-row gap-8 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border hover:border-primary/30 transition-colors">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md">
              <Image src="/images/leadership/kushal-shah.jpg" alt="Kushal Shah" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-4 pt-4 md:pt-0 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Kushal Shah</h3>
              <p className="text-secondary font-medium">Chief Operations Officer (COO)</p>
            </div>
            <div className="space-y-4 text-[#111827] text-[16px] leading-relaxed">
              <p>
                Kushal takes the legacy of Ratnakar Securities forward with his sharp business acumen, relentless enthusiasm and dynamism. A post graduate in financial markets and insurance, Kushal passed CFA USA Level II and possesses a valuable investment banking experience with one of the leading investment banking firm. In last 5 years of his helm as COO at Ratnakar Securities, Kushal has transformed it into a sound research and technology driven investment enterprise.
              </p>
              <p>
                An avid squash player and a humble family man, in his spare time, you’ll find Kushal exploring adventurous outings, giving more highs to his adrenaline rush.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MilestonesContent() {
  const milestones = [
    { date: "OCT 1994", text: "Ratnakar Securities was incorporated", year: "1994", icon: "🚀" },
    { date: "SEP 1995", text: "Become a Corporate Member of NSE", year: "1995", icon: "🏢" },
    { date: "DEC 1998", text: "Launch Depository services under NSDL", year: "1998", icon: "🏦" },
    { date: "JAN 2001", text: "Started NSE Future & Option Segment", year: "2001", icon: "📈" },
    { date: "SEP 2005", text: "IPO Finance Scheme (Bank of India)", year: "2005", icon: "💰" },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-8 rounded-xl text-left space-y-4 shadow-sm">
        <p className="text-xl md:text-2xl font-medium text-foreground italic">
          "The one who turns over most rocks finds the gem"
        </p>
      </div>

      <div className="pt-10">
        <div className="flex flex-col space-y-8 relative">
          {/* Main Vertical Connecting Line */}
          <div className="absolute left-8 md:left-12 top-10 bottom-10 w-[3px] bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full"></div>

          {milestones.map((item, i) => (
            <div key={i} className="relative flex items-center group">
              
              {/* Step indicator (Year) */}
              <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-[3px] border-primary z-10 shadow-lg flex items-center justify-center text-primary font-black text-xl md:text-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-105">
                {item.year}
              </div>

              {/* Connecting arm */}
              <div className="h-[3px] w-4 md:w-12 bg-primary/30 group-hover:bg-primary transition-colors duration-500"></div>

              {/* Content Card */}
              <div className="flex-1 bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden group-hover:border-primary/40">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/10 group-hover:bg-primary transition-colors duration-500"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-sm font-bold tracking-widest text-[#00AEEE] uppercase mb-2 block">{item.date}</span>
                    <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug">{item.text}</h3>
                  </div>
                  <div className="text-4xl md:text-5xl opacity-30 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 transform group-hover:scale-110">
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-medium">Loading About...</div>}>
      <AboutContent />
    </Suspense>
  );
}
