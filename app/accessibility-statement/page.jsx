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
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
            <li aria-current="page" className="text-slate-900 font-bold">Accessibility Statement</li>
          </ol>
        </nav>

        {/* Page Title Banner */}
        <header className="mb-12 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Digital Inclusion Commitment</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#011628] mb-4 leading-tight">
            Digital Accessibility Statement
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
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
            >
              <h2 id="section-standards" className="text-2xl font-serif font-bold text-[#011628] mb-4">
                1. Regulatory Standards & Conformance
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Our digital platform (`https://www.ratnakarsecurities.com/`) is designed, developed, and maintained in compliance with:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">SEBI Circulars</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      SEBI Digital Accessibility Directives for Regulated Entities (July–Dec 2025).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">GIGW 3.0 & IS 17802</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Guidelines for Indian Government Websites & Indian Standard for ICT Accessibility.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">WCAG 2.2 Level AA</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      W3C Web Content Accessibility Guidelines 2.2 (Level A and AA success criteria).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">RPwD Act 2016</h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Rights of Persons with Disabilities Act, 2016 & Rules made thereunder.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Platform Accessibility Features */}
            <section
              aria-labelledby="section-features"
              className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm"
            >
              <h2 id="section-features" className="text-2xl font-serif font-bold text-[#011628] mb-4">
                2. Built-in Accessibility Features
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                To assist users with diverse needs, we have equipped our digital platform with dedicated assistive controls:
              </p>

              <div className="space-y-5">
                {/* Feature 1: High Contrast */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-secondary shrink-0">
                    <Eye className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">High Contrast Modes</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Toggle between <strong>Standard Mode</strong>, <strong>Dark High Contrast</strong> (yellow and cyan text on dark background), and <strong>Light High Contrast</strong> (crisp black text on white with thick borders) using the toolbar at the top of the screen.
                    </p>
                  </div>
                </div>

                {/* Feature 2: Font Resizing */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-secondary shrink-0">
                    <Type className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Font Resizing Controls (A-, A, A+)</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Easily scale font size across the entire website from 90% (A-) to 110% (A+) without breaking the layout or overlapping text.
                    </p>
                  </div>
                </div>

                {/* Feature 3: Motion Controls */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-secondary shrink-0">
                    <Pause className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Pause / Stop Moving Content</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Users can pause all floating animations, auto-rotating testimonial sliders, and tickers using the &ldquo;Pause Motion&rdquo; button or system-level <code>prefers-reduced-motion</code> settings.
                    </p>
                  </div>
                </div>

                {/* Feature 4: Audio CAPTCHA */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-secondary shrink-0">
                    <Volume2 className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Accessible Audio CAPTCHA</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      All verification forms feature a &ldquo;Listen to Audio CAPTCHA&rdquo; button that enunciation security codes clearly letter-by-letter for screen reader and visually impaired users.
                    </p>
                  </div>
                </div>

                {/* Feature 5: Quick Search */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-secondary shrink-0">
                    <Search className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Quick Content Search (Ctrl+K)</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
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
            >
              <h2 id="section-keyboard-guide" className="text-2xl font-serif font-bold text-[#011628] mb-4">
                3. Keyboard & Screen Reader Navigation Guide
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Our entire digital platform is fully operable without a mouse. Below are key navigation shortcuts:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-700 border-collapse">
                  <caption className="sr-only">Keyboard Navigation Key Reference</caption>
                  <thead className="bg-[#011628] text-white text-xs font-semibold uppercase">
                    <tr>
                      <th scope="col" className="px-4 py-3 border-r border-slate-700">Key / Shortcut</th>
                      <th scope="col" className="px-4 py-3">Function / Navigation Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-100">Tab</td>
                      <td className="px-4 py-3">Move forward to the next interactive link, button, or form field.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-100">Shift + Tab</td>
                      <td className="px-4 py-3">Move backward to the previous interactive element.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-100">Enter / Space</td>
                      <td className="px-4 py-3">Activate a button, open a dropdown menu, or submit a form.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-100">Escape</td>
                      <td className="px-4 py-3">Close any active dropdown menu, search modal, or popup dialog.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-100">Ctrl + K / Cmd + K</td>
                      <td className="px-4 py-3">Open the global Quick Search dialog from anywhere on the platform.</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 border-r border-slate-100">Skip Link (Top of Page)</td>
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
            >
              <h2 id="section-pdf-accessibility" className="text-2xl font-serif font-bold text-[#011628] mb-4">
                4. Accessible PDF Documents (Rule 15(1)(c)(ii))
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                In compliance with regulatory requirements, policy documents, account opening forms, investor charters, and financial statements hosted on our website are provided in searchable, OCR-enabled PDF formats with digital text layers to allow screen reading and text search.
              </p>
              <p className="text-slate-700 leading-relaxed">
                If you encounter any scanned legacy document that cannot be read by your assistive software, please contact our accessibility coordinator below to receive an accessible transcript or ePUB version.
              </p>
            </section>

          </main>

          {/* Right Sidebar: Grievance Redressal & Contacts (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">

            {/* Accessibility Coordinator Contact Box */}
            <div
              className="rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between"
              style={{
                background: "radial-gradient(1400px 700px at 85% 20%, #1a6eb5 0%, #012e54 50%, #011628 100%)",
              }}
            >
              <div>
                <span className="text-cyan-300 font-bold text-xs uppercase tracking-widest block mb-2">
                  Assistance & Feedback
                </span>
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Accessibility Helpdesk
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  If you experience any accessibility barrier while browsing or submitting information, please get in touch with our team:
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-xs text-white/60 block">Helpline Number</span>
                      <a href="tel:+917949007900" className="text-white font-bold hover:text-cyan-300 transition-colors">
                        +91 (079) 4900 7900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-xs text-white/60 block">Compliance Email</span>
                      <a href="mailto:compliance@ratnakarsecurities.com" className="text-white font-bold hover:text-cyan-300 transition-colors break-all">
                        compliance@ratnakarsecurities.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-300 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <span className="text-xs text-white/60 block">General Support Email</span>
                      <a href="mailto:info@ratnakarsecurities.com" className="text-white font-bold hover:text-cyan-300 transition-colors break-all">
                        info@ratnakarsecurities.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-br from-[#0088c2] to-[#006da0] hover:opacity-95 text-white font-bold text-sm shadow-md transition-transform"
                >
                  <span>Submit Online Feedback</span>
                </Link>
              </div>
            </div>

            {/* SEBI Regulatory Escalation Channels */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-serif font-bold text-[#011628] mb-3">
                SEBI Escalation Portals
              </h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Investors can also lodge grievances directly through official regulatory redressal platforms:
              </p>

              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://scores.sebi.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-slate-800 hover:text-primary font-semibold py-1.5 px-2 rounded hover:bg-slate-50 transition-colors"
                  >
                    <span>SEBI SCORES Portal</span>
                    <ExternalLink className="w-4 h-4 text-slate-500" aria-label="(Opens in new tab)" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://smartodr.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-slate-800 hover:text-primary font-semibold py-1.5 px-2 rounded hover:bg-slate-50 transition-colors"
                  >
                    <span>SEBI SMART ODR Portal</span>
                    <ExternalLink className="w-4 h-4 text-slate-500" aria-label="(Opens in new tab)" />
                  </a>
                </li>
                <li>
                  <Link
                    href="/investor-grievance"
                    className="flex items-center justify-between text-slate-800 hover:text-primary font-semibold py-1.5 px-2 rounded hover:bg-slate-50 transition-colors"
                  >
                    <span>RSL Grievance Escalation Matrix</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" aria-hidden="true" />
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
