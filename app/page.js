import HeroBanner from "@/components/home/HeroBanner";
import Testimonials from "@/components/home/Testimonials";
import StarBar from "@/components/home/StarBar";
import Features from "@/components/home/Features";
import Steps from "@/components/home/Steps";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FloatingMobileTrading from "@/components/FloatingMobileTrading";
import { generatePageMetadata } from "@/constants/metadata";
import DownloadApp from "@/components/home/DownloadApp";
import CalculatorSection from "@/components/home/Calculator";

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
      <StarBar />
      <Features />
      <Steps />
      <WhyChooseUs />
      <DownloadApp />
      <Testimonials />
      <CalculatorSection />
      
      {/* તમારા મોબાઈલ ટ્રેડિંગ એપ્સનું ફ્લોટિંગ મોડલ બટન */}
      <FloatingMobileTrading /> 
    </div>
  );
}