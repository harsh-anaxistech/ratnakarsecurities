"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import RiskDisclosureModal from "@/components/modals/RiskDisclosureModal";

const FOOTER_LINKS = {
  Products: [
    { label: "Equity", href: "/products/equity" },
    { label: "Derivatives", href: "/products/derivatives" },
    { label: "Mutual Funds", href: "/products/mutual-funds" },
    { label: "Commodities", href: "/products/commodities" },
    { label: "Wealth Management", href: "/products/wealth-management" },
    { label: "Bonds", href: "/products/bonds" },
    { label: "SLBM", href: "/products/slbm" },
    { label: "HNIs", href: "/products/hnis" },
    { label: "NRIs", href: "/products/nris" },
    { label: "Narnolia Investment Advisory Portfolios", href: "https://ratnakarsecurities.narnolia.in/", target: "_blank" },
  ],
  "About Us": [
    { label: "Overview", href: "/about#overview" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Milestone", href: "/about#journey" },
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

const SOCIAL_LINKS = [
  { icon: FaFacebookF, href: "https://bit.ly/3Qp6APj", label: "Facebook" },
  { icon: FaXTwitter, href: "https://bit.ly/3ZYYotx", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com/ratnakar_securities_pvt_ltd?igshid=YmMyMTA2M2Y=", label: "Instagram" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/ratnakar-securities", label: "LinkedIn" },
];

const getTabContent = (onRiskDisclosureClick) => ({
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
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm" style={{ color: "#9fc8e0" }}>
      {[
        { label: "NSE", href: "https://www.nseindia.com/invest/investor-charter", target: "_blank" },
        { label: "BSE", href: "https://www.bseindia.com/static/investors/investor_charter.aspx", target: "_blank" },
        { label: "NSDL", href: "https://nsdl.co.in/publications/investor_charter.php", target: "_blank" },
        { label: "Investor Charter of Depository Participant", href: "https://www.ratnakarsecurities.com/static/investor-charter.aspx" },
        { label: "Investor Charter of Stock Broker", href: "https://www.ratnakarsecurities.com/files/Investor_Charter_Stock_Broker.pdf", target: "_blank" },
        { label: "Bank Account List", href: "https://www.ratnakarsecurities.com/files/Bank-Account-List.pdf", target: "_blank" },
        { label: "Risk Disclosure on Derivatives", href: "#", onClick: (e) => { e.preventDefault(); onRiskDisclosureClick(); } },
        { label: "Details of Authorized Persons", href: "https://www.ratnakarsecurities.com/files/List-of-Authorised-Persons.pdf", target: "_blank" },
        { label: "Procedures for opening an account", href: "https://www.ratnakarsecurities.com/files/Procedures-for-opening-an-account,filing-a-complaint.pdf", target: "_blank" },
        { label: "Dealings between a Client and Stock Broker", href: "https://www.ratnakarsecurities.com/files/Requirements__relating_to_dealings_between_a_Client_and_Stock_Broker.pdf", target: "_blank" },
        { label: "Attention Investors", href: "https://www.ratnakarsecurities.com/files/Attention-Investors.pdf", target: "_blank" },
      ].map((item, index, arr) => (
        <span key={item.label} className="flex items-center gap-3">
          <a
            href={item.href}
            target={item.target}
            rel={item.target ? "noopener noreferrer" : undefined}
            onClick={item.onClick}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {item.label}
          </a>
          {index < arr.length - 1 && <span className="opacity-40">|</span>}
        </span>
      ))}
    </div>
  ),
});

export default function Footer() {
  const [activeTab, setActiveTab] = useState("ATTENTION INVESTORS");
  const [isScoresModalOpen, setIsScoresModalOpen] = useState(false);
  const [isRiskDisclosureModalOpen, setIsRiskDisclosureModalOpen] = useState(false);
  const tabContent = getTabContent(() => setIsRiskDisclosureModalOpen(true));
  const tabs = Object.keys(tabContent);

  useEffect(() => {
    if (isScoresModalOpen || isRiskDisclosureModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isScoresModalOpen, isRiskDisclosureModalOpen]);

  return (
    <footer role="contentinfo" style={{ background: "#011628", color: "#c8dff0" }}>
      {/* 4 Column Main Footer Section */}
      <div className="pt-16 pb-10 border-b border-gray-500/30">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

            {/* Column 1: Logo, Address, Social Icons */}
            <div className="col-span-2 lg:col-span-1 space-y-5">
              <Link href="#" aria-label="Ratnakar Securities Footer Logo" className="inline-block">
                <div className="bg-white rounded-xl px-4 py-3 inline-flex items-center justify-center">
                  <Image
                    src="/images/logo/RSL_logo.png"
                    alt="Ratnakar Securities"
                    width={180}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </Link>

              <ul className="text-[14px] sm:text-[15px] leading-relaxed space-y-0.5" style={{ color: "#9fc8e0" }}>
                <li><strong>Ratnakar Securities Ltd.</strong></li>
                <li>304, Sankalp Square - 2,</li>
                <li>Near Jalaram Mandir Crossing,</li>
                <li>Ellisbridge, Ahmedabad - 380006</li>
                <li>Contact No : <a href="tel:07949005200" className="hover:text-white transition-colors">079 - 49005200 / 01 / 02</a></li>
              </ul>

              <div className="flex items-center gap-3 pt-2">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full bg-[#13304a] text-[#9fc8e0] hover:bg-[#00aeee] hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Products (Part 1) */}
            <div className="col-span-1">
              <h4 className="text-[15px] sm:text-[16px] font-bold tracking-widest uppercase mb-4 sm:mb-5" style={{ color: "#00aeee" }}>
                Products
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {[
                  { label: "Equity", href: "/products/equity" },
                  { label: "Derivatives", href: "/products/derivatives" },
                  { label: "Mutual Funds", href: "/products/mutual-funds" },
                  { label: "Commodities", href: "/products/commodities" },
                  { label: "Wealth Management", href: "/products/wealth-management" },
                  { label: "Bonds", href: "/products/bonds" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14px] sm:text-[16px] hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products (Part 2) */}
            <div className="col-span-1">
              <h4 className="text-[15px] sm:text-[16px] font-bold tracking-widest uppercase mb-4 sm:mb-5" style={{ color: "#00aeee" }}>
                Products
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {[
                  { label: "SLBM", href: "/products/slbm" },
                  { label: "HNIs", href: "/products/hnis" },
                  { label: "NRIs", href: "/products/nris" },
                  { label: "Narnolia Investment Advisory Portfolios", href: "https://ratnakarsecurities.narnolia.in/", target: "_blank" },
                ].map((l) => (
                  <li key={l.label}>
                    {l.target ? (
                      <a href={l.href} target={l.target} rel="noopener noreferrer" className="text-[14px] sm:text-[16px] hover:text-white transition-colors">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-[14px] sm:text-[16px] hover:text-white transition-colors">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: About Us */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[15px] sm:text-[16px] font-bold tracking-widest uppercase mb-4 sm:mb-5" style={{ color: "#00aeee" }}>
                About Us
              </h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {FOOTER_LINKS["About Us"].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14px] sm:text-[16px] hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Useful Links Full-Width Horizontal Row & Important Links */}
      <div className="py-6 border-b border-gray-500/30">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 space-y-4">

          {/* Useful Links Row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <h4 className="text-[15px] sm:text-[16px] font-bold tracking-widest uppercase shrink-0" style={{ color: "#00aeee" }}>
              Useful Links :
            </h4>
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-2 text-[14px] sm:text-[16px]" style={{ color: "#9fc8e0" }}>
              {FOOTER_LINKS["Useful Links"].map((l, index) => (
                <span key={l.label} className="flex items-center gap-3 sm:gap-4">
                  <a href={l.href} target={l.target} rel="noopener noreferrer" className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                  {index < FOOTER_LINKS["Useful Links"].length - 1 && <span className="opacity-40">|</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Quick Important Links */}
          <div className="text-[14px] sm:text-[16px] leading-relaxed flex flex-wrap items-center gap-x-3 gap-y-1" style={{ color: "#9fc8e0" }}>
            <a href="https://investorhelpline.nseindia.com/ClientCollateral/welcomeCLUser" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Segregation Monitoring Collateral
            </a>
            <span>|</span>
            <a href="https://www.evoting.nsdl.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              NSDL e Voting
            </a>
            <span>|</span>
            <a href="https://eservices.nsdl.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              NSDL IDEAS Services
            </a>
          </div>

        </div>
      </div>

      {/* 2. INVESTOR NOTICES (TABS) SECTION */}
      <div className="py-8 border-b border-[#00aeee]/30">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-5 text-sm font-bold tracking-wide uppercase">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="transition-colors hover:text-[#00aeee]"
                style={{ color: activeTab === tab ? "#00aeee" : "#9fc8e0" }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div>{tabContent[activeTab]}</div>
        </div>
      </div>

      {/* Regulatory & Bottom bar */}
      <div className="py-8 border-b border-[#00aeee]/15 text-sm sm:text-base text-[#9fc8e0]">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 space-y-2">
          <p>Ratnakar Securities Pvt. Ltd.: SEBI Registration No. of NSE, BSE : INZ000191735 | SEBI Registration No. of NSDL : IN-DP-NSDL-66-88</p>
          <p>Ratnakar Commodities Pvt. Ltd : SEBI Registration No. of MCX : INZ000024138</p>
          <p>Investor Grievance ID: <a href="mailto:investorgrievance@ratnakarsecurities.com" className="hover:text-white transition-colors underline">investorgrievance@ratnakarsecurities.com</a></p>
          <div className="flex flex-wrap items-center gap-2 mt-4 text-[13px] font-bold">
            <a
              href="https://api.ratnakarsecurities.com/uploads/files/Ratnakar-Securities-Smart-ODR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00aeee" }}
              className="underline hover:opacity-80 transition-opacity"
            >
              Online Dispute Resolution Portal - SMART ODR
            </a>

            <span className="text-gray-400">|</span>

            <button
              onClick={() => setIsScoresModalOpen(true)}
              style={{ color: "#00aeee" }}
              className="underline cursor-pointer text-left hover:opacity-80 transition-opacity"
            >
              To File A Complaint on SCORES - Click Here
            </button>

            <span className="text-gray-400">|</span>

            <Link
              href="/nomination"
              style={{ color: "#00aeee" }}
              className="underline hover:opacity-80 transition-opacity"
            >
              For Nomination, Please - Click Here
            </Link>

            <span className="text-gray-400">|</span>

            <a
              href="https://tradewebx1.ratnakarsecurities.com:9001/#/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#00aeee" }}
              className="underline hover:opacity-80 transition-opacity"
            >
              To Close Account, Please - Click Here
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white py-4 text-xs text-black">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span>© 2026 Ratnakar Securities Limited. All rights reserved.</span>
          <div className="flex flex-wrap sm:flex-nowrap gap-y-1 justify-center sm:justify-end items-center text-[11px] sm:text-sm">
            {[
              { label: "Privacy Policy", href: "/privacy-policy", isLink: true },
              { label: "Disclaimer", href: "/images/disclaimer.pdf", target: "_blank" },
              { label: "Terms of Conditions", href: "/images/termsofuse.pdf", target: "_blank" },
              { label: "Investor Complaint", href: "/images/investercompomplaint.docx", target: "_blank" },
              { label: "Refund & Cancellation", href: "/refund-and-cancellation", isLink: true },
            ].map((item, index, arr) => (
              <span key={item.label} className="flex items-center">
                {item.isLink ? (
                  <Link href={item.href} className="text-black hover:text-[#00aeee] transition-colors font-medium px-1.5 sm:px-2 py-1.5 inline-block">{item.label}</Link>
                ) : (
                  <a href={item.href} target={item.target} rel="noopener noreferrer" className="text-black hover:text-[#00aeee] transition-colors font-medium px-1.5 sm:px-2 py-1.5 inline-block">{item.label}</a>
                )}
                {index < arr.length - 1 && <span className="text-gray-400 select-none" aria-hidden="true">|</span>}
              </span>
            ))}

            <span className="bg-white text-black px-2 py-0.5 rounded text-xs">Developed by <a href="https://anaxistech.com/" target="_blank" rel="noopener noreferrer" className="font-semibold italic text-black hover:text-[#00aeee] transition-colors">Anaxistech</a></span>
          </div>
        </div>
      </div>

      {/* SCORES Modal */}
      {isScoresModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
          onClick={() => setIsScoresModalOpen(false)}
        >
          <div
            className="relative w-full max-w-[620px] bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden text-left transition-all duration-300 transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="px-6 py-6 sm:px-8 sm:py-7 relative flex items-center justify-between"
              style={{
                background:
                  "radial-gradient(1400px 700px at 85% 20%, #1a6eb5 0%, #012e54 50%, #011628 100%)",
              }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
                  Filing complaints on SCORES
                </h3>
                <p
                  className="text-xs sm:text-sm font-semibold tracking-wider uppercase mt-1"
                  style={{ color: "#00aeee" }}
                >
                  Easy & quick
                </p>
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsScoresModalOpen(false)}
                className="text-xs font-bold uppercase tracking-wider text-white/80 hover:text-white transition-colors flex items-center gap-1 cursor-pointer bg-white/10 hover:bg-white/20 p-2.5 rounded-full"
                aria-label="Close modal"
              >
                <span className="text-[#00aeee] text-base font-black">✕</span>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6 bg-white text-gray-800">
              <ul className="space-y-6 text-sm sm:text-base">
                {/* Item 1 */}
                <li className="flex items-start gap-3.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#ea2830] shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>

                  <div>
                    <p className="font-medium text-gray-900">
                      Register on SCORES portal
                    </p>

                    <a
                      href="https://scores.sebi.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1a6eb5] underline hover:text-[#ea2830] transition-colors break-all font-medium"
                    >
                      https://scores.sebi.gov.in/
                    </a>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="flex flex-col gap-3">
                  <div className="flex items-start gap-3.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-[#ea2830] shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>

                    <span className="font-medium text-gray-900">
                      Mandatory details for filing complaints on SCORES
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pl-8">
                    {["Name", "PAN", "Address", "Mobile Number", "E-mail ID"].map(
                      (item) => (
                        <span
                          key={item}
                          className="bg-red-50 text-[#ea2830] border border-red-100 py-1 px-3 rounded-lg text-xs font-bold"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </li>

                {/* Item 3 */}
                <li className="flex flex-col gap-3">
                  <div className="flex items-start gap-3.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-[#ea2830] shrink-0 mt-0.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>

                    <span className="font-medium text-gray-900">Benefits</span>
                  </div>

                  <ul className="space-y-2 pl-8 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-[#1a6eb5] shrink-0"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>

                      <span>Effective communication</span>
                    </li>

                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-[#1a6eb5] shrink-0"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>

                      <span>Transparency in grievance handling</span>
                    </li>

                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-[#1a6eb5] shrink-0"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>

                      <span>Speedy redressal of grievances</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Risk Disclosure Modal */}
      <RiskDisclosureModal
        isOpen={isRiskDisclosureModalOpen}
        onClose={() => setIsRiskDisclosureModalOpen(false)}
      />
    </footer>
  );
}