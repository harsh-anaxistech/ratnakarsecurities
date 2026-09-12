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

const files = [...walkDir('./app'), ...walkDir('./components'), ...walkDir('./constants')];
let modifiedCount = 0;

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  if (!filePath.endsWith('manifest.js')) {
    content = content.replace(/#c41f26/g, '#a7181e');
    content = content.replace(/#C41F26/g, '#a7181e');
    content = content.replace(/#b91c1c/g, '#991b1b');
    content = content.replace(/#B91C1C/g, '#991b1b');
  }

  content = content.replace(/bg-\[#a7181e\]\/10/g, 'bg-[#fee2e2]');
  content = content.replace(/bg-\[#a7181e\]\/5/g, 'bg-[#fff5f5]');
  content = content.replace(/bg-\[#a7181e\]\/15/g, 'bg-[#fecaca]');
  content = content.replace(/border-\[#a7181e\]\/15/g, 'border-[#fecaca]');
  content = content.replace(/border-\[#a7181e\]\/20/g, 'border-[#fecaca]');

  content = content.replace(/bg-\[#006da0\]\/10/g, 'bg-[#f0f7ff]');
  content = content.replace(/bg-\[#006da0\]\/20/g, 'bg-[#e0f2fe]');
  content = content.replace(/border-\[#006da0\]\/20/g, 'border-[#bae6fd]');
  content = content.replace(/border-\[#006da0\]\/30/g, 'border-[#bae6fd]');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    modifiedCount++;
    console.log(`Remediated: ${filePath}`);
  }
});

console.log(`Total files remediated: ${modifiedCount}`);
