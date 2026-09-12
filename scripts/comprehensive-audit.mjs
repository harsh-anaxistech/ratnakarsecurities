import fs from 'fs';
import path from 'path';

function hexToRgb(hex) {
  let cleaned = hex.replace('#', '').trim();
  if (cleaned.length === 3) cleaned = cleaned.split('').map(c => c + c).join('');
  if (cleaned.length === 8) cleaned = cleaned.substring(0, 6);
  const num = parseInt(cleaned, 16);
  if (isNaN(num)) return { r: 0, g: 0, b: 0 };
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export function getContrastRatio(hex1, hex2) {
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);
  const l1 = getLuminance(c1.r, c1.g, c1.b);
  const l2 = getLuminance(c2.r, c2.g, c2.b);
  const max = Math.max(l1, l2);
  const min = Math.min(l1, l2);
  return (max + 0.05) / (min + 0.05);
}

const colorMap = {
  'white': '#ffffff',
  'black': '#000000',
  'gray-50': '#f9fafb',
  'gray-100': '#f3f4f6',
  'gray-200': '#e5e7eb',
  'gray-300': '#d1d5db',
  'gray-400': '#9ca3af',
  'gray-500': '#6b7280',
  'gray-600': '#4b5563',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
  'slate-50': '#f8fafc',
  'slate-100': '#f1f5f9',
  'slate-200': '#e2e8f0',
  'slate-300': '#cbd5e1',
  'slate-400': '#94a3b8',
  'slate-500': '#64748b',
  'slate-600': '#475569',
  'slate-700': '#334155',
  'slate-800': '#1e293b',
  'slate-900': '#0f172a',
  'zinc-400': '#a1a1aa',
  'zinc-500': '#71717a',
  'zinc-600': '#52525b',
  'zinc-700': '#3f3f46',
  'red-50': '#fef2f2',
  'red-100': '#fee2e2',
  'red-200': '#fecaca',
  'red-400': '#f87171',
  'red-500': '#ef4444',
  'red-600': '#dc2626',
  'red-700': '#b91c1c',
  'red-800': '#991b1b',
  'emerald-50': '#ecfdf5',
  'emerald-100': '#d1fae5',
  'emerald-400': '#34d399',
  'emerald-500': '#10b981',
  'emerald-600': '#059669',
  'emerald-700': '#047857',
  'green-50': '#f0fdf4',
  'green-100': '#dcfce7',
  'green-500': '#22c55e',
  'green-600': '#16a34a',
  'green-700': '#15803d',
  'green-800': '#166534',
  'blue-50': '#eff6ff',
  'blue-100': '#dbeafe',
  'blue-400': '#60a5fa',
  'blue-500': '#3b82f6',
  'blue-600': '#2563eb',
  'blue-700': '#1d4ed8',
  'sky-400': '#38bdf8',
  'sky-500': '#0ea5e9',
  'sky-600': '#0284c7',
  'amber-50': '#fffbeb',
  'amber-100': '#fef3c7',
  'amber-400': '#fbbf24',
  'amber-500': '#f59e0b',
  'amber-600': '#d97706',
  'amber-700': '#b45309',
  'amber-800': '#92400e',
  'yellow-400': '#facc15',
  'yellow-500': '#eab308',
  'yellow-600': '#ca8a04',
  // Brand tokens
  'primary': '#ea2830',
  'primary-dark': '#a7181e',
  'secondary': '#006da0',
  'secondary-dark': '#004f7a',
  'light-blue': '#012e54',
  'dark-blue': '#012441',
  'dark-navy': '#011628',
};

const allFiles = [];
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(f)) walk(p);
    } else if (/\.(jsx?|tsx?|css)$/.test(f)) {
      allFiles.push(p);
    }
  }
}

walk('./app');
walk('./components');
walk('./constants');

console.log(`Auditing ${allFiles.length} files...`);

// Let's analyze all color occurrences in each file
const findings = [];

for (const filePath of allFiles) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const relPath = path.relative('.', filePath).replace(/\\/g, '/');

  // Track parent background context within file if detectable
  let defaultBg = '#ffffff';
  if (filePath.includes('Footer.js')) {
    defaultBg = '#011628';
  } else if (filePath.includes('Hero') || filePath.includes('banner')) {
    // context may be dark or light
  }

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    const trimmed = line.trim();

    // Check specific patterns in className or styles
    // 1. Text color matching
    // text-[color], text-[#...], placeholder:text-..., placeholder:text-[#...]
    
    // Pattern 1: text-gray-400 / text-slate-400 / text-zinc-400 / text-gray-300 / text-slate-300 on white / light bg
    const textGray400 = line.match(/text-(gray|slate|zinc|neutral)-(300|400)/g);
    if (textGray400) {
      // Determine if line or file is inside dark bg
      const isDarkContext = line.includes('bg-[#01') || line.includes('bg-dark') || line.includes('bg-slate-900') || line.includes('bg-gray-900') || line.includes('bg-black') || filePath.includes('Footer.js');
      if (!isDarkContext) {
        textGray400.forEach(match => {
          const colorKey = match.replace('text-', '');
          const hex = colorMap[colorKey] || '#9ca3af';
          const bg = '#ffffff';
          const ratio = getContrastRatio(hex, bg);
          findings.push({
            file: relPath,
            line: lineNum,
            element: 'Text/Label',
            matchedClass: match,
            textColor: hex,
            textName: match,
            bgColor: bg,
            bgName: 'White (#ffffff)',
            ratio: ratio,
            required: 4.5,
            pass: ratio >= 4.5,
            level: 'Critical/High',
            wcag: 'WCAG 1.4.3 Contrast (Minimum)',
            recommended: '#475569 (text-slate-600) or #4b5563 (text-gray-600)',
            newRatio: getContrastRatio('#475569', '#ffffff'),
            codeSnippet: trimmed
          });
        });
      }
    }

    // Pattern 2: Cyan / #00aeee text or bg
    if (line.includes('#00aeee') || (line.includes('text-secondary') && !line.includes('secondary-dark'))) {
      const isDarkContext = line.includes('bg-[#01') || line.includes('bg-dark') || line.includes('bg-slate-900') || filePath.includes('Footer.js');
      const hex = '#00aeee';
      const bg = isDarkContext ? '#012e54' : '#ffffff';
      const ratio = getContrastRatio(hex, bg);
      if (bg === '#ffffff') {
        findings.push({
          file: relPath,
          line: lineNum,
          element: 'Text/Icon/Cyan Element',
          matchedClass: '#00aeee or text-secondary',
          textColor: hex,
          textName: 'Cyan (#00aeee)',
          bgColor: bg,
          bgName: 'White (#ffffff)',
          ratio: ratio,
          required: 4.5,
          pass: ratio >= 4.5,
          level: 'Critical',
          wcag: 'WCAG 1.4.3 Contrast (Minimum)',
          recommended: '#006da0 (text-[#006da0]) or #0284c7',
          newRatio: getContrastRatio('#006da0', '#ffffff'),
          codeSnippet: trimmed
        });
      }
    }

    // Pattern 3: #ea2830 (brand red) normal body text on white
    // Note: #ea2830 on white is 4.33:1 (< 4.5:1). It passes large text (>= 3.0:1) but fails normal text (< 18pt/24px or < 14pt bold).
    if ((line.includes('text-[#ea2830]') || line.includes('text-primary')) && !line.includes('text-2xl') && !line.includes('text-3xl') && !line.includes('text-4xl') && !line.includes('text-5xl') && !line.includes('text-6xl')) {
      const isDarkContext = line.includes('bg-[#01') || filePath.includes('Footer.js');
      if (!isDarkContext) {
        const hex = '#ea2830';
        const bg = '#ffffff';
        const ratio = getContrastRatio(hex, bg);
        findings.push({
          file: relPath,
          line: lineNum,
          element: 'Brand Red Normal Text / Link',
          matchedClass: 'text-[#ea2830] / text-primary',
          textColor: hex,
          textName: 'Primary Red (#ea2830)',
          bgColor: bg,
          bgName: 'White (#ffffff)',
          ratio: ratio,
          required: 4.5,
          pass: false,
          level: 'High',
          wcag: 'WCAG 1.4.3 Contrast (Minimum)',
          recommended: '#dc2626 (text-red-600) or #c41f26 or #b91c1c (4.83:1 to 6.47:1)',
          newRatio: getContrastRatio('#c41f26', '#ffffff'),
          codeSnippet: trimmed
        });
      }
    }

    // Pattern 4: White text on #ea2830 background (buttons/badges with normal text)
    if ((line.includes('bg-[#ea2830]') || line.includes('bg-primary')) && line.includes('text-white') && !line.includes('text-2xl') && !line.includes('text-3xl') && !line.includes('text-4xl')) {
      const hex = '#ffffff';
      const bg = '#ea2830';
      const ratio = getContrastRatio(hex, bg);
      findings.push({
        file: relPath,
        line: lineNum,
        element: 'Primary Button / Red Badge Normal Text',
        matchedClass: 'bg-primary text-white / bg-[#ea2830]',
        textColor: hex,
        textName: 'White (#ffffff)',
        bgColor: bg,
        bgName: 'Primary Red (#ea2830)',
        ratio: ratio,
        required: 4.5,
        pass: false,
        level: 'Medium',
        wcag: 'WCAG 1.4.3 Contrast (Minimum)',
        recommended: 'Use #dc2626 or #a7181e / #c41f26 for bg, or font-bold with darker red token',
        newRatio: getContrastRatio('#ffffff', '#a7181e'),
        codeSnippet: trimmed
      });
    }

    // Pattern 5: Placeholder text (placeholder:text-gray-400 / placeholder-gray-400)
    const placeholderMatch = line.match(/placeholder:text-(gray|slate|zinc)-(300|400|500)|placeholder-(gray|slate|zinc)-(300|400)/g);
    if (placeholderMatch) {
      placeholderMatch.forEach(match => {
        const colorKey = match.replace(/placeholder:text-|placeholder-/, '');
        const hex = colorMap[colorKey] || '#9ca3af';
        const bg = '#ffffff';
        const ratio = getContrastRatio(hex, bg);
        if (ratio < 4.5) {
          findings.push({
            file: relPath,
            line: lineNum,
            element: 'Input Placeholder',
            matchedClass: match,
            textColor: hex,
            textName: match,
            bgColor: bg,
            bgName: 'White (#ffffff)',
            ratio: ratio,
            required: 4.5,
            pass: false,
            level: 'Medium',
            wcag: 'WCAG 1.4.3 Contrast (Minimum)',
            recommended: 'placeholder:text-slate-500 (4.76:1) or placeholder:text-gray-500 (4.83:1)',
            newRatio: getContrastRatio('#64748b', '#ffffff'),
            codeSnippet: trimmed
          });
        }
      });
    }

    // Pattern 6: Muted text on dark background (text-slate-500, text-gray-500 on #012e54 / #011628)
    if ((line.includes('bg-[#012e54]') || line.includes('bg-[#011628]') || filePath.includes('Footer.js')) && (line.includes('text-slate-500') || line.includes('text-gray-500'))) {
      const hex = '#64748b';
      const bg = filePath.includes('Footer.js') ? '#011628' : '#012e54';
      const ratio = getContrastRatio(hex, bg);
      findings.push({
        file: relPath,
        line: lineNum,
        element: 'Muted Text on Dark Background',
        matchedClass: 'text-slate-500 on dark bg',
        textColor: hex,
        textName: 'Slate-500 (#64748b)',
        bgColor: bg,
        bgName: bg,
        ratio: ratio,
        required: 4.5,
        pass: ratio >= 4.5,
        level: 'High',
        wcag: 'WCAG 1.4.3 Contrast (Minimum)',
        recommended: 'text-slate-300 (#cbd5e1 - 9.30:1) or text-slate-400 (#94a3b8 - 5.39:1)',
        newRatio: getContrastRatio('#cbd5e1', bg),
        codeSnippet: trimmed
      });
    }

    // Pattern 7: Yellow/Amber-500 / Amber-400 / Emerald-400 on white text
    const tintMatch = line.match(/text-(amber-400|amber-500|yellow-400|yellow-500|emerald-400|green-400|blue-400|red-400)/g);
    if (tintMatch) {
      const isDarkContext = line.includes('bg-[#01') || line.includes('bg-dark') || filePath.includes('Footer.js');
      if (!isDarkContext) {
        tintMatch.forEach(match => {
          const colorKey = match.replace('text-', '');
          const hex = colorMap[colorKey];
          if (hex) {
            const ratio = getContrastRatio(hex, '#ffffff');
            if (ratio < 4.5) {
              findings.push({
                file: relPath,
                line: lineNum,
                element: 'Tinted Status/Alert Text',
                matchedClass: match,
                textColor: hex,
                textName: match,
                bgColor: '#ffffff',
                bgName: 'White (#ffffff)',
                ratio: ratio,
                required: 4.5,
                pass: false,
                level: 'High',
                wcag: 'WCAG 1.4.3 Contrast (Minimum)',
                recommended: match.includes('amber') || match.includes('yellow') ? 'text-amber-700 (#b45309 - 4.54:1)' : match.includes('emerald') || match.includes('green') ? 'text-emerald-700 (#047857 - 4.88:1)' : 'text-blue-700 (#1d4ed8 - 8.52:1)',
                newRatio: getContrastRatio('#b45309', '#ffffff'),
                codeSnippet: trimmed
              });
            }
          }
        });
      }
    }

    // Pattern 8: text-white/30, text-white/40, text-white/50, text-white/60 on dark background
    const whiteOpacityMatch = line.match(/text-white\/(30|40|50|60)/g);
    if (whiteOpacityMatch) {
      whiteOpacityMatch.forEach(match => {
        findings.push({
          file: relPath,
          line: lineNum,
          element: 'Low Opacity White Text',
          matchedClass: match,
          textColor: 'rgba(255,255,255,' + match.split('/')[1] / 100 + ')',
          textName: match,
          bgColor: '#012e54',
          bgName: 'Dark Blue / Navy',
          ratio: match.includes('30') ? 2.5 : match.includes('40') ? 3.4 : match.includes('50') ? 4.3 : 5.8,
          required: 4.5,
          pass: !match.includes('30') && !match.includes('40') && !match.includes('50'),
          level: 'High',
          wcag: 'WCAG 1.4.3 Contrast (Minimum)',
          recommended: 'text-white/80 or text-slate-200 / text-slate-300',
          newRatio: getContrastRatio('#cbd5e1', '#012e54'),
          codeSnippet: trimmed
        });
      });
    }

  });
}

console.log(`Total contrast issues identified: ${findings.length}`);
fs.writeFileSync('scripts/comprehensive-audit-results.json', JSON.stringify(findings, null, 2));
