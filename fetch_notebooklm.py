import asyncio
from playwright.async_api import async_playwright
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

LINKS = [
    "https://notebooklm.google.com/notebook/dca55d2b-340e-457b-b567-9f325748dc25",
    "https://notebooklm.google.com/notebook/ab7916a6-888c-4f8d-9b2d-b20139944cca",
    "https://notebooklm.google.com/notebook/99e5edce-5877-4f7c-9417-a1c655c354b8"
]

async def scrape_notebook(context, url, index):
    page = None
    if len(context.pages) > 0 and index == 0:
        page = context.pages[0]
    else:
        page = await context.new_page()
        
    print(f"\n==================================================")
    print(f"Đang mở link {index+1}: {url}")
    print(f"==================================================")
    await page.goto(url)
    
    print("\n[!!! CHÚ Ý !!!]")
    print("Vui lòng thao tác trên trình duyệt (Click chọn, đăng nhập Google, mở Notebook...).")
    await asyncio.to_thread(input, "CHỜ BẠN ĐĂNG NHẬP XONG... HÃY QUAY LẠI ĐÂY ẤN ENTER ĐỂ CÀO...")
    
    print("Bắt đầu cào dữ liệu sau 2 giây...")
    await asyncio.sleep(2)
    
    text_content = await page.evaluate("document.body.innerText")
    
    filename = f"notebooklm_data_{index+1}.txt"
    with open(filename, "w", encoding="utf-8") as f:
        f.write(text_content)
        
    print(f"[*] Đã lưu dữ liệu thành công vào file: {filename}")
    if index > 0 or len(context.pages) > 1:
        await page.close()

async def main():
    profile_dir = os.path.abspath("./tmp_chrome_profile")
    os.makedirs(profile_dir, exist_ok=True)
    
    print(f"Khởi động Chrome Persistent Context tại: {profile_dir}")
    
    async with async_playwright() as p:
        context = await p.chromium.launch_persistent_context(
            user_data_dir=profile_dir,
            headless=False,
            args=[
                '--disable-blink-features=AutomationControlled'
            ],
            ignore_default_args=['--enable-automation']
        )
        
        # Đánh lừa cờ Webdriver bằng file JS init
        await context.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', {
                get: () => undefined
            });
        """)
        
        for i, link in enumerate(LINKS):
            await scrape_notebook(context, link, i)
            
        await context.close()
        print("\nHOÀN TẤT TOÀN BỘ QUÁ TRÌNH CÀO DỮ LIỆU.")

if __name__ == "__main__":
    asyncio.run(main())
