import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Derivatives Trading - Futures & Options | Ratnakar Securities",
  description: "Trade in Futures, Options, and Currency Derivatives. Hedge your risks and leverage your position with expert advice from Ratnakar Securities.",
  path: "/products/derivatives",
});

export default function DerivativesLayout({ children }) {
  return children;
}
