import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "SIP Calculator | Mutual Fund Investment & Returns Calculator | Ratnakar Securities",
  description:
    "Use the Ratnakar Securities SIP Calculator to estimate mutual fund returns, plan monthly investments, calculate future wealth, and achieve your long-term financial goals.",
  path: "/sip-calculator",
});

export default function SipCalculatorLayout({ children }) {
  return children;
}
