import fs from 'fs';
import path from 'path';

const filesToRemediate = [
  'app/accessibility-statement/page.jsx',
  'app/downloads/page.js',
  'app/global-error.js',
  'app/investors/annual-return/page.jsx',
  'app/investors/board-of-directors/page.jsx',
  'app/investors/disclosure-of-contact-details-of-key-managerial-personnel/page.jsx',
  'app/investors/disclosures-of-material-events-or-information/page.jsx',
  'app/investors/financial-information-and-annual-report/page.jsx',
  'app/investors/newspaper-publication/page.jsx',
  'app/investors/policies/page.jsx',
  'app/investors/shareholding-pattern/page.jsx',
  'app/investors/statutory-and-registration-certificate-documents/page.jsx',
  'app/nomination/page.jsx',
  'app/privacy-policy/page.jsx',
  'app/products/bonds/page.jsx',
  'app/products/commodities/page.jsx',
  'app/products/derivatives/page.jsx',
  'app/products/equity/page.jsx',
  'app/products/hnis/page.jsx',
  'app/products/mutual-funds/page.jsx',
  'app/products/nris/page.jsx',
  'app/products/overview/page.jsx',
  'app/products/slbm/page.jsx',
  'app/products/wealth-management/page.jsx',
  'app/products/[slug]/page.jsx',
  'app/refund-and-cancellation/page.jsx',
  'app/research/[section]/ResearchSectionClient.jsx',
  'app/risk-calculator/page.jsx',
  'app/sip-calculator/page.jsx',
  'app/sitemap/page.jsx',
  'components/common/AccessibleCaptcha.jsx',
  'components/common/ScrollToTop.js',
  'components/home/HeroBanner.js',
  'components/home/LightSection.jsx',
  'components/home/Testimonials.jsx',
  'components/investors/InvestorCharterDP.jsx',
  'components/investors/InvestorCharterStockBroker.jsx',
  'components/investors/InvestorGrievance.jsx',
  'components/layout/Header.js',
  'components/partner/PartnerForm.jsx'
];

let totalReplacements = 0;

filesToRemediate.forEach(relPath => {
  const fullPath = path.resolve(relPath);
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${fullPath}`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  const original = content;

  // 1. Replace text-[#ea2830] with text-[#c41f26]
  content = content.replace(/text-\[\#ea2830\]/g, () => {
    totalReplacements++;
    return 'text-[#c41f26]';
  });

  // 2. Replace bg-[#ea2830] with bg-[#c41f26]
  content = content.replace(/bg-\[\#ea2830\]/g, () => {
    totalReplacements++;
    return 'bg-[#c41f26]';
  });

  // 3. Replace text-[#00aeee] or border-[#00aeee] on light contexts
  // Note: if file is Footer.js or HeroBanner on dark background, keep or use cyan, but in others replace with #006da0
  if (!relPath.includes('Footer.js')) {
    content = content.replace(/text-\[\#00aeee\]/g, () => {
      totalReplacements++;
      return 'text-[#006da0]';
    });
    content = content.replace(/border-\[\#00aeee\]/g, () => {
      totalReplacements++;
      return 'border-[#006da0]';
    });
    content = content.replace(/bg-\[\#00aeee\]/g, () => {
      totalReplacements++;
      return 'bg-[#006da0]';
    });
  }

  // 4. In specific components, replace light gray text on light background
  if (!relPath.includes('Footer.js') && !relPath.includes('HeroBanner.js')) {
    content = content.replace(/text-gray-400\b/g, (match, offset) => {
      // Check surrounding lines for dark background context
      const before = content.slice(Math.max(0, offset - 200), offset);
      if (before.includes('bg-[#01') || before.includes('bg-dark') || before.includes('bg-slate-900') || before.includes('bg-black')) {
        return match; // keep on dark
      }
      totalReplacements++;
      return 'text-slate-600';
    });

    content = content.replace(/text-gray-300\b/g, (match, offset) => {
      const before = content.slice(Math.max(0, offset - 200), offset);
      if (before.includes('bg-[#01') || before.includes('bg-dark') || before.includes('bg-slate-900') || before.includes('bg-black')) {
        return match; // keep on dark
      }
      totalReplacements++;
      return 'text-slate-600';
    });

    content = content.replace(/text-slate-300\b/g, (match, offset) => {
      const before = content.slice(Math.max(0, offset - 200), offset);
      if (before.includes('bg-[#01') || before.includes('bg-dark') || before.includes('bg-slate-900') || before.includes('bg-black')) {
        return match; // keep on dark
      }
      totalReplacements++;
      return 'text-slate-600';
    });
  }

  // 5. Replace text-white/40 or text-white/50 with text-white/85 or text-slate-200
  content = content.replace(/text-white\/(30|40|50|60)\b/g, () => {
    totalReplacements++;
    return 'text-slate-200';
  });

  // 6. Replace placeholder-gray-400 with placeholder-slate-500
  content = content.replace(/placeholder:text-(gray|slate|zinc)-(300|400)/g, () => {
    totalReplacements++;
    return 'placeholder:text-slate-500';
  });
  content = content.replace(/placeholder-(gray|slate|zinc)-(300|400)/g, () => {
    totalReplacements++;
    return 'placeholder-slate-500';
  });

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated: ${relPath}`);
  }
});

console.log(`\nRemediation complete. Total replacements made: ${totalReplacements}`);
