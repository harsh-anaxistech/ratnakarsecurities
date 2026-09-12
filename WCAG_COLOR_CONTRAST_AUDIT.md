# WCAG 2.1 / 2.2 Color Contrast Audit Report

**Project:** Ratnakar Securities (Full-Stack Next.js 16 Web Application)  
**Standard:** WCAG 2.1 & WCAG 2.2 Level AA (Success Criteria 1.4.3 Contrast Minimum, 1.4.11 Non-text Contrast, 1.4.6 Enhanced Contrast)  
**Date of Audit:** September 12, 2026  
**Auditor:** Accessibility Specialist (Automated & Static Analysis)

---

## 1. Executive Summary

This comprehensive audit evaluates the entire Ratnakar Securities web platform against WCAG 2.1 and WCAG 2.2 color contrast standards. A complete scan of all **104 source files** across `app/`, `components/`, `constants/`, and `globals.css` was conducted.

### Key Audit Metrics
- **Total Files Audited:** 104
- **Files with Contrast Hotspots:** 42
- **Total Contrast Issues Identified:** 221
  - **Critical (< 3.0:1 for normal text):** 63 instances (Cyan #00aeee on white, light gray #9ca3af / #d1d5db on white, low-contrast placeholders)
  - **High (3.0:1 to 4.49:1 for normal text/links):** 120 instances (Primary Brand Red #ea2830 body text & links on white background, low-opacity text)
  - **Medium (UI Components & Buttons):** 38 instances (White text on Primary Red #ea2830 buttons & badges)
  - **Low (Non-text subtle elements):** 0 instances
- **Passed Contrast Combinations Audited:** 85+ baseline combinations

---

## 2. WCAG Requirements

Under WCAG 2.1 & WCAG 2.2:
- **SC 1.4.3 Contrast (Minimum) (Level AA):**
  - **Normal Text (< 18pt / 24px or < 14pt / 18.66px bold):** Minimum contrast ratio of **4.5:1** against its background.
  - **Large Text (≥ 18pt / 24px or ≥ 14pt / 18.66px bold):** Minimum contrast ratio of **3.0:1** against its background.
  - **Incidental Text:** Inactive/disabled UI components and purely decorative text have no minimum requirement, but readable labels remain recommended.
- **SC 1.4.11 Non-text Contrast (Level AA):**
  - Visual information required to identify UI components (input borders, icons, buttons) and states must have a contrast ratio of at least **3.0:1** against adjacent background.
- **SC 1.4.6 Contrast (Enhanced) (Level AAA):**
  - Normal text: **7.0:1**, Large text: **4.5:1**.
- **SC 2.4.7 Focus Visible & SC 2.4.11 Focus Not Obscured:** Focus rings must maintain at least **3.0:1** contrast against adjacent surfaces.

---

## 3. Project Areas Audited

The audit encompassed every single frontend surface, layout, and component across the project:

1. **Pages & Routes (app/):**
   - Homepage (`app/page.js`, `components/home/*`)
   - Product Pages (`app/products/*`: Equity, Derivatives, Commodities, Mutual Funds, Bonds, SLBM, HNIs, NRIs, Wealth Management, Overview, Dynamic `[slug]`)
   - Research Sections (`app/research/*`, `ResearchSectionClient.jsx`: Daily, Weekly, Fundamental, Technical, Special Reports, IPO Analysis)
   - Investor Relations (`app/investors/*`: Annual Returns, Board of Directors, Complaints Trends, KMP Contacts, Material Events, Financial Information, Grievance, Newspaper Publications, Policies, Shareholding Pattern, Statutory Certificates)
   - Calculators (`app/sip-calculator/page.jsx`, `app/risk-calculator/page.jsx`, `components/home/Calculator.js`)
   - Compliance & Support (`app/investor-charter-stock-broker/page.jsx`, `app/investor-grievance/page.jsx`, `app/accessibility-statement/page.jsx`, `app/privacy-policy/page.jsx`, `app/refund-and-cancellation/page.jsx`, `app/nomination/page.jsx`, `app/downloads/page.js`, `app/sitemap/page.jsx`)
   - Partnership (`app/partner/page.jsx`, `app/partner-with-us/page.jsx`, `components/partner/PartnerForm.jsx`)
   - Contact (`app/contact/page.jsx`, `components/contact/*`)
   - Error & System Pages (`app/not-found.js`, `app/error.js`, `app/global-error.js`)

2. **Components & Layouts (components/):**
   - Header & Navigation (`components/layout/Header.js`, `MenuIcons.js`)
   - Footer (`components/layout/Footer.js`)
   - Common Elements (`Button.js`, `Input.jsx`, `CustomSelect.jsx`, `Container.js`, `HeroSection.jsx`, `ProductSidebar.jsx`, `AccessibleCaptcha.jsx`, `AccessibilityToolbar.jsx`, `SkipLink.jsx`, `ScrollToTop.js`, `FloatingMobileTrading.js`)
   - Modals & Dialogs (`BackofficeLoginModal.jsx`, `ChooseAppModal.jsx`, `RiskDisclosureModal.jsx`, `StartupPopupModal.jsx`, `QuickSearchModal.jsx`)
   - Home Widgets (`HeroBanner.js`, `Features.js`, `WhyChooseUs.jsx`, `Steps.jsx`, `Testimonials.jsx`, `Faq.jsx`, `DownloadApp.js`, `LightSection.jsx`, `StarBar.jsx`)
   - Investor Modules (`InvestorCharterDP.jsx`, `InvestorCharterStockBroker.jsx`, `InvestorGrievance.jsx`)

3. **Styling & Design Tokens:**
   - `app/globals.css` (Tailwind v4 @theme, CSS variables, high-contrast themes, focus rings)
   - Inline styles across all JSX files

---

## 4. Existing Color System

| Token / Color Name | Hex / Value | Luminance | Contrast on #FFFFFF (Light Bg) | Contrast on #012e54 (Dark Blue) | Contrast on #011628 (Navy Bg) | Contrast with #FFFFFF Text |
|-------------------|-------------|-----------|--------------------------------|---------------------------------|-------------------------------|---------------------------|
| Primary Red | `#ea2830` | 0.1827 | **4.33:1** (FAIL Normal) | 3.19:1 (Large Only) | 4.22:1 (Large Only) | **4.33:1** (FAIL Normal) |
| Accessible Red | `#c41f26` | 0.1238 | **5.88:1** (PASS AA) | 2.50:1 (FAIL) | 3.31:1 (Large Only) | **5.88:1** (PASS AA) |
| Dark Red | `#a7181e` | 0.0815 | **8.15:1** (PASS AAA) | 1.88:1 (FAIL) | 2.49:1 (FAIL) | **8.15:1** (PASS AAA) |
| Deep Red | `#b91c1c` | 0.1122 | **6.47:1** (PASS AA) | 2.34:1 (FAIL) | 3.09:1 (Large Only) | **6.47:1** (PASS AA) |
| Secondary Blue | `#006da0` | 0.1384 | **5.68:1** (PASS AA) | 2.74:1 (FAIL) | 3.63:1 (Large Only) | **5.68:1** (PASS AA) |
| Dark Blue | `#012e54` | 0.0186 | **15.30:1** (PASS AAA) | 1.00:1 | 1.33:1 | **15.30:1** (PASS AAA) |
| Dark Navy | `#011628` | 0.0076 | **18.31:1** (PASS AAA) | 1.33:1 | 1.00:1 | **18.31:1** (PASS AAA) |
| Cyan (Legacy) | `#00aeee` | 0.3871 | **2.53:1** (FAIL Normal) | **6.40:1** (PASS AA) | **7.58:1** (PASS AA) | **2.53:1** (FAIL Normal) |
| Gray-400 | `#9ca3af` | 0.3622 | **2.54:1** (FAIL Normal) | **5.44:1** (PASS AA) | **7.21:1** (PASS AA) | **2.54:1** (FAIL Normal) |
| Gray-500 | `#6b7280` | 0.1654 | **4.83:1** (PASS AA) | 3.06:1 (Large Only) | 4.05:1 (Large Only) | **4.83:1** (PASS AA) |
| Gray-600 | `#4b5563` | 0.0889 | **7.56:1** (PASS AAA) | 1.99:1 (FAIL) | 2.63:1 (FAIL) | **7.56:1** (PASS AAA) |
| Slate-300 | `#cbd5e1` | 0.6273 | **1.55:1** (FAIL Normal) | **9.30:1** (PASS AAA) | **12.33:1** (PASS AAA) | **1.55:1** (FAIL Normal) |
| Slate-400 | `#94a3b8` | 0.3582 | **2.56:1** (FAIL Normal) | **5.39:1** (PASS AA) | **7.14:1** (PASS AA) | **2.56:1** (FAIL Normal) |
| Slate-500 | `#64748b` | 0.1705 | **4.76:1** (PASS AA) | 2.90:1 (FAIL) | 3.85:1 (Large Only) | **4.76:1** (PASS AA) |
| Slate-600 | `#475569` | 0.0884 | **7.58:1** (PASS AAA) | 1.98:1 (FAIL) | 2.62:1 (FAIL) | **7.58:1** (PASS AAA) |
| Slate-700 | `#334155` | 0.0531 | **10.18:1** (PASS AAA) | 1.48:1 (FAIL) | 1.95:1 (FAIL) | **10.18:1** (PASS AAA) |
| Slate-900 | `#0f172a` | 0.0102 | **17.44:1** (PASS AAA) | 1.15:1 | 1.05:1 | **17.44:1** (PASS AAA) |

---

## 5. Failed Contrast Combinations

Below is the complete itemized table of all identified contrast issues across the codebase:

| # | File | Component | Element | Text Color | Background | Current Ratio | Required | Status | Recommended Color | New Ratio |
|---|------|-----------|---------|------------|------------|---------------|----------|--------|-------------------|-----------|
| 1 | [`app/accessibility-statement/page.jsx`](file:///app/accessibility-statement/page.jsx) | `page` | Brand Red Text / Link (Line 44) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 2 | [`app/accessibility-statement/page.jsx`](file:///app/accessibility-statement/page.jsx) | `page` | Cyan / Secondary Link / Icon (Line 53) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 3 | [`app/accessibility-statement/page.jsx`](file:///app/accessibility-statement/page.jsx) | `page` | Cyan / Secondary Link / Icon (Line 141) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 4 | [`app/accessibility-statement/page.jsx`](file:///app/accessibility-statement/page.jsx) | `page` | Cyan / Secondary Link / Icon (Line 154) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 5 | [`app/accessibility-statement/page.jsx`](file:///app/accessibility-statement/page.jsx) | `page` | Cyan / Secondary Link / Icon (Line 167) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 6 | [`app/accessibility-statement/page.jsx`](file:///app/accessibility-statement/page.jsx) | `page` | Cyan / Secondary Link / Icon (Line 180) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 7 | [`app/accessibility-statement/page.jsx`](file:///app/accessibility-statement/page.jsx) | `page` | Cyan / Secondary Link / Icon (Line 193) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 8 | [`app/accessibility-statement/page.jsx`](file:///app/accessibility-statement/page.jsx) | `page` | Brand Red Text / Link (Line 355) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 9 | [`app/accessibility-statement/page.jsx`](file:///app/accessibility-statement/page.jsx) | `page` | Brand Red Text / Link (Line 366) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 10 | [`app/accessibility-statement/page.jsx`](file:///app/accessibility-statement/page.jsx) | `page` | Brand Red Text / Link (Line 375) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 11 | [`app/downloads/page.js`](file:///app/downloads/page.js) | `page` | Cyan / Secondary Link / Icon (Line 217) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 12 | [`app/downloads/page.js`](file:///app/downloads/page.js) | `page` | Cyan / Secondary Link / Icon (Line 226) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 13 | [`app/downloads/page.js`](file:///app/downloads/page.js) | `page` | Brand Red Text / Link (Line 226) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 14 | [`app/downloads/page.js`](file:///app/downloads/page.js) | `page` | Text/Label (Line 329) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 15 | [`app/global-error.js`](file:///app/global-error.js) | `global-error` | Text/Label (Line 25) | `text-slate-300 (#cbd5e1)` | `Light Background (#ffffff)` | **1.48:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 16 | [`app/investors/annual-return/page.jsx`](file:///app/investors/annual-return/page.jsx) | `page` | Text/Label (Line 59) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 17 | [`app/investors/board-of-directors/page.jsx`](file:///app/investors/board-of-directors/page.jsx) | `page` | Brand Red Text / Link (Line 87) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 18 | [`app/investors/board-of-directors/page.jsx`](file:///app/investors/board-of-directors/page.jsx) | `page` | Primary Red Button/Badge (Line 101) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 19 | [`app/investors/board-of-directors/page.jsx`](file:///app/investors/board-of-directors/page.jsx) | `page` | Brand Red Text / Link (Line 102) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 20 | [`app/investors/board-of-directors/page.jsx`](file:///app/investors/board-of-directors/page.jsx) | `page` | Brand Red Text / Link (Line 134) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 21 | [`app/investors/disclosure-of-contact-details-of-key-managerial-personnel/page.jsx`](file:///app/investors/disclosure-of-contact-details-of-key-managerial-personnel/page.jsx) | `page` | Brand Red Text / Link (Line 73) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 22 | [`app/investors/disclosure-of-contact-details-of-key-managerial-personnel/page.jsx`](file:///app/investors/disclosure-of-contact-details-of-key-managerial-personnel/page.jsx) | `page` | Primary Red Button/Badge (Line 98) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 23 | [`app/investors/disclosures-of-material-events-or-information/page.jsx`](file:///app/investors/disclosures-of-material-events-or-information/page.jsx) | `page` | Text/Label (Line 60) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 24 | [`app/investors/financial-information-and-annual-report/page.jsx`](file:///app/investors/financial-information-and-annual-report/page.jsx) | `page` | Text/Label (Line 59) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 25 | [`app/investors/newspaper-publication/page.jsx`](file:///app/investors/newspaper-publication/page.jsx) | `page` | Text/Label (Line 74) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 26 | [`app/investors/policies/page.jsx`](file:///app/investors/policies/page.jsx) | `page` | Text/Label (Line 60) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 27 | [`app/investors/shareholding-pattern/page.jsx`](file:///app/investors/shareholding-pattern/page.jsx) | `page` | Text/Label (Line 59) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 28 | [`app/investors/statutory-and-registration-certificate-documents/page.jsx`](file:///app/investors/statutory-and-registration-certificate-documents/page.jsx) | `page` | Text/Label (Line 64) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 29 | [`app/nomination/page.jsx`](file:///app/nomination/page.jsx) | `page` | Brand Red Text / Link (Line 36) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 30 | [`app/nomination/page.jsx`](file:///app/nomination/page.jsx) | `page` | Brand Red Text / Link (Line 40) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 31 | [`app/privacy-policy/page.jsx`](file:///app/privacy-policy/page.jsx) | `page` | Brand Red Text / Link (Line 35) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 32 | [`app/privacy-policy/page.jsx`](file:///app/privacy-policy/page.jsx) | `page` | Brand Red Text / Link (Line 49) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 33 | [`app/privacy-policy/page.jsx`](file:///app/privacy-policy/page.jsx) | `page` | Primary Red Button/Badge (Line 72) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 34 | [`app/privacy-policy/page.jsx`](file:///app/privacy-policy/page.jsx) | `page` | Brand Red Text / Link (Line 73) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 35 | [`app/products/bonds/page.jsx`](file:///app/products/bonds/page.jsx) | `page` | Brand Red Text / Link (Line 75) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 36 | [`app/products/bonds/page.jsx`](file:///app/products/bonds/page.jsx) | `page` | Brand Red Text / Link (Line 95) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 37 | [`app/products/bonds/page.jsx`](file:///app/products/bonds/page.jsx) | `page` | Brand Red Text / Link (Line 104) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 38 | [`app/products/bonds/page.jsx`](file:///app/products/bonds/page.jsx) | `page` | Primary Red Button/Badge (Line 118) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 39 | [`app/products/bonds/page.jsx`](file:///app/products/bonds/page.jsx) | `page` | Brand Red Text / Link (Line 119) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 40 | [`app/products/commodities/page.jsx`](file:///app/products/commodities/page.jsx) | `page` | Brand Red Text / Link (Line 70) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 41 | [`app/products/commodities/page.jsx`](file:///app/products/commodities/page.jsx) | `page` | Brand Red Text / Link (Line 116) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 42 | [`app/products/commodities/page.jsx`](file:///app/products/commodities/page.jsx) | `page` | Primary Red Button/Badge (Line 155) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 43 | [`app/products/commodities/page.jsx`](file:///app/products/commodities/page.jsx) | `page` | Brand Red Text / Link (Line 156) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 44 | [`app/products/derivatives/page.jsx`](file:///app/products/derivatives/page.jsx) | `page` | Brand Red Text / Link (Line 96) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 45 | [`app/products/derivatives/page.jsx`](file:///app/products/derivatives/page.jsx) | `page` | Brand Red Text / Link (Line 114) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 46 | [`app/products/derivatives/page.jsx`](file:///app/products/derivatives/page.jsx) | `page` | Brand Red Text / Link (Line 118) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 47 | [`app/products/derivatives/page.jsx`](file:///app/products/derivatives/page.jsx) | `page` | Brand Red Text / Link (Line 122) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 48 | [`app/products/derivatives/page.jsx`](file:///app/products/derivatives/page.jsx) | `page` | Brand Red Text / Link (Line 126) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 49 | [`app/products/derivatives/page.jsx`](file:///app/products/derivatives/page.jsx) | `page` | Brand Red Text / Link (Line 135) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 50 | [`app/products/derivatives/page.jsx`](file:///app/products/derivatives/page.jsx) | `page` | Primary Red Button/Badge (Line 149) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 51 | [`app/products/derivatives/page.jsx`](file:///app/products/derivatives/page.jsx) | `page` | Brand Red Text / Link (Line 150) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 52 | [`app/products/derivatives/page.jsx`](file:///app/products/derivatives/page.jsx) | `page` | Primary Red Button/Badge (Line 178) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 53 | [`app/products/equity/page.jsx`](file:///app/products/equity/page.jsx) | `page` | Brand Red Text / Link (Line 79) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 54 | [`app/products/equity/page.jsx`](file:///app/products/equity/page.jsx) | `page` | Brand Red Text / Link (Line 101) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 55 | [`app/products/equity/page.jsx`](file:///app/products/equity/page.jsx) | `page` | Brand Red Text / Link (Line 151) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 56 | [`app/products/equity/page.jsx`](file:///app/products/equity/page.jsx) | `page` | Brand Red Text / Link (Line 152) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 57 | [`app/products/equity/page.jsx`](file:///app/products/equity/page.jsx) | `page` | Primary Red Button/Badge (Line 176) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 58 | [`app/products/hnis/page.jsx`](file:///app/products/hnis/page.jsx) | `page` | Brand Red Text / Link (Line 76) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 59 | [`app/products/hnis/page.jsx`](file:///app/products/hnis/page.jsx) | `page` | Brand Red Text / Link (Line 120) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 60 | [`app/products/hnis/page.jsx`](file:///app/products/hnis/page.jsx) | `page` | Primary Red Button/Badge (Line 134) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 61 | [`app/products/hnis/page.jsx`](file:///app/products/hnis/page.jsx) | `page` | Brand Red Text / Link (Line 135) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 62 | [`app/products/mutual-funds/page.jsx`](file:///app/products/mutual-funds/page.jsx) | `page` | Brand Red Text / Link (Line 139) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 63 | [`app/products/mutual-funds/page.jsx`](file:///app/products/mutual-funds/page.jsx) | `page` | Brand Red Text / Link (Line 194) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 64 | [`app/products/mutual-funds/page.jsx`](file:///app/products/mutual-funds/page.jsx) | `page` | Primary Red Button/Badge (Line 206) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 65 | [`app/products/mutual-funds/page.jsx`](file:///app/products/mutual-funds/page.jsx) | `page` | Brand Red Text / Link (Line 209) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 66 | [`app/products/mutual-funds/page.jsx`](file:///app/products/mutual-funds/page.jsx) | `page` | Brand Red Text / Link (Line 219) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 67 | [`app/products/mutual-funds/page.jsx`](file:///app/products/mutual-funds/page.jsx) | `page` | Primary Red Button/Badge (Line 234) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 68 | [`app/products/mutual-funds/page.jsx`](file:///app/products/mutual-funds/page.jsx) | `page` | Brand Red Text / Link (Line 235) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 69 | [`app/products/mutual-funds/page.jsx`](file:///app/products/mutual-funds/page.jsx) | `page` | Primary Red Button/Badge (Line 265) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 70 | [`app/products/nris/page.jsx`](file:///app/products/nris/page.jsx) | `page` | Brand Red Text / Link (Line 77) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 71 | [`app/products/nris/page.jsx`](file:///app/products/nris/page.jsx) | `page` | Brand Red Text / Link (Line 124) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 72 | [`app/products/nris/page.jsx`](file:///app/products/nris/page.jsx) | `page` | Brand Red Text / Link (Line 146) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 73 | [`app/products/nris/page.jsx`](file:///app/products/nris/page.jsx) | `page` | Primary Red Button/Badge (Line 160) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 74 | [`app/products/nris/page.jsx`](file:///app/products/nris/page.jsx) | `page` | Brand Red Text / Link (Line 161) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 75 | [`app/products/overview/page.jsx`](file:///app/products/overview/page.jsx) | `page` | Brand Red Text / Link (Line 105) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 76 | [`app/products/overview/page.jsx`](file:///app/products/overview/page.jsx) | `page` | Primary Red Button/Badge (Line 123) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 77 | [`app/products/slbm/page.jsx`](file:///app/products/slbm/page.jsx) | `page` | Brand Red Text / Link (Line 79) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 78 | [`app/products/slbm/page.jsx`](file:///app/products/slbm/page.jsx) | `page` | Brand Red Text / Link (Line 115) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 79 | [`app/products/slbm/page.jsx`](file:///app/products/slbm/page.jsx) | `page` | Brand Red Text / Link (Line 127) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 80 | [`app/products/slbm/page.jsx`](file:///app/products/slbm/page.jsx) | `page` | Primary Red Button/Badge (Line 141) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 81 | [`app/products/slbm/page.jsx`](file:///app/products/slbm/page.jsx) | `page` | Brand Red Text / Link (Line 142) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 82 | [`app/products/wealth-management/page.jsx`](file:///app/products/wealth-management/page.jsx) | `page` | Brand Red Text / Link (Line 78) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 83 | [`app/products/wealth-management/page.jsx`](file:///app/products/wealth-management/page.jsx) | `page` | Brand Red Text / Link (Line 125) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 84 | [`app/products/wealth-management/page.jsx`](file:///app/products/wealth-management/page.jsx) | `page` | Brand Red Text / Link (Line 134) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 85 | [`app/products/wealth-management/page.jsx`](file:///app/products/wealth-management/page.jsx) | `page` | Primary Red Button/Badge (Line 148) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 86 | [`app/products/wealth-management/page.jsx`](file:///app/products/wealth-management/page.jsx) | `page` | Brand Red Text / Link (Line 149) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 87 | [`app/products/[slug]/page.jsx`](file:///app/products/[slug]/page.jsx) | `page` | Brand Red Text / Link (Line 106) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 88 | [`app/products/[slug]/page.jsx`](file:///app/products/[slug]/page.jsx) | `page` | Primary Red Button/Badge (Line 124) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 89 | [`app/refund-and-cancellation/page.jsx`](file:///app/refund-and-cancellation/page.jsx) | `page` | Brand Red Text / Link (Line 34) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 90 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Text/Label (Line 70) | `text-gray-300 (#d1d5db)` | `Light Background (#ffffff)` | **1.47:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 91 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Brand Red Text / Link (Line 261) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 92 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Brand Red Text / Link (Line 262) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 93 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Primary Red Button/Badge (Line 289) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 94 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Brand Red Text / Link (Line 290) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 95 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Brand Red Text / Link (Line 403) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 96 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Brand Red Text / Link (Line 420) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 97 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Brand Red Text / Link (Line 438) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 98 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Brand Red Text / Link (Line 454) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 99 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Text/Label (Line 491) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 100 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Text/Label (Line 507) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 101 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Brand Red Text / Link (Line 563) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 102 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Primary Red Button/Badge (Line 578) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 103 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Text/Label (Line 600) | `text-gray-300 (#d1d5db)` | `Light Background (#ffffff)` | **1.47:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 104 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Text/Label (Line 603) | `text-gray-300 (#d1d5db)` | `Light Background (#ffffff)` | **1.47:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 105 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Text/Label (Line 613) | `text-gray-300 (#d1d5db)` | `Light Background (#ffffff)` | **1.47:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 106 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Text/Label (Line 616) | `text-gray-300 (#d1d5db)` | `Light Background (#ffffff)` | **1.47:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 107 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Text/Label (Line 626) | `text-gray-300 (#d1d5db)` | `Light Background (#ffffff)` | **1.47:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 108 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Text/Label (Line 636) | `text-gray-300 (#d1d5db)` | `Light Background (#ffffff)` | **1.47:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 109 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Text/Label (Line 639) | `text-gray-300 (#d1d5db)` | `Light Background (#ffffff)` | **1.47:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 110 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Brand Red Text / Link (Line 662) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 111 | [`app/research/[section]/ResearchSectionClient.jsx`](file:///app/research/[section]/ResearchSectionClient.jsx) | `ResearchSectionClient` | Primary Red Button/Badge (Line 693) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 112 | [`app/risk-calculator/page.jsx`](file:///app/risk-calculator/page.jsx) | `page` | Brand Red Text / Link (Line 272) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 113 | [`app/risk-calculator/page.jsx`](file:///app/risk-calculator/page.jsx) | `page` | Primary Red Button/Badge (Line 280) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 114 | [`app/risk-calculator/page.jsx`](file:///app/risk-calculator/page.jsx) | `page` | Primary Red Button/Badge (Line 307) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 115 | [`app/risk-calculator/page.jsx`](file:///app/risk-calculator/page.jsx) | `page` | Cyan / Secondary Link / Icon (Line 335) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 116 | [`app/risk-calculator/page.jsx`](file:///app/risk-calculator/page.jsx) | `page` | Brand Red Text / Link (Line 394) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 117 | [`app/sip-calculator/page.jsx`](file:///app/sip-calculator/page.jsx) | `page` | Primary Red Button/Badge (Line 312) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 118 | [`app/sip-calculator/page.jsx`](file:///app/sip-calculator/page.jsx) | `page` | Brand Red Text / Link (Line 353) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 119 | [`app/sip-calculator/page.jsx`](file:///app/sip-calculator/page.jsx) | `page` | Brand Red Text / Link (Line 387) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 120 | [`app/sip-calculator/page.jsx`](file:///app/sip-calculator/page.jsx) | `page` | Brand Red Text / Link (Line 422) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 121 | [`app/sip-calculator/page.jsx`](file:///app/sip-calculator/page.jsx) | `page` | Primary Red Button/Badge (Line 546) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 122 | [`app/sip-calculator/page.jsx`](file:///app/sip-calculator/page.jsx) | `page` | Brand Red Text / Link (Line 581) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 123 | [`app/sip-calculator/page.jsx`](file:///app/sip-calculator/page.jsx) | `page` | Brand Red Text / Link (Line 587) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 124 | [`app/sitemap/page.jsx`](file:///app/sitemap/page.jsx) | `page` | Brand Red Text / Link (Line 115) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 125 | [`app/sitemap/page.jsx`](file:///app/sitemap/page.jsx) | `page` | Cyan / Secondary Link / Icon (Line 148) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 126 | [`app/sitemap/page.jsx`](file:///app/sitemap/page.jsx) | `page` | Brand Red Text / Link (Line 168) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 127 | [`app/sitemap/page.jsx`](file:///app/sitemap/page.jsx) | `page` | Brand Red Text / Link (Line 176) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 128 | [`components/common/AccessibleCaptcha.jsx`](file:///components/common/AccessibleCaptcha.jsx) | `AccessibleCaptcha` | Primary Red Button/Badge (Line 131) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 129 | [`components/common/Button.js`](file:///components/common/Button.js) | `Button` | Primary Red Button/Badge (Line 48) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 130 | [`components/common/Button.js`](file:///components/common/Button.js) | `Button` | Cyan / Secondary Link / Icon (Line 50) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 131 | [`components/common/ScrollToTop.js`](file:///components/common/ScrollToTop.js) | `ScrollToTop` | Primary Red Button/Badge (Line 14) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 132 | [`components/home/HeroBanner.js`](file:///components/home/HeroBanner.js) | `HeroBanner` | Cyan / Secondary Link / Icon (Line 60) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 133 | [`components/home/HeroBanner.js`](file:///components/home/HeroBanner.js) | `HeroBanner` | Cyan / Secondary Link / Icon (Line 157) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 134 | [`components/home/HeroBanner.js`](file:///components/home/HeroBanner.js) | `HeroBanner` | Cyan / Secondary Link / Icon (Line 175) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 135 | [`components/home/HeroBanner.js`](file:///components/home/HeroBanner.js) | `HeroBanner` | Cyan / Secondary Link / Icon (Line 193) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 136 | [`components/home/LightSection.jsx`](file:///components/home/LightSection.jsx) | `LightSection` | Brand Red Text / Link (Line 25) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 137 | [`components/home/LightSection.jsx`](file:///components/home/LightSection.jsx) | `LightSection` | Brand Red Text / Link (Line 35) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 138 | [`components/home/Steps.jsx`](file:///components/home/Steps.jsx) | `Steps` | Primary Red Button/Badge (Line 21) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 139 | [`components/home/Steps.jsx`](file:///components/home/Steps.jsx) | `Steps` | Primary Red Button/Badge (Line 37) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 140 | [`components/home/Testimonials.jsx`](file:///components/home/Testimonials.jsx) | `Testimonials` | Brand Red Text / Link (Line 185) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 141 | [`components/home/Testimonials.jsx`](file:///components/home/Testimonials.jsx) | `Testimonials` | Cyan / Secondary Link / Icon (Line 236) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 142 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Cyan / Secondary Link / Icon (Line 77) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 143 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Cyan / Secondary Link / Icon (Line 306) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 144 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Primary Red Button/Badge (Line 367) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 145 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Primary Red Button/Badge (Line 451) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 146 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Cyan / Secondary Link / Icon (Line 463) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 147 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Primary Red Button/Badge (Line 560) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 148 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 617) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 149 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Text/Label (Line 631) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 150 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Text/Label (Line 716) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 151 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Primary Red Button/Badge (Line 789) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 152 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 791) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 153 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Primary Red Button/Badge (Line 798) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 154 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Primary Red Button/Badge (Line 802) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 155 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Primary Red Button/Badge (Line 806) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 156 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Cyan / Secondary Link / Icon (Line 817) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 157 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 908) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 158 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 911) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 159 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1073) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 160 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Primary Red Button/Badge (Line 1165) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 161 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1170) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 162 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Primary Red Button/Badge (Line 1228) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 163 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1272) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 164 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1331) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 165 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1347) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 166 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1355) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 167 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1389) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 168 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1414) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 169 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1418) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 170 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1423) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 171 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1457) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 172 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1482) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 173 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1486) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 174 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1491) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 175 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Cyan / Secondary Link / Icon (Line 1520) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 176 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Cyan / Secondary Link / Icon (Line 1534) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 177 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Primary Red Button/Badge (Line 1727) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 178 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1846) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 179 | [`components/investors/InvestorCharterDP.jsx`](file:///components/investors/InvestorCharterDP.jsx) | `InvestorCharterDP` | Brand Red Text / Link (Line 1893) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 180 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Cyan / Secondary Link / Icon (Line 120) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 181 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Cyan / Secondary Link / Icon (Line 133) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 182 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Primary Red Button/Badge (Line 197) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 183 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Cyan / Secondary Link / Icon (Line 209) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 184 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Primary Red Button/Badge (Line 261) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 185 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Primary Red Button/Badge (Line 384) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 186 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Brand Red Text / Link (Line 441) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 187 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Text/Label (Line 455) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 188 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Text/Label (Line 540) | `text-gray-400 (#9ca3af)` | `Light Background (#ffffff)` | **2.54:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#475569 (text-slate-600) or #4b5563 (text-gray-600)` | **7.58:1** |
| 189 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Brand Red Text / Link (Line 584) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 190 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Primary Red Button/Badge (Line 617) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 191 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Primary Red Button/Badge (Line 633) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 192 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Primary Red Button/Badge (Line 649) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 193 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Brand Red Text / Link (Line 670) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 194 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Brand Red Text / Link (Line 710) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 195 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Brand Red Text / Link (Line 733) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 196 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Cyan / Secondary Link / Icon (Line 856) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 197 | [`components/investors/InvestorCharterStockBroker.jsx`](file:///components/investors/InvestorCharterStockBroker.jsx) | `InvestorCharterStockBroker` | Cyan / Secondary Link / Icon (Line 870) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 198 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Cyan / Secondary Link / Icon (Line 298) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 199 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Primary Red Button/Badge (Line 380) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 200 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 382) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 201 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Primary Red Button/Badge (Line 396) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 202 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Primary Red Button/Badge (Line 529) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 203 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 530) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 204 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 538) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 205 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Primary Red Button/Badge (Line 549) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 206 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Primary Red Button/Badge (Line 623) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 207 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 625) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 208 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 630) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 209 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 648) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 210 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 652) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 211 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 653) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 212 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 666) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 213 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 829) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 214 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 832) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 215 | [`components/investors/InvestorGrievance.jsx`](file:///components/investors/InvestorGrievance.jsx) | `InvestorGrievance` | Brand Red Text / Link (Line 834) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 216 | [`components/layout/Header.js`](file:///components/layout/Header.js) | `Header` | Cyan / Secondary Link / Icon (Line 107) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |
| 217 | [`components/layout/Header.js`](file:///components/layout/Header.js) | `Header` | Primary Red Button/Badge (Line 394) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 218 | [`components/layout/Header.js`](file:///components/layout/Header.js) | `Header` | Brand Red Text / Link (Line 575) | `#ea2830 (Primary Red)` | `White (#ffffff)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 (Accessible Brand Red) or #a7181e` | **5.88:1** |
| 219 | [`components/layout/Header.js`](file:///components/layout/Header.js) | `Header` | Primary Red Button/Badge (Line 725) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 220 | [`components/layout/Header.js`](file:///components/layout/Header.js) | `Header` | Primary Red Button/Badge (Line 750) | `White (#ffffff)` | `Primary Red (#ea2830)` | **4.33:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#c41f26 or #a7181e (bg-primary-dark)` | **7.52:1** |
| 221 | [`components/partner/PartnerForm.jsx`](file:///components/partner/PartnerForm.jsx) | `PartnerForm` | Cyan / Secondary Link / Icon (Line 186) | `#00aeee (Cyan)` | `White (#ffffff)` | **2.53:1** | `4.5:1` | <span style="color:red;font-weight:bold;">FAIL</span> | `#006da0 (text-[#006da0]) or #004f7a` | **5.68:1** |

---

## 6. Passed Contrast Combinations

The following representative combinations were verified and confirmed to satisfy WCAG 2.1/2.2 AA (and in many cases AAA):

| # | Combination Description | Foreground Color | Background Color | Calculated Ratio | WCAG Target | Status |
|---|-------------------------|------------------|------------------|------------------|-------------|--------|
| 1 | Primary Text on White Background | `#111827` (Gray-900) | `#ffffff` | **16.08:1** | ≥ 4.5:1 | **PASS (AAA)** |
| 2 | Muted Body Text on White Background | `#475569` (Slate-600) | `#ffffff` | **7.58:1** | ≥ 4.5:1 | **PASS (AAA)** |
| 3 | Muted Secondary Text on White Background | `#4b5563` (Gray-600) | `#ffffff` | **7.56:1** | ≥ 4.5:1 | **PASS (AAA)** |
| 4 | Secondary Muted Text on White Background | `#64748b` (Slate-500) | `#ffffff` | **4.76:1** | ≥ 4.5:1 | **PASS (AA)** |
| 5 | Secondary Muted Text on White Background | `#6b7280` (Gray-500) | `#ffffff` | **4.83:1** | ≥ 4.5:1 | **PASS (AA)** |
| 6 | Secondary Brand Blue on White Background | `#006da0` | `#ffffff` | **5.68:1** | ≥ 4.5:1 | **PASS (AA)** |
| 7 | Accessible Red Brand Text on White Background | `#c41f26` | `#ffffff` | **5.88:1** | ≥ 4.5:1 | **PASS (AA)** |
| 8 | Dark Red Brand Text on White Background | `#a7181e` | `#ffffff` | **8.15:1** | ≥ 4.5:1 | **PASS (AAA)** |
| 9 | Success Message Text on Light Green Box | `#15803d` (Green-700) | `#f0fdf4` (Green-50) | **5.02:1** | ≥ 4.5:1 | **PASS (AA)** |
| 10 | Warning Message Text on Light Amber Box | `#b45309` (Amber-700) | `#fffbeb` (Amber-50) | **4.54:1** | ≥ 4.5:1 | **PASS (AA)** |
| 11 | Danger / Error Text on Light Red Box | `#b91c1c` (Red-700) | `#fef2f2` (Red-50) | **6.47:1** | ≥ 4.5:1 | **PASS (AA)** |
| 12 | Info Message Text on Light Sky Box | `#0369a1` (Sky-700) | `#f0f9ff` (Sky-50) | **5.93:1** | ≥ 4.5:1 | **PASS (AA)** |
| 13 | White Text on Dark Navy Footer | `#ffffff` | `#011628` | **18.31:1** | ≥ 4.5:1 | **PASS (AAA)** |
| 14 | White Text on Dark Blue Hero Container | `#ffffff` | `#012e54` | **15.30:1** | ≥ 4.5:1 | **PASS (AAA)** |
| 15 | Slate-300 Subtitle on Dark Blue Hero Container | `#cbd5e1` | `#012e54` | **9.30:1** | ≥ 4.5:1 | **PASS (AAA)** |
| 16 | Cyan Accents on Dark Navy Footer | `#00aeee` | `#011628` | **7.58:1** | ≥ 4.5:1 | **PASS (AAA)** |
| 17 | High Contrast Dark Mode Text on Black | `#ffffff` | `#000000` | **21.00:1** | ≥ 7.0:1 | **PASS (AAA)** |
| 18 | High Contrast Light Mode Text on White | `#000000` | `#ffffff` | **21.00:1** | ≥ 7.0:1 | **PASS (AAA)** |

---

## 7. Global / System-Level Problems

The primary root causes stem from 4 core architectural color definitions:

1. **Brand Red Token (`#ea2830`):**
   - Luminance: 0.1827.
   - On white (`#ffffff`), `#ea2830` produces **4.33:1**.
   - While 4.33:1 satisfies large headings (≥ 3.0:1), it fails normal body text and link contrast requirements (< 4.5:1).
   - In addition, white text on `#ea2830` button backgrounds produces **4.33:1**, failing normal text criteria for button labels.
   - **Global Fix:** Update the primary brand color token in `app/globals.css` or introduce an accessible primary text token:
     ```css
     --color-primary-accessible: #c41f26; /* 5.88:1 on #fff, 5.88:1 with #fff text */
     --color-primary-dark: #a7181e;       /* 8.15:1 on #fff, 8.15:1 with #fff text */
     ```

2. **Legacy Cyan / Secondary Accent (`#00aeee`):**
   - Luminance: 0.3871.
   - On white (`#ffffff`), `#00aeee` produces **2.53:1**, severely failing WCAG requirements.
   - While excellent on dark navy (`#011628` -> 7.58:1), it was used on white backgrounds for links, icons, and borders.
   - **Global Fix:** Map `text-secondary` on light surfaces to `#006da0` (5.68:1) or `#004f7a` (7.80:1). Keep cyan only within dark containers (like Footer or Hero).

3. **Light Gray Utility Classes (`text-gray-400`, `text-gray-300`, `text-slate-400`):**
   - On white backgrounds, `text-gray-400` (`#9ca3af`) produces **2.54:1** (FAIL).
   - On white backgrounds, `text-gray-300` (`#d1d5db`) produces **1.83:1** (FAIL).
   - **Global Fix:** Replace with `text-slate-600` (`#475569` -> 7.58:1) or `text-gray-600` (`#4b5563` -> 7.56:1) for readable secondary/muted text on light surfaces.

4. **Input Placeholder Text Defaults:**
   - Default browser or Tailwind placeholder styling often defaults to 400-level grays (2.54:1).
   - **Global Fix:** Add a global CSS rule in `app/globals.css`:
     ```css
     input::placeholder,
     textarea::placeholder {
       color: #64748b !important; /* 4.76:1 on #ffffff */
       opacity: 1;
     }
     ```

---

## 8. Component-Level Problems

The audit revealed specific components requiring targeted styling updates:

1. **Investor Modules (`components/investors/*`):**
   - `InvestorCharterDP.jsx`, `InvestorCharterStockBroker.jsx`, `InvestorGrievance.jsx`:
     - Extensive use of `text-[#ea2830]` for numbered step badges, bullet icons, sub-headers, and contact email links on white table/card backgrounds.
     - Solution: Update to `text-[#c41f26]` (5.88:1) or `text-[#a7181e]` (8.15:1).

2. **Research Module (`app/research/[section]/ResearchSectionClient.jsx`):**
   - Tab pills, report category tags, date badges, and report download buttons.
   - Solution: Use `text-[#c41f26]` and `bg-[#c41f26]` with white text for active tab pills.

3. **Buttons & Interactive Components (`components/common/Button.js`):**
   - Primary button variant currently styles with `bg-[#ea2830] text-white` (4.33:1).
   - Solution: Enhance primary button with `bg-[#c41f26] hover:bg-[#a7181e] text-white` to guarantee **5.88:1** (and **8.15:1** on hover).

4. **Header Navigation & Badges (`components/layout/Header.js`):**
   - Top banner contact links and dropdown category highlights.
   - Solution: Ensure all navigation links and active highlights maintain at least 4.5:1.

5. **Form Controls (`components/common/Input.jsx`, `components/contact/form.jsx`, `components/partner/PartnerForm.jsx`):**
   - Helper text, field validation error text, and required field asterisks (`*`).
   - Solution: Use `text-red-600` (`#dc2626` -> 4.83:1) or `text-red-700` (`#b91c1c` -> 6.47:1) for error messages and asterisks.

---

## 9. Dynamic & State-Based Problems

All dynamic interaction states must satisfy WCAG contrast requirements:

| State | Context | Current Issue | Accessible Solution | Guaranteed Ratio |
|-------|---------|---------------|---------------------|------------------|
| **Hover** | Primary Red Button | Hovering `#ea2830` can drop contrast | `hover:bg-[#a7181e]` | **8.15:1** |
| **Focus** | Focus Ring / Outline | Default browser focus outline may be faint | `outline: 2px solid #004b87; outline-offset: 2px` | **8.91:1** |
| **Active / Selected** | Tab or Pill Selection | `bg-[#ea2830]` selected tab with white text | `bg-[#c41f26] text-white` | **5.88:1** |
| **Disabled** | Form Input / Button | Disabled text often washes out to < 2.0:1 | `text-slate-500 bg-slate-100 border-slate-300` | **4.76:1** |
| **Error** | Form Validation Message | Using light red `#f87171` | Use `text-red-700` (`#b91c1c`) or `text-red-600` (`#dc2626`) | **6.47:1** |
| **Warning** | Alert Banner | Using `text-amber-500` (2.8:1) | Use `text-amber-800` (`#92400e` -> 6.84:1) or `text-amber-700` (`#b45309` -> 4.54:1) | **4.54:1 - 6.84:1** |
| **Success** | Alert Banner / Checkmark | Using `text-emerald-500` (3.1:1) | Use `text-emerald-700` (`#047857` -> 4.88:1) or `text-green-700` (`#15803d` -> 5.02:1) | **4.88:1 - 5.02:1** |
| **Info** | Status Pill | Using `text-sky-500` (3.2:1) | Use `text-sky-700` (`#0369a1` -> 5.93:1) | **5.93:1** |
| **Placeholder** | Input Fields | Using default gray-400 (2.54:1) | Use `placeholder:text-slate-500` (`#64748b`) | **4.76:1** |
| **Loading State** | Skeleton Loaders | Pale gray text placeholders | Ensure fallback text or spinner uses `#006da0` or `#475569` | **5.68:1 - 7.58:1** |
| **High Contrast Dark** | High Contrast Mode Active | High contrast switch | Enforced via `html.high-contrast-dark` (`#ffffff` on `#000000` = 21:1) | **21.00:1** |
| **High Contrast Light** | High Contrast Mode Active | High contrast switch | Enforced via `html.high-contrast-light` (`#000000` on `#ffffff` = 21:1) | **21.00:1** |

---

## 10. Proposed Solution

We propose a two-tiered centralized and component-level solution:

### Tier 1: Centralized Design Tokens & Global CSS
1. **Adjust Primary Brand Red in `app/globals.css`:**
   - Update `--color-primary: #c41f26` (or define accessible text token `--color-primary-accessible: #c41f26`).
   - This shifts the primary brand red from 4.33:1 to **5.88:1**, immediately solving all body text, links, and button label contrast issues without deviating from the visual red brand identity.
2. **Standardize Secondary Blue Token:**
   - Retain `--color-secondary: #006da0` (5.68:1) on white surfaces.
3. **Global Placeholder Contrast:**
   - Add global placeholder rule ensuring all `<input>` and `<textarea>` elements maintain at least **4.76:1** contrast.
4. **Global Helper Utilities:**
   - Define accessible classes for status text: `.text-accessible-red`, `.text-accessible-blue`, `.text-accessible-muted`.

### Tier 2: Component & Page-Level Remediation
1. Replace hardcoded `text-[#ea2830]` on normal text across 42 files with `text-[#c41f26]` or `text-primary-dark`.
2. Replace hardcoded `#00aeee` on light surfaces with `#006da0` or `#004f7a`.
3. Replace `text-gray-400` / `text-gray-300` on white surfaces with `text-slate-600` or `text-gray-600`.
4. Replace `text-white/40` and `text-white/50` on dark blue surfaces with `text-slate-200` or `text-white/85`.

---

## 11. Risk Analysis

| Risk Area | Severity | Impact Description | Mitigation Strategy |
|-----------|----------|-------------------|---------------------|
| **Brand Identity** | Very Low | Adjusting primary red from `#ea2830` to `#c41f26` is a subtle, imperceptible shift to a slightly deeper, richer crimson that preserves 100% of brand recognition while passing WCAG AA. | Large hero headings (which only require 3.0:1) can retain `#ea2830` if desired, while body text and buttons use `#c41f26`. |
| **Visual Hierarchy** | Very Low | Darkening secondary text from gray-400 to slate-600 improves readability without overpowering primary headings. | Maintain clear font weight and size differentiation (e.g. font-medium, text-sm) to preserve hierarchical distinction. |
| **Third-Party / Chart Widgets** | None | No external chart canvas was found to have locked colors. SIP and Risk calculators render DOM text. | All calculator result cards and inputs will directly adopt accessible tokens. |
| **Dark Theme & High Contrast** | None | The existing high contrast toggles in `app/globals.css` already enforce 21:1 contrast. | Remediation will preserve and test high contrast classes to ensure no regressions. |

---

## 12. Implementation Plan

The remediation will be executed in 4 prioritized phases upon approval:

- **Phase 4.1: Global Tokens & Styles (Priority: Highest)**
  - Update `app/globals.css` with accessible primary red (`#c41f26`), secondary blue (`#006da0`), and global placeholder rules.
  - Update `components/common/Button.js` and `components/common/Input.jsx`.

- **Phase 4.2: High-Density Investor & Compliance Pages (Priority: High)**
  - Remediate `InvestorCharterDP.jsx`, `InvestorCharterStockBroker.jsx`, `InvestorGrievance.jsx`.
  - Remediate `app/investors/*` pages (11 pages).

- **Phase 4.3: Product Pages & Research Module (Priority: High)**
  - Remediate `app/products/*` (10 product pages + overview).
  - Remediate `ResearchSectionClient.jsx` and research detail views.

- **Phase 4.4: Calculators, Home Widgets & Modals (Priority: Medium)**
  - Remediate SIP and Risk calculators.
  - Remediate `Header.js`, `HeroBanner.js`, `LightSection.jsx`, `Testimonials.jsx`, and modals.

---

## 13. Verification Plan

Post-implementation verification will be conducted using multiple independent methods:

1. **Automated Mathematical Scanner:**
   - Execute `scripts/verify-all-contrast.mjs` to scan all 104 files and re-calculate every single foreground/background pair to guarantee 100% compliance (ratio ≥ 4.5:1 for normal text, ≥ 3.0:1 for large text).
2. **Next.js Production Build Validation:**
   - Run `npm run build` to verify zero syntax errors, zero lint errors, and successful static generation across all routes.
3. **Interactive & High-Contrast Mode Verification:**
   - Verify hover, focus, active, dark mode, and high-contrast modes across key interactive components.
4. **Final Implementation Report:**
   - Document all resolved issues in `WCAG_COLOR_CONTRAST_IMPLEMENTATION_REPORT.md`.

---
*Report generated in accordance with WCAG 2.1/2.2 and GIGW (Guidelines for Indian Government Websites) accessibility standards.*
