import Image from "next/image";
import Link from "next/link";
import Container from "@/components/common/Container";
import Form from "@/components/contact/form";
import Table from "@/components/contact/table";
import { generatePageMetadata } from "@/constants/metadata";
import HeroSection from "@/components/common/HeroSection";

export const metadata = generatePageMetadata({
  title: "Contact Us :: Ratnakar Securities Limited.",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management. SEBI-registered since 1995.",
  path: "/",
});

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Banner Section */}
      <HeroSection
        title="Contact Us"
        breadcrumbs={[{ label: "Contact Us" }]}
        image="/images/about/contact us f.jpg"
        mobileImage="/images/about/contact us mb.jpg"
        height="h-[300px] md:h-[400px]" 
      />

      {/* Main Content Area */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col gap-6">

            {/* Contact Form Section */}
            <div className="w-full">
              <Form />
            </div>

            {/* Branches Table Section */}
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-black/10 overflow-hidden">
              <div className="p-0">
                <Table />
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
