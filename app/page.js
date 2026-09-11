import HeroBanner from "@/components/home/HeroBanner";
import Testimonials from "@/components/home/Testimonials";
import StarBar from "@/components/home/StarBar";
import Features from "@/components/home/Features";
import Steps from "@/components/home/Steps";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { generatePageMetadata } from "@/constants/metadata";
import DownloadApp from "@/components/home/DownloadApp";
import CalculatorSection from "@/components/home/Calculator";

export const metadata = generatePageMetadata({
  title: "Ratnakar Securities | Stock Broker, Demat Account, Trading & Investment Services",
  description:
    "Ratnakar Securities is a trusted SEBI-registered stock broker offering online trading, Demat account services, mutual funds, IPO investments, bonds, derivatives, and wealth management solutions across India.",
  path: "/",
});
/**
 * Ratnakar Securities Main Landing Page
 * 
 * Assembles the home page experience:
 * 1. HeroBanner - Main value proposition and primary CTAs.
 * 2. StarBar - Animated numerical milestone metrics.
 * 3. Features - 9-product investment suite grid.
 * 4. Steps - 4-step onboarding journey.
 * 5. WhyChooseUs - Key differentiators and regulatory trust badges.
 * 6. DownloadApp - Mobile app QR code & App Store links.
 * 7. Testimonials - Dynamic client reviews carousel.
 * 8. CalculatorSection - Direct links to SIP and Risk calculators.
 */
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
    </div>
  );
}