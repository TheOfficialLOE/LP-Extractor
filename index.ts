import { Browser, chromium } from 'playwright';
import { BrowserContext, Page } from "@playwright/test";

const songs = [];

(async () => {
  const { browser, context, page } = await setUp();

  await page.goto("https://music.apple.com/us/album/meteora-20th-anniversary-edition/1668484895");

  console.log(await page.getByRole("heading", { name: "Disk 1 "}).innerText())

  console.log("fooo")

})();

async function setUp(): Promise<{
  browser: Browser,
  context: BrowserContext,
  page: Page
}> {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  return {
    browser,
    context,
    page
  }
}