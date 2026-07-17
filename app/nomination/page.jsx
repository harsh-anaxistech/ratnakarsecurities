import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Nomination :: Ratnakar Securities Limited.",
  description: "Follow the steps for Nomination and open the nomination form for Ratnakar Securities.",
  path: "/nomination",
});

export default function NominationPage() {
  return (
    <main className="bg-[#f7f9fc] min-h-screen pb-16">
      {/* Banner Section */}
      <HeroSection
        title="Nomination"
        breadcrumbs={[{ label: "Nomination" }]}
        image="/images/about/AboutUs-Ratnakarsec.png"
        height="h-[300px] md:h-[400px]" 
      />

      {/* Content Section */}
      <Container className="mt-12">
        <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-10 md:p-12 space-y-6 max-w-4xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900 mb-2">Nomination</h2>
          
          <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-4">
            Please follow the following steps for the Nomination.
          </h3>

          <ul className="space-y-4 text-[16px] text-[#314158] leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-primary shrink-0 mt-1.5">•</span>
              <div>
                Please{" "}
                <a 
                  href="https://api.ratnakarsecurities.com/uploads/files/for-nomination-form.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-dark font-medium underline"
                >
                  Click here
                </a>{" "}
                to open the Nomination Form (Trading & DP).
              </div>
            </li>
            
            <li className="flex items-start gap-2">
              <span className="text-primary shrink-0 mt-1.5">•</span>
              <div className="space-y-2">
                <span>Please fill either of the following:</span>
                <ul className="pl-6 space-y-2 list-none">
                  <li className="flex items-start gap-2">
                    <span className="text-[#314158]/60 shrink-0 mt-1.5">•</span>
                    <span>Annexure A: Format for nomination form or</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#314158]/60 shrink-0 mt-1.5">•</span>
                    <span>{"Annexure B: Opt out of nomination through 'Declaration Form'"}</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <p className="text-[15px] text-[#314158]/80 leading-relaxed pt-4 border-t border-slate-100">
            Please fill the form and send it at our registered address:{" "}
            <span className="font-medium text-slate-800">
              Ratnakar Securities Pvt Ltd, 304, Sankalp Square II, Near Jalaram Mandir Crossing, Ellisbridge, Gujarat - 380006 (India).
            </span>
          </p>
          
        </div>
      </Container>
    </main>
  );
}
