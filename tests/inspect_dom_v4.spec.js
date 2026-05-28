const { test, expect } = require('@playwright/test');
test('Check for early script termination', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(1000);

  const scriptContent = await page.evaluate(() => {
    return document.querySelector('script').textContent;
  });
  console.log('Script ends with:', scriptContent.substring(scriptContent.length - 100));
});
