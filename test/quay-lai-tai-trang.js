/* Kiểm tra vòng đời RAM qua hai document thật; chỉ dữ liệu giả trong runner. */
(function(){'use strict';const H=window.HongDuc;
H.testTaiTrangQuayLai=async function(){
if(!window.__HONGDUC_TEST_ISOLATED__||location.hostname==='huuducbkb.github.io')throw Error('Cấm test trên LIVE');
const results=[],frame=document.createElement('iframe');frame.width=414;frame.height=896;
try{
const source=Array.from(document.scripts).find(x=>x.textContent.includes('(function QuayLai(){'))?.textContent;if(!source)throw Error('Thiếu nguồn module thật');
const tag=s=>'<script>'+s.replace(/<\/script/gi,'<\\/script')+'</'+'script>';
const seed={nhanvat:{ten:'Nhân vật thử tải trang'},lichsu:[],thoi_gian:{tong_ngay:10}};
function page(saved){return '<!doctype html><meta charset="utf-8"><div id="choices"></div><div id="story-feedback"></div>'+tag('window.HongDuc={state:'+JSON.stringify(saved)+',story:{turn:async function(){const H=window.HongDuc;H.state=JSON.parse(JSON.stringify(H.state));H.state.thoi_gian.tong_ngay++;H.storage.save(H.state)},render(){},isBusy(){return false}},storage:{save(s){window.disk=JSON.stringify(s);return true},die(){window.disk=null}},log:{read(){return []}},so:{dbName:"",open(){return parent.HongDuc.so.open()}},thoiGian:{}};window.disk='+JSON.stringify(JSON.stringify(saved))+';HongDuc.so.dbName=parent.HongDuc.so.dbName;')+tag(source)}
async function load(saved){await new Promise((resolve,reject)=>{const t=setTimeout(()=>reject(Error('Tải document thử quá hạn')),10000);frame.onload=()=>{clearTimeout(t);resolve()};frame.srcdoc=page(saved);if(!frame.isConnected)document.body.append(frame)})}
await load(seed);const first=frame.contentWindow;await first.HongDuc.story.turn('Thử',false);if(first.HongDuc.undo.count()!==1)throw Error('Chưa tạo được stack trước tải lại');const disk=JSON.parse(first.disk);await load(disk);const next=frame.contentWindow;
if(next.HongDuc.undo.count()!==0||!next.document.getElementById('quay-lai').hidden||JSON.stringify(next.HongDuc.state)!==JSON.stringify(disk)||await next.HongDuc.undo.back())throw Error('Stack còn sau thay document hoặc save bị mất');
results.push({name:'Tải lại document giữ save giả nhưng mất toàn bộ stack RAM',status:'PASS'});
}catch(e){results.push({name:'Tải lại document giữ save giả nhưng mất toàn bộ stack RAM',status:'FAIL',reason:String(e.message||e)})}finally{frame.remove()}
return {pass:results.filter(x=>x.status==='PASS').length,fail:results.filter(x=>x.status==='FAIL').length,results};
};})();
