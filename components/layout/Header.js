"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState, useEffect } from "react";
// Navu: X (Close icon) ane Briefcase icon import karya chhe
import { ChevronDown, TrendingUp, Smartphone, Download, HelpCircle, Heart, Handshake, X, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import MenuIcons from "@/components/layout/MenuIcons";
import { getResearchSections } from "@/services/research";
import BackofficeLoginModal from "@/components/modals/BackofficeLoginModal";

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
                { Icon: TrendingUp, title: "Markets", href: "#" },
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
                    if(item.title === "Mobile App") {
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

      {/* ── MOBILE APP DOWNLOAD MODAL (POPUP) ── */}
      {mobileAppModalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          style={{ background: "rgba(1,22,40,0.75)", backdropFilter: "blur(6px)" }}
          onClick={() => setMobileAppModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, #011628 0%, #012e54 60%, #1a6eb5 100%)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative circles */}
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

            {/* Close button */}
            <button
              onClick={() => setMobileAppModalOpen(false)}
              className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
              style={{ background: "rgba(234,40,48,0.15)", color: "#ea2830" }}
              aria-label="Close"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            {/* Header */}
            <div className="px-8 pt-10 pb-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Smartphone className="w-6 h-6" style={{ color: "#00aeee" }} />
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#00aeee" }}>Download App</span>
              </div>
              <h2 className="text-xl font-bold leading-snug text-white">
                Ratnakar&apos;s Online Trading<br/>Mobile APP – TradeXpress
              </h2>
              <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Choose your platform to download</p>
            </div>

            {/* Download boxes */}
            <div className="flex flex-col sm:flex-row gap-4 px-8 pb-10">
              {/* Android */}
              <a
                href="https://play.google.com/store/apps/details?id=com.wave.ratnakartradeexpress"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group flex flex-col items-center gap-3 rounded-2xl p-5 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(61,220,132,0.15)"; e.currentTarget.style.borderColor = "#3DDC84"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              >
                {/* Android SVG icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(61,220,132,0.15)" }}>
                  <svg viewBox="0 0 24 24" className="w-9 h-9" fill="#3DDC84">
                    <path d="M17.523 15.341a.976.976 0 0 1-.973-.975.976.976 0 0 1 .973-.974.976.976 0 0 1 .973.974.976.976 0 0 1-.973.975m-11.046 0a.976.976 0 0 1-.973-.975.976.976 0 0 1 .973-.974.976.976 0 0 1 .973.974.976.976 0 0 1-.973.975M17.75 9.5l1.938-3.354a.403.403 0 0 0-.148-.55.403.403 0 0 0-.55.148l-1.963 3.4A11.64 11.64 0 0 0 12 8.25a11.64 11.64 0 0 0-5.027 1.144L4.01 5.744a.403.403 0 0 0-.55-.148.403.403 0 0 0-.148.55L5.25 9.5C2.95 10.8 1.5 13.14 1.5 15.75h21c0-2.61-1.45-4.95-3.75-6.25" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>GET IT ON</p>
                  <p className="text-base font-bold text-white">Google Play</p>
                  <p className="text-xs mt-1" style={{ color: "#3DDC84" }}>Android</p>
                </div>
                <Download className="w-4 h-4" style={{ color: "rgba(255,255,255,0.4)" }} />
              </a>

              {/* Apple iOS */}
              <a
                href="https://apps.apple.com/in/app/ratnakar-tradeexpress/id6742447581"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group flex flex-col items-center gap-3 rounded-2xl p-5 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
              >
                {/* Apple SVG icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <svg viewBox="0 0 24 24" className="w-9 h-9" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>DOWNLOAD ON THE</p>
                  <p className="text-base font-bold text-white">App Store</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>Apple iOS</p>
                </div>
                <Download className="w-4 h-4" style={{ color: "rgba(255,255,255,0.4)" }} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}