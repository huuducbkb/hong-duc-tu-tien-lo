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
