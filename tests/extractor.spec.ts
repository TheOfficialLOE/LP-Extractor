import { expect, test } from '@playwright/test';

test("get the number of songs", async ({ page }) => {
  await page.goto("https://music.apple.com/us/album/meteora-20th-anniversary-edition/1668484895");

  await page.waitForSelector(".songs-list-row__song-name")

  const songs = await page.locator(".songs-list-row__song-name").evaluateAll((elx) => {
    const newSongs = [];
    for (let i = 0; i < elx.length; i++) {
      let discName: ChildNode = elx[i];
      for (let j = 0; j < 8; j++) {
        discName = discName.parentElement!;
      }
      discName = discName.firstChild!;
      if (discName.textContent === "Disc 4" || discName.textContent === "Disc 6") {
        const songName = elx[i].textContent!;
        newSongs.push(songName)
      }
    }
    return newSongs;
  });

  expect(songs.length).toBe(33);
});



