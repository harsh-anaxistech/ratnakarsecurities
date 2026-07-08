export const metadata = {
  title: "404 – Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-xl">
        {/* 404 Large Text */}
        <div className="relative mb-4">
          <span
            className="text-7xl font-black leading-none select-none"
            aria-hidden="true"
          >
            404
          </span>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          The page you are looking for may have been moved, deleted, or never
          existed. Let us help you find your way back.
        </p>
      </div>
    </div>
  );
}
