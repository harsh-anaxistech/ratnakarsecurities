import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Securities Lending and Borrowing Scheme (SLBM) | Ratnakar Securities",
  description: "Maximize returns on your idle stocks. Lend securities to earn incremental income or borrow to meet short-selling needs under SEBI guidelines.",
  path: "/products/slbm",
});

export default function SLBMLayout({ children }) {
  return children;
}
