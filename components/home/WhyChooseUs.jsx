import Image from "next/image";
import Container from "@/components/common/Container";

const FEATURES = [
  {
    title: "20+ Years of Industry Experience",
    description:
      "Decades of unwavering financial partnership built on a legacy of trust and expertise.",
    icon: "/images/icon/whychoose/trust.svg",
  },
  {
    title: "Research-Driven Investment Advice",
    description:
      "Robust, advanced, and secure technology for a seamless trading experience.",
    icon: "/images/icon/whychoose/secure.svg",
  },
  {
    title: "Secure & Technology-Driven Trading",
    description:
      "Fully compliant with all market regulations, ensuring your investments are secure.",
    icon: "/images/icon/whychoose/registered.svg",
  },
  {
    title: "Member of NSE, BSE, MCX & CDSL",
    description:
      "Personalized guidance and support from a dedicated advisor for your financial journey.",
    icon: "/images/icon/whychoose/dedicated.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className=" bg-white overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center px-4 mb-12">
              <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
          Reasons Why People Choose
          <br />
          Ratnakar Securities
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground text-base mx-auto">
          Ratnakar Securities is committed to offering our clients exceptional
          financial services. Here are a few key reasons why you should choose us as
          your trusted financial partner.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-[1920px] mx-auto">
        
        {/* Left Content Column */}
        <div className="px-4 md:px-10 order-2 lg:order-1">
          <div className="space-y-5">
            {FEATURES.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-5 rounded-lg bg-muted p-5 transition-all duration-300 hover:border-primary/30"
              >
                {/* Icon Container */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary transition-all duration-300 group-hover:bg-primary">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={34}
                    height={34}
                    className="transition duration-300 brightness-0 invert"
                  />
                </div>

                {/* Text Content Container */}
                <div className="flex flex-col items-center sm:items-start">
                  <h3 className="text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Column */}
<div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-full order-1 lg:order-2 lg:rounded-l-2xl overflow-hidden group/image isolation-delegate">
  <Image
    src="/images/hero/whychooseus.png"
    alt="Why Choose Ratnakar Securities"
    width={850}
    height={750}
    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/image:scale-105"
  />
</div>

      </div>
    </section>
  );
}