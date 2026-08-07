import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Comprehensive Wealth Management Services | Ratnakar Securities",
  description: "Protect and grow your wealth at every stage of life. Personalized solutions and dedicated wealth managers for all your financial goals.",
  path: "/products/wealth-management",
});

export default function WealthManagementLayout({ children }) {
  return children;
}
