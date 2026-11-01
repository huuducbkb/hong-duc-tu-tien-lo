# BÁO CÁO CÔNG VIỆC - HỒNG ĐỨC TU TIÊN LỘ

File này là báo cáo bàn giao chi tiết, giúp chủ kho và bất kỳ ai tiếp nhận hiểu tình trạng dự án và tiếp tục công việc. Mỗi lần cập nhật, hãy viết thêm báo cáo cho ngày mới và đặt báo cáo mới nhất ở trên cùng.

## BÁO CÁO NGÀY 02/11/2026 (mới nhất)

### 1. Quyết định đã chốt của chủ kho

- Nút xương sống không hiện thông báo cho người chơi: AI kể tự nhiên, code game tương lai âm thầm ép cốt truyện theo các nút. Bản mẫu chưa thực hiện logic game này.
- Bỏ hẳn chế độ kể chuyện offline dự phòng và công tắc tương ứng. Game thật khi không có mạng hoặc khóa sẽ báo lỗi, không có chế độ kể thay thế. Các quyết định ngày 02/11 thay thế thông tin cũ mâu thuẫn bên dưới; báo cáo cũ vẫn được giữ nguyên để lưu lịch sử.
- Dựng lại theo ảnh bìa sách cổ đã duyệt: giấy ngả nâu, mép xém, chữ dọc thư pháp, mục lục kiểu sách với chấm đỏ son.
- Mục lục có 15 mục: Truyện, Nhân Vật, Cài Đặt hoạt động; Thế Giới và 10 mục khác chưa có nội dung. Quy tắc cho AI chỉ có vài dòng mẫu minh họa, danh sách thật sẽ chốt sau.

- Chủ kho phản đối dùng nguyên ảnh ba trang; đã sửa màn tiêu đề để crop riêng trang bìa trái, cắt trang giữa và trang phải (commit `0d93559fb801b445d54c74338c8efa4508440d0c`). Cách dùng nguyên ảnh ghi ở phần lịch sử bên dưới không còn áp dụng.

- Chủ kho làm rõ thiết kế sách hai trang: bên trái là trò chuyện, bên phải là mục lục thông tin. Khi vào game mục lục thu thành nút mở bảng phủ, thay thanh điều hướng ba mục dưới đáy. Tính năng nav tự ẩn từng được commit `b191f904c2b6333ab46ad7d10e0ab19bb049fd8c` do hiểu sai; đã gỡ thanh nav và mã tự ẩn trong commit `1e3f857ff31c252aa2db252e7538a5a2e3c51bfb`. Thông tin về nav tự ẩn ở phần lịch sử bên dưới không còn áp dụng. SHA-256 HTML hiện tại: `96b1c08414ffe8a8465bb79e2d2b93ce9c4157732c40060924afd0e2d8253c8a`.

### 2. Việc đã làm và kiểm tra

- Ảnh gốc JPEG được đưa vào `Art/anh-bia/anh-bia.jpg`; quy ước để tư liệu mỹ thuật trong `Art/`, các thư mục con đặt tên không dấu. Commit upload `34cbc6c4ce7269700059b4619f60284196b32185`, đổi tên `96d0aee939e6fd6a76b1f420e24f3cf66c7a6120`. HTML dùng đường dẫn tương đối `../Art/anh-bia/anh-bia.jpg`.
- Dựng bản mẫu v2 tự chứa trong `thiet-ke/mau-giao-dien.html`: commit `e42ca30da042c33adbec4c012c6ca530ae5a1566`; phục hồi CSS `150ee3126adad3d6eaae38c38ecaa12fa4254bdc`; thu gọn khối nút để lộ dấu triện `da091c92f6d867e89d4b6860cbfa21e2c64e2ac9`. Chọn nguyên ảnh, giữ đúng tỷ lệ thay vì crop trang trái; ảnh tiêu đề và dấu triện rõ trong ảnh chụp cột 414px.
- LIVE: https://huuducbkb.github.io/hong-duc-tu-tien-lo/thiet-ke/mau-giao-dien.html . GitHub Pages build thành công. SHA-256 raw ảnh: `ae882386df2ff9f3d0dec18042d8398a1e2f31a112d57590ace99ca2271dc5af`; SHA-256 raw HTML và bản Pages giống nhau: `b77e25cc0843701bd40ad554e586bad830387c6fb563e58483ad9b8bb25015c3`.
- Kiểm tra trong trình duyệt: chữ Việt có dấu; Bắt đầu → Khởi thân → Truyện; ba tab Truyện, Nhân Vật, Mục Lục; mục lục đủ 15 mục; thử Thế Giới trống và Quy tắc cho AI minh họa; Cài Đặt hiển thị kết nối mô phỏng, công tắc thu gọn bật, không có công tắc offline; không có thông báo xương sống trong màn Truyện. Kiểm tra cột nội dung 414px và chụp màn bìa; chưa kiểm tra trên iPhone 11 thật hay viewport 414×896 thật.

- Thanh điều hướng cố định tự trượt ẩn khi cuộn xuống, hiện lại khi cuộn lên; chuyển màn sẽ hiện lại thanh (commit `b191f904c2b6333ab46ad7d10e0ab19bb049fd8c`). SHA-256 raw HTML sau thay đổi: `527cac6e958e333957992d0a77fa0f17f479e0af45c57937cb727fe356403432`; mã HTML nêu ở trên là của bản trước khi sửa.

### 3. Việc còn chờ

- Chờ chủ kho mở bản mẫu v2 trên iPhone 11 thật và duyệt lại.
- Chờ danh sách 11 nút xương sống của chương 1.
- Chờ chốt danh sách quy tắc cho AI; các câu đang hiện chỉ là mẫu minh họa. Đây chưa phải game và nút kết nối chưa gọi Gemini.

### 4. Lỗi và cách xử lý

- CSS từng bị cắt khi khôi phục từ văn bản hiển thị trong editor GitHub; đã phục hồi từ raw, chia dòng CSS, commit sửa và đối chiếu SHA-256. Ghi thêm bài học trong `GHI-CHU-LOI-GITHUB.md` (commit `07b8ba0f623ed57d46829e3ea5db7e17e8daf0c9`).
- Trang upload không sửa được tên ảnh trong danh sách; đã upload tên gốc rồi đổi tên bằng trang sửa file của GitHub. Ảnh sau đổi tên có cùng SHA-256.

---

## BÁO CÁO NGÀY 01/11/2026 (mới nhất)

### **1. TỔNG QUAN DỰ ÁN**

- **Game:** HỒNG ĐỨC TU TIÊN LỘ là Text RPG Tu Tiên, đồng nhân truyện Phàm Nhân Tu Tiên. Người chơi gõ hành động tự do hoặc chọn hành động AI đề xuất; AI trực tuyến qua Google Gemini kể chuyện. Mỗi chương có các nút xương sống bắt buộc; riêng chương 1 có 11 nút. Luật hardcore: chết là mất save.
- **Giao diện:** phong cách giấy dó, mực tàu; thiết kế mobile-first cho iPhone 11 (414 x 896).
- **Chủ kho:** hữu đức, phụ trách thiết kế và không rành code. Trợ lý AI Boba làm toàn bộ code và thao tác GitHub.
- **Repo:** https://github.com/huuducbkb/hong-duc-tu-tien-lo — Public, nhánh main; chỉ giữ main và nhánh backup khi cần.
- **Trang LIVE:** https://huuducbkb.github.io/hong-duc-tu-tien-lo/
- **Bản mẫu giao diện LIVE:** https://huuducbkb.github.io/hong-duc-tu-tien-lo/thiet-ke/mau-giao-dien.html

### **2. CÁC QUYẾT ĐỊNH THIẾT KẾ ĐÃ CHỐT**

- **31/10/2026:** Làm lại game hoàn toàn từ đầu; mọi code cũ chỉ là tư liệu tham khảo.
- **01/11/2026 — mô hình kể chuyện 5b:** AI TRỰC TUYẾN kể chuyện bằng Google Gemini API. Người chơi tự dán khóa API của mình; khóa lưu ngay trên máy người chơi. Giao diện có cả nút hành động AI đề xuất và ô gõ tự do. Các nút chương là xương sống bắt buộc; sự kiện cố định, ví dụ gặp Hàn Lập ở khảo thí, không thể tránh. Có bản kể chuyện dự phòng offline khi mất mạng hoặc không có khóa.
- **Cốt truyện:** Hàn Lập là thiên mệnh chi tử, KHÔNG BAO GIỜ chết; người chơi chỉ đánh bại, không giết được. Cơ duyên bị Hàn Lập “cướp” sẽ được bù lại cho người chơi. Trùm cuối là Cổ Hoặc Kim, đạo tổ pháp tắc thời gian; Hàn Lập và người chơi CÙNG là chìa khóa đánh bại hắn.
- **Chống AI quên cốt truyện và tiết kiệm token:** Code game giữ trạng thái; mỗi lượt chỉ gửi tóm tắt trạng thái cùng vài lượt hội thoại gần nhất cho AI. Nén lịch sử, dùng mẫu Gemini Flash nhẹ và giới hạn độ dài mỗi lần kể.
- **Tra cứu ngày 01/11/2026 từ tài liệu Google (ai.google.dev):** Gói miễn phí Gemini được ghi nhận có 15 yêu cầu/phút, 1 triệu token/phút và 1.500 yêu cầu/ngày; không cần thẻ tín dụng, Việt Nam được hỗ trợ. Đây là thông tin tra cứu tại thời điểm đó; hạn mức có thể thay đổi và cần đối chiếu lại về sau.
- **Tối 01/11/2026:** Chủ kho đã xóa repo cũ; dự án khởi động lại sạch từ đầu trong repo hiện tại.

### **3. VIỆC ĐÃ LÀM**

- Tạo lại repo `hong-duc-tu-tien-lo` (Public, main) sau khi chủ kho xóa repo cũ. Các commit: `4eacf2f` (Initial commit), `c222b00` (README giới thiệu), `0dffc16` (file ghi chú công việc bản đầu, nay đã đổi tên thành báo cáo này), `4bff2dd` (file `GHI-CHU-LOI-GITHUB.md` ghi 4 bài học lỗi GitHub từ dự án cũ), `72367ec` (trang tạm `index.html` phong cách giấy dó và bật GitHub Pages từ main).
- Dựng bản mẫu giao diện bấm được: commit `b822d8d`, file `thiet-ke/mau-giao-dien.html` tự chứa HTML, CSS và JavaScript. Bản mẫu gồm màn tiêu đề, màn tạo nhân vật, màn chơi chính với khung kể chuyện, 3 nút hành động AI và ô gõ tự do; tab Hồ sơ, tab Thế Giới, tab Cài đặt có ô khóa Gemini; bảng màu và kiểu chữ thống nhất ở cuối trang. Commit `da020ad` cập nhật ghi chú công việc, nay thuộc báo cáo này.
- Đã kiểm tra trên trình duyệt máy tính: chữ Việt đủ dấu; 4 tab chuyển đúng; nút “Bắt đầu câu chuyện” và “Bắt đầu tu tiên” chuyển màn đúng; cột nội dung rộng 414px; Pages build thành công; SHA-256 bản raw trùng bản Pages tải về.

### **4. VIỆC ĐANG GIANG DỞ**

- **CHỜ CHỦ KHO** duyệt bản mẫu trên iPhone 11 thật, gồm 5 mục: (1) màu giấy dó/mực tàu/đỏ son; (2) kiểu chữ tiêu đề và kể chuyện; (3) bố cục màn chơi chính; (4) 4 tab dưới đáy: Chuyện/Hồ sơ/Thế giới/Cài đặt; (5) giữ hay bỏ hoa tiết núi mực tàu và con dấu triện. Chưa duyệt thì chưa viết code game thật.
- **CHỜ CHỦ KHO** gửi danh sách 11 nút xương sống chương 1, hoặc yêu cầu trợ lý tự đề xuất để chủ kho sửa. Đây là đầu vào bắt buộc trước khi viết logic chương 1.
- Bản mẫu chưa có AI thật, lưu game, lưu khóa API hay diễn biến hành động. Đây là việc của giai đoạn code thật, chưa phải lỗi.

### **5. VIỆC CHƯA LÀM - KẾ HOẠCH TỔNG QUÁT**

- **GĐ0 (đang ở đây):** Chốt thiết kế giao diện và 11 nút chương 1.
- **GĐ1:** Nền móng kỹ thuật: cấu trúc file, module, hệ thống test hồi quy chạy trong trình duyệt.
- **GĐ2:** Hệ thống nhân vật: tạo nhân vật xuất thân tự do, chỉ số, vật phẩm, save/load bằng localStorage và luật hardcore.
- **GĐ3:** Engine AI kể chuyện: gọi Gemini API, chống quên cốt truyện, tiết kiệm token, lớp gác buộc câu chuyện quay về nút xương sống và dự phòng offline.
- **GĐ4:** Chương 1 hoàn chỉnh chạy được trên 11 nút.
- **GĐ5:** Kiểm thử trên iPhone 11, phát hành LIVE và mở rộng các chương sau.

### **6. LỖI GẶP PHẢI VÀ HƯỚNG XỬ LÝ**

- **Kiểm kê repo cũ gặp 404 toàn bộ:** Chủ kho đã chủ động xóa repo cũ; đây không phải lỗi GitHub hay mất dữ liệu bất thường. Cách xử lý: xác nhận lại với chủ kho rồi tạo lại repo mới.
- **Không giả lập được viewport iPhone 11:** Công cụ trình duyệt của task chỉ báo 1280 x 588. Chủ kho tự mở bản mẫu trên điện thoại thật để duyệt; mọi bản phát hành sau này đều cần chủ kho test trên iPhone 11.
- **Trình soạn GitHub:** Từng làm mất nháp, chèn khoảng trắng khiến lệch mã băm và hết thời gian lượt chạy với file dài trong dự án cũ. Đã ghi đủ 4 bài học cùng cách khắc phục trong `GHI-CHU-LOI-GITHUB.md`; mọi lần sửa file đều phải theo.

### **7. HƯỚNG DẪN CHO NGƯỜI TIẾP NHẬN CÔNG VIỆC**

- **Quy ước:** Làm trực tiếp trên nhánh main; chỉ tạo nhánh backup khi gặp lỗi cần snapshot. Commit message tiếng Việt không dấu theo dạng `feat:`, `docs:` hoặc `fix:`. Sau mỗi commit đối chiếu SHA-256 bản raw; file dài chia commit từng phần. Luôn cập nhật `BAO-CAO-CONG-VIEC.md` (báo cáo bàn giao này) và `GHI-CHU-LOI-GITHUB.md` sau mỗi bản.
- **File quan trọng:** `index.html` là trang tạm, sau sẽ thay bằng game thật; `thiet-ke/mau-giao-dien.html` là bản mẫu giao diện chờ duyệt; `GHI-CHU-LOI-GITHUB.md` là nhật ký lỗi; `README.md` giới thiệu dự án.
- **Bước tiếp theo ngay:** Nhận kết quả duyệt giao diện của chủ kho, sửa bản mẫu theo ý kiến, sau đó chốt 11 nút chương 1 rồi mới bắt đầu GĐ1.

## LỊCH SỬ BÁO CÁO CŨ HƠN

Chưa có báo cáo cũ hơn; nội dung file `GHI-CHU-CONG-VIEC.md` bản trước đã gộp vào báo cáo ngày 01/11/2026 ở trên.
