# Nhật ký công việc — 06/11/2026

## Trạng thái
- Điểm xuất phát: main d8a07c2da4f0f4b15e93fbfedcac0578e0df8907. Đã đọc GHI-CHU-LOI-GITHUB.md và kiểm tra cấu trúc repo, truyen-ke.js, luu-tru.js, khoi-thanh.js, muc-luc.js và bộ hồi quy hiện có.
- Chưa sửa mã game, chưa chạy hồi quy, chưa đối chiếu Pages. Không gọi AI thật, không đọc hay dùng API key, không chạm save thật.
- Lượt này chỉ ghi trạng thái; toàn bộ yêu cầu tính năng và phát hành bên dưới còn phải thực hiện. Không coi công việc là hoàn thành.

## Việc cần tiếp tục
1. Nội tâm: bổ sung noi_tam 2–5 câu vào schema/prompt; bám thiện cảm, giữ bí mật, không quyết thay người chơi; lưu cùng lượt AI, render chữ nghiêng thụt lề không đỏ, vắng trường không lỗi; sửa quy tắc UI nếu cần; không sửa nén lịch sử.
2. Nhánh 0: thêm 11 mốc đúng bản duyệt; gọi một lượt phân loại xuất thân bằng model đã chọn, thử lại một lần khi lỗi rồi mặc định 1; lưu nhanh, save cũ mặc định 1, không thông báo. Thêm tuyến ẩn theo thời gian và rào chắn canon. Chỉ ép gặp trực tiếp Hàn Lập ở mốc 5 và 9 của nhánh 0; nhánh 1 giữ ép mốc 1; không thay cơ chế ba mức. Dùng hidden chung 1–11.
3. Bổ sung bối cảnh nhánh 1: sau đêm với Mặc đại phu, Hàn Lập đại chiến Dã Lang Bang ở Tuyệt Đỉnh Lạc Nhật Phong, diệt Kim Quang Thượng Nhân và Giả Thiên Long, thu Thăng Tiên Lệnh rồi rời môn. Không sửa 11 mốc nhánh 1 trừ chính tả Lệ Phi Vũ được yêu cầu.
4. Thay mục Công Pháp bằng Lưu / Nạp ở đúng vị trí; xuất hongduc-save thành JSON tên nhân vật và ngày bằng Blob, nhập qua input .json, xác thực và chuẩn hóa, xác nhận ghi đè kiểu cổ trang; file sai không thay save; khôi phục giao diện đúng chỗ. Không đụng Xuất nhật ký hay hardcore die; không tạo ô save.
5. Đổi Lê Phi Vũ thành Lệ Phi Vũ trong mã, prompt và profile; chuyển khóa thiện cảm cũ khi đọc save mà không mất dữ liệu, kể cả quan hệ NPC-NPC.
6. Cập nhật test trong repo; chạy mỗi nhà Gemini và OpenRouter hai lần liên tiếp bằng mạng giả và namespace lưu trữ riêng, không chạy trên LIVE với save thật. Báo số PASS/FAIL từng lần; chỉ phát hành khi tất cả PASS. Cập nhật BAO-CAO-CONG-VIEC.md, sau đó kiểm tra SHA-256 file chính LIVE so với commit cuối.

## Ràng buộc khi tiếp tục
- Làm trực tiếp main qua github.com; commit tiếng Việt thường xuyên. Không tạo nhánh, không hỏi duyệt từng commit.
- Không gọi API AI thật hoặc đụng key thật/save thật, không làm Chương 2, không sửa thiet-ke/mau-giao-dien.html, không tham chiếu test từ index.html, không tải lại Art/, không đổi tên file mới đè file hiện có.
- Sau mỗi lần lưu qua web editor, đối chiếu SHA-256 bản mong muốn với raw tại đúng SHA commit. Ghi chú GitHub cảnh báo dán thay toàn bộ có thể chèn lặp hoặc lệch; kiểm tra kỹ trước commit.
- Đối chiếu lại toàn bộ bản yêu cầu của chủ repo, đặc biệt 11 mốc, timeline ẩn và điều kiện bảo vệ canon; bản tóm tắt này không thay thế yêu cầu gốc.
