import { Poppins } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/constants/metadata";
import { organizationSchema, websiteSchema } from "@/lib/jsonld";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import SkipLink from "@/components/common/SkipLink";
import FloatingMobileTrading from "@/components/FloatingMobileTrading";
import StartupPopupModal from "@/components/modals/StartupPopupModal";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-Poppins",
  display: "swap",
});

export const metadata = baseMetadata;

/**
 * Global Root Layout Component
 * 
 * Serves as the primary HTML wrapper for all App Router routes:
 * - Font optimization using `next/font/google` (Poppins font family).
 * - Schema.org JSON-LD structured data injection (`organizationSchema`, `websiteSchema`).
 * - Accessible skip-link bypass for keyboard and screen reader accessibility.
 * - Global site Header, main content area (`#main-content`), Footer, Floating Trading trigger, and Startup Popup modal.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child route segments and pages
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground">
        {/* Accessible Skip Link (WCAG 2.4.1 / GIGW 5.2.27) */}
        <SkipLink />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />

        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingMobileTrading />
        <StartupPopupModal />
      </body>
    </html>
  );
}
