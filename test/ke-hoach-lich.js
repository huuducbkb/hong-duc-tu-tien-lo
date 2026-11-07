/* Chỉ kiểm helper lịch trên origin riêng; CHƯA phải test tích hợp game. */
(function(){
'use strict';
const H=window.HongDuc;
H.testKeHoachLich=function(){
 if(!window.__HONGDUC_TEST_ISOLATED__||location.hostname==='huuducbkb.github.io')throw Error('Cấm test trên LIVE');
 const T=H.thoiGian,results=[];
 const ok=v=>{if(!v)throw Error('Sai điều kiện')};
 const fresh=()=>({nhanh:0,nut_hien_tai:9,chuong_1_hoan_thanh:true,nhanvat:{ten:'Giả',xuatthan:'Tán tu 16 tuổi tại Thất Huyền Môn',canhgioi:'Phàm nhân'},chuong:1,lichsu:[]});
 const test=(name,f)=>{try{f();results.push({name,status:'PASS'})}catch(e){results.push({name,status:'FAIL',reason:e.message})}};
 test('Save cũ mốc cao trở về giai đoạn ngày đầu',()=>{let s=fresh();T.chuanHoa(s);ok(s.nut_hien_tai===1&&!s.chuong_1_hoan_thanh&&T.lich(s).nam===0)});
 test('Không sửa nút nhánh 1',()=>{let s=fresh();s.nhanh=1;T.chuanHoa(s);ok(s.nut_hien_tai===9&&s.chuong_1_hoan_thanh)});
 test('Đủ 11 ranh giới giai đoạn',()=>{let s=fresh();for(const [d,n] of [[0,1],[1,2],[89,2],[90,3],[359,3],[360,4],[720,5],[1080,6],[1440,7],[1800,8],[2519,8],[2520,9],[2879,9],[2880,10],[2881,11]]){T.doc(s).tong_ngay=d;ok(T.giaiDoan(s)===n)}});
 test('Mở màn không tăng ngày',()=>{let s=fresh();ok(T.lapKeHoach(s,{nam:9},'bế quan',null,true).ngay===0&&T.doc(s).tong_ngay===0)});
 test('Thiếu đề xuất mặc định một ngày',()=>{let s=fresh();ok(T.lapKeHoach(s).ngay===1&&s.nut_hien_tai===2)});
 test('Thường kẹp 30 ngày',()=>{ok(T.lapKeHoach(fresh(),{nam:99},'hái thuốc').ngay===30)});
 test('Bế quan kẹp 1080 ngày',()=>{ok(T.lapKeHoach(fresh(),{nam:99},'bế quan').ngay===1080)});
 test('Vị trí xuất thân được nhận diện',()=>{let s=fresh();T.chuanHoa(s);ok(T.doc(s).vi_tri==='Thất Huyền Môn')});
 test('Không bịa vị trí xuất thân chưa biết',()=>{let s=fresh();s.nhanvat.xuatthan='Đất lạ';T.chuanHoa(s);ok(T.doc(s).vi_tri==='')});
 test('Từ chối điểm đi AI bịa',()=>{let s=fresh();let r=T.lapKeHoach(s,undefined,'đi đường',{tu:'Thanh Vân Tông',den:'Cự Kiếm Môn'});ok(r.ngay===1&&T.doc(s).vi_tri==='Thất Huyền Môn'&&!s.thoi_gian.hanh_trinh)});
 test('Đi 35 ngày chia 30 và 5',()=>{let s=fresh();let r=T.lapKeHoach(s,{nam:9},'đi đường',{tu:'Thất Huyền Môn',den:'Cự Kiếm Môn'});ok(r.ngay===30&&s.thoi_gian.hanh_trinh.con_lai===5&&s.thoi_gian.vi_tri==='Thất Huyền Môn');r=T.lapKeHoach(s);ok(r.ngay===5&&s.thoi_gian.tong_ngay===35&&s.thoi_gian.vi_tri==='Cự Kiếm Môn'&&!s.thoi_gian.hanh_trinh)});
 test('Hành trình dừng sự kiện và giữ phần còn lại',()=>{let s=fresh();T.doc(s).tong_ngay=2879;let r=T.lapKeHoach(s,undefined,'đi đường',{tu:'Thất Huyền Môn',den:'Thanh Vân Tông'});ok(r.ngay===1&&r.kichHoat[0]==='da-lang'&&s.thoi_gian.hanh_trinh.con_lai===19&&s.nut_hien_tai===10);r=T.lapKeHoach(s);ok(r.ngay===19&&r.kichHoat.length===0&&s.thoi_gian.vi_tri==='Thanh Vân Tông')});
 test('Cạn thọ chỉ trả cờ, chưa gọi storage.die',()=>{let s=fresh();T.doc(s).tong_ngay=84*360-1;T.doc(s).su_kien=['da-lang'];let r=T.lapKeHoach(s,{ngay:30});ok(r.ngay===1&&r.hetTho&&T.conLaiNgay(s)===0)});
 test('Hồ sơ có ngày tuổi và cảnh báo đúng ngưỡng',()=>{let s=fresh();ok(!T.hoSo(s).canhBao&&T.hoSo(s).text.includes('Tuổi 16'));T.doc(s).tong_ngay=74*360;ok(T.hoSo(s).canhBao)});
 test('Hành trình giữ nguyên khi tuần tự lưu JSON',()=>{let s=fresh();T.lapKeHoach(s,undefined,'đi đường',{tu:'Thất Huyền Môn',den:'Cự Kiếm Môn'});s=JSON.parse(JSON.stringify(s));ok(T.lapKeHoach(s).ngay===5&&s.thoi_gian.vi_tri==='Cự Kiếm Môn')});
 return {scope:'helper thuần, chưa tích hợp lượt kể, kho chết và giao diện',pass:results.filter(x=>x.status==='PASS').length,fail:results.filter(x=>x.status==='FAIL').length,results};
};
})();
