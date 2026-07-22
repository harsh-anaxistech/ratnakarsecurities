"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable Common Input Component
 * Standardized across the application:
 * - Single 1px border (#00aeee / primary on focus)
 * - Rounded-lg corners
 * - Shadow none
 * - Zero focus outline / double ring
 */
export const Input = React.forwardRef(({ className, type = "text", error, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full h-11 px-3.5 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg shadow-none font-medium placeholder-gray-400 transition-colors",
        "outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0",
        "focus:border-[#00aeee]",
        error && "border-red-500 focus:border-red-500",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
