import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Premium Wealth Services for HNIs | Ratnakar Securities",
  description: "Exclusive investment options, tailored portfolio advisory, and dedicated relationship managers for High Net-Worth Individuals (HNIs).",
  path: "/products/hnis",
});

export default function HNIsLayout({ children }) {
  return children;
}
