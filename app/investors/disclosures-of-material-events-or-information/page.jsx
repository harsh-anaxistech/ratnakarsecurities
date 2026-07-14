import Container from "@/components/common/Container";
import { Download } from "lucide-react";
import { generatePageMetadata } from "@/constants/metadata";
import { getInvestorDocuments } from "@/services/investors";

export const metadata = generatePageMetadata({
  title:
    "Disclosures of Material Events or Information :: Ratnakar Securities Limited.",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management.",
  path: "/investors/disclosures-of-material-events-or-information",
});

export default async function DisclosuresPage() {
  let groupedData = [];
  try {
    const response = await getInvestorDocuments("Disclosures of material events or information");
    if (response.success && response.data && Array.isArray(response.data.grouped)) {
      groupedData = response.data.grouped;
    }
  } catch (error) {
    console.error("Error fetching disclosures:", error);
  }

  return (
    <section className="py-16 bg-background">
      <Container>
        <h2 className="mb-10 text-3xl font-bold text-light-blue md:text-4xl text-center md:text-left">
          Disclosures of Material Events or Information
        </h2>
        
        {groupedData.length === 0 ? (
          <div className="text-center py-16 bg-muted/30 border border-border border-dashed rounded-lg">
            <p className="text-muted-foreground text-lg">
              No disclosures available at the moment.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {groupedData.map((group) => (
              <div key={group.financialYear} className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">
                  Financial year {group.financialYear}
                </h3>
                
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
                  {group.files &&
                    group.files.map((file) => {
                      const fileUrl = file.fileurl || file.FILEURL;
                      return (
                        <div
                          key={file.srno}
                          className="relative bg-white border border-border hover:border-primary/40 rounded-lg pt-10 pb-12 px-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 group min-h-[160px]"
                        >
                          <h4 className="text-[16px] font-bold text-light-blue leading-snug group-hover:text-primary transition-colors duration-200">
                            {file.caption}
                          </h4>
                          
                          {/* Hanging red download button with micro-animation on hover */}
                          <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-14 h-10 bg-primary hover:bg-primary-dark text-white rounded-b-2xl flex items-center justify-center shadow-md transition-all duration-200 hover:h-11 hover:-bottom-6 cursor-pointer"
                            aria-label={`Download ${file.caption}`}
                          >
                            <Download size={18} className="stroke-[2.5]" />
                          </a>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
