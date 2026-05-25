from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Using server is better for loading linked scripts/css
            page.goto("http://127.0.0.1:8080/index.html")
            page.wait_for_load_state("networkidle")

            # Wait for content
            page.wait_for_selector(".card", timeout=5000)

            page.set_viewport_size({"width": 1280, "height": 1600})
            page.screenshot(path="verification/final_main_view.png")

            # Click 'Annuals'
            page.get_by_text("Annuals", exact=True).first.click()
            page.wait_for_timeout(500)
            page.screenshot(path="verification/final_annuals_filter.png")

            # Open rose modal (if not filtered out)
            # Or just search for Rose
            page.locator("#si").fill("Rose")
            page.wait_for_timeout(500)
            page.get_by_text("Rose", exact=True).first.click()
            page.wait_for_selector(".modal-ov.open", timeout=5000)
            page.screenshot(path="verification/final_rose_modal.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
