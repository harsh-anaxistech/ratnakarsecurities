import InvestorGrievance from "@/components/investors/InvestorGrievance";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Investor Grievance Redressal & Disclosures :: Ratnakar Securities Limited",
  description:
    "A one-stop platform for investors to raise queries and grievances, track complaints, view GRC and arbitration procedures, and access NSDL regulatory disclosures.",
  path: "/investors/investor-grievance",
});

export default function InvestorsGrievanceSubPage() {
  return <InvestorGrievance />;
}
