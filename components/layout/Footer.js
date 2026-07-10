"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/common/Container";
import Image from "next/image";

const TAB_CONTENT = {
  "ATTENTION INVESTORS": (
    <ul className="list-disc pl-5 space-y-2 text-base text-muted ">
      <li>
        Stock Brokers can accept securities as margin from clients only by way
        of pledge in the depository system w.e.f. September 1, 2020.
      </li>
      <li>
        Update your mobile number & email Id with your stock broker/depository
        participant and receive OTP directly from depository on your email id
        and/or mobile number to create pledge.
      </li>
      <li>
        Pay 20% upfront margin of the transaction value to trade in cash market
        segment.
      </li>
      <li>
        Investors may please refer to the Exchange's Frequently Asked Questions
        (FAQs) issued vide circular reference NSE/INSP/45191 dated July 31, 2020
        and NSE/INSP/45534 dated August 31, 2020 and other guidelines issued
        from time to time in this regard.
      </li>
      <li>
        Check your Securities /MF/ Bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </li>
      <p>.......... Issued in the interest of Investors</p>
    </ul>
  ),
  KYC: (
    <p className="text-muted text-base ">
      "KYC is one time exercise while dealing in securities markets - once KYC
      is done through a SEBI registered intermediary (Broker, DP, Mutual Fund
      etc.), you need not undergo the same process again when you approach
      another intermediary."
    </p>
  ),
  IPO: (
    <p className="text-muted text-base ">
      "No need to issue cheques by investors while subscribing to IPO. Just
      write the bank account number and sign in the application form to
      authorise your bank to make payment in case of allotment. No worries for
      refund as the money remains in investor's account."
    </p>
  ),
  "IBT TRADING": (
    <p className="text-muted text-base ">
      "The Stock Exchange, Mumbai is not in any manner answerable, responsible
      or liable to any person or persons for any acts of omission or commission,
      errors, mistakes and/or violation, actual or perceived, by us or our
      partners, agents, associates etc., of any of the Rules, Regulations,
      Bye-laws of the Stock Exchange, Mumbai, SEBI Act or any other laws in
      force from time to time. | The Stock Exchange, Mumbai is not answerable,
      responsible or liable for any information on this Website or for any
      services rendered by our employees, our servants, and us."
    </p>
  ),
  "KYC & KRA STATUS AWARENESS": (
    <p className="text-muted text-base ">
      "Kindly monitor your KYC & KRA status on an ongoing basis. Ensure your
      registered details match across all regulatory platforms to maintain
      seamless operational capability across your trading and demat accounts."
    </p>
  ),
};

export default function Footer() {
  const [activeTab, setActiveTab] = useState("ATTENTION INVESTORS");

  const tabs = [
    "ATTENTION INVESTORS",
    "KYC",
    "IPO",
    "IBT TRADING",
    "KYC & KRA STATUS AWARENESS",
  ];

  return (
    <footer className="w-full bg-muted text-base text-muted border-t border-gray-100">
      <div className=" bg-light-blue pt-8 pb-12">
        <Container>
          <div className=" mb-6">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 text-base select-none">
              {tabs.map((tab, idx) => (
                <div key={tab} className="flex items-center gap-x-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`uppercase transition-colors cursor-pointer duration-150 text-left  ${
                      activeTab === tab
                        ? "text-secondary "
                        : "text-muted hover:text-secondary"
                    }`}
                  >
                    {tab}
                  </button>
                  {idx < tabs.length - 1 && (
                    <span className="text-gray-300">|</span>
                  )}
                </div>
              ))}
            </div>

            <div>{TAB_CONTENT[activeTab]}</div>
          </div>

          <div className=" text-base  text-muted">
            <h3 className="text-secondary text-base uppercase mb-2 ">
              Investor Charter
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted">
              <Link
                href="/nse"
                className="hover:underline hover:text-secondary"
              >
                NSE
              </Link>
              <span>|</span>
              <Link
                href="/bse"
                className="hover:underline hover:text-secondary"
              >
                BSE
              </Link>
              <span>|</span>
              <Link
                href="/nsdl"
                className="hover:underline hover:text-secondary"
              >
                NSDL
              </Link>
              <span>|</span>
              <Link
                href="/charter-dp"
                className="hover:underline hover:text-secondary"
              >
                Investor Charter of Depository Participant
              </Link>
              <span>|</span>
              <Link
                href="/charter-broker"
                className="hover:underline hover:text-secondary"
              >
                Investor Charter of Stock Broker
              </Link>
              <span>|</span>
              <Link
                href="/bank-accounts"
                className="hover:underline hover:text-secondary"
              >
                Bank Account List
              </Link>
              <span>|</span>
              <Link
                href="/risk-disclosure"
                className="hover:underline hover:text-secondary"
              >
                Risk Disclosure on Derivatives
              </Link>
              <span>|</span>
              <Link
                href="/authorized-persons"
                className="hover:underline hover:text-secondary"
              >
                Details of Authorized Persons
              </Link>
              <span>|</span>
              <Link
                href="/open-account-procedure"
                className="hover:underline hover:text-secondary"
              >
                Procedures for opening an account
              </Link>
              <span>|</span>
              <Link
                href="/client-broker-dealings"
                className="hover:underline hover:text-secondary"
              >
                Dealings between a Client and Stock Broker
              </Link>
              <span>|</span>
              <Link
                href="/attention-investors"
                className="hover:underline hover:text-secondary"
              >
                Attention Investors
              </Link>
            </div>
          </div>

 
        </Container>
          </div>

      <div className=" bg-dark-blue pt-8 pb-12">
<Container>
  {/* Main 5-Column Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-base">
    
    {/* Column 1: Logo & Address */}
    <div className="text-muted space-y-4">
      <div className="mb-4">
        {/* Replace with your actual Logo component or <img> */}
            <Link
              href="/"
              className="group bg-white p-3 rounded-lg flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
            </Link>      </div>
      <div>
        {/* <h4 className="text-secondary text-base uppercase mb-1 font-semibold">
          Cameo Corporate Services Limited
        </h4> */}
        <p>#1, Subramanian Building,</p>
        <p>Club House Road, Chennai-600002.</p>
        <p>Contact No : 044-40020731</p>
      </div>
    </div>

    {/* Column 2: Products */}
    <div>
      <h4 className="text-secondary text-base uppercase mb-4 font-semibold">
        Products
      </h4>
      <ul className="space-y-2 text-muted">
        {[
          "Equity",
          "Derivatives",
          "Mutual Fund",
          "Commodities",
          "Real Estate",
          "NRIs",
          "Narnolia Investment Advisory Portfolios",
        ].map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-secondary transition-colors"
            >
              • {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 3: About Us */}
    <div>
      <h4 className="text-secondary text-base uppercase mb-4 font-semibold">
        About Us
      </h4>
      <ul className="space-y-2 text-muted">
        {["Overview", "Leadership", "Milestone"].map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase()}`}
              className="hover:text-secondary transition-colors"
            >
              • {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 4: Useful Links */}
    <div>
      <h4 className="text-secondary text-base uppercase mb-4 font-semibold">
        Useful Links
      </h4>
      <ul className="space-y-2 text-muted">
        {[
          { label: "Broker Norms (NSE)", href: "/broker-norms-nse" },
          { label: "Broker Norms (BSE)", href: "/broker-norms-bse" },
          { label: "NSE", href: "/nse-link" },
          { label: "BSE", href: "/bse-link" },
          { label: "SEBI", href: "/sebi" },
          { label: "NSDL", href: "/nsdl-link" },
          { label: "MCX", href: "/mcx" },
          { label: "SCORES", href: "/scores" },
        ].map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-secondary transition-colors"
            >
              • {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 5: Legal Registrations & Actions */}
    <div className="text-muted space-y-4 text-sm md:text-base">
      <div className="space-y-2">
        <p>
          <span className="text-secondary font-semibold">
            Ratnakar Securities Pvt. Ltd.:
          </span>{" "}
          SEBI Registration No. of NSE, BSE : INZ000191735 | SEBI Registration No. of NSDL : IN-DP-NSDL-66-98
        </p>
        <p>
          <span className="text-secondary font-semibold">
            Ratnakar Commodities Pvt. Ltd :
          </span>{" "}
          SEBI Registration No. of MCX : INZ000024138
        </p>
        <p>
          <span className="text-secondary font-semibold">
            Investor Grievance ID:
          </span>{" "}
          investorgrievance@ratnakarsecurities.com
        </p>
        <p className="text-muted">
          Online Dispute Resolution Portal - SMART ODR
        </p>
      </div>

      <div className="space-y-1 pt-2 border-t border-gray-200">
        <p>
          To File A Complaint on SCORES{" "}
          <Link
            href="/scores-complaint"
            className="text-secondary hover:underline"
          >
            Click Here
          </Link>
        </p>
        <p>
          For Nomination, Please{" "}
          <Link
            href="/nomination"
            className="text-secondary hover:underline"
          >
            Click Here
          </Link>
        </p>
        <p>
          To Close Account, Please{" "}
          <Link
            href="/close-account"
            className="text-secondary hover:underline"
          >
            Click Here
          </Link>
        </p>
      </div>
    </div>
  </div>

  {/* Bottom Row: Horizontal Links Policy Strip */}
  <div className="mt-8 pt-4 border-t border-gray-200 flex flex-wrap justify-center md:justify-start gap-x-2 gap-y-1 text-sm md:text-base text-muted">
    <Link href="/privacy" className="hover:underline hover:text-secondary">
      Privacy Policy
    </Link>
    <span>|</span>
    <Link href="/disclaimer" className="hover:underline hover:text-secondary">
      Disclaimer
    </Link>
    <span>|</span>
    <Link href="/terms" className="hover:underline hover:text-secondary">
      Terms of Conditions
    </Link>
    <span>|</span>
    <Link href="/complaint" className="hover:underline hover:text-secondary">
      Investor Complaint
    </Link>
    <span>|</span>
    <Link href="/refund" className="hover:underline hover:text-secondary">
      Refund & Cancellation
    </Link>
    <span>|</span>
    <Link href="/segregation" className="hover:underline hover:text-secondary">
      Segergation Monitoring Collateral
    </Link>
    <span>|</span>
    <Link href="/evoting" className="hover:underline hover:text-secondary">
      NSDL E Voting
    </Link>
    <span>|</span>
    <Link href="/ideas" className="hover:underline hover:text-secondary">
      NSDL IDEAS Services
    </Link>
  </div>
</Container>
      </div>

      <div className="w-full bg-dark-navy py-4  text-base text-muted">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© 2026 Ratnakar Securities Limited. All rights reserved.</p>
            <p>
              Developed and maintained by{" "}
              <a
                href="https://anaxistech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline "
              >
                Anaxistech
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
