import React from "react";
import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Leadership :: Ratnakar Securities Limited.",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management. SEBI-registered since 1995.",
  path: "/",
});

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

  const leadership = [
    {
      name: "Shri. Ajay Shah",
      designation: "Founder, Chairman and Managing Director",
      image: "/images/leadership/ajay-shah.jpg",
      content: [
        "A recognized leader in financial services and capital markets, Shri Ajay Shah represents the third generation of a very reputed business family in Ahmedabad. He founded Ratnakar Securities in 1994 and bootstrapped it into an investment advisory powerhouse.",
        "A Science Graduate of the 80s, Mr. Shah possesses over 32 years of experience in banking and capital markets. He has represented various industry bodies and also served as President of the Ahmedabad Stock Exchange for two consecutive years.",
      ],
    },
    {
      name: "Kushal Shah",
      designation: "Chief Operations Officer (COO)",
      image: "/images/leadership/kushal-shah.jpg",
      content: [
        "Kushal takes the legacy of Ratnakar Securities forward with his sharp business acumen, relentless enthusiasm, and dynamism. A postgraduate in Financial Markets and Insurance, he has cleared CFA USA Level II and possesses valuable investment banking experience with a leading investment banking firm.",
        "Over the last five years as COO, Kushal has transformed Ratnakar Securities into a research and technology-driven investment enterprise.",
        "An avid squash player and a humble family man, he enjoys adventurous outings and exploring new experiences in his leisure time.",
      ],
    },
  ];

  return (
    <Container>
      <div className="py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-8 text-foreground">
          <div className="relative h-64 md:h-80 w-full rounded-sm overflow-hidden  flex items-center p-8 md:p-12 ">
            <div className="absolute inset-0  to-transparent z-10" />
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: "url('/images/about/LEADER-Ratnakarsec.jpg')",
              }}
            />

            <div className="relative z-20  border-l-4 border-primary pl-4">
              <h1 className="text-white text-2xl md:text-4xl font-medium ">
                A Leader is one who knows the way,
                <br />
                goes the way, and shows the way
              </h1>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold  text-foreground ">
              Leadership
            </h2>
          </div>

          <div className="space-y-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-muted border border-border rounded-sm overflow-hidden"
              >
                <div className="grid md:grid-cols-[260px_1fr]">
                  <div className="h-72 md:h-full bg-border">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <div className="mb-2">
                      <h3 className="text-2xl font-semibold text-secondary">
                        {leader.name}
                      </h3>

                      <p className="text-primary text-md md:text-lg  mt-1">
                        {leader.designation}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {leader.content.map((text, i) => (
                        <p key={i} className="text-muted-foreground  text-base">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div
            className="bg-cover text-white rounded-sm p-6  sticky top-6"
            style={{
              backgroundImage: "url('/images/about/AboutPsBg.jpg')",
            }}
          >
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
                    <span className="text-secondary text-xs transition-transform group-hover:translate-x-1">
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
