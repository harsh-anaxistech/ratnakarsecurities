import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { Download } from "lucide-react";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Products :: Ratnakar Securities Limited.",
  description:
    "Explore our wide range of financial products including equity trading, derivatives, mutual funds, commodities, and more.",
  path: "/products",
});

const products = [
  {
    year: "Trading Products",
    documents: [
      { title: "Equity Trading" },
      { title: "Derivatives (F&O)" },
      { title: "Commodities Trading" },
      { title: "Currency Trading" },
    ],
  },
  {
    year: "Investment Products",
    documents: [
      { title: "Mutual Funds" },
      { title: "Bonds & Fixed Income" },
      { title: "Wealth Management" },
      { title: "Portfolio Management Services" },
    ],
  },
];

export default function ProductsPage() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">
          Products Overview
        </h2>
        <div className="space-y-10">
          {products.map((section) => (
            <div key={section.year}>
              <h3 className="mb-5  bg-muted  text-base font-medium px-3 py-1 w-fit rounded-sm text-foreground">
                {section.year}
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
                {section.documents.map((doc, index) => (
                  <div key={index} className="flex h-full flex-col">
                    <div className="group flex-1 rounded-sm border bg-muted border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
                          <h4 className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
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
