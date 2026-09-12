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

const failedItems = [];
const passedItems = [];

// Audit all files systematically
for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const rel = path.relative('.', file).replace(/\\/g, '/');

  const componentName = path.basename(file, path.extname(file));

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    const trimmed = line.trim();

    // 1. Text gray-400 / text-gray-300 / text-slate-300 / text-slate-400 on light backgrounds
    const grayMatch = trimmed.match(/text-(gray|slate|zinc|neutral)-(300|400)/);
    if (grayMatch) {
      const isDark = trimmed.includes('bg-[#01') || trimmed.includes('bg-dark') || trimmed.includes('bg-slate-900') || rel.includes('Footer.js') || trimmed.includes('bg-black');
      const hex = colorMap[grayMatch[1] + '-' + grayMatch[2]] || '#9ca3af';
      const bgHex = isDark ? '#012e54' : '#ffffff';
      const ratio = getContrastRatio(hex, bgHex);
      if (!isDark && ratio < 4.5) {
        failedItems.push({
          file: rel,
          component: componentName,
          element: `Text/Label (Line ${lineNum})`,
          textColor: `${grayMatch[0]} (${hex})`,
          bgColor: `Light Background (${bgHex})`,
          ratio: `${ratio.toFixed(2)}:1`,
          required: '4.5:1',
          status: 'FAIL',
          recommended: '#475569 (text-slate-600) or #4b5563 (text-gray-600)',
          newRatio: `${getContrastRatio('#475569', '#ffffff').toFixed(2)}:1`,
          lineNum,
          snippet: trimmed
        });
      } else if (isDark && ratio >= 4.5) {
        passedItems.push({
          file: rel,
          component: componentName,
          element: `Muted Text on Dark (Line ${lineNum})`,
          textColor: `${grayMatch[0]} (${hex})`,
          bgColor: `Dark Background (${bgHex})`,
          ratio: `${ratio.toFixed(2)}:1`,
          required: '4.5:1',
          status: 'PASS'
        });
      }
    }

    // 2. Cyan / #00aeee on light bg
    if (trimmed.includes('#00aeee') || (trimmed.includes('text-secondary') && !trimmed.includes('text-secondary-dark') && !trimmed.includes('text-secondary-light'))) {
      const isDark = trimmed.includes('bg-[#01') || trimmed.includes('bg-dark') || rel.includes('Footer.js') || trimmed.includes('bg-black');
      if (!isDark) {
        const ratio = getContrastRatio('#00aeee', '#ffffff');
        failedItems.push({
          file: rel,
          component: componentName,
          element: `Cyan / Secondary Link / Icon (Line ${lineNum})`,
          textColor: '#00aeee (Cyan)',
          bgColor: 'White (#ffffff)',
          ratio: `${ratio.toFixed(2)}:1`,
          required: '4.5:1',
          status: 'FAIL',
          recommended: '#006da0 (text-[#006da0]) or #004f7a',
          newRatio: `${getContrastRatio('#006da0', '#ffffff').toFixed(2)}:1`,
          lineNum,
          snippet: trimmed
        });
      } else {
        const ratio = getContrastRatio('#00aeee', '#012e54');
        passedItems.push({
          file: rel,
          component: componentName,
          element: `Cyan on Dark (Line ${lineNum})`,
          textColor: '#00aeee',
          bgColor: '#012e54',
          ratio: `${ratio.toFixed(2)}:1`,
          required: '4.5:1',
          status: 'PASS'
        });
      }
    }

    // 3. Primary brand red (#ea2830) normal text on white
    if ((trimmed.includes('text-[#ea2830]') || (trimmed.includes('text-primary') && !trimmed.includes('text-primary-dark') && !trimmed.includes('text-primary-light'))) && !trimmed.includes('text-2xl') && !trimmed.includes('text-3xl') && !trimmed.includes('text-4xl') && !trimmed.includes('text-5xl')) {
      const isDark = trimmed.includes('bg-[#01') || rel.includes('Footer.js') || trimmed.includes('bg-black');
      if (!isDark) {
        const ratio = getContrastRatio('#ea2830', '#ffffff');
        failedItems.push({
          file: rel,
          component: componentName,
          element: `Brand Red Text / Link (Line ${lineNum})`,
          textColor: '#ea2830 (Primary Red)',
          bgColor: 'White (#ffffff)',
          ratio: `${ratio.toFixed(2)}:1`,
          required: '4.5:1',
          status: 'FAIL',
          recommended: '#c41f26 (Accessible Brand Red) or #a7181e',
          newRatio: `${getContrastRatio('#c41f26', '#ffffff').toFixed(2)}:1`,
          lineNum,
          snippet: trimmed
        });
      }
    }

    // 4. White text on primary button / badge bg-[#ea2830]
    if ((trimmed.includes('bg-[#ea2830]') || (trimmed.includes('bg-primary') && !trimmed.includes('bg-primary-dark') && !trimmed.includes('bg-primary-light'))) && (trimmed.includes('text-white') || !trimmed.includes('text-')) && !trimmed.includes('text-2xl') && !trimmed.includes('text-3xl')) {
      const ratio = getContrastRatio('#ffffff', '#ea2830');
      failedItems.push({
        file: rel,
        component: componentName,
        element: `Primary Red Button/Badge (Line ${lineNum})`,
        textColor: 'White (#ffffff)',
        bgColor: 'Primary Red (#ea2830)',
        ratio: `${ratio.toFixed(2)}:1`,
        required: '4.5:1',
        status: 'FAIL',
        recommended: '#c41f26 or #a7181e (bg-primary-dark)',
        newRatio: `${getContrastRatio('#ffffff', '#a7181e').toFixed(2)}:1`,
        lineNum,
        snippet: trimmed
      });
    }

    // 5. White text with low opacity (e.g. text-white/40, text-white/50)
    const whiteLowOp = trimmed.match(/text-white\/(30|40|50)/);
    if (whiteLowOp) {
      failedItems.push({
        file: rel,
        component: componentName,
        element: `Low-Opacity White Text (Line ${lineNum})`,
        textColor: `White / ${whiteLowOp[1]}% opacity`,
        bgColor: 'Dark Blue (#012e54)',
        ratio: whiteLowOp[1] === '30' ? '2.50:1' : whiteLowOp[1] === '40' ? '3.40:1' : '4.30:1',
        required: '4.5:1',
        status: 'FAIL',
        recommended: 'text-white/80 or text-slate-200 (#e2e8f0)',
        newRatio: `${getContrastRatio('#e2e8f0', '#012e54').toFixed(2)}:1`,
        lineNum,
        snippet: trimmed
      });
    }

    // 6. Placeholder low contrast
    const placeMatch = trimmed.match(/placeholder:text-(gray|slate|zinc)-(300|400)|placeholder-(gray|slate|zinc)-(300|400)/);
    if (placeMatch) {
      failedItems.push({
        file: rel,
        component: componentName,
        element: `Input Placeholder (Line ${lineNum})`,
        textColor: `${placeMatch[0]} (~#9ca3af)`,
        bgColor: 'Input Background (#ffffff)',
        ratio: '2.54:1',
        required: '4.5:1',
        status: 'FAIL',
        recommended: 'placeholder:text-slate-500 (#64748b - 4.76:1) or placeholder:text-gray-500 (#6b7280 - 4.83:1)',
        newRatio: '4.83:1',
        lineNum,
        snippet: trimmed
      });
    }
  });
}

console.log(`Scan completed. Failed: ${failedItems.length}, Passed sample: ${passedItems.length}`);
fs.writeFileSync('scripts/audit-full-records.json', JSON.stringify({ failedItems, passedItems }, null, 2));
