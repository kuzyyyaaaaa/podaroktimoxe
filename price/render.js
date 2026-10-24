// Сохраняет прайс в PNG 1080×1920: node render.js iphone-14-15
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const name = process.argv[2] || 'iphone-14-15';
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto('file://' + path.join(__dirname, 'template.html'));
  await page.addScriptTag({ path: path.join(__dirname, name + '.js') });
  await page.evaluate(() => draw(window.PRICE));
  await page.evaluate(() => Promise.all([document.fonts.ready, ...[...document.images].map(i => i.decode())]));
  await page.screenshot({ path: path.join(__dirname, 'out', name + '.png') });
  await browser.close();
  console.log('out/' + name + '.png');
})();
