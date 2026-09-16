import React from "react";
import Link from "next/link";
import Container from "@/components/common/Container";
import {
  ShieldCheck,
  Eye,
  Type,
  Pause,
  Volume2,
  Search,
  FileText,
  HelpCircle,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Sliders,
  Keyboard
} from "lucide-react";

export const metadata = {
  title: "Digital Accessibility Statement - Ratnakar Securities Limited",
  description: "Ratnakar Securities Limited is committed to digital accessibility in accordance with SEBI circulars, GIGW 3.0, WCAG 2.2 Level AA, and the RPwD Act 2016.",
};

/**
 * Digital Accessibility Statement Page Component
 * 
 * Formal compliance disclosure detailing adherence to:
 * - Guidelines for Indian Government Websites (GIGW 3.0).
 * - Web Content Accessibility Guidelines (WCAG 2.2 Level AA).
 * - Rights of Persons with Disabilities (RPwD) Act 2016.
 * - Assistive technologies support, keyboard navigation, color contrast standards, and accessibility feedback mechanism.
 */
export default function AccessibilityStatementPage() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] py-10 sm:py-16" style={{ backgroundColor: "#f7f9fc" }}>
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-700" style={{ color: "#334155" }}>
            <li>
              <Link href="/" className="hover:text-[#881337] transition-colors" style={{ color: "#334155" }}>Home</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5 text-slate-500" /></li>
            <li aria-current="page" className="text-slate-950 font-bold" style={{ color: "#020617" }}>Accessibility Statement</li>
          </ol>
        </nav>

        {/* Page Title Banner */}
        <header className="mb-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0f9ff] border border-[#bae6fd] text-[#004f7a] text-xs font-bold uppercase tracking-wider mb-4" style={{ backgroundColor: "#f0f9ff", color: "#004f7a" }}>
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Digital Inclusion Commitment</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#011628] mb-4 leading-tight" style={{ color: "#011628" }}>
            Digital Accessibility Statement
          </h1>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed" style={{ color: "#334155" }}>
            Ratnakar Securities Limited (RSL) is firmly committed to ensuring digital accessibility for all investors, including persons with disabilities, elderly individuals, and assistive technology users. We continually enhance the user experience across all digital channels in accordance with applicable regulatory standards.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left / Center Content (8 Cols) */}
          <main className="lg:col-span-8 space-y-10">

            {/* 1. Standards & Regulatory Conformance */}
            <section
              aria-labelledby="section-standards"
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h2 id="section-standards" className="text-2xl font-serif font-bold text-[#011628] mb-4" style={{ color: "#011628" }}>
                1. Regulatory Standards &amp; Conformance
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6" style={{ color: "#334155" }}>
                Our digital platform (<code>https://www.ratnakarsecurities.com/</code>) is designed, developed, and maintained in compliance with:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3" style={{ backgroundColor: "#f8fafc" }}>
                  <CheckCircle2 className="w-5 h-5 text-[#14532d] shrink-0 mt-0.5" aria-hidden="true" style={{ color: "#14532d" }} />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900" style={{ color: "#0f172a" }}>SEBI Circulars</h3>
                    <p className="text-xs text-slate-700 mt-0.5" style={{ color: "#334155" }}>
                      SEBI Digital Accessibility Directives for Regulated Entities (July–Dec 2025).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3" style={{ backgroundColor: "#f8fafc" }}>
                  <CheckCircle2 className="w-5 h-5 text-[#14532d] shrink-0 mt-0.5" aria-hidden="true" style={{ color: "#14532d" }} />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900" style={{ color: "#0f172a" }}>GIGW 3.0 &amp; IS 17802</h3>
                    <p className="text-xs text-slate-700 mt-0.5" style={{ color: "#334155" }}>
                      Guidelines for Indian Government Websites &amp; Indian Standard for ICT Accessibility.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3" style={{ backgroundColor: "#f8fafc" }}>
                  <CheckCircle2 className="w-5 h-5 text-[#14532d] shrink-0 mt-0.5" aria-hidden="true" style={{ color: "#14532d" }} />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900" style={{ color: "#0f172a" }}>WCAG 2.2 Level AA</h3>
                    <p className="text-xs text-slate-700 mt-0.5" style={{ color: "#334155" }}>
                      W3C Web Content Accessibility Guidelines 2.2 (Level A and AA success criteria).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3" style={{ backgroundColor: "#f8fafc" }}>
                  <CheckCircle2 className="w-5 h-5 text-[#14532d] shrink-0 mt-0.5" aria-hidden="true" style={{ color: "#14532d" }} />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900" style={{ color: "#0f172a" }}>RPwD Act 2016</h3>
                    <p className="text-xs text-slate-700 mt-0.5" style={{ color: "#334155" }}>
                      Rights of Persons with Disabilities Act, 2016 &amp; Rules made thereunder.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Platform Accessibility Features */}
            <section
              aria-labelledby="section-features"
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h2 id="section-features" className="text-2xl font-serif font-bold text-[#011628] mb-4" style={{ color: "#011628" }}>
                2. Built-in Accessibility Features
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6" style={{ color: "#334155" }}>
                To assist users with diverse needs, we have equipped our digital platform with dedicated assistive controls:
              </p>

              <div className="space-y-5">
                {/* Feature 1: High Contrast */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200" style={{ backgroundColor: "#f8fafc" }}>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#004f7a] shrink-0" style={{ backgroundColor: "#e0f2fe", color: "#004f7a" }}>
                    <Eye className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900" style={{ color: "#0f172a" }}>High Contrast Modes</h3>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed" style={{ color: "#334155" }}>
                      Toggle between <strong>Standard Mode</strong>, <strong>Dark High Contrast</strong> (yellow and cyan text on dark background), and <strong>Light High Contrast</strong> (crisp black text on white with thick borders) using the toolbar at the top of the screen.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Font Resizing */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200" style={{ backgroundColor: "#f8fafc" }}>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#004f7a] shrink-0" style={{ backgroundColor: "#e0f2fe", color: "#004f7a" }}>
                    <Type className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900" style={{ color: "#0f172a" }}>Font Resizing Controls (A-, A, A+)</h3>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed" style={{ color: "#334155" }}>
                      Easily scale font size across the entire website from 90% (A-) to 110% (A+) without breaking the layout or overlapping text.
                    </p>
                  </div>
                </div>

                {/* Feature 3: Motion Controls */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200" style={{ backgroundColor: "#f8fafc" }}>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#004f7a] shrink-0" style={{ backgroundColor: "#e0f2fe", color: "#004f7a" }}>
                    <Pause className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900" style={{ color: "#0f172a" }}>Pause / Stop Moving Content</h3>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed" style={{ color: "#334155" }}>
                      Users can pause all floating animations, auto-rotating testimonial sliders, and tickers using the &ldquo;Pause Motion&rdquo; button or system-level <code>prefers-reduced-motion</code> settings.
                    </p>
                  </div>
                </div>

                {/* Feature 4: Audio CAPTCHA */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200" style={{ backgroundColor: "#f8fafc" }}>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#004f7a] shrink-0" style={{ backgroundColor: "#e0f2fe", color: "#004f7a" }}>
                    <Volume2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900" style={{ color: "#0f172a" }}>Accessible Audio CAPTCHA</h3>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed" style={{ color: "#334155" }}>
                      All verification forms feature a &ldquo;Listen to Audio CAPTCHA&rdquo; button that enunciation security codes clearly letter-by-letter for screen reader and visually impaired users.
                    </p>
                  </div>
                </div>

                {/* Feature 5: Quick Search */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200" style={{ backgroundColor: "#f8fafc" }}>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#004f7a] shrink-0" style={{ backgroundColor: "#e0f2fe", color: "#004f7a" }}>
                    <Search className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900" style={{ color: "#0f172a" }}>Quick Content Search (Ctrl+K)</h3>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed" style={{ color: "#334155" }}>
                      Quickly search and jump to any investment product, investor document, research report, or policy via the instant search dialog accessible via <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-xs">Ctrl+K</kbd> or <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-xs">Cmd+K</kbd>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Keyboard & Screen Reader Guide */}
            <section
              aria-labelledby="section-keyboard-guide"
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h2 id="section-keyboard-guide" className="text-2xl font-serif font-bold text-[#011628] mb-4" style={{ color: "#011628" }}>
                3. Keyboard &amp; Screen Reader Navigation Guide
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6" style={{ color: "#334155" }}>
                Our entire digital platform is fully operable without a mouse. Below are key navigation shortcuts:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-700 border-collapse" style={{ backgroundColor: "#ffffff", color: "#334155" }}>
                  <caption className="sr-only">Keyboard Navigation Key Reference</caption>
                  <thead className="bg-[#011628] text-white text-xs font-semibold uppercase" style={{ backgroundColor: "#011628", color: "#ffffff" }}>
                    <tr>
                      <th scope="col" className="px-4 py-3 border-r border-slate-700">Key / Shortcut</th>
                      <th scope="col" className="px-4 py-3">Function / Navigation Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-200" style={{ color: "#0f172a" }}>Tab</td>
                      <td className="px-4 py-3">Move forward to the next interactive link, button, or form field.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-200" style={{ color: "#0f172a" }}>Shift + Tab</td>
                      <td className="px-4 py-3">Move backward to the previous interactive element.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-200" style={{ color: "#0f172a" }}>Enter / Space</td>
                      <td className="px-4 py-3">Activate a button, open a dropdown menu, or submit a form.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-200" style={{ color: "#0f172a" }}>Escape</td>
                      <td className="px-4 py-3">Close any active dropdown menu, search modal, or popup dialog.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-200" style={{ color: "#0f172a" }}>Ctrl + K / Cmd + K</td>
                      <td className="px-4 py-3">Open the global Quick Search dialog from anywhere on the platform.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-200" style={{ color: "#0f172a" }}>Skip Link (Top of Page)</td>
                      <td className="px-4 py-3">Press Tab immediately on page load to reveal &ldquo;Skip to Main Content&rdquo;.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Document & PDF Accessibility */}
            <section
              aria-labelledby="section-pdf-accessibility"
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h2 id="section-pdf-accessibility" className="text-2xl font-serif font-bold text-[#011628] mb-4" style={{ color: "#011628" }}>
                4. Accessible PDF Documents (Rule 15(1)(c)(ii))
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4" style={{ color: "#334155" }}>
                In compliance with regulatory requirements, policy documents, account opening forms, investor charters, and financial statements hosted on our website are provided in searchable, OCR-enabled PDF formats with digital text layers to allow screen reading and text search.
              </p>
              <p className="text-slate-700 leading-relaxed" style={{ color: "#334155" }}>
                If you encounter any scanned legacy document that cannot be read by your assistive software, please contact our accessibility coordinator below to receive an accessible transcript or ePUB version.
              </p>
            </section>

          </main>

          {/* Right Sidebar: Grievance Redressal & Contacts (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">

            {/* Accessibility Coordinator Contact Box */}
            <div
              className="rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between bg-[#012e54]"
              style={{
                backgroundColor: "#012e54",
                color: "#ffffff"
              }}
            >
              <div>
                <span className="text-[#7dd3fc] font-bold text-xs uppercase tracking-widest block mb-2" style={{ color: "#7dd3fc" }}>
                  Assistance &amp; Feedback
                </span>
                <h3 className="text-2xl font-serif font-bold mb-4 text-white" style={{ color: "#ffffff" }}>
                  Accessibility Helpdesk
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6" style={{ color: "#f8fafc" }}>
                  If you experience any accessibility barrier while browsing or submitting information, please get in touch with our team:
                </p>

                <div className="space-y-4 pt-4 border-t border-white/20">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#7dd3fc] shrink-0 mt-0.5" aria-hidden="true" style={{ color: "#7dd3fc" }} />
                    <div>
                      <span className="text-xs text-slate-200 block" style={{ color: "#e2e8f0" }}>Helpline Number</span>
                      <a href="tel:+917949007900" className="text-white font-bold hover:text-[#7dd3fc] transition-colors" style={{ color: "#ffffff" }}>
                        +91 (079) 4900 7900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#7dd3fc] shrink-0 mt-0.5" aria-hidden="true" style={{ color: "#7dd3fc" }} />
                    <div>
                      <span className="text-xs text-slate-200 block" style={{ color: "#e2e8f0" }}>Compliance Email</span>
                      <a href="mailto:compliance@ratnakarsecurities.com" className="text-white font-bold hover:text-[#7dd3fc] transition-colors break-all" style={{ color: "#ffffff" }}>
                        compliance@ratnakarsecurities.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#7dd3fc] shrink-0 mt-0.5" aria-hidden="true" style={{ color: "#7dd3fc" }} />
                    <div>
                      <span className="text-xs text-slate-200 block" style={{ color: "#e2e8f0" }}>General Support Email</span>
                      <a href="mailto:info@ratnakarsecurities.com" className="text-white font-bold hover:text-[#7dd3fc] transition-colors break-all" style={{ color: "#ffffff" }}>
                        info@ratnakarsecurities.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#004f7a] hover:bg-[#003d5e] text-white font-bold text-sm shadow-md transition-transform focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
                  style={{ backgroundColor: "#004f7a", color: "#ffffff" }}
                >
                  <span>Submit Online Feedback</span>
                </Link>
              </div>
            </div>

            {/* SEBI Regulatory Escalation Channels */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm" style={{ backgroundColor: "#ffffff" }}>
              <h3 className="text-lg font-serif font-bold text-[#011628] mb-3" style={{ color: "#011628" }}>
                SEBI Escalation Portals
              </h3>
              <p className="text-xs text-slate-700 mb-4 leading-relaxed" style={{ color: "#334155" }}>
                Investors can also lodge grievances directly through official regulatory redressal platforms:
              </p>

              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://scores.sebi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-slate-900 hover:text-[#881337] font-semibold py-1.5 px-2 rounded hover:bg-slate-50 transition-colors"
                    style={{ color: "#0f172a" }}
                  >
                    <span>SEBI SCORES Portal</span>
                    <ExternalLink className="w-4 h-4 text-slate-700" aria-label="(Opens in new tab)" style={{ color: "#334155" }} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://smartodr.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-slate-900 hover:text-[#881337] font-semibold py-1.5 px-2 rounded hover:bg-slate-50 transition-colors"
                    style={{ color: "#0f172a" }}
                  >
                    <span>SEBI SMART ODR Portal</span>
                    <ExternalLink className="w-4 h-4 text-slate-700" aria-label="(Opens in new tab)" style={{ color: "#334155" }} />
                  </a>
                </li>
                <li>
                  <Link
                    href="/investor-grievance"
                    className="flex items-center justify-between text-slate-900 hover:text-[#881337] font-semibold py-1.5 px-2 rounded hover:bg-slate-50 transition-colors"
                    style={{ color: "#0f172a" }}
                  >
                    <span>RSL Grievance Escalation Matrix</span>
                    <ChevronRight className="w-4 h-4 text-slate-700" aria-hidden="true" style={{ color: "#334155" }} />
                  </Link>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </Container>
    </div>
  );
}
