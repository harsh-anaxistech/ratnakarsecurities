import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Mutual Fund Investment - Invest Online | Ratnakar Securities",
  description: "Invest in top-rated mutual fund schemes online. Benefit from tax savings, portfolio diversification, and goal-based investing advisory.",
  path: "/products/mutual-funds",
});

export default function MutualFundsLayout({ children }) {
  return children;
}
