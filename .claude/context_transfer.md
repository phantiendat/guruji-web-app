# CHUYỂN GIAO BỐI CẢNH (CONTEXT TRANSFER HAND-OFF)

**Thời gian xuất:** 2026-04-10
**Trạng thái Dự án:** Planning xong, chuẩn bị vào phiên Coding (Fast Mode bằng Claude 3.7 Sonnet).

## 1. MỤC TIÊU TIẾP THEO (Tác vụ cho Agent phiên mới)
- Viết Component/Trang web React mới mô tả chủ đề tâm linh: **Công Đức và Phước Báu Nhân Thiên** của Minh sư Ruma.
- **Nguồn bản vẽ thiết kế:** Các yêu cầu chi tiết đã được đóng gói và chốt tại file `/directives/cong_duc_phuoc_bau.md`. Lấy Text từ đó để hiển thị ra UI.
- Đây là một đoạn UI tĩnh mang cốt truyện (Storytelling), không cần can thiệp logic Database, chỉ cần giao diện xuất sắc.

## 2. QUY TẮC KIẾN TRÚC & TECH STACK ĐÃ CHỐT
- **Stack:** Khung sườn React hiện tại kết hợp `TailwindCSS` và `framer-motion` (để làm hiệu ứng bay mờ ảo Fade in/Blur reveal).
- **Typography:** Bắt buộc dùng `@tailwindcss/typography` (tức là class `prose`) để format đoạn văn bản tâm linh cho đẹp, dễ đọc trên Mobile.
- **Tính năng độc đáo:** Phải bóc tách câu "Quote" (Trích dẫn) hay nhất thiết kế to rõ, bắt mắt (VD: *Đức tin là mẹ công đức*).
- **Màu sắc:** Phải tuân thủ tone tĩnh lặng, cao quý: Màu nền Dark hoặc pha Trắng ngà (Ivory), màu text và viền lấy cảm hứng từ Đất nung (Terra) và Vàng đồng (Gold). Không dùng màu neon rác.

## 3. LỆNH KHỞI CHẠY CHO PHIÊN TỚI
Vui lòng gửi prompt sau cho Claude 3.7 Sonnet trong box chat mới:
> `# 📂 Guruji ruma web | 💻 CODING MODE | 🎯 Code tính năng Công Đức Phước Báu`
> `Hãy đọc /directives/cong_duc_phuoc_bau.md và /.claude/context_transfer.md. Thực hiện bước code nguyên khối theo nguyên tắc DO Framework ngay lập tức.`
