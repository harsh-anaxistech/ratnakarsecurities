"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
        <h2 className="text-xl font-bold mb-2 text-slate-800">Something went wrong!</h2>
        <p className="text-slate-500 text-sm mb-6">An unexpected error occurred. Please try again.</p>
        <button
          onClick={() => reset()}
          className="w-full py-3 px-4 bg-[#0052cc] hover:bg-[#0040a3] text-white font-bold rounded-xl transition-colors cursor-pointer"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
