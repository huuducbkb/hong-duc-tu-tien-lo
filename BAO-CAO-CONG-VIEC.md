## 04/11/2026 — G3: XƯƠNG SỐNG VÀ QUY TẮC KỂ CHUYỆN (NHÁNH THỬ)
- Chủ repo duyệt bản thảo A 11 nút chương 1; bản thảo B kèm thẻ nhân vật, thiện cảm và nội tâm; ba mức TRỰC TIẾP, GIÁN TIẾP, ĐI QUA cho nút 2–11; nút 1 bắt buộc gặp mặt trực tiếp Hàn Lập.
- Đã làm trên g3-work: 11 sự kiện ẩn, luật cứng, thẻ NPC, thiện cảm và JSON ẩn; save mới và mặc định cho save cũ. Màn chết xóa save, điếu văn và nút về bìa; ảnh Điện Diêm Vương chủ repo chọn là Art/anh-am-phu/dien-diem-vuong.jpg, phủ đen 50%, background-size cover. Ảnh raw 216.076 byte, SHA-256 8e8fe7dc8005be9755cc68d0f68052977ae6c498e17fd3dac3f174c70b1a88da khớp ảnh gốc. Đã gửi ảnh chụp màn chết thực tế trong khung 414×896 CSS pixel; tỷ lệ có thể khác iPhone thật.
- Với NPC quan trọng mới, bước chọn cảnh tạo hồ sơ; mỗi lượt từ nút 2 cần một yêu cầu chọn cảnh và một yêu cầu kể, có thể tăng độ trễ và hạn mức Gemini. Không có bảo đảm AI thật luôn tuân thủ quy tắc prompt.
- Kiểm thử không gọi AI thật: bộ giả lập commit cf23f5f 87 PASS/0 FAIL, test riêng NPC mới 10 PASS/0 FAIL. Với trang thử commit 214a63c: tạo nhân vật, save, tải lại và Tiếp tục; save cũ thử thiếu hai trường vẫn mở, tự mặc định nút 1 và thiện cảm 0; prompt gồm luật cứng, thẻ, bảng, nút và ba mức. Phản hồi chết giả lập xóa save thử, hiện điếu văn và nút về bìa. Đây không phải kết quả thử LIVE hoặc AI thật; không cộng gộp các bộ có thể trùng lặp thành tổng duy nhất.
- Đang dở/chưa làm tại thời điểm ghi: duyệt gộp lên main, chờ Pages build và kiểm tra lại LIVE; chủ repo chưa thử AI thật bằng khóa riêng trên LIVE.
- Nợ cần nhắc: vá lỗi mất save sau 5 phút bằng hộp thoại “Một kiếp chưa dứt” để sau theo lời chủ repo; theo dõi nút Đóng đè tiêu đề Mục Lục ở màn hẹp.
- Lỗi và cách xử lý: editor thay toàn bộ chèn lệch, bản hỏng chưa commit; GitHub không cho đổi tên đè file cũ, đổi file cũ sang tên tạm, đổi file mới, đối chiếu raw theo hash commit rồi dọn tạm. Xem GHI-CHU-LOI-GITHUB.md.

## 04/11/2026 — Bàn giao bộ hồi quy mới

- Đã thêm bộ hồi quy mới tự viết gồm 45 phép tại `test/bo-hoi-quy.js`, thay cho bộ 94 phép cũ đã mất; bộ này chưa phủ đầy đủ.
- Chưa phủ: thao tác bấm giao diện thật, hiệu ứng mực, nội dung file xuất, thử lại 503, nén lịch sử, nhắc sao lưu 30 lượt/3 ngày, nhánh chọn cảnh, NPC mới và kiểm tra kết nối.
- Cách chạy: mở LIVE, mở DevTools Console, dán toàn bộ file rồi Enter; đợi bảng PASS/FAIL và dọn kho thử, sau đó tự tải lại trang. Chạy lại bộ này trước mỗi lần vá lớn.


## 04/11/2026 — BÀN GIAO PHÁT HÀNH G1
- Đã đưa tám file G1 lên main qua upload tạm .txt và đổi tên. Không tải lại ảnh, không sửa thiet-ke/mau-giao-dien.html. Backup trước phát hành: eef5dfa21f46fb2589e8157d8ffcd2466cfee976. Commit đổi tên index: d0ea0552f56110d46b00f8bb943f1ac7714382f3. SHA-256 raw từng file khớp tệp .txt tương ứng đã lưu; đối chiếu với tài liệu gốc được kiểm tra theo các đoạn.
- GitHub Pages build G1 thành công; bìa với đường dẫn ảnh tương đối hiển thị, chạm triện vào Khởi thân và tạo nhân vật thử. Mục lục mặc định đóng, có 15 mục, Xuất nhật ký ở vị trí thứ 5.
- Khi đóng mục lục khung truyện rộng 414px trong phép đo. Nút mục lục position:fixed nhưng hàng menu vẫn giữ khoảng 50,5px chiều cao; mở mục lục khung truyện còn 191px trong phép đo và nút Đóng che một phần tiêu đề mục lục. Chưa sửa nguồn đã duyệt.
- Không dùng khóa thật: kiểm tra kết nối và gửi hai hành động đều báo thiếu khóa bằng tiếng Việt; IndexedDB hongduc-so-nhat-ky ghi nguyên văn hai hành động, tải lại và Tiếp tục giữ save hongduc-save. File nhật ký xuất có nguyên văn trước tóm tắt trước log và khóa được che ***. Chưa kiểm phản hồi AI hoặc hardcore chết; chủ kho cần thử AI thật trên iPhone bằng khóa của mình.
- Còn chờ duyệt: bản thảo A 11 nút, bản thảo B quy tắc AI + trường trang_thai, và hướng đường đi tự do 3 mức. Các lỗi và cách xử lý ghi trong GHI-CHU-LOI-GITHUB.md.

## BỔ SUNG TỐI 02/11/2026: BÌA VÀ KHUNG TRUYỆN

- iPhone 11 thực: màn Safari thấp hơn 896px khiến chữ HỒNG bị cắt, nhãn đỏ che chữ ĐỨC. Bản mới neo đỉnh ảnh bìa dưới nhãn và dùng JS tính hình học ảnh, đặt overlay triện và gợi ý theo độ cao thực. Cần chủ kho kiểm lại bìa trên iPhone thật ở dải cao 700–896px sau LIVE.
- Nền khung Truyện đổi từ ảnh thủy mặc `Art/anh-bia/anh-bia.jpg` (file vẫn giữ) sang tranh chủ kho `Art/anh-nen-truyen/IMG_3136.jpeg`; lớp giấy phủ khoảng 90%. Sau khi so demo A sepia/B nguyên màu chủ kho chốt B. Ảnh upload khác byte và giữ tên IMG_3136.jpeg; nguyên nhân nén chưa xác minh, đã ghi GHI-CHU-LOI-GITHUB.md.
- Nền giấy và ảnh căng tới khung nét mực; lề ngang mỗi bên 12→6px; vùng chữ mở mục lục 119→131px, ẩn mục lục 342→354px theo phép đo bản xem trước. `.anh-minh-hoa` có khung ảnh mẫu giữa đoạn chuyện. Khi tích hợp ảnh thật: chỉ sinh khối ảnh khi có ảnh, không có thì chữ nối liền; quy tắc này là việc cần triển khai, mẫu hiện có ảnh tĩnh.
- Preview đã dùng (link tạm có thể hết hạn): https://boba.page/9_b73msZl-DkzHLNRX70HQ/index.html và https://boba.page/PhSVO-FeFvZ8TEqmp-7FYg/index.html.
- Trình soạn thảo không thay toàn bộ nội dung đúng cách (a721a6e5). Upload giữ tên workspace; sau upload tạm c3844b29a524b0dbb6534324e902f9fdf89045b8, GitHub từ chối đổi tên vì trùng. Đổi file cũ sang tên tạm 254e2c764c3d489e875d23566d5cfe64cb2b646d; đổi bản mới sang tên đích aee77d9748208486dfc9af03132c19a719f1eb1c; dọn file cũ tạm b5e8fcf81c3666adf9866601794a52c8a079585c. Ghi lỗi dd14bf6f1641d289d84657c57cf3528dac77ba39. SHA-256 raw HTML mới khớp bản duyệt: `01c6a4ee7941986ddafaf6adf7a9bded176ebf6b25621cacd4a207f11bb3b2c2`.
- Việc còn treo: chưa có hệ save thật (Tiếp tục chỉ dựa khóa localStorage); kiểm bìa trên iPhone sau LIVE; danh sách 11 nút xương sống chương 1; bộ quy tắc AI thật (hiện mẫu); quyết định mặc định mở/đóng mục lục.

# BÁO CÁO CÔNG VIỆC - HỒNG ĐỨC TU TIÊN LỘ

File này là báo cáo bàn giao chi tiết, giúp chủ kho và bất kỳ ai tiếp nhận hiểu tình trạng dự án và tiếp tục công việc. Mỗi lần cập nhật, hãy viết thêm báo cáo cho ngày mới và đặt báo cáo mới nhất ở trên cùng.

## BỔ SUNG NGÀY 02/11/2026: KHUNG MỰC VÀ TRIỆN VIỀN SON
- Đã dọn giao diện: bỏ khối bảng màu khỏi HTML hiển thị (giữ biến màu); bìa chỉ hiện Tiếp tục khi có khóa `hongduc-save` trong localStorage, chuyển “Luật hardcore: chết là mất save” vào Cài Đặt. Khi ẩn mục lục, khung chuyện rộng 414px ở cột 414px, chữ 16px giãn dòng; thêm định nghĩa `.anh-minh-hoa` cho hình và chú thích, chưa chèn ảnh minh họa.
- Chất tu tiên: khung chuyện và mục lục dùng nét mực nhiều lớp có loang nhẹ, khung mục lục nhẹ hơn; ô nhập có nét kẻ dưới; mục lục chấm mực và vệt son cho mục hiện tại; khối nội dung bỏ viền hộp, dùng khoảng thở và đường mực nhạt.
- Theo phản hồi chủ kho: nút phụ chữ mực gạch chân → toàn bộ nút triện nền đỏ đặc bị chê loè loẹt → khung viền son, nền giấy, chữ son lấy cảm hứng triện VÀO GAME trong tranh. Chủ kho duyệt bản viền son và cho phép commit.
- Các bản xem trước đã dùng: [bản khung nét mực](https://boba.page/6-rkwP99JB_km1_IqKRZSw/index.html), [bản triện đỏ đặc](https://boba.page/xsf0XsRCg_il78btFnZXLg/index.html), [bản triện viền son được duyệt](https://boba.page/sZcZpT90uzDB4xMWnsNKvg/index.html). Đây là các link tạm thời, có thể hết hạn.
- HTML chuẩn commit `thiet-ke/mau-giao-dien.html`: commit `d420237f5a5f6b3ed50ffc24e0f562b39610a462`; SHA-256 raw sau commit `8f9b6577acb3f8e03d5c816bf5050724e50bc43d9d07826552781b7d9029a8a0`. Ảnh dùng đường dẫn tương đối; không có nhãn xem trước trong file main.
- Việc còn treo: chưa có hệ lưu game thật; nút Tiếp tục hiện theo khóa localStorage dự kiến, chưa chứng minh có save có thể chơi tiếp. Màu son `#a42c1d` chỉ lấy cảm hứng, chưa khớp chính xác từng điểm ảnh triện trên bìa. Chưa kiểm tra trên iPhone thật; ảnh viewport 414×~588px bị cắt bìa theo tỷ lệ.

## BỔ SUNG NGÀY 02/11/2026: BÌA MỚI VÀ MỰC LOANG

- Đã làm: thay màn tiêu đề bằng ảnh `anh-bia-moi.jpg` phủ theo tỷ lệ ảnh; nút trong suốt trên triện có viền sáng và gợi ý; thêm chuyển cảnh mực loang sang Khởi thân. Ảnh cũ vẫn làm nền truyện. Commit tính năng `4c02252681a4108477849f185016d7ee2cbdd3b2`; sau khi xem ảnh thật đã căn lại nút triện bằng commit `2102f7eec8c8d4ba47b86ee8fe4d947bb7ef2a9a`.
- Kiểm tra mã: raw theo commit cuối có SHA-256 `e75667555475ce8876483e3a72385874d6f6064f4b55bc6636bccee12946a79b`, khớp bản soạn và chỉ có một tài liệu HTML. Khi ghi báo cáo này Pages còn chờ phiên bản căn chỉnh cuối; cần đối chiếu lại sau khi build.
- Lỗi và xử lý: Control+A trong phiên editor không chọn toàn bộ, dán đầu tiên chèn vào tài liệu cũ; phát hiện trước commit và thay lại bằng Meta+A, đối chiếu toàn bộ nội dung. Đã ghi chi tiết trong GHI-CHU-LOI-GITHUB.md.
- Chưa làm: kiểm tra bìa và chuyển cảnh trên iPhone 11 thật hoặc viewport 414×896. Trình duyệt kiểm tra có cột 414px và chiều cao viewport 588px, làm ảnh cover bị cắt phần trên/dưới; cần xem lại trên máy thật. Chủ kho còn cung cấp danh sách 11 nút chương 1 và chốt quy tắc AI thật.

## BÁO CÁO NGÀY 02/11/2026 (mới nhất)

### 1. Quyết định đã chốt của chủ kho

- Nút xương sống không hiện thông báo cho người chơi: AI kể tự nhiên, code game tương lai âm thầm ép cốt truyện theo các nút. Bản mẫu chưa thực hiện logic game này.
- Bỏ hẳn chế độ kể chuyện offline dự phòng và công tắc tương ứng. Game thật khi không có mạng hoặc khóa sẽ báo lỗi, không có chế độ kể thay thế. Các quyết định ngày 02/11 thay thế thông tin cũ mâu thuẫn bên dưới; báo cáo cũ vẫn được giữ nguyên để lưu lịch sử.
- Dựng lại theo ảnh bìa sách cổ đã duyệt: giấy ngả nâu, mép xém, chữ dọc thư pháp, mục lục kiểu sách với chấm đỏ son.
- Mục lục có 15 mục: Truyện, Nhân Vật, Cài Đặt hoạt động; Thế Giới và 10 mục khác chưa có nội dung. Quy tắc cho AI chỉ có vài dòng mẫu minh họa, danh sách thật sẽ chốt sau.

- Chủ kho phản đối dùng nguyên ảnh ba trang; đã sửa màn tiêu đề để crop riêng trang bìa trái, cắt trang giữa và trang phải (commit `0d93559fb801b445d54c74338c8efa4508440d0c`). Cách dùng nguyên ảnh ghi ở phần lịch sử bên dưới không còn áp dụng. CẬP NHẬT CHỐT MỚI: Chủ kho chọn cách B, bỏ cách A và nút chuyển A/B. Mặc định hiện hai trang; nút đỏ son ẩn/mở cột mục lục, ẩn thì truyện mở rộng toàn cột. Màn bìa bỏ nền đen, chỉ dùng trang trái, triện VI có viền sáng là nút vào game; hình được giữ tỷ lệ, có nền giấy đệm ở hai mép khi cửa sổ thấp. Commit bố cục và nút `336f6024293d84304026f0852455e366730d5173`; sửa bìa `f2f79f8ddc8ca889d575eff5987fcce0380ccd5a`, bỏ ảnh lặp ở mép `311d12869bcdb32661bc5aeae20aaab135d2a3d3`. SHA-256 raw HTML cuối: `6f416e54f9def88463d65933ada9fcd8537bd7f0c82cdf62ca52608ede662570`. Trên trình duyệt cột 414px đã thử triện vào Khởi thân rồi Truyện, nút ẩn/mở mục lục và thấy truyện đổi rộng 207px lên 414px; có 15 mục, Nhân Vật và Quy tắc AI mẫu mở được. Chưa kiểm tra được viewport 414×896 hoặc iPhone 11 thật; cần chủ kho duyệt bìa và bố cục trên iPhone, cung cấp 11 nút chương 1 và chốt quy tắc AI thật. Thông tin demo A/B bên dưới chỉ là lịch sử, không còn áp dụng.

- Chủ kho làm rõ thiết kế sách hai trang: bên trái là trò chuyện, bên phải là mục lục thông tin. Khi vào game mục lục thu thành nút mở bảng phủ, thay thanh điều hướng ba mục dưới đáy. Tính năng nav tự ẩn từng được commit `b191f904c2b6333ab46ad7d10e0ab19bb049fd8c` do hiểu sai; đã gỡ thanh nav và mã tự ẩn trong commit `1e3f857ff31c252aa2db252e7538a5a2e3c51bfb`. Thông tin về nav tự ẩn ở phần lịch sử bên dưới không còn áp dụng. SHA-256 HTML bản trước: `96b1c08414ffe8a8465bb79e2d2b93ce9c4157732c40060924afd0e2d8253c8a`. Cập nhật mới: theo chú thích của chủ kho, triện VI thành nút vào Khởi thân với viền sáng; khung chuyện dùng tranh thủy mặc phủ giấy mờ. Demo A có mục lục dạng nút mở bảng; demo B hiển thị chuyện bên trái và mục lục bên phải; lựa chọn A/B giữ khi đổi màn, mặc định A. Commit demo `939314b04291869919ef8e4f13b42dc516c2700d`, chỉnh nền B `8ab4213de1ca8e5bb78dd0ba3e5a6d76636000af`. SHA-256 raw HTML mới `ca1ad47d1895ce677171294fbe6989e19436ffccad157418731207098cb1da38`. Kiểm tra cột 414px: triện vào Khởi thân rồi Truyện, chuyển A/B, mục lục 15 mục, Nhân Vật, Thế Giới, quy tắc mẫu và Cài Đặt mở được. Cách B có hai cột khoảng 207px, chữ trong ảnh đọc được nhưng ngắt dòng nhiều; chưa kiểm tra iPhone thật hoặc viewport 414×896. Chờ chủ kho chọn A/B, cung cấp 11 nút chương 1 và chốt quy tắc AI. Lỗi trình sửa GitHub khi thay file đã ghi trong GHI-CHU-LOI-GITHUB.md; phần dư được xóa trước commit.

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
