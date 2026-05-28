const { test, expect } = require('@playwright/test');
test('Inspect DOM and logs deeper', async ({ page }) => {
  page.on('console', msg => console.log('LOG:', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('ERROR:', err.message));
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.waitForTimeout(1000);

  const results = await page.evaluate(() => {
    const fg = document.getElementById('fg');
    const fb = document.getElementById('fb');
    return {
      fgId: fg ? 'Exists' : 'MISSING',
      fbId: fb ? 'Exists' : 'MISSING',
      fgHtml: fg ? fg.innerHTML : 'N/A',
      fbHtml: fb ? fb.innerHTML : 'N/A'
    };
  });
  console.log('Results:', results);
});
