import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Nomination :: Ratnakar Securities Limited.",
  description: "Follow the steps for Nomination and open the nomination form for Ratnakar Securities.",
  path: "/nomination",
});

/**
 * Trading & Demat Account Nomination Instructions Page
 * 
 * Provides instructions and downloadable forms for SEBI-mandated nomination compliance:
 * - Annexure A: Format for adding nominee(s).
 * - Annexure B: Formal opt-out declaration.
 */
export default function NominationPage() {
  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-16" style={{ backgroundColor: "#f7f9fc" }}>
      {/* Banner Section */}
      <HeroSection
        title="Nomination"
        breadcrumbs={[{ label: "Nomination" }]}
        image="/images/about/nomination f.jpg"
        mobileImage="/images/about/mobile banner/nomination mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      {/* Content Section */}
      <Container className="mt-12">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 md:p-12 space-y-6 max-w-4xl mx-auto" style={{ backgroundColor: "#ffffff" }}>

          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-[#011628] mb-2" style={{ color: "#011628" }}>Nomination</h2>

          <h3 className="text-xl font-bold text-[#881337] mb-6" style={{ color: "#881337" }}>
            Please follow the following steps for the Nomination.
          </h3>

          <ul className="list-disc pl-6 space-y-4 text-[16px] text-slate-700 leading-relaxed marker:text-[#881337]" style={{ color: "#334155" }}>
            <li>
              Please{" "}
              <a
                href="https://api.ratnakarsecurities.com/uploads/files/for-nomination-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Nomination Form (Trading & DP) (PDF) (opens in new tab)"
                className="font-bold text-[#004f7a] hover:text-[#011628] underline transition-colors"
                style={{ color: "#004f7a" }}
              >
                Click here
              </a>{" "}
              to open the Nomination Form (Trading & DP).
            </li>

            <li>
              Please fill either of the following: Annexure A: Format for nomination form or Annexure B: Opt out of nomination through &apos;Declaration Form&apos;
            </li>
          </ul>

          <p className="text-[16px] text-slate-700 leading-relaxed pt-4 border-t border-slate-100" style={{ color: "#334155" }}>
            Please fill the form and send it at our registered address:{" "}
            <span className="font-bold text-slate-900" style={{ color: "#0f172a" }}>
              Ratnakar Securities Pvt Ltd, 304, Sankalp Square II, Near Jalaram Mandir Crossing, Ellisbridge, Gujarat - 380006 (India).
            </span>
          </p>

        </div>
      </Container>
    </div>
  );
}