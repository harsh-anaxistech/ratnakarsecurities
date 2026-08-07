import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Equity Trading & Investment Solutions | Ratnakar Securities",
  description: "Invest in Indian equities cash market, Equity SIPs, IPOs, and long-term portfolios with Ratnakar Securities' research-backed advisory.",
  path: "/products/equity",
});

export default function EquityLayout({ children }) {
  return children;
}
