const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {
  await page.goto('https://www.ebay.com/');
  const pageTitle = await page.title();
  console.log('Page Title is:', pageTitle);
  await expect(page).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
  const pageUrl = await page.url();
  console.log('Page Url is:',pageUrl);
  await expect(page).toHaveURL('https://www.ebay.com/');
  await page.close();
});