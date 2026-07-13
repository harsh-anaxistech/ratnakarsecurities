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
    { label: "Real Estate", href: "/products/real-estate" },
    { label: "NRIs", href: "/products/nri" },
    { label: "Narnolia Investment Advisory Portfolios", href: "/products/advisory" },
  ],
  Company: [
    { label: "Overview", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Milestone", href: "/about/milestone" },
  ],
  "Useful Links": [
    { label: "Broker Norms (NSE)", href: "/norms/nse" },
    { label: "Broker Norms (BSE)", href: "/norms/bse" },
    { label: "NSE", href: "https://www.nseindia.com" },
    { label: "BSE", href: "https://www.bseindia.com" },
    { label: "SEBI", href: "https://www.sebi.gov.in" },
    { label: "NSDL", href: "https://nsdl.co.in" },
    { label: "MCX", href: "https://www.mcxindia.com" },
    { label: "SCORES", href: "/scores" },
  ],
};

const TAB_CONTENT = {
  "ATTENTION INVESTORS": (
    <ul className="list-disc pl-5 space-y-2 text-sm" style={{ color: "#9fc8e0" }}>
      <li>Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.</li>
      <li>Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.</li>
      <li>Pay 20% upfront margin of the transaction value to trade in cash market segment.</li>
      <li>Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 dated August 31, 2020 and other guidelines issued from time to time in this regard.</li>
      <li>Check your Securities /MF/ Bonds in the consolidated account statement issued by NSDL/CDSL every month.</li>
      <li className="font-semibold text-secondary pt-2">.......... Issued in the interest of Investors</li>
    </ul>
  ),
  "INVESTOR CHARTER": (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm" style={{ color: "#9fc8e0" }}>
      <Link href="/charter/nse">NSE</Link>
      <Link href="/charter/bse">BSE</Link>
      <Link href="/charter/nsdl">NSDL</Link>
      <Link href="/charter/dp">Investor Charter of Depository Participant</Link>
      <Link href="/charter/broker">Investor Charter of Stock Broker</Link>
      <Link href="/charter/bank">Bank Account List</Link>
      <Link href="/charter/risk">Risk Disclosure on Derivatives</Link>
    </div>
  ),
};

export default function Footer() {
  const [activeTab, setActiveTab] = useState("ATTENTION INVESTORS");
  const tabs = Object.keys(TAB_CONTENT);

  return (
    <footer style={{ background: "#011628", color: "#c8dff0" }}>
      <div className="pt-16 pb-10 border-b border-[#00aeee]/15">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
            {/* Brand column */}
            <div>
              <Link href="/" className="inline-block mb-5">
                <div className="bg-white rounded-xl px-4 py-3 inline-flex items-center justify-center">
                  <Image src="/images/logo/RSL_logo.png" alt="Ratnakar Securities" width={180} height={50} className="object-contain" />
                </div>
              </Link>
              <p className="text-sm leading-relaxed max-w-[260px]" style={{ color: "#9fc8e0" }}>
                Cameo Corporate Services Limited<br />
                #1, Subramanian Building, Club House Road, Chennai-600002.<br />
                Contact No : 044-40020731
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: "#00aeee" }}>{heading}</h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investor Notices */}
      <div className="py-8 border-b border-[#00aeee]/15">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-5 text-xs font-bold tracking-wide uppercase">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ color: activeTab === tab ? "#00aeee" : "#9fc8e0" }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div>{TAB_CONTENT[activeTab]}</div>
        </div>
      </div>

      {/* Regulatory & Bottom bar */}
      <div className="py-8 border-b border-[#00aeee]/15 text-sm text-[#9fc8e0]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 space-y-2">
          <p>Ratnakar Securities Pvt. Ltd.: SEBI Registration No. of NSE, BSE : INZ000191735 | SEBI Registration No. of NSDL : IN-DP-NSDL-66-88</p>
          <p>Ratnakar Commodities Pvt. Ltd : SEBI Registration No. of MCX : INZ000024138</p>
          <p>Investor Grievance ID: investorgrievance@ratnakarsecurities.com</p>
          <div className="flex gap-4 flex-wrap mt-4 text-xs font-bold underline">
            <Link href="/smart-odr">Online Dispute Resolution Portal - SMART ODR</Link>
            <Link href="/scores-complaint">To File A Complaint on SCORES Click Here</Link>
            <Link href="/nomination">For Nomination, Please Click Here</Link>
            <Link href="/close-account">To Close Account, Please Click Here</Link>
          </div>
        </div>
      </div>

      <div className="py-5 text-xs text-[#7a9bb5]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>© 2026 Ratnakar Securities Limited. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/terms">Terms of Conditions</Link>
            <Link href="/complaint">Investor Complaint</Link>
            <span>Developed by <a href="https://anaxistech.com" className="text-secondary">Anaxistech</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}