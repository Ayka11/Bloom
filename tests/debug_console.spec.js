const { test } = require('@playwright/test');
test('Check for console errors', async ({ page }) => {
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(2000);
});
