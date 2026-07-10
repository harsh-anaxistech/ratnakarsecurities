"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  BarChart3,
  Smartphone,
  Download,
  HelpCircle,
  Handshake,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import MenuIcons from "@/components/layout/MenuIcons";

const NAV_LINKS = [
  {
    label: "Products",
    href: "/products",
    columns: [
      [
        { label: "Overview", href: "/products", icon: "overview" },
        { label: "Equity", href: "/products/equity", icon: "equity" },
        { label: "Derivatives", href: "/products/derivatives", icon: "derivatives" },
        { label: "Mutual Funds", href: "/products/mutual-funds", icon: "mutual-funds" },
        { label: "Commodities", href: "/products/commodities", icon: "commodities" },
      ],
      [
        { label: "Wealth Management", href: "/products/wealth-management", icon: "wealth-management" },
        { label: "NRIs", href: "/products/nri", icon: "nri" },
        { label: "SLBS", href: "/products/slbs", icon: "slbs" },
        { label: "Bonds", href: "/products/bonds", icon: "bonds" },
        {
          label: "Narnolia Investment Advisory Portfolios",
          href: "https://ratnakarsecurities.narnolia.in/",
          external: true,
          icon: "investment-advisory",
        },
      ],
    ],
  },
  {
    label: "Research",
    href: "/research",
    dropdown: [
      { label: "Company", href: "/research/company", icon: "company" },
      { label: "IPOs", href: "/research/ipos", icon: "ipos" },
      { label: "News", href: "/research/news", icon: "news" },
      { label: "Announcements", href: "/research/announcements", icon: "announcements" },
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
          icon: "board-of-directors",
        },
        {
          label: "Disclosure of Contact Details of Key Managerial Personnel",
          href: "/investors/disclosure-of-contact-details-of-key-managerial-personnel",
          icon: "contact-details",
        },
        {
          label: "Statutory and Registration Certificate Documents",
          href: "/investors/statutory-and-registration-certificate-documents",
          icon: "statutory",
        },
        {
          label: "Policies",
          href: "/investors/policies",
          icon: "policies",
        },
        {
          label: "Financial Information and Annual Report",
          href: "/investors/financial-information-and-annual-report",
          icon: "financial-info",
        },
      ],
      [
        {
          label: "Shareholding Pattern",
          href: "/investors/shareholding-pattern",
          icon: "shareholding-pattern",
        },
        {
          label: "Newspaper Publication",
          href: "/investors/newspaper-publication",
          icon: "newspaper-publication",
        },
        {
          label: "Annual Return",
          href: "/investors/annual-return",
          icon: "annual-return",
        },
        {
          label: "Disclosures of Material Events or Information",
          href: "/investors/disclosures-of-material-events-or-information",
          icon: "material-events",
        },
      ],
    ],
  },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Overview", href: "/about", icon: "overview" },
      { label: "Leadership", href: "/about/leadership", icon: "leadership" },
      { label: "Milestone", href: "/about/milestone", icon: "milestone" },
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

function DropdownLink({ link, children, className }) {
  const iconSvg = link.icon ? MenuIcons[link.icon] : null;

  const content = (
    <div className="flex items-center gap-3 text-base">
      {iconSvg && (
        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-secondary">
          {iconSvg}
        </span>
      )}
      <span>{children}</span>
    </div>
  );

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}

function NavLink({ link, className, children, onClick }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenAccordion(null);
    setMobileLoginOpen(false);
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

  const hasSubmenu = (item) => item.columns || item.dropdown;

  const getSubLinks = (item) => {
    if (item.dropdown) return item.dropdown;
    if (item.columns) return item.columns.flat();
    return [];
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-gray-200 bg-white shadow-md backdrop-blur-md"
            : "border-b border-gray-200 bg-white",
        )}
      >
        {/* Top bar: Desktop only */}
        <div
          className={cn(
            "w-full border-b border-gray-100 bg-muted transition-all duration-300 ease-in-out hidden lg:block",
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
              className="group flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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

            {/* Desktop Navigation */}
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
                        "flex h-20 items-center text-base px-6 uppercase transition-colors duration-200",
                        isActive
                          ? "text-primary font-medium"
                          : "text-foreground hover:text-primary",
                      )}
                    >
                      {item.label}
                    </Link>

                    {item.columns && (
                      <div className="absolute left-0 top-[calc(100%-4px)] mt-1 z-50 min-w-xl grid grid-cols-2 gap-6 bg-white border border-border rounded-sm shadow p-6 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                        {item.columns.map((column, i) => (
                          <div key={i} className="space-y-1">
                            {column.map((link) => (
                              <DropdownLink
                                key={link.href}
                                link={link}
                                className="block rounded-sm px-3 py-2.5 text-base text-foreground transition-colors hover:text-primary"
                              >
                                {link.label}
                              </DropdownLink>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {item.dropdown && (
                      <div className="absolute left-0 top-[calc(100%-4px)] mt-1 z-50 w-72 bg-white border border-border rounded-sm shadow p-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                        <div className="space-y-1">
                          {item.dropdown.map((link) => (
                            <DropdownLink
                              key={link.href}
                              link={link}
                              className="block rounded-sm px-3 py-2.5 text-base text-foreground transition-colors hover:text-primary"
                            >
                              {link.label}
                            </DropdownLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden h-full items-center gap-3 lg:flex">
              <Button
                as="a"
                variant="outlined"
                color="secondary"
                href="/contact"
                className="uppercase text-base rounded-sm"
              >
                Re-KYC
              </Button>
              <Button
                as="a"
                variant="contained"
                color="secondary"
                href="/contact"
                className="uppercase text-base rounded-sm"
              >
                Open Account
              </Button>

              {/* Login Dropdown */}
              <div className="group relative flex h-full items-center">
                <Button variant="contained" color="primary" className="uppercase text-base rounded-sm">
                  Login
                </Button>
                <div className="absolute right-0 top-[calc(100%-4px)] mt-1 z-50 min-w-[320px] bg-white border border-border text-foreground rounded-sm shadow py-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <div className="space-y-1">
                    {LOGIN_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-5 py-2.5 uppercase text-base transition hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hamburger Menu Trigger */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="relative w-10 h-10 flex items-center justify-center rounded-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            >
              <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
              <span
                className={cn(
                  "absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out",
                  mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-2",
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out",
                  mobileOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100",
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-in-out",
                  mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-2",
                )}
              />
            </button>
          </div>
        </Container>
      </header>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "h-16 lg:h-20" : "h-16 lg:h-32",
        )}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
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
            "absolute right-0 top-0 h-full w-full bg-white transition-transform duration-300 ease-in-out flex flex-col",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between px-5 py-2 border-b border-gray-100">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logo/RSL_logo.png"
                alt="Ratnakar Securities"
                width={160}
                height={45}
                className="object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="relative w-9 h-9 flex items-center justify-center rounded-sm text-foreground hover:bg-muted transition-colors"
            >
              <span className="absolute h-0.5 w-5 bg-current rounded-full rotate-45" />
              <span className="absolute h-0.5 w-5 bg-current rounded-full -rotate-45" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav
            className="flex-1 overflow-y-auto px-5 py-4 pb-20"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                const isOpen = openAccordion === item.label;
                const subLinks = getSubLinks(item);

                return (
                  <div key={item.label}>
                    {hasSubmenu(item) ? (
                      <>
                        <button
                          onClick={() => {
                            setOpenAccordion(isOpen ? null : item.label);
                            setMobileLoginOpen(false);
                          }}
                          className={cn(
                            "flex w-full items-center justify-between py-3 px-3 text-base transition-colors rounded-sm",
                            isActive ? "text-primary" : "text-foreground hover:bg-muted",
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              isOpen && "rotate-180",
                            )}
                          />
                        </button>
                        <div
                          className={cn(
                            "overflow-hidden transition-all duration-300 ease-in-out",
                            isOpen ? "max-h-[600px] pt-1 pb-2" : "max-h-0",
                          )}
                        >
                          <div className="flex flex-col gap-1 pl-3">
                            {subLinks.map((link) => {
                              const isSubLinkActive = pathname === link.href;
                              return (
                                <NavLink
                                  key={link.href}
                                  link={link}
                                  className={cn(
                                    "block py-2.5 px-4 text-base rounded-sm transition-colors",
                                    isSubLinkActive
                                      ? "text-primary"
                                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                                  )}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {link.label}
                                </NavLink>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "block py-3 px-3 text-base transition-colors rounded-sm",
                          isActive ? "text-primary" : "text-foreground hover:bg-muted",
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* Mobile Login Accordion */}
              <div>
                <Button
                  onClick={() => {
                    setMobileLoginOpen((prev) => !prev);
                    setOpenAccordion(null);
                  }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="md"
                  className="rounded-sm"
                >
                  <span className="text-base">LOGIN</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      mobileLoginOpen && "rotate-180",
                    )}
                  />
                </Button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    mobileLoginOpen ? "max-h-[300px] pt-1 pb-2" : "max-h-0",
                  )}
                >
                  <div className="flex flex-col gap-1 pl-3 mt-1">
                    {LOGIN_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2.5 px-4 text-base text-muted-foreground hover:bg-muted hover:text-foreground rounded-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  as="a"
                  href="/contact"
                  variant="contained"
                  color="secondary"
                  fullWidth
                  size="md"
                  className="text-base rounded-sm"
                >
                  Open Account
                </Button>
                <Button
                  as="a"
                  href="/contact"
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  size="md"
                  className="text-base rounded-sm"
                >
                  Re-KYC
                </Button>
              </div>
            </div>
          </nav>

          {/* Topbar Icons Footer: Positioned at the very bottom of the drawer */}
          <div className="border-t border-border px-5 py-4 bg-gray-50 flex items-center justify-center gap-4">
            {topBarIcons.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={index}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center bg-foreground text-background transition-colors hover:bg-primary hover:text-white rounded-full shadow-sm"
                >
                  <IconComponent className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}