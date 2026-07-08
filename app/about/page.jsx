import React from "react";
import Container from "@/components/common/Container";
import { Check, Building2 } from "lucide-react";

export default function AboutOverview() {
  const services = [
    "EQUITY",
    "DERIVATIVES",
    "MUTUAL FUND",
    "COMMODITIES",
    "INSURANCE",
    "LOANS",
    "REAL ESTATE",
    "PFM",
    "NRI",
    "HNIs",
  ];

  const reasons = [
    {
      title: "One-stop shop for your investments",
      description:
        "We offer a comprehensive range of investment and protection products and services across equities, derivatives, mutual funds, insurance and real estate. You name it and we have it all to suit your investments and protection needs.",
    },
    {
      title: "Your interest is our priority",
      description:
        "We understand that at every stage of your life, your goals and needs vary. We simplify 'investing' for you and provide a 360-degree view of financial planning solutions that suit your goals and needs.",
    },
    {
      title: "Seamless Trading through multiple channels",
      description:
        "You can trade with us through multiple platforms such as online, mobile, telephone or through our associate branches. Through these channels, we intend to make your trading experience seamless and convenient.",
    },
    {
      title: "Track your investments like 'Pro'",
      description:
        "We understand that only investing is not enough. We help you track your investments through efficient ways so that you optimize your returns. You can use our portfolio tracker feature OR enroll for SMS alerts to monitor your portfolio, track the markets closely and make timely investment decisions, right!",
    },
  ];

  return (
    <Container>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-8 text-foreground">
          {/* Banner Hero Section */}
          <div className="relative h-64 md:h-80 w-full rounded-sm overflow-hidden  flex items-center p-8 md:p-12 ">
            <div className="absolute inset-0  to-transparent z-10" />
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: "url('/images/about/AboutUs-Ratnakarsec.jpg')",
            }}
          />

            <div className="relative z-20 max-w-lg border-l-4 border-primary pl-4">
              <h1 className="text-white text-3xl md:text-4xl font-medium ">
                Ratnakar Securities,
                <br />
                With You Always
              </h1>
            </div>
          </div>

          {/* Overview Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground uppercase">
              Overview
            </h2>
            <p className="text-muted-foreground ">
              Emerging as one of the leading broking houses and investment
              advisors in India, Ratnakar Securities with 20 years of expertise
              in offering financial planning solutions, offers a diversified
              range of investments and financial products and services.
            </p>
            <p className="text-muted-foreground ">
              We serve a diverse customer base of retail and institutional
              investors.
            </p>
            <h3 className="text-secondary text-base md:text-lg">
              There are innumerable reasons why you should opt for our services,
              and here are a few of them:
            </h3>
          </div>

          {/* Grid Layout for Features/Reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-muted border border-border rounded-sm p-6 flex gap-4 "
              >
                <div>
                  <div className="w-6 h-6 rounded-full border-2 border-secondary flex items-center justify-center text-secondary">
                    <Check className="h-3.5 w-3.5 " />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary  text-lg">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Corporate Office Block */}
          <div className="bg-muted  rounded-sm overflow-hidden  flex flex-col md:flex-row items-stretch">
            <div className="bg-primary p-6 flex items-center justify-center md:w-48 text-white ">
              <Building2 className="w-16 h-16" strokeWidth={1.5} />
            </div>
            <div className="p-6 space-y-2">
              <h5 className="text-secondary  text-lg">
                Registered Office / Corporate Office
              </h5>
              <div className="text-foreground">
                <p className="font-medium text-base mb-1">
                  Ratnakar Securities Limited.
                </p>
                <address className="not-italic text-muted-foreground text-base space-y-0.5">
                  <p>304, Sankalp Square - 2,</p>
                  <p>Near Jalaram Mandir Crossing,</p>
                  <p>Ellisbridge, Ahmedabad - 380006</p>
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Services We Offer */}
        <div className="lg:col-span-1">
          <div className="bg-foreground text-white rounded-sm p-6  sticky top-6">
            <div className="mb-6">
              <p className="text-muted  text-base   mb-1">Services</p>
              <h3 className="text-white text-3xl md:text-4xl font-medium border-b border-border pb-3">
                We Offer
              </h3>
            </div>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="group">
                  <a
                    href="#"
                    className="flex items-center gap-3 py-1.5 text-muted font-medium text-sm hover:text-secondary transition-colors"
                  >
                    <span className="text-primary text-xs transition-transform group-hover:translate-x-1">
                      ▶
                    </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
