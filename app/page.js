import HeroBanner from "@/components/home/HeroBanner";
import Features from "@/components/home/Features";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Ratnakar Securities Limited. :: Rest Assured",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management. SEBI-registered since 1995.",
  path: "/",
});

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <Features />
    </div>
  );
}
