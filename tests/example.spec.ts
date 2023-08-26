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
  // await page.goto("https://playwright.dev/");

  // this works
  // const element = await page.waitForSelector('text="Disc 1"');
  //
  // await element.evaluate(el => {
  //   el.remove();
  // })

  // this one don't
  // await page.getByText("Disc 1").evaluate(el => {
  //   el.remove();
  // });

  const songs = [
    "Foreword", "Don't Stay", "Somewhere I Belong", "Lying from You",
    "Hit the Floor", "Easier to Run", "Faint", "Figure.09", "Breaking the Habit",
    "From the Inside", "Nobody's Listening", "Session", "Numb"
  ];

  for (let i = 0; i < songs.length; i++) {
    await page.$eval(".songs-list-row", (el, songsName) => {
      if (el.textContent?.includes(songsName)) {
        el.remove();
      }
    }, songs[i])
  }

  // await page.$eval(".songs-list-row", el => {
  //   el.remove()
  // })
});