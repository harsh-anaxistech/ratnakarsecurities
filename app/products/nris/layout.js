import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "NRI Investment Services in India | Ratnakar Securities",
  description: "Seamless wealth and stock market investment solutions for Non-Resident Indians (NRIs) and foreign nationals, backed by extensive research.",
  path: "/products/nris",
});

export default function NRIsLayout({ children }) {
  return children;
}
