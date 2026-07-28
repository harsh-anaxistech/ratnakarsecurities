import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";
import { generatePageMetadata } from "@/constants/metadata";
import { Phone, Mail, Briefcase } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Disclosure of Contact Details of Key Managerial Personnel :: Ratnakar Securities Limited.",
  description:
    "Contact details of Key Managerial Personnel at Ratnakar Securities Limited — transparency for investors and stakeholders.",
  path: "/investors/disclosure-of-contact-details-of-key-managerial-personnel",
});

const personnel = [
  {
    id: 1,
    name: "Ajay Jayantilal Shah",
    designation: "Chairman and Managing Director",
    initials: "AJS",
    phone: "079 4900 5200",
    email: "ajay@ratnakarsecurities.com",
  },
  {
    id: 2,
    name: "Kushal Ajay Shah",
    designation: "Whole Time Director",
    initials: "KAS",
    phone: "079 4900 5200",
    email: "kushal@ratnakarsecurities.com",
  },
  {
    id: 3,
    name: "Ajay Nagindas Gandhi",
    designation: "Chief Financial Officer",
    initials: "ANG",
    phone: "079 4900 5200",
    email: "gandhi@ratnakarsecurities.com",
  },
  {
    id: 4,
    name: "Aditya Pancholi",
    designation: "Company Secretary",
    initials: "AP",
    phone: "079 4900 5200",
    email: "cs@ratnakarsecurities.com",
  },
];

export default function KeyManagerialPersonnelPage() {
  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-16">
      <HeroSection
        title="Key Managerial Personnel"
        breadcrumbs={[
          { label: "Investors", href: "/investors" },
          { label: "Key Managerial Personnel" },
        ]}
        image="/images/about/our product 1.jpg"
        mobileImage="/images/about/mobile banner/investor mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      <Container className="mt-12">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-[13px] font-black tracking-widest uppercase mb-3 text-[#ea2830]">
            Investor Disclosure
          </div>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight mb-4">
            Contact Details of Key Managerial Personnel
          </h2>
          <p className="text-[16px] text-[#314158] max-w-2xl mx-auto leading-relaxed">
            In compliance with regulatory requirements, the following are the contact details
            of our Key Managerial Personnel for investor and stakeholder communication.
          </p>
        </div>

        {/* 4 Cards — 3 per row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personnel.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent strip */}
              <div className="h-1.5 w-full bg-[#1a6eb5]" />

              <div className="p-6">
                {/* Avatar + Name */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 bg-[#ea2830] shadow-sm">
                    {person.initials}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-slate-900 leading-snug">{person.name}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#1a6eb5] shrink-0" />
                      <p className="text-[12px] font-semibold uppercase tracking-wide text-[#1a6eb5]">
                        {person.designation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-black/6 mb-5" />

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href={`tel:${person.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1a6eb5]/10 flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5 text-[#1a6eb5]" />
                    </div>
                    <span className="text-[14px] text-[#314158] group-hover:text-[#1a6eb5] transition-colors font-medium">
                      {person.phone}
                    </span>
                  </a>

                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#1a6eb5]/10 flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5 text-[#1a6eb5]" />
                    </div>
                    <span className="text-[14px] text-[#314158] group-hover:text-[#1a6eb5] transition-colors font-medium break-all">
                      {person.email}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 bg-white border border-[#1a6eb5]/20 rounded-2xl p-5 flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-[#1a6eb5]/10 flex items-center justify-center shrink-0 mt-0.5">
            <Mail className="w-4 h-4 text-[#1a6eb5]" />
          </div>
          <p className="text-[14px] text-[#314158] leading-relaxed">
            <span className="font-semibold text-slate-800">Note: </span>
            This disclosure is made in accordance with the SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.
            For investor grievances, please contact the appropriate personnel listed above or write to us at{" "}
            <a href="mailto:info@ratnakarsecurities.com" className="text-[#1a6eb5] hover:underline font-medium">
              info@ratnakarsecurities.com
            </a>.
          </p>
        </div>

      </Container>
    </div>
  );
}
