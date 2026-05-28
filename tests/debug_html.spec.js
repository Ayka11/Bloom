const { test } = require('@playwright/test');
const fs = require('fs');

test('Check HTML and Console', async ({ page }) => {
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(1000);
  const content = await page.content();
  fs.writeFileSync('debug.html', content);
  const cards = await page.locator('#fg .card').count();
  console.log('Cards found:', cards);
});
