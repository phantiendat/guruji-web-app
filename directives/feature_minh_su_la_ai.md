# Kế Hoạch Triển Khai Module: Minh Sư Là Ai? (Who Is The Master?)

## 1. Tóm Tắt Tính Năng (Feature Summary)
Module **"Minh Sư Là Ai?"** là một không gian giới thiệu chuyên sâu về khái niệm "Minh Sư" (The Enlightened Master) dựa trên những lời khai thị của Guruji Ruma. So với bản thiết kế ban đầu, nội dung đã được mở rộng mạnh mẽ thêm các bài "Vấn Đáp Khai Thị" được tổng hợp từ dữ liệu NotebookLM, bao gồm:
- **Minh Sư là hiện thân của trí huệ:** Bản thân Minh sư chính là Trí huệ, là tấm gương đại diện cho sự sáng suốt, giúp chúng sinh thấy được vị Phật bên trong.
- **Vai trò truyền tâm ấn:** Minh sư sử dụng lực lượng tâm linh để chọc thủng vô minh, đánh thức linh hồn.
- **Nghề Minh Sư & Sứ mệnh:** Dìu dắt, thắp sáng trí huệ, hóa giải nghiệp chướng dư thừa. Vị thuyền trưởng chuyên chở linh hồn qua bể khổ sanh tử luân hồi.

## 2. Kiến Trúc UI & Tech Stack (Đã chốt)
- **Tech Stack:** React (JSX) + Tailwind CSS + `Framer Motion` (Tạo hiệu ứng fade-in mượt mà, tĩnh lặng theo nhịp thiền).
- **Layout Approach:** **Giao diện Storytelling** (Cuộn trang chậm rãi, các dòng chữ hiện dần từ khoảng không, mang lại cảm giác đọc một cuốn sách tâm linh cổ xưa). Bổ sung thiết kế Accordion (QnA Card) tương tác mở rộng cho các câu hỏi vấn đáp mượt mà, không phá vỡ dòng chảy tĩnh lặng.
- **Phạm vi hiển thị (Scope):** Chỉ thiết kế UI text chứa tinh hoa NotebookLM. Giữ sự trang nghiêm tuyệt đối.

## 3. Nội Dung Tinh Hoa Cần Render (Data to Render)
Thiết kế luồng Storytelling qua 5 Sections chính:
1. **Hero Banner:** Mở đầu với câu hỏi lớn dạng Typography ở trung tâm màn hình "Minh Sư là ai?". Từ từ fade in.
2. **I. Bản Thể (The Truth):** *"Bản thân Minh sư chính là Trí huệ... Sứ mệnh của ngài không phải là ban phát phép màu bề ngoài, mà là thắp sáng ngọn lửa thiêng ngủ quên bên trong."*
3. **II. Lực lượng cởi trói (The Power):** *"Linh hồn con người mù lòa bao kiếp, cần Minh sư truyền tâm ấn, dùng lực lượng để 'chọc thủng bức màn vô minh'."*
4. **III. Duyên phận (The Destiny):** Focus vào quote: *"Gặp được Minh sư tại thế là phước báu nhân thiên cực kì to lớn..."*
5. **IV. Vấn Đáp Khai Thị (Q&A Sections):** Giải đáp các thắc mắc (Tại sao cần Minh Sư để giải thoát, Trí huệ Minh sư khác gì thông minh trần tục, Lực lượng của nụ cười/lời chúc Minh Sư...).
6. **V. Lời Kết Nguyện (Conclusion):** Lòng từ bi vô bờ bến của vị chân sư tại thế. Lời kết chắt lọc từ "Tinh hoa Trí huệ".

## 4. Yêu Cầu Cho Coding Agent (Tiêu chí DONE)
- Tuân thủ chuẩn "One Write" nguyên khối vào file `MinhSuLaAiSection.jsx`, code chứa cả logic Accordion state.
- Giao diện phải tương thích 100% Mobile First.
- Xử lý mượt Typography, hiệu ứng Frame Motion mượt mà và nhịp độ trễ (`staggerChildren`) đúng chuẩn tâm linh dòng thiền.
