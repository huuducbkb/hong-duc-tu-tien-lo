## 04/11/2026 — Phát hành G1 trong trình duyệt task

Công cụ không lưu được trực tiếp các tệp HTML/CSS/JS; đã dùng các tệp văn bản .txt đã lưu. Trình soạn thảo GitHub từng không hiển thị và phần đổi tên tại trang upload không dùng được trong trình duyệt task; github.dev từng bỏ qua thao tác dán. iPhone của chủ kho hiển thị upload bình thường theo báo cáo của chủ kho. Phương án thành công: tải tám tệp .txt vào main, xác nhận editor có nội dung rồi đổi tên sang đúng đường dẫn; sau cùng xóa placeholder index và đổi tên index G1. Bản backup ở eef5dfa21f46fb2589e8157d8ffcd2466cfee976. Đối chiếu SHA-256 raw với tám tệp .txt đã lưu sau đổi tên.

## 02/11/2026 — Ảnh iPhone và tên file khi upload

- Ảnh chat gốc 205.225 byte; ảnh chủ kho tự tải lên GitHub là `Art/anh-nen-truyen/IMG_3136.jpeg`, 193.689 byte, khác byte nhưng cùng tranh. Có thể iPhone Photos đã nén lại khi xuất; nguyên nhân chưa được xác minh. Tên được giữ là IMG_3136.jpeg thay vì anh-nen-truyen.jpg. Chủ kho chấp nhận ảnh và tên thực tế; HTML trỏ tới tên đó. Lỗi mã lại của công cụ task được ghi ở commit 71c3f1e4.
- Trang upload giữ tên file workspace, không thấy điều khiển đổi tên. Đã upload `mau-giao-dien-rong-noi-dung.html` (c3844b29), kiểm SHA. Đổi trực tiếp sang tên đích bị GitHub từ chối vì tên đã tồn tại. Theo phương án chủ kho duyệt: đổi file cũ sang `mau-giao-dien-cu-tam.html` (254e2c76), đổi file mới sang `mau-giao-dien.html` (aee77d97), xóa file cũ tạm (b5e8fcf8). SHA file đích sau cùng khớp bản duyệt: `01c6a4ee7941986ddafaf6adf7a9bded176ebf6b25621cacd4a207f11bb3b2c2`. Lỗi thay toàn bộ nội dung ở editor đã ghi tại a721a6e5.

## Lỗi tên tệp khi tải HTML lên ngày 02/11/2026

Tệp HTML đã duyệt có SHA-256 01c6a4ee7941986ddafaf6adf7a9bded176ebf6b25621cacd4a207f11bb3b2c2 nhưng công cụ tải lên chọn tệp tên mau-giao-dien-rong-noi-dung.html; trang GitHub không hiện điều khiển đổi tên. Tệp đã được gỡ khỏi hàng tải lên, chưa commit HTML để tránh tạo nhầm tệp. Cần đổi tên thành mau-giao-dien.html mà giữ nguyên byte, đối chiếu SHA-256 rồi mới upload thay đúng tệp trong thiet-ke/ trên main và kiểm tra SHA bản raw sau commit.

## Lỗi thay HTML ngày 02/11/2026

Trong phiên này Ctrl+A/Ctrl+V không thay nội dung; thử Meta+A/Meta+V thì bản mới bị chèn vào bản cũ. Đã phát hiện trước commit và rời bản nháp lỗi, chưa cập nhật HTML. Tệp đã duyệt có SHA-256 01c6a4ee7941986ddafaf6adf7a9bded176ebf6b25621cacd4a207f11bb3b2c2. Cần thay toàn bộ bằng phương tiện hỗ trợ, kiểm tra chỉ còn một tài liệu và đối chiếu SHA-256 raw sau commit.

## Loi thay noi dung tren trinh soan ngay 02/11/2026
Khi dung thao tac thay toan bo file HTML, trinh soan chen noi dung moi sau noi dung cu thay vi thay the. Khong commit ban loi; dung tim va thay the bieu thuc chinh quy de xoa phan cu, kiem tra chi con mot tai lieu HTML va doi chieu SHA-256 raw voi noi dung da soan sau commit. Can kiem tra ky chon toan bo theo he dieu hanh, khong tin Preview.

# Ghi chú lỗi GitHub

## Mat nap khi chinh sua file tren trinh soan GitHub

Lỗi: Trình soạn thảo thường rơi bản nháp. Khắc phục: LUÔN lưu một bản sao nội dung ngoài workspace trước khi chỉnh; khôi phục từ bản sao và đối chiếu SHA-256.

## Het thoi gian luot chay khi chuyen file dai

Lỗi: Lượt chạy hết thời gian khi chuyển file dài. Khắc phục: File trên 10K ký tự thì chia nhỏ, commit từng phần để giữ tiến bộ vĩnh viễn.

## Khoang trang thua lam lech ma bam

Lỗi: Trình soạn thảo có thể chèn khoảng trắng sai vị trí. Khắc phục: Sau commit phải đối chiếu SHA-256 bản raw, kiểm từng byte, không tin Preview.

## Upload can file that

Lỗi: Trang upload GitHub chỉ nhận file đính kèm thật; bản văn bản trong ghi chú không kéo thả được. Khắc phục: Dùng file đính kèm thật khi upload.

## Loi sua file CSS dai ngay 02/11/2026

Khi sửa bản mẫu v2 trong trình soạn thảo, thao tác thay toàn bộ nội dung không thay đúng như mong đợi; khi khôi phục từ văn bản hiển thị của editor, một dòng CSS rất dài bị cắt. Commit ban đầu vì vậy thiếu CSS. Cách xử lý: lấy nội dung đầy đủ từ bản raw, khôi phục CSS, chia CSS thành các dòng ngắn, commit sửa và đối chiếu SHA-256 bản raw với nội dung dự kiến. Không dựa vào Preview hay văn bản editor bị rút gọn để xác nhận file dài.

## Lỗi trình soạn thảo khi chốt cách xem B

Thao tác thay toàn bộ nội dung lại nối bản mới vào sau bản cũ. Đã xóa phần dư bằng tìm và thay thế trước khi commit, kiểm tra chỉ còn một tài liệu HTML và đối chiếu bản raw sau commit. Không dùng Preview để xác nhận nội dung dài.

## Lỗi chọn toàn bộ editor ngày 02/11/2026
Trong phiên trình duyệt này Control+A không chọn toàn bộ editor; khi dán, bản mới bị chèn vào bản cũ. Đã phát hiện trước commit, dùng Meta+A chọn toàn bộ và kiểm tra vùng chọn bằng sao chép, dán lại rồi đối chiếu toàn bộ nội dung và SHA-256. Không commit bản lỗi. Sau commit, raw theo SHA khớp bản dự kiến; raw theo main có thể chậm cập nhật cache.

## Lỗi đổi tên tệp ảnh tải lên ngày 02/11/2026

Khi chuẩn bị tải ảnh nền Truyện, bản sao được lưu lại với tên mới có 205.371 byte và SHA-256 925695da811aa07a1d39be17712e2071975c6fc00d6d73030cce532ca21ffc92, khác ảnh gốc 205.225 byte, SHA-256 481f5fe15b4ed33c7109ec24b7593e950512f8c545d8439137638d8539bcf883. Đã gỡ bản sao khỏi hàng tải lên, chưa commit ảnh hoặc HTML mới. Cần đổi tên ảnh gốc mà vẫn giữ nguyên byte, đối chiếu SHA-256 trước và sau upload; sau đó mới tiếp tục phát hành và kiểm tra Pages.
