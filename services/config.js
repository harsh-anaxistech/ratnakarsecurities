/**
 * API Configuration
 * 
 * Centralized file for managing API base URLs and environment settings.
 * 
 * It dynamically selects the API base URL depending on the client-side environment variable:
 * - NEXT_PUBLIC_APP_ENV: 'local', 'stage' (or 'staging'), or 'production'
 * - NEXT_PUBLIC_API_URL: Direct URL override (takes highest precedence)
 */

// Retrieve environment environment stage (defaults to 'local')
const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV || "local";

const API_ENV_URLS = {
  local: "https://jokingly-smoking-blooming.ngrok-free.dev/api",
  stage: "https://staging.api.ratnakarsecurities.com/api",
  staging: "https://staging.api.ratnakarsecurities.com/api",
  production: "https://api.ratnakarsecurities.com/api",
};

// Export the resolved API Base URL (highest priority is direct variable override)
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  API_ENV_URLS[APP_ENV.toLowerCase()] ||
  API_ENV_URLS.local;
