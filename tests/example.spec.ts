import { test } from '@playwright/test';

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