"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

// ScrollToTop – fixed button that appears after scrolling 300px

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed cursor-pointer bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg",
        "flex items-center justify-center",
        "bg-primary text-white",
        "transition-all duration-300",
        "hover:bg-primary-dark hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-16 opacity-0 pointer-events-none",
      )}
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}
