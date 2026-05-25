from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            path = "file://" + os.path.abspath("index.html")
            page.goto(path)

            # Wait for content to load
            page.wait_for_selector("#fg", timeout=5000)

            # Take screenshot of filters
            page.set_viewport_size({"width": 1280, "height": 1600})
            page.screenshot(path="verification/full_view.png")

            # Count cards
            cards = page.locator("#fg .card")
            print(f"Total cards: {cards.count()}")

            # Click 'Annuals' if it exists
            annuals = page.get_by_text("Annuals", exact=True)
            if annuals.count() > 0:
                annuals.first.click()
                page.wait_for_timeout(500)
                page.screenshot(path="verification/annuals_filter.png")
                print(f"Cards after Annuals filter: {cards.count()}")

            # Click 'Tropical' in Climate
            tropical = page.get_by_text("Tropical", exact=True)
            if tropical.count() > 0:
                tropical.first.click()
                page.wait_for_timeout(500)
                page.screenshot(path="verification/tropical_annuals_filter.png")
                print(f"Cards after Tropical filter: {cards.count()}")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
