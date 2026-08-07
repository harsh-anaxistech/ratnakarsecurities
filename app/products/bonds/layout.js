import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Bonds & Debt Securities Investments | Ratnakar Securities",
  description: "Invest in secure bonds and NCDs for steady income and principal protection. Explore tax advantages and government-backed securities with our research.",
  path: "/products/bonds",
});

export default function BondsLayout({ children }) {
  return children;
}
