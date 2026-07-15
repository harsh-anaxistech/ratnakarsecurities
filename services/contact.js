import { API_BASE_URL } from "./config";

/**
 * Contact Service API
 * 
 * Contains functions to communicate with the contact-related backend endpoints.
 */

/**
 * Submits the contact us form data to the backend API.
 * 
 * @param {Object} contactData - The customer inquiry data
 * @param {string} contactData.name - Full name of the contact person
 * @param {string} contactData.department - Selected department (e.g. Accounts, Trading, etc.)
 * @param {string} contactData.email - Contact email address
 * @param {string} contactData.phno - Mobile/Phone number
 * @param {string} contactData.subject - Inquiry subject
 * @param {string} contactData.details - Detailed message text
 * @returns {Promise<Object>} The JSON response from the server
 */
export async function submitContactForm(contactData) {
  // Construct the POST request to /api/contacts using the base URL
  const response = await fetch(`${API_BASE_URL}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: contactData.name,
      department: contactData.department,
      email: contactData.email,
      phno: contactData.phno,
      subject: contactData.subject,
      details: contactData.details,
    }),
  });

  // Raise error if response is not in the successful range (200-299)
  if (!response.ok) {
    throw new Error(`Failed to submit inquiry: ${response.statusText}`);
  }

  // Parse and return the successful response data
  return await response.json();
}
