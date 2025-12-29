import { test, expect } from '@playwright/test';

test('search for "featured" displays 1 result', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.reload();

  const searchbar = page.locator("#searchbar");
  const searchDropdownLinks = page.locator("#searchDropdown a");

  await searchbar.fill('featured');
  await searchbar.press("Enter");

  await expect(searchDropdownLinks).toHaveCount(1);
});

test('search for "test" displays 2 results', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const searchbar = page.locator("#searchbar");
  const searchDropdownLinks = page.locator("#searchDropdown a");

  await searchbar.fill('test');
  await page.keyboard.down("Enter");

  await expect(searchDropdownLinks).toHaveCount(2);
});

test('search for "testtttt" displays no result', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const searchbar = page.locator("#searchbar");
  const searchDropdownLinks = page.locator("#searchDropdown a");

  await searchbar.fill('testtttt');
  await page.keyboard.down("Enter");

  await expect(searchDropdownLinks).toHaveCount(0);
});

test('search result link works', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.reload();

  const searchbar = page.locator("#searchbar");
  const searchDropdownLinks = page.locator("#searchDropdown a");

  await searchbar.fill('featured');
  await page.keyboard.down("Enter");

  const firstResult = searchDropdownLinks.first();

  await Promise.all([
    page.waitForURL('http://localhost:3000/articles/test_featured'),
    firstResult.click()
  ]);

  await expect(page).toHaveURL('http://localhost:3000/articles/test_featured');
});
