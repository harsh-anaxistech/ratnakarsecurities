import HeroBanner from "@/components/home/HeroBanner";
import Features from "@/components/home/Features";
import Calculator from "@/components/home/Calculator";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StarBar from "@/components/home/StarBar";  
import Steps from "@/components/home/Steps";
import DownloadApp from "@/components/home/DownloadApp";
import Faq from "@/components/home/Faq";
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
      <StarBar/>
            <Features />
      <Steps />

      <WhyChooseUs />
      {/* <Calculator /> */}
      {/* <Faq/> */}
            <DownloadApp />

    </div>
  );
}
