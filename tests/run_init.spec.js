const { test, expect } = require('@playwright/test');
test('Run init manually', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(1000);

  const results = await page.evaluate(() => {
    try {
      updateSummaryCopy();
      renderSeasonal();
      renderFilters();
      renderGrid();
      renderFavs();
      return 'SUCCESS';
    } catch (e) {
      return e.message + ' AT ' + e.stack;
    }
  });
  console.log('Manual init results:', results);

  const fgCount = await page.locator('#fg .card').count();
  console.log('FG Count after manual init:', fgCount);
});
