import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";
import { Download, FileText, FileBadge } from "lucide-react";
import { generatePageMetadata } from "@/constants/metadata";
import { getInvestorDocuments } from "@/services/investors";

export const metadata = generatePageMetadata({
  title: "Shareholding Pattern :: Ratnakar Securities Limited.",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management.",
  path: "/investors/shareholding-pattern",
});

export default async function ShareholdingPatternPage() {
  let groupedData = [];
  try {
    const response = await getInvestorDocuments("Shareholding Pattern");
    if (response.success && response.data && Array.isArray(response.data.grouped)) {
      groupedData = response.data.grouped;
    }
  } catch (error) {
    console.error("Error fetching shareholding pattern:", error);
  }

  return (
    <main className="bg-background min-h-screen">
      <HeroSection 
        title="Shareholding Pattern"
        breadcrumbs={[
          { label: "Investors", href: "/investors" },
          { label: "Shareholding Pattern" }
        ]}
        mobileImage="/images/about/mobile banner/investor mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      <section className="py-12 bg-[#f7f9fc]">
        <Container>
          <div className="mb-12 text-center">
            <div className="text-[14px] font-black tracking-widest uppercase mb-3" style={{ color: "rgb(234, 40, 48)" }}>
              Investors
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight mb-4">
              Shareholding Pattern
            </h2>
            <p className="text-[16px] text-gray-700 max-w-3xl mx-auto font-medium">
              View and download our detailed shareholding patterns and related documents.
            </p>
          </div>
          
          {groupedData.length === 0 ? (
            <div className="text-center py-20 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <FileBadge className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-bold text-gray-900">No shareholding patterns found</h3>
              <p className="text-gray-500 mt-2 font-medium">
                There are currently no shareholding pattern documents available for viewing.
              </p>
            </div>
          ) : (
            <div className="space-y-16">
              {groupedData.map((group) => (
                <div key={group.financialYear} className="space-y-6">
                  {group.financialYear && (
                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2 mb-6 text-center">
                      Financial Year {group.financialYear}
                    </h3>
                  )}
                  
                  <div className="flex flex-wrap justify-center gap-6">
                    {group.files &&
                      group.files.map((file) => {
                        const fileUrl = file.fileurl || file.FILEURL;
                        return (
                          <a
                            key={file.srno}
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-6 border border-gray-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#EA2830]/10 hover:border-[#EA2830]/30 flex flex-col items-center text-center h-[260px] w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-19.2px)] min-w-[240px] max-w-[280px]"
                          >
                            <div className="w-14 h-14 bg-[#EA2830] rounded-full flex items-center justify-center text-white mb-5 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                              <FileText size={24} />
                            </div>
                            
                            <h4 className="text-[16px] font-sans font-medium text-gray-900 mb-6 line-clamp-3 leading-snug group-hover:text-[#EA2830] transition-colors duration-300">
                              {file.caption}
                            </h4>
                            
                            <div className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 text-gray-600 text-sm font-semibold group-hover:bg-[#EA2830] group-hover:text-white transition-colors duration-300">
                              <Download size={16} className="stroke-[2.5]" />
                              <span>Download</span>
                            </div>
                          </a>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
