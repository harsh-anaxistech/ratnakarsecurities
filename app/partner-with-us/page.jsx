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
      {/* Banner Section */}
      <HeroSection
        title="Partner With Us"
        breadcrumbs={[{ label: "Partner With Us" }]}
        image="/images/partner_handshake.png"
        height="h-[250px] md:h-[320px]"
      />

      {/* Form & Content Section */}
      <section className="py-6 md:py-10">
        <PartnerForm />
      </section>
    </main>
  );
}
