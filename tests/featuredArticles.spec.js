// @ts-check
import { test, expect } from '@playwright/test';

test('all articles has two test articles', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  const articleCards = page.locator('#featuredGrid .bg-card');
  await expect(articleCards).toHaveCount(1);
});

test('first article Read more navigates to correct page', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const firstCard = page.locator('#articleGrid [data-slot="card"]').first();
  const readMore = firstCard.locator('a[data-slot="button"]');

  await Promise.all([
    page.waitForURL('http://localhost:3000/articles/test_featured'),
    readMore.click()
  ]);

  await expect(page).toHaveURL('http://localhost:3000/articles/test_featured');
});

test('the articles have correct title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  const articleCards = page.locator('#featuredGrid .bg-card');

  const titles = articleCards.locator('h3');
  await expect(titles).toHaveText([
    'test_featured'
  ]);
});

test('first article card has image, category, body, author, and date', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const firstCard = page.locator('#articleGrid [data-slot="card"]').first();

  const image = firstCard.locator('img');
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute('alt', 'test_featured');

  const badge = firstCard.locator('[data-slot="badge"]').nth(0);
  await expect(badge).not.toBeEmpty();

  const title = firstCard.locator('h3.text-lg.font-bold');
  await expect(title).toHaveText('test_featured');

  const body = firstCard.locator('p');
  await expect(body).not.toBeEmpty();

  const author = firstCard.locator('[data-slot="card-footer"] span.text-sm').nth(0);
  await expect(author).not.toBeEmpty();

  const date = firstCard.locator('[data-slot="card-footer"] .text-muted-foreground');
  await expect(date).not.toBeEmpty();
});