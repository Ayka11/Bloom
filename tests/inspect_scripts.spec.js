const { test, expect } = require('@playwright/test');
test('Inspect script execution order', async ({ page }) => {
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', err => console.log('ERROR:', err.message));
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(2000);
});
