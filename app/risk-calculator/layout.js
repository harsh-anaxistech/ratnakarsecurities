import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Risk Profiling & Calculator | Ratnakar Securities",
  description: "Assess your risk appetite and find the ideal investment profile with our Risk Profile Calculator. Plan your investments based on your capacity.",
  path: "/risk-calculator",
});

export default function RiskCalculatorLayout({ children }) {
  return children;
}
