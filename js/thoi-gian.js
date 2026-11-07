/* LỊCH TU HÀNH 07/11/2026: lịch game 30 ngày/tháng, 360 ngày/năm.
 * Đại chiến 1/1 năm 8 là quy ước game, đúng khoảng cách tám năm đã chốt.
 * Module thuần không gọi mạng, không đọc key hay kho lưu thật.
 */
(function(){
'use strict';
const H=window.HongDuc=window.HongDuc||{},NAM=360,THANG=30;
const so=(v,d=0)=>typeof v==='number'&&Number.isFinite(v)&&v>=0?Math.min(3600000,Math.floor(v)):d;
const bangSuKien=Object.freeze([
 Object.freeze({id:'da-lang',nam:8,thang:1,ngay:1,moc:2880,kichHoat:true,ten:'Đại chiến Dã Lang Bang',noi:'Lạc Nhật Phong',boiCanh:'Sau đêm quyết sinh tử với Mặc đại phu, trước khi rời môn, Hàn Lập tham gia đại chiến với Dã Lang Bang tại Tuyệt Đỉnh Lạc Nhật Phong, diệt tu sĩ tán tu Kim Quang Thượng Nhân đứng sau Dã Lang Bang và bang chủ Giả Thiên Long, thu được Thăng Tiên Lệnh, rồi mới rời môn phái. Kể theo vị trí và mức tham gia đã chọn, không dịch chuyển cưỡng ép. Hàn Lập có thể bị đánh bại nhưng không thể bị giết. Ngoài Hàn Lập không ai bất tử.'}),
 Object.freeze({id:'huyet-sat',nam:11,moc:3960,kichHoat:false,duKien:true,ten:'Huyết Sát Thí Luyện',trangThai:'chưa kích hoạt'}),
 Object.freeze({id:'ma-dao',nam:null,moc:null,kichHoat:false,duKien:true,ten:'Ma Đạo Lục Tông xâm lấn Việt Quốc',trangThai:'chưa kích hoạt'})
]);
/* Nguồn khung: Phàm Nhân Tu Tiên (Vong Ngữ), mô tả thọ nguyên khi đột phá.
 * Phàm nhân 100, Luyện Khí chọn 150 trong khoảng 120–200 là cân bằng game.
 * Trúc Cơ khoảng 250, Kim Đan 500, Nguyên Anh 1000; không bảo đảm sống tới trần.
 */
const thoMenh=Object.freeze({'Phàm nhân':100,'Luyện Khí':150,'Trúc Cơ':250,'Kim Đan':500,'Nguyên Anh':1000});
/* Ngày đường là số thiết kế, không giả là khoảng cách nguyên tác.
 * Tọa độ trừu tượng dùng khoảng cách Manhattan; thêm địa danh tại đây.
 */
const diaDanh=Object.freeze({'Thất Huyền Môn':[0,0],'Thái Hà Sơn':[0,0],'Lạc Nhật Phong':[0,0],'Thanh Ngưu Trấn':[2,0],'Gia Nguyên Thành':[10,0],'Kính Châu':[6,0],'Lam Châu':[12,3],'Thanh Vân Tông':[15,5],'Hoàng Phong Cốc':[20,5],'Yểm Nguyệt Tông':[24,8],'Linh Thú Sơn':[18,12],'Thanh Hư Môn':[16,8],'Thiên Khuyết Bảo':[22,2],'Hóa Đao Ổ':[25,5],'Cự Kiếm Môn':[20,15]});
const ten=t=>String(t||'').normalize('NFC').trim().toLocaleLowerCase('vi');
function diem(t){return Object.entries(diaDanh).find(([n])=>ten(n)===ten(t))?.[1]}
function ngayDuong(tu,den){const a=diem(tu),b=diem(den);return a&&b?Math.abs(a[0]-b[0])+Math.abs(a[1]-b[1]):null}
function tuoiGoc(s){const n=Number(s.nhanvat?.tuoi);if(Number.isFinite(n)&&n>0&&n<2000)return Math.floor(n);const m=String(s.nhanvat?.xuatthan||'').match(/(?:^|\D)(\d{1,3})\s*tuổi(?:\s|[.,;]|$)/u);return m&&Number(m[1])>0?Number(m[1]):16}
function doc(s){
 if(!s||typeof s!=='object')throw Error('Thiếu bản lưu');
 let t=s.thoi_gian;if(!t||typeof t!=='object'||Array.isArray(t))t=s.thoi_gian={};
 /* Giữ định danh đối tượng để truy vấn không làm mất kết quả cộng. */
 t.phien_ban=1;t.tong_ngay=so(t.tong_ngay);t.tuoi_goc=so(t.tuoi_goc,tuoiGoc(s));
 t.su_kien=Array.isArray(t.su_kien)?t.su_kien.filter(x=>bangSuKien.some(e=>e.id===x&&e.kichHoat&&e.moc<=t.tong_ngay)):[];
 t.vi_tri=typeof t.vi_tri==='string'?t.vi_tri:'';return t;
}
function lich(s){const d=doc(s).tong_ngay;return {nam:Math.floor(d/NAM),thang:Math.floor(d%NAM/THANG)+1,ngay:d%THANG+1}}
function tuoi(s){const t=doc(s);return t.tuoi_goc+Math.floor(t.tong_ngay/NAM)}
function gioiHan(s){return Object.entries(thoMenh).find(([n])=>ten(s.nhanvat?.canhgioi).includes(ten(n)))?.[1]||100}
function conLaiNgay(s){const t=doc(s);return Math.max(0,(gioiHan(s)-t.tuoi_goc)*NAM-t.tong_ngay)}
function suKienKe(s){const t=doc(s);return bangSuKien.find(e=>e.kichHoat&&!t.su_kien.includes(e.id))||null}
function trangThai(s,e){const t=doc(s);return !e.kichHoat?'chưa kích hoạt':t.su_kien.includes(e.id)?'đã kích hoạt':t.tong_ngay>=e.moc?'đến ngày':'chưa đến ngày'}
function deXuat(raw,hanhDong='',diChuyen){
 let d=raw&&typeof raw==='object'&&!Array.isArray(raw)?so(raw.nam)*NAM+so(raw.thang)*THANG+so(raw.ngay):1;
 /* Chỉ hành động người chơi cho phép bế quan; AI không tự cấp quyền. */
 d=Math.max(1,Math.min(/bế\s*quan/iu.test(String(hanhDong))?3*NAM:THANG,d));
 if(diChuyen&&typeof diChuyen==='object'){const n=ngayDuong(diChuyen.tu,diChuyen.den);if(n!==null)d=Math.max(1,Math.min(THANG,n))}
 return d;
}
function cong(s,raw,hanhDong='',diChuyen){
 const t=doc(s),cu=t.tong_ngay,ke=suKienKe(s);let d=deXuat(raw,hanhDong,diChuyen);
 if(ke)d=Math.min(d,Math.max(0,ke.moc-cu));
 d=Math.min(d,conLaiNgay(s));t.tong_ngay+=d;const kichHoat=[];
 for(const e of bangSuKien)if(e.kichHoat&&e.moc<=t.tong_ngay&&!t.su_kien.includes(e.id)){t.su_kien.push(e.id);kichHoat.push(e.id)}
 if(diChuyen&&ngayDuong(diChuyen.tu,diChuyen.den)!==null&&d>=ngayDuong(diChuyen.tu,diChuyen.den))t.vi_tri=diChuyen.den;
 return {ngay:d,kichHoat,hetTho:conLaiNgay(s)<=0,lich:lich(s)};
}
function boiCanh(s){const t=doc(s),l=lich(s),ke=suKienKe(s),gan=bangSuKien.find(e=>e.kichHoat&&t.su_kien.includes(e.id));return [
 'LỊCH ĐÃ CHỐT: năm '+l.nam+', tháng '+l.thang+', ngày '+l.ngay+'. Tuổi '+tuoi(s)+'; thọ mạng còn '+(conLaiNgay(s)/NAM).toFixed(2)+' năm (trần '+gioiHan(s)+').',
 'Chỉ kể sự kiện đã đến ngày, không nhảy tương lai. Đại chiến không diễn ra trước 1/1 năm 8. Khảo thí là 1/1 năm 0, ngoài màn với nhánh 0.',
 ke?'Kế tiếp: '+ke.ten+' — 1/1 năm 8; còn '+Math.max(0,ke.moc-t.tong_ngay)+' ngày.':'Không có sự kiện mới được mở trong Chương 1.',
 gan?'Gần nhất: '+gan.ten+' — đã kích hoạt. '+gan.boiCanh:'Chưa kích hoạt sự kiện thế giới.',
 'Huyết Sát Thí Luyện khoảng năm 11 và Ma Đạo Lục Tông chỉ dự kiến, chưa kích hoạt; không mở Chương 2.',
 'Thêm tùy chọn thoi_gian_troi:{nam:0,thang:0,ngay:3}; thiếu dùng 1 ngày. Thường tối đa 30 ngày; bế quan người chơi chọn tối đa 3 năm. Có thể thêm di_chuyen:{tu:"địa danh",den:"địa danh"}; đối chiếu bảng ngày đường. Không kể vượt ngày sự kiện.',
 'Viết tiếng Việt chuẩn chính tả, rà từ ngữ và dấu thanh; cổ trang xưng ngươi, không meta, không tự nhận AI.'
 ].join('\n')}
H.thoiGian={NAM,THANG,bangSuKien,thoMenh,diaDanh,doc,lich,tuoi,gioiHan,conLaiNgay,suKienKe,trangThai,ngayDuong,deXuat,cong,boiCanh};
})();
/* TÍCH HỢP: chỉ thao tác bản sao lượt; không đọc kho hay gọi AI. */
(function(){
'use strict';
const H=window.HongDuc,T=H.thoiGian;
T.giaiDoan=function(s){const d=T.doc(s).tong_ngay;return d===0?1:d<90?2:d<360?3:d<720?4:d<1080?5:d<1440?6:d<1800?7:d<2520?8:d<2880?9:d===2880?10:11};
T.chuanHoa=function(s){const t=T.doc(s);if(!t.vi_tri){const origin=String(s.nhanvat?.xuatthan||'');t.vi_tri=Object.keys(T.diaDanh).sort((a,b)=>b.length-a.length).find(n=>origin.includes(n))||''}if(s.nhanh===0){s.nut_hien_tai=T.giaiDoan(s);if(s.nut_hien_tai<11)s.chuong_1_hoan_thanh=false}return s};
/* Từ chối điểm đi AI tự bịa. Hành trình dài lưu số ngày còn lại;
 * vị trí chỉ đổi sau khi đi đủ, kể cả khi bị sự kiện cắt giữa đường. */
T.lapKeHoach=function(s,raw,action='',move,opening=false){
 T.chuanHoa(s);const t=T.doc(s),before=t.tong_ngay;
 if(opening)return {ngay:0,kichHoat:[],hetTho:T.conLaiNgay(s)<=0,lich:T.lich(s)};
 let route=t.hanh_trinh;
 if(!route||typeof route.tu!=='string'||route.tu!==t.vi_tri||!Number.isInteger(route.con_lai)||route.con_lai<=0||route.con_lai>T.ngayDuong(route.tu,route.den))route=null;
 if(!route&&move&&move.tu===t.vi_tri&&typeof move.den==='string'){
  const days=T.ngayDuong(t.vi_tri,move.den);
  if(days!==null&&days>0)route={tu:t.vi_tri,den:move.den,con_lai:days};
 }
 let elapsed=route?Math.min(30,route.con_lai):T.deXuat(raw,action);
 const result=T.cong(s,{ngay:elapsed},route?'đi đường':action);
 if(route){route={...route,con_lai:route.con_lai-result.ngay};if(route.con_lai<=0){t.vi_tri=route.den;delete t.hanh_trinh}else t.hanh_trinh=route}else delete t.hanh_trinh;
 t.luot_lich=(Number.isSafeInteger(t.luot_lich)?t.luot_lich:0)+1;
 T.chuanHoa(s);return {...result,tu_ngay:before};
};
T.hoSo=function(s){T.chuanHoa(s);const l=T.lich(s),left=T.conLaiNgay(s);return {text:'Năm '+l.nam+' · Tháng '+l.thang+' · Ngày '+l.ngay+' — Tuổi '+T.tuoi(s)+' — Thọ mạng còn '+(left/360).toFixed(2)+' năm',canhBao:left<=10*360}};
})();
