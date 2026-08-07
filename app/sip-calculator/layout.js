import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "SIP Calculator - Mutual Fund SIP Calculator | Ratnakar Securities",
  description: "Calculate your future returns with our easy-to-use Mutual Fund SIP Calculator. Plan your wealth creation journey and achieve your financial goals.",
  path: "/sip-calculator",
});

export default function SipCalculatorLayout({ children }) {
  return children;
}
