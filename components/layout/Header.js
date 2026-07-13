"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
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
        { label: "Narnolia Investment Advisory Portfolios", href: "https://ratnakarsecurities.narnolia.in/", external: true, icon: "investment-advisory" },
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
        { label: "Board of Directors", href: "/investors/board-of-directors", icon: "board-of-directors" },
        { label: "Disclosure of Contact Details", href: "/investors/disclosure-of-contact-details-of-key-managerial-personnel", icon: "contact-details" },
        { label: "Statutory Documents", href: "/investors/statutory-and-registration-certificate-documents", icon: "statutory" },
        { label: "Policies", href: "/investors/policies", icon: "policies" },
        { label: "Financial Information", href: "/investors/financial-information-and-annual-report", icon: "financial-info" },
      ],
      [
        { label: "Shareholding Pattern", href: "/investors/shareholding-pattern", icon: "shareholding-pattern" },
        { label: "Newspaper Publication", href: "/investors/newspaper-publication", icon: "newspaper-publication" },
        { label: "Annual Return", href: "/investors/annual-return", icon: "annual-return" },
        { label: "Material Events", href: "/investors/disclosures-of-material-events-or-information", icon: "material-events" },
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
  { label: "Contact Us", href: "/contact" },
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
    <div className="flex items-center gap-3 text-sm">
      {iconSvg && <span className="flex h-7 w-7 shrink-0 items-center justify-center text-secondary">{iconSvg}</span>}
      <span>{children}</span>
    </div>
  );
  if (link.external) {
    return <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>;
  }
  return <Link href={link.href} className={className}>{content}</Link>;
}

function NavLink({ link, children, className, onClick }) {
  if (link.external) {
    return <a href={link.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>{children}</a>;
  }
  return <Link href={link.href} className={className} onClick={onClick}>{children}</Link>;
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
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
          scrolled ? "shadow-md" : ""
        )}
      >

        {/* ── MAIN NAV ── */}

        <div className="bg-white border-b border-gray-200">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-[72px]">

              {/* Logo */}
              <Link href="/" aria-label="Ratnakar Securities – Home" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                <Image src="/images/logo/RSL_logo.png" alt="Ratnakar Securities" width={200} height={55} priority className="object-contain" />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex h-full items-center">
                {NAV_LINKS.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <div key={item.label} className="group relative h-full flex items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex h-full items-center gap-1 px-4 text-[15px] font-bold transition-colors border-b-2",
                          isActive
                            ? "text-primary border-primary"
                            : "text-gray-700 border-transparent hover:text-primary hover:border-primary"
                        )}
                      >
                        {item.label}
                        {hasSubmenu(item) && <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />}
                      </Link>

                      {/* Multi-column dropdown */}
                      {item.columns && (
                        <div className="absolute left-0 top-full mt-0 z-50 min-w-max grid grid-cols-2 gap-6 bg-white shadow-xl border border-border rounded-b-lg rounded-tr-lg p-5 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
                          {item.columns.map((column, i) => (
                            <div key={i} className="space-y-0.5">
                              {column.map((link) => (
                                <DropdownLink key={link.href} link={link} className="block rounded px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors">
                                  {link.label}
                                </DropdownLink>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Single dropdown */}
                      {item.dropdown && (
                        <div className="absolute left-0 top-full mt-0 z-50 w-64 bg-white shadow-xl border border-border rounded-b-lg rounded-tr-lg p-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
                          {item.dropdown.map((link) => (
                            <DropdownLink key={link.href} link={link} className="block rounded px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors">
                              {link.label}
                            </DropdownLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Desktop Actions */}
              <div className="hidden lg:flex items-center gap-2">
                <Link href="/contact">
                  <Button className="bg-gradient-to-br from-[#ea2830] to-[#c41f26] hover:opacity-95 text-white text-sm font-bold rounded-lg px-5 py-2">
                   Open a Demat Account
                  </Button>
                </Link>

                {/* Login dropdown */}
                <div className="group relative">
                  <Button variant="outlined" color="secondary" className="text-sm font-bold rounded-lg px-5">
                    Login <ChevronDown className="h-3.5 w-3.5 ml-1 group-hover:rotate-180 transition-transform duration-200 inline" />
                  </Button>
                  <div className="absolute right-0 top-full mt-1 z-50 w-72 bg-white shadow-xl border border-border rounded-lg py-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
                    {LOGIN_LINKS.map((link) => (
                      <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen((p) => !p)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="relative w-10 h-10 flex items-center justify-center rounded text-foreground hover:bg-muted transition-colors lg:hidden"
              >
                <span className={cn("absolute h-0.5 w-6 bg-current rounded transition-all duration-300", mobileOpen ? "rotate-45" : "-translate-y-2")} />
                <span className={cn("absolute h-0.5 w-6 bg-current rounded transition-all duration-300", mobileOpen ? "opacity-0 scale-x-0" : "")} />
                <span className={cn("absolute h-0.5 w-6 bg-current rounded transition-all duration-300", mobileOpen ? "-rotate-45" : "translate-y-2")} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className={cn("transition-all duration-300", scrolled ? "h-16 lg:h-[72px]" : "h-16 lg:[109px]")} aria-hidden="true" />

      {/* Mobile Drawer */}
      <div id="mobile-menu" className={cn("fixed inset-0 z-40 transition-all duration-300 lg:hidden", mobileOpen ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!mobileOpen}>
        <div className={cn("absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300", mobileOpen ? "opacity-100" : "opacity-0")} onClick={() => setMobileOpen(false)} />
        <div className={cn("absolute right-0 top-0 h-full w-full bg-white transition-transform duration-300 ease-in-out flex flex-col", mobileOpen ? "translate-x-0" : "translate-x-full")}>
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100" style={{ background: "#011628" }}>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/images/logo/RSL_logo.png" alt="Ratnakar Securities" width={150} height={40} className="object-contain brightness-0 invert" />
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white">
              <span className="absolute h-0.5 w-5 bg-current rotate-45 rounded" />
              <span className="absolute h-0.5 w-5 bg-current -rotate-45 rounded" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => {
                const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                const isOpen = openAccordion === item.label;
                const subLinks = getSubLinks(item);
                return (
                  <div key={item.label}>
                    {hasSubmenu(item) ? (
                      <>
                        <button
                          onClick={() => { setOpenAccordion(isOpen ? null : item.label); setMobileLoginOpen(false); }}
                          className={cn("flex w-full items-center justify-between py-3 px-3 text-sm font-semibold rounded transition-colors", isActive ? "text-primary" : "text-foreground hover:bg-muted")}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
                        </button>
                        <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-[600px] pb-2" : "max-h-0")}>
                          <div className="flex flex-col gap-0.5 pl-3 pt-1">
                            {subLinks.map((link) => (
                              <NavLink key={link.href} link={link} className={cn("block py-2 px-3 text-sm rounded transition-colors", pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted")} onClick={() => setMobileOpen(false)}>
                                {link.label}
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link href={item.href} onClick={() => setMobileOpen(false)} className={cn("block py-3 px-3 text-sm font-semibold rounded transition-colors", isActive ? "text-primary" : "text-foreground hover:bg-muted")}>
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              {/* Login */}
              <div className="mt-2">
                <button
                  onClick={() => { setMobileLoginOpen((p) => !p); setOpenAccordion(null); }}
                  className="flex w-full items-center justify-between py-3 px-3 text-sm font-semibold rounded transition-colors text-foreground hover:bg-muted"
                >
                  <span>Login</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileLoginOpen && "rotate-180")} />
                </button>
                <div className={cn("overflow-hidden transition-all duration-300", mobileLoginOpen ? "max-h-[300px] pb-2" : "max-h-0")}>
                  <div className="flex flex-col gap-0.5 pl-3 pt-1">
                    {LOGIN_LINKS.map((link) => (
                      <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-4">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-gradient-to-br from-[#ea2830] to-[#c41f26] hover:opacity-95 text-white text-sm font-bold rounded-lg py-2.5">Open an Account</Button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}