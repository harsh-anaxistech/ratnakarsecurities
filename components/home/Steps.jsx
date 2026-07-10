import Image from "next/image";
import Container from "@/components/common/Container";

const steps = [
  {
    title: "Open Account",
    desc: "Create your Trading & Demat account online.",
    icon: "/images/steps/step1.png",
  },
  {
    title: "Complete KYC",
    desc: "Verify your identity quickly and securely.",
    icon: "/images/steps/step2.png",
  },
  {
    title: "Account Activated",
    desc: "Receive login credentials and start trading.",
    icon: "/images/steps/step3.png",
  },
  {
    title: "Add Funds",
    desc: "Fund your account using secure payment options.",
    icon: "/images/steps/step4.png",
  },
  {
    title: "Start Investing",
    desc: "Invest across Equity, Mutual Funds & more.",
    icon: "/images/steps/step5.png",
  },
  {
    title: "Track Portfolio",
    desc: "Monitor performance with real-time insights.",
    icon: "/images/steps/step6.png",
  },
];

export default function InvestmentSteps() {
  return (
    <section className="pb-16 bg-white">
              <div className="mb-14 text-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl mt-3 font-semibold leading-tight text-foreground md:text-4xl">
              Your Investment Journey

            </h2>
            <p className="mt-5 max-w-3xl text-base text-muted-foreground">
             From first step to first crore —
we walk with you.
            </p>
          </div>
        </div>
      <Container>
      <div className=" mx-auto">
        {/* Desktop */}
        <div className="hidden lg:block relative">
          {/* Timeline */}
          <div
            className="absolute top-10 h-[2px] bg-secondary"
            style={{
              left: "calc(100% / 12)",
              right: "calc(100% / 12)",
            }}
          />

          <div className="grid grid-cols-6 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Circle */}
                <div className="relative z-10 mx-auto w-20 h-20 rounded-full border-[3px] border-secondary bg-white flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-secondary-light flex items-center justify-center">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={34}
                      height={34}
                      className="object-contain"
                    />
                  </div>

                  {/* Step Number */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-medium text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden relative">
          {/* Vertical Timeline */}
          <div className="absolute left-8 top-8 bottom-8 w-[2px] bg-secondary" />

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5 relative">
                {/* Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-secondary bg-white flex items-center justify-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-secondary-light flex items-center justify-center">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={26}
                      height={26}
                      className="object-contain"
                    />
                  </div>

                  {/* Number */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-white text-[10px] font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}