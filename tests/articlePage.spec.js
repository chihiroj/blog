import { test, expect } from '@playwright/test';

test('the article has a title, body, author, date, image and category', async ({ page }) => {
  await page.goto('http://localhost:3000/articles/test');

  const articleTitle = page.locator('#articleTitle');
  const articleDescription = page.locator('#articleDescription');
  const articleCategory = page.locator('.articleCategory');
  const articleAuthor = page.locator('#articleAuthor');
  const articleDate = page.locator('#articleDate');
  const image = page.locator('img');

  await expect(articleTitle).toHaveText("test");
  await expect(articleDescription).not.toBeEmpty();
  await expect(articleCategory).not.toBeEmpty();
  await expect(articleAuthor).not.toBeEmpty();
  await expect(articleDate).not.toBeEmpty();
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute('alt', 'test');

});
