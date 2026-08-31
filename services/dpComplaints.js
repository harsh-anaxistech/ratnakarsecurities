import { API_BASE_URL } from "./config";

/**
 * Fetch public DP complaints trends data (monthly & annual trends)
 * @param {string} [finyear] - Optional financial year filter (e.g., "2024-25", "2026-27")
 * @returns {Promise<{success: boolean, message: string, data: any}>}
 */
export async function getDpComplaintsPublic(finyear = "") {
  try {
    const url = finyear
      ? `${API_BASE_URL}/dp-complaints/public?finyear=${encodeURIComponent(finyear)}`
      : `${API_BASE_URL}/dp-complaints/public`;

    const response = await fetch(url, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch DP complaints data: ${response.status} ${response.statusText}`);
    }

    const rawData = await response.json();
    let result = rawData;
    if (typeof rawData === "string") {
      try {
        result = JSON.parse(rawData);
      } catch (e) {
        console.error("Error parsing DP complaints JSON:", e);
      }
    }
    return result;
  } catch (error) {
    console.error("Error in getDpComplaintsPublic:", error);
    return {
      success: false,
      message: error.message || "Failed to load DP complaints data.",
      data: null,
    };
  }
}
