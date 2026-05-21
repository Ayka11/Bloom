const { test, expect } = require('@playwright/test');
test('Final DOM inspection', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(2000);

  const results = await page.evaluate(() => {
    return {
      flowersLen: typeof flowers !== 'undefined' ? flowers.length : 'MISSING',
      fgChildren: document.getElementById('fg').children.length,
      fbChildren: document.getElementById('fb').children.length,
      searchStats: document.getElementById('search-stats').textContent
    };
  });
  console.log('DOM Results:', results);
});
