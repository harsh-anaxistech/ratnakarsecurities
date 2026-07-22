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
        mobileImage="/images/about/mobile banner/contact us mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      {/* Main Content Area */}
      <section className="py-5 md:py-16">
        <Container className="px-0 sm:px-6 lg:px-8">
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

            {/* Live Map Section */}
            <div className="bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-black/10 overflow-hidden p-3 md:p-4">
              <div className="relative w-full h-[250px] md:h-[320px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                <iframe
                  title="Ratnakar Securities Head Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.954274984285!2d72.5647!3d23.0254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f5cf9e1d87%3A0x6b6c1670f5e55e81!2sSankalp%20Square%202%2C%20Ellisbridge%2C%20Ahmedabad%2C%20Gujarat%20380006!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
