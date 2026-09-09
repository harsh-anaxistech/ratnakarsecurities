import { generatePageMetadata } from "@/constants/metadata";

export const metadata = generatePageMetadata({
  title: "Investor Charter for Depository Participants (DP) :: Ratnakar Securities Limited",
  description:
    "Investor Charter for Depositories and Depository Participants in compliance with SEBI & NSDL circulars. View services, grievance redressal, BSDA norms, Dos & Don'ts, rights, responsibilities, and codes of conduct.",
  path: "/static/investor-charter",
});

/**
 * Depository Participant Investor Charter Layout
 * 
 * Exports canonical SEO metadata for the DP Investor Charter.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export default function Layout({ children }) {
  return children;
}
