import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "NRI Services :: Ratnakar Securities Limited.",
  description:
    "NRI investment services by Ratnakar Securities. Seamless trading and investment solutions for Non-Resident Indians.",
  path: "/products/nri",
});

export default function NRIPage() {
  return (
    <Container>
      <div className="py-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          NRI Services
        </h2>
        <p className="text-muted-foreground text-base leading-8">
          Seamless investment solutions for Non-Resident Indians. Open NRI
          trading accounts and invest in Indian markets from anywhere in the
          world.
        </p>
      </div>
    </Container>
  );
}
