import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import Container from "@/components/common/Container";
import Form from "@/components/contact/form";
import Table from "@/components/contact/table";
import { generatePageMetadata } from "@/constants/metadata";

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
      <section className="bg-[#011628] text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/2150970201.jpg"
            alt="Contact Us Banner"
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,174,238,0.15),transparent_50%)]" />
        <Container>
          <nav aria-label="Breadcrumbs" className="mb-4 relative z-10">
            <ol className="flex items-center gap-2 text-sm text-gray-400 p-0 m-0 list-none">
              <li className="flex items-center">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2" aria-hidden="true">
                <ChevronRight size={14} className="opacity-60" />
              </li>
              <li className="text-secondary font-medium" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white relative z-10">
            Contact Us
          </h1>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col gap-12 lg:gap-16">
            
            {/* Contact Form Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
              <Form />
            </div>
            
            {/* Branches Table Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-border overflow-hidden">
              <div className="bg-muted border-b border-border p-6 md:p-8 text-center flex flex-col items-center gap-3">
                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Branches</h2>
                 <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
                    We have a wide network of branches across India to serve you better. Find the nearest Ratnakar Securities branch below.
                 </p>
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
