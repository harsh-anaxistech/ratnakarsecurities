/**
 * API Configuration Module
 * 
 * Centralized service module for managing API base URLs and runtime environment configurations.
 * Resolves the target backend endpoint based on environment priority:
 * 1. `NEXT_PUBLIC_API_URL` (Direct environment override - highest priority)
 * 2. `NEXT_PUBLIC_APP_ENV` ('local', 'stage'/'staging', 'prod'/'production')
 * 3. Default fallback to local development URL (`http://localhost:6010/api`)
 */

// Active application environment identifier (defaults to 'local')
const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV || "local";

/**
 * Mapping of deployment environment keys to their respective API gateway endpoints.
 * @type {Record<string, string>}
 */
const API_ENV_URLS = {
  local: "http://localhost:6010/api",
  stage: "https://api.ratnakarsecurities.com/api",
  staging: "https://api.ratnakarsecurities.com/api",
  prod: "https://api.ratnakarsecurities.com/api",
  production: "https://api.ratnakarsecurities.com/api",
};

/**
 * The resolved API Base URL used across all data-fetching services.
 * @type {string}
 */
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  API_ENV_URLS[APP_ENV.toLowerCase()] ||
  API_ENV_URLS.local;


