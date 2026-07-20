"use client";

import { useState } from "react";
import { ChevronRight, Download as DownloadIcon, FileText } from "lucide-react";
import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";

const DOWNLOADS_DATA = {
  downloads: {
    title: "Downloads",
    categories: [
      {
        name: "CKYC",
        items: [
          { title: "RATNAKAR - CKYC FORM", pdf: "/files/ckyc-form.pdf" },
          { title: "Non Individual CKYC Form", pdf: "/files/non-individual-ckyc.pdf" },
          { title: "CKYC - INDIVIDUAL", pdf: "/files/ckyc-individual.pdf" },
          { title: "FATCA Declaration", pdf: "/files/fatca-declaration.pdf" },
        ],
      },
      {
        name: "DEMAT",
        items: [
          { title: "Demat Account Opening Form", pdf: "/files/demat-form.pdf" },
          { title: "Demat - Important Guidelines", pdf: "/files/demat-guidelines.pdf" },
        ],
      },
      {
        name: "KYC AMENDMENT",
        items: [
          { title: "KYC Amendment Form", pdf: "/files/kyc-amendment.pdf" },
        ],
      },
    ],
  },
  documents: {
    title: "Documents",
    categories: [
      {
        name: "CKYC",
        items: [
          { title: "CKYC Documentation", pdf: "/files/ckyc-docs.pdf" },
        ],
      },
      {
        name: "DEMAT",
        items: [
          { title: "DEMAT Documentation", pdf: "/files/demat-docs.pdf" },
        ],
      },
      {
        name: "EXCHANGE-SURVEILLANCE-SCRIPS",
        items: [
          { title: "Exchange Surveillance Scrips", pdf: "/files/exchange-scrips.pdf" },
        ],
      },
      {
        name: "KRA",
        items: [
          { title: "KRA Documentation", pdf: "/files/kra-docs.pdf" },
        ],
      },
      {
        name: "MARGIN",
        items: [
          { title: "Margin Policy", pdf: "/files/margin-policy.pdf" },
        ],
      },
      {
        name: "MUTUAL-FUND",
        items: [
          { title: "Mutual Fund Documentation", pdf: "/files/mutual-fund-docs.pdf" },
        ],
      },
      {
        name: "ODIN-UPDATE",
        items: [
          { title: "ODIN Update Guide", pdf: "/files/odin-update.pdf" },
        ],
      },
      {
        name: "POLICIES",
        items: [
          { title: "Company Policies", pdf: "/files/policies.pdf" },
        ],
      },
      {
        name: "RATNAKAR-COMMODITIES-KYC-DOCS",
        items: [
          { title: "Commodities KYC Documents", pdf: "/files/commodities-kyc.pdf" },
        ],
      },
      {
        name: "TRADING",
        items: [
          { title: "Trading Documentation", pdf: "/files/trading-docs.pdf" },
        ],
      },
    ],
  },
  "new-update": {
    title: "New Update",
    categories: [
      {
        name: "New Update",
        items: [
          { title: "New Update", pdf: "/files/new-update.pdf" },
          { title: "Handling of Clients' Securities", pdf: "/files/clients-securities.pdf" },
          { title: "Reliance - Rights Issues - Basic Details & FAQs", pdf: "/files/reliance-rights.pdf" },
          { title: "Cash Segment Margin Pledge", pdf: "/files/cash-margin.pdf" },
        ],
      },
    ],
  },
  "trading-demat": {
    title: "Trading & Demat",
    categories: [
      {
        name: "Online Trading",
        items: [
          { title: "Online Trading", pdf: "/files/online-trading.pdf" },
          { title: "Online Trading - Funds Transfer - Bank Details", pdf: "/files/trading-funds.pdf" },
        ],
      },
      {
        name: "Margin",
        items: [
          { title: "Margin Trading Guide", pdf: "/files/margin-trading.pdf" },
        ],
      },
    ],
  },
};

const TABS = [
  { id: "downloads", label: "Downloads", icon: "📥" },
  { id: "documents", label: "Documents", icon: "📄" },
  { id: "new-update", label: "New Update", icon: "🆕" },
  { id: "trading-demat", label: "Trading & Demat", icon: "📊" },
];

export default function DownloadsPage() {
  const [activeTab, setActiveTab] = useState("downloads");
  const [expandedCategories, setExpandedCategories] = useState({});

  const currentData = DOWNLOADS_DATA[activeTab];

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <main className="w-full">
      {/* Hero Banner */}
      <HeroSection 
        title="Downloads"
        breadcrumbs={[
          { label: "Downloads" }
        ]}
        image="/images/about/AboutUs-Ratnakarsec.png"
        height="h-[300px] md:h-[400px]"
      />

      {/* Section Header */}
      <section className="py-12 bg-[#f7f9fc]">
        <Container>
          <div className="mb-12 text-center">
            <div className="text-[14px] font-black tracking-widest uppercase mb-3" style={{ color: "rgb(234, 40, 48)" }}>
              Resources & Support
            </div>
            <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-black leading-tight mb-4">
              {currentData.title}
            </h2>
            <p className="text-[16px] text-gray-700 max-w-3xl mx-auto font-medium">
              Access all our important documents, forms, and resources for your convenience.
            </p>
          </div>
        </Container>
      </section>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-40">
        <Container>
          <div className="flex gap-0 overflow-x-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setExpandedCategories({});
                }}
                className={`px-6 py-4 font-medium text-base border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-red-600 text-red-600 bg-red-50"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <div className="bg-white py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-4 sticky top-[200px]">
                {currentData.categories.map((category) => (
                  <div key={category.name} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="w-full flex items-center justify-between py-3 px-2 text-left font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded transition-colors duration-200"
                    >
                      <span className="text-sm">{category.name}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-300 ${
                          expandedCategories[category.name] ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    
                    {/* Expandable Items */}
                    {expandedCategories[category.name] && (
                      <div className="bg-white border-l-2 border-red-600">
                        {category.items.map((item) => (
                          <a
                            key={item.title}
                            href={item.pdf}
                            download
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors duration-200 block"
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid View - All documents */}
            <div className="lg:col-span-4">
              <div className="space-y-8">
                {currentData.categories.map((category) => (
                  <div key={category.name}>
                    <h3 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3 mb-6">
                      {category.name}
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                      {category.items.map((file) => (
                        <a
                          key={file.title}
                          href={file.pdf}
                          download
                          className="group p-6 border border-gray-200 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#EA2830]/10 hover:border-[#EA2830]/30 flex flex-col items-center text-center h-full"
                        >
                          <div className="w-14 h-14 bg-[#EA2830] rounded-full flex items-center justify-center text-white mb-5 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                            <FileText size={24} />
                          </div>
                          
                          <h4 className="text-[16px] font-sans font-medium text-gray-900 mb-6 line-clamp-3 leading-snug group-hover:text-[#EA2830] transition-colors duration-300">
                            {file.title}
                          </h4>
                          
                          <div className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 text-gray-600 text-sm font-semibold group-hover:bg-[#EA2830] group-hover:text-white transition-colors duration-300">
                            <DownloadIcon size={16} className="stroke-[2.5]" />
                            <span>Download</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
