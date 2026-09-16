import puppeteer from 'puppeteer-core';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:4005/investors/investor-grievance', { waitUntil: 'networkidle0' });

  const analysis = await page.evaluate(() => {
    const results = [];
    const elementsToFind = [
      'relations@nsdl.com',
      'Send Email',
      'Investor Support: Online Grievance Submission And Tracking',
      'The grievance redressal portal eliminates the need',
      'Investor Grievance Redressal Committee (GRC) of Depository',
      'If you receive no amicable resolution within the prescribed timeline',
      'Designated Officer',
      'Ms. Khilona Behera',
      'Deputy Vice President',
      'Investor Grievance Officer'
    ];

    function getEffectiveBg(el) {
      let current = el;
      const chain = [];
      while (current) {
        const style = window.getComputedStyle(current);
        chain.push({
          tag: current.tagName,
          id: current.id,
          className: current.className,
          bg: style.backgroundColor,
          color: style.color,
          opacity: style.opacity
        });
        if (style.backgroundColor && style.backgroundColor !== 'rgba(0, 0, 0, 0)' && style.backgroundColor !== 'transparent') {
          return { foundBg: style.backgroundColor, chain };
        }
        current = current.parentElement;
      }
      return { foundBg: 'NONE', chain };
    }

    const allNodes = document.querySelectorAll('*');
    for (const target of elementsToFind) {
      for (const node of allNodes) {
        const text = node.innerText || node.textContent || '';
        const directMatch = Array.from(node.childNodes).some(c => c.nodeType === 3 && c.nodeValue.includes(target));
        if (directMatch || (node.children.length === 0 && text.trim().includes(target))) {
          const style = window.getComputedStyle(node);
          const bgInfo = getEffectiveBg(node);
          results.push({
            target,
            tag: node.tagName,
            text: text.trim().substring(0, 60),
            color: style.color,
            bg: style.backgroundColor,
            foundBg: bgInfo.foundBg,
            parentChain: bgInfo.chain.slice(0, 4)
          });
          break;
        }
      }
    }
    return results;
  });

  console.log(JSON.stringify(analysis, null, 2));
  await browser.close();
}

run().catch(console.error);
