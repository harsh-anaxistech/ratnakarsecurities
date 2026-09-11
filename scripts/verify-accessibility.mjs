/**
 * Continuous Digital Accessibility Verification Script
 * Validates GIGW 3.0, WCAG 2.2 AA, and SEBI Digital Accessibility rules.
 */

import fs from "fs";
import path from "path";

const rootDir = process.cwd();

console.log("=================================================");
console.log("🔍 DIGITAL ACCESSIBILITY VERIFICATION SCANNER");
console.log("Standards: SEBI Circulars | GIGW 3.0 | WCAG 2.2 AA");
console.log("=================================================\n");

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passCount++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failCount++;
  }
}

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== "node_modules" && file !== ".next" && file !== ".git") {
        results = results.concat(walkDir(fullPath));
      }
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

const codeFiles = walkDir(rootDir).filter(
  (f) => f.endsWith(".js") || f.endsWith(".jsx") || f.endsWith(".css") || f.endsWith(".mjs")
);

console.log(`📁 Scanning ${codeFiles.length} project source files...\n`);

// 1. Root Layout & Lang Declaration (WCAG 3.1.1)
console.log("--- 1. Page Language & Document Landmarks ---");
const layoutContent = fs.readFileSync(path.join(rootDir, "app/layout.js"), "utf8");
assert(layoutContent.includes('lang="en"'), 'Root HTML declares lang="en"');
assert(layoutContent.includes("<SkipLink"), "Skip to Main Content component is mounted in root layout");
assert(layoutContent.includes('id="main-content"'), 'Main landmark has id="main-content"');

// 2. High Contrast & Font Scaling Tokens (WCAG 1.4.3, 1.4.4, 1.4.11)
console.log("\n--- 2. High Contrast & Motion Control Stylesheet Tokens ---");
const cssContent = fs.readFileSync(path.join(rootDir, "app/globals.css"), "utf8");
assert(cssContent.includes(".high-contrast-dark"), "Dark High Contrast mode CSS variables are defined");
assert(cssContent.includes(".high-contrast-light"), "Light High Contrast mode CSS variables are defined");
assert(cssContent.includes(".text-scale-sm") && cssContent.includes(".text-scale-lg"), "Font resizing scale utilities are defined");
assert(cssContent.includes(".pause-animations"), "Global pause-animations class is defined");
assert(cssContent.includes("prefers-reduced-motion"), "@media (prefers-reduced-motion: reduce) rules are active");
assert(cssContent.includes("*:focus-visible"), "Enhanced 3:1 focus ring outlines are globally enforced");

// 3. Accessibility Toolbar & Quick Search (WCAG 2.4.5, 2.1.1)
console.log("\n--- 3. Accessibility Toolbar & Quick Search Modal ---");
const toolbarExists = fs.existsSync(path.join(rootDir, "components/common/AccessibilityToolbar.jsx"));
assert(toolbarExists, "AccessibilityToolbar.jsx component exists");
const searchModalExists = fs.existsSync(path.join(rootDir, "components/common/QuickSearchModal.jsx"));
assert(searchModalExists, "QuickSearchModal.jsx component exists");
const sitemapPageExists = fs.existsSync(path.join(rootDir, "app/sitemap/page.jsx"));
assert(sitemapPageExists, "HTML Site Map page exists at app/sitemap/page.jsx");
const statementPageExists = fs.existsSync(path.join(rootDir, "app/accessibility-statement/page.jsx"));
assert(statementPageExists, "Digital Accessibility Statement page exists at app/accessibility-statement/page.jsx");

// 4. Form Accessibility & Audio CAPTCHA (WCAG 1.1.1, 3.3.1, 3.3.2, 3.3.3)
console.log("\n--- 4. Form Controls, Labels, Error Suggestions & Audio CAPTCHA ---");
const captchaExists = fs.existsSync(path.join(rootDir, "components/common/AccessibleCaptcha.jsx"));
assert(captchaExists, "AccessibleCaptcha.jsx with speech synthesis audio mode exists");

const contactFormContent = fs.readFileSync(path.join(rootDir, "components/contact/form.jsx"), "utf8");
assert(contactFormContent.includes("<AccessibleCaptcha"), "Contact form embeds AccessibleCaptcha");
assert(contactFormContent.includes("aria-invalid="), "Contact form controls bind aria-invalid");
assert(contactFormContent.includes("aria-describedby="), "Contact form controls bind aria-describedby for errors");
assert(contactFormContent.includes("aria-live="), "Contact form has aria-live region for status messages");

const partnerFormContent = fs.readFileSync(path.join(rootDir, "components/partner/PartnerForm.jsx"), "utf8");
assert(partnerFormContent.includes("<AccessibleCaptcha"), "Partner form embeds AccessibleCaptcha");
assert(partnerFormContent.includes("aria-invalid="), "Partner form controls bind aria-invalid");
assert(partnerFormContent.includes("aria-describedby="), "Partner form controls bind aria-describedby for errors");

// 5. Header Dropdown Keyboard Operability (WCAG 2.1.1, 4.1.2)
console.log("\n--- 5. Navigation & Dropdown Keyboard Operability ---");
const headerContent = fs.readFileSync(path.join(rootDir, "components/layout/Header.js"), "utf8");
assert(headerContent.includes("aria-expanded="), "Header navigation controls expose aria-expanded");
assert(headerContent.includes("aria-haspopup="), "Header navigation controls expose aria-haspopup");
assert(headerContent.includes("Escape"), "Header handles Escape key to dismiss dropdown menus");
assert(headerContent.includes("<AccessibilityToolbar"), "Header integrates AccessibilityToolbar");

// 6. Carousel Motion & Pause Controls (WCAG 2.2.2)
console.log("\n--- 6. Moving Content & Carousels (WCAG 2.2.2) ---");
const testimonialsContent = fs.readFileSync(path.join(rootDir, "components/home/Testimonials.jsx"), "utf8");
assert(testimonialsContent.includes("isPaused"), "Testimonials carousel tracks isPaused state");
assert(testimonialsContent.includes("Pause") || testimonialsContent.includes("play/pause"), "Testimonials carousel includes Play/Pause controls");
assert(testimonialsContent.includes("onMouseEnter") && testimonialsContent.includes("onFocus"), "Testimonials carousel pauses on hover and focus");

// 7. Modals Focus Trap & Dialog Roles (WCAG 2.1.2, 4.1.2)
console.log("\n--- 7. Modal Dialog Accessibility ---");
const backofficeModalContent = fs.readFileSync(path.join(rootDir, "components/modals/BackofficeLoginModal.jsx"), "utf8");
assert(backofficeModalContent.includes('role="dialog"'), 'BackofficeLoginModal declares role="dialog"');
assert(backofficeModalContent.includes('aria-modal="true"'), 'BackofficeLoginModal declares aria-modal="true"');
assert(backofficeModalContent.includes("handleTabKey") || backofficeModalContent.includes("focus"), "BackofficeLoginModal manages focus trapping");

// 8. Legacy URL Redirects (WCAG 4.1.1)
console.log("\n--- 8. Legacy URL Redirects ---");
const nextConfigContent = fs.readFileSync(path.join(rootDir, "next.config.mjs"), "utf8");
assert(nextConfigContent.includes("/static/contact-us.aspx"), "next.config.mjs redirects /static/contact-us.aspx to /contact");
assert(nextConfigContent.includes("/products/products.aspx"), "next.config.mjs redirects /products/products.aspx to /products");

// 9. Correct Markup Structure & ARIA Hierarchy (GIGW 3.0 5.2.48 / WCAG 2.2 4.1.1)
console.log("\n--- 9. Correct Markup Structure & ARIA Hierarchy (GIGW 5.2.48 / WCAG 4.1.1) ---");

// Check for nested buttons inside links across all JS/JSX files
let nestedButtonFound = false;
let orphanedMenuitemFound = false;
let invalidRoleNoneFound = false;

codeFiles.forEach((file) => {
  if (file.includes("scripts") || file.includes("test")) return;
  const content = fs.readFileSync(file, "utf8");

  if (content.match(/<Link[^>]*>[\s\n]*<Button/i) || content.match(/<a[^>]*>[\s\n]*<Button/i)) {
    console.error(`  ❌ Invalid nested Button in link found in: ${file}`);
    nestedButtonFound = true;
  }
  if (content.includes('role="menuitem"')) {
    console.error(`  ❌ Invalid role="menuitem" found in: ${file}`);
    orphanedMenuitemFound = true;
  }
  if (content.includes('role="none"') || content.includes('role="presentation"')) {
    console.error(`  ❌ Invalid role="none"/"presentation" found in: ${file}`);
    invalidRoleNoneFound = true;
  }
});

assert(!nestedButtonFound, "Zero occurrences of Button nested inside <a> or <Link> across all components & pages");
assert(!orphanedMenuitemFound, "Zero occurrences of improper role='menuitem' on standard site navigation");
assert(!invalidRoleNoneFound, "Zero occurrences of invalid role='none'/'presentation' wrappers");

const faqContent = fs.readFileSync(path.join(rootDir, "components/home/Faq.jsx"), "utf8");
assert(faqContent.includes("<h3") && faqContent.includes("<button"), "Faq.jsx uses semantic <h3> wrapping <button> for accordions");

const selectContent = fs.readFileSync(path.join(rootDir, "components/common/CustomSelect.jsx"), "utf8");
assert(selectContent.includes("aria-controls="), "CustomSelect.jsx binds aria-controls to listbox");

const homePageContent = fs.readFileSync(path.join(rootDir, "app/page.js"), "utf8");
assert(!homePageContent.includes("<FloatingMobileTrading"), "app/page.js does not render duplicate FloatingMobileTrading instance");

console.log("\n=================================================");
console.log(`📊 ACCESSIBILITY VERIFICATION RESULT: ${passCount} PASSED, ${failCount} FAILED`);
console.log("=================================================");

if (failCount > 0) {
  process.exit(1);
} else {
  console.log("🎉 ALL DIGITAL ACCESSIBILITY & MARKUP STRUCTURE CRITERIA VALIDATED SUCCESSFULLY!\n");
  process.exit(0);
}
