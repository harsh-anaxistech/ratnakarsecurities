import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Derivatives :: Ratnakar Securities Limited.",
  description:
    "Trade in futures and options with Ratnakar Securities. Advanced derivatives trading platform with real-time market data.",
  path: "/products/derivatives",
});

export default function DerivativesPage() {
  return (
    <Container>
      <div className="py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Derivatives
        </h2>
        <p className="text-muted-foreground text-base leading-8">
          Explore futures and options trading with our advanced derivatives
          platform. Hedge your portfolio and capitalize on market movements.
        </p>
      </div>
    </Container>
  );
}
