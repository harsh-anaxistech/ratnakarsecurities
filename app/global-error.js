"use client";

import { useEffect } from "react";

/**
 * Global Root Error Boundary Component
 * 
 * Top-level fallback error handler wrapping the entire `<html>` and `<body>` tree
 * when exceptions occur in the root layout itself.
 * 
 * @param {Object} props
 * @param {Error & { digest?: string }} props.error - Runtime root layout error
 * @param {() => void} props.reset - Recovery re-render trigger
 */
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-slate-900 text-white flex flex-col items-center justify-center min-h-screen p-6 text-center font-sans">
        <div className="max-w-md w-full bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
          <h2 className="text-2xl font-bold mb-3 text-white">Something went wrong!</h2>
          <p className="text-slate-300 text-sm mb-6">An unexpected error occurred while rendering the page.</p>
          <button
            onClick={() => reset()}
            className="w-full py-3 px-4 bg-[#0052cc] hover:bg-[#0040a3] text-white font-bold rounded-xl transition-colors cursor-pointer"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
