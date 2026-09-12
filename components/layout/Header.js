"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  TrendingUp,
  Smartphone,
  Download,
  HelpCircle,
  Heart,
  Handshake,
  X,
  Briefcase,
  Globe,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import MenuIcons from "@/components/layout/MenuIcons";
import { getResearchSections } from "@/services/research";
import BackofficeLoginModal from "@/components/modals/BackofficeLoginModal";
import ChooseAppModal from "@/components/modals/ChooseAppModal";
import FloatingMobileTrading from "@/components/FloatingMobileTrading";

import QuickSearchModal from "@/components/common/QuickSearchModal";

/**
 * Main Application Header & Navigation Bar
 * 
 * Provides global navigation for desktop and mobile devices:
 * - Multi-column mega menus for Products and Investor Relations.
 * - Dynamic research sections loaded asynchronously from `getResearchSections` API.
 * - Top utilities: Market updates, Trading/Backoffice login triggers, App download modal, Quick search.
 * - Mobile responsive sliding navigation drawer with accordion submenus.
 * - Accessible keyboard navigation and ARIA landmarks.
 */
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
        { label: "SLBM", href: "/products/slbm", icon: "slbm", description: "Earn more from your idle stocks." },
        { label: "Bonds", href: "/products/bonds", icon: "bonds", description: "Build a safer portfolio with bonds." },
      ],
    ],
  },
  {
    label: "Investors",
    href: "/investors",
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
        { label: "Investor Grievance", href: "/investor-grievance", icon: "investor-grievance", description: "Grievance redressal mechanism & escalation" },
      ],
    ],
  },
  {
    label: "About Us",
    href: "/about"
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
  { label: "Contact Us", href: "/contact" },
];

const LOGIN_LINKS = [
  { label: "Ratnakar's Online Trading Mobile APP - TradeXpress", href: "#", isModal: true },
  { label: "Backoffice Login", href: "#", isButton: true },
  { label: "Mutual Fund Portfolio", href: "https://ratnakarsecurities.investwell.app/app/#/login", external: true },
];

function DropdownLink({ link, children, className, onClick, ...props }) {
  const iconSvg = link.icon ? MenuIcons[link.icon] : null;
  const content = (
    <div className="flex items-start gap-3">
      {iconSvg && <span className="flex h-8 w-8 shrink-0 items-center justify-center text-secondary mt-0.5" aria-hidden="true">{iconSvg}</span>}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-800">{children}</span>
        {link.description && <span className="text-xs text-slate-600 mt-0.5">{link.description}</span>}
      </div>
    </div>
  );
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    );
  }
  return (
    <Link
      href={link.href}
      className={className}
      onClick={onClick}
      {...props}
    >
      {content}
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileQuickLinksOpen, setMobileQuickLinksOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);
  const [backofficeModalOpen, setBackofficeModalOpen] = useState(false);
  const [floatingMobileModalOpen, setFloatingMobileModalOpen] = useState(false);
  const [chooseAppModalOpen, setChooseAppModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [desktopLoginOpen, setDesktopLoginOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const dropdownTimeoutRef = useRef(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setMobileQuickLinksOpen(false);
    setOpenAccordion(null);
    setMobileLoginOpen(false);
    setFloatingMobileModalOpen(false);
    setChooseAppModalOpen(false);
    setActiveDropdown(null);
    setDesktopLoginOpen(false);
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
        // API server may not be running in local dev
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
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setDesktopLoginOpen(false);
        setMobileOpen(false);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchModalOpen((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (mobileOpen || floatingMobileModalOpen || chooseAppModalOpen) ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen, floatingMobileModalOpen, chooseAppModalOpen]);

  const hasSubmenu = (item) => Boolean(item.columns || item.dropdown);
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

  const handleMouseEnterNav = (label) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeaveNav = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const focusFirstItemInMenu = (menuId) => {
    setTimeout(() => {
      const menu = document.getElementById(menuId);
      if (menu) {
        const items = menu.querySelectorAll("a, button");
        if (items.length > 0) items[0].focus();
      }
    }, 50);
  };

  const focusLastItemInMenu = (menuId) => {
    setTimeout(() => {
      const menu = document.getElementById(menuId);
      if (menu) {
        const items = menu.querySelectorAll("a, button");
        if (items.length > 0) items[items.length - 1].focus();
      }
    }, 50);
  };

  const handleNavKeyDown = (e, item, index) => {
    const menuId = `dropdown-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
    const topNavItems = Array.from(document.querySelectorAll("[data-topnav-item='true']"));

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % topNavItems.length;
      topNavItems[nextIndex]?.focus();
      return;
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + topNavItems.length) % topNavItems.length;
      topNavItems[prevIndex]?.focus();
      return;
    }

    if (!hasSubmenu(item)) return;

    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setActiveDropdown(item.label);
      focusFirstItemInMenu(menuId);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveDropdown(item.label);
      focusLastItemInMenu(menuId);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setActiveDropdown(null);
    }
  };

  const handleMenuKeyDown = (e, triggerButtonId) => {
    const menu = e.currentTarget;
    const items = Array.from(menu.querySelectorAll("a, button"));
    const currentIndex = items.indexOf(document.activeElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % items.length;
      items[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (currentIndex === 0) {
        const trigger = document.getElementById(triggerButtonId);
        trigger?.focus();
      } else {
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        items[prevIndex]?.focus();
      }
    } else if (e.key === "Home") {
      e.preventDefault();
      items[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      items[items.length - 1]?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setActiveDropdown(null);
      setDesktopLoginOpen(false);
      const trigger = document.getElementById(triggerButtonId);
      trigger?.focus();
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
        {/* ── GRADIENT RADIAL TOP HEADER (With Quick Links) ── */}
        <div
          className="hidden md:flex h-14 w-full items-center border-b border-white/10"
          style={{
            background: "radial-gradient(1400px 700px at 85% 20%, #1a6eb5 0%, #012e54 50%, #011628 100%)",
            color: "#fff"
          }}
        >
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex h-14 items-center justify-between gap-4">

              {/* Top Quick Actions */}
              <div className="flex items-center gap-3">
                {[
                  { Icon: Smartphone, title: "Mobile App", href: "#" },
                  { Icon: Download, title: "Downloads Center", href: "/downloads" },
                  { Icon: HelpCircle, title: "Customer Help", href: "/contact" },
                  { Icon: Handshake, title: "Partner With Us", href: "/partner-with-us" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      if (item.title === "Mobile App") {
                        e.preventDefault();
                        setFloatingMobileModalOpen(true);
                      } else {
                        handleTopNav(e, item.href);
                      }
                    }}
                    className="flex items-center justify-center h-8 w-8 my-1 rounded-full bg-white/10 border border-white/20 text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 min-w-[32px] min-h-[32px] focus:ring-2 focus:ring-white"
                    title={item.title}
                    aria-label={item.title}
                  >
                    <item.Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN NAV ── */}
        <div className="bg-white border-b border-gray-200 w-full shadow-sm">
          <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between lg:h-[72px]">

              {/* Logo with proper descriptive alt */}
              <Link
                href="/"
                aria-label="Ratnakar Securities Limited – Navigate to Homepage"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              >
                <Image
                  src="/images/logo/RSL_logo.png"
                  alt="Graphic Ratnakar Securities Limited logo"
                  width={202}
                  height={57}
                  priority
                  className="object-contain"
                />
              </Link>

              {/* Desktop Nav with Full Keyboard Traversal (WCAG 2.1.1 & GIGW 5.2.21) */}
              <nav className="hidden lg:flex h-full items-center" aria-label="Main Navigation">
                {navLinks.map((item, navIndex) => {
                  const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  const isMenuOpen = activeDropdown === item.label;
                  const menuId = `dropdown-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
                  const btnId = `nav-btn-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

                  return (
                    <div
                      key={item.label}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => handleMouseEnterNav(item.label)}
                      onMouseLeave={handleMouseLeaveNav}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          setActiveDropdown((cur) => (cur === item.label ? null : cur));
                        }
                      }}
                    >
                      {hasSubmenu(item) ? (
                        <button
                          type="button"
                          id={btnId}
                          data-topnav-item="true"
                          aria-haspopup="true"
                          aria-expanded={isMenuOpen}
                          aria-controls={menuId}
                          onKeyDown={(e) => handleNavKeyDown(e, item, navIndex)}
                          onClick={() => {
                            if (isMenuOpen) {
                              setActiveDropdown(null);
                            } else {
                              setActiveDropdown(item.label);
                              focusFirstItemInMenu(menuId);
                            }
                          }}
                          className={cn(
                            "flex h-full items-center gap-1.5 px-2.5 xl:px-4 text-[14px] xl:text-[16px] 2xl:text-[17px] font-bold transition-colors border-b-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-slate-50",
                            isActive || isMenuOpen
                              ? "text-[#b91c1c] border-[#b91c1c]"
                              : "text-gray-700 border-transparent hover:text-[#b91c1c] hover:border-[#b91c1c]"
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "h-3.5 w-3.5 opacity-70 transition-transform duration-200",
                              isMenuOpen && "rotate-180 text-[#b91c1c]"
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          id={btnId}
                          data-topnav-item="true"
                          onKeyDown={(e) => {
                            const topNavItems = Array.from(document.querySelectorAll("[data-topnav-item='true']"));
                            if (e.key === "ArrowRight") {
                              e.preventDefault();
                              const nextIndex = (navIndex + 1) % topNavItems.length;
                              topNavItems[nextIndex]?.focus();
                            } else if (e.key === "ArrowLeft") {
                              e.preventDefault();
                              const prevIndex = (navIndex - 1 + topNavItems.length) % topNavItems.length;
                              topNavItems[prevIndex]?.focus();
                            }
                          }}
                          className={cn(
                            "flex h-full items-center gap-1 px-2.5 xl:px-4 text-[14px] xl:text-[16px] 2xl:text-[17px] font-bold transition-colors border-b-2 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:bg-slate-50",
                            isActive
                              ? "text-[#b91c1c] border-[#b91c1c]"
                              : "text-gray-700 border-transparent hover:text-[#b91c1c] hover:border-[#b91c1c]"
                          )}
                        >
                          {item.label}
                        </Link>
                      )}

                      {/* Multi-column dropdown */}
                      {item.columns && (
                        <div
                          id={menuId}
                          aria-label={`${item.label} Submenu`}
                          onKeyDown={(e) => handleMenuKeyDown(e, btnId)}
                          className={cn(
                            "absolute left-0 top-full mt-0 z-50 w-[950px] gap-6 bg-white shadow-2xl border border-border rounded-b-xl p-6 transition-all duration-200 ease-out",
                            isMenuOpen ? "grid grid-cols-2 opacity-100 visible translate-y-0 pointer-events-auto" : "hidden opacity-0 invisible pointer-events-none translate-y-1"
                          )}
                        >
                          {item.columns.map((column, i) => (
                            <div key={i} className="space-y-1.5">
                              {column.map((link) => (
                                <DropdownLink
                                  key={link.label}
                                  link={link}
                                  onClick={() => setActiveDropdown(null)}
                                  className="block rounded-lg px-4 py-3 hover:bg-slate-50 focus:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-150"
                                >
                                  {link.label}
                                </DropdownLink>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Single column dropdown */}
                      {item.dropdown && (
                        <div
                          id={menuId}
                          aria-label={`${item.label} Submenu`}
                          onKeyDown={(e) => handleMenuKeyDown(e, btnId)}
                          className={cn(
                            "absolute left-0 top-full mt-0 z-50 w-96 bg-white shadow-2xl border border-border rounded-b-xl p-3 transition-all duration-200 ease-out",
                            isMenuOpen ? "block opacity-100 visible translate-y-0 pointer-events-auto" : "hidden opacity-0 invisible pointer-events-none translate-y-1"
                          )}
                        >
                          <div className="space-y-1">
                            {item.dropdown.map((link) => (
                              <DropdownLink
                                key={link.label}
                                link={link}
                                onClick={() => setActiveDropdown(null)}
                                className="block rounded-lg px-4 py-3 hover:bg-slate-50 focus:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-150"
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

              {/* Desktop Actions & Login */}
              <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
                {/* Quick Search Shortcut */}
                <button
                  type="button"
                  onClick={() => setSearchModalOpen(true)}
                  aria-label="Search site (Press Ctrl+K)"
                  title="Search site (Ctrl+K)"
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-100 border border-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Search className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href="https://twx.ratnakarsecurities.com:4433/twx/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: "#004f7a" }}
                  className="inline-flex items-center justify-center bg-[#004f7a] bg-gradient-to-br from-[#005a9c] to-[#00385c] hover:bg-[#00385c] text-white text-xs xl:text-sm font-bold rounded-lg px-3 xl:px-4 py-2 whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-sm"
                >
                  RE-KYC
                </a>

                <a
                  href="https://smartkyc.co.in/d/ratnakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: "#004f7a" }}
                  className="inline-flex items-center justify-center bg-[#004f7a] bg-gradient-to-br from-[#005a9c] to-[#00385c] hover:bg-[#00385c] text-white text-xs xl:text-sm font-bold rounded-lg px-3 xl:px-4 py-2 whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-sm"
                >
                  OPEN ACCOUNT
                </a>

                {/* Login dropdown with full keyboard access */}
                <div
                  className="relative"
                  onMouseEnter={() => setDesktopLoginOpen(true)}
                  onMouseLeave={() => setDesktopLoginOpen(false)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setDesktopLoginOpen(false);
                    }
                  }}
                >
                  <Button
                    id="desktop-login-button"
                    onClick={() => {
                      if (desktopLoginOpen) {
                        setDesktopLoginOpen(false);
                      } else {
                        setDesktopLoginOpen(true);
                        focusFirstItemInMenu("desktop-login-menu");
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                        e.preventDefault();
                        setDesktopLoginOpen(true);
                        focusFirstItemInMenu("desktop-login-menu");
                      } else if (e.key === "Escape") {
                        e.preventDefault();
                        setDesktopLoginOpen(false);
                      }
                    }}
                    aria-expanded={desktopLoginOpen}
                    aria-haspopup="true"
                    aria-controls="desktop-login-menu"
                    aria-label="Client & Backoffice Login Menu"
                    style={{ backgroundColor: "#a7181e" }}
                    className="bg-[#a7181e] bg-gradient-to-br from-[#a7181e] to-[#881014] hover:bg-[#881014] text-white text-xs xl:text-sm font-bold rounded-lg px-3 xl:px-4 py-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm"
                  >
                    LOGIN <ChevronDown className={cn("h-3.5 w-3.5 ml-1 transition-transform duration-200 inline", desktopLoginOpen && "rotate-180")} aria-hidden="true" />
                  </Button>
                  <div
                    id="desktop-login-menu"
                    aria-label="Login Options"
                    onKeyDown={(e) => handleMenuKeyDown(e, "desktop-login-button")}
                    className={cn(
                      "absolute right-0 top-full mt-1 z-50 w-72 bg-white shadow-xl border border-border rounded-xl py-2 transition-all duration-200 ease-out",
                      desktopLoginOpen ? "block opacity-100 visible translate-y-0 pointer-events-auto" : "hidden opacity-0 invisible pointer-events-none translate-y-1"
                    )}
                  >
                    {LOGIN_LINKS.map((link) => {
                      if (link.isButton) {
                        return (
                          <button
                            key={link.label}
                            type="button"
                            onClick={() => {
                              setBackofficeModalOpen(true);
                              setDesktopLoginOpen(false);
                            }}
                            className="w-full text-left block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-slate-50 focus:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-150"
                          >
                            {link.label}
                          </button>
                        );
                      }
                      if (link.isModal) {
                        return (
                          <button
                            key={link.label}
                            type="button"
                            onClick={() => {
                              setChooseAppModalOpen(true);
                              setDesktopLoginOpen(false);
                            }}
                            className="w-full text-left block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-slate-50 focus:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-150"
                          >
                            {link.label}
                          </button>
                        );
                      }
                      if (link.external) {
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-slate-50 focus:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-150"
                          >
                            {link.label}
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="block rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:bg-slate-50 focus:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors duration-150"
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Hamburger & Mobile Quick Icons */}
              <div className="flex items-center gap-2 lg:hidden">
                {/* Search Trigger for Mobile */}
                <button
                  type="button"
                  onClick={() => setSearchModalOpen(true)}
                  aria-label="Search site"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors shadow-sm"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </button>

                {/* Mobile Quick Links Button */}
                <div className="relative">
                  <button
                    onClick={() => setMobileQuickLinksOpen((p) => !p)}
                    aria-label="Quick links menu"
                    aria-expanded={mobileQuickLinksOpen}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#011628] text-white hover:bg-[#c41f26] transition-colors shadow-sm"
                  >
                    <Smartphone className="h-4 w-4" aria-hidden="true" />
                  </button>

                  {mobileQuickLinksOpen && (
                    <div className="absolute right-0 top-full mt-2 z-50 flex items-center gap-2 p-2 bg-[#011628] border border-white/20 rounded-full shadow-2xl animate-in fade-in zoom-in duration-200">
                      {[
                        { Icon: Smartphone, title: "Mobile App", href: "#" },
                        { Icon: Download, title: "Downloads Center", href: "/downloads" },
                        { Icon: HelpCircle, title: "Customer Help", href: "/contact" },
                        { Icon: Handshake, title: "Partner With Us", href: "/partner-with-us" },
                      ].map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          onClick={(e) => {
                            setMobileQuickLinksOpen(false);
                            if (item.title === "Mobile App") {
                              e.preventDefault();
                              setFloatingMobileModalOpen(true);
                            } else {
                              handleTopNav(e, item.href);
                            }
                          }}
                          className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#c41f26] hover:border-[#c41f26] transition-all duration-300"
                          title={item.title}
                          aria-label={item.title}
                        >
                          <item.Icon className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setMobileOpen((p) => !p)}
                  aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-navigation-drawer"
                  className="relative w-10 h-10 flex items-center justify-center rounded text-foreground hover:bg-muted transition-colors"
                >
                  <span className={cn("absolute h-0.5 w-6 bg-current rounded transition-all duration-300", mobileOpen ? "rotate-45" : "-translate-y-2")} />
                  <span className={cn("absolute h-0.5 w-6 bg-current rounded transition-all duration-300", mobileOpen ? "opacity-0 scale-x-0" : "")} />
                  <span className={cn("absolute h-0.5 w-6 bg-current rounded transition-all duration-300", mobileOpen ? "-rotate-45" : "translate-y-2")} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-[128px] w-full" aria-hidden="true" />

      {/* Mobile Drawer with Accessibility Toolbar */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
        className={cn("fixed inset-0 z-[1000] transition-all duration-300 lg:hidden", mobileOpen ? "pointer-events-auto block" : "pointer-events-none hidden")}
        aria-hidden={!mobileOpen}
      >
        <div className={cn("absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300", mobileOpen ? "opacity-100" : "opacity-0")} onClick={() => setMobileOpen(false)} />
        <div className={cn("absolute right-0 top-0 h-full w-full max-w-sm bg-white transition-transform duration-300 ease-in-out flex flex-col shadow-2xl", mobileOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100" style={{ background: "#011628" }}>
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <div className="bg-white rounded-lg p-2">
                <Image src="/images/logo/RSL_logo.png" alt="Graphic Ratnakar Securities Limited logo" width={120} height={35} className="object-contain" />
              </div>
            </Link>
            <button onClick={() => setMobileOpen(false)} aria-label="Close navigation menu" className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white">
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
                          aria-expanded={isOpen}
                          className={cn("flex w-full items-center justify-between py-3 px-3 text-sm font-semibold rounded transition-colors", isActive ? "text-[#b91c1c]" : "text-foreground hover:bg-muted")}
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} aria-hidden="true" />
                        </button>
                        <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-[1000px] pb-2" : "max-h-0")}>
                          <div className="flex flex-col gap-0.5 pl-3 pt-1">
                            {subLinks.map((link) => (
                              <DropdownLink key={link.label} link={link} className={cn("block py-2 px-3 text-sm rounded transition-colors", pathname === link.href ? "text-[#b91c1c] font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted")} onClick={() => setMobileOpen(false)}>
                                {link.label}
                              </DropdownLink>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link href={item.href} onClick={() => setMobileOpen(false)} className={cn("block py-3 px-3 text-sm font-semibold rounded transition-colors", isActive ? "text-[#b91c1c]" : "text-foreground hover:bg-muted")}>
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="mt-2">
                <button
                  onClick={() => { setMobileLoginOpen((p) => !p); setOpenAccordion(null); }}
                  aria-expanded={mobileLoginOpen}
                  className="flex w-full items-center justify-between py-3 px-3 text-sm font-semibold rounded transition-colors text-foreground hover:bg-muted"
                >
                  <span>Client Login</span>
                  <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", mobileLoginOpen && "rotate-180")} aria-hidden="true" />
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
                              setChooseAppModalOpen(true);
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
                <a
                  href="https://twx.ratnakarsecurities.com:4433/twx/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  style={{ backgroundColor: "#004f7a" }}
                  className="w-full text-center inline-flex items-center justify-center bg-[#004f7a] bg-gradient-to-br from-[#005a9c] to-[#00385c] hover:bg-[#00385c] text-white text-sm font-bold rounded-lg py-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-sm"
                >
                  RE-KYC
                </a>
                <a
                  href="https://smartkyc.co.in/d/ratnakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  style={{ backgroundColor: "#004f7a" }}
                  className="w-full text-center inline-flex items-center justify-center bg-[#004f7a] bg-gradient-to-br from-[#005a9c] to-[#00385c] hover:bg-[#00385c] text-white text-sm font-bold rounded-lg py-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-sm"
                >
                  OPEN AN ACCOUNT
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Global Modals */}
      <QuickSearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <BackofficeLoginModal isOpen={backofficeModalOpen} onClose={() => setBackofficeModalOpen(false)} />
      <FloatingMobileTrading isOpen={floatingMobileModalOpen} onClose={() => setFloatingMobileModalOpen(false)} />
      <ChooseAppModal isOpen={chooseAppModalOpen} onClose={() => setChooseAppModalOpen(false)} />
    </>
  );
}