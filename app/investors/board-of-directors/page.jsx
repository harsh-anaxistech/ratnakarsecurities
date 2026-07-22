import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";
import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/constants/metadata";
import { UserCheck, Building2 } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Board of Directors :: Ratnakar Securities Limited.",
  description:
    "Meet the Board of Directors of Ratnakar Securities Limited — experienced leaders guiding the firm's vision in India's capital markets.",
  path: "/investors/board-of-directors",
});

const directors = [
  {
    name: "Ajay Jayantilal Shah",
    designation: "Chairman and Managing Director",
    type: "Executive",
    initials: "AJS",
    image: "/images/about/AJAY_SHAH_PHOTO__MD___CHAIRMAN-removebg-preview.png",
    description:
      "Mr. Ajay Jayantilal Shah, born in 1951, holds a BSc from Gujarat University and brings over 30 years of combined experience in stock broking and banking. He founded Ratnakar Securities in 1994, securing memberships with NSE and BSE, and establishing it as an NSDL Depository Participant. His leadership extended to serving as President of the Ahmedabad Stock Exchange, demonstrating his significant influence in India's securities market.",
  },
  {
    name: "Mr. Kushal Ajay Shah",
    designation: "Whole Time Director",
    type: "Executive",
    initials: "KAS",
    image: "/images/about/khusal.png",
    description:
      "Mr. Kushal Ajay Shah, born in 1988, holds a Business Management degree from Christ College and a PGDM in Financial Markets from Gujarat University. With 15 years of experience, he has expertise in Investment Banking, Broking Operations, and Compliance at Ratnakar Securities, while also serving on the BSE Brokers Forum Board for six years. He has been instrumental in modernizing the firm's technology infrastructure to enhance client experience.",
  },
  {
    name: "Harsh Vinodbhai Mittal",
    designation: "Non-Executive Independent Director",
    type: "Independent",
    initials: "HVM",
    description:
      "Mr. Harsh Vinod Mittal is an Independent Director at Ratnakar Securities Limited, holding a Bachelor of Commerce and dual management degrees from the Entrepreneurship Development Institute of India. Over the past 12 years, he has managed the Vinod Group and transformed Vinod Cotfab Private Limited from a weaving unit into a diversified textile enterprise, demonstrating expertise in entrepreneurship and business expansion.",
  },
  {
    name: "Pratapbhai Teli Mukundbhai",
    designation: "Non-Executive Independent Director",
    type: "Independent",
    initials: "PTM",
    description:
      "Mr. Pratap Teli serves as an Independent Director at Ratnakar Securities Limited and holds leadership positions at Pharmatech Process Equipments. With degrees in mechanical engineering and metallurgy, he brings 42 years of manufacturing expertise, specializing in production of pharmaceutical equipment and market development.",
  },
  {
    name: "Krina Sujal Desai",
    designation: "Non-Executive Independent Director",
    type: "Independent",
    initials: "KSD",
    description:
      "Mrs. Krina Desai serves as an Independent Director at Ratnakar Securities Limited and is the owner of Devus Chocolates. With over 20 years of experience as a chocolatier, she has built a successful business serving prestigious clients including airlines and luxury brands, demonstrating strong entrepreneurial and strategic management skills.",
  },
];

export default function BoardOfDirectorsPage() {
  const executive = directors.filter((d) => d.type === "Executive");
  const independent = directors.filter((d) => d.type === "Independent");

  return (
    <main className="bg-[#f7f9fc] min-h-screen pb-16">
      <HeroSection
        title="Board of Directors"
        breadcrumbs={[
          { label: "Investors", href: "/investors" },
          { label: "Board of Directors" },
        ]}
        image="/images/about/our product 1.jpg"
        mobileImage="/images/about/mobile banner/investor mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      <Container className="mt-12">

        {/* Intro */}
        <div className="text-center mb-12">
          <div className="text-[14px] font-black tracking-widest uppercase mb-3 text-[#ea2830]">
            Our Leadership
          </div>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight mb-4">
            Guided by Experience &amp; Integrity
          </h2>
          <p className="text-[16px] text-[#314158] max-w-2xl mx-auto leading-relaxed">
            Our Board of Directors brings together decades of expertise in capital markets, finance, and industry — steering Ratnakar Securities with vision and responsibility.
          </p>
        </div>

        {/* Executive Directors */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#ea2830]/10 flex items-center justify-center">
              <UserCheck className="w-4 h-4 text-[#ea2830]" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Executive Directors</h3>
            <div className="flex-1 h-px bg-black/10 ml-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {executive.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-black/5 shadow-sm p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-5">
                  {member.image ? (
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-red-50 border border-red-100 relative flex items-center justify-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0"
                      style={{ background: "linear-gradient(135deg, #ea2830, #c41f26)" }}
                    >
                      {member.initials}
                    </div>
                  )}
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{member.name}</h2>
                    <p className="text-[#ea2830] font-semibold text-sm uppercase tracking-wider mt-1">
                      {member.designation}
                    </p>
                  </div>
                </div>
                <div className="h-px bg-black/5 mb-5" />
                <p className="text-[16px] text-[#314158] leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Independent Directors */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#1a6eb5]/10 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-[#1a6eb5]" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wide">Independent Directors</h3>
            <div className="flex-1 h-px bg-black/10 ml-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {independent.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-black/5 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: "linear-gradient(135deg, #1a6eb5, #0e4a7a)" }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{member.name}</h2>
                    <p className="text-[#1a6eb5] font-semibold text-xs uppercase tracking-wider mt-1">
                      {member.designation}
                    </p>
                  </div>
                </div>
                <div className="h-px bg-black/5 mb-4" />
                <p className="text-[15px] text-[#314158] leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </main>
  );
}