const { test, expect } = require('@playwright/test');
test('Run init and check errors', async ({ page }) => {
  page.on('console', msg => console.log('LOG:', msg.text()));
  page.on('pageerror', err => console.log('ERROR:', err.message));
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(2000);

  const results = await page.evaluate(() => {
    try {
      console.log('Active:', typeof active !== 'undefined' ? active : 'N/A');
      console.log('Flowers:', typeof flowers !== 'undefined' ? flowers.length : 'N/A');
      // Try to manually trigger renderGrid if it didn't run
      renderGrid();
      return 'Manual renderGrid called';
    } catch (e) {
      return 'Error: ' + e.message;
    }
  });
  console.log('Eval result:', results);

  const fgCount = await page.locator('#fg .card').count();
  console.log('FG Count:', fgCount);
});
