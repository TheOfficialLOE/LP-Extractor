import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });
//
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//
//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();
//
//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test("get the damn title", async ({ page }) => {
  await page.goto("https://music.apple.com/us/album/meteora-20th-anniversary-edition/1668484895");

  await page.waitForSelector(".songs-list-row__song-name")

  const foo = await page.locator(".songs-list-row__song-name").evaluateAll((elx) => {
    const newSongs = [];
    for (let i = 0; i < elx.length; i++) {
      const discName = elx[i].parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.firstChild;
      if (discName?.textContent === "Disc 4" || discName?.textContent === "Disc 6") {
        const songName = elx[i].textContent!;
        newSongs.push(songName)
      }
    }
    return newSongs;
  });

  console.log(foo.length)
});