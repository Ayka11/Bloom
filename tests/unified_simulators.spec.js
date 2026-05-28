const { test, expect } = require("@playwright/test");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

let server;
let baseURL;

test.beforeAll(async () => {
  server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://127.0.0.1");
    const requested = url.pathname === "/" ? "/index.html" : url.pathname;
    const filePath = path.join(process.cwd(), requested.replace(/^\/+/, ""));
    if (!filePath.startsWith(process.cwd()) || !fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath);
    const type = ext === ".js" ? "text/javascript" : ext === ".json" ? "application/json" : "text/html";
    res.writeHead(200, { "content-type": `${type}; charset=utf-8` });
    fs.createReadStream(filePath).pipe(res);
  });
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  baseURL = `http://127.0.0.1:${address.port}`;
});

test.afterAll(async () => {
  await new Promise(resolve => server.close(resolve));
});

test("loads imported species and runs biosphere and growth lab", async ({ page }) => {
  const consoleErrors = [];
  page.on("console", message => {
    if (message.type() === "error" && !message.text().includes("ERR_NETWORK_ACCESS_DENIED")) {
      consoleErrors.push(message.text());
    }
  });

  await page.goto(`${baseURL}/index.html`);
  await expect(page.locator("#hero-copy")).toContainText("10,");
  await expect(page.locator("#library-status")).toContainText("matching species");
  await expect(page.locator("#library-grid .card")).toHaveCount(480);

  await page.locator("#si").fill("Amaryllis australis");
  await expect(page.locator("#library-status")).toContainText("matching species");
  await expect(page.locator("#library-grid .card").first()).toContainText("Amaryllis");
  await page.locator("#filterClimate").selectOption("temperate");
  await expect(page.locator("#library-status")).toContainText("1 filters active");
  await page.locator("button", { hasText: "Clear Filters" }).click();
  await expect(page.locator("#library-grid .card")).toHaveCount(480);

  await page.locator("#link-ecosystem").click();
  await expect(page.locator("#ecoTempValue")).toContainText("°C");
  await expect(page.locator("#ecoHumValue")).toContainText("%");
  await expect(page.locator("#ecoStats")).toContainText("Population:");
  await expect(page.locator("#ecoStats")).toContainText("Shannon diversity:");
  await page.waitForFunction(() => window.ecosystem?.population?.length > 0);

  await page.locator("#link-evolution").click();
  await page.locator("button", { hasText: "Run Selection Step" }).click();
  await expect(page.locator("#genome-info")).toContainText("Best fitness:");

  await page.locator("#link-lab").click();
  await page.locator("#labSpeciesSelect").selectOption({ index: 9000 });
  await expect(page.locator("#lab-grid .card")).toHaveCount(1);
  await expect(page.locator("#lab-detail")).toContainText("Limiting factor:");
  await expect(page.locator("#labLightValue")).toContainText("%");
  await expect(page.locator("#lab-metrics")).toContainText("Photosynthesis");

  await page.locator("#labWater").fill("15");
  await page.waitForFunction(() => document.querySelector("#stat-active")?.textContent.includes("Vitality"));

  expect(consoleErrors).toEqual([]);
});
