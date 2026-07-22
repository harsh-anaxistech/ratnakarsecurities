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
        image="/images/about/nomination f.jpg"
        height="h-[300px] md:h-[400px]"
      />

      {/* Content Section */}
      <Container className="mt-12">
        <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-10 md:p-12 space-y-6 max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900 mb-2">Nomination</h2>

          <h3 className="text-xl font-bold text-[#ea2830] mb-6">
            Please follow the following steps for the Nomination.
          </h3>

          <ul className="list-disc pl-6 space-y-4 text-[16px] text-[#314158] leading-relaxed marker:text-[#ea2830]">
            <li>
              Please{" "}
              <a
                href="https://api.ratnakarsecurities.com/uploads/files/for-nomination-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00aeee" }}
                className="font-medium underline hover:opacity-80 transition-opacity"
              >
                Click here
              </a>{" "}
              to open the Nomination Form (Trading & DP).
            </li>

            <li>
              Please fill either of the following: Annexure A: Format for nomination form or Annexure B: Opt out of nomination through 'Declaration Form'
            </li>
          </ul>

          <p className="text-[16px] text-[#314158] leading-relaxed pt-4 border-t border-slate-100">
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