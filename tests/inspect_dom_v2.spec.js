const { test, expect } = require('@playwright/test');
test('Inspect DOM elements deeper', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  // Wait for body to be ready
  await page.waitForSelector('body');

  // Check if search input exists
  const si = await page.locator('#si').count();
  console.log('Search input exists:', si > 0);

  // Check if fg and fb exist
  const fg = await page.locator('#fg').count();
  const fb = await page.locator('#fb').count();
  console.log('Grid and Filter exist:', fg > 0, fb > 0);

  // Check if any error in console
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('BROWSER ERROR:', msg.text());
  });

  await page.waitForTimeout(2000);
});
