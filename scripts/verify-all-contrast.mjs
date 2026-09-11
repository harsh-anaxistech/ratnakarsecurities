import fs from 'fs';
import path from 'path';
import { getContrastRatio } from './test-contrast.mjs';

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(file)) {
        walkDir(fullPath, fileList);
      }
    } else if (/\.(jsx?|tsx?|css|html)$/.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const files = [...walkDir('./app'), ...walkDir('./components')];

const potentialFailures = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    const trimmed = line.trim();

    // 1. from-[#00aeee] with text-white
    if (trimmed.includes('from-[#00aeee]') && (trimmed.includes('text-white') || content.includes('text-white'))) {
      potentialFailures.push({ file, lineNum, type: 'gradient-white-on-cyan', line: trimmed });
    }

    // 2. text-[#00aeee] or color: #00aeee on non-dark files
    if ((trimmed.includes('text-[#00aeee]') || trimmed.includes('color: "#00aeee"') || trimmed.includes("color: '#00aeee'"))) {
      const isDarkContext = file.includes('HeroBanner') ||
                            file.includes('WhyChooseUs') ||
                            file.includes('ChooseAppModal') ||
                            file.includes('BackofficeLoginModal') ||
                            file.includes('Footer') ||
                            trimmed.includes('bg-[#011628]') ||
                            trimmed.includes('bg-[#012e54]');
      if (!isDarkContext) {
        potentialFailures.push({ file, lineNum, type: 'cyan-text-on-light', line: trimmed });
      }
    }

    // 3. text-gray-400 or text-slate-400 in table or body context
    if (/text-(gray|slate|zinc)-400/.test(trimmed) && (trimmed.includes('<td') || trimmed.includes('<p') || trimmed.includes('<span'))) {
      if (!file.includes('HeroBanner') && !file.includes('DownloadApp') && !file.includes('Footer') && !trimmed.includes('bg-slate-900') && !trimmed.includes('bg-[#011628]')) {
        potentialFailures.push({ file, lineNum, type: 'gray-400-body-text', line: trimmed });
      }
    }
  });
});

console.log(`Audited ${files.length} files.`);
console.log(`Potential Failures Found: ${potentialFailures.length}`);
potentialFailures.forEach(f => {
  console.log(`- ${f.file}:${f.lineNum} [${f.type}]: ${f.line}`);
});
