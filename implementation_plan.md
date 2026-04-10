# KẾ HOẠCH THỰC THI (IMPLEMENTATION PLAN) - TỔNG HỢP CÁC MODULE
Last updated: 2026-04-10

- [x] **Phase 1: Setup Môi trường & Kiến trúc gốc**
  - [x] Khởi tạo Vite + ReactJS cẩn thận (không ghi đè DO Framework).
  - [x] Cài đặt TailwindCSS v4 (@tailwindcss/vite) và `framer-motion`.
  - [x] Cấu hình Design Tokens Tâm linh (index.css với Golden Wisdom + Deep Space Blue).

- [x] **Phase 2: Bóc tách Data → Các file JSON tĩnh**
  - [x] Quét các file `notebooklm_data_*.txt`.
  - [x] Bóc nội dung Trí Huệ → `src/data/tri_hue.json` (16 items: 8 tinh hoa + 5 bài kệ + 3 vấn đáp).
  - [x] Bóc nội dung nguyên bản → `src/data/dao_doi.json` (7 cặp worldly/spiritual giữ nguyên 100% văn phong Minh sư).

- [x] **Phase 3: Build Module "Trí Huệ" (Module 1)**
  - [x] **Hero Section** với starfield + orchid SVG + golden gradient typography.
  - [x] **FilterBar** accessible (tablist ARIA) với 4 options.
  - [x] **ContentGrid**: QuoteCard + VerseCard + QnACard với SpiritualAccordion.
  - [x] **useIntersectionObserver** hook cho scroll fade-in animations.

- [x] **Phase 4: Build Module "Đạo & Đời" (Module 2)**
  - [x] **dao_doi.json**: 7 cặp đối lập Trần Thế / Tâm Linh, nguyên bản 100%.
  - [x] **DaoDoiSection.jsx**: giao diện song hành 2 cột, ký hiệu ☯ phân cách.
  - [x] **Framer Motion**: `useInView` + `staggerChildren` + slide-in từ 2 bên.
  - [x] **Jade/Slate palette**: token màu xanh ngọc (#2e9e7d) và xám đá (#64748b).
  - [x] **Hover glow**: border và box-shadow animate khi hover cột.
  - [x] **Closing verse**: jade-bordered blockquote kết thúc section.
  - [x] **Mobile responsive**: pair-row stack thành cột dọc trên màn nhỏ.

- [ ] **Phase 5: Polish + Responsive Hợp nhất**
  - [ ] Lighthouse audit (Performance/Accessibility score).
  - [ ] Netlify deployment (netlify.toml config).
  - [ ] Push toàn bộ lên GitHub repo `guruji-web-app`.
