# Bộ Prompt Mẫu Cho Quy Trình 2 Phiên Chat (Dual-Agent Vibe Coding) - V4.0

---

## PHIÊN 1 - PLANNING (Gemini 3.1 Pro / Opus / o1 | Planning Mode)

### Dành cho Dự Án Cũ (Đang chạy, lần đầu nhúng Bootstrap)

```text
# 📂 [ĐIỀN TÊN DỰ ÁN DƯỚI 3 TỪ] | 🧠 PLANNING MODE | 🎯 Chuyển đổi DO Framework
Đây là dự án cũ đang chạy, tôi muốn bắt đầu ép vào chuẩn DO Framework.

BƯỚC 1: Đọc tệp `VIBE_BOOTSTRAP.md`. KHÔNG XÓA/SỬA cấu trúc đang có. Chỉ bổ sung thư mục `/.claude/` và `/directives/` nếu thiếu. Cập nhật `.gitignore` để ẩn môi trường và file rác.
BƯỚC 2: Yêu cầu tôi vô hiệu hóa các MCP Servers rác.
BƯỚC 3: Dùng Iceberg Technique (chỉ quét cấu trúc cây thư mục) để nhận diện Tech Stack cũ và ghi vào `/.claude/memory.md`.
BƯỚC 4: Khởi động "HỢP ĐỒNG PROMPT" (Tư duy Claude Desktop). Hãy hỏi tôi 5 câu gốc (Output, Stack, Scope, DONE, Risks). BẮT BUỘC ĐI KÈM CÁC GỢI Ý/GIẢI PHÁP SẴN (Options A/B) để tôi dễ chọn. CHỜ tôi điền đủ 5 câu then chốt.
```

---

### Dành cho Dự Án Mới (Khởi tạo từ đầu)

```text
# 📂 [ĐIỀN TÊN DỰ ÁN DƯỚI 3 TỪ] | 🧠 PLANNING MODE | 🎯 Khởi tạo dự án
Chúng ta bắt đầu dự án Vibe Coding mới.

BƯỚC 1: Đọc tệp `VIBE_BOOTSTRAP.md` và tuân thủ tuyệt đối DO Framework. Thiết lập kiến trúc gốc (Tạo folders /.claude/, /directives/, /executions/). Khởi tạo Git tự động và cập nhật file ignores.
BƯỚC 2: Yêu cầu tôi vô hiệu hóa bớt các MCP Servers rác trên Tool của bạn để giải phóng 20% token.
BƯỚC 3: "HỢP ĐỒNG PROMPT" (Tư duy Claude Desktop). Hãy hỏi tôi 5 câu gốc (Output, Tech Stack, Scope, Criteria, Risks). BẮT BUỘC ĐI KÈM CÁC GỢI Ý/GIẢI PHÁP SẴN (Options A/B) để tôi dễ chọn. Chờ tôi điền đủ 5 câu then chốt.
BƯỚC 4: Rời rạc hóa bản thiết kế và lưu thành các module nhỏ tại `/directives/`.
```

---

### Dành cho Lập kế hoạch tính năng mới

```text
# 📂 [ĐIỀN TÊN DỰ ÁN DƯỚI 3 TỪ] | 🧠 PLANNING MODE | 🎯 Tính năng: [TÊN TÍNH NĂNG]
Để chuẩn bị năng lượng, hãy dùng Lệnh Search tìm tải thông số của: `VIBE_BOOTSTRAP.md` và `/.claude/memory.md`. 
Tính năng / Mục tiêu mới của tôi: [MÔ TẢ CHI TIẾT TÍNH NĂNG Ở ĐÂY].

BƯỚC 1: Thực thi Hợp đồng Prompt (5 câu bắt buộc). Nhớ đưa ra các Gợi Ý (Options) tư vấn đi kèm kiểu Claude Desktop trước khi đợi tôi duyệt.
BƯỚC 2: Mở Context 7 MCP / Tool Browser để check docs của API thực tế. Cấm ảo hóa bịa hàm.
BƯỚC 3: Dùng Document Sub-Agent (tác nhân ngầm) / hoặc áp dụng One Write để sinh bản kế hoạch Module mới tại `/directives/[feature_name].md`.
```

---

## PHIÊN 2 - CODING (Claude 3.7 Sonnet / High Logic Agent | Fast Mode)

### Giai đoạn Bắt đầu vòng đời Code (Daily Coding)

```text
# 📂 [ĐIỀN TÊN DỰ ÁN DƯỚI 3 TỪ] | 💻 CODING MODE | 🎯 [TÊN MODULE ĐANG CODE]
Nạp dữ kiện khởi động từ `/directives/` và `/.claude/memory.md`.
1. Áp dụng Tảng Băng Trôi (Iceberg Technique): KHÔNG đọc tràn codebase. Cần check logic ở đâu, dùng `grep_search` dò tìm tên hàm.
2. Code tuân thủ lệnh One Write: Viết đè cả block lớn hoặc 1 file module trong RẤT ÍT TOOL-CALL. Đừng làm lắt nhắt từng dòng sinh loop ngầm.
3. Thực thi Karpathy Auto-research Loop nếu tối ưu code bị lỗi (Định giả thuyết -> Test -> Giữ -> Rollback nếu vẫn lỗi, báo cáo kết quả luôn).
4. LIVE STATUS: Luôn in `[⚙️ LIVE CONTEXT STATUS: Turns: [X] | Load: [Y]/10]` dưới cùng CỦA BẤT KỲ CÂU TRẢ LỜI NÀO. Nếu mức độ Load đạt >= 8/10, hiển thị cảnh báo ĐỎ bắt buộc yêu cầu xuất `context_transfer.md` để chuyển phiên!

>>> QUY TẮC BẤT DI BẤT DỊCH (DOCUMENT SUB-AGENT):
Khi hoàn thành tác vụ/thay đổi hàm cốt lõi, BẠN (Main Agent) KHÔNG ĐƯỢC tự mình ghi Update vào file markdown `/directives/implementation_plan.md`. Bắt buộc giao task đọc code và Update doc Markdown cho một Agent chạy ngầm riêng rẽ, để chống treo não do context lộn xộn.
```

---

### Chuyển giao bối cảnh (Mở Phiên NÃO MỚI)

```
Dừng mọi Code Edit. Bối cảnh phiền phức quá rồi, kích hoạt Context Transfer Hand-off!
1. Check lại trạng thái module ở thư mục `/directives/`.
2. Tạo file `/.claude/context_transfer.md` ghi tóm lược Kiến trúc dòng lệnh, API đã dùng và Bug đang cắm mốc.
3. Không luyên thuyên trên khung chat. Commit trạng thái vào Git.
4. Chờ tôi mở Chat mới! (Trong chat mới tôi sẽ chèn file transfer này vào).
```

---

### Gọi phòng Tranh luận Ác Quỷ (Devil's Advocate Reviewer)

```
Block logic tiếp theo cực kỳ nhạy cảm và rủi ro nếu sai. Khởi tạo "Phòng Tranh Luận Round-Robin" qua các Sub-Agents (Zero Context):
- Agent A: Trình bày Support Logic hiện tại.
- Agent B: Đóng vai Devil's Advocate (Kẻ soi mói) cố tình đâm chọt tìm mọi cách crack mã, tìm race conditions hay API hổng trong tư duy của A.
- Agent C: Điều phối Orchestrator tổng hợp tranh tài và xuất ra đoạn code thống nhất an toàn nhất. Output cho tôi xem!
```

---

### Bắn UI HTML từ Ảnh mẫu (UI Sniping)

```
Phần giao diện này buộc phải y hệt ảnh thiết kế (UI Sniping).
BƯỚC 1: Tôi sẽ cung cấp Screenshot. Dừng lại chờ tôi.
BƯỚC 2: Sub-Agent hoặc bạn hãy phân tách lớp Grid/Spacing ra file nháp JSON.
BƯỚC 3: Tái thiết kế trực tiếp code theo Atomic CSS / TailwindCSS trong một lần (One-Write Rule).
(Luật: Trượt pixel qua 3 lần -> Tự Phủ Trượt báo cáo đầu hàng, chờ Manual Intervention).
```

---

### Tích hợp Tool / MCP Mới (Google Stitch, Supabase, API ngoài)

```
Tôi cần tích hợp thêm hệ sinh thái mới vào dự án, cụ thể là: [TÊN TOOL / VD: STITCH]. Thực thi ngay quy tắc "Cáo Mượn Oai Hùm":

BƯỚC 1: Knock Docs First: Dừng lại! KHÔNG đoán bừa hàm API. Cào tài liệu Official Docs / Schema mới nhất từ trang chủ của tool này nạp vào bộ nhớ.
BƯỚC 2: Zero-Sum Governance: Yêu cầu tôi vô hiệu hóa các MCP rác không liên quan để hồi bộ nhớ Token.
BƯỚC 3: Đóng gói: Cấu hình `mcp_config.json` nếu có máy chủ gốc. Nếu tự viết kết nối, đóng gói logic thao tác thành 1 file tại `/.claude/skills/[tên_tool].md` dùng Front Matter YAML (siêu ngắn).
BƯỚC 4: Kiểm chứng: Viết ngay 1 test script ngắn gọn gọi Tool/Skill đó ra để chứng minh nó đã thông kết nối.
```

---

### Tuyệt kỹ "Scrap & Recreate" (Khi AI bị kẹt vòng lặp / Bóp méo code)

```
DỪNG LẠI TẤT CẢ! Module [TÊN MODULE] hiện tại đang biến thành một mớ bòng bong vì bạn liên tục áp dụng các biện pháp vá lỗi tạm bợ và "ảo hóa" logic.
Thực thi lệnh "Scrap and Recreate" (Đập đi xây lại):

BƯỚC 1: Xóa sạch toàn bộ những luồng suy nghĩ thừa thãi và các đoạn mã rác hiện có trong file.
BƯỚC 2: Tự động chạy Context 7 MCP (hoặc Search) cào lại tài liệu Official mới nhất liên quan đến thuật toán/công cụ này.
BƯỚC 3: Xây dựng lại giải pháp chuẩn xác duy nhất trong đầu.
BƯỚC 4: Viết đè mới hoàn toàn (One-Write) thay vì cố sửa tuần tự (sequential edits) cái đống bừa bộn cũ.
```

---

### Mẫu Tạo Kịch Bản Cào Data Chống Chặn (Playwright Anti-Detect)

Được sử dụng khi bạn cần AI viết một file script bằng Python để vượt qua Cloudflare/Google đăng nhập, sau đó cào text tài liệu về ổ cứng (Giống hệt cách Antigravity đã lấy dữ liệu NotebookLM).

```
Hãy viết một script Python bằng `playwright.async_api` để cào trang web bảo mật: [LINK_TRANG_WEB_CẦN_CÀO_Ở_ĐÂY]. 

Hệ thống Anti-Detect Interactive Scraper này bắt buộc tuân thủ RÀNG BUỘC CỨNG sau:

BƯỚC 1: ANTI-DETECT BOT: 
- `launch_persistent_context` bằng Chrome thật (tại thư mục `./tmp_chrome_profile`).
- `headless=False` (Bắt buộc hiện màn hình).
- Thêm `args=['--disable-blink-features=AutomationControlled']` và xóa cờ `--enable-automation` để lách luật.
- Đánh lừa cờ Webdriver bằng file JS init: định nghĩa lại `navigator.webdriver` thành `undefined`.

BƯỚC 2: TẠM DỪNG THÔNG MINH (Interactive Pause):
- Ngay khi load trang xong, IN TO RA CONSOLE dòng cảnh báo yêu cầu người dùng thao tác đăng nhập.
- Đóng băng luồng chạy bằng lệnh `await asyncio.to_thread(input, "CHỜ BẠN ĐĂNG NHẬP XONG... HÃY QUAY LẠI ĐÂY ẤN ENTER ĐỂ CÀO...")` để tôi có thời gian điều khiển trình duyệt bằng tay.

BƯỚC 3: CÀO DATA QUA THỂ NỘI TẠI:
- Khi tôi ấn Enter ở console, tự chờ 2 giây (`asyncio.sleep(2)`).
- Chạy Javascript `page.evaluate("document.body.innerText")` để hút siêu tốc toàn bộ text trên màn hình.
- Xuất chuỗi text ghi đè ra một file có đuôi `.txt` ở utf-8, xử lý logic đóng Context gọn gàng.
```
