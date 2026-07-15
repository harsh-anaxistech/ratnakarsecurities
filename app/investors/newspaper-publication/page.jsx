import Container from "@/components/common/Container";
import { Download } from "lucide-react";
import { generatePageMetadata } from "@/constants/metadata";
import { getInvestorDocuments } from "@/services/investors";

export const metadata = generatePageMetadata({
  title: "Newspaper Publication :: Ratnakar Securities Limited.",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management.",
  path: "/investors/newspaper-publication",
});

// Helper function to extract title and date from the API's file caption (e.g., "Newspaper Publication 30.06.2025")
function parseCaption(caption) {
  if (!caption) return { title: "Newspaper Publication", date: "" };
  
  // Extract date from the end of the caption (supporting format like DD.MM.YYYY, DD-MM-YYYY, or DD/MM/YYYY)
  const dateRegex = /\s*(\d{2}[\.\-/]\d{2}[\.\-/]\d{4})$/;
  const match = caption.match(dateRegex);
  if (match) {
    const date = match[1];
    const title = caption.replace(dateRegex, "").trim();
    return { title, date };
  }
  return { title: caption, date: "" };
}

export default async function NewspaperPublicationPage() {
  let groupedData = [];
  try {
    const response = await getInvestorDocuments("Newspaper Publication");
    if (response.success && response.data && Array.isArray(response.data.grouped)) {
      groupedData = response.data.grouped;
    }
  } catch (error) {
    console.error("Error fetching newspaper publications:", error);
  }

  return (
    <section className="py-16 bg-background">
      <Container>
        <h2 className="mb-10 text-3xl font-bold text-light-blue md:text-4xl text-center md:text-left">
          Newspaper Publication
        </h2>
        
        {groupedData.length === 0 ? (
          <div className="text-center py-16 bg-muted/30 border border-border border-dashed rounded-lg">
            <p className="text-muted-foreground text-lg">
              No newspaper publications available at the moment.
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
                      const { title, date } = parseCaption(file.caption);
                      const fileUrl = file.fileurl || file.FILEURL;
                      return (
                        <div
                          key={file.srno}
                          className="relative bg-white border border-border hover:border-primary/40 rounded-lg pt-10 pb-12 px-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 group min-h-[150px]"
                        >
                          <h4 className="text-[16px] font-bold text-light-blue leading-snug group-hover:text-primary transition-colors duration-200">
                            {title}
                          </h4>
                          {date && (
                            <p className="mt-2 text-[14px] font-semibold text-light-blue">
                              {date}
                            </p>
                          )}
                          
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
