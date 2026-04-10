# Chỉ thị Xây dựng Module "Đạo & Đời" (Cân bằng Tu học và Làm việc)

## 1. Định hướng Thiết kế (Output)
- **Concept:** Chuyên mục "Đạo & Đời" (Balance of Life).
- **Giao diện Song hành (2 Cột):** Thiết kế dạng đối lập mà hòa hợp. Một bên là biểu tượng của "Áp lực Trần Thế" (Sự biến động, Ngã mạn, Tham vọng vật chất). Cột còn lại đối xứng là "Giải pháp Tâm linh / Giác ngộ" (Sự nhẫn nhịn, Thiền định, Trí huệ, Buông xả).

## 2. Kiến trúc & Hiệu ứng (Tech Stack)
- **Framer Motion:** Sử dụng Framer Motion làm core cho hiệu ứng hoạt ảnh. Tạo cảm giác "cán cân" hoặc hiệu ứng fade-in chéo giữa 2 cột Đời và Đạo. Khi người dùng scroll tới, các mảnh ghép của sự ồn ào sẽ mờ đi và lời khuyên tâm linh sáng lên.
- **Màu sắc (Color Palette):** Chủ đạo tông màu **Xanh Ngọc / Xám Đá (Jade / Slate Gray)**. Đại diện cho sự vững chãi, điềm tĩnh và nguồn năng lượng thanh tẩy giữa chốn thị phi. Đảm bảo Mobile-First.

## 3. Quản trị Nội dung (Scope)
- **Data Source (`src/data/dao_doi.json`):** Cào và bóc tách các đoạn văn từ file data gốc (`notebooklm_data`).
- **Nguyên tắc "Bất Tăng Bất Giảm":** Giữ nguyên vẹn 100% từ ngữ siêu hình, nguyên bản và đậm chất triết lý Phật pháp/Thiền định của Minh sư Ruma. Tuyệt đối không để AI tự ý thêm bớt các từ lóng khởi nghiệp (như startup, KPI, sếp...) làm giảm đi tính linh thiêng của văn bản gốc. Để người trẻ tự dùng căn cơ của mình liễu ngộ.

## 4. Quản trị Điểm mù & Rủi ro
- Để tránh người đọc bị khó hiểu vì văn phong trừu tượng: Giao diện sẽ sắp đặt khoảng trắng (Whitespace) rất rỗng. Đọc xong một câu nguyên văn sẽ có không gian nghỉ mắt. 
- Màn hình điện thoại không có chỗ cho 2 cột song hành: Sẽ chuyển sang thiết kế Card xếp chồng lớp (Stacking cards) trên Mobile.
