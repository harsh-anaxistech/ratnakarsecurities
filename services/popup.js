/**
 * Startup Advisory Popup Service
 * 
 * Fetches active regulatory announcements, promotional alerts, or SEBI circular advisories
 * displayed to users upon site visit.
 */
import { API_BASE_URL } from "./config";

/**
 * Fetch dynamic active popup from the API.
 * Tries configured API_BASE_URL first, then falls back to local endpoint.
 * 
 * @returns {Promise<Object|null>} The API response containing active popup data or null
 */
export async function getActivePopup() {
  const urlsToTry = [
    `${API_BASE_URL}/popup/active`,
    "http://localhost:6010/api/popup/active",
  ];

  // Remove duplicate URLs
  const uniqueUrls = Array.from(new Set(urlsToTry));

  for (const url of uniqueUrls) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (response.ok) {
        const rawData = await response.json();
        let result = rawData;
        if (typeof rawData === "string") {
          try {
            result = JSON.parse(rawData);
          } catch (e) {
            console.error("Error parsing popup JSON:", e);
          }
        }
        if (result && result.success && result.data) {
          return result;
        }
      }
    } catch (error) {
      console.warn(`Failed to fetch active popup from ${url}:`, error);
    }
  }

  return null;
}
