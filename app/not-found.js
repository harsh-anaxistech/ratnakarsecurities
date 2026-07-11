import Link from "next/link";
import Button from "@/components/common/Button";

export const metadata = {
  title: "404 – Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl">
        {/* 404 Large Text */}
        <div className="relative mb-6">
          <span
            className="text-9xl md:text-[150px] font-black leading-none select-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            aria-hidden="true"
          >
            404
          </span>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          The page you are looking for may have been moved, deleted, or never
          existed. Let us help you find your way back.
        </p>

        <div className="flex justify-center">
          <Link href="/">
            <Button variant="contained" color="primary" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
