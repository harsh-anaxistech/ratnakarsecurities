import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "About Us - Our Profile & Leadership | Ratnakar Securities",
  description: "Learn about Ratnakar Securities, our journey since 1994, our leadership team, and our commitment to helping clients create and preserve wealth.",
  path: "/about",
});

/**
 * About Us Segment Layout
 * 
 * Exports canonical SEO metadata and renders child page components.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function AboutLayout({ children }) {
  return children;
}
