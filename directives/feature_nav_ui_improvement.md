# 📂 Guruji Ruma | 🧠 PLANNING MODE | 🎯 Tối ưu Navigation & UI Multi-Module

---

## BỐI CẢNH DỰ ÁN (ĐỌC TRƯỚC)
Web **gurujiruma.vercel.app** là một Single-Page App (React + Vite + Tailwind + Framer Motion) theo phong cách **Storytelling tâm linh** — cuộn trang chậm rãi, nội dung hiện dần.

**Hiện tại có 4 Module lớn:**
- Module I: Tinh Hoa Trí Huệ (Grid cards + filter)
- Module II: Đạo & Đời (2 cột song song)
- Module III: Công Đức & Phước Báu Nhân Thiên
- Module IV: Minh Sư Là Ai? (Storytelling Accordion)

**Vấn đề cốt lõi:** Toàn bộ nội dung nằm trên 1 trang duy nhất (`/`). Khi có 4+ Module, user phải scroll rất dài mới tới nội dung mới. Không có nav/anchor để nhảy nhanh. UX đang bị đứt đoạn, đặc biệt trên mobile.

---

## KHỞI TẠO PHÒNG TRANH LUẬN ÁC QUỶ (Round-Robin)

Block logic thiết kế Navigation & UI Layout cho web tâm linh nhiều module là cực kỳ nhạy cảm: sai hướng sẽ phá vỡ tone thiền định, làm web giống app thông thường. Kích hoạt **"Phòng Tranh Luận Round-Robin"** qua Sub-Agents (Zero Context):

### Agent A — The Architect (Người đề xuất)
Trình bày phương án UI/Nav tối ưu nhất. Phải trả lời:
1. Nên dùng kiến trúc nào: **SPA cuộn 1 trang** vs **Multi-page routing** vs **Tab/Modal overlay**?
2. Nav cụ thể trông như thế nào? (Sticky header? Sidebar? Side dots? Floating pill?)
3. Animation transition giữa các section để giữ nhịp độ thiền?
4. Đề xuất kèm component name (React) và CSS class namespace.

### Agent B — The Devil's Advocate (Kẻ soi mói ác quỷ)
Phản biện và đâm thủng mọi lý luận của Agent A:
- Scroll dài có thực sự là vấn đề với người dùng tâm linh không, hay họ thích trải nghiệm đó?
- Nav sticky có phá vỡ immersive experience?
- Nếu thêm routing, bundle size tăng, SEO thay đổi thế nào?
- Nếu dùng tab, mobile có collapse tốt với content nặng không?
- Rủi ro animate transition giữa 4 module nặng (Framer Motion)?

### Agent C — The Orchestrator (Điều phối thống nhất)
Đưa ra **giải pháp cuối cùng** thống nhất:
- Phán quyết rõ ràng: chọn phương án nào và TẠI SAO
- Output là Directive Tech Spec rõ ràng:
  - Kiến trúc nav được chọn
  - Danh sách component cần tạo/sửa
  - Danh sách CSS class cần thêm
  - Thứ tự implementation (Phase)
  - Tiêu chí DONE
- Prompt sẵn cho Coding Agent để thực thi phiên sau

---

## CONTEXT KỸ THUẬT CẦN BIẾT

```
Tech Stack: React 19 + Vite 8 + Tailwind CSS v4 + Framer Motion 12
Routing hiện tại: KHÔNG CÓ (1 file App.jsx với tất cả section)
Components hiện có:
  - Hero.jsx
  - FilterBar.jsx + ContentGrid.jsx  (Module I)
  - DaoDoiSection.jsx               (Module II)
  - CongDucSection.jsx              (Module III)
  - MinhSuLaAiSection.jsx           (Module IV)
  - Footer.jsx
CSS namespace: .msla-*, .cdpb-*, .daodoi-*
Mobile: @media (max-width: 640px) cơ bản
```

---

## 3 HƯỚNG GỢI Ý CHO AGENT A THAM KHẢO

**Option A — Sticky Side Dots Nav (Tao nhã):**
Chấm tròn nhỏ phải màn hình, hover hiện tên section, click scroll đến. Không phá vỡ layout, phù hợp tone thiền.

**Option B — Floating Pill Nav (Hiện đại):**
Thanh pill nổi icon + label. Ẩn khi scroll down, hiện khi scroll ngược. Phù hợp mobile.

**Option C — React Router + Section Pages (Tách biệt):**
Mỗi module = 1 route riêng (`/tri-hue`, `/dao-doi`, `/cong-duc`, `/minh-su`). Hero page có 4 cards điều hướng. Sạch nhất nhưng đổi kiến trúc lớn nhất.

---

## OUTPUT YÊU CẦU TỪ AGENT C

1. **Phán quyết** — Phương án thắng + lý do tại sao
2. **Directive Tech Spec** — Component, CSS class, animation, Phase
3. **Prompt cho Coding Agent** — Giao việc thực thi ngay phiên sau

---
*Directive tạo bởi Planning Session ngày 10/04/2026 — chờ User duyệt trước khi giao Coding Agent.*
