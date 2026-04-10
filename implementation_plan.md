# 📂 Guruji Ruma | 🧠 PLANNING MODE | 🎯 Tối ưu Navigation & UI (TÁI ĐÁNH GIÁ: MỞ RỘNG MÔ QUY MÔ)

---

## 🚨 VẤN ĐỀ MỚI PHÁT SINH
Số lượng chủ đề (Module) của web đang tăng lên đáng kể. Phương án cũ **(Floating Pill chứa toàn bộ link)** đã bị quá tải: nếu số lượng module vượt qua 5-6, viên điều hướng sẽ bị tràn màn hình, đặc biệt là trên mobile. 

Do đó, **Phòng Tranh Luận Ác Quỷ (Round-Robin)** được tái khởi động để tìm phương án có khả năng scale vô hạn mà vẫn giữ nguyên **Vibe Thiền Định**.

---

## BÁO CÁO PHÒNG TRANH LUẬN LẦN 2

### Agent A — The Architect (Đề xuất giải pháp mở rộng)
- **Kiến trúc SPA vẫn có thể giữ (nếu lazy load content tốt), nhưng Nav phải thay đổi.**
- **Phương án A1:** Chuyển thanh Floating Pill thành thanh **Scrollable (cuộn ngang)**. Người dùng có thể vuốt ngang thanh Pill để xem thêm các mục.
- **Phương án A2:** Thay vì chứa tất cả link, ta đổi thanh Floating thành một **Nút Tròn Góc Dưới chứa Icon Hamburger**. Khi bấm vào, một **Full-screen Overlay Menu** mượt mà (chỉ tốn toàn màn hình) sẽ hiện ra. Trong đó liệt kê tất cả các chủ đề một cách thoải mái, có thể cuộn, tìm kiếm, không giới hạn.
- **Phương án A3:** Chuyển sang **React Router (Multi-page)**. Khai tử thiết kế cuộn 1 trang. Mỗi bài giảng là 1 trang riêng. Nav sẽ là AppBar thông thường.

### Agent B — The Devil's Advocate (Phản biện gay gắt)
- **Đánh gục A1:** Vuốt ngang thanh Pill trên mobile là thảm họa UX. Người dùng không biết họ cần vuốt, và nó làm mất đi sự tĩnh tại. Không ai muốn "tìm hì hục" mục tâm linh trong 1 cái không gian hẹp xíu.
- **Đánh gục A3:** Chuyển sang Multi-page đứt gãy "hành trình". Nhưng nếu 20-30 module nhét trong 1 trang HTML thì máy yếu (mobile cũ) sẽ crash trình duyệt. Chúng ta **bắt buộc** phải hướng tới React Router sớm muộn, nhưng hiện tại nếu user chưa muốn đập đi xây lại, ta phải cẩn thận.
- **Về A2 (Full-screen Overlay):** Ý tưởng cực tốt về khả năng mở rộng. Dù 10 hay 100 chuyên đề thì Overlay vẫn chứa được. Nhược điểm là "Menu ẩn" thì người dùng không thấy tiến trình học của mình đang ở đâu.

### Agent C — The Orchestrator (Phán quyết & Điều phối)

Để đáp ứng quy mô vô tận của content mà chặn đứng sự quá tải UI, chúng bản sử dụng **Phương án "Zen Controller + Full-screen Overlay"**.

**Phán quyết:** Thay vì thanh Pill chứa tất cả Tên module, nó sẽ biến thành một **"Minimalist Controller"**. 
1. Controller này sẽ cực kỳ ngắn gọ, neo cố định ở góc dưới/giữa màn hình với 2 hoặc 3 thành phần chính: 
   - `[ Icon Hamburger - Danh Mục ]` (Mở Full-screen Overlay Nav).
   - *Tùy chọn:* `[ Nút Tiếp ↑ ]` / `[ Nút Lùi ↓ ]` (Để nhảy sang module kế tiếp ngay lập tức).
2. Khi bấm `[Danh Mục]`, dùng **Framer Motion** bung lên một **Full-screen Glassmorphism Navigation Menu**. Trong menu này, các chủ đề được liệt kê thoáng đãng thành danh sách dọc. Dù có 50 chuyên đề cũng chỉ cần cuộn dọc để đọc. Rất thiền, rất tĩnh lãng.
3. *Về vấn đề SPA vs Router:* Tương lai xa ta sẽ tách route. Còn bây giờ, kiến trúc Full-Screen Nav này có thể điều hướng Anchor `#id` cực kỳ tốt. Khi bấm vào 1 item trong Overlay, đóng Overlay và cuộn đến `#module-x`.

---

## 2. Directive Tech Spec (Version Scalable)

**Kiến trúc Nav:**
- Floating Controller (nhỏ gọn) + Full-screen Overlay Navigation (không giới hạn mục bài).

**Danh sách CSS Class & Elements:**
1. **Floating Controller:**
   - Pill nhỏ cố định: `fixed bottom-6 left-1/2 -translate-x-1/2 z-[40] rounded-full backdrop-blur-xl bg-stone-900/60 border border-white/10 flex items-center justify-center p-2 gap-4`
   - Nút Danh mục (Menu Button): Chứa một SVG Icon dạng 3 sọc thanh mảnh hoặc text `Danh mục`.
2. **Full-screen Overlay:**
   - Wrapper: `fixed inset-0 z-[60] bg-stone-950/90 backdrop-blur-md flex flex-col justify-center items-center overflow-y-auto`
   - Nút Close (X): `absolute top-8 right-8 text-white/50 hover:text-white`
   - Item danh sách: `text-2xl text-stone-400 hover:text-white font-light py-4 transition-colors`

**Danh sách Component:**
1. **[NEW] `src/components/NavigationOverlay.jsx`**:
   - Chứa state `isOpen` (có/không hiện menu).
   - Component Render một thanh Floating Controller ở dưới (luôn hiện). Khi click, cập nhật state `isOpen = true`, render thêm Overlay tràn màn hình.
   - Nhận mảng properties cấu hình (VD: `modules = [{id: 'tinh-hoa', name: 'Tinh Hoa Trí Huệ'}, ...]`) để map ra danh sách.
2. **[MODIFY] `src/App.jsx`**:
   - Truyền list module ID vào `NavigationOverlay`.
   - Giữ lại các `<section id="...">`. Bỏ `FloatingNav.jsx` cũ.

**Animation Specs (Framer Motion):**
- Overlay mở lên: `initial={{ opacity: 0, y: 50 }}` animate tới `{{ opacity: 1, y: 0 }}`, duration 0.4.
- Stagger children: Các thẻ danh sách hiện dần lên sau khi Overlay mở lên (`staggerChildren: 0.1`).

---

## 3. Prompt cho Coding Agent (Cut & Paste cho phiên tiếp theo)

> **ROLE & CONTEXT:**
> Bạn là Vibe Coding Agent. Hiện tại, số lượng chuyên đề của web đang tăng lên rất nhiều. Kiến trúc thanh cài link ngang (Pill) đã thất bại vì tràn layout. Chuyển sang triển khai chiến lược thiết kế "Zen Controller + Full-screen Overlay Navigation" dùng React + Tailwind v4 + Framer Motion. 
> 
> **TASKS:**
> 1. Đảm bảo có `html { scroll-behavior: smooth; }` trong `index.css`.
> 2. Gán các thẻ `<section id="module-ABC">` cho từng phần nội dung trong `App.jsx` (Tinh Hoa, Đạo Đời, Công Đức, Minh Sư, Thiên Cổ Đại...).
> 3. Tạo mới Component `src/components/NavigationOverlay.jsx` bao gồm 2 phần trong 1 file:
>    - **Phần 1: Minimalist Floating Controller**. Một nút (Pill rất nhỏ) gắn dưới đáy màn hình (`fixed bottom-8 left-1/2 -translate-x-1/2`). Nó có icon "Hamburger" hoặc chữ "Menu / Danh Mục". Style Glassmorphism (`bg-stone-900/60 backdrop-blur-md text-white border border-white/10 px-6 py-2 rounded-full cursor-pointer hover:bg-stone-800`).
>    - **Phần 2: Full-screen Overlay Menu**. Khi click Controller, bung ra màn hình overlay chiếm toàn bộ màn trập (`fixed inset-0 z-50 bg-stone-950/95 flex flex-col justify-center items-center`). Có nút `[ X ]` hoặc chữ `[ Đóng ]` góc phải trên. Dùng Framer Motion để tạo hiệu ứng mờ dần (`opacity`) và đẩy từ dưới lên (`y`) mượt mà tĩnh tại.
>    - Trong Overlay, `map()` toàn bộ tên các Module thành một Menu danh sách thả dọc ở giữa màn hình. Size text lớn (`text-2xl` hoặc `text-xl`), màu chữ `stone-400` hover thành `white`, khoảng cách `py-4`.
>    - Khi bấm vào 1 Item trong Overlay: Gắn link `<a href="#id-cua-module" ...>` kèm sự kiện **Đóng Overlay lập tức**. Trình duyệt sẽ tự smooth scroll tới chuyên đề.
> 4. Import và đưa `NavigationOverlay` vào `App.jsx`.
>
> **CONSTRAINTS:**
> Tuyệt đối duy trì Vibe thiền định (minimalism). Layout Overlay không giới hạn chiều cao, nên đảm bảo nếu nội dung mục lục dài nó có thể scroll dọc (`overflow-y-auto`) bên trong Overlay nhưng cuộn một cách thanh lịch (ẩn scrollbar nếu có thể). Không hiệu ứng chói lóa. Tuân thủ DO Framework của kiến trúc web.
