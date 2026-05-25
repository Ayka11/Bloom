import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            await page.goto("http://localhost:8080/index.html")
            await page.wait_for_selector("#ecosystem")
            # Wait for simulation to update (it updates every second)
            await asyncio.sleep(3)

            # Check for Pollination Simulator values
            activity = await page.inner_text("#sim-p-activity")
            success = await page.inner_text("#sim-p-success")

            print(f"Pollinator Activity: {activity}")
            print(f"Pollination Success: {success}")

            if activity == "--" or success == "--":
                print("Error: Pollination metrics not updated.")
                exit(1)

            await page.screenshot(path="pollination_verification.png", full_page=True)
            print("Screenshot saved to pollination_verification.png")
        except Exception as e:
            print(f"Error: {e}")
            exit(1)
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
