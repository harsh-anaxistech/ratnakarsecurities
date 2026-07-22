import HeroSection from "@/components/common/HeroSection";
import PartnerForm from "@/components/partner/PartnerForm";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Partner With Us :: Ratnakar Securities Limited",
  description:
    "Partner with Ratnakar Securities. Whether you are a sub-broker, business associate, or authorized person, discover custom partnership models to grow your business.",
  path: "/partner-with-us",
});

export default function PartnerWithUsPage() {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection
        title="Partner With Us"
        breadcrumbs={[{ label: "Partner With Us" }]}
        image="/images/about/AboutUs-Ratnakarsec.png"
        mobileImage="/images/about/mobile banner/investor mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />
      {/* Form & Content Section */}
      <section className="py-6 md:py-12">
        <PartnerForm />
      </section>
    </main>
  );
}
