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

/**
 * Submits partner with us form data to the backend API.
 * Maps field name aliases (e.g., fullName/name, phone/phno, interseted/interest) for backend compatibility.
 * 
 * @param {Object} partnerData - Partner inquiry form data
 * @param {string} partnerData.fullName - Full name of the interested partner
 * @param {string} partnerData.email - Business or personal email address
 * @param {string} partnerData.phone - 10-digit mobile contact number
 * @param {string} partnerData.city - City of residence/operation
 * @param {string} partnerData.timeslot - Preferred callback time slot
 * @param {string} partnerData.interseted - Chosen partnership domain/vertical
 * @returns {Promise<Object>} Resolves with JSON response on success
 * @throws {Error} Throws API error message or statusText on failure
 */
export async function submitPartnerForm(partnerData) {
  const response = await fetch(`${API_BASE_URL}/contacts/partner`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName: partnerData.fullName,
      name: partnerData.fullName,
      email: partnerData.email,
      phone: partnerData.phone,
      phno: partnerData.phone,
      city: partnerData.city,
      timeslot: partnerData.timeslot,
      interseted: partnerData.interseted,
      interest: partnerData.interseted,
    }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    const detailMsg = errData.data && errData.data.errors && Array.isArray(errData.data.errors) 
      ? errData.data.errors.join(", ") 
      : null;
    throw new Error(detailMsg || errData.message || `Failed to submit partner request: ${response.statusText}`);
  }

  return await response.json();
}


