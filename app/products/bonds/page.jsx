import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Bonds :: Ratnakar Securities Limited.",
  description:
    "Invest in government and corporate bonds with Ratnakar Securities. Secure fixed-income investment options.",
  path: "/products/bonds",
});

export default function BondsPage() {
  return (
    <Container>
      <div className="py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Bonds
        </h2>
        <p className="text-muted-foreground text-base leading-8">
          Invest in government bonds, corporate bonds, and other fixed-income
          instruments. Secure returns with low-risk investment options.
        </p>
      </div>
    </Container>
  );
}
