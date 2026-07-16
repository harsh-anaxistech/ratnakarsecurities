import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
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
        image="/images/about/AboutUs-Ratnakarsec.png"
        height="h-[400px]"
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
              <div className="bg-gray-100 border-b border-black/5 p-6 md:p-8 text-center flex flex-col items-center gap-3 text-gray-800">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-black">Our Branches</h2>
                <div className="bg-gray-100 rounded-md p-4 max-w-xl mx-auto mb-4">
                  <p className="text-gray-800 text-sm md:text-base">
                    We have a wide network of branches across India to serve you better. Find the nearest Ratnakar Securities branch below.
                  </p>
                </div>
              </div>
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
