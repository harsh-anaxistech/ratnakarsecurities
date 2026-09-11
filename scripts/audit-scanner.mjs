import fs from 'fs';
import path from 'path';

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

function getContrastRatio(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const brighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (brighter + 0.05) / (darker + 0.05);
}

const allFiles = [];
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(file)) {
        walkDir(fullPath);
      }
    } else if (/\.(jsx?|tsx?|css|html)$/.test(file)) {
      allFiles.push(fullPath);
    }
  }
}

walkDir('./app');
walkDir('./components');

console.log(`Found ${allFiles.length} files to scan.\n`);

const issues = [];

const problematicPatterns = [
  // 1. Text gray-400 / slate-400 / zinc-400 on light backgrounds
  {
    regex: /(text-(gray|slate|zinc|neutral)-400|text-gray-300|text-slate-300)/g,
    desc: 'Light gray text on likely light background (ratio ~2.5:1 < 4.5:1)',
    type: 'gray-400-on-light'
  },
  // 2. Cyan / Secondary #00aeee text or bg
  {
    regex: /(text-\[#00aeee\]|text-secondary(?![a-zA-Z-])|bg-\[#00aeee\]|bg-secondary(?![a-zA-Z-]))/g,
    desc: 'Secondary / Cyan #00aeee (ratio ~2.5:1 on white or with white text)',
    type: 'cyan-contrast'
  },
  // 3. Low opacity text on dark or light backgrounds
  {
    regex: /(text-white\/(30|40|50)|text-black\/(30|40|50|60))/g,
    desc: 'Low opacity text (white/30-50 on dark or black/30-60 on light)',
    type: 'opacity-contrast'
  },
  // 4. Muted text on dark background (e.g. text-slate-500, text-gray-500 on dark bg)
  {
    regex: /(bg-\[#(012e54|012441|011628)\].*?text-(slate|gray)-500|text-(slate|gray)-500.*?bg-\[#(012e54|012441|011628)\])/g,
    desc: 'Gray-500/Slate-500 on dark blue background (ratio ~2.9:1 < 4.5:1)',
    type: 'muted-on-dark'
  },
  // 5. Light text-red-400 or light shades
  {
    regex: /(text-red-400|text-blue-400|text-emerald-400|text-green-400|text-amber-400|text-yellow-500)/g,
    desc: 'Light tint text (400-shade) on light backgrounds',
    type: 'tint-contrast'
  }
];

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    problematicPatterns.forEach(pat => {
      let match;
      while ((match = pat.regex.exec(line)) !== null) {
        issues.push({
          file: path.relative('.', file),
          line: idx + 1,
          matched: match[0],
          type: pat.type,
          desc: pat.desc,
          snippet: line.trim()
        });
      }
    });
  });
}

console.log(`Identified ${issues.length} potential contrast hotspots across the project.`);

// Group by file
const byFile = {};
issues.forEach(iss => {
  byFile[iss.file] = byFile[iss.file] || [];
  byFile[iss.file].push(iss);
});

console.log('\nHotspots by file:');
Object.entries(byFile).forEach(([f, list]) => {
  console.log(`- ${f}: ${list.length} occurrences`);
});

fs.writeFileSync('scripts/audit-results.json', JSON.stringify({ total: issues.length, byFile, issues }, null, 2));
