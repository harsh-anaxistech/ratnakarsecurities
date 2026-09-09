import InvestorCharterStockBroker from "@/components/investors/InvestorCharterStockBroker";
import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Investor Charter of Stock Broker & SEBI Complaints Trends :: Ratnakar Securities Limited",
  description:
    "Data on complaints received against the Stock Broker and monthly disposal trends in compliance with SEBI regulatory guidelines.",
  path: "/investor-charter-stock-broker",
});

/**
 * Investor Charter of Stock Broker Route
 * 
 * Renders `InvestorCharterStockBroker` pre-selected to the "charter-details" tab.
 */
export default function InvestorCharterStockBrokerPage() {
  return <InvestorCharterStockBroker defaultTab="charter-details" />;
}
