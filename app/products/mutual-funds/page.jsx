import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Mutual Funds :: Ratnakar Securities Limited.",
  description:
    "Invest in mutual funds with Ratnakar Securities. Wide selection of equity, debt, and hybrid mutual fund schemes.",
  path: "/products/mutual-funds",
});

export default function MutualFundsPage() {
  return (
    <Container>
      <div className="py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Mutual Funds
        </h2>
        <p className="text-muted-foreground text-base leading-8">
          Diversify your investments with our curated selection of mutual funds.
          Choose from equity, debt, hybrid, and sector-specific schemes.
        </p>
      </div>
    </Container>
  );
}
