"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  Products: [
    { label: "Equity", href: "/products/equity" },
    { label: "Derivatives", href: "/products/derivatives" },
    { label: "Mutual Funds", href: "/products/mutual-funds" },
    { label: "Commodities", href: "/products/commodities" },
    { label: "Bonds", href: "/products/bonds" },
    { label: "NRI Services", href: "/products/nri" },
    { label: "Wealth Management", href: "/products/wealth-management" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Milestones", href: "/about/milestone" },
    { label: "Research", href: "/research" },
    { label: "Contact Us", href: "/contact" },
  ],
  Investors: [
    { label: "Open an Account", href: "/contact" },
    { label: "Backoffice Login", href: "/login/backoffice" },
    { label: "Board of Directors", href: "/investors/board-of-directors" },
    { label: "Investor Charter", href: "/investors/policies" },
    { label: "SCORES Complaint", href: "/scores-complaint" },
    { label: "Smart ODR", href: "/smart-odr" },
  ],
};

const TAB_CONTENT = {
  "ATTENTION INVESTORS": (
    <ul className="list-disc pl-5 space-y-1.5 text-sm" style={{ color: "#9fc8e0" }}>
      <li>Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.</li>
      <li>Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.</li>
      <li>Pay 20% upfront margin of the transaction value to trade in cash market segment.</li>
      <li>Check your Securities/MF/Bonds in the consolidated account statement issued by NSDL/CDSL every month.</li>
      <p className="mt-2 text-secondary font-medium">.......... Issued in the interest of Investors</p>
    </ul>
  ),
  KYC: (
    <p className="text-sm" style={{ color: "#9fc8e0" }}>
      KYC is one time exercise while dealing in securities markets — once KYC is done through a SEBI registered intermediary (Broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
    </p>
  ),
  IPO: (
    <p className="text-sm" style={{ color: "#9fc8e0" }}>
      No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account.
    </p>
  ),
  "IBT TRADING": (
    <p className="text-sm" style={{ color: "#9fc8e0" }}>
      The Stock Exchange, Mumbai is not in any manner answerable, responsible or liable to any person or persons for any acts of omission or commission, errors, mistakes and/or violation, actual or perceived, by us or our partners, agents, associates etc., of any of the Rules, Regulations, Bye-laws of the Stock Exchange, Mumbai, SEBI Act or any other laws in force from time to time.
    </p>
  ),
  "KYC & KRA STATUS": (
    <p className="text-sm" style={{ color: "#9fc8e0" }}>
      Kindly monitor your KYC & KRA status on an ongoing basis. Ensure your registered details match across all regulatory platforms to maintain seamless operational capability across your trading and demat accounts.
    </p>
  ),
};

export default function Footer() {
  const [activeTab, setActiveTab] = useState("ATTENTION INVESTORS");
  const tabs = Object.keys(TAB_CONTENT);

  return (
    <footer style={{ background: "#011628", color: "#c8dff0" }}>

      {/* ── Main 4-col grid ── */}
      <div className="pt-16 pb-10 border-b" style={{ borderColor: "rgba(0,174,238,0.15)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">

            {/* Brand column */}
            <div>
              <Link href="/" aria-label="Ratnakar Securities – Home" className="inline-block mb-5">
                <div className="bg-white rounded-xl px-4 py-3 inline-flex items-center justify-center shadow-md">
                  <Image src="/images/logo/RSL_logo.png" alt="Ratnakar Securities" width={180} height={50} className="object-contain" />
                </div>
              </Link>
              <p className="text-sm leading-relaxed max-w-[260px]" style={{ color: "#9fc8e0" }}>
                Ellisbridge, Ahmedabad — serving 25,000+ investors across 30+ cities for 25 years.
              </p>
              <div className="mt-5 space-y-2 text-sm" style={{ color: "#9fc8e0" }}>
                <p className="flex items-center gap-2">📞 079-4900 5200 / 01 / 02</p>
                <p className="flex items-center gap-2">✉ info@ratnakarsecurities.com</p>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#00aeee" }}>
                  {heading}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm transition-colors hover:text-secondary" style={{ color: "#c8dff0" }}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Regulatory information ── */}
      <div className="py-8 border-b" style={{ borderColor: "rgba(0,174,238,0.15)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 text-sm leading-relaxed space-y-2" style={{ color: "#9fc8e0" }}>
          <p>
            <b style={{ color: "#c8dff0" }}>Ratnakar Securities Pvt. Ltd.</b> — SEBI Registration No. (NSE, BSE): INZ000191735 · SEBI Registration No. (NSDL): IN-DP-NSDL-66-98
          </p>
          <p>
            <b style={{ color: "#c8dff0" }}>Ratnakar Commodities Pvt. Ltd.</b> — SEBI Registration No. (MCX): INZ000024138 · Investor Grievance: investorgrievance@ratnakarsecurities.com
          </p>
          <p className="mt-3 text-xs leading-relaxed" style={{ color: "#7a9bb5" }}>
            Investments in securities market are subject to market risks. Read all related documents carefully before investing. Brokerage will not exceed SEBI-prescribed limits. KYC is a one-time exercise while dealing in securities markets.
          </p>
        </div>
      </div>

      {/* ── Investor notices ── */}
      <div className="py-8 border-b" style={{ borderColor: "rgba(0,174,238,0.15)" }}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5 text-xs font-bold tracking-wide uppercase">
            {tabs.map((tab, idx) => (
              <span key={tab} className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className="transition-colors"
                  style={{ color: activeTab === tab ? "#00aeee" : "#9fc8e0" }}
                >
                  {tab}
                </button>
                {idx < tabs.length - 1 && <span style={{ color: "rgba(0,174,238,0.3)" }}>|</span>}
              </span>
            ))}
          </div>
          <div>{TAB_CONTENT[activeTab]}</div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="py-5">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ color: "#7a9bb5" }}>
          <span>© 2026 Ratnakar Securities Pvt. Ltd. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Disclaimer", href: "/disclaimer" },
              { label: "Terms", href: "/terms" },
            ].map((l, i, arr) => (
              <span key={l.label} className="flex items-center gap-3">
                <Link href={l.href} className="transition-colors hover:text-secondary">{l.label}</Link>
                {i < arr.length - 1 && <span style={{ color: "rgba(0,174,238,0.3)" }}>·</span>}
              </span>
            ))}
            <span style={{ color: "rgba(0,174,238,0.3)" }}>·</span>
            <span>
              Developed by{" "}
              <a href="https://anaxistech.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">
                AnaxisTech
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
