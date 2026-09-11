import { getContrastRatio } from './test-contrast.mjs';

const tailwindColors = {
  // Emerald / Green
  'emerald-600': '#059669',
  'emerald-700': '#047857',
  'emerald-800': '#065f46',
  'green-600': '#16a34a',
  'green-700': '#15803d',
  'green-800': '#166534',
  // Amber / Yellow
  'amber-500': '#f59e0b',
  'amber-600': '#d97706',
  'amber-700': '#b45309',
  'amber-800': '#92400e',
  'yellow-600': '#ca8a04',
  'yellow-700': '#a16207',
  // Red
  'red-500': '#ef4444',
  'red-600': '#dc2626',
  'red-700': '#b91c1c',
  // Blue
  'blue-500': '#3b82f6',
  'blue-600': '#2563eb',
  'blue-700': '#1d4ed8',
  'sky-500': '#0ea5e9',
  'sky-600': '#0284c7',
  'sky-700': '#0369a1',
  'cyan-500': '#06b6d4',
  'cyan-600': '#0891b2',
  'cyan-700': '#0e7490',
  // Gray / Slate
  'gray-400': '#9ca3af',
  'gray-500': '#6b7280',
  'gray-600': '#4b5563',
  'gray-700': '#374151',
  'slate-400': '#94a3b8',
  'slate-500': '#64748b',
  'slate-600': '#475569',
  'slate-700': '#334155',
  // Brand
  'brand-primary': '#ea2830',
  'brand-primary-dark': '#c41f26',
  'brand-secondary': '#00aeee',
  'brand-secondary-accessible': '#006da0',
  'brand-secondary-dark': '#0090c8',
  'brand-navy': '#011628',
  'brand-blue': '#012e54',
};

console.log('=== TAILWIND COLOR CONTRAST ON WHITE (#FFFFFF) ===');
Object.entries(tailwindColors).forEach(([name, hex]) => {
  const ratio = getContrastRatio(hex, '#ffffff');
  console.log(`${name.padEnd(28)} (${hex}): ${ratio.toFixed(2)}:1  ${ratio >= 4.5 ? 'PASS (AA normal)' : ratio >= 3.0 ? 'PASS (AA large only)' : 'FAIL (< 3:1)'}`);
});
