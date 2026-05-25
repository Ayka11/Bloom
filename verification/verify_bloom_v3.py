from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # We can use file path if the server is flaky
            import os
            path = "file://" + os.path.abspath("index.html")
            page.goto(path)
            page.wait_for_load_state("networkidle")

            page.set_viewport_size({"width": 1280, "height": 1600})
            page.screenshot(path="verification/main_view_v3.png")

            # Check for filter buttons
            btns = page.locator(".fb")
            print(f"Found {btns.count()} filter buttons")

            if btns.count() > 0:
                # Click 'Annuals'
                annuals_btn = page.get_by_text("Annuals", exact=True)
                if annuals_btn.count() > 0:
                    annuals_btn.first.click()
                    page.wait_for_timeout(500)
                    page.screenshot(path="verification/filtered_annuals_v3.png")

            # Open rose modal
            rose = page.get_by_text("Rose", exact=True)
            if rose.count() > 0:
                rose.first.click()
                page.wait_for_selector(".modal-ov.open", timeout=5000)
                page.screenshot(path="verification/rose_modal_v3.png")

        except Exception as e:
            print(f"Error during playwright: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
