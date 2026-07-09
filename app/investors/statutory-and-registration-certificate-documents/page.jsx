import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { Download } from "lucide-react";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title:
    "Statutory and Registration Certificate Documents :: Ratnakar Securities Limited.",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management.",
  path: "/investors/statutory-and-registration-certificate-documents",
});

const reports = [
  {
    year: "Statutory Documents",
    documents: [
      { title: "Certificate of Incorporation" },
      { title: "Memorandum of Association" },
      { title: "Articles of Association" },
      { title: "PAN Card" },
    ],
  },
  {
    year: "Registration Certificates",
    documents: [
      { title: "SEBI Registration Certificate" },
      { title: "NSE Membership Certificate" },
      { title: "BSE Membership Certificate" },
      { title: "NSDL DP Registration Certificate" },
      { title: "CDSL DP Registration Certificate" },
    ],
  },
];

export default function StatutoryDocumentsPage() {
  return (
    <section className="py-10">
      <Container>
        <h2 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">
          Statutory and Registration Certificate Documents
        </h2>
        <div className="space-y-10">
          {reports.map((section) => (
            <div key={section.year}>
              <h3 className="mb-5  bg-muted  text-base font-medium px-3 py-1 w-fit rounded-sm text-foreground">
                {section.year}
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
                {section.documents.map((doc, index) => (
                  <div key={index} className="flex h-full flex-col">
                    <div className="group flex-1 rounded-sm border bg-muted border-border p-6 ">
                      <div className="flex h-full items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-border bg-background ">
                          <Image
                            src="/images/icon/home/pdf-icon.svg"
                            alt="PDF"
                            width={30}
                            height={30}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-base font-mediumtext-foreground ">
                            {doc.title}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <Button
                        as="a"
                        href="/contact"
                        variant="contained"
                        color="primary"
                        className="w-full "
                        leftIcon={<Download size={18} />}
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
