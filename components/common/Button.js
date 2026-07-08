import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

/**
 * Reusable Button component
 *
 * @param {'primary'|'secondary'|'outline'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} loading
 * @param {boolean} fullWidth
 * @param {React.ReactNode} leftIcon
 * @param {React.ReactNode} rightIcon
 */

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary",
    secondary:
      "bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary",
    outline:
      "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white focus-visible:ring-secondary",
    ghost:
      "bg-transparent text-foreground hover:bg-muted focus-visible:ring-border",
  };

  const sizes = {
    sm: "text-base px-4 py-2 h-9",
    md: "text-base px-6 py-2.5 h-11",
    lg: "text-base px-8 py-3 h-13",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
      ) : (
        leftIcon && (
          <span className="shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )
      )}
      {children}
      {!loading && rightIcon && (
        <span className="shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  );
}
