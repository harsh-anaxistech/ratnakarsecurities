"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/common/Container";
import HeroSection from "@/components/common/HeroSection";
import { generatePageMetadata } from "@/constants/metadata";
import { 
  Eye, 
  Shield, 
  Award, 
  Briefcase, 
  FileText, 
  Settings, 
  Users, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle, 
  X, 
  ChevronRight, 
  TrendingUp, 
  ExternalLink,
  BookOpen
} from "lucide-react";

// Modal Component helper
function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      // Save active element that triggered the modal
      triggerRef.current = document.activeElement;

      const modalElement = modalRef.current;
      if (!modalElement) return;

      // Find all focusable elements
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        // Focus first element on mount
        focusableElements[0].focus();

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e) => {
          if (e.key !== "Tab") return;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        };

        window.addEventListener("keydown", handleTabKey);
        return () => window.removeEventListener("keydown", handleTabKey);
      }
    } else {
      // Restore focus to trigger on close
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-labelledby="modal-title"
        className="relative w-full max-w-[800px] bg-white rounded-[22px] shadow-2xl overflow-hidden border border-slate-100 transition-all duration-300 transform scale-100 my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Section */}
        <div className="relative pt-6 px-6 pb-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-gradient-to-r from-[#011628] to-[#1a6eb5]">
          <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-white tracking-wide pr-6">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors cursor-pointer bg-white/10 hover:bg-white/20 p-2.5 rounded-full flex items-center justify-center shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 overflow-y-auto text-slate-700 text-[15px] leading-relaxed flex-1">
          {children}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-[#011628] to-[#1a6eb5] hover:opacity-95 text-white font-medium text-sm rounded-xl shadow-sm transition-all"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}

export default function InvestorCharterPage() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="bg-[#f7f9fc] min-h-screen pb-16">
      {/* Banner Section */}
      <HeroSection
        title="Investor Charter"
        breadcrumbs={[{ label: "Investor Charter" }]}
        image="/images/about/our product 1.jpg"
        mobileImage="/images/about/mobile banner/investor mobile.jpg"
        height="h-[300px] md:h-[400px]"
      />

      <Container className="mt-12">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* 1. Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 sm:p-10 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#1a6eb5]" />
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#1a6eb5]/10 flex items-center justify-center text-[#1a6eb5] shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-[#011628] font-bold mb-4">Vision</h2>
                  <p className="text-[16px] text-slate-600 leading-relaxed font-medium">
                    Towards making Indian Securities Market - Transparent, Efficient, & Investor friendly by providing safe, reliable, transparent and trusted record keeping platform for investors to hold and transfer securities in dematerialized form.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 sm:p-10 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#ea2830]" />
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#ea2830]/10 flex items-center justify-center text-[#ea2830] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif text-[#011628] font-bold mb-4">Mission</h2>
                  <ul className="space-y-3.5 text-[15px] text-slate-600 leading-relaxed font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea2830] shrink-0 mt-2" />
                      <span>To hold securities of investors in dematerialised form and facilitate its transfer, while ensuring safekeeping of securities and protecting interest of investors.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea2830] shrink-0 mt-2" />
                      <span>To provide timely and accurate information to investors with regard to their holding and transfer of securities held by them.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea2830] shrink-0 mt-2" />
                      <span>To provide the highest standards of investor education, investor awareness and timely services so as to enhance Investor Protection and create awareness about Investor Rights.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Details of Business */}
          <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 sm:p-10 relative overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#011628] to-[#00aeee]" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <h2 className="text-xl font-bold text-[#011628] flex items-center gap-2.5">
                  <Briefcase className="w-5 h-5 text-[#1a6eb5]" />
                  Details of Business Transacted by Depository and DP
                </h2>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                  A Depository is an organization which holds securities of investors in electronic form. Depositories provide services to various market participants - Exchanges, Clearing Corporations, Depository Participants (DPs), Issuers and Investors in both primary as well as secondary markets. The depository carries out its activities through its agents which are known as Depository Participants (DP).
                </p>
              </div>
              <a
                href="https://nsdl.co.in/dpsch.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 cursor-pointer transition-all duration-200 select-none h-11 bg-[#1a6eb5] hover:bg-[#011628] text-white text-sm font-bold rounded-xl px-5 py-2 shrink-0 shadow-sm"
              >
                <span>View Details on NSDL</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4. Services Provided by Depository */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#011628] font-bold border-b border-slate-200 pb-3">
              Description of Services Provided by the Depository
            </h2>

            {/* (1) Basic Services */}
            <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-slate-100">
                <h3 className="text-lg font-bold text-[#011628] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1a6eb5]" />
                  (1) Basic Services
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#011628] text-white font-bold">
                      <th scope="col" className="p-4 w-20 text-center border-r border-slate-700/30">Sr. No.</th>
                      <th scope="col" className="p-4 border-r border-slate-700/30">Brief about the Activity / Service</th>
                      <th scope="col" className="p-4">Expected Timelines for processing by DP after receipt of proper docs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 [&>tr:nth-child(even)]:bg-slate-50/50 font-medium">
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">1</td>
                      <td className="p-4 border-r border-slate-100">Dematerialization of securities</td>
                      <td className="p-4 text-[#1a6eb5] font-semibold">7 days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">2</td>
                      <td className="p-4 border-r border-slate-100">Rematerialization of securities</td>
                      <td className="p-4 text-[#1a6eb5] font-semibold">7 days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">3</td>
                      <td className="p-4 border-r border-slate-100">Mutual Fund Conversion / Destatementization</td>
                      <td className="p-4 text-[#1a6eb5] font-semibold">5 days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">4</td>
                      <td className="p-4 border-r border-slate-100">Re-conversion / Restatementisation of Mutual fund units</td>
                      <td className="p-4 text-[#1a6eb5] font-semibold">7 days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">5</td>
                      <td className="p-4 border-r border-slate-100">Transmission of securities</td>
                      <td className="p-4 text-[#1a6eb5] font-semibold">7 days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">6</td>
                      <td className="p-4 border-r border-slate-100">Registering pledge request</td>
                      <td className="p-4 text-[#1a6eb5] font-semibold">15 days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">7</td>
                      <td className="p-4 border-r border-slate-100">Closure of demat account</td>
                      <td className="p-4 text-[#1a6eb5] font-semibold">30 days</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">8</td>
                      <td className="p-4 border-r border-slate-100">Settlement Instruction</td>
                      <td className="p-4 text-slate-600">
                        Depositories to accept physical DIS for pay-in of securities upto <strong className="text-[#ea2830]">4 p.m.</strong> and DIS in electronic form upto <strong className="text-[#ea2830]">6 p.m.</strong> on T+1 day
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* (2) Special Services */}
            <div className="bg-white rounded-3xl border border-black/5 shadow-sm overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-slate-100">
                <h3 className="text-lg font-bold text-[#011628] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00aeee]" />
                  (2) Special Services (Pledge, Hypothecation, Internet services, etc.)
                </h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#011628] text-white font-bold">
                      <th scope="col" className="p-4 w-20 text-center border-r border-slate-700/30">Sr. No.</th>
                      <th scope="col" className="p-4 w-1/4 border-r border-slate-700/30">Type of Activity / Service</th>
                      <th scope="col" className="p-4">Brief about the Activity / Service</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">1</td>
                      <td className="p-4 border-r border-slate-100 font-bold text-[#011628]">Value Added Services</td>
                      <td className="p-4 space-y-2">
                        <p>Depositories also provide value added services such as:</p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <button 
                            onClick={() => setActiveModal("BSDA")}
                            aria-haspopup="dialog"
                            className="px-3.5 py-1.5 bg-[#1a6eb5]/5 hover:bg-[#1a6eb5]/10 text-[#1a6eb5] rounded-lg text-xs font-bold transition-all border border-[#1a6eb5]/10 cursor-pointer"
                          >
                            a. Basic Services Demat Account (BSDA)
                          </button>
                          <button 
                            onClick={() => setActiveModal("TCD")}
                            aria-haspopup="dialog"
                            className="px-3.5 py-1.5 bg-[#1a6eb5]/5 hover:bg-[#1a6eb5]/10 text-[#1a6eb5] rounded-lg text-xs font-bold transition-all border border-[#1a6eb5]/10 cursor-pointer"
                          >
                            b. Transposition cum Dematerialization
                          </button>
                          <button 
                            onClick={() => setActiveModal("LWCS")}
                            aria-haspopup="dialog"
                            className="px-3.5 py-1.5 bg-[#1a6eb5]/5 hover:bg-[#1a6eb5]/10 text-[#1a6eb5] rounded-lg text-xs font-bold transition-all border border-[#1a6eb5]/10 cursor-pointer"
                          >
                            c. Linkages with Clearing System
                          </button>
                          <span className="px-3.5 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold border border-slate-200 select-none">
                            d. Distribution of Cash & Non-Cash Corporate Benefits
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">2</td>
                      <td className="p-4 border-r border-slate-100 font-bold text-[#011628]">Consolidated Account Statement (CAS)</td>
                      <td className="p-4">
                        CAS is issued 10 days from the end of the month (if there were transactions in the previous month) or half yearly (if no transactions).
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-center border-r border-slate-100">3</td>
                      <td className="p-4 border-r border-slate-100 font-bold text-[#011628]">Digitalization of Services</td>
                      <td className="p-4 space-y-2">
                        <p>Depositories offer below technology solutions and e-facilities to their demat account holders through DPs:</p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          <button 
                            onClick={() => setActiveModal("EO")}
                            aria-haspopup="dialog"
                            className="px-3 py-1.5 bg-[#00aeee]/10 hover:bg-[#00aeee]/20 text-[#0088c2] rounded-lg text-xs font-bold transition-all border border-[#00aeee]/20 cursor-pointer"
                          >
                            a. E-account opening
                          </button>
                          <button 
                            onClick={() => setActiveModal("OIFE")}
                            aria-haspopup="dialog"
                            className="px-3 py-1.5 bg-[#00aeee]/10 hover:bg-[#00aeee]/20 text-[#0088c2] rounded-lg text-xs font-bold transition-all border border-[#00aeee]/20 cursor-pointer"
                          >
                            b. Online instructions for execution
                          </button>
                          <button 
                            onClick={() => setActiveModal("DG")}
                            aria-haspopup="dialog"
                            className="px-3 py-1.5 bg-[#00aeee]/10 hover:bg-[#00aeee]/20 text-[#0088c2] rounded-lg text-xs font-bold transition-all border border-[#00aeee]/20 cursor-pointer"
                          >
                            c. e-DIS / Demat Gateway
                          </button>
                          <button 
                            onClick={() => setActiveModal("ECAS")}
                            aria-haspopup="dialog"
                            className="px-3 py-1.5 bg-[#00aeee]/10 hover:bg-[#00aeee]/20 text-[#0088c2] rounded-lg text-xs font-bold transition-all border border-[#00aeee]/20 cursor-pointer"
                          >
                            d. e-CAS facility
                          </button>
                          <button 
                            onClick={() => setActiveModal("MS")}
                            aria-haspopup="dialog"
                            className="px-3 py-1.5 bg-[#00aeee]/10 hover:bg-[#00aeee]/20 text-[#0088c2] rounded-lg text-xs font-bold transition-all border border-[#00aeee]/20 cursor-pointer"
                          >
                            e. Miscellaneous services
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 5. Grievance Redressal Mechanism */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#011628] font-bold border-b border-slate-200 pb-3">
              5. Details of Grievance Redressal Mechanism
            </h2>

            <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#011628] flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#ea2830]" />
                (1) The Process of Investor Grievance Redressal
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Method 1 */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
                  <span className="w-8 h-8 rounded-lg bg-[#1a6eb5]/10 text-[#1a6eb5] flex items-center justify-center font-bold text-sm">1</span>
                  <h4 className="font-bold text-slate-800">Lodge Complaint / Grievance</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    Investors can lodge grievances against the Depository / DP in three ways:
                  </p>
                  <ul className="text-xs text-slate-600 space-y-2 leading-relaxed font-semibold">
                    <li>
                      <strong className="text-slate-800">SCORES:</strong> Centralized SEBI system
                      <a href="https://www.scores.gov.in/scores/Welcome.html" target="_blank" rel="noopener noreferrer" className="block text-[#1a6eb5] hover:underline font-bold mt-0.5 truncate flex items-center gap-0.5">
                        scores.gov.in <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <strong className="text-slate-800">Depository Portal:</strong> NSDL portal
                      <a href="https://www.epass.nsdl.com/complaints/websitecomplaints.aspx" target="_blank" rel="noopener noreferrer" className="block text-[#1a6eb5] hover:underline font-bold mt-0.5 truncate flex items-center gap-0.5">
                        epass.nsdl.com <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <strong className="text-slate-800">Direct Email:</strong>
                      <a href="mailto:relations@nsdl.co.in" className="block text-[#1a6eb5] hover:underline font-bold mt-0.5">
                        relations@nsdl.co.in
                      </a>
                    </li>
                  </ul>
                  <div className="pt-2 border-t border-slate-200/50 mt-1">
                    <p className="text-[11px] font-bold text-[#ea2830]">
                      * Direct complaints with the Depository resolved within 30 days.
                    </p>
                  </div>
                </div>

                {/* Method 2 */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
                  <span className="w-8 h-8 rounded-lg bg-[#1a6eb5]/10 text-[#1a6eb5] flex items-center justify-center font-bold text-sm">2</span>
                  <h4 className="font-bold text-slate-800">Grievance Redressal Committee (GRC)</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    If no amicable resolution is reached:
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The investor has the option to refer the grievance to the Grievance Redressal Committee (GRC) of the Depository.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The GRC resolves the issue by hearing the parties and examining all relevant documents and information.
                  </p>
                </div>

                {/* Method 3 */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="w-8 h-8 rounded-lg bg-[#1a6eb5]/10 text-[#1a6eb5] flex items-center justify-center font-bold text-sm">3</span>
                    <h4 className="font-bold text-slate-800">Arbitration Proceedings</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                      For unresolved disputes:
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Investors can avail the arbitration mechanism set in Byelaws & Business Rules.
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Arbitration reference is concluded by way of arbitral award within <strong className="text-slate-800">4 months</strong> of arbitrator appointment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Multi-level complaint resolution trigger */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#1a6eb5]/5 rounded-2xl border border-[#1a6eb5]/10 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1a6eb5]/15 text-[#1a6eb5] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">(2) Multi-Level Complaint Resolution Mechanism</h4>
                    <p className="text-xs text-slate-500 font-semibold">View NSDL&apos;s structured process flow diagram.</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal("MLCMPL")}
                  aria-haspopup="dialog"
                  className="px-4 py-2 bg-[#1a6eb5] hover:bg-[#011628] text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  View Flowchart Diagram
                </button>
              </div>
            </div>
          </div>

          {/* 6. Guidance on DP Termination */}
          <div className="bg-white rounded-3xl border border-black/5 shadow-sm p-8 sm:p-10 relative overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1a6eb5]" />
            <h2 className="text-xl font-bold text-[#011628] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#1a6eb5]" />
              6. Termination of Depository Participant (DP) Guidelines
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Special Circumstances</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 font-medium">
                  <li>Depositories terminate DP participation if they fail to meet eligibility criteria or grounds specified in bye-laws (e.g. suspension of trading member by stock exchanges).</li>
                  <li>Participant surrenders DP participation by its own wish.</li>
                </ul>
              </div>
              <div className="bg-[#f0f7ff] border border-[#d6e8ff] rounded-2xl p-5 space-y-2">
                <h3 className="font-bold text-[#0052cc] text-sm uppercase tracking-wide flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  Investor Protections
                </h3>
                <p className="text-xs text-[#3b608c] leading-relaxed font-semibold">
                  Clients have the right to transfer all securities to another DP of choice <strong className="text-[#0052cc]">WITHOUT ANY CHARGES</strong> within <strong className="text-[#0052cc]">30 days</strong> from the date of intimation by letter/email.
                </p>
              </div>
            </div>
          </div>

          {/* 7, 8, 9. Grid of action portals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dos and Don'ts Card */}
            <button
              onClick={() => setActiveModal("DoDOntsInvstr")}
              aria-haspopup="dialog"
              className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 flex flex-col text-left group hover:border-[#1a6eb5]/30 hover:shadow-md transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#011628] mb-2 flex items-center justify-between w-full">
                <span>Dos & Don’ts for Investors</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a6eb5] group-hover:translate-x-1 transition-all" />
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Detailed guidance on protecting accounts, DIS slip books, OTP verification, password updates, and regulatory practices.
              </p>
            </button>

            {/* Rights of Investors Card */}
            <button
              onClick={() => setActiveModal("RghtsInvstr")}
              aria-haspopup="dialog"
              className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 flex flex-col text-left group hover:border-[#1a6eb5]/30 hover:shadow-md transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#011628] mb-2 flex items-center justify-between w-full">
                <span>Rights of Investors</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a6eb5] group-hover:translate-x-1 transition-all" />
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Information on zero account opening fees, no minimum balance requirement, POA details, statement checks, and freeze facilities.
              </p>
            </button>

            {/* Responsibilities of Investors Card */}
            <button
              onClick={() => setActiveModal("RspnbltisInvstr")}
              aria-haspopup="dialog"
              className="bg-white rounded-3xl border border-black/5 shadow-sm p-6 flex flex-col text-left group hover:border-[#1a6eb5]/30 hover:shadow-md transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0 mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#011628] mb-2 flex items-center justify-between w-full">
                <span>Responsibilities of Investors</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1a6eb5] group-hover:translate-x-1 transition-all" />
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Mandatory checks including KYC details, DIS book safekeeping, nominee appointments, and protection from financial fraud.
              </p>
            </button>
          </div>

        </div>
      </Container>

      {/* --- ALL POPUP MODALS IN REACT --- */}

      {/* 1. BSDA Modal */}
      <Modal
        isOpen={activeModal === "BSDA"}
        onClose={() => setActiveModal(null)}
        title="Basic Services Demat Account (BSDA)"
      >
        <div className="space-y-4 font-medium">
          <p>
            The facility of BSDA with limited services for eligible individuals was introduced with the objective of achieving wider financial inclusion and to encourage holding of demat accounts.
          </p>
          <div className="overflow-x-auto border border-slate-100 rounded-xl my-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 font-bold border-b border-slate-100">
                  <th scope="col" className="p-3 border-r border-slate-100">Holding Category</th>
                  <th scope="col" className="p-3 border-r border-slate-100">Value of Securities</th>
                  <th scope="col" className="p-3">Annual Maintenance Charges (AMC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 border-r border-slate-100">Regular Holdings</td>
                  <td className="p-3 border-r border-slate-100">Upto Rs. 50,000</td>
                  <td className="p-3 text-[#1a6eb5] font-semibold">No AMC Chargeable</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-slate-100">Regular Holdings</td>
                  <td className="p-3 border-r border-slate-100">Rs. 50,001 to Rs. 2,00,000</td>
                  <td className="p-3 font-semibold">Max Rs. 100 chargeable</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-slate-100">Debt Securities</td>
                  <td className="p-3 border-r border-slate-100">Upto Rs. 1,00,000</td>
                  <td className="p-3 text-[#1a6eb5] font-semibold">No AMC Chargeable</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-slate-100">Debt Securities</td>
                  <td className="p-3 border-r border-slate-100">Rs. 1,00,001 to Rs. 2,00,000</td>
                  <td className="p-3 font-semibold">Max Rs. 100 chargeable</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            * Note: Valuation of holdings will be determined by the depositories daily on the basis of the closing price or NAV of the securities.
          </p>
        </div>
      </Modal>

      {/* 2. TCD Modal */}
      <Modal
        isOpen={activeModal === "TCD"}
        onClose={() => setActiveModal(null)}
        title="Transposition cum Dematerialization"
      >
        <p className="font-medium">
          In case of transposition-cum-dematerialisation, client can get securities dematerialised in the same account if the names appearing on the certificates match with the names in which the account has been opened but are in a different order. The same may be done by submitting the security certificates along with the Transposition Form and Demat Request Form.
        </p>
      </Modal>

      {/* 3. LWCS Modal */}
      <Modal
        isOpen={activeModal === "LWCS"}
        onClose={() => setActiveModal(null)}
        title="Linkages with Clearing System"
      >
        <p className="font-medium">
          Linkage with Clearing System provides actual delivery of securities to the clearing system from the selling brokers and delivery of securities from the clearing system to the buying broker.
        </p>
      </Modal>

      {/* 4. EO Modal */}
      <Modal
        isOpen={activeModal === "EO"}
        onClose={() => setActiveModal(null)}
        title="E-Account Opening"
      >
        <p className="font-medium">
          Account opening through digital mode, popularly known as “On-line Account opening”, wherein investor intending to open the demat account can visit DP website, fill in the required information, submit the required documents, conduct video IPV and demat account gets opened without visiting DPs office.
        </p>
      </Modal>

      {/* 5. OIFE Modal */}
      <Modal
        isOpen={activeModal === "OIFE"}
        onClose={() => setActiveModal(null)}
        title="Online Instructions for Execution"
      >
        <p className="font-medium">
          This system allows demat account holders to submit execution instructions electronically. Instead of submitting physical slip sheets, users log in through secure e-facilities provided by depositories (e.g., NSDL Speed-e/CDSL easiest) to submit and authorize transfer instructions, eliminating manual processing errors.
        </p>
      </Modal>

      {/* 6. DG Modal */}
      <Modal
        isOpen={activeModal === "DG"}
        onClose={() => setActiveModal(null)}
        title="e-DIS / Demat Gateway"
      >
        <p className="font-medium">
          Investors can give instructions for transfer of securities through e-DIS apart from physical DIS. Here, for on-market transfer of securities, investors need to provide settlement number along with the ISIN and quantity of securities being authorized for transfer. Client shall be required to authorize each e-DIS valid for a single settlement number / settlement date, by way of OTP and PIN/password, both generated at Depositories end. Necessary risk containment measures are being adopted by Depositories in this regard.
        </p>
      </Modal>

      {/* 7. ECAS Modal */}
      <Modal
        isOpen={activeModal === "ECAS"}
        onClose={() => setActiveModal(null)}
        title="e-CAS facility"
      >
        <p className="font-medium">
          Consolidated Account Statements are available online and could also be accessed through mobile app to facilitate the investors to view their holdings in demat form.
        </p>
      </Modal>

      {/* 8. MS Modal */}
      <Modal
        isOpen={activeModal === "MS"}
        onClose={() => setActiveModal(null)}
        title="Miscellaneous Services"
      >
        <p className="font-medium">
          Transaction alerts through SMS, e-locker facilities, chatbots for instantaneously responding to investor queries etc. have also been developed to provide enhanced customer support.
        </p>
      </Modal>

      {/* 9. Complaint Resolution Flowchart Modal */}
      <Modal
        isOpen={activeModal === "MLCMPL"}
        onClose={() => setActiveModal(null)}
        title="Complaint Resolution Process at Depositories"
      >
        <div className="space-y-6">
          <p className="font-bold text-slate-800 mb-2">Multi-Level Complaint Resolution Pathway:</p>
          
          <div className="relative pl-8 border-l-2 border-slate-200 ml-4 space-y-8 font-medium">
            
            {/* Step 1 */}
            <div className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-12 top-0.5 w-8 h-8 rounded-full bg-[#1a6eb5] text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-xs">
                1
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2">
                <h5 className="font-bold text-slate-900 flex justify-between items-center flex-wrap gap-2 text-sm sm:text-base">
                  <span>Lodge Complaint / Grievance</span>
                  <span className="text-xs bg-[#1a6eb5]/10 text-[#1a6eb5] px-2.5 py-0.5 rounded-full font-bold">Timeline: 30 Days</span>
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lodge complaints directly with the DP or Depository via SCORES portal, Depository complaints form, or email (<a href="mailto:relations@nsdl.co.in" className="text-[#1a6eb5] underline">relations@nsdl.co.in</a>). The depository acts immediately to coordinate resolution within 30 days.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-12 top-0.5 w-8 h-8 rounded-full bg-[#00aeee] text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-xs">
                2
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2">
                <h5 className="font-bold text-slate-900 flex justify-between items-center flex-wrap gap-2 text-sm sm:text-base">
                  <span>Depository Grievance Redressal Committee (GRC)</span>
                  <span className="text-xs bg-[#00aeee]/10 text-[#0088c2] px-2.5 py-0.5 rounded-full font-bold">Review Stage</span>
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If direct resolution fails, refer the complaint to the Depository&apos;s Grievance Redressal Committee (GRC). GRC conducts an independent review by hearing both parties and analyzing documentation.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              {/* Timeline marker */}
              <div className="absolute -left-12 top-0.5 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-xs">
                3
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2">
                <h5 className="font-bold text-slate-900 flex justify-between items-center flex-wrap gap-2 text-sm sm:text-base">
                  <span>Arbitration Proceedings</span>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-full font-bold">Timeline: 4 Months</span>
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If the investor is unsatisfied with the GRC award, the dispute can be referred to formal arbitration under Depository Byelaws. The process is concluded and arbitral award issued within 4 months from appointing the arbitrator(s).
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </Modal>

      {/* 10. Dos and Don'ts Modal */}
      <Modal
        isOpen={activeModal === "DoDOntsInvstr"}
        onClose={() => setActiveModal(null)}
        title="Dos and Don’ts for Investors"
      >
        <div className="space-y-4">
          <div className="overflow-x-auto border border-slate-100 rounded-xl font-medium">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 font-bold border-b border-slate-100">
                  <th scope="col" className="p-3 w-16 text-center border-r border-slate-100">SI No.</th>
                  <th scope="col" className="p-3 w-20 text-center border-r border-slate-100">Type</th>
                  <th scope="col" className="p-3">Guidance / Instruction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* 1 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">1</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Always deal with a SEBI registered Depository Participant for opening a demat account.</td>
                </tr>
                {/* 2 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">2</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Read all the documents carefully before signing them.</td>
                </tr>
                {/* 3 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">3</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Before granting Power of attorney to operate your demat account to an intermediary like Stock Broker, Portfolio Management Services (PMS) etc., carefully examine the scope and implications of powers being granted.</td>
                </tr>
                {/* 4 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">4</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Always make payments to registered intermediary using banking channels. No payment should be made in name of employee of intermediary.</td>
                </tr>
                {/* 5 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">5</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">
                    Accept the Delivery Instruction Slip (DIS) book from your DP only (pre-printed with a serial number along with your Client ID) and keep it in safe custody and do not sign or issue blank or partially filled DIS slips.<br className="mb-2"/>
                    Always mention the details like ISIN, number of securities accurately. In case of any queries, please contact your DP or broker and it should be signed by all demat account holders.<br className="mb-2"/>
                    Strike out any blank space on the slip and Cancellations or corrections on the DIS should be initialed or signed by all the account holder(s).<br className="mb-2"/>
                    Do not leave your instruction slip book with anyone else.<br className="mb-2"/>
                    Do not sign blank DIS as it is equivalent to a bearer cheque.
                  </td>
                </tr>
                {/* 6 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">6</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Inform any change in your Personal Information (for example address or Bank Account details, email ID, Mobile number) linked to your demat account in the prescribed format and obtain confirmation of updation in system.</td>
                </tr>
                {/* 7 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">7</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Mention your Mobile Number and email ID in account opening form to receive SMS alerts and regular updates directly from depository.</td>
                </tr>
                {/* 8 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">8</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Always ensure that the mobile number and email ID linked to your demat account are the same as provided at the time of account opening/updation.</td>
                </tr>
                {/* 9 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">9</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DON&apos;T</span></td>
                  <td className="p-3 text-red-600 font-semibold">Do not share password of your online trading and demat account with anyone.</td>
                </tr>
                {/* 10 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">10</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DON&apos;T</span></td>
                  <td className="p-3 text-red-600 font-semibold">Do not share One Time Password (OTP) received from banks, brokers, etc. These are meant to be used by you only.</td>
                </tr>
                {/* 11 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">11</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DON&apos;T</span></td>
                  <td className="p-3 text-red-600 font-semibold">Do not share login credentials of e-facilities provided by the depositories such as e-DIS/demat gateway, SPEED-e/easiest etc. with anyone else.</td>
                </tr>
                {/* 12 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">12</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">INFO</span></td>
                  <td className="p-3">Demat is mandatory for any transfer of securities of Listed public limited companies with few exceptions.</td>
                </tr>
                {/* 13 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">13</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-[#1a6eb5]/10 border border-[#1a6eb5]/20 text-[#1a6eb5] text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">INFO</span></td>
                  <td className="p-3">If you have any grievance in respect of your demat account, please write to designated email IDs of depositories or you may lodge the same with SEBI online at https://scores.gov.in/scores/Welcome.html</td>
                </tr>
                {/* 14 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">14</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Keep a record of documents signed, DIS issued and account statements received.</td>
                </tr>
                {/* 15 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">15</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">As Investors you are required to verify the transaction statement carefully for all debits and credits in your account. In case of any unauthorized debit or credit, inform the DP or your respective Depository.</td>
                </tr>
                {/* 16 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">16</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Appoint a nominee to facilitate your heirs in obtaining the securities in your demat account, on completion of the necessary procedures.</td>
                </tr>
                {/* 17 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">17</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Register for Depository&apos;s internet based facility or download mobile app of the depository to monitor your holdings.</td>
                </tr>
                {/* 18 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">18</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DO</span></td>
                  <td className="p-3">Ensure that, both, your holding and transaction statements are received periodically as instructed to your DP. You are entitled to receive a transaction statement every month if you have any transactions.</td>
                </tr>
                {/* 19 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">19</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DON&apos;T</span></td>
                  <td className="p-3 text-red-600 font-semibold">Do not follow herd mentality for investments. Seek expert and professional advice for your investments.</td>
                </tr>
                {/* 20 */}
                <tr>
                  <td className="p-3 text-center border-r border-slate-100">20</td>
                  <td className="p-3 text-center border-r border-slate-100"><span className="bg-red-50 border border-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">DON&apos;T</span></td>
                  <td className="p-3 text-red-600 font-semibold">Beware of assured/fixed returns.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal>

      {/* 11. Rights Modal */}
      <Modal
        isOpen={activeModal === "RghtsInvstr"}
        onClose={() => setActiveModal(null)}
        title="Rights of Investors"
      >
        <ul className="space-y-4 font-medium">
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>Receive a copy of KYC, copy of account opening documents.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>No minimum balance is required to be maintained in a demat account.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>No charges are payable for opening of demat accounts.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>If executed, receive a copy of Power of Attorney. However, Power of Attorney is not a mandatory requirement as per SEBI / Stock Exchanges. You have the right to revoke any authorization given at any time.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>You can open more than one demat account in the same name with single DP/ multiple DPs.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>Receive statement of accounts periodically. In case of any discrepancies in statements, take up the same with the DP immediately. If the DP does not respond, take up the matter with the Depositories.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>Pledge and /or any other interest or encumbrance can be created on demat holdings.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>Right to give standing instructions with regard to the crediting of securities in demat account.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>Investor can exercise its right to freeze/defreeze his/her demat account or specific securities / specific quantity of securities in the account, maintained with the DP.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>In case of any grievances, Investor has right to approach Participant or Depository or SEBI for getting the same resolved within prescribed timelines.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>Every eligible investor shareholder has a right to cast its vote on various resolutions proposed by the companies for which Depositories have developed an internet based ‘e-Voting’ platform.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-2" />
            <span>Receive information about charges and fees. Any charges/tariff agreed upon shall not increase unless a notice in writing of not less than thirty days is given to the Investor.</span>
          </li>
        </ul>
      </Modal>

      {/* 12. Responsibilities Modal */}
      <Modal
        isOpen={activeModal === "RspnbltisInvstr"}
        onClose={() => setActiveModal(null)}
        title="Responsibilities of Investors"
      >
        <ul className="space-y-4 font-medium">
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1a6eb5] shrink-0 mt-2" />
            <span>Deal with a SEBI registered DP for opening demat account, KYC and Depository activities.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1a6eb5] shrink-0 mt-2" />
            <span>Provide complete documents for account opening and KYC (Know Your Client). Fill all the required details in Account Opening Form / KYC form in own handwriting and cancel out the blanks.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1a6eb5] shrink-0 mt-2" />
            <span>Read all documents and conditions being agreed before signing the account opening form.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1a6eb5] shrink-0 mt-2" />
            <span>Accept the Delivery Instruction Slip (DIS) book from DP only (preprinted with a serial number along with client ID) and keep it in safe custody and do not sign or issue blank or partially filled DIS.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1a6eb5] shrink-0 mt-2" />
            <span>Always mention the details like ISIN, number of securities accurately.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1a6eb5] shrink-0 mt-2" />
            <span>Inform any change in information linked to demat account and obtain confirmation of updation in the system.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1a6eb5] shrink-0 mt-2" />
            <span>Regularly verify balances and demat statement and reconcile with trades / transactions.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1a6eb5] shrink-0 mt-2" />
            <span>Appoint nominee(s) to facilitate heirs in obtaining the securities in their demat account.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#1a6eb5] shrink-0 mt-2" />
            <span className="text-[#ea2830] font-semibold">Do not fall prey to fraudsters sending emails and SMSs luring to trade in stocks / securities promising huge profits.</span>
          </li>
        </ul>
      </Modal>

    </div>
  );
}
