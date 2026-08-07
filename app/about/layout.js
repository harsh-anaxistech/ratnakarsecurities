import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "About Us - Our Profile & Leadership | Ratnakar Securities",
  description: "Learn about Ratnakar Securities, our journey since 1994, our leadership team, and our commitment to helping clients create and preserve wealth.",
  path: "/about",
});

export default function AboutLayout({ children }) {
  return children;
}
