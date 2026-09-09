# Ratnakar Securities Limited — Web Application

A modern, production-grade web portal for **Ratnakar Securities Limited (RSL)** — a SEBI-registered stock broker and Depository Participant (NSDL/CDSL). Built with Next.js (App Router), React 19, and Tailwind CSS v4, the application delivers digital accessibility (WCAG 2.2 AA & GIGW 3.0), comprehensive investor relations disclosures, dynamic research reports, financial calculators, and client onboarding workflows.

---

## 🚀 Key Features

- **Products & Financial Services**: Interactive suites for Equity, Derivatives (F&O), Mutual Funds, Commodities, Fixed Income Bonds, Wealth Management, SLBM, HNI, and NRI investment services.
- **Investor Relations & Regulatory Disclosures**:
  - Depository Participant (DP) & Stock Broker Investor Charters.
  - Live monthly and annual investor complaint disposal trends.
  - Escalation matrices, SCORES/SMARTODR grievance redressal mechanisms, and statutory ROC/SEBI filings.
  - Corporate governance, Board of Directors profiles, and KMP disclosures.
- **Research & Advisory Center**: Real-time downloadable market analysis reports, IPO reviews, fundamental papers, and announcements with Indian Financial Year (FY) filtering.
- **Financial Calculators**:
  - SIP Calculator (Monthly, Weekly, Quarterly compound growth projections).
  - Risk Profile Calculator (5-factor investor risk capacity evaluation).
- **Accessibility & Inclusion (GIGW 3.0 & WCAG 2.2 Level AA)**:
  - Accessibility Toolbar with High-Contrast Dark/Light toggles, Font Scaling (A-, A, A+), and Animation Pause/Play controls.
  - Web Speech API Audio & Canvas Visual CAPTCHA.
  - Accessible Skip-to-Main-Content bypass link and global Quick Search modal (`Ctrl+K` / `Cmd+K`).
- **SEBI Regulatory Modals**:
  - Risk Disclosure on Derivatives Trading.
  - Dynamic startup advisory popup broadcast system.
  - Backoffice & Trading login directory and Mobile App suite choosers.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 / React DOM 19 |
| **Styling** | Tailwind CSS v4 / PostCSS |
| **Icons** | Lucide React / React Icons (FontAwesome 6) |
| **Typography** | Google Poppins via `next/font` |
| **SEO & Schemas** | OpenGraph, Twitter Cards, Schema.org JSON-LD |

---

## 📁 Project Architecture

```
ratnakarsecurities/
├── app/                                 # Next.js App Router root
│   ├── about/                           # About Us, Leadership & History
│   ├── accessibility-statement/         # Digital Accessibility Statement
│   ├── contact/                         # Inquiry form, Maps & Escalation Matrix
│   ├── downloads/                       # 3-tier Downloads Resource Center
│   ├── investor-charter-stock-broker/   # Stock Broker SEBI Charter Route
│   ├── investor-grievance/              # Redressal & GRC/Arbitration Portal
│   ├── investors/                       # Statutory & ROC Disclosures Subroutes
│   ├── nomination/                      # Demat & Trading Account Nomination
│   ├── partner-with-us/                 # Franchise & Sub-broker Onboarding
│   ├── privacy-policy/                  # Privacy & Data Protection Policy
│   ├── products/                        # Product overview & dynamic [slug] routes
│   ├── refund-and-cancellation/         # Payment & Refund Policy
│   ├── research/                        # Dynamic Research Reports by [section]
│   ├── risk-calculator/                 # Risk Profile Assessment Tool
│   ├── sip-calculator/                  # SIP Growth Calculator
│   ├── sitemap/                         # Accessible HTML Site Map
│   ├── static/investor-charter/         # Depository Participant Charter
│   ├── error.js                         # Segment Error Boundary
│   ├── global-error.js                  # Root Layout Error Boundary
│   ├── layout.js                        # Master HTML Shell & Schema injection
│   ├── manifest.js                      # Progressive Web App Manifest
│   ├── not-found.js                     # Custom 404 Error Page
│   ├── page.js                          # Main Home Landing Page
│   ├── robots.js                        # Dynamic robots.txt
│   └── sitemap.js                       # Dynamic XML Sitemap (/sitemap.xml)
├── components/                          # Modular UI Components
│   ├── common/                          # Reusable buttons, inputs, modals, accessibility
│   ├── contact/                         # Contact inquiry forms and branch tables
│   ├── home/                            # Home page sections (Hero, Stats, Services, Steps)
│   ├── investors/                       # DP & Stock Broker Charters and grievance tables
│   ├── layout/                          # Header, Mega-menus, Footer, Navigation icons
│   ├── modals/                          # Backoffice, ChooseApp, RiskDisclosure, StartupPopup
│   ├── partner/                         # Partnership lead submission form
│   └── FloatingMobileTrading.js         # Floating mobile trading modal trigger
├── constants/                           # Site-wide constants
│   ├── metadata.js                      # SEO metadata generator & base configs
│   ├── site.js                          # Corporate info, SEBI numbers, corporate address
│   └── social.js                        # Social network links and vector icons
├── lib/                                 # Core utility helpers
│   ├── jsonld.js                        # Schema.org structured JSON-LD generators
│   └── utils.js                         # Tailwind merging (cn) & Indian locale formatters
├── public/                              # Static public assets (images, icons, vectors)
├── scripts/                             # CI/CD and verification scripts
│   └── verify-accessibility.mjs         # Continuous WCAG & GIGW accessibility audit
├── services/                            # Backend API Client Layer
│   ├── config.js                        # Environment API base URL resolver
│   ├── contact.js                       # Contact & Partner lead submission API
│   ├── downloads.js                     # Categorized forms & documents API
│   ├── dpComplaints.js                  # DP complaints trends API
│   ├── investors.js                     # Investor statutory documents API
│   ├── popup.js                         # Startup advisory announcement API
│   ├── research.js                      # Market research reports API
│   ├── sebiComplaints.js                # Stock Broker SEBI complaints API
│   └── testimonials.js                  # Client reviews API
└── next.config.mjs                      # Next.js optimization and security headers
```

---

## ⚙️ Environment Configuration

Create a `.env` or `.env.local` file in the project root based on `.env.example`:

```env
# Runtime Application Environment: 'local' | 'stage' | 'production'
NEXT_PUBLIC_APP_ENV=local

# Backend REST API Gateway Base URL Override (Optional)
NEXT_PUBLIC_API_URL=http://localhost:6010/api

# Public Canonical Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:4005
```

> [!NOTE]
> Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the client-side bundle. Never store secret keys, database passwords, or private API tokens in client-exposed variables.

---

## 💻 Getting Started (Local Development)

### 1. Prerequisites
- **Node.js**: v18.18.0 or higher (v20+ LTS recommended)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/harsh-anaxistech/ratnakarsecurities.git
cd ratnakarsecurities

# Install project dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
The application will launch on [http://localhost:4005](http://localhost:4005).

---

## 🏗️ Production Build & Deployment

### Build Application
```bash
npm run build
```
This optimizes and compiles the Next.js App Router routes, pre-renders static pages (SSG), and generates production bundles.

### Start Production Server
```bash
npm run start
```

---

## 🔍 Verification & Quality Assurance

### Linting
```bash
npm run lint
```

### Accessibility Compliance Verification
To run the continuous WCAG 2.2 AA and GIGW 3.0 accessibility validation scanner:
```bash
node scripts/verify-accessibility.mjs
```

---

## 📜 Regulatory & Compliance Disclosures

- **SEBI Registration No. (Stock Broker)**: `INZ000123456`
- **Depository Participant**: NSDL / CDSL
- **Exchange Memberships**: National Stock Exchange of India (NSE), Bombay Stock Exchange (BSE), Multi Commodity Exchange (MCX), National Commodity and Derivatives Exchange (NCDEX)
- **Corporate Identity Number (CIN)**: `U65990MH1995PLC123456`

---

## 🤝 Developer Handover Notes

1. **Strict Separation of Concerns**: All backend communication is encapsulated inside `services/`. UI components must consume service functions rather than issuing direct `fetch` calls.
2. **Accessible Form Handling**: Form inputs utilize standard contrast tokens, custom accessible select components, and visual/audio captchas with keyboard autofocusing on validation error.
3. **SEO & Metadata**: Every page route exports static or dynamic metadata generated via `generatePageMetadata` in `constants/metadata.js` to ensure canonical URLs and OpenGraph tags are consistently maintained.
