## 08/11/2026 — BÀN GIAO MODULE MỞ MÀN

Phần mới nhất này thay trạng thái CHƯA KIỂM THỬ trong NHAP-CONG-VIEC.md. Nguồn mã nghiệm thu: commit 216e6fdffa59cdad3a7c823f6482d8196f5a7d3e; head trước báo cáo 120b3a60ccc7501fdf32a76ee9e37b51303b50e4. Các phần lịch sử bên dưới được giữ nguyên.

### Đã làm
- Thêm đúng sáu file mới trong Art/anh-mo-man/: kiep-cu-1.jpg (mắt), kiep-cu-2.jpg (giơ kiếm trên núi), kiep-cu-3.jpg (trăm kiếm), kiep-moi-1.jpg (cổng tiên môn biển mây), kiep-moi-2.jpg (thiếu niên bậc thang), kiep-moi-3.jpg (phượng hoàng từ kiếm). Không đè file có sẵn, không re-upload ảnh Art cũ. Lưu ý minh bạch: công cụ đổi tên/lưu JPEG đã chuẩn hóa byte ảnh; ảnh đúng nội dung đã duyệt nhưng không tuyên bố đồng nhất byte với tệp chat gốc.
- js/mo-man.js mới: lấy HTML/CSS/JS từ bản duyệt https://boba.page/_0sxqEYgvupyvMcqNfVS-g/index.html làm nền, đóng gói HongDuc.moMan và Shadow DOM để không rò CSS vào game. Ghi chú thiết kế tiếng Việt, MỤC LỤC MODULE ở đầu và LỊCH SỬ THAY ĐỔI ở cuối.
- Giữ nguyên sáu câu thoại và hai chữ kết theo yêu cầu. Chữ từng TỪ nguyên vẹn, cột từ trên xuống rồi sang trái, lệch phải 28px, 32px đậm màu #E8D7B2, fade/scale .95→1, triện đỏ trống 40px; Ken Burns và mực loang; hai tông crimson/gold của bản duyệt. Font Ngo Manh/Noto Serif/serif và màu nền #0E0B08; nút Bỏ qua luôn trên cùng, không bị chữ đè.
- js/man-hinh.js chỉ bọc hai callback trong hộp Một kiếp chưa dứt: old→tiepTuc, new→khoiThan; kết thúc hoặc Bỏ qua mới gọi callback gốc đúng một lần. Có fallback gốc nếu module không tải. index.html chỉ thêm script mo-man trước man-hinh, không tham chiếu test.
- Mỗi lượt tạo Audio mới; đường dẫn tương đối Art/nhac-mo-man/1.mp3 và 2.mp3, ảnh Art/anh-mo-man/. Gain .8; offset cũ 2.5s, mới 3s; mốc 0/3.5/7/10.2, tự kết thúc 11.2s tính từ offset, fade .8s ở cuối. Skip pause/remove src/disconnect trước callback. Chặn nhấp kép; Escape và chuyển tab dọn nhạc/thoát an toàn.
- NHAP-CONG-VIEC.md đã lưu checkpoint giữa chừng. Commit lần lượt: 373c01c (ảnh), 1e6f60f (module), e1a3e12 (callback), 216e6fd (script), 120b3a6 (nháp). Tất cả main, thông điệp tiếng Việt. Không phát sinh thẻ xin duyệt GitHub.

### Hồi quy — HAI LẦN LIÊN TIẾP MỖI NHÀ CUNG CẤP GIẢ
Runner theo test/chay-quay-lai.html và các bộ sẵn có, thêm nguồn mo-man vào danh sách tải trong runner cách ly, KHÔNG sửa bộ thử trong repo. Nguồn cố định 216e6fd. Bằng chứng chạy: https://boba.page/nsUuKgIoU2MrA2U7sABIog/index.html (liên kết thử tạm, không phải LIVE).

| Lượt | Hồi quy | Lõi lịch | Helper | Tích hợp lịch | Quay lại | Tải document thật | Tổng PASS | FAIL |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Gemini 1 |132|26|15|18|21|1|213|0|
| Gemini 2 |132|26|15|18|21|1|213|0|
| OpenRouter 1 |132|26|15|18|21|1|213|0|
| OpenRouter 2 |132|26|15|18|21|1|213|0|

Tổng 852 phép kiểm PASS, 0 FAIL. Bao gồm 429, 503, mất mạng, 404, retry hai nhà, lỗi/chuyển model, nén, Lưu/Nạp, nhật ký, lịch và undo. Các ca ép adapter vẫn giữ nguyên: không diễn giải tất cả ca đều dùng nhà đang chọn. Storage chỉ RAM, CSP connect-src none, IndexedDB namespace thử riêng xóa sau mỗi lượt; không AI thật, không key thật.

### Kiểm tra thủ công 414×896
Harness nguồn đúng 216e6fd: https://boba.page/AEpGdZqDPb3VLGciT2r35A/index.html . Save nhân vật thử trong RAM, IDB mo-man-test-*, fetch chặn/giả và CSP connect none. Không thao tác LIVE game.
- Có save giả: hộp Một kiếp chưa dứt hiện, hai nút thật chạy đúng đoạn. Tiếp tục cũ chạy xong nạp đúng nhân vật/chuyện cũ; mới chạy xong vào tạo nhân vật, chưa xóa save cũ trước khi khởi thân thành công.
- Cũ chạy trọn: Audio bắt đầu 2.505333s, gain .8000000119; cảnh 2 ghi ở elapsed 3.797333s, cảnh 3 ở 7.248s, kết 10.206872s; fade .8s đạt 0, dừng tại 13.705333s (elapsed 11.205333s), vào story.
- Mới chạy trọn: bắt đầu 3.004752s, gain .8; cảnh 2 3.807202s, cảnh 3 7.246996s, kết 10.213333s; fade .8s đạt 0, dừng 14.215511s (elapsed 11.215511s), vào create.
- Ngưỡng code đúng 3.5/7/10.2/11.2; thời điểm quan sát rAF/media có trễ lấy mẫu như trên, KHÔNG tuyên bố đo chính xác 3.5 và 7. Tải nhạc ban đầu có độ chờ khoảng một giây; thời lượng tính từ lúc bắt đầu nhạc tại offset.
- Bỏ qua cả hai đoạn: Audio paused=true trước sự kiện skip/callback khoảng 1ms; cũ vào story, mới vào create. Năm Audio đã dùng là năm phần tử khác nhau, sau dọn đều paused và không còn src, không lỗi JS.
- Sáu cảnh ảnh tải đủ; khối chữ y143.36, từ thấp nhất <=658.06; triện đáy <=738.49; nút skip đáy52. Không giao nút, không tràn 414×896. Đã kiểm hình học từng từ/cột và từng cảnh, ảnh đúng ánh mắt/núi/kiếm/cổng/thiếu niên/phượng hoàng.
- Khởi thân thử tên Kiếp mới thử/xuất thân nông dân thử: save mới đúng, chương1, lịch sử rỗng, gọi story.turn('',true). Ở bước này AI phân loại và mở truyện được stub; không coi đó là thử nội dung AI thật.
- Tiếp tục ngoài hộp vẫn nạp save cũ. Mục Lục mở đủ15 mục. Lưu game ra file tạo download; Nạp file sai bị từ chối và giữ save, file giả đúng cấu trúc vai ai hiện xác nhận và nạp đúng chuyện cũ. Xuất nhật ký tải hongduc-nhat-ky.txt, đã đọc lại nội dung thử và dấu che khóa.
- Kiểm tra kết nối: bấm khi không khóa báo thiếu khóa, sau cấu hình giả báo Kết nối Gemini thành công; chỉ smoke test UI giả, các adapter/lỗi mạng thực thi trong bốn lượt hồi quy ở trên.
- Quay lại thủ công: khôi phục module kể/quay-lai thật trong harness, mạng đáp JSON giả; bấm ba hành động thật tạo stack1→2→3, bấm ba lần Quay lại về2→1→0; chuyện cũ/save phục hồi, nút ẩn khi rỗng, lỗi JS=[]; không AI thật. IDB thử mo-man-test-yubzo90mzk đã yêu cầu xóa sau kiểm tra.

### Đối chiếu SHA-256 và phạm vi an toàn
Mỗi commit mã đã kiểm toàn văn/byte, Preview diff rồi đối chiếu raw fixed SHA. Trước commit báo cáo kiểm lại các file quan trọng tại head120b3a6. So compare với nền96a6a8a chỉ có sáu ảnh mới, module mới, hai file tích hợp và NHAP; báo cáo này là thay đổi tài liệu tiếp theo.
- mo-man: f3470aea470ea4a83e60e123ce182dc79bab0049f7807563783eaa43230f639c
- man-hinh: 0ac58003321ad8554ce39d43e6fca88367a8fa893cc8bc52313e5187ccea3cf8
- index: 166467a5d5e847a9c6da3dd614b18bb294279d96adf49e3242383f8b73ab98b2
- Nhạc1 không đổi: 2cf1388e9e059bd1b6014d127f5e75bdaa53dba99ec1ab9e3306793604cd7b7a
- Nhạc2 không đổi: 62d2601b1a54d976f4ee546cbbbd4373ca805672cbaf12585fe2c022e3c941d2
- Mẫu thiết kế không đổi: 01c6a4ee7941986ddafaf6adf7a9bded176ebf6b25621cacd4a207f11bb3b2c2
- truyen-ke/gemini/luu-tru/thoi-gian/quay-lai/CSS đều SHA khớp nền96a6a8a. Không đụng 11 nút C1, cơ chế TRỰC TIẾP/GIÁN TIẾP/ĐI QUA, logic nén, save/log/IDB thật hay API key. Không thêm nhạc, xóa/đổi tên hai MP3 hay tạo nhánh khác.
- Ảnh cũ1 b64d255dfe73f3be3738067ea242e70f52ea820c355f2955b025670ba8b44c4a
- Ảnh cũ2 78df4d2521b2e0946a91202433cd98a1c774137a34395a0a89d9d10355986ff2
- Ảnh cũ3 ed415446b410d01e5c2c729b47e3f291b2576e53c1d47ca6f1dbe3b3bc2069af
- Ảnh mới1 c64dfa5b0de1b56593d0ec969d95253aa8837ae40252d7fdff14f20ab3994abc
- Ảnh mới2 9bec5044f2df6fcb8308fe07573f3f59feedbe9936a900d35179f9c5ba73f472
- Ảnh mới3 db46663421feefaea5fcc82d9a487b46668178e01de786f437018081e7bae11e
LIVE https://huuducbkb.github.io/hong-duc-tu-tien-lo/ đã trả200 và SHA khớp index, mo-man, man-hinh cùng cả sáu ảnh tại thời điểm chốt báo cáo; chỉ fetch tài nguyên, không chạy game LIVE. Sau commit tài liệu sẽ xác minh head và báo kết quả cuối.

### Lỗi gặp, xử lý, phần chưa làm / đang dở
- Runner đầu thiếu mo-man trong danh sách nguồn cách ly: đã sửa runner rồi chạy lại đủ4 lượt PASS; không phải lỗi mã game. Fixture save ban đầu dùng vai model nên import từ chối đúng; đổi fixture thành ai rồi nạp thành công, không sửa luật import.
- Công cụ tải bản save JSON báo application/octet-stream và không lưu được attachment; đã kiểm file giả hợp lệ bằng upload riêng. Game có tạo download; không tuyên bố đã đọc lại byte download save. Nhật ký TXT tải/đọc bình thường.
- Khung công cụ nhìn588px trong khi iframe896px: đổi vị trí iframe thử để bấm điều khiển dưới màn; không đổi kích thước414×896 và không sửa CSS game.
- Không thử Safari/iOS thật, mạng AI thật, save thật, hoặc nghe đánh giá âm nhạc bằng tai; đã xác minh phần tử phát, offset, gain, fade bằng sự kiện/media thật. Không lặp phân tích RMS vì dùng đúng hai bản nhạc đã duyệt, hash không đổi.
- Rủi ro còn biết: watchdog15s xử lý nhạc chưa bắt đầu; nếu mạng đứng sau khi đã phát thì timeline dựa media có thể chờ, Bỏ qua vẫn dừng và đi tiếp. Chưa bổ sung chính sách timeout giữa bản nhạc vì ngoài luồng bình thường đã duyệt. Không coi bộ thử là bảo đảm mọi lỗi thiết bị/mạng.
- Không có thay đổi mã chức năng đang để nháp. Phần còn lại sau commit này: xác nhận tài liệu raw khớp editor, kiểm head phát hành và bàn giao link LIVE để duyệt tổng; không yêu cầu duyệt từng commit. Không tự sửa nội dung/cơ chế game khác.

---

## 07/11/2026 17:49 — BÀN GIAO QUAY LẠI BA LƯỢT

### Thiết kế đã chốt và đã làm
- Phương án a: Quay lại MỘT lượt vừa chơi mỗi lần bấm, mở rộng giữ tối đa BA lượt. Chụp sâu toàn save trước hành động nút/ô tự do và trước nén; giữ cả lịch, tuổi, thọ, giai đoạn, sự kiện, hành trình, chỉ số, vật phẩm. Lưu mốc sổ IndexedDB và bản log để xóa đúng phần phát sinh.
- Stack chỉ ở RAM, không ghi vào save/localStorage; đầy thì bỏ mốc cũ nhất, không redo. Hành động mới sau hoàn tác push bình thường. Đổi nhân vật hoặc tải document mới không mang stack cũ.
- Nút Quay lại (n) đặt ngay sau khối lựa chọn, dùng triện cổ trang hiện có; ẩn khi rỗng, khóa khi bận. Một bấm pop đúng một mốc, phục hồi save/chuyện/sổ/log và hồ sơ ngày/tuổi/thọ/giai đoạn.
- H.storage.die dọn stack ngay; chết AI hoặc cạn thọ xóa save theo hardcore và không thể quay lại. Không vượt cửa chết.
- Undo hủy kết quả choLuu trước phục hồi; retry kết quả chờ lưu không push thêm mốc hay gọi lại AI. Ghi save/khôi phục sổ lỗi thì giữ mốc, khóa hành động mới và cho bấm Quay lại thử lại; không pop nhầm.
- Các commit mã: 9d0c64f module js/quay-lai.js; 8149e80 nạp sau truyen-ke; 8d2b3b6 CSS; 7a12dde + 1438805 test; fd74826 + 982c36c runner. Không sửa 11 nút nhánh 1, cơ chế ba mức, thuật nén, JSON cũ/bản vá 9513f19, Art/ hay thiet-ke/mau-giao-dien.html. index không tham chiếu test.

### Kiểm thử nghiệm thu
Nguồn cố định 982c36cbc18215d403b7ba10721dc9887fb967dc; runner test/chay-quay-lai.html, SHA-256 8cb38537ef83895e0943c0614675b27f273f8d6215b2316031625df8e7bd9aeb. Runner bọc bộ cách ly cũ, kiểm tra chuỗi thay thế trước chạy; dùng ?commit=SHA đầy đủ khi tái lập trên origin thử riêng, tuyệt đối không chạy LIVE.

| Lượt liên tiếp | Hồi quy | Lõi lịch | Helper | Tích hợp lịch | Undo | Tải document | FAIL |
|---|---:|---:|---:|---:|---:|---:|---:|
| Gemini 1 |132|26|15|18|21|1|0|
| Gemini 2 |132|26|15|18|21|1|0|
| OpenRouter 1 |132|26|15|18|21|1|0|
| OpenRouter 2 |132|26|15|18|21|1|0|

Mỗi lượt 213 PASS, 0 FAIL. Toàn bộ mạng AI giả, CSP connect-src none trong game, Storage RAM, IndexedDB namespace thử riêng được xóa sau lượt. Các ca tự ép adapter vẫn giữ nguyên, không diễn giải mọi ca đều dùng nhà đang chọn. Không gọi API AI thật, không đọc/đổi key/save thật.

22 ca mới gồm deep save/ngày/tuổi/thọ/giai đoạn; xóa chuyện và nội tâm; sổ/meta/log; giới hạn ba; hành động mới sau undo; sự kiện/hành trình; pending undo/retry không cộng đôi; trước nén; lỗi save/sổ và retry; khóa bận/nhấp kép; nút/ô tự do; chết AI/cạn thọ; đổi nhân vật; không serialize; hồ sơ đỏ; khung hẹp; thay hai document thật giữ save giả nhưng stack mất. Ca vòng đời dùng module thật với lõi kể/kho save giả, không phải API thật.

Khung 414×896: bốn lượt không tràn ngang, hồ sơ không giao nút Đóng; ca undo xác nhận nút hiện có chiều rộng dương, nằm trong 414px và không giao nút Đóng/các hành động. Bằng chứng chạy tạm (đến 14/11/2026): https://boba.page/Q_xvf4xBoIt4ndburY2KMw/index.html . Không phải bản chơi LIVE.

### Lỗi gặp, xử lý và giới hạn
- GitHub editor: phím Meta không chọn/đi cuối tài liệu như kỳ vọng, CSS chèn nhầm vào giữa bản nháp. Đã xóa đoạn nhầm TRƯỚC commit, dùng Find/Replace, so toàn văn expected và SHA-256 khớp; preview chỉ còn một dòng CSS dự kiến. Không commit bản nháp hỏng.
- File hiện có sửa bằng Find/Replace chính xác; file mới kiểm lại toàn nội dung/cú pháp/preview. Mỗi thay đổi kiểm hash trước commit và raw fixed SHA sau commit, tránh raw main cache.
- Save và IndexedDB không có transaction chung: nếu khôi phục sổ/log lỗi sau ghi save, module giữ mốc RAM và chặn lượt mới để retry. Không làm cơ chế backup bền vững ngoài phạm vi stack RAM đã chốt; tải lại giữa lỗi không giữ mốc. Bộ test không chứng minh mọi lỗi thiết bị hay AI thật.

### Còn lại lúc ghi tài liệu
Mã và 4 lượt kiểm thử đã xong. Sau commit tài liệu/checkpoint, chờ Pages head cuối Success và so SHA-256 index/CSS/9 module JS trên LIVE với raw commit cuối; kết quả cuối trả trong bàn giao. Không thao tác game LIVE/key/save thật. Không có phần chức năng đã chốt nào chủ động bỏ qua.

---

## 07/11/2026 16:39 — BÀN GIAO TÍCH HỢP LỊCH TÁM NĂM

Phần này thay trạng thái CHƯA TÍCH HỢP ở các checkpoint lịch sử bên dưới. Mã và bộ thử đã tích hợp trên main; xác minh phát hành Pages/head cuối thực hiện sau hai commit tài liệu, kết quả trả trong bàn giao cuối.

### Đã làm
- 313e023: thay riêng 11 giai đoạn nhánh 0 theo lịch cá nhân; ngày đầu tại xuất thân, khảo thí ngoài màn, bỏ ép gặp Hàn Lập mốc 5/9. Không đổi 11 nodes nhánh 1. Tái dùng ba mức TRỰC TIẾP/GIÁN TIẾP/ĐI QUA, không tạo cơ chế mới.
- 2a45b0d: index nạp js/thoi-gian.js trước module game; không tham chiếu test. 40bd367: save cũ chuẩn hóa lịch năm 0 tháng 1; tuổi từ xuất thân nếu nhận diện được, không có thì 16.
- Lượt kể dùng bản sao: lấy đề xuất thời gian, kẹp lịch rồi kể kết quả tại ngày khóa; bản kể nháp không hiển thị. Thiếu thoi_gian_troi dùng một ngày; thường tối đa 30 ngày, bế quan do hành động người chơi tối đa 1080 ngày. Di chuyển theo bảng ngày đường, giữ phần đường còn lại; không tin điểm đi AI bịa. Bảng đường là thiết kế game, không phải số địa lý nguyên tác.
- Save lỗi giữ kết quả chờ lưu để thử lại không gọi AI/cộng lịch lần hai. Prompt chọn cảnh và kể có ngày, tuổi, thọ còn, sự kiện; cấm kể tương lai, yêu cầu tiếng Việt chuẩn chính tả, xưng ngươi, không meta/không tự nhận AI. Giữ bộ sửa JSON 9513f19 và thuật nén cũ.
- Đại chiến ghim ngày 1/1 năm 8 (ngày tổng 2880), dừng đúng ngày, tái dùng bối cảnh Lạc Nhật Phong đã duyệt. Hàn Lập đánh bại được nhưng không giết được; ngoài hắn không ai bất tử. C2 Huyết Sát năm 11 và C3 Ma Đạo chỉ chưa kích hoạt, không làm Chương 2.
- Cạn thọ gọi H.storage.die và xóa save theo luồng hardcore. Không suy chết từ thương tích/bất tỉnh/giả chết.
- 7d5d396 + ace9684: hồ sơ hiển thị năm/tháng/ngày, tuổi, thọ còn; đỏ khi còn tối đa 10 năm. CSS chỉ thêm vào giao-dien.css.

### Kiểm thử đủ bộ, không dữ liệu thật
Nguồn cố định a881ba6b9a412beec82c60e1e15d4723e8dd7ede; trình chạy lưu tại d6dc4f2bed488275f88911b4a206981f9dba907e/test/chay-cach-ly.html. Trình chạy mặc định nguồn a881ba6; có thể truyền ?commit=SHA_đầy_đủ. Chỉ chạy ở localhost/origin riêng, cấm LIVE.

| Lượt liên tiếp | Hồi quy | Lõi | Helper | Tích hợp | FAIL |
|---|---:|---:|---:|---:|---:|
| Gemini 1 |132|26|15|18|0|
| Gemini 2 |132|26|15|18|0|
| OpenRouter 1 |132|26|15|18|0|
| OpenRouter 2 |132|26|15|18|0|

Mỗi lượt 191 PASS. Đã tái lập từ chính runner commit, SHA-256 dc72bfbfc34b2c9a597592a7f85b7ac62dfe1ca1d8a004ecb1584f40ed920ac2. requestedProvider/selectedProvider khớp; ca chuyên biệt tự ép từng adapter được giữ nguyên, không diễn giải mọi ca đều gọi cùng backend. Fetch AI giả, CSP connect-src none, Storage RAM, IndexedDB namespace thử riêng đã xóa. Không gọi API AI thật, không đọc/sửa key/save thật.

18 ca tích hợp gồm nạp save cũ/tuổi, mở màn, mặc định thời gian, kẹp thường/bế quan/chống AI tự bế quan, trước/đúng ngày sự kiện, không kích hoạt hai lần/C2C3, đi đường và cắt ngang hành trình, cạn thọ xóa save, không suy chết khi thương, retry lưu không cộng đôi, prompt và hồ sơ đỏ. Giới hạn: không chứng minh AI thật luôn tuân lời nhắc; không thử API thật theo lệnh cấm. Không tuyên bố bộ thử bao phủ mọi hành vi game.

Khung 414×896: đã bấm Mục Lục → Nhân Vật, thấy lịch/tuổi/thọ, mở được nút “✥ Đóng” và bấm đóng. Khi mở menu: hồ sơ x20 y164 rộng167 cao123.95; nút Đóng x342 y8 rộng64 cao44, không giao nhau, không tràn ngang. Bốn lượt tự động cũng không giao nhau/tràn ngang.

Bằng chứng chạy tạm đến 14/11/2026: https://boba.page/_-I8rToYpWeTWBUZeTnplA/index.html . Đây là origin thử, không phải bản chơi LIVE.

### 11 giai đoạn nhánh 0 đã áp dụng — để duyệt tổng
1. Ngày 1/1 năm 0: NGÀY ĐẦU Ở NƠI XUẤT THÂN — sinh hoạt đúng thân phận; khảo thí ngoài màn, không mặc định nghe tin xa.
2. Tháng 1–3 năm 0 sau ngày mở đầu: AN THÂN LẬP NGHIỆP — chỗ ở, quan hệ, việc thường nhật.
3. Tháng 4–12 năm 0: CĂN CƠ TU LUYỆN — công pháp/tài nguyên, không bảo đảm đột phá.
4. Năm 1: NHIỆM VỤ ĐẦU ĐỜI — mưu sinh, rủi ro và lựa chọn riêng.
5. Năm 2: CƠ DUYÊN CỦA NGƯƠI — kỳ ngộ riêng, bù cơ duyên hợp lý, giữ quyền quyết định.
6. Năm 3: GIAO TÌNH VÀ ÂN OÁN — quan hệ/đối thủ riêng, không ép gặp Hàn Lập.
7. Năm 4: KHỔ TU VÀ TIẾN CẢNH — bế quan, kiểm tuổi/thọ; không tự nâng cảnh giới.
8. Năm 5–6: TIN TỨC TỪ XA — đường riêng, tin đúng lịch/truyền tin hợp lý, không tiết lộ bí mật Hàn Lập.
9. Năm 7 đến trước 1/1 năm 8: GIÓ TRƯỚC CƠN BÃO — biến động, chưa kể đại chiến nổ ra.
10. Đúng 1/1 năm 8: ĐẠI CHIẾN DÃ LANG BANG — sự kiện thế giới Lạc Nhật Phong, ba mức theo vị trí, giữ luật sinh tử đã chốt.
11. Sau sự kiện: HẬU QUẢ TRÊN ĐƯỜNG RIÊNG — hậu quả và khép Chương 1; không mở Chương 2.

### Lỗi gặp, cách xử lý và phần còn lại
- set_code fallback chèn cả bản mới trước bản cũ thay vì thay toàn văn; phát hiện trước commit, xóa phần HTML cũ bằng tìm/thay regex, chỉ còn một tài liệu. Xem diff và kiểm SHA trước/sau commit; không commit bản lỗi.
- Runner thử ban đầu dùng nhầm id menu-toggle; sửa thành toc-toggle, chạy lại đủ bốn lượt rồi lưu đúng vào repo. Click UI ban đầu không cuộn tới vì JSON kết quả quá dài; ẩn phần kết quả trên origin thử rồi kiểm UI thành công, không sửa game vì lỗi trình thử.
- Raw main có cache cũ: luôn đối chiếu raw theo SHA cố định. Public API Pages trả 404 không đồng nghĩa build lỗi; kiểm giao diện Actions/Pages và hash LIVE riêng.
- Không đổi Art/, mẫu thiết kế, 11 nút nhánh 1, thuật nén, trường JSON cũ; không tạo nhánh/đổi tên đè file.
- Còn bước phát hành sau tài liệu: chờ build head cuối thành công và đối chiếu SHA-256 file chính LIVE với head đó. Không cần anh nhập key hay chạy thử bằng save thật để hoàn thành bước kiểm này.

---

## 07/11/2026 16:06 — BÀN GIAO TRUNG GIAN HELPER LỊCH

**Gói tích hợp CHƯA hoàn tất. Game vẫn chưa nạp lịch; chưa chữa lỗi đại chiến sớm/ép gặp Hàn Lập nhánh 0 trên bản chơi.** Phần này cập nhật checkpoint bên dưới, không thay các ràng buộc chủ repo đã chốt.

### Đã làm

- Main `38bd465a4309f294918700f8de03fd5843ccf033`: bổ sung giaiDoan/chuanHoa/lapKeHoach/hoSo vào cuối js/thoi-gian.js. Chia 11 giai đoạn theo ngày; giữ hành trình >30 ngày và hành trình bị sự kiện cắt ngang; xác thực điểm đi theo vị trí lưu. Lõi cũ không đổi.
- Main `5c26e279e73923ee8bd582331f01b34b1415edcf`: thêm test/ke-hoach-lich.js với 15 ca helper độc lập, không nạp từ index.
- SHA-256 module mới `c1d257b9b5d31f79a42137e5b08c84782c8c4ed234f2e0e57c488999be4a881b`; test mới `44bda61325a4da31eac09fca5a63ced629c183426340ff2eeb89dafe66e007a8`. Diff trước commit và raw sau commit đều đã đối chiếu.
- Checkpoint NHAP-CONG-VIEC.md tại `38e0af936b26671ec4c56ef36a03e99d6724c408`, SHA `7e9b742e43da74429fed14d0cbd019defb6fad86a95e54ef8d9939cea4aa263f`, ghi chi tiết bước nối, lỗi thao tác và giới hạn kiểm thử.

### Kiểm thử chính xác phạm vi

Nguồn cố định 5c26e279e73923ee8bd582331f01b34b1415edcf, runner https://boba.page/vOXTT-3rDQpHew5HGeKehQ/index.html (tạm đến 14/11/2026). Chạy liên tiếp Gemini 1, Gemini 2, OpenRouter 1, OpenRouter 2. Mỗi lượt: hồi quy hiện có 132 PASS/0 FAIL, lõi lịch 26 PASS/0 FAIL, helper 15 PASS/0 FAIL. requestedProvider/selectedProvider khớp; ca chuyên adapter tự ép nhà riêng như thiết kế bộ thử. Cả bốn cleanup kho thử thành công. Mạng AI giả, iframe CSP khóa kết nối, RAM Storage và IndexedDB namespace riêng; không API/key/save thật. Hai lượt runner lõi riêng cũng 26+15 PASS.

Đây KHÔNG phải bộ nghiệm thu lịch tích hợp: chưa thử hết thọ gọi storage.die thật trong kho giả, prompt/lượt kể mới, nhánh 0 mới, hồ sơ mới hoặc chống cộng lịch hai lần. Giới hạn hồi quy cũ vẫn tồn tại về thao tác UI, xuất tệp nhật ký, retry 503/nén/ngưỡng nhắc và cảnh/NPC đầy đủ. Không tuyên bố tính năng đã hoàn thành chỉ vì các số PASS này.

### Chưa làm và hướng tiếp tục

- Chín file index/CSS/game đang chơi vẫn giống byte checkpoint a876e58. Chưa nạp script game, chưa nối save, chưa sửa nodes0/tuyenAn0/ép gặp 5/9, chưa nối prompt/thoi_gian_troi/sự kiện năm 8, chưa nối chết hết thọ và hồ sơ/CSS 414x896.
- Helper luot_lich chỉ là bộ đếm, chưa phải giao dịch chống cộng hai lần. Cần clone lượt, áp lịch một lần và xử lý save lỗi; ngày đã kẹp phải có trước khi AI kể/chọn cảnh, không chỉ sửa ngày sau khi kể vượt.
- Giữ đúng 8 năm; năm 0 khảo thí ngoài màn với nhánh 0 tại xuất thân. Chỉ gặp Hàn Lập tại sự kiện thế giới tới ngày. Giữ nguyên 11 nút nhánh 1 và cơ chế ba mức; Hàn Lập không thể bị giết, các nhân vật khác không bất tử. C2/C3 chưa kích hoạt, không Chương 2.
- Thêm test tích hợp đầu-cuối rồi chạy lại đủ hai lượt liên tiếp mỗi nhà với mạng giả/kho riêng; đối chiếu Pages và SHA LIVE theo head cuối. Các kiểm tra checkpoint không thay bước này.
- Không có lỗi GitHub dịch vụ ngăn tích hợp. Lỗi Ctrl+H trong nháp đã hoàn tác và bỏ nháp, không commit truyen-ke.js; tránh phím tắt đó. Tiếp tục dùng Meta+A/type hoặc chèn đầu, xem diff và SHA trước commit.

Danh sách 11 giai đoạn nhánh 0 ngay bên dưới vẫn giữ nguyên đầy đủ; yêu cầu mới đã cho phép áp dụng danh sách này, không cần xin duyệt từng bước. Trạng thái thực tế: helper có ranh giới giai đoạn, nhưng nội dung nhánh 0 trong game CHƯA thay.

---

## 07/11/2026 chiều — CHECKPOINT LỊCH TÁM NĂM, CHƯA HOÀN TẤT GÓI

### Quyết định ràng buộc mới (thay thiết kế nhánh 0 cũ bên dưới)
- Chủ repo chốt nguyên văn: “a theo nguyên tác, b được, c tính là chết hardcore”. Lịch ĐÚNG 8 NĂM từ khảo thí tới đại chiến, không phải 10 năm.
- Nhánh 0 mở ngày đầu ở nơi xuất thân; khảo thí ngoài màn; chỉ gặp Hàn Lập trong sự kiện thế giới tới ngày. Tái dùng nguyên cơ chế TRỰC TIẾP/GIÁN TIẾP/ĐI QUA theo vị trí, không ép kéo nhân vật xa tới núi.
- Cạn thọ mạng dùng luồng chết thật H.storage.die; không suy chết từ thương/bất tỉnh/giả chết. Thêm nhắc chính tả tiếng Việt, không hứa hết lỗi AI.

### Đã lưu main trong lượt này
- `1590eecf0e855517eb62d66e4573aeccc64a7ecf`: thêm `js/thoi-gian.js`, namespace HongDuc.thoiGian. API doc/lich/tuoi/gioiHan/conLaiNgay/cong/suKienKe/boiCanh; trạng thái mới `thoi_gian`, mặc định năm 0 tháng 1 ngày 1, tuổi theo xuất thân hoặc 16. Không tự đọc kho thật.
- Quy ước game 30 ngày/tháng, 360 ngày/năm; đại chiến 1/1 năm 8 (=2880 ngày). Ngày/tháng cụ thể là quy ước thiết kế, KHÔNG giả là nguyên tác chốt ngày đó. Bảng C2/C3 chỉ dự kiến chưa kích hoạt. Bối cảnh đại chiến tái dùng nội dung đã có trong prompt nhánh 1.
- Bảng thọ nguyên 100/150/250/500/1000; bảng ngày đường gồm Thất Huyền Môn/Thái Hà Sơn, Thanh Vân Tông, bảy phái Việt Quốc và thành trấn. Ngày đường là số cân bằng game có ghi chú, không giả số liệu nguyên tác.
- Kẹp thường 30 ngày, bế quan do người chơi chọn tối đa 1080 ngày; thiếu trường dùng 1 ngày; dừng đúng mốc sự kiện hoặc cạn thọ mạng. Hiện chỉ trả cờ `hetTho`, CHƯA nối H.storage.die.
- `4095be364e3a76f75d51b5a5acc75028d35717d3`: thêm `test/thoi-gian.js`, 26 ca lõi độc lập. Hai lượt liên tiếp mỗi lượt 26 PASS/0 FAIL trên origin riêng; chỉ module lịch, KHÔNG phải Gemini/OpenRouter hai lượt mỗi nhà. Mạng khóa sau tải mã công khai, Storage RAM, IndexedDB tắt; không nạp adapter AI, không key/save thật.
- SHA-256 module: `e9b5080f9bd37ec7883f87faf5a0124b5c80a6b68fc567a911897762f9df33de`; test: `57949dd40ae336407b2890c89f89eaf07607f3bab26e8064dccf59dd202a796f`. Đã kiểm preview và raw theo commit khớp.
- Runner bằng chứng tạm (hết hạn 14/11/2026): https://boba.page/O9CPjtAuzGuwu8Tzy8UKDw/index.html . Chỉ chạy lõi thuần, không dùng làm bằng chứng hồi quy toàn game.

### 11 giai đoạn nhánh 0 ĐỀ XUẤT để duyệt tổng — CHƯA ÁP DỤNG vào truyen-ke.js
1. Ngày 1/1 năm 0: NGÀY ĐẦU Ở NƠI XUẤT THÂN — vào sinh hoạt đúng môn phái/thân phận; khảo thí Thất Huyền Môn ngoài màn, không mặc định nghe tin ở xa.
2. Tháng 1–3 năm 0: AN THÂN LẬP NGHIỆP — chỗ ở, quan hệ, việc thường nhật của môn phái hoặc tán tu.
3. Tháng 4–12 năm 0: CĂN CƠ TU LUYỆN — công pháp phù hợp, tích tài nguyên, không tự bảo đảm đột phá.
4. Năm 1: NHIỆM VỤ ĐẦU ĐỜI — nhận việc/tự mưu sinh theo xuất thân, rủi ro và lựa chọn riêng.
5. Năm 2: CƠ DUYÊN CỦA NGƯƠI — kỳ ngộ riêng; mất cơ duyên được bù hợp lý, không cướp quyền quyết định của người chơi.
6. Năm 3: GIAO TÌNH VÀ ÂN OÁN — đồng môn, đồng đạo, đối thủ của riêng nhân vật; không màn gặp Hàn Lập định sẵn.
7. Năm 4: KHỔ TU VÀ TIẾN CẢNH — có thể bế quan, kiểm tuổi/thọ nguyên; tiến cảnh cần điều kiện, không tự nâng cảnh giới.
8. Năm 5–6: TIN TỨC TỪ XA — nhiệm vụ/đường riêng tiếp diễn, tin giang hồ rỉ ra đúng năm và đường truyền tin hợp lý; không tiết lộ bí mật Hàn Lập.
9. Năm 7 tới trước 1/1 năm 8: GIÓ TRƯỚC CƠN BÃO — biến động thương lộ/môn phái; KHÔNG kể đại chiến đã nổ ra.
10. Đúng 1/1 năm 8: ĐẠI CHIẾN DÃ LANG BANG — sự kiện thế giới tại Lạc Nhật Phong; ba mức theo vị trí. Hàn Lập không chết, ngoài hắn không ai bất tử.
11. Sau sự kiện: HẬU QUẢ TRÊN ĐƯỜNG RIÊNG — xử lý ảnh hưởng và khép Chương 1; không làm nội dung/kích hoạt Chương 2.

### Chưa làm — điểm nối bắt buộc
- `index.html` CHƯA nạp module; game LIVE vẫn chạy mã cũ. Chưa sửa truyen-ke.js, luu-tru.js, muc-luc.js, CSS. Không coi lỗi đại chiến sớm hay gặp Hàn Lập nhánh 0 đã được chữa.
- Cần thay nodes0/tuyenAn0 và mọi ép gặp nhánh 0 mốc 5/9; ghim tiến mốc theo lịch, xử lý save cũ mốc cao nhưng lịch mới năm 0. GIỮ NGUYÊN mảng 11 nodes nhánh 1 và bộ chọn ba mức.
- Chèn lịch/tuổi/thọ mạng/sự kiện vào cả prompt chọn cảnh và kể; chỉ thêm JSON tùy chọn, giữ nguyên readJSON/retry của 9513f19. Bối cảnh đại chiến chỉ gửi khi tới ngày; không giữ câu vô điều kiện khiến AI nhảy sớm.
- Cần thiết kế giao dịch lượt: AI lỗi/retry/save lỗi không cộng lịch hai lần; sự kiện tới ngày được kể với prompt đúng ngày, không để AI kể vượt rồi mới kẹp số. Mở màn giữ ngày đầu tại nơi xuất thân.
- Nối đọc/ghi save chuẩn hóa, nối cờ cạn thọ vào luồng H.storage.die và màn chết cũ. Không sửa thuật nén.
- Nối hồ sơ và CSS cảnh báo đỏ khi gần cạn; thử 414x896, không đè Đóng. Chưa thử UI này.
- Quãng đường hiện chỉ kẹp từng lượt; cần thêm tiến độ hành trình nhiều lượt cho tuyến trên 30 ngày và tuyến bị sự kiện cắt giữa đường; xác thực điểm đi theo vị trí đã lưu, không để AI bịa điểm đi.
- Tích hợp test mới vào runner toàn bộ, thêm ca H.storage.die thật trên kho thử, hồi quy đủ hai lượt LIÊN TIẾP MỖI NHÀ Gemini/OpenRouter với fake network, RAM Storage, IndexedDB riêng. Không lấy 26 PASS lõi làm bằng chứng đủ gói.
- Sau tích hợp mới thêm script GAME vào index (không script test), chờ Pages, đối chiếu SHA-256 các file chính LIVE với commit cuối. Chưa có bản phát hành gói mới được xác nhận.

### Lỗi editor và an toàn
set_code tiếp tục nối thêm mã thay vì thay toàn văn. Đã phát hiện trước commit, sửa bằng Meta+A rồi type; preview và raw đã khớp hash. Không commit bản nối lỗi. Không sửa Art/, mẫu giao diện, nhánh 1, nén lịch sử, JSON cũ; không gọi API/key/save thật, không tạo nhánh hay đổi tên đè file.

---

## 07/11/2026 — BÀN GIAO VÁ ĐỊNH DẠNG AI

Phần này thay thế trạng thái “V7 chỉ thử, main chưa vá” và các số đếm cũ bên dưới.

### Đã làm
- Đã commit thẳng main: `564806c` (OpenRouter), `b03c069` (Gemini), `52eb82b` (truyện). Bộ đọc JSON bóc fence và thử phần từ ngoặc nhọn đầu đến ngoặc nhọn cuối; giữ kiểm tra schema cũ. Sai định dạng thử lại đúng một lần với nhắc chỉ JSON, sau đó báo lỗi tiếng Việt.
- Vá cả chọn bối cảnh sai khung không ghi log và candidates/parts null/dị thường gây TypeError. Lỗi được ghi nhật ký; lỗi ghi sổ cũng thoát trạng thái bận.
- Kiểm finishReason/stopReason/finish_reason/native_finish_reason; hết token có lý do trong log. Gemini yêu cầu JSON đặt maxOutputTokens=32768, dưới mức tối đa 65536 của Flash-lite đã đối chiếu tài liệu. Không đổi giới hạn cho lời gọi nén.
- OpenRouter KHÔNG từ chối model thiếu metadata. Không gửi max_tokens, để mặc định upstream; ghi log. Không dùng top_provider làm giới hạn chung mọi provider. Không hứa upstream sẽ không cắt câu trả lời.
- Không sửa schema, prompt cốt truyện, thuật nén lịch sử, 11 nút nhánh 1, ba mức bối cảnh, mẫu giao diện, Art/ hay index.html.

### Hồi quy bản phát hành
Mã được chạy: `8cdedef7361b402ae7d72797f8c3af3acbcacccc`. File `test/bo-hoi-quy-phat-hanh.js` SHA-256 `dc459129bf6ce27ec1cbd1f7f369677c3fd586e51e1938413f637e8ddf923ecc`.

| Nhà chọn | Lượt 1 | Lượt 2 |
|---|---|---|
| Gemini | 132 PASS / 0 FAIL | 132 PASS / 0 FAIL |
| OpenRouter | 132 PASS / 0 FAIL | 132 PASS / 0 FAIL |

Chạy tuần tự bốn lượt mới, mạng giả, CSP connect-src none, Storage RAM, IndexedDB namespace riêng; cả bốn đã xóa kho thử. Không gọi API AI thật, không đọc key/save thật. Ca G4 dùng chung đã bỏ ép Gemini và theo nhà chọn. Ca G1 fallback/ưu tiên model chuyên Gemini, G6/G7 và ca riêng từng adapter vẫn kiểm đúng nhà của chúng; không diễn giải 132 phép là 132 request của nhà chọn. Ca JSON mạng giả kiểm URL backend cả hai nhà.

Bằng chứng đầy đủ: `test/ket-qua-hoi-quy-cuoi.txt` (commit `5f8e2c4`). Kết quả cũ `ket-qua-hoi-quy.txt` là lượt trước chỉnh G4, giữ làm lịch sử. Runner `test/chay-cach-ly.html` nhận `?commit=8cdedef7361b402ae7d72797f8c3af3acbcacccc`; chỉ mở bản sao ở localhost/origin thử, tuyệt đối không chạy trên LIVE. Không tham chiếu test từ index.

Phủ thêm fence, văn trước/sau JSON, JSON cắt ngang, noi_tam hợp lệ, chọn cảnh sai khung, candidates/parts dị thường, hết token, khôi phục cache, thiếu metadata OpenRouter và native reason. Một số mô tả CHƯA PHỦ trong đầu/đuôi bộ test được kế thừa lịch sử, không thay thế danh sách kết quả chi tiết từng phép.

### Chẩn đoán và cách xử lý nếu còn lỗi
Flash-lite hay trả sai khung JSON là chẩn đoán chính từ điều tra trước; không có đo tần suất bằng API thật trong đợt này. Bản vá xử lý định dạng và tránh treo im lặng, không bảo đảm chất lượng mọi phản hồi AI. Nếu vẫn lỗi, nên thử model Flash đầy đủ (không lite) hoặc OpenRouter, rồi đọc nhật ký tiếng Việt/lý do hết token.

### Chưa làm và giới hạn
- Không thử AI/key/save thật theo yêu cầu; không kiểm Safari iPhone thật hay bảo đảm cốt truyện do model kể luôn đúng.
- Không tuyên bố đã kiểm mọi thao tác giao diện thực, mọi nội dung file xuất hoặc mọi ngưỡng nhắc sao lưu.
- Đối chiếu build Pages và SHA-256 LIVE cuối đợt được ghi vào phần chốt phát hành trong NHAP-CONG-VIEC.md và báo cáo trả kết quả; không lấy bảng LIVE lịch sử bên dưới làm bằng chứng bản vá này.

### Lỗi kỹ thuật đã giải quyết
V7 cũ chặn OpenRouter thiếu metadata đã bỏ. Test cũ ép Gemini được sửa để tách nhà đúng. Editor GitHub cần kiểm diff và hash toàn văn; GitHub có thể thêm newline. Công cụ tải .js/JSON bị từ chối thì dùng .txt để lưu bằng chứng, không đưa test vào index. Mọi file game đã đối chiếu hash raw sau commit.

### SHA-256 ba file vá trên main
- js/truyen-ke.js: `dde80837355e9483e0de5ec8beb3fa12985d337302dd0778e5853edb86412484`
- js/gemini.js: `956f5ceb893de80a28881a69f999652128a077a4e5de1a79caa3e5cf04516aed`
- js/openrouter.js: `a6639147725be8c00ac89b5e9d478c958a31b22dbbfaeab7e568832dd11f88e3`

---

## 06/11/2026 — BÀN GIAO CẬP NHẬT CUỐI

- Đã làm: nội tâm theo thiện cảm, nhánh 0 với 11 mốc và tuyến ẩn, phân loại xuất thân và lưu nhánh, cảnh bắt buộc 5/9, bối cảnh đại chiến nhánh 1, xuất/nạp JSON có xác nhận, đổi tên Lệ Phi Vũ và chuyển thiện cảm save cũ. Giữ màn chết xóa save, cho phép nạp file cũ. Không làm Chương 2, không đổi thuật nén lịch sử hay file mẫu và ảnh Art.
- Sửa bổ sung bc8c641: trước mốc 5, Hàn Lập bị loại khỏi NPC hiện diện; mốc 8/10 chỉ đưa tin gián tiếp. Giữ nguyên mức cảnh được AI chọn và ép gặp ở mốc 5/9. Prompt nhắc ràng buộc; AI thật vẫn có thể không tuân hoàn toàn lời kể.
- Bộ test commit 0a93c5c thêm sáu phép cho các mốc 1–4, 8, 10. Runner cách ly https://boba.page/pWmLWBkC-6YRv69T33el7g/index.html hết hạn 13/11/2026, dùng mã tại commit 0a93c5c, chặn mạng thật bằng CSP, bộ nhớ giả và IndexedDB riêng. Chạy liên tiếp: Gemini lần 1 110 PASS / 0 FAIL, lần 2 110 PASS / 0 FAIL; OpenRouter lần 1 110 PASS / 0 FAIL, lần 2 110 PASS / 0 FAIL. Mỗi lượt đã xóa kho thử. Runner đặt nhà mặc định trước mỗi phép; test chuyên một nhà vẫn tự chọn nhà đó, test chung không nhất thiết gửi request; phân loại dùng stub, nội tâm có kiểm mạng giả cho cả hai nhà. Không dùng API, key hay save thật.
- Lỗi đã khắc phục: selector xác nhận sai; nạp khi truyện đang chạy có nguy cơ bị lượt cũ ghi đè; runner OpenRouter ban đầu thiếu khóa/model giả; tên cũ và xung đột khóa thiện cảm được chuyển hợp lý. Kết quả 104 phép ở các mục cũ là lịch sử và được thay bằng kết quả 110 phép ở đây.
- Giới hạn/chưa kiểm: Safari iPhone thật và chất lượng phản hồi AI thật chưa được kiểm; không thể bảo đảm AI luôn tuân prompt. GitHub Actions lượt 84 triển khai thành công; lúc 21:05 ngày 06/11/2026 đã đối chiếu chín file chính LIVE, tất cả trùng SHA-256 với commit a67791c, gồm js/truyen-ke.js ffcd9a206d0eb931a4d7bb9c36bf55f56f0dcd7c45d9b037157472ef9bcb1eb9. Tám hash còn lại ghi ở NHAP-CONG-VIEC.md (bảng lịch sử), bảng cũ của file truyện đã thay bằng hash mới tại phần đầu tài liệu đó. Các ghi chú cũ về việc chưa chặn gặp sớm, chưa chạy đủ và hướng dẫn thử trên LIVE đã lỗi thời; tuyệt đối không chạy test trên LIVE.

---

## BỔ SUNG 06/11/2026 — KẾT QUẢ THEO NHÀ CUNG CẤP

Bổ sung này thay thế trạng thái hồi quy còn chờ ở mục ngay dưới. Trên mã bb70e83, sandbox độc lập chặn mạng thật, dùng bộ nhớ và IndexedDB thử riêng, chạy bộ 104 phép lần lượt với nhà mặc định và những phép riêng của từng nhà:

| Nhà mặc định | Lần 1 | Lần 2 |
|---|---:|---:|
| Gemini | 104 PASS / 0 FAIL | 104 PASS / 0 FAIL |
| OpenRouter | 104 PASS / 0 FAIL | 104 PASS / 0 FAIL |

Runner tạm https://boba.page/vQ2eXtvc-Gk-dalQyWXMdg/index.html (hết hạn 13/11/2026) nạp file test trong repo, điều chỉnh trong bộ nhớ để đặt nhà mặc định trước mỗi phép; một số phép cũ chuyên Gemini vẫn đặt Gemini, các phép chuyên OpenRouter/Gemini tự chọn nhà của chúng, các phép chung chạy theo nhà mặc định. Không tuyên bố mọi phép đều gửi request qua cả hai nhà: các phép prompt/lưu là dùng chung, phân loại được stub, kiểm nội tâm có gọi mạng giả cho từng nhà. Dữ liệu thử đã được dọn. Lần thử ban đầu với OpenRouter được 103 PASS / 1 FAIL cả hai lượt vì test quá hạn chưa có key giả OpenRouter; cấp key giả và danh sách model giả trong runner rồi chạy lại thành kết quả ở bảng, không dùng key thật.

Còn rà tính chắc chắn lần gặp đầu ở nhánh 0: bộ chọn cảnh trước mốc 5 chưa có rào cứng ngăn chọn Hàn Lập; không khẳng định AI luôn tuân cốt truyện. Chưa kiểm Safari iPhone thật. Các đoạn ghi cũ về hồi quy chưa chạy đủ được giữ làm lịch sử, không phải kết quả hiện tại.

---

## 06/11/2026 — BÀN GIAO NỘI TÂM, NHÁNH RIÊNG VÀ LƯU/NẠP

- Đã commit trực tiếp main: nội tâm trong JSON, prompt theo thiện cảm và lịch sử; khối nghiêng thụt lề riêng; nhánh 0 có 11 mốc, tuyến ẩn, phân loại khởi thân 0/1 thử lại một lần, mặc định 1 khi lỗi hoặc save cũ, ép gặp Hàn Lập ở 5 và 9; bổ sung bối cảnh đại chiến; xuất/nạp JSON thay Công Pháp; đổi Lê Phi Vũ thành Lệ Phi Vũ và chuyển khóa thiện cảm cũ âm thầm. Không làm chương 2, không sửa nén lịch sử, không chạm mẫu giao diện hay ảnh Art.
- Nạp JSON sai hoặc đang dệt chuyện không ghi đè; có xác nhận cổ trang trước khi ghi, tải lại giao diện. Chết vẫn xóa save; file cũ vẫn được phép nạp. Chưa kiểm thực tế trên Safari iPhone.
- Đã mở rộng test/bo-hoi-quy.js, không tham chiếu từ index. Bản mã bb70e83: bộ hỗn hợp chạy bốn lần liên tiếp mỗi lần 104 PASS / 0 FAIL trong môi trường cách ly, có kiểm tra riêng cả Gemini và OpenRouter bằng mạng/khóa giả. Đây là bốn lượt bộ hỗn hợp, KHÔNG chứng minh đủ bộ chạy độc lập hai lần cho từng nhà: còn phải hoàn tất yêu cầu này. Phân loại được test bằng stub lời gọi; luồng nội tâm từng nhà có kiểm thử mạng giả. Không chạy test trên LIVE hoặc truy cập key/save thật; chỉ chạy trong sandbox. Chỉ dẫn lịch sử bên dưới về chạy test trên LIVE đã lỗi thời, KHÔNG làm theo.
- Đối chiếu lúc 20:45 ngày 06/11/2026 (Asia/Saigon): 9 file chính LIVE trùng SHA-256 với commit bb70e83. Bảng hash chi tiết ghi trong NHAP-CONG-VIEC.md; hãy đối chiếu lại sau commit cuối.
- Lỗi gặp: hộp xác nhận có selector test cũ không đúng, đã sửa test; nạp save trong lúc truyện đang chạy có thể bị ghi đè bởi lượt cũ, đã thêm chặn và test. Mỗi lần sửa qua editor đã tính SHA-256 và đối chiếu raw sau commit, tránh lỗi lệch/lặp.
- Việc còn: chạy đúng đủ bộ riêng Gemini hai lần và OpenRouter hai lần với dữ liệu/mạng giả; rà ràng buộc lần gặp đầu mốc 5 (hiện prompt ghi lần đầu nhưng bộ chọn cảnh trước đó chưa có rào cứng); xem lại các điều kiện khác và kiểm tra iPhone thực tế nếu có thiết bị. AI thật có thể không tuyệt đối tuân prompt; không gọi AI thật trong nhiệm vụ. Khi tiếp tục phải bảo toàn tất cả ràng buộc ban đầu.

---

## 05/11/2026 — BÀN GIAO: MỘT KIẾP CHƯA DỨT

- Đã bổ sung hộp thoại tại triện cửa vào khi có save hợp lệ. Người chơi có thể tiếp tục kiếp cũ qua luồng đọc và dựng truyện hiện có, hoặc chọn bắt đầu kiếp mới để vào Khởi thân. Khi không có save, cửa vào giữ hiệu ứng mực và vào Khởi thân như trước.
- Lựa chọn kiếp mới không xóa hay ghi đè save cũ ngay. Save cũ chỉ được thay khi việc tạo nhân vật mới thành công; nút Tiếp tục sẵn có vẫn dùng luồng cũ.
- Đã thử các luồng trên bản xem trước cách ly với save thử, không gọi Gemini thật: không save, có save và nội dung hộp thoại, tiếp tục, chọn kiếp mới mà save cũ còn, tạo nhân vật và thay save, khung giả lập 414×896, đóng/mở hộp thoại và nút Tiếp tục cũ.
- Chưa kiểm trên iPhone thật; chủ repo cần tự kiểm trên máy. Các kiểm tra LIVE và bộ hồi quy sau commit phải thực hiện sau khi được duyệt và Pages dựng xong.

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

## 05/11/2026 — BÀN GIAO: NÚT ĐÓNG CHE TÊN MỤC LỤC

- Nguyên nhân: nút Mục lục/Đóng được đặt cố định ở góc trên, z-index cao và nằm đè lên vùng đầu bảng Mục lục; vùng tiêu đề chưa dành khoảng trống cho nút trên khung hẹp.
- Đã sửa: bổ sung padding phía trên cho giấy của thanh Mục lục khi mở, tính cả safe-area; giữ nguyên kiểu sách cũ, các mục và hành vi đóng/mở; không sửa JavaScript. Ghi lịch sử thay đổi trong CSS.
- Kiểm thử trước commit trên bản xem trước cách ly, không dùng khóa hay gọi Gemini thật: khung 414×896 hiển thị tiêu đề và nút không chồng nhau, không tràn ngang; Mục lục có 15 mục, Xuất nhật ký đứng thứ 5; luồng bìa, Khởi thân, truyện, Cài Đặt và đóng/mở đã được kiểm; bộ ghi nhận lỗi JavaScript không ghi nhận lỗi. Kiểm thêm khung 1024×896, tiêu đề và nút không chồng nhau.
- Cần kiểm sau phát hành: đối chiếu LIVE và chạy bộ hồi quy 45 phép trên kho thử cách ly, khôi phục và đối chiếu dữ liệu gốc.
- Chưa kiểm trên iPhone thật; chủ repo sẽ tự kiểm trên iPhone 11.


## 05/11/2026 — BÀN GIAO: RÈN HỆ THỐNG VÀ CHUYỂN MÀN

- Trạng thái khi lập báo cáo: đã kiểm trên bản thử cách ly; chờ duyệt, commit và kiểm tra LIVE. Không dùng khóa Gemini thật hay dữ liệu chơi thật.
- (a) Đã có nén sau 12 mục, giữ sáu mục gần và sổ nguyên văn. Bản thử giữ lịch sử khi ghi sổ thất bại và gửi toàn bộ lịch sử còn trong save khi tắt thu gọn; dữ liệu từng được nén trước đó không thể tự khôi phục từ save.
- (b) Đã có ba lượt thử 503 và bốn model. Bản thử mở rộng retry cho 429, 5xx và lỗi mạng, chờ 2 giây rồi 5 giây, chuyển model dự phòng, giới hạn thời gian các bước nhận và đọc phản hồi; lỗi mạng khi đọc thân phản hồi cũng thử lại, JSON sai vẫn báo đúng; giữ thông báo Đang dệt chuyện.
- (c) Bộ đếm nhắc 30 lượt/3 ngày và đặt lại sau xuất đã có, không làm lại. Nhắc thử không hiển thị tại 29 lượt, có tại 30 lượt hoặc 3 ngày và ẩn khi đọc sổ lỗi; đã tải bản nhật ký thử, xác nhận nguyên văn và mốc đặt lại 0 sau xuất; font lời nhắc được đưa về bộ font chuẩn.
- (d) Đã có thông báo tiếng Việt; bản thử khóa nút khi đang kiểm và giới hạn tổng 60 giây cho phép kiểm kết nối.
- Bản thử bổ sung chuyển mực khi vào truyện, mở/đóng Mục lục, vào/ra Cài Đặt và vào/ra màn chết; mực không nhận sự kiện trỏ. Giữ sáu biến màu yêu cầu, thống nhất font màn chết với font sách.
- Hồi quy trong sandbox với chốt origin chỉ thay trong bộ nhớ: 45 phép gốc và 9 phép mới đều PASS (54 PASS / 0 FAIL); Gemini và khóa đều giả lập, kho thử riêng. Nút kiểm kết nối được khóa khi chờ và mở lại sau thành công giả. Đã mở bìa, Khởi thân, truyện, Mục lục 15 mục với Xuất nhật ký ở vị trí 5, Cài Đặt, màn chết; đã xem một số trạng thái ở 414×896 và 1024×896.
- Ở 414×896 đã xác nhận màn chết phủ đúng khung, font chuẩn, trở về bìa và bấm nhanh hai lần Mục lục đều xử lý; các lỗi console được ghi nhận trong các thao tác thử là 0. Còn phải đối chiếu SHA-256 sau từng lần lưu, duyệt trước commit, xác minh Pages/hash và hồi quy trên LIVE sau commit. Chưa kiểm trên iPhone 11 thật.

## 06/11/2026 — BÀN GIAO: KEY, MODEL VÀ KHỞI THÂN

- Tô riêng lượt vai user: chữ #B23A2A, lề trái 14px, vạch trái 2px, không nghiêng; văn AI không bị gắn lớp.
- Cài đặt hỗ trợ nhiều key Gemini có tên, che đuôi, thêm/xóa/đổi tên/thứ tự; nâng key đơn cũ, thử key tiếp theo khi hết lượt trước khi đổi model. Chọn thủ công Gemini hoặc OpenRouter; bộ chuyển đổi chat/completions trong js/openrouter.js, đăng ký trong index.html, nhật ký che key cả hai nhà. Giữ retry, timeout, thông báo đang dệt chuyện và lỗi tiếng Việt.
- Prompt giữ JSON nhân vật, thêm khối khởi thân nguyên văn, yêu cầu bám bối cảnh và giữ bí mật, dệt lý do có mặt tại khảo thí; nút 1 vẫn bắt buộc. Không chủ ý thay 11 nút, ba mức hay logic nén lịch sử vốn có.
- Danh sách model được tra, lọc, cache; Gemini API không có giá nên chỉ ưu tiên Flash đã biết trong danh sách dự phòng cũ và được danh sách tra xác nhận; không có Flash hoặc lỗi mạng thì dùng dự phòng. Quyền miễn phí tùy dự án. OpenRouter lọc prompt và completion bằng 0, không coi rỗng/null là 0; hai giá 0 không chứng minh không có phí khác. Nguồn: https://openrouter.ai/api/v1/models. Mô phỏng 404 chuyển model và báo tiếng Việt.
- Kiểm thử trong khung cách ly, mạng và key giả: 68 PASS / 0 FAIL hai lần liên tiếp cho từng nhà; bao gồm 2 phép mới xác minh thông báo đổi model sau 404 trên màn truyện. Phát hiện thiếu thông báo ở màn truyện, đã sửa tại H.story.turn và chạy lại. Kho thử IndexedDB được dọn; không gọi AI thật. Kiểm thử cũ cũng mô phỏng retry 2 rồi 5 giây và đổi key/model. Một bản sao bộ thử chỉ đổi điều kiện origin trong bộ nhớ để chạy iframe; file trong repo giữ chốt LIVE.
- Sau mất phiên VS Code, truyen-ke.js, giao-dien.css, gemini.js được dựng lại và không trùng hash nháp trước. Bản hiện tại đã chạy hồi quy trên, nhưng chưa kiểm máy iPhone thật và chưa xác nhận LIVE. Ảnh/font thật hoặc thao tác bị khung chặn cần kiểm bổ sung.
- Chưa tạo được preview tự chứa: công cụ từng từ chối giữ HTML và trang xuất bản không nhận nội dung từ phiên. Chủ repo quyết định bỏ điều kiện preview; không xem là đã hoàn thành.
- Sau phát hành phải đối chiếu hash từng file LIVE với commit và chạy hồi quy trong kho cách ly, không đụng save thật. Chủ repo tự kiểm AI thật bằng key của mình và tự kiểm iPhone 11; tác vụ không dùng key thật. Chương 2 và NPC mới là việc tiếp theo, chưa thực hiện.

