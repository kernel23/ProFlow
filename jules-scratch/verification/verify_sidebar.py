
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto('file:///app/index.html')
    page.screenshot(path='jules-scratch/verification/sidebar-default.png')
    page.click('#toggle-sidebar-btn')
    page.wait_for_timeout(500)  # Wait for the animation to complete
    page.screenshot(path='jules-scratch/verification/sidebar-minimized.png')
    browser.close()
