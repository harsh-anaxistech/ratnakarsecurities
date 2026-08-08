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
  title: "Ratnakar Securities | Stock Broker, Demat Account, Trading & Investment Services",
  description:
    "Ratnakar Securities is a trusted SEBI-registered stock broker offering online trading, Demat account services, mutual funds, IPO investments, bonds, derivatives, and wealth management solutions across India.",
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