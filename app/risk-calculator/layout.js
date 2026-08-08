import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Risk Profile Calculator | Investment Risk Assessment | Ratnakar Securities",
  description:
    "Evaluate your investment risk tolerance with the Ratnakar Securities Risk Profile Calculator. Assess your risk appetite and choose investment strategies aligned with your financial goals.",
  path: "/risk-calculator",
});

export default function RiskCalculatorLayout({ children }) {
  return children;
}
