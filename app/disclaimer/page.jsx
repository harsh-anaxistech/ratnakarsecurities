import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Disclaimer :: Ratnakar Securities Limited.",
  description: "Disclaimer of Ratnakar Securities Limited.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Banner Section */}
      <section className="bg-[#011628] text-white h-[240px] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/2150970201.jpg"
            alt="Disclaimer Banner"
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
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-2" aria-hidden="true">
                <ChevronRight size={14} className="opacity-60" />
              </li>
              <li className="text-secondary font-medium" aria-current="page">Disclaimer</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white relative z-10">
            Disclaimer
          </h1>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="bg-slate-50 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-black/5 p-4 sm:p-8 md:p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Website Disclaimer</h2>
            <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
              The information contained on this website is for general information purposes only. The information is provided by Ratnakar Securities Limited and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
            </p>
            <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
              Any reliance you place on such information is therefore strictly at your own risk. Investments in securities market are subject to market risks, read all the related documents carefully before investing.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
