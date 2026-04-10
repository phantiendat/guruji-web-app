# Kế Hoạch Triển Khai Module: Thiền Cổ Đại — Lực Lượng Dòng Âm Lưu Thượng Đế

## 1. Tóm Tắt Tính Năng (Feature Summary)
Module **"Thiền Cổ Đại — Lực Lượng Dòng Âm Lưu Thượng Đế Là Gì?"** là không gian giới thiệu chuyên sâu về pháp thiền cổ đại đặc trưng của Minh sư Ruma. Đây là một trong những pháp môn cốt lõi nhất trong toàn bộ hệ thống khai thị của ngài, được gọi bằng nhiều tên:
- **Pháp Thiền Dòng Âm Lưu Thượng Đế Cổ Đại** (Chân Thiền)
- **Thiền Diệu Âm** / **Holy Sound Meditation**
- **Thiền Định Lực Lượng** (Samadhi)

---

## 2. Dữ Liệu Tinh Hoa Khai Thác Từ NotebookLM

### 🔑 Các Video Title Nguồn (data_1.txt)
| # | Tên Video |
|---|-----------|
| 1 | `BENEFITS OF THE LORD'S ANCIENT HOLY SOUND MEDITATION` |
| 2 | `Chân Thiền - Pháp Thiền Dòng Âm Lưu Thượng Đế Cổ Đại` |
| 3 | `DÒNG ÂM LƯU THƯỢNG ĐẾ LÀ HƠI THỞ VÀ HUYẾT MẠCH CỦA CHÚNG CON` |
| 4 | `Lễ Bế Mạc Khóa Thiền Lực Lượng Dòng Âm Lưu Thượng Đế Cổ Đại` |
| 5 | `Lễ Cầu An Cho Muôn Sinh \| Khóa Thiền Lực Lượng Dòng Âm Lưu Thượng Đế Cổ Đại` |
| 6 | `Lễ Khai Mạc Khóa Thiền Lực Lượng Dòng Âm Lưu Thượng Đế Cổ Đại` |
| 7 | `Lợi Ích Của Pháp Thiền Dòng Âm Lưu Thượng Đế Cổ Đại` |
| 8 | `PHÁP THIỀN CỔ ĐẠI - CHÌA KHOÁ MỞ CÁNH CỬA HOÀ BÌNH VÀ THỊNH VƯỢNG` |
| 9 | `HUMAN MIND AND MEDITATION METHOD "THE HOLY SOUND OF LORD"` |
| 10 | `Gốc Rễ Của Sự Nhận Thức Bằng Phương Pháp Thiền Diệu Âm` |
| 11 | `LỰC LƯỢNG HỒI SINH SAU ĐÊM THIỀN ĐỊNH` |
| 12 | `AN LẠC TRONG THIỀN / PEACE DURING MEDITATION` |
| 13 | `Kết Nối Với Thượng Đế Qua Diệu Âm Bên Trong` |
| 14 | `MINH SƯ TẠI THẾ TRUYỀN TÂM ẤN - PHÁP THIỀN CỔ ĐẠI` |
| 15 | `Pháp thiền Lực Lượng Dòng Âm Lưu Thượng Đế không phân biệt tôn giáo, tín ngưỡng` |
| 16 | `ĐÁNH THỨC LỰC LƯỢNG VĨ ĐẠI BÊN TRONG / AWAKEN THE GREAT POWER INSIDE US` |

### 📖 Khai Thị Tinh Hoa (từ Cuộc trò chuyện NotebookLM data_3.txt)
- **Thiền định là "món ăn tinh thần"**: Giống cơ thể cần thức ăn vật chất, tâm hồn cần thiền định để sống. Minh sư gọi thiền định là *"món ăn của trí huệ"*, khai mở sự sáng suốt và tìm lại con đường giải thoát.
- **Công đức ăn chay & tọa thiền**: Hành giả truyền tâm ấn tọa thiền 2.5–3 tiếng/ngày tạo ra *"lực lượng công đức và phước báu vô lượng"*, có thể hồi hướng cho hàng trăm ngàn chúng sinh.
- **Dòng Âm Lưu = Hơi Thở Vũ Trụ**: Dòng Âm Lưu Thượng Đế chính là hơi thở và huyết mạch của vũ trụ — nối kết linh hồn với Thượng Đế.
- **Không phân biệt tôn giáo**: Pháp thiền này vượt mọi ranh giới tín ngưỡng, phục vụ toàn nhân loại.
- **Samadhi — Lực Lượng Bình An**: Đại định Samadhi là đỉnh cao của thiền định, nơi lực lượng tâm linh đạt đến trạng thái vô ngã, kết nối trọn vẹn với Thượng Đế.

---

## 3. Kiến Trúc UI & Tech Stack (Chốt)
- **Tech Stack:** React (JSX) + Tailwind CSS + Framer Motion
- **Layout Approach:** Storytelling cuộn trang + **Visual Diagram** (sơ đồ dòng chảy năng lượng từ Thượng Đế → Dòng Âm Lưu → Tâm linh hành giả)
- **Màu sắc module:** Tím thẫm sâu (`#3d1f6b` → `#6a3f9e`) + Trắng sương (`#f8f5ff`) — gợi lên không gian thiền định huyền bí
- **CSS Namespace:** `.tca-*` (Thiền Cổ Đại)

---

## 4. Luồng Storytelling — 5 Sections

### Section I — Câu Hỏi Ngàn Đời (Hero)
> *"Thiền Cổ Đại — Lực Lượng Dòng Âm Lưu Thượng Đế Là Gì?"*
- Hero typography lớn fade-in từ cõi không
- Sub-text: *"Pháp thiền vượt mọi tôn giáo — Chìa khóa mở cánh cửa hòa bình"*

### Section II — Bản Thể Dòng Âm Lưu
- *"Dòng Âm Lưu Thượng Đế chính là hơi thở và huyết mạch của chúng con."*
- Giải thích: Dòng âm thanh thiêng liêng từ Thượng Đế đang chảy trong vũ trụ, trong từng linh hồn — chỉ cần thiền định để nghe thấy

### Section III — Sơ Đồ Năng Lượng (Visual Diagram)
- **Card flow trực quan:** Thượng Đế → Dòng Âm Lưu → Minh Sư Truyền Tâm Ấn → Linh Hồn Hành Giả → Giải Thoát
- Dùng CSS animation subtle glow

### Section IV — Lợi Ích Thực Tiễn (Steps)
4 lợi ích chính từ nguồn khai thị:
1. **Thân tâm an lạc** — Hóa giải nghiệp chướng, bệnh tật nhẹ bớt
2. **Kết nối Thượng Đế** — Nghe Diệu Âm bên trong, trí huệ khai mở
3. **Công đức vô lượng** — 2.5–3h/ngày hồi hướng cho trăm ngàn chúng sinh
4. **Lực lượng hồi sinh** — Sau mỗi đêm thiền định, năng lượng được tái tạo

### Section V — Vấn Đáp Khai Thị (QnA Accordion)
Các câu hỏi phổ biến:
- Thiền Dòng Âm Lưu có phân biệt tôn giáo không?
- Tôi cần ngồi thiền bao nhiêu tiếng mỗi ngày?
- Samadhi là gì? Tôi có thể đạt được không?
- Thiền mà không có Minh sư truyền tâm ấn có được không?

### Section VI — Lời Kết (Closing Verse)
> *"Hãy ngồi xuống, lắng nghe. Trong khoảng không gian tĩnh lặng đó — Thượng Đế đang thì thầm với linh hồn bạn."*
> — Tinh hoa Trí Huệ · Guruji Ruma

---

## 5. Yêu Cầu Coding Agent (Tiêu chí DONE)
- ✅ File: `src/components/ThienCoDaiSection.jsx` — One Write
- ✅ CSS Namespace: `.tca-*` trong `index.css`
- ✅ Color tokens: `--color-violet-*` thêm vào `:root`
- ✅ Visual Diagram (Section III): CSS card flow + animated glow, không dùng lib ngoài
- ✅ QnA Accordion: `useState` + `AnimatePresence` (pattern giống `MinhSuLaAiSection`)
- ✅ Mobile first: `@media (max-width: 640px)` đầy đủ
- ✅ Đăng ký trong `App.jsx` sau `<MinhSuLaAiSection />`

---
*Directive tạo ngày 10/04/2026 — Planning Session. Chờ User duyệt trước khi giao Coding Agent.*
