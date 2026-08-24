import InvestorCharterStockBroker from "@/components/investors/InvestorCharterStockBroker";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "SEBI Complaints & Disposal Trends :: Ratnakar Securities Limited",
  description:
    "Trend of monthly and annual disposal of complaints received against the Stock Broker under SEBI circular guidelines.",
  path: "/investors/complaints-trends",
});

export default function ComplaintsTrendsPage() {
  return <InvestorCharterStockBroker defaultTab="complaints" />;
}
