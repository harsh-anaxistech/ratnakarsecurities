import { Poppins } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/constants/metadata";
import { organizationSchema, websiteSchema } from "@/lib/jsonld";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";

const inter = Poppins({
  subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],

  variable: "--font-Poppins",
  display: "swap",
});

export const metadata = baseMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground">
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
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
