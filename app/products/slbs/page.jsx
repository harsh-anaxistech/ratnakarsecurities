import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "SLBS :: Ratnakar Securities Limited.",
  description:
    "Securities Lending and Borrowing Scheme (SLBS) by Ratnakar Securities. Earn additional returns on your idle securities.",
  path: "/products/slbs",
});

export default function SLBSPage() {
  return (
    <Container>
      <div className="py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">SLBS</h2>
        <p className="text-muted-foreground text-base leading-8">
          Securities Lending and Borrowing Scheme allows you to earn additional
          returns on your idle securities while providing liquidity to the
          market.
        </p>
      </div>
    </Container>
  );
}
