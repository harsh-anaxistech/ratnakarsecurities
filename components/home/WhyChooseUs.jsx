import Image from "next/image";
import Container from "@/components/common/Container";

const FEATURES = [
  {
    title: "25+ Years of Trust",
    description:
      "Decades of unwavering financial partnership built on a legacy of trust and expertise.",
    icon: "/images/icon/whychoose/trust.svg",
  },
  {
    title: "Secure Trading Platform",
    description:
      "Robust, advanced, and secure technology for a seamless trading experience.",
    icon: "/images/icon/whychoose/secure.svg",
  },
  {
    title: "SEBI Registered & Compliant",
    description:
      "Fully compliant with all market regulations, ensuring your investments are secure.",
    icon: "/images/icon/whychoose/registered.svg",
  },
  {
    title: "Dedicated Relationship Managers",
    description:
      "Personalized guidance and support from a dedicated advisor for your financial journey.",
    icon: "/images/icon/whychoose/dedicated.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 bg-white">


<div className="flex flex-col items-center text-center">
  <h2 className="mt-3 text-4xl font-bold leading-tight text-foreground">
    Reasons Why People Choose
    <br />
    Ratnakar Securities
  </h2>

  <p className="mt-5 max-w-3xl text-muted-foreground text-base mx-auto">
    Ratnakar Securities is committed to offering our clients exceptional
    financial services. Here are a few key reasons why you should choose us as
    your trusted financial partner.
  </p>
</div>
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
            
          {/* Left Content */}
          <div>

            <div className="mt-10 space-y-5">
              {FEATURES.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-5 rounded-lg border border-gray-200 bg-white p-5  transition-all duration-300 "
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-muted transition-all duration-300 group-hover:bg-primary">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={34}
                      height={34}
                      className="transition duration-300 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm  text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
            <div className="overflow-hidden rounded-lg ">
              <Image
                src="/images/hero/whychooseus.png"
                alt="Why Choose Ratnakar Securities"
                width={700}
                height={750}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
      </Container>
    </section>
  );
}