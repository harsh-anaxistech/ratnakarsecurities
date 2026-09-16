"use client";

import { useEffect } from "react";

/**
 * Route-Level Error Boundary Component
 * 
 * Catches runtime exceptions within nested App Router route segments:
 * - Logs errors for telemetry/debugging.
 * - Provides user-friendly recovery button invoking Next.js `reset()` callback.
 * 
 * @param {Object} props
 * @param {Error & { digest?: string }} props.error - Runtime error instance
 * @param {() => void} props.reset - Next.js state reset and re-render callback
 */
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center bg-[#f7f9fc]" style={{ backgroundColor: "#f7f9fc" }}>
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-slate-200" style={{ backgroundColor: "#ffffff" }}>
        <h2 className="text-xl font-bold mb-2 text-[#011628]" style={{ color: "#011628" }}>Something went wrong!</h2>
        <p className="text-slate-700 text-sm mb-6" style={{ color: "#334155" }}>An unexpected error occurred. Please try again.</p>
        <button
          onClick={() => reset()}
          className="w-full py-3 px-4 bg-[#004f7a] hover:bg-[#003d5e] text-white font-bold rounded-xl transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#004f7a]"
          style={{ backgroundColor: "#004f7a", color: "#ffffff" }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
