# Ghi chú lỗi GitHub

## Mat nap khi chinh sua file tren trinh soan GitHub

Lỗi: Trình soạn thảo thường rơi bản nháp. Khắc phục: LUÔN lưu một bản sao nội dung ngoài workspace trước khi chỉnh; khôi phục từ bản sao và đối chiếu SHA-256.

## Het thoi gian luot chay khi chuyen file dai

Lỗi: Lượt chạy hết thời gian khi chuyển file dài. Khắc phục: File trên 10K ký tự thì chia nhỏ, commit từng phần để giữ tiến bộ vĩnh viễn.

## Khoang trang thua lam lech ma bam

Lỗi: Trình soạn thảo có thể chèn khoảng trắng sai vị trí. Khắc phục: Sau commit phải đối chiếu SHA-256 bản raw, kiểm từng byte, không tin Preview.

## Upload can file that

Lỗi: Trang upload GitHub chỉ nhận file đính kèm thật; bản văn bản trong ghi chú không kéo thả được. Khắc phục: Dùng file đính kèm thật khi upload.
