const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');
});

test('Library should display 80 species', async ({ page }) => {
  // Wait for the grid to render
  const cards = page.locator('#fg .card');
  await expect(cards).toHaveCount(80);
});

test('Search should filter results correctly', async ({ page }) => {
  await page.fill('#si', 'Lavandula');
  const cards = page.locator('#fg .card');
  await expect(cards).toHaveCount(1);
  const stats = await page.locator('#search-stats');
  await expect(stats).toContainText('Found 1 match(es) for "lavandula"');
});

test('Category filter should work', async ({ page }) => {
  const herbalBtn = page.locator('button.fb:has-text("Herbal")');
  await herbalBtn.click();
  const stats = await page.locator('#search-stats');
  await expect(stats).toContainText('Showing');
  const cards = await page.locator('#fg .card');
  const count = await cards.count();
  expect(count).toBeGreaterThan(0);
});

test('Discover random should open modal', async ({ page }) => {
  const discoverBtn = page.locator('#random-btn');
  await discoverBtn.click();
  const modal = page.locator('#modal');
  await expect(modal).toHaveClass(/open/);
  const modalTitle = page.locator('.modal-title');
  await expect(modalTitle).not.toBeEmpty();
});

test('All species should have illustrations', async ({ page }) => {
  const svgs = await page.locator('#fg .card-ill svg');
  await expect(svgs).toHaveCount(80);
});
