"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState, useEffect } from "react";
// Navu: X (Close icon) ane Briefcase icon import karya chhe
import { ChevronDown, TrendingUp, Smartphone, Download, HelpCircle, Heart, Handshake, X, Briefcase, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import MenuIcons from "@/components/layout/MenuIcons";
import { getResearchSections } from "@/services/research";
import BackofficeLoginModal from "@/components/modals/BackofficeLoginModal";
import ChooseAppModal from "@/components/modals/ChooseAppModal";

const NAV_LINKS = [
  {
    label: "Products",
    href: "/products",
    columns: [
      [
        { label: "Overview", href: "/products/overview", icon: "overview", description: "Products overview" },
        { label: "Equity", href: "/products/equity", icon: "equity", description: "Invest in stocks with SIHL." },
        { label: "Derivatives", href: "/products/derivatives", icon: "derivatives", description: "Trade derivatives with expertise." },
        { label: "Mutual Funds", href: "/products/mutual-funds", icon: "mutual-funds", description: "Invest smartly in mutual funds." },
        { label: "Commodities", href: "/products/commodities", icon: "commodities", description: "From gold to grains – diversify." },
      ],
      [
        { label: "Wealth Management", href: "/products/wealth-management", icon: "wealth-management", description: "Tailored wealth strategies." },
        { label: "NRIs", href: "/products/nris", icon: "nri", description: "NRI solutions for global Indians." },
        { label: "SLBS", href: "/products/slbs", icon: "slbs", description: "Earn more from your idle stocks." },
        { label: "Bonds", href: "/products/bonds", icon: "bonds", description: "Build a safer portfolio with bonds." },
        { label: "Narnolia Investment Advisory Portfolios", href: "https://ratnakarsecurities.narnolia.in/", icon: "investment-advisory", description: "Investment advisory portfolios", external: true },
      ],
    ],
  },
  {
    label: "Research",
    href: "/research/company",
    dropdown: [
      { label: "Company", href: "/research/company", icon: "company", description: "Detailed company research reports" },
      { label: "IPOs", href: "/research/ipos", icon: "ipos", description: "IPO analysis and recommendations" },
      { label: "News", href: "/research/news", icon: "news", description: "Latest market news and updates" },
      { label: "Announcements", href: "/research/announcements", icon: "announcements", description: "Important announcements and alerts" },
    ],
  },
  {
    label: "Investors",
    href: "#",
    columns: [
      [
        { label: "Board of Directors", href: "/investors/board-of-directors", icon: "board-of-directors", description: "Meet our leadership team" },
        { label: "Disclosure of Contact Details", href: "/investors/disclosure-of-contact-details-of-key-managerial-personnel", icon: "contact-details", description: "Contact details of key personnel" },
        { label: "Statutory Documents", href: "/investors/statutory-and-registration-certificate-documents", icon: "statutory", description: "Legal and registration documents" },
        { label: "Policies", href: "/investors/policies", icon: "policies", description: "Company policies and guidelines" },
      ],
      [
        { label: "Financial Information", href: "/investors/financial-information-and-annual-report", icon: "financial-info", description: "Financial reports and statements" },
        { label: "Shareholding Pattern", href: "/investors/shareholding-pattern", icon: "shareholding-pattern", description: "Stock ownership distribution" },
        { label: "Newspaper Publication", href: "/investors/newspaper-publication", icon: "newspaper-publication", description: "News and announcements" },
        { label: "Material Events", href: "/investors/disclosures-of-material-events-or-information", icon: "material-events", description: "Important business updates" },
      ],
    ],
  },
  {
    label: "About Us",
    href: "/about"
  },
  { label: "Contact Us", href: "/contact" },
];

const LOGIN_LINKS = [
  { label: "Ratnakar's Online Trading Mobile APP - TradeXpress", href: "#", isModal: true },
  { label: "Backoffice Login", href: "#", isButton: true },
  { label: "Mutual Fund Portfolio", href: "https://ratnakarsecurities.investwell.app/app/#/login", external: true },
  { label: "Narnolia Investment Advisory Portfolio", href: "https://ratnakarsecurities.narnolia.in/", external: true },
];

function DropdownLink({ link, children, className }) {
  const iconSvg = link.icon ? MenuIcons[link.icon] : null;
  const content = (
    <div className="flex items-start gap-3">
      {iconSvg && <span className="flex h-8 w-8 shrink-0 items-center justify-center text-secondary mt-0.5">{iconSvg}</span>}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-foreground">{children}</span>
        {link.description && <span className="text-xs text-muted-foreground mt-0.5">{link.description}</span>}
      </div>
    </div>
  );
  if (link.external) {
    return <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>{content}</a>;
  }
  return <Link href={link.href} className={className}>{content}</Link>;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);
  const [backofficeModalOpen, setBackofficeModalOpen] = useState(false);
  const [mobileAppModalOpen, setMobileAppModalOpen] = useState(false); // Navu state app modal mate

  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpenAccordion(null);
    setMobileLoginOpen(false);
    setMobileAppModalOpen(false); // Page change par modal close karva
  }

  const [navLinks, setNavLinks] = useState(NAV_LINKS);

  useEffect(() => {
    async function loadResearchSections() {
      try {
        const result = await getResearchSections();
        if (result && result.success && Array.isArray(result.data)) {
          const getSectionIcon = (name) => {
            const lower = name.toLowerCase();
            if (lower.includes("company")) return "company";
            if (lower.includes("ipo")) return "ipos";
            if (lower.includes("news")) return "news";
            if (lower.includes("announcement")) return "announcements";
            return "company";
          };
          const dynamicDropdown = result.data.map((sec) => {
            const code = sec.section_name.toLowerCase();
            return {
              label: sec.section_name,
              href: `/research/${code}`,
              icon: getSectionIcon(sec.section_name),
            };
          });

          if (dynamicDropdown.length > 0) {
            setNavLinks((prev) =>
              prev.map((item) => {
                if (item.label === "Research") {
                  return {
                    ...item,
                    href: dynamicDropdown[0].href,
                    dropdown: dynamicDropdown,
                  };
                }
                return item;
              })
            );
          }
        }
      } catch (error) {
        // API server may not be running in local dev - silently ignore
      }
    }
    loadResearchSections();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (mobileOpen || mobileAppModalOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, mobileAppModalOpen]);

  const hasSubmenu = (item) => item.columns || item.dropdown;
  const getSubLinks = (item) => {
    if (item.dropdown) return item.dropdown;
    if (item.columns) return item.columns.flat();
    return [];
  };
  const router = useRouter();

  const handleTopNav = (e, href) => {
    if (!href || href === "#") return;
    if (!e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[999] flex flex-col transition-transform duration-300 ease-in-out",
          scrolled ? "shadow-md md:-translate-y-14" : "translate-y-0"
        )}
      >
        {/* ── GRADIENT RADIAL TOP HEADER ── */}
        <div
          className="hidden md:flex h-14 w-full items-center border-b border-white/10"
          style={{
            background: "radial-gradient(1400px 700px at 85% 20%, #1a6eb5 0%, #012e54 50%, #011628 100%)",
            color: "#fff"
          }}
        >
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex h-14 items-center justify-end gap-4">

              {/* Icons List */}
              {[
                // { Icon: TrendingUp, title: "Markets", href: "#" },
                { Icon: Smartphone, title: "Mobile App", href: "#" },
                { Icon: Download, title: "Downloads", href: "/downloads" },
                { Icon: HelpCircle, title: "Help", href: "/contact" },
                { Icon: Handshake, title: "Partner With Us", href: "/partner-with-us" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    // Jo Mobile App par click thay to popup khule
                    if (item.title === "Mobile App") {
                      e.preventDefault();
                      setMobileAppModalOpen(true);
                    } else {
                      handleTopNav(e, item.href);
                    }
                  }}
                  className="flex items-center justify-center h-9 w-9 my-1.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-red-600 hover:border-red-600 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer pointer-events-auto z-10"
                  title={item.title}
                >
                  <item.Icon className="h-5 w-5 pointer-events-none" />
                </a>
              ))}

            </div>
          </div>
        </div>

        {/* ── MAIN NAV ── */}
        <div className="bg-white border-b border-gray-200 w-full">
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-[72px]">

              {/* Logo */}
              <Link href="/" aria-label="Ratnakar Securities – Home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                <Image src="/images/logo/RSL_logo.png" alt="Ratnakar Securities" width={202} height={57} priority className="object-contain" />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex h-full items-center">
                {navLinks.map((item) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <div key={item.label} className="group relative h-full flex items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex h-full items-center gap-1 px-4 text-[17px] font-bold transition-colors border-b-2",
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
                        <div className="absolute left-0 top-full mt-0 z-50 w-[1000px] grid grid-cols-2 gap-8 bg-white shadow-2xl border border-border rounded-b-lg rounded-tr-lg p-6 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
                          {item.columns.map((column, i) => (
                            <div key={i} className="space-y-2">
                              {column.map((link) => (
                                <DropdownLink key={link.label} link={link} className="block rounded-lg px-4 py-3 hover:bg-secondary-light transition-colors duration-200">
                                  {link.label}
                                </DropdownLink>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Single dropdown */}
                      {item.dropdown && (
                        <div className="absolute left-0 top-full mt-0 z-50 w-96 bg-white shadow-2xl border border-border rounded-b-lg rounded-tr-lg p-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
                          {item.dropdown.map((link) => (
                            <DropdownLink key={link.label} link={link} className="block rounded-lg px-4 py-3 hover:bg-secondary-light transition-colors duration-200">
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
                <a href="https://twx.ratnakarsecurities.com:4433/twx/signin" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-sm font-bold rounded-lg px-5 py-2">
                    RE-KYC
                  </Button>
                </a>

                <a href="https://smartkyc.co.in/d/ratnakar" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-sm font-bold rounded-lg px-5 py-2">
                    OPEN DEMAT ACCOUNT                  </Button>
                </a>

                {/* Login dropdown */}
                <div className="group relative">
                  <Button className="bg-gradient-to-br from-[#ea2830] to-[#c41f26] hover:opacity-95 text-white text-sm font-bold rounded-lg px-5 py-2">
                    LOGIN <ChevronDown className="h-3.5 w-3.5 ml-1 group-hover:rotate-180 transition-transform duration-200 inline" />
                  </Button>
                  <div className="absolute right-0 top-full mt-1 z-50 w-72 bg-white shadow-xl border border-border rounded-lg py-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out">
                    {LOGIN_LINKS.map((link) => {
                      if (link.isButton) {
                        return (
                          <button
                            key={link.label}
                            onClick={() => setBackofficeModalOpen(true)}
                            className="w-full text-left block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {link.label}
                          </button>
                        );
                      }
                      if (link.isModal) {
                        return (
                          <button
                            key={link.label}
                            onClick={() => setMobileAppModalOpen(true)}
                            className="w-full text-left block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {link.label}
                          </button>
                        );
                      }
                      if (link.external) {
                        return (
                          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors">
                            {link.label}
                          </a>
                        );
                      }
                      return (
                        <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-foreground hover:text-primary hover:bg-muted/50 transition-colors">
                          {link.label}
                        </Link>
                      );
                    })}
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
      <div className="h-16 md:h-[128px] w-full" aria-hidden="true" />

      {/* Mobile Drawer */}
      <div id="mobile-menu" className={cn("fixed inset-0 z-[1000] transition-all duration-300 lg:hidden", mobileOpen ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!mobileOpen}>
        <div className={cn("absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300", mobileOpen ? "opacity-100" : "opacity-0")} onClick={() => setMobileOpen(false)} />
        <div className={cn("absolute right-0 top-0 h-full w-full bg-white transition-transform duration-300 ease-in-out flex flex-col", mobileOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100" style={{ background: "#011628" }}>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <div className="bg-white rounded-lg p-2">
                <Image src="/images/logo/RSL_logo.png" alt="Ratnakar Securities" width={120} height={35} className="object-contain" />
              </div>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white">
              <span className="absolute h-0.5 w-5 bg-current rotate-45 rounded" />
              <span className="absolute h-0.5 w-5 bg-current -rotate-45 rounded" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => {
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
                        <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-[1000px] pb-2" : "max-h-0")}>
                          <div className="flex flex-col gap-0.5 pl-3 pt-1">
                            {subLinks.map((link) => (
                              <DropdownLink key={link.label} link={link} className={cn("block py-2 px-3 text-sm rounded transition-colors", pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted")} onClick={() => setMobileOpen(false)}>
                                {link.label}
                              </DropdownLink>
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
                    {LOGIN_LINKS.map((link) => {
                      if (link.label === "Backoffice Login") {
                        return (
                          <button
                            key={link.label}
                            onClick={() => {
                              setBackofficeModalOpen(true);
                              setMobileOpen(false);
                            }}
                            className="w-full text-left block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                          >
                            {link.label}
                          </button>
                        );
                      }
                      if (link.isModal) {
                        return (
                          <button
                            key={link.label}
                            onClick={() => {
                              setMobileAppModalOpen(true);
                              setMobileOpen(false);
                            }}
                            className="w-full text-left block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                          >
                            {link.label}
                          </button>
                        );
                      }
                      if (link.external) {
                        return (
                          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                            {link.label}
                          </a>
                        );
                      }
                      return (
                        <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <a href="https://twx.ratnakarsecurities.com:4433/twx/signin" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-sm font-bold rounded-lg py-2.5">RE-KYC</Button>
                </a>
                <a href="https://smartkyc.co.in/d/ratnakar" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-gradient-to-br from-[#00aeee] to-[#0088c2] hover:opacity-95 text-white text-sm font-bold rounded-lg py-2.5">OPEN AN ACCOUNT</Button>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <BackofficeLoginModal isOpen={backofficeModalOpen} onClose={() => setBackofficeModalOpen(false)} />

      <ChooseAppModal isOpen={mobileAppModalOpen} onClose={() => setMobileAppModalOpen(false)} />
    </>
  );
}