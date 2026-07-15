import { API_BASE_URL } from "./config";

/**
 * Fetch all dynamic research sections from the API.
 * @returns {Promise<Object>} The API response containing sections array
 */
export async function getResearchSections() {
  const response = await fetch(`${API_BASE_URL}/research/sections`, {
    next: { revalidate: 60 } // Revalidate cache every 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch research sections: ${response.statusText}`);
  }

  const rawData = await response.json();
  let result = rawData;
  if (typeof rawData === "string") {
    try {
      result = JSON.parse(rawData);
    } catch (e) {
      console.error("Error parsing sections JSON:", e);
    }
  }
  return result;
}

/**
 * Fetch research reports by section name.
 * @param {string} sectionName - The section name (e.g., "Company", "IPOs")
 * @returns {Promise<Object>} The API response containing reports array
 */
export async function getResearchReports(sectionName) {
  const response = await fetch(`${API_BASE_URL}/research/front?section=${encodeURIComponent(sectionName)}`, {
    next: { revalidate: 60 } // Revalidate cache every 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch research reports: ${response.statusText}`);
  }

  const rawData = await response.json();
  let result = rawData;
  if (typeof rawData === "string") {
    try {
      result = JSON.parse(rawData);
    } catch (e) {
      console.error("Error parsing reports JSON:", e);
    }
  }
  return result;
}
