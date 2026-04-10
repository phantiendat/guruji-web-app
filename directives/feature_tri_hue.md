# Chỉ thị Xây dựng Module "Trí Huệ" (Thiết kế Tôn kính & Tĩnh tại)

## 1. Định hướng Trải nghiệm (Output)
- **Concept:** Dòng chảy tĩnh tại (Storytelling Scroll). Một hành trình cuộn dọc đưa người xem từ việc "Thấu hiểu khái niệm Trí huệ" (Đầu óc phàm phu vs Ánh sáng vĩnh hằng) đến "Thực hành" (Sự khiêm nhường, thiền định) và thưởng thức các bài Kệ thơ.
- **Loại bỏ hoàn toàn Video:** Vì web thiên về yếu tố thiền/trầm lặng, dự án chỉ tập trung nội dung thuần chữ (Text) và Hình ảnh thanh tịnh. (Tuyệt đối không nhúng Iframe YouTube).

## 2. Kiến trúc & Hiệu ứng (Tech Stack)
- **Tối giản (Minimalism) & Tốc độ:** Từ chối nhúng các thư viện JS animation nặng nề. Toàn bộ hiệu ứng được viết thuần cấu trúc bằng CSS/Tailwind (CSS Transitions, nhẹ nhàng như hơi thở).
- **Họa tiết:** Giao diện lồng ghép tinh tế hình tượng hoặc màu sắc của "Hoa Phong Lan" (biểu tượng của Trí Huệ xuất hiện trong gốc data) kết hợp gam màu vàng tâm linh (Golden) và nền xanh thiền định (Dark Blue / Deep Space).

## 3. Chức năng (Scope)
- Bóc tách nội dung thô từ 3 file `notebooklm_data` về "Trí Huệ" để đóng gói thành 1 file dữ liệu tĩnh gốc: `src/data/tri_hue.json`.
- **Tính năng Filter/Search mini:** Tích hợp bộ lọc nhỏ trên UI để người xem dễ dàng phân loại: [Tất cả] | [Câu nói tinh hoa] | [Bài Kệ thơ].

## 4. Quản trị Điểm mù & Rủi ro Giao diện
- **Ngập lụt văn bản (Text Heavy):** Trí huệ chứa nhiều luồng đạo lý sâu sắc. Nếu phơi bày toàn bộ sẽ khiến trang bị ngộp.
- **Giải pháp Accordion / Quote Block:** 
  - Chỉ ưu tiên hiển thị bôi đậm trích dẫn Keyword (ví dụ: *Lòng khiêm nhường là trí huệ cao thâm nhất*).
  - Với các đoạn giải nghĩa dài từ NotebookLM (như "2. Hai mặt của một kiếp người..."), sẽ ẩn giấu vào thẻ dạng `<details>/<summary>` (hoặc Accordion CSS hiện đại) kèm chữ "Đọc thêm...", ấn vào mới mở ra trải nghiệm nhẹ nhàng.
