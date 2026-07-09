import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Equity :: Ratnakar Securities Limited.",
  description:
    "Trade in equities with Ratnakar Securities. Access BSE and NSE markets with our advanced trading platform.",
  path: "/products/equity",
});

export default function EquityPage() {
  return (
    <Container>
      <div className="py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Equity
        </h2>
        <p className="text-muted-foreground text-base leading-8">
          Invest in India&apos;s top companies through our equity trading
          services. We provide access to both BSE and NSE with advanced research
          and trading tools.
        </p>
      </div>
    </Container>
  );
}
