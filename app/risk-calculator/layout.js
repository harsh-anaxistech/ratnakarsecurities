import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Risk Profile Calculator | Investment Risk Assessment | Ratnakar Securities",
  description:
    "Evaluate your investment risk tolerance with the Ratnakar Securities Risk Profile Calculator. Assess your risk appetite and choose investment strategies aligned with your financial goals.",
  path: "/risk-calculator",
});

/**
 * Risk Calculator Layout
 * 
 * Exports canonical SEO metadata for the investor risk profile assessment tool.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function RiskCalculatorLayout({ children }) {
  return children;
}
