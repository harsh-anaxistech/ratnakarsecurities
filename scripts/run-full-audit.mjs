import puppeteer from 'puppeteer-core';
import fs from 'fs';

// Accurate color conversion and WCAG 2.1 contrast formula
function sRGBtoLin(colorChannel) {
  colorChannel /= 255;
  if (colorChannel <= 0.03928) return colorChannel / 12.92;
  return Math.pow((colorChannel + 0.055) / 1.055, 2.4);
}

function getLuminance(r, g, b) {
  return 0.2126 * sRGBtoLin(r) + 0.7152 * sRGBtoLin(g) + 0.0722 * sRGBtoLin(b);
}

function contrastRatio(lum1, lum2) {
  const l1 = Math.max(lum1, lum2);
  const l2 = Math.min(lum1, lum2);
  return (l1 + 0.05) / (l2 + 0.05);
}

// Convert lab/oklch/rgb to rgb using browser canvas or computed styles
async function auditProject() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const routes = [
    '/',
    '/about',
    '/accessibility-statement',
    '/contact',
    '/downloads',
    '/investor-charter-stock-broker',
    '/investor-grievance',
    '/investors',
    '/investors/annual-return',
    '/investors/board-of-directors',
    '/investors/complaints-trends',
    '/investors/disclosure-of-contact-details-of-key-managerial-personnel',
    '/investors/disclosures-of-material-events-or-information',
    '/investors/financial-information-and-annual-report',
    '/investors/investor-grievance',
    '/investors/newspaper-publication',
    '/investors/policies',
    '/investors/shareholding-pattern',
    '/investors/statutory-and-registration-certificate-documents',
    '/nomination',
    '/partner',
    '/partner-with-us',
    '/privacy-policy',
    '/products',
    '/products/equity',
    '/products/derivatives',
    '/products/mutual-funds',
    '/products/bonds',
    '/products/commodities',
    '/products/hnis',
    '/products/nris',
    '/products/overview',
    '/products/slbm',
    '/products/wealth-management',
    '/refund-and-cancellation',
    '/research',
    '/risk-calculator',
    '/sip-calculator',
    '/sitemap'
  ];

  const fullAuditResults = [];

  for (const route of routes) {
    const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 800 });
    
    try {
      await page.goto(`http://localhost:4005${route}`, { waitUntil: 'networkidle0', timeout: 15000 });

      const pageScan = await page.evaluate(() => {
        const issues = [];
        const checkedElements = [];

        // Helper to parse color via canvas
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext('2d');

        function parseColorToRgb(colorStr) {
          if (!colorStr || colorStr === 'transparent' || colorStr === 'rgba(0, 0, 0, 0)') return null;
          ctx.clearRect(0, 0, 1, 1);
          ctx.fillStyle = colorStr;
          ctx.fillRect(0, 0, 1, 1);
          const data = ctx.getImageData(0, 0, 1, 1).data;
          return { r: data[0], g: data[1], b: data[2], a: data[3] / 255, raw: colorStr };
        }

        function getEffectiveBg(el) {
          let curr = el;
          const bgStack = [];
          while (curr) {
            const st = window.getComputedStyle(curr);
            const parsed = parseColorToRgb(st.backgroundColor);
            if (parsed && parsed.a > 0) {
              bgStack.push(parsed);
              if (parsed.a >= 0.98) break; // opaque
            }
            curr = curr.parentElement;
          }
          // If top not opaque, assume body white
          if (bgStack.length === 0 || bgStack[bgStack.length - 1].a < 0.98) {
            bgStack.push({ r: 255, g: 255, b: 255, a: 1, raw: '#ffffff' });
          }

          // Alpha blend bottom-up
          let r = 255, g = 255, b = 255;
          for (let i = bgStack.length - 1; i >= 0; i--) {
            const layer = bgStack[i];
            r = Math.round(layer.r * layer.a + r * (1 - layer.a));
            g = Math.round(layer.g * layer.a + g * (1 - layer.a));
            b = Math.round(layer.b * layer.a + b * (1 - layer.a));
          }
          return { r, g, b, hex: `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}` };
        }

        const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, label, strong, em, td, th, li, input, textarea');
        
        for (const el of elements) {
          const text = el.innerText || el.textContent || (el.placeholder || '');
          if (!text.trim() || el.children.length > 3) continue; // skip large container wrappers
          
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0) continue; // invisible
          
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;

          const fgColor = style.color;
          const fgParsed = parseColorToRgb(fgColor);
          const bgInfo = getEffectiveBg(el);

          // Check if color format is modern lab/oklch (causing 1:1 checker bugs)
          const isModernColorSpace = fgColor.startsWith('lab(') || fgColor.startsWith('oklch(') || style.backgroundColor.startsWith('lab(') || style.backgroundColor.startsWith('oklch(');

          // Calculate contrast
          let contrast = 0;
          if (fgParsed) {
            const sRGBtoLin = (c) => {
              c /= 255;
              return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
            };
            const l1 = 0.2126 * sRGBtoLin(fgParsed.r) + 0.7152 * sRGBtoLin(fgParsed.g) + 0.0722 * sRGBtoLin(fgParsed.b);
            const l2 = 0.2126 * sRGBtoLin(bgInfo.r) + 0.7152 * sRGBtoLin(bgInfo.g) + 0.0722 * sRGBtoLin(bgInfo.b);
            contrast = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
          }

          const fontSize = parseFloat(style.fontSize);
          const isBold = parseInt(style.fontWeight) >= 700 || style.fontWeight === 'bold';
          const isLargeText = fontSize >= 24 || (fontSize >= 18.66 && isBold);
          const minRequired = isLargeText ? 3.0 : 4.5;

          const item = {
            tag: el.tagName,
            text: text.trim().substring(0, 50),
            className: el.className,
            fgRaw: fgColor,
            fgHex: fgParsed ? `#${((1 << 24) + (fgParsed.r << 16) + (fgParsed.g << 8) + fgParsed.b).toString(16).slice(1)}` : 'unknown',
            bgHex: bgInfo.hex,
            contrast: contrast,
            isModernColorSpace,
            isLargeText,
            minRequired,
            passesAA: contrast >= minRequired,
            passesAAA: contrast >= (isLargeText ? 4.5 : 7.0)
          };

          if (isModernColorSpace || !item.passesAA) {
            issues.push(item);
          }
          checkedElements.push(item);
        }

        return {
          totalChecked: checkedElements.length,
          issuesCount: issues.length,
          modernColorSpaceCount: issues.filter(i => i.isModernColorSpace).length,
          contrastFailures: issues.filter(i => !i.passesAA),
          sampleIssues: issues.slice(0, 15)
        };
      });

      fullAuditResults.push({
        route,
        ...pageScan
      });
      console.log(`Audited ${route}: ${pageScan.totalChecked} elements checked, ${pageScan.modernColorSpaceCount} modern color space (causing 1:1 bug), ${pageScan.contrastFailures.length} actual contrast failures.`);
    } catch (e) {
      console.error(`Error auditing ${route}:`, e.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  fs.writeFileSync('scripts/project-audit-summary.json', JSON.stringify(fullAuditResults, null, 2));
  console.log('Project audit completed and saved to scripts/project-audit-summary.json');
}

auditProject().catch(console.error);
