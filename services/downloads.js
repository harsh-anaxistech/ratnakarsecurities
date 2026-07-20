import { API_BASE_URL } from "./config";

/**
 * Fetch all download sections (headers) from the API.
 * @returns {Promise<Object>} The API response containing sections
 */
export async function getDownloadSections() {
  const response = await fetch(`${API_BASE_URL}/downloads/sections`, {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch download sections: ${response.statusText}`);
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
 * Fetch subsections (subheaders) for a given section ID.
 * @param {string|number} sectionId - The section ID
 * @returns {Promise<Object>} The API response containing subsections
 */
export async function getDownloadSubsections(sectionId) {
  const response = await fetch(`${API_BASE_URL}/downloads/sections/${sectionId}/subsections`, {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch subsections for section ${sectionId}: ${response.statusText}`);
  }

  const rawData = await response.json();
  let result = rawData;
  if (typeof rawData === "string") {
    try {
      result = JSON.parse(rawData);
    } catch (e) {
      console.error("Error parsing subsections JSON:", e);
    }
  }
  return result;
}

/**
 * Fetch subheader data / download files for a section and subsection.
 * @param {string|number} sectionId - The section ID
 * @param {string|number} [subsectionId] - The subsection ID (optional)
 * @returns {Promise<Object>} The API response containing download items
 */
export async function getDownloadFront(sectionId, subsectionId) {
  let url = `${API_BASE_URL}/downloads/front?section=${encodeURIComponent(sectionId)}`;
  if (subsectionId !== undefined && subsectionId !== null && subsectionId !== "") {
    url += `&subsection=${encodeURIComponent(subsectionId)}`;
  }

  const response = await fetch(url, {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch download items: ${response.statusText}`);
  }

  const rawData = await response.json();
  let result = rawData;
  if (typeof rawData === "string") {
    try {
      result = JSON.parse(rawData);
    } catch (e) {
      console.error("Error parsing download front JSON:", e);
    }
  }
  return result;
}
