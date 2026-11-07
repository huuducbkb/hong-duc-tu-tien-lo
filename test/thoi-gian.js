/* Kiểm thử lõi lịch độc lập, không thay thế hồi quy tích hợp hai backend.
 * Chỉ chạy ở origin cách ly, không kho/key/save/mạng AI thật.
 * Cần nạp js/thoi-gian.js trước; gọi HongDuc.testThoiGian().
 */
(function(){
'use strict';
const H=window.HongDuc=window.HongDuc||{};
H.testThoiGian=function(){
 if(!window.__HONGDUC_TEST_ISOLATED__||location.origin==='https://huuducbkb.github.io')throw Error('Cấm chạy tại LIVE');
 const T=H.thoiGian,r=[];
 const ok=(v)=>{if(!v)throw Error('Sai điều kiện')};
 const moi=()=>({nhanvat:{ten:'Nhân vật giả',canhgioi:'Phàm nhân',xuatthan:'Tán tu 16 tuổi'},lichsu:[],chuong:1});
 const test=(name,f)=>{try{f();r.push({name,status:'PASS'})}catch(e){r.push({name,status:'FAIL',reason:e.message})}};
 test('Save cũ khởi tạo năm 0 tháng 1 ngày 1',()=>{const s=moi(),l=T.lich(s);ok(l.nam===0&&l.thang===1&&l.ngay===1&&s.lichsu.length===0)});
 test('Tuổi theo xuất thân',()=>{const s=moi();s.nhanvat.xuatthan='Đệ tử 21 tuổi';ok(T.tuoi(s)===21)});
 test('Không biết tuổi dùng 16',()=>{const s=moi();s.nhanvat.xuatthan='Tán tu';ok(T.tuoi(s)===16)});
 test('Giữ định danh trạng thái qua các truy vấn',()=>{const s=moi(),t=T.doc(s);T.lich(s);T.conLaiNgay(s);ok(T.doc(s)===t)});
 test('Qua tháng',()=>{const s=moi();T.doc(s).tong_ngay=29;T.cong(s,{ngay:1});ok(T.lich(s).thang===2&&T.lich(s).ngay===1)});
 test('Qua năm và tăng tuổi',()=>{const s=moi();T.doc(s).tong_ngay=359;T.cong(s,{ngay:1});ok(T.lich(s).nam===1&&T.lich(s).thang===1&&T.tuoi(s)===17)});
 test('Thiếu trường AI mặc định một ngày',()=>{const s=moi();ok(T.cong(s,undefined).ngay===1&&s.thoi_gian.tong_ngay===1)});
 test('Hành động thường tối đa một tháng',()=>{ok(T.deXuat({nam:9},'hái thuốc')===30)});
 test('Bế quan tối đa ba năm',()=>{ok(T.deXuat({nam:9},'Ta bế quan tu luyện')===1080)});
 test('Trường hỏng không làm lịch lùi',()=>{ok(T.deXuat({nam:-99,thang:NaN,ngay:Infinity})===1)});
 test('Kẹp vượt sự kiện tại đúng ngày năm 8',()=>{const s=moi();T.doc(s).tong_ngay=2878;const a=T.cong(s,{nam:3},'bế quan');ok(a.ngay===2&&T.lich(s).nam===8&&a.kichHoat[0]==='da-lang')});
 test('Chưa đến ngày không kích hoạt',()=>{const s=moi();T.doc(s).tong_ngay=2878;ok(T.cong(s,{ngay:1}).kichHoat.length===0)});
 test('Đúng ngày chỉ kích hoạt một lần',()=>{const s=moi();T.doc(s).tong_ngay=2879;ok(T.cong(s,{ngay:1}).kichHoat.length===1);ok(T.cong(s,{ngay:1}).kichHoat.length===0)});
 test('Save đúng ngày chưa có cờ vẫn kích hoạt',()=>{const s=moi();T.doc(s).tong_ngay=2880;const a=T.cong(s,{ngay:9});ok(a.ngay===0&&a.kichHoat.length===1)});
 test('Cờ sự kiện tương lai không hợp lệ',()=>{const s=moi();s.thoi_gian={tong_ngay:0,su_kien:['da-lang']};ok(T.doc(s).su_kien.length===0)});
 test('C2 C3 chỉ dự kiến không kích hoạt',()=>{const s=moi();T.doc(s).tong_ngay=5000;T.doc(s).su_kien=['da-lang'];ok(T.suKienKe(s)===null&&T.cong(s,{ngay:1}).kichHoat.length===0&&T.bangSuKien.filter(e=>!e.kichHoat).length===2)});
 test('Thọ mạng theo năm cảnh giới',()=>{for(const [c,n] of Object.entries(T.thoMenh)){const s=moi();s.nhanvat.canhgioi=c+' sơ kỳ';ok(T.gioiHan(s)===n)}});
 test('Cạn thọ mạng trả cờ chết đúng ngưỡng',()=>{const s=moi();T.doc(s).tong_ngay=84*360-1;T.doc(s).su_kien=['da-lang'];const a=T.cong(s,{ngay:30});ok(a.ngay===1&&a.hetTho&&T.conLaiNgay(s)===0)});
 test('Chưa cạn không tự kết luận chết',()=>{const s=moi();ok(!T.cong(s,{ngay:1}).hetTho)});
 test('Ngày đường đối xứng và tên đồng nghĩa',()=>{ok(T.ngayDuong('Thất Huyền Môn','Thanh Vân Tông')===20&&T.ngayDuong('Thanh Vân Tông','Thái Hà Sơn')===20)});
 test('Kẹp di chuyển theo bảng dù AI đề xuất sai',()=>{const s=moi();const a=T.cong(s,{nam:3},'đi đường',{tu:'Thất Huyền Môn',den:'Thanh Vân Tông'});ok(a.ngay===20&&T.doc(s).vi_tri==='Thanh Vân Tông')});
 test('Đi đường không vượt sự kiện, chưa tới đích',()=>{const s=moi();T.doc(s).tong_ngay=2879;const a=T.cong(s,{ngay:20},'đi đường',{tu:'Thất Huyền Môn',den:'Thanh Vân Tông'});ok(a.ngay===1&&T.doc(s).vi_tri==='')});
 test('Không bịa số ngày địa danh chưa biết',()=>{ok(T.ngayDuong('Đất lạ','Thanh Vân Tông')===null)});
 test('Lưu JSON và nạp lại không mất thời gian',()=>{const s=moi();T.cong(s,{ngay:7});const x=JSON.parse(JSON.stringify(s));ok(T.doc(x).tong_ngay===7&&T.tuoi(x)===16)});
 test('Prompt không tiết lộ bối cảnh đại chiến trước ngày',()=>{const s=moi(),p=T.boiCanh(s);ok(p.includes('Tuổi 16')&&!p.includes('diệt tu sĩ tán tu Kim Quang'))});
 test('Prompt có bối cảnh đã duyệt sau kích hoạt',()=>{const s=moi();T.doc(s).tong_ngay=2879;T.cong(s,{ngay:1});ok(T.boiCanh(s).includes('diệt tu sĩ tán tu Kim Quang'))});
 return {scope:'lõi lịch; CHƯA kiểm thử tích hợp H.storage.die hay hai backend',pass:r.filter(x=>x.status==='PASS').length,fail:r.filter(x=>x.status==='FAIL').length,results:r};
};
})();
