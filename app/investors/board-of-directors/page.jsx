import Container from "@/components/common/Container";
import Link from "next/link";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Board of Directors :: Ratnakar Securities Limited.",
  description:
    "Invest with confidence. Ratnakar Securities offers equity trading, derivatives, mutual funds, IPO, bonds, and portfolio management.",
  path: "/investors/board-of-directors",
});

export default function BoardOfDirectorsPage() {
  const directors = [
    {
      name: "Ajay Jayantilal Shah",
      designation: "Chairman and Managing Director",
      description:
        "Mr. Ajay Jayantilal Shah, born in 1951, holds a BSc from Gujarat University and brings over 30 years of combined experience in stock broking and banking. He founded Ratnakar Securities in 1994, securing memberships with NSE and BSE, and establishing it as an NSDL Depository Participant. His leadership extended to serving as President of the Ahmedabad Stock Exchange, demonstrating his significant influence in India's securities market.",
    },
    {
      name: "Mr. Kushal Ajay Shah",
      designation: "Whole Time Director",
      description:
        "Mr. Kushal Ajay Shah, born in 1988, holds a Business Management degree from Christ College and a PGDM in Financial Markets from Gujarat University. With 15 years of experience, he has expertise in Investment Banking, Broking Operations, and Compliance at Ratnakar Securities, while also serving on the BSE Brokers Forum Board for six years. He has been instrumental in modernizing the firm's technology infrastructure to enhance client experience.",
    },
    {
      name: "Harsh Vinodbhai Mittal",
      designation: "Non-Executive Independent Director",
      description:
        "Mr. Harsh Vinod Mittal is an Independent Director at Ratnakar Securities Limited, holding a Bachelor of Commerce and dual management degrees from the Entrepreneurship Development Institute of India. Over the past 12 years, he has managed the Vinod Group and transformed Vinod Cotfab Private Limited from a weaving unit into a diversified textile enterprise, demonstrating expertise in entrepreneurship and business expansion.",
    },
    {
      name: "Pratapbhai Teli Mukundbhai",
      designation: "Non-Executive Independent Director",
      description:
        "Mr. Pratap Teli serves as an Independent Director at Ratnakar Securities Limited and holds leadership positions at Pharmatech Process Equipments. With degrees in mechanical engineering and metallurgy, he brings 42 years of manufacturing expertise, specializing in production of pharmaceutical equipment and market development.",
    },
    {
      name: "Krina Sujal Desai",
      designation: "Non-Executive Independent Director",
      description:
        "Mrs. Krina Desai serves as an Independent Director at Ratnakar Securities Limited and is the owner of Devus Chocolates. With over 20 years of experience as a chocolatier, she has built a successful business serving prestigious clients including airlines and luxury brands, demonstrating strong entrepreneurial and strategic management skills.",
    },
  ];

  return (
    <Container>
      <div className="py-10 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-light-blue">
            Board of Directors
          </h1>
          <nav aria-label="Breadcrumbs">
            <ol className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <span className="text-muted-foreground/60" aria-hidden="true">•</span>
              <li>
                <Link href="/investors" className="hover:text-primary transition-colors duration-200">
                  Investors
                </Link>
              </li>
              <span className="text-muted-foreground/60" aria-hidden="true">•</span>
              <li className="font-semibold text-primary" aria-current="page">
                Board of Directors
              </li>
            </ol>
          </nav>
        </div>

        <div className="space-y-6">
          {directors.map((member, index) => (
            <div
              key={index}
              className="bg-[#f8fafc] border border-border rounded-sm p-8 md:p-10 hover:shadow-md hover:border-secondary/30 transition-all duration-300 text-center md:text-left"
            >
              <h2 className="text-2xl font-semibold text-secondary">
                {member.name}
              </h2>

              <p className="text-primary text-md md:text-lg mt-2 mb-1">
                {member.designation}
              </p>

              <p className="text-muted-foreground leading-8 text-base mt-4">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
