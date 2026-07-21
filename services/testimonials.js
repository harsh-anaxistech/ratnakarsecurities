import { API_BASE_URL } from "./config";

/**
 * Fetch dynamic testimonials from the API.
 * @returns {Promise<Object>} The API response containing testimonials data
 */
export async function getTestimonials() {
  const response = await fetch(`${API_BASE_URL}/testimonials/front`, {
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch testimonials: ${response.statusText}`);
  }

  const rawData = await response.json();
  let result = rawData;
  if (typeof rawData === "string") {
    try {
      result = JSON.parse(rawData);
    } catch (e) {
      console.error("Error parsing testimonials JSON:", e);
    }
  }
  return result;
}
