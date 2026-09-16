import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";
import { generatePageMetadata } from "@/constants/metadata";
import { MapPin } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Privacy Policy :: Ratnakar Securities Limited.",
  description: "Privacy Policy of Ratnakar Securities Limited.",
  path: "/privacy-policy",
});

/**
 * Privacy Policy Page Component
 * 
 * Formal privacy disclosure detailing client data confidentiality,
 * data security practices, and statutory compliance with SEBI and DP guidelines.
 */
export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-16" style={{ backgroundColor: "#f7f9fc" }}>
      {/* Banner Section */}
      <HeroSection
        title="Privacy Policy"
        breadcrumbs={[{ label: "Privacy Policy" }]}
        image="/images/about/our product 1.jpg"
        mobileImage="/images/about/mobile banner/investor mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      {/* Content Section */}
      <Container className="mt-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 md:p-12 space-y-6 max-w-4xl mx-auto" style={{ backgroundColor: "#ffffff" }}>

          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#011628] mb-2" style={{ color: "#011628" }}>Privacy Policy</h2>
          <h3 className="text-xl font-bold text-[#881337] mb-6" style={{ color: "#881337" }}>At Ratnakar, We Care!</h3>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            At Ratnakar Securities we are strongly committed to protecting the personal and financial information that our customers submit to us. This information is provided when customers register to receive certain Ratnakar Securities services or products, such as online trading.
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            The personal information we get from our customers, will help us provide with improved services and products that match their needs as closely as possible.
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            We shall not sell their personal information to any third party. However, under certain conditions we would share this information, as follows;
          </p>

          <ul className="list-disc pl-6 space-y-3 text-[16px] text-slate-700 leading-relaxed marker:text-[#881337]" style={{ color: "#334155" }}>
            <li>We share information as part of normal business operations, such as providing them with any services to which they subscribe, and any activity related to these services such as collecting fees for those services, and informing them about these services; as part of normal legal / regulatory purposes required by the Securities and Exchange Board of India (SEBI) and other regulatory and government entities, and</li>
            <li>We may occasionally invite selected third parties to participate in offers we feel would be attractive to customers of Ratnakar Securities customers</li>
          </ul>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            It may become necessary for Ratnakar Securities to disclose our customers’ personal information to our advisors and contractors, or to their subcontractors. However, these parties would be required to use the information obtained from Ratnakar Securities for such use exclusively.
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            Our customers’ trading account information is protected by placing it in the secure portion of our Web site, which is why they are required to enter their unique login username and password each time they want to access their account information.
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            We request our customers to help us protect their privacy by maintaining the secrecy of the username and password you use for any of our services.
          </p>

          <div
            className="text-[16px] text-slate-900 leading-relaxed font-semibold italic border-l-4 border-[#004f7a] pl-4 py-3 my-8 bg-sky-50 rounded-r-xl"
            style={{ backgroundColor: "#f0f9ff", color: "#0f172a", borderLeftColor: "#004f7a" }}
          >
            Please note that this privacy policy does not create any contractual or other legal rights in or on behalf of any party, nor is it intended to do so.
          </div>

          {/* Office Address Block */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 mt-10 flex items-start gap-4" style={{ backgroundColor: "#f8fafc" }}>
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-1" style={{ backgroundColor: "#fef2f2" }}>
              <MapPin className="w-5 h-5 text-[#881337]" aria-hidden="true" style={{ color: "#881337" }} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-slate-900 mb-1" style={{ color: "#0f172a" }}>Registered Office / Corporate Office</h4>
              <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
                <span className="font-bold text-slate-900" style={{ color: "#0f172a" }}>Ratnakar Securities Limited.</span><br />
                304, Sankalp Square - 2,<br />
                Near Jalaram Mandir Crossing,<br />
                Ellisbridge, Ahmedabad - 380006
              </p>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
