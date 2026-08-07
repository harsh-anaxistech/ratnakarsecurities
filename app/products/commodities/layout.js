import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Commodities Trading - MCX & NCDEX | Ratnakar Securities",
  description: "Trade in commodity futures and spot markets across agricultural products, metals, and energy. Secure hedging and risk management tools.",
  path: "/products/commodities",
});

export default function CommoditiesLayout({ children }) {
  return children;
}
