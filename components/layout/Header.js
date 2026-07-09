"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  BarChart3,
  Smartphone,
  Download,
  HelpCircle,
  Handshake,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

const NAV_LINKS = [
  {
    label: "Products",
    href: "/products",
    columns: [
      [
        { label: "Overview", href: "/products" },
        { label: "Equity", href: "/products/equity" },
        { label: "Derivatives", href: "/products/derivatives" },
        { label: "Mutual Funds", href: "/products/mutual-funds" },
        { label: "Commodities", href: "/products/commodities" },
      ],
      [
        { label: "Wealth Management", href: "/products/wealth-management" },
        { label: "NRIs", href: "/products/nri" },
        { label: "SLBS", href: "/products/slbs" },
        { label: "Bonds", href: "/products/bonds" },
        {
          label: "Narnolia Investment Advisory Portfolios",
          href: "/products/narnolia-investment-advisory-portfolios",
        },
      ],
    ],
  },
  {
    label: "Research",
    href: "/research",
    dropdown: [
      { label: "Company", href: "/research/company" },
      { label: "IPOs", href: "/research/ipos" },
      { label: "News", href: "/research/news" },
      { label: "Announcements", href: "/research/announcements" },
    ],
  },
{
  label: "Investors",
  href: "/investors",
  columns: [
    [
      {
        label: "Board of Directors",
        href: "/investors/board-of-directors",
      },
      {
        label: "Disclosure of Contact Details of Key Managerial Personnel",
        href: "/investors/disclosure-of-contact-details-of-key-managerial-personnel",
      },
      {
        label: "Statutory and Registration Certificate Documents",
        href: "/investors/statutory-and-registration-certificate-documents",
      },
      {
        label: "Policies",
        href: "/investors/policies",
      },
      {
        label: "Financial Information and Annual Report",
        href: "/investors/financial-information-and-annual-report",
      },
    ],
    [
      {
        label: "Shareholding Pattern",
        href: "/investors/shareholding-pattern",
      },
      {
        label: "Newspaper Publication",
        href: "/investors/newspaper-publication",
      },
      {
        label: "Annual Return",
        href: "/investors/annual-return",
      },
      {
        label: "Disclosures of Material Events or Information",
        href: "/investors/disclosures-of-material-events-or-information",
      },
    ],
  ],
},
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Overview", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Milestone", href: "/about/milestone" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

const LOGIN_LINKS = [
  { label: "Online Trading", href: "/login/online-trading" },
  { label: "Backoffice Login", href: "/login/backoffice" },
  { label: "Mutual Fund Portfolio", href: "/login/mutual-fund" },
  { label: "Narnolia Investment Advisory Portfolio", href: "/login/advisory" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const topBarIcons = [
    { icon: BarChart3, href: "#", label: "Markets" },
    { icon: Smartphone, href: "#", label: "Mobile App" },
    { icon: Download, href: "#", label: "Downloads" },
    { icon: HelpCircle, href: "#", label: "Support" },
    { icon: Handshake, href: "#", label: "Partner" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-gray-200 bg-white shadow-md  backdrop-blur-md"
            : "border-b border-gray-200 bg-white",
        )}
      >
        <div
          className={cn(
            "w-full border-b border-gray-100 bg-muted transition-all duration-300 ease-in-out",
            scrolled ? "h-0 opacity-0 pointer-events-none" : "h-12 opacity-100",
          )}
        >
          <Container className="flex h-full items-center justify-end">
            <div className="flex items-center gap-2">
              {topBarIcons.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-8 w-8 items-center justify-center bg-foreground text-background transition-colors hover:bg-primary hover:text-white rounded-full"
                  >
                    <IconComponent className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </Container>
        </div>

        <Container>
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link
              href="/"
              className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Ratnakar Securities – Home"
            >
              <Image
                src="/images/logo/RSL_logo.png"
                alt="Ratnakar Securities"
                width={220}
                height={60}
                priority
                className="object-contain"
              />
            </Link>

            <nav className="hidden h-full lg:flex items-center">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <div key={item.label} className="group relative h-full">
                    <Link
                      href={item.href}
                      className={cn(
                        "flex h-20 items-center text-base px-6 uppercase transition-all",
                        isActive
                          ? "bg-primary text-white"
                          : "text-foreground hover:bg-primary hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>

                    {item.columns && (
                      <div className="absolute left-0 top-full z-50 hidden min-w-lg grid-cols-2 gap-10 bg-primary p-8 text-white group-hover:grid">
                        {item.columns.map((column, i) => (
                          <div key={i} className="space-y-3">
                            {column.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="block text-base uppercase text-md transition hover:translate-x-1"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {item.dropdown && (
                      <div className="absolute left-0 top-full z-50 hidden w-64 bg-primary group-hover:block">
                        {item.dropdown.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block text-base px-5 py-2 uppercase text-md transition hover:translate-x-1 text-white"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="hidden h-full items-center gap-3 lg:flex">
              <Button
                as="a"
                variant="outline"
                href="/contact"
                className="uppercase"
              >
                Re-KYC
              </Button>
              <Button
                as="a"
                variant="secondary"
                href="/contact"
                className="uppercase"
              >
                Open Account
              </Button>

              {/* Login Dropdown */}
              <div className="group relative flex h-full items-center">
                <Button variant="primary" className="uppercase">
                  Login
                </Button>
                <div className="absolute right-0 top-full z-50 hidden min-w-[320px] bg-primary text-white group-hover:block">
                  {LOGIN_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-5 py-2 uppercase text-base transition hover:translate-x-1 text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="rounded-xl p-2 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>
      </header>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "h-16 lg:h-20" : "h-28 lg:h-32",
        )}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 transition-all duration-300 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        <div
          className={cn(
            "absolute inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-white shadow-2xl transition-all duration-300 origin-top",
            mobileOpen ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0",
          )}
        >
          <Container className="py-4">
            <nav
              className="mb-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                      isActive
                        ? "bg-primary/5 text-primary"
                        : "text-foreground hover:bg-muted",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-3 border-t border-border pt-4">
              <Link href="/contact" className="block">
                <Button fullWidth size="md">
                  Open Account
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
