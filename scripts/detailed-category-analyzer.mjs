import fs from 'fs';

const scanData = JSON.parse(fs.readFileSync('./scripts/full-project-scan-results.json', 'utf8'));

function getLuminance(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  if (hex.length !== 6) return 0;
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  const a = [r, g, b].map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrastRatio(fgHex, bgHex) {
  const lum1 = getLuminance(fgHex);
  const lum2 = getLuminance(bgHex);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

console.log(`Analyzing findings across ${Object.keys(scanData).length} files:`);

const byCategory = {};

for (const [filePath, items] of Object.entries(scanData)) {
  items.forEach(item => {
    if (!byCategory[item.type]) byCategory[item.type] = [];
    byCategory[item.type].push({ file: filePath, ...item });
  });
}

for (const [category, items] of Object.entries(byCategory)) {
  console.log(`\n=== Category: ${category} (Count: ${items.length}) ===`);
  const files = [...new Set(items.map(i => i.file))];
  console.log(`  Files affected (${files.length}):`, files);
}
