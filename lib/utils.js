import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicts
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format a Date object or date string to a readable format
 * @param {Date|string} date
 * @param {Intl.DateTimeFormatOptions} options
 */
export function formatDate(date, options = {}) {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  });
}

/**
 * Truncate a string to a maximum length, appending ellipsis
 * @param {string} str
 * @param {number} maxLength
 */
export function truncate(str, maxLength = 100) {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + "…";
}

/**
 * Capitalize the first letter of a string
 */
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Format a number to Indian locale (e.g. 1,00,000)
 */
export function formatNumber(num) {
  return new Intl.NumberFormat("en-IN").format(num);
}

/**
 * Simple delay helper
 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
