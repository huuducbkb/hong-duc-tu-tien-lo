# BÁO CÁO CÔNG VIỆC - HỒNG ĐỨC TU TIÊN LỘ

File này là báo cáo bàn giao chi tiết, giúp chủ kho và bất kỳ ai tiếp nhận hiểu tình trạng dự án và tiếp tục công việc. Mỗi lần cập nhật, hãy viết thêm báo cáo cho ngày mới và đặt báo cáo mới nhất ở trên cùng.

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
