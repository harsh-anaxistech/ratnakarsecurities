import fs from 'fs';
import path from 'path';

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
    } else if (/\.(jsx?|tsx?|css)$/.test(file)) {
      allFiles.push(fullPath);
    }
  }
}

walkDir('./app');
walkDir('./components');

const reports = [];

allFiles.forEach(filePath => {
  const rel = path.relative('.', filePath);
  const code = fs.readFileSync(filePath, 'utf8');
  const lines = code.split('\n');

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    // Check 1: #00aeee on light or with text-white
    if (line.includes('#00aeee') || line.includes('text-secondary') || line.includes('bg-secondary')) {
      reports.push({ rel, lineNum, type: 'cyan/secondary', line: line.trim() });
    }
    // Check 2: gray-400 / slate-400 / zinc-400 / neutral-400 / gray-300 / slate-300 text
    if (/text-(gray|slate|zinc|neutral)-(300|400)/.test(line)) {
      reports.push({ rel, lineNum, type: 'light-gray-text', line: line.trim() });
    }
    // Check 3: amber-600 / yellow-500 / yellow-600 / emerald-600 / green-600 text
    if (/text-(amber-500|amber-600|yellow-500|yellow-600|emerald-500|emerald-600|green-500|green-600)/.test(line)) {
      reports.push({ rel, lineNum, type: 'tint-text', line: line.trim() });
    }
    // Check 4: placeholder-gray-400 / placeholder-slate-400
    if (/placeholder(:|-)text-(gray|slate|zinc)-(300|400)/.test(line) || /placeholder:(gray|slate|zinc)-(300|400)/.test(line)) {
      reports.push({ rel, lineNum, type: 'placeholder-contrast', line: line.trim() });
    }
  });
});

console.log(`Total specific contrast candidates found: ${reports.length}\n`);

const summaryByType = {};
reports.forEach(r => {
  summaryByType[r.type] = (summaryByType[r.type] || 0) + 1;
});
console.log('Summary by issue type:', summaryByType);

fs.writeFileSync('scripts/detailed-audit.json', JSON.stringify(reports, null, 2));
