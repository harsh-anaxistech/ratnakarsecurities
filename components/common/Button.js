import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

/**
 * Reusable Button component with variant + color system
 *
 * @param {'contained'|'outlined'} variant - Button style variant
 * @param {'primary'|'secondary'|'muted'} color - Button color scheme
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} loading
 * @param {boolean} fullWidth
 * @param {React.ReactNode} leftIcon
 * @param {React.ReactNode} rightIcon
 * @param {'button'|'a'} as - Render as button or anchor tag
 */

export default function Button({
  children,
  variant = "contained",
  color = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  type = "button",
  as = "button",
  href,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const colorVariants = {
    contained: {
      primary:
        "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary",
      secondary:
        "bg-secondary text-white hover:bg-secondary-dark focus-visible:ring-secondary",
      muted:
        "bg-muted text-foreground hover:bg-border focus-visible:ring-border",
    },
    outlined: {
      primary:
        "border border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus-visible:ring-primary",
      secondary:
        "border border-secondary text-secondary bg-transparent hover:bg-secondary hover:text-white focus-visible:ring-secondary",
      muted:
        "border border-border text-muted-foreground bg-transparent hover:bg-muted hover:text-foreground focus-visible:ring-border",
    },
  };

  const sizes = {
    sm: "text-base px-4 py-2 h-9",
    md: "text-base px-6 py-2.5 h-11",
    lg: "text-base px-8 py-3 h-13",
  };

  const classes = cn(
    base,
    colorVariants[variant]?.[color],
    sizes[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
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
    </>
  );

  if (as === "a") {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      className={classes}
      {...props}
    >
      {content}
    </button>
  );
}
