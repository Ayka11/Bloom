const { test } = require('@playwright/test');
test('Inspect DOM elements', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(2000);
  const fg = await page.locator('#fg').innerHTML();
  console.log('FG content:', fg.length > 100 ? fg.substring(0, 100) + '...' : fg);
  const fb = await page.locator('#fb').innerHTML();
  console.log('FB content:', fb.length > 100 ? fb.substring(0, 100) + '...' : fb);
});
