"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Reusable Common Input Component
 * Standardized across the application:
 * - 1.5px border (#767676 = exactly 3:1 contrast on white, per WCAG 1.4.11)
 * - Rounded-lg corners
 * - 2px solid focus-visible ring for keyboard users
 */
export const Input = React.forwardRef(({ className, type = "text", error, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full h-11 px-3.5 text-sm text-gray-900 bg-white border border-[#767676] rounded-lg shadow-none font-medium placeholder:text-gray-600 transition-colors",
        "focus-visible:outline-2 focus-visible:outline-[#004b87] focus-visible:outline-offset-2",
        "focus:border-[#004b87]",
        error && "border-[#dc2626] focus:border-[#dc2626]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
