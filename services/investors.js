import { API_BASE_URL } from "./config";

/**
 * Fetch public investor documents for a specific section.
 * @param {string} sectionName - The section name (e.g., "Newspaper Publication")
 * @returns {Promise<Object>} The API response containing grouped and flat arrays
 */
export async function getInvestorDocuments(sectionName) {
  const response = await fetch(`${API_BASE_URL}/investors/public?sec=${encodeURIComponent(sectionName)}`, {
    next: { revalidate: 60 } // Revalidate cache every 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch investor documents: ${response.statusText}`);
  }

  const rawData = await response.json();
  let result = rawData;
  if (typeof rawData === "string") {
    try {
      result = JSON.parse(rawData);
    } catch (e) {
      console.error("Error parsing investor documents JSON:", e);
    }
  }
  return result;
}

/**
 * Fetch statutory documents from the API.
 * @returns {Promise<Object>} The API response containing the documents array
 */
export async function getStatutoryDocuments() {
  const response = await fetch(`${API_BASE_URL}/statutory-documents/front`, {
    next: { revalidate: 60 } // Revalidate cache every 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch statutory documents: ${response.statusText}`);
  }

  const rawData = await response.json();
  let result = rawData;
  if (typeof rawData === "string") {
    try {
      result = JSON.parse(rawData);
    } catch (e) {
      console.error("Error parsing statutory documents JSON:", e);
    }
  }
  return result;
}
