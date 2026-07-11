import Container from "@/components/common/Container";

const steps = [
  {
    num: 1,
    title: "Open Your Account",
    desc: "Paperless KYC in minutes. Demat + trading account with NSDL, at zero opening cost.",
  },
  {
    num: 2,
    title: "Meet Your Advisor",
    desc: "A dedicated relationship manager understands your goals, income and risk appetite.",
  },
  {
    num: 3,
    title: "Build Your Portfolio",
    desc: "Invest across equity, funds, commodities and bonds — matched to your plan, not the market noise.",
  },
  {
    num: 4,
    title: "Track & Grow",
    desc: "Monitor everything on our app, review quarterly with your RM, and stay the course. Rest assured.",
  },
];

export default function InvestmentSteps() {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Your Investment Journey</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-dark-navy leading-tight">
            From first step to first crore —<br />we walk with you.
          </h2>
        </div>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:block relative">
          {/* Connector line */}
          <div
            className="absolute top-[26px] h-[2px]"
            style={{
              left: "calc(100% / 8)",
              right: "calc(100% / 8)",
              background: "linear-gradient(90deg, #ea2830, #00aeee)",
            }}
          />
          <div className="grid grid-cols-4 gap-4 relative">
            {steps.map((step) => (
              <div key={step.num} className="text-center px-4 group">
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center font-black text-xl text-white relative z-10 border-4 border-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                  style={{ background: "#ea2830", boxShadow: "0 0 0 2px #ea2830" }}
                >
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-dark-navy mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden relative">
          <div className="absolute left-7 top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary to-secondary" />
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 relative group">
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center font-black text-lg text-white shrink-0 border-4 border-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "#ea2830", boxShadow: "0 0 0 2px #ea2830" }}
                >
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-base font-bold text-dark-navy group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}