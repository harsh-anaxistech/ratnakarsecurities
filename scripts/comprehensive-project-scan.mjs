import fs from 'fs';
import path from 'path';

function getLuminance(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  if (hex.length !== 6) return 0;
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const a = [r, g, b].map(v => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrastRatio(fgHex, bgHex) {
  const lum1 = getLuminance(fgHex);
  const lum2 = getLuminance(bgHex);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function walkDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', '.git', 'out', 'dist'].includes(file)) {
        walkDir(fullPath, fileList);
      }
    } else if (/\.(jsx?|tsx?|css|html)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allFiles = [...walkDir('./app'), ...walkDir('./components')];

const findings = [];

allFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    const trimmed = line.trim();

    // 1. Check for text-black or #000000 without solid background or inside dark
    if (trimmed.includes('text-black') || trimmed.includes('color: "#000000"') || trimmed.includes("color: '#000000'")) {
      findings.push({
        file: filePath,
        lineNum,
        type: 'text-black',
        snippet: trimmed.substring(0, 140)
      });
    }

    // 2. Check for red text on white or dark
    if (trimmed.includes('text-[#7f1d1d]') || trimmed.includes('text-red-900')) {
      findings.push({
        file: filePath,
        lineNum,
        type: 'red-900-text',
        snippet: trimmed.substring(0, 140)
      });
    }
    if (trimmed.includes('text-[#b91c1c]') || trimmed.includes('text-red-700')) {
      findings.push({
        file: filePath,
        lineNum,
        type: 'red-700-text',
        snippet: trimmed.substring(0, 140)
      });
    }
    if (trimmed.includes('text-[#ea2830]') || trimmed.includes('text-[#c41f26]')) {
      findings.push({
        file: filePath,
        lineNum,
        type: 'brand-red-text',
        snippet: trimmed.substring(0, 140)
      });
    }

    // 3. Check for alpha backgrounds like /10 or /20 or /5 with text
    if (/bg-\[#c41f26\]\/(10|20|5|15)/.test(trimmed) || /bg-red-500\/(10|20)/.test(trimmed)) {
      findings.push({
        file: filePath,
        lineNum,
        type: 'alpha-background',
        snippet: trimmed.substring(0, 140)
      });
    }

    // 4. Check for cyan / light blue text
    if (trimmed.includes('text-[#00aeee]') || trimmed.includes('text-[#38bdf8]')) {
      findings.push({
        file: filePath,
        lineNum,
        type: 'cyan-text',
        snippet: trimmed.substring(0, 140)
      });
    }

    // 5. Check for low contrast gray text (gray-400, gray-500, slate-400, slate-500)
    if (/text-(gray|slate|zinc)-(400|500)/.test(trimmed)) {
      findings.push({
        file: filePath,
        lineNum,
        type: 'low-contrast-gray-text',
        snippet: trimmed.substring(0, 140)
      });
    }

    // 6. Check for card/box without explicit inline style in product pages and investor pages
    if (filePath.includes('products') && (trimmed.includes('className="p-6 bg-slate-50') || trimmed.includes('className="mb-12 bg-blue-50') || trimmed.includes('className="bg-slate-50 rounded-2xl'))) {
      if (!trimmed.includes('style=')) {
        findings.push({
          file: filePath,
          lineNum,
          type: 'missing-solid-bg-style',
          snippet: trimmed.substring(0, 140)
        });
      }
    }
  });
});

console.log(`Scanned ${allFiles.length} files.`);
console.log(`Total Findings: ${findings.length}`);

// Group by file
const grouped = {};
findings.forEach(f => {
  if (!grouped[f.file]) grouped[f.file] = [];
  grouped[f.file].push(f);
});

console.log(`Files with findings: ${Object.keys(grouped).length}`);

fs.writeFileSync('./scripts/full-project-scan-results.json', JSON.stringify(grouped, null, 2));
console.log('Saved to ./scripts/full-project-scan-results.json');
