import HeroBanner from "@/components/home/HeroBanner";
import Ticker from "@/components/home/Ticker";
import Testimonials from "@/components/home/Testimonials";
import StarBar from "@/components/home/StarBar";
import Features from "@/components/home/Features";
import Steps from "@/components/home/Steps";
import WhyChooseUs from "@/components/home/WhyChooseUs";

import DownloadApp from "@/components/home/DownloadApp";
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
      <Ticker />
      <StarBar />
      <Features />
      <Steps />
      <WhyChooseUs />
      <Testimonials />

      <DownloadApp />
    </div>
  );
}
