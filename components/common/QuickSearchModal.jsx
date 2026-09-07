"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, FileText, Briefcase, BarChart3, Calculator, HelpCircle, Shield } from "lucide-react";

const SEARCH_ITEMS = [
  // Products
  { title: "Equity Trading", category: "Products", href: "/products/equity", icon: BarChart3, keywords: "stocks shares delivery intraday bse nse" },
  { title: "Derivatives (F&O)", category: "Products", href: "/products/derivatives", icon: BarChart3, keywords: "futures options fno trading contracts" },
  { title: "Mutual Funds", category: "Products", href: "/products/mutual-funds", icon: Briefcase, keywords: "sip lumpsum elss debt equity index funds" },
  { title: "Commodities Trading", category: "Products", href: "/products/commodities", icon: BarChart3, keywords: "mcx ncdex gold silver crude oil agri" },
  { title: "Wealth Management", category: "Products", href: "/products/wealth-management", icon: Briefcase, keywords: "pms portfolio advisory wealth hni" },
  { title: "Bonds & NCDs", category: "Products", href: "/products/bonds", icon: FileText, keywords: "fixed income government bonds sovereign gold bonds" },
  { title: "NRI Services", category: "Products", href: "/products/nris", icon: Briefcase, keywords: "nre nro portfolio investment overseas" },
  { title: "SLBM (Securities Lending)", category: "Products", href: "/products/slbm", icon: FileText, keywords: "stock lending borrowing idle shares" },

  // Investors
  { title: "Board of Directors", category: "Investors", href: "/investors/board-of-directors", icon: Briefcase, keywords: "leadership management directors key personnel" },
  { title: "Investor Grievance Redressal", category: "Investors", href: "/investor-grievance", icon: HelpCircle, keywords: "complaints escalation scores smartodr redressal" },
  { title: "Investor Charter (Stock Broker)", category: "Investors", href: "/investor-charter-stock-broker", icon: Shield, keywords: "charter sebi rights obligations investor charter" },
  { title: "Financial Information & Annual Reports", category: "Investors", href: "/investors/financial-information-and-annual-report", icon: FileText, keywords: "balance sheet profit loss audit financial statements" },
  { title: "Statutory Documents & Registration", category: "Investors", href: "/investors/statutory-and-registration-certificate-documents", icon: Shield, keywords: "sebi registration certificates nse bse mcx" },
  { title: "Policies & Disclosures", category: "Investors", href: "/investors/policies", icon: Shield, keywords: "anti money laundering aml surveillance code of conduct" },
  { title: "Disclosures of Material Events", category: "Investors", href: "/investors/disclosures-of-material-events-or-information", icon: FileText, keywords: "announcements material events disclosures" },
  { title: "Shareholding Pattern", category: "Investors", href: "/investors/shareholding-pattern", icon: FileText, keywords: "shares promoters public ownership" },
  { title: "Newspaper Publications", category: "Investors", href: "/investors/newspaper-publication", icon: FileText, keywords: "public notices notices ads newspapers" },

  // Research
  { title: "Company Research Reports", category: "Research", href: "/research/company", icon: BarChart3, keywords: "fundamentals technicals analysis equity reports" },
  { title: "IPO Reports & Analysis", category: "Research", href: "/research/ipos", icon: BarChart3, keywords: "mainboard sme initial public offering listing" },
  { title: "Market News", category: "Research", href: "/research/news", icon: FileText, keywords: "daily market updates headlines economy" },
  { title: "Market Announcements", category: "Research", href: "/research/announcements", icon: FileText, keywords: "corporate actions dividends earnings" },

  // Tools & Calculators
  { title: "SIP Calculator", category: "Calculators", href: "/sip-calculator", icon: Calculator, keywords: "sip return compound interest mutual fund calculator" },
  { title: "Risk Calculator", category: "Calculators", href: "/risk-calculator", icon: Calculator, keywords: "risk profile investor assessment tolerance" },
  { title: "Downloads Center", category: "Resources", href: "/downloads", icon: FileText, keywords: "account opening forms kyc forms nomination slips" },
  { title: "Partner With Us", category: "Business", href: "/partner-with-us", icon: Briefcase, keywords: "sub broker franchise ap business partnership" },
  { title: "Contact Us & Branch Details", category: "Support", href: "/contact", icon: HelpCircle, keywords: "help email phone support address ahmedabad" },
  { title: "HTML Site Map", category: "Navigation", href: "/sitemap", icon: FileText, keywords: "sitemap all pages index overview links" },
];

export default function QuickSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();

  const filteredItems = query.trim() === ""
    ? SEARCH_ITEMS.slice(0, 8)
    : SEARCH_ITEMS.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.keywords.toLowerCase().includes(q)
        );
      });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(true); // trigger open
      }
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === "Enter" && filteredItems.length > 0) {
        e.preventDefault();
        const selected = filteredItems[selectedIndex];
        if (selected) {
          router.push(selected.href);
          onClose();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Quick Search Site Content"
      className="fixed inset-0 z-[1000] bg-slate-950/70 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" aria-hidden="true" />
          <label htmlFor="quick-search-input" className="sr-only">Search pages, products, documents</label>
          <input
            id="quick-search-input"
            ref={inputRef}
            type="search"
            placeholder="Search products, reports, documents, policies..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 text-[16px] text-slate-900 placeholder:text-slate-400 bg-transparent outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search dialog"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2" role="listbox" aria-label="Search results">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              <p className="text-sm font-semibold">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for keywords like Equity, SIP, Grievance, or Charter.</p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;
              return (
                <div
                  key={item.href + item.title}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  onClick={() => {
                    router.push(item.href);
                    onClose();
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected ? "bg-[#012e54] text-white" : "hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${isSelected ? "text-white" : "text-slate-900"}`}>
                        {item.title}
                      </p>
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wider ${
                          isSelected ? "text-cyan-300" : "text-slate-400"
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 ${isSelected ? "text-cyan-300 translate-x-1" : "text-slate-300"} transition-transform`}
                    aria-hidden="true"
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer Shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">↓</kbd> Navigate</span>
            <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">Enter</kbd> Open</span>
            <span><kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">Esc</kbd> Close</span>
          </div>
          <span className="font-semibold text-[#0088c2]">Ratnakar Quick Finder</span>
        </div>
      </div>
    </div>
  );
}
