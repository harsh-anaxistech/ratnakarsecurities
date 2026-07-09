import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Wealth Management :: Ratnakar Securities Limited.",
  description:
    "Professional wealth management services by Ratnakar Securities. Personalized investment strategies for high-net-worth individuals.",
  path: "/products/wealth-management",
});

export default function WealthManagementPage() {
  return (
    <Container>
      <div className="py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Wealth Management
        </h2>
        <p className="text-muted-foreground text-base leading-8">
          Our wealth management services offer personalized investment
          strategies tailored to your financial goals with dedicated
          relationship managers.
        </p>
      </div>
    </Container>
  );
}
