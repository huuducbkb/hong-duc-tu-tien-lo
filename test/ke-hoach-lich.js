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
/* Kiểm thử tích hợp lịch: chỉ mạng giả, Storage RAM và IndexedDB namespace thử. */
(function(){'use strict';const H=window.HongDuc;H.testTichHopLich=async function(){
if(!window.__HONGDUC_TEST_ISOLATED__||location.hostname==='huuducbkb.github.io')throw Error('Cấm chạy trên LIVE');
const T=H.thoiGian,r=[],ok=(x,m)=>{if(!x)throw Error(m||'Sai điều kiện')},provider=window.__TEST_PROVIDER__,old={fetch:window.fetch,compact:H.gemini.compact,death:H.screen.death,cover:H.screen.cover,state:H.state,db:H.so.dbName};
const fresh=(d=0,origin='Tán tu tại Thất Huyền Môn')=>({nhanvat:{ten:'Thử lịch',xuatthan:origin,canhgioi:'Phàm nhân'},nhanh:0,chuong:1,lichsu:[{vai:'ai',text:'Lượt giả trước'}],hanhdong:[],tomtat:'',thoi_gian:{tong_ngay:d,tuoi_goc:16,su_kien:d>2880?['da-lang']:[],vi_tri:'Thất Huyền Môn'}});
let opts={},seen=[],deaths=0;const scene=()=>({muc:opts.mode||'ĐI QUA',npc_hien_dien:opts.npc||[],ho_so_moi:{}}),story=()=>({truyen:opts.text||'Ngươi lặng lẽ tu hành.',noi_tam:'Ngươi giữ vững tâm niệm.',hanh_dong:['Một','Hai','Ba'],trang_thai:'song',xuong_song:{hoan_thanh:false},thien_cam:{},npc_hien_dien:opts.npc||[],...(opts.time===undefined?{}:{thoi_gian_troi:opts.time}),...(opts.travel?{di_chuyen:opts.travel}:{})});
function setup(){document.getElementById('provider').value=provider;localStorage.setItem('hongduc-gemini-keys',JSON.stringify([{name:'Thử',key:'FAKE_ONLY'}]));document.getElementById('or-key').value='FAKE_ONLY';H.gemini.liveModels={gemini:H.gemini.models,openrouter:H.openrouter.fallback};document.getElementById('or-model').value=H.openrouter.fallback[0];H.gemini.compact=async()=>{};H.screen.death=async()=>{deaths++};H.screen.cover=()=>{};H.story.choLuu=null;window.fetch=async(u,o)=>{const url=String(u),body=JSON.parse(o.body);ok(provider==='gemini'?url.includes('generativelanguage.googleapis.com'):url.includes('openrouter.ai'),'Chạy nhầm backend');const q=provider==='gemini'?body.contents.map(x=>x.parts.map(p=>p.text||'').join('')).join(''):body.messages.map(x=>x.content).join('');seen.push({url,q});const text=JSON.stringify(q.includes('Chọn cảnh tiếp theo')?scene():story());return new Response(JSON.stringify(provider==='gemini'?{candidates:[{content:{parts:[{text}]}}]}:{choices:[{finish_reason:'stop',message:{content:text}}]}),{status:200})}}
async function test(name,f){opts={};seen=[];deaths=0;setup();try{await f();r.push({name,status:'PASS'})}catch(e){r.push({name,status:'FAIL',reason:String(e.message||e)})}finally{H.story.choLuu=null}}
async function turn(s,action='Tu luyện',opening=false){H.state=H.storage.chuanHoa(s);ok(H.storage.save(H.state),'Không lưu được save thử');await H.story.turn(action,opening);ok(!document.getElementById('story-feedback').textContent||H.state!==s,'Lượt lỗi');return H.state}
try{
await test('Nạp save cũ: ngày đầu, tuổi mặc định 16',()=>{const x=fresh();delete x.thoi_gian;localStorage.setItem(H.storage.key,JSON.stringify(x));const y=H.storage.read();ok(y&&T.doc(y).tong_ngay===0&&T.tuoi(y)===16&&y.nut_hien_tai===1)});
await test('Nạp save cũ lấy tuổi xuất thân',()=>{const x=fresh(0,'Thiếu niên 19 tuổi tại Thanh Ngưu trấn');delete x.thoi_gian;localStorage.setItem(H.storage.key,JSON.stringify(x));ok(T.tuoi(H.storage.read())===19)});
await test('Mở màn nơi xuất thân không tăng ngày và không ép Hàn Lập',async()=>{const s=fresh();s.lichsu=[];await turn(s,'Mở đầu',true);ok(T.doc(H.state).tong_ngay===0&&seen.length===2&&!H.state.npc_hien_dien.includes('Hàn Lập')&&seen[1].q.includes('khảo thí Thất Huyền Môn ngoài màn'))});
await test('AI thiếu trường dùng một ngày, đúng backend',async()=>{await turn(fresh());ok(T.doc(H.state).tong_ngay===1&&seen.length===4&&H.storage.read().thoi_gian.tong_ngay===1)});
await test('Thường kẹp một tháng, lần kể khóa không cộng lại',async()=>{opts.time={nam:99};await turn(fresh());ok(T.doc(H.state).tong_ngay===30&&seen.at(-1).q.includes('THỜI GIAN ĐÃ ÁP DỤNG MỘT LẦN'))});
await test('Bế quan kẹp ba năm',async()=>{opts.time={nam:99};await turn(fresh(),'Bế quan tu luyện');ok(T.doc(H.state).tong_ngay===1080)});
await test('AI không tự biến hành động thường thành bế quan',async()=>{opts.time={nam:3,loai:'be_quan'};await turn(fresh());ok(T.doc(H.state).tong_ngay===30)});
await test('Chưa tới ngày không có bối cảnh đại chiến',async()=>{await turn(fresh(2878));ok(T.doc(H.state).tong_ngay===2879&&!T.doc(H.state).su_kien.includes('da-lang')&&!seen.at(-1).q.includes('diệt tu sĩ tán tu Kim Quang'))});
await test('Dừng đúng ngày đại chiến, bối cảnh trong lời kể cuối',async()=>{opts.time={nam:3};await turn(fresh(2879),'Bế quan');ok(T.doc(H.state).tong_ngay===2880&&T.doc(H.state).su_kien.join()==='da-lang'&&seen.at(-1).q.includes('diệt tu sĩ tán tu Kim Quang')&&H.state.nut_hien_tai===10)});
await test('Không kích hoạt hai lần và C2 C3 vẫn chưa kích hoạt',async()=>{const s=fresh(2880);s.thoi_gian.su_kien=['da-lang'];await turn(s);ok(T.doc(H.state).tong_ngay===2881&&T.doc(H.state).su_kien.length===1&&T.bangSuKien.filter(x=>!x.kichHoat).length===2&&seen.at(-1).q.includes('chưa kích hoạt; không mở Chương 2'))});
await test('Di chuyển dùng bảng ngày thay đề xuất AI',async()=>{opts.time={ngay:1};opts.travel={tu:'Thất Huyền Môn',den:'Thanh Vân Tông'};await turn(fresh(),'Đi tới Thanh Vân Tông');ok(T.doc(H.state).tong_ngay===20&&T.doc(H.state).vi_tri==='Thanh Vân Tông')});
await test('Di chuyển dừng sự kiện, giữ phần đường còn lại',async()=>{opts.travel={tu:'Thất Huyền Môn',den:'Thanh Vân Tông'};await turn(fresh(2879),'Đi tới Thanh Vân Tông');ok(T.doc(H.state).tong_ngay===2880&&T.doc(H.state).vi_tri==='Thất Huyền Môn'&&T.doc(H.state).hanh_trinh.con_lai===19)});
await test('Cạn thọ gọi luồng die và xóa save thử',async()=>{opts.time={ngay:30};await turn(fresh(84*360-1));ok(H.state===null&&H.storage.read()===null&&deaths===1)});
await test('Đã cạn thọ không cần gọi AI',async()=>{await turn(fresh(84*360));ok(H.state===null&&seen.length===0&&deaths===1)});
await test('Thương tích bất tỉnh giả chết không xóa save',async()=>{opts.text='Ngươi trọng thương, bất tỉnh, giả chết nhưng chưa chết.';await turn(fresh());ok(H.state&&H.storage.read()&&deaths===0)});
await test('Lỗi lưu thử lại không gọi AI hoặc cộng ngày lần hai',async()=>{H.state=H.storage.chuanHoa(fresh());H.storage.save(H.state);const save=H.storage.save;try{H.storage.save=()=>false;await H.story.turn('Tu luyện',false);ok(H.story.choLuu&&T.doc(H.state).tong_ngay===0);const n=seen.length;H.storage.save=save;await H.story.turn('Thử lại',false);ok(T.doc(H.state).tong_ngay===1&&seen.length===n&&!H.story.choLuu)}finally{H.storage.save=save}});
await test('Prompt đủ tuổi thọ chính tả, ngươi, không tương lai',async()=>{await turn(fresh());const q=seen.at(-1).q;for(const x of ['Tuổi 16','thọ mạng còn','chuẩn chính tả','xưng ngươi','không tự nhận AI','không kể trước tương lai','Hàn Lập','không giết được','Ngoài Hàn Lập không ai bất tử'])ok(q.includes(x),x)});
await test('Hồ sơ hiển thị lịch và cảnh báo đỏ',()=>{H.state=H.storage.chuanHoa(fresh(80*360));document.getElementById('settings').hidden=true;document.querySelectorAll('#toc-side button')[1].click();const x=document.querySelector('#profile-data .thoi-gian-ho-so');ok(x&&x.textContent.includes('Năm 80')&&x.textContent.includes('Tuổi 96')&&x.classList.contains('canh-bao-tho')&&getComputedStyle(x).color==='rgb(178, 58, 42)')});
}finally{window.fetch=old.fetch;H.gemini.compact=old.compact;H.screen.death=old.death;H.screen.cover=old.cover;H.state=old.state;H.so.dbName=old.db;H.story.choLuu=null}
return {provider,pass:r.filter(x=>x.status==='PASS').length,fail:r.filter(x=>x.status==='FAIL').length,results:r};};})();
