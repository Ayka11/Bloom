from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://127.0.0.1:8080/index.html")
        page.wait_for_load_state("networkidle")

        # Log console messages
        page.on("console", lambda msg: print(f"JS Console: {msg.text}"))

        # Get innerHTML of #fg
        fg_html = page.locator("#fg").inner_html()
        print(f"FG content length: {len(fg_html)}")
        if len(fg_html) < 100:
            print(f"FG content: {fg_html}")

        browser.close()

if __name__ == "__main__":
    run()
