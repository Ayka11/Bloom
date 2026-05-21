const { test, expect } = require('@playwright/test');
test('Inspect DOM and state', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(2000);

  const state = await page.evaluate(() => {
    return {
      flowersLen: typeof flowers !== 'undefined' ? flowers.length : 'MISSING',
      fgChildren: document.getElementById('fg').children.length,
      fbChildren: document.getElementById('fb').children.length,
      active: typeof active !== 'undefined' ? active : 'MISSING'
    };
  });
  console.log('State:', state);
});
