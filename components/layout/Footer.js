"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  Products: [
    { label: "Equity", href: "/products?tab=Equity" },
    { label: "Derivatives", href: "/products?tab=Derivatives" },
    { label: "Mutual Fund", href: "/products?tab=MutualFunds" },
    { label: "Commodities", href: "/products?tab=Commodities" },
    { label: "Real Estate", href: "/products?tab=RealEstate" },
    { label: "NRIs", href: "/products?tab=NRIs" },
    { label: "Narnolia Investment Advisory Portfolios", href: "https://ratnakarsecurities.narnolia.in/", target: "_blank" },
  ],
  "About Us": [
    { label: "Overview", href: "/about?tab=overview" },
    { label: "Leadership", href: "/about?tab=leadership" },
    { label: "Milestone", href: "/about?tab=milestones" },
  ],
  "Useful Links": [
    { label: "Broker Norms (NSE)", href: "https://www.ratnakarsecurities.com/files/brokernorms.pdf", target: "_blank" },
    { label: "Broker Norms (BSE)", href: "https://www.ratnakarsecurities.com/files/brokernormsbse.pdf", target: "_blank" },
    { label: "NSE", href: "https://www.nseindia.com/", target: "_blank" },
    { label: "BSE", href: "https://www.bseindia.com/", target: "_blank" },
    { label: "SEBI", href: "https://www.sebi.gov.in/", target: "_blank" },
    { label: "NSDL", href: "https://nsdl.co.in/", target: "_blank" },
    { label: "MCX", href: "https://www.mcxindia.com/home", target: "_blank" },
    { label: "SCORES", href: "https://scores.gov.in/scores/Welcome.html", target: "_blank" },
  ],
};

const TAB_CONTENT = {
  "ATTENTION INVESTORS": (
    <ul className="list-disc pl-5 space-y-2 text-sm" style={{ color: "#9fc8e0" }}>
      <li>Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.</li>
      <li>Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.</li>
      <li>Pay 20% upfront margin of the transaction value to trade in cash market segment.</li>
      <li>{"Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued circular reference NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534 dated August 31, 2020 and other circulars / guidelines issued from time to time in this regard."}</li>
      <li>Check your Securities /MF/ Bonds in the consolidated account statement issued by NSDL/CDSL every month.</li>
      <li className="font-semibold text-secondary pt-2">.......... Issued in the interest of Investors</li>
    </ul>
  ),
  "INVESTOR CHARTER": (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm" style={{ color: "#9fc8e0" }}>
      <Link href="#">NSE</Link>
      <Link href="#">BSE</Link>
      <Link href="#">NSDL</Link>
      <Link href="#">Investor Charter of Depository Participant</Link>
      <Link href="#">Investor Charter of Stock Broker</Link>
      <Link href="#">Bank Account List</Link>
      <Link href="#">Risk Disclosure on Derivatives</Link>
    </div>
  ),
};

export default function Footer() {
  const [activeTab, setActiveTab] = useState("ATTENTION INVESTORS");
  const tabs = Object.keys(TAB_CONTENT);

  return (
    <footer style={{ background: "#011628", color: "#c8dff0" }}>
      <div className="pt-16 pb-10 border-b border-[#00aeee]/15">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
            {/* Brand column */}
            <div>
              <Link href="#" className="inline-block mb-5">
                <div className="bg-white rounded-xl px-4 py-3 inline-flex items-center justify-center">
                  <Image src="/images/logo/RSL_logo.png" alt="Ratnakar Securities" width={180} height={50} className="object-contain" />
                </div>
              </Link>
              {/* એડ્રેસ ની સાઈઝ 16px સેટ કરી */}
              <ul className="text-[16px] leading-relaxed max-w-[280px] space-y-1" style={{ color: "#9fc8e0" }}>
                <li><strong>Cameo Corporate Services Limited</strong></li>
                <li>#1, Subramanian Building,</li>
                <li>Club House Road, Chennai-600002.</li>
                <li>Contact No : <a href="tel:04440020731" className="hover:text-white transition-colors">044-40020731</a></li>
              </ul>
            </div>

            {/* Link columns */}
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                {/* હેડિંગ ની સાઈઝ 16px સેટ કરી */}
                <h4 className="text-[16px] font-bold tracking-widest uppercase mb-5" style={{ color: "#00aeee" }}>{heading}</h4>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      {/* લિંક્સ ની સાઈઝ 16px સેટ કરી */}
                      {l.target ? (
                        <a href={l.href} target={l.target} rel="noopener noreferrer" className="text-[16px] hover:text-white transition-colors">{l.label}</a>
                      ) : (
                        <Link href={l.href} className="text-[16px] hover:text-white transition-colors">{l.label}</Link>
                      )}
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
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
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
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 space-y-2">
          <p>Ratnakar Securities Pvt. Ltd.: SEBI Registration No. of NSE, BSE : INZ000191735 | SEBI Registration No. of NSDL : IN-DP-NSDL-66-88</p>
          <p>Ratnakar Commodities Pvt. Ltd : SEBI Registration No. of MCX : INZ000024138</p>
          <p>Investor Grievance ID: investorgrievance@ratnakarsecurities.com</p>
          <div className="flex gap-4 flex-wrap mt-4 text-xs font-bold underline">
            <Link href="#">Online Dispute Resolution Portal - SMART ODR</Link>
            <Link href="#">To File A Complaint on SCORES Click Here</Link>
            <Link href="#">For Nomination, Please Click Here</Link>
            <Link href="#">To Close Account, Please Click Here</Link>
          </div>
        </div>
      </div>

      <div className="py-5 text-xs text-[#7a9bb5]">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>© 2026 Ratnakar Securities Limited. All rights reserved.</span>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-end">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/terms-of-conditions">Terms of Conditions</Link>
            <Link href="/investor-complaint">Investor Complaint</Link>
            <Link href="https://www.ratnakarsecurities.com/static/refund-cancellation.aspx" target="_blank">Refund & Cancellation</Link>
            <Link href="https://www.ratnakarsecurities.com/files/Segregation_and_Monitoring_of_Collateral_at_Client_Level.pdf" target="_blank">Segregation Monitoring Collateral</Link>
            <Link href="https://www.evoting.nsdl.com/" target="_blank">NSDL E Voting</Link>
            <Link href="https://eservices.nsdl.com/" target="_blank">NSDL IDEAS Services</Link>
            <span>Developed by <a href="#" className="text-secondary">Anaxistech</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}