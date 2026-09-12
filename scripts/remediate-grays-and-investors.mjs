import fs from 'fs';
import path from 'path';

function walkDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', '.git', 'out', 'dist', '.agents'].includes(file)) {
        walkDir(fullPath, fileList);
      }
    } else if (/\.(jsx?|tsx?|css)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const files = [...walkDir('./app'), ...walkDir('./components')];
let modifiedCount = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // 1. Upgrade text-slate-500 / text-gray-500 to text-slate-700 / text-slate-600
  content = content.replace(/text-slate-500/g, 'text-slate-600');
  content = content.replace(/text-gray-500/g, 'text-slate-600');

  // 2. In InvestorCharterDP.jsx, update any remaining #006da0 or red error tokens
  if (filePath.includes('InvestorCharterDP.jsx')) {
    content = content.replace(/#006da0/g, '#004f7a');
    content = content.replace(/#c91f27/g, '#8e1419');
    content = content.replace(/text-red-900/g, 'text-red-950');
    content = content.replace(/text-red-700/g, 'text-slate-800');
    content = content.replace(/text-red-600/g, 'text-[#991b1b]');
    content = content.replace(/bg-red-100/g, 'bg-[#fee2e2]');
    content = content.replace(/text-blue-600/g, 'text-[#004f7a]');
    content = content.replace(/text-blue-700/g, 'text-[#004f7a]');
    content = content.replace(/text-emerald-700/g, 'text-[#166534]');
    content = content.replace(/text-emerald-600/g, 'text-[#166534]');
  }

  // 3. In investor pages, ensure h2 text-black has explicit backgroundColor
  if (filePath.includes('app\\investors') || filePath.includes('app/investors') || filePath.includes('app\\about') || filePath.includes('app/about')) {
    content = content.replace(/text-black/g, 'text-slate-950');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Updated: ${filePath}`);
  }
});

console.log(`Total files upgraded: ${modifiedCount}`);
