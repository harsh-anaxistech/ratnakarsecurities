import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Commodities :: Ratnakar Securities Limited.",
  description:
    "Trade in commodities with Ratnakar Securities. Access MCX and NCDEX markets for gold, silver, crude oil, and more.",
  path: "/products/commodities",
});

export default function CommoditiesPage() {
  return (
    <Container>
      <div className="py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          Commodities
        </h2>
        <p className="text-muted-foreground text-base leading-8">
          Trade in gold, silver, crude oil, natural gas, and other commodities
          through our platform with access to MCX and NCDEX.
        </p>
      </div>
    </Container>
  );
}
