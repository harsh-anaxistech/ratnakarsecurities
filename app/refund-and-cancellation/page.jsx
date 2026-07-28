import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Refund & Cancellation Policy :: Ratnakar Securities Limited.",
  description: "Refund and Cancellation Policy of Ratnakar Securities Limited.",
  path: "/refund-and-cancellation",
});

export default function RefundCancellationPage() {
  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-16">
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
        <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-10 md:p-12 space-y-6 max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900 mb-2">Refund & Cancellation</h2>
          <h3 className="text-xl font-bold text-[#ea2830] mb-6">At Ratnakar, We Care!</h3>

          <p className="text-[16px] text-[#314158] leading-relaxed">
            The Refund & Cancellation policy for all payments made towards account opening or any other services using any mode of payment shall stand as under:
          </p>

          <p className="text-[16px] text-[#314158] leading-relaxed">
            The Fees paid towards account opening charges for enabling equities and derivatives, or any other services is non-refundable.
          </p>

          <p className="text-[16px] text-[#314158] leading-relaxed">
            Pick up of required documents related to the account opening procedure is subject to availability of our representatives, given at any particular time and location.
          </p>

          <p className="text-[16px] text-[#314158] leading-relaxed">
            In case your account has not been opened by Team Ratnakar Securities Limited, after the tenth day passing by from the day of collection of all necessary supporting documents and receipt of all due authorizations from you, you may request for a full refund of the charges as paid by you towards account opening.
          </p>

          <p className="text-[16px] text-[#314158] leading-relaxed">
            In case you have paid the charges relating to account opening multiple times, please sent mail on <a href="mailto:accounts@ratnakarsecurities.com" className="text-[#1a6eb5] hover:underline font-medium">accounts@ratnakarsecurities.com</a> and we will initiate the necessary procedure to refund your money.
          </p>

          <p className="text-[16px] text-[#314158] leading-relaxed font-semibold italic border-l-4 border-[#1a6eb5] pl-4 py-2 mt-8 bg-[#1a6eb5]/5">
            <span className="text-slate-800">Note:</span> The completion of the refund procedure is subject to agencies such as banks, payment gateways.
          </p>

        </div>
      </Container>
    </div>
  );
}
