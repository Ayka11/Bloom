const { test } = require('@playwright/test');
test('Find JS error line', async ({ page }) => {
  page.on('pageerror', err => {
    console.log('ERROR:', err.message);
    console.log('STACK:', err.stack);
  });
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(1000);
});
