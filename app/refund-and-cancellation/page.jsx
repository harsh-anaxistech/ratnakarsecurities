import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Refund & Cancellation Policy :: Ratnakar Securities Limited.",
  description: "Refund and Cancellation Policy of Ratnakar Securities Limited.",
  path: "/refund-and-cancellation",
});

/**
 * Refund & Cancellation Policy Page Component
 * 
 * Outlines statutory payment policies regarding account opening fees,
 * onboarding processing timelines (10-day clause), and duplicate payment resolution.
 */
export default function RefundCancellationPage() {
  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-16" style={{ backgroundColor: "#f7f9fc" }}>
      {/* Banner Section */}
      <HeroSection
        title="Refund & Cancellation"
        breadcrumbs={[{ label: "Refund & Cancellation" }]}
        image="/images/about/our product 1.jpg"
        mobileImage="/images/about/mobile banner/investor mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      {/* Content Section */}
      <Container className="mt-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 md:p-12 space-y-6 max-w-4xl mx-auto" style={{ backgroundColor: "#ffffff" }}>

          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#011628] mb-2" style={{ color: "#011628" }}>Refund & Cancellation</h2>
          <h3 className="text-xl font-bold text-[#881337] mb-6" style={{ color: "#881337" }}>At Ratnakar, We Care!</h3>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            The Refund & Cancellation policy for all payments made towards account opening or any other services using any mode of payment shall stand as under:
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            The Fees paid towards account opening charges for enabling equities and derivatives, or any other services is non-refundable.
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            Pick up of required documents related to the account opening procedure is subject to availability of our representatives, given at any particular time and location.
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            In case your account has not been opened by Team Ratnakar Securities Limited, after the tenth day passing by from the day of collection of all necessary supporting documents and receipt of all due authorizations from you, you may request for a full refund of the charges as paid by you towards account opening.
          </p>

          <p className="text-[16px] text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
            In case you have paid the charges relating to account opening multiple times, please sent mail on <a href="mailto:accounts@ratnakarsecurities.com" className="text-[#004f7a] hover:underline font-bold" style={{ color: "#004f7a" }}>accounts@ratnakarsecurities.com</a> and we will initiate the necessary procedure to refund your money.
          </p>

          <div
            className="text-[16px] text-slate-900 leading-relaxed font-semibold italic border-l-4 border-[#004f7a] pl-4 py-3 mt-8 bg-sky-50 rounded-r-xl"
            style={{ backgroundColor: "#f0f9ff", color: "#0f172a", borderLeftColor: "#004f7a" }}
          >
            <span className="font-bold text-slate-900" style={{ color: "#0f172a" }}>Note:</span> The completion of the refund procedure is subject to agencies such as banks, payment gateways.
          </div>

        </div>
      </Container>
    </div>
  );
}
