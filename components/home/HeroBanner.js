import Link from "next/link";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      aria-label="Hero banner"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--primary)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: "var(--secondary)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: "var(--secondary)" }}
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] ">
            Boost Your Income Today{" "}
            <span
              className="relative"
              style={{
                background:
                  "linear-gradient(90deg, var(--primary), var(--secondary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Online Trading
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Start investing in equities, derivatives, mutual funds, currency,
            and more through our Trading Account.{" "}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/contact">
              <Button variant="contained" color="primary" size="lg" className="text-base">
                Download Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outlined"
                color="secondary"
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-foreground text-base"
              >
                Invest Now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
