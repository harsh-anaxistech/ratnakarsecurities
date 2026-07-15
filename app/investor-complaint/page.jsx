import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/common/Container";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Investor Complaint :: Ratnakar Securities Limited.",
  description: "Investor Complaint details of Ratnakar Securities Limited.",
  path: "/investor-complaint",
});

export default function InvestorComplaintPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Banner Section */}
      <section className="bg-[#011628] text-white h-[240px] flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/2150970201.jpg"
            alt="Investor Complaint Banner"
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
              <li className="text-secondary font-medium" aria-current="page">Investor Complaint</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white relative z-10">
            Investor Complaint
          </h1>
        </Container>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="bg-slate-50 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.06)] border border-black/5 p-4 sm:p-8 md:p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Grievance Redressal</h2>
            <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
              Ratnakar Securities Limited is dedicated to resolving investor grievances fairly and expeditiously. 
              If you have any complaints regarding our services, please reach out to our dedicated grievance redressal desk.
            </p>
            <div className="bg-white p-4 md:p-8 rounded-2xl border border-black/5 mt-8 shadow-sm">
              <h3 className="font-bold text-xl text-slate-900 mb-4">Contact Details</h3>
              <ul className="space-y-3 text-[16px] text-slate-600 font-medium">
                <li className="flex items-center gap-2">
                  <strong className="text-slate-900">Email:</strong> 
                  <a href="mailto:investorgrievance@ratnakarsecurities.com" className="text-primary hover:text-secondary transition-colors">investorgrievance@ratnakarsecurities.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <strong className="text-slate-900">Phone:</strong> 
                  <span>+91 79 4001 5500</span>
                </li>
                <li className="flex items-center gap-2 pt-2 border-t border-black/5">
                  <strong className="text-slate-900">SCORES Portal:</strong> 
                  <Link href="#" className="text-primary hover:text-secondary transition-colors underline underline-offset-4">File a Complaint on SCORES</Link>
                </li>
                <li className="flex items-center gap-2">
                  <strong className="text-slate-900">SMART ODR:</strong> 
                  <Link href="#" className="text-primary hover:text-secondary transition-colors underline underline-offset-4">Online Dispute Resolution Portal</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
