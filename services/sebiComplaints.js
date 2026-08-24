import { API_BASE_URL } from "./config";

/**
 * Fetch public SEBI complaints trends data (monthly & annual trends)
 * @param {string} [finyear] - Optional financial year filter (e.g., "2024-25", "2026-27")
 * @returns {Promise<{success: boolean, message: string, data: any}>}
 */
export async function getSebiComplaintsPublic(finyear = "") {
  try {
    const url = finyear
      ? `${API_BASE_URL}/sebi-complaints/public?finyear=${encodeURIComponent(finyear)}`
      : `${API_BASE_URL}/sebi-complaints/public`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch SEBI complaints data: ${response.status} ${response.statusText}`);
    }

    const rawData = await response.json();
    let result = rawData;
    if (typeof rawData === "string") {
      try {
        result = JSON.parse(rawData);
      } catch (e) {
        console.error("Error parsing SEBI complaints JSON:", e);
      }
    }
    return result;
  } catch (error) {
    console.error("Error in getSebiComplaintsPublic:", error);
    return {
      success: false,
      message: error.message || "Failed to load SEBI complaints data.",
      data: null,
    };
  }
}
