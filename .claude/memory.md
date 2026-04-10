# Developer Memory
- Áp dụng triệt để DO Framework (Directive - Orchestration - Execution).
- Ưu tiên các giải pháp module hóa, không dùng code tĩnh.

## ⚠️ LUẬT CỨNG — PHÂN VAI (KHÔNG ĐƯỢC VI PHẠM)
- **Planning Agent** (phiên này): CHỈ được làm Directive (`.md` files), tổng hợp dữ liệu, lập kế hoạch. **TUYỆT ĐỐI KHÔNG được tự ý viết code (.jsx, .js, .css, v.v.)** khi không có lệnh rõ ràng từ User.
- **Coding Agent** (phiên khác): Mới được phép execute code theo Directive đã được User duyệt.
- Nếu muốn coding, PHẢI hỏi User trước: *"Bạn có muốn tôi viết code luôn không?"*
