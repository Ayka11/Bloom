const { test, expect } = require('@playwright/test');
test('Inspect DOM elements and scripts', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(1000);

  const scriptContent = await page.evaluate(() => {
    return document.querySelector('script').textContent;
  });
  console.log('Script length:', scriptContent.length);

  const flowersLength = await page.evaluate(() => {
    return typeof flowers !== 'undefined' ? flowers.length : 'UNDEFINED';
  });
  console.log('Flowers array length in browser:', flowersLength);

  const fgId = await page.evaluate(() => {
    return document.getElementById('fg') ? 'Exists' : 'NOT FOUND';
  });
  console.log('Grid element #fg:', fgId);
});
