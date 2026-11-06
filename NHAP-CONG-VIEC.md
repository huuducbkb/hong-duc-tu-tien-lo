# Cập nhật 06/11/2026 20:52 — kết quả theo nhà

Mục 20:48 bên dưới về chưa chạy theo từng nhà đã được thay thế: runner sandbox tạm https://boba.page/vQ2eXtvc-Gk-dalQyWXMdg/index.html chạy chế độ mặc định Gemini hai lần và OpenRouter hai lần, mỗi lần 104 PASS / 0 FAIL. Test chung chạy theo nhà mặc định, test chuyên nhà tự đặt nhà; một số test Gemini cũ được cố định Gemini, không phải 104 yêu cầu mạng đến mỗi nhà. Bản test repo dùng trong sandbox đã đổi trong bộ nhớ phần khởi tạo nhà cho mỗi phép; xem BAO-CAO-CONG-VIEC.md commit 21d39a9 để biết các giới hạn và lỗi test trước khi sửa cấu hình giả. Không gọi AI thật hay dùng save thật.

Còn: rà ràng buộc nhánh 0 gặp Hàn Lập lần đầu mốc 5, mốc 8/10 gián tiếp; bổ sung/kiểm thử nếu cần, rồi chạy lại hồi quy và đối chiếu LIVE so với commit cuối. iPhone Safari thực tế chưa được kiểm. Mục tiếp nối 20:48 ghi lại hash lúc trước, không phải trạng thái mới hơn của mã nếu có sửa sau này.

---

# Trạng thái tiếp nối — 06/11/2026, 20:48 (Asia/Saigon)

Thông tin bên dưới mục này là trạng thái cũ lúc bắt đầu, KHÔNG còn đúng về những việc chưa làm.

- Đã thực hiện các việc 1–5, cập nhật test và bàn giao trên main; mã game/test gần nhất bb70e83b959a3ca92b28b8000edbf95aba93f9c5, báo cáo da8850d1f15a05fe557875a8c70206e91e5bb8d3. Mỗi thay đổi đã đối chiếu SHA-256 raw theo commit sau lưu.
- Đã chạy bốn lần liên tiếp bộ test hỗn hợp bằng mạng giả và dữ liệu cách ly: mỗi lần 104 PASS / 0 FAIL. Mỗi lượt gồm các phép riêng Gemini và OpenRouter; KHÔNG tuyên bố đã chạy đủ bộ riêng từng nhà hai lần, vì bộ còn mặc định Gemini cho nhiều phép. Cần mở rộng runner/thiết kế test để hoàn thành đúng yêu cầu hai lần cho từng nhà, rồi ghi kết quả từng lần. Trang sandbox tạm https://boba.page/3LUU0cCGy93C4j1n641kzA/index.html dùng mã tại bb70e83, CSP ngăn mạng thật; URL hết hạn, không phải LIVE. Dùng storage giả, IndexedDB tên riêng, không key thật.
- Nhánh 0 mốc 5 được mô tả là lần đầu gặp Hàn Lập nhưng bộ chọn cảnh trước mốc đó không có rào cứng chống AI tự chọn Hàn Lập; rà lại, bảo toàn ba mức, thêm ràng buộc và test nếu cần. Nút 8/10 yêu cầu tin gián tiếp. Chưa kiểm Safari iPhone thật. Không chạm API/key/save thật hoặc origin LIVE khi chạy game.
- Các file chính LIVE đối chiếu với bb70e83 lúc 20:45 đều trùng SHA-256:

`index.html fcf2b8b495cd6f4e36ef7c1fca07ef76c27c210f99673dbf2161dda2b7ea365e`
`css/giao-dien.css 16219b725632507f170eac81beb8d38a9942c9f004b6fce7f8998a68369a5304`
`js/man-hinh.js ea163b5a14191b73fb702034e94c75126f54a6f5b888369aaab6c0f569eb495c`
`js/muc-luc.js 30d1459c9feb47c497965debe16bc90297e4d0213ca371f0cfc85d851943a510`
`js/khoi-thanh.js f8464d0cce72578b6c7554aeded51b5e7099ee77f66ac5808aa7eaeecb6fc0f7`
`js/luu-tru.js 3c8a6c3458f72d7589316f6e1afbf81adc378f07128ee84757e07326707d64b0`
`js/openrouter.js 6a07cd3b42c4c66e7b6019281601b37513f0111fb4bd0bd29ac75691c7ca73bd`
`js/gemini.js e364f0d03bbeb2c3d39a63b3f2033681f6c95ea83ce26f059924666bb38`
`js/truyen-ke.js b13c32165003622f5553a37149c7351f2580f2b808510d785f48bd082c3dea6e`

- Khi hoàn tất các kiểm tra còn lại: cập nhật BAO-CAO-CONG-VIEC.md, commit, so hash các file chính trên LIVE với commit cuối; báo đúng số lần và kết quả. Mọi ràng buộc gốc bên dưới vẫn áp dụng. Không đổi tên file đè file, không cập nhật Art/ hay mẫu thiết kế.

---

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
