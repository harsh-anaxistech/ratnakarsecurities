import fs from 'fs';
import path from 'path';

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

let cleanups = 0;

allFiles.forEach(file => {
  if (file.includes('globals.css') && file.includes('high-contrast')) return;
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Replace all remaining #ea2830 in app/ and components/
  content = content.replace(/#ea2830/g, () => {
    cleanups++;
    return '#c41f26';
  });

  // Replace #ea28301f with #c41f261f
  content = content.replace(/#ea28301f/g, () => {
    cleanups++;
    return '#c41f261f';
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Cleaned: ${path.relative('.', file)}`);
  }
});

console.log(`Total remaining #ea2830 cleanups: ${cleanups}`);
