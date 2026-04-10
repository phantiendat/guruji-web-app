# 1. Công nghệ trọng tâm (Tech Stack)
- **Framework:** React.js khởi tạo với Vite (để đảm bảo tối ưu hóa tốc độ Dev và Build).
- **Styling:** TailwindCSS để tiện lợi cho việc setup nhanh layout.

# 2. Chiến lược Quản lý UI & Quản trị Rủi ro
- Mặc dù sử dụng TailwindCSS, dư án bắt buộc phải **Xây dựng hệ thống Design Tokens ngay từ đầu** (Color palettes, Typography, Spacing).
- Các tokens này sẽ được cấu hình chặt chẽ vào file `tailwind.config.js` và tệp `index.css` (bằng cú pháp `@layer` hoặc CSS Variables).
- **Phòng chống Rủi ro:** Để kiểm soát vỡ layout trên Safari/Mobile và lỗi hiển thị font (Mojibake), sẽ giới hạn override inline. Tất cả animation và màu sắc phải quy chuẩn qua hệ thống variables. 
- Mọi file text phải lưu ở định dạng UTF-8.
