import { redirect } from "next/navigation";

/**
 * Partner Redirect Route
 * 
 * Redirects legacy `/partner` traffic to canonical `/partner-with-us` page.
 */
export default function PartnerRedirectPage() {
  redirect("/partner-with-us");
}
