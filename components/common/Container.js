import { cn } from "@/lib/utils";

// Container – max-width content wrapper with responsive horizontal padding

export default function Container({ children, className, as: Tag = "div" }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1400px] px-2 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}
