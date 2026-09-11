import fs from 'fs';
import path from 'path';

// WCAG relative luminance and contrast ratio calculations
function hexToRgb(hex) {
  let cleaned = hex.replace('#', '').trim();
  if (cleaned.length === 3) {
    cleaned = cleaned.split('').map(c => c + c).join('');
  }
  if (cleaned.length === 8) {
    cleaned = cleaned.substring(0, 6);
  }
  const num = parseInt(cleaned, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export function getContrastRatio(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const brighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (brighter + 0.05) / (darker + 0.05);
}

// Known colors in Tailwind / Design system
const colorMap = {
  // Tailwind grays
  'gray-300': '#d1d5db',
  'gray-400': '#9ca3af',
  'gray-500': '#6b7280',
  'gray-600': '#4b5563',
  'gray-700': '#374151',
  'gray-800': '#1f2937',
  'gray-900': '#111827',
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
  // Brand
  'primary': '#ea2830',
  'primary-dark': '#c41f26',
  'secondary': '#00aeee',
  'secondary-dark': '#0090c8',
  'light-blue': '#012e54',
  'dark-blue': '#012441',
  'dark-navy': '#011628',
  // Custom hexes
  '#00aeee': '#00aeee',
  '#0090c8': '#0090c8',
  '#ea2830': '#ea2830',
  '#c41f26': '#c41f26',
  '#012e54': '#012e54',
  '#012441': '#012441',
  '#011628': '#011628',
  '#ffffff': '#ffffff',
  'white': '#ffffff',
  '#000000': '#000000',
  'black': '#000000',
};

console.log('=== Common Contrast Ratios on White (#FFFFFF) ===');
['#ea2830', '#c41f26', '#b91c1c', '#dc2626', '#00aeee', '#0090c8', '#0088c2', '#006da0', '#0284c7', '#0369a1', '#6b7280', '#4b5563', '#9ca3af', '#94a3b8', '#64748b', '#475569'].forEach(c => {
  const ratio = getContrastRatio(c, '#ffffff');
  console.log(`${c} on #ffffff: ${ratio.toFixed(2)}:1 ${ratio >= 4.5 ? 'PASS (AA normal)' : ratio >= 3.0 ? 'PASS (AA large only)' : 'FAIL'}`);
});

console.log('\n=== Common Contrast Ratios on Brand Dark Blue (#012e54) ===');
['#ffffff', '#00aeee', '#0090c8', '#ea2830', '#9ca3af', '#cbd5e1', '#e2e8f0', '#94a3b8', '#64748b', '#cbd5e1'].forEach(c => {
  const ratio = getContrastRatio(c, '#012e54');
  console.log(`${c} on #012e54: ${ratio.toFixed(2)}:1 ${ratio >= 4.5 ? 'PASS (AA normal)' : ratio >= 3.0 ? 'PASS (AA large only)' : 'FAIL'}`);
});

console.log('\n=== Common Contrast Ratios on Brand Dark Navy (#011628) ===');
['#ffffff', '#00aeee', '#0090c8', '#ea2830', '#9ca3af', '#cbd5e1', '#e2e8f0', '#94a3b8', '#64748b'].forEach(c => {
  const ratio = getContrastRatio(c, '#011628');
  console.log(`${c} on #011628: ${ratio.toFixed(2)}:1 ${ratio >= 4.5 ? 'PASS (AA normal)' : ratio >= 3.0 ? 'PASS (AA large only)' : 'FAIL'}`);
});

console.log('\n=== Common Button Backgrounds with White text (#ffffff) ===');
['#ea2830', '#c41f26', '#dc2626', '#b91c1c', '#00aeee', '#0090c8', '#0088c2', '#006da0', '#0284c7', '#0369a1', '#004b87', '#15803d', '#16a34a'].forEach(c => {
  const ratio = getContrastRatio('#ffffff', c);
  console.log(`White text on ${c}: ${ratio.toFixed(2)}:1 ${ratio >= 4.5 ? 'PASS (AA normal)' : ratio >= 3.0 ? 'PASS (AA large only)' : 'FAIL'}`);
});
