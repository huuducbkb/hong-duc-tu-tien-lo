(function Gemini(){
/* MỤC LỤC MODULE: khóa, model dự phòng, gọi Gemini, thử lại 503, lỗi và nén. */
const H=window.HongDuc=window.HongDuc||{};
const gem=H.gemini={
 keyName:'hongduc-gemini-key',modelName:'hongduc-model',
 /* Các ứng viên do chủ repo chọn; quyền miễn phí cần kiểm tra theo dự án. */
 models:['gemini-3.5-flash-lite','gemini-3.8-flash','gemini-3.6-flash','gemini-3.1-flash-lite'],
 key(){const f=document.getElementById('api');return f?f.value.trim():''},
 error(e){if(e.missing)return 'Chưa nhập khóa Gemini. Hãy vào Cài Đặt để nhập khóa.';if(e.badjson)return 'AI trả lời chưa đúng định dạng. Hãy thử lại.';if(e.status===503)return 'Máy chủ Google đang bận hoặc quá tải, hãy đợi vài phút rồi thử lại.';if(e.status===429)return 'Đã chạm giới hạn sử dụng theo phút hoặc theo ngày. Hãy kiểm tra hạn mức và thử lại sau.';if(e.status===400||e.status===401||e.status===403)return 'Khóa không hợp lệ, thiếu quyền, hoặc yêu cầu chưa hợp lệ. Hãy kiểm tra khóa và quyền truy cập.';if(e.status===404)return 'Chưa tìm thấy model phù hợp cho khóa này. Hãy kiểm tra model và quyền truy cập.';if(e.status)return 'Gemini gặp lỗi '+e.status+'. Hãy thử lại sau.';return 'Không kết nối được. Hãy kiểm tra mạng rồi thử lại.'},
 async call(prompt,json,options={}){
  const key=this.key();if(!key){H.log.write('Lỗi AI','Chưa nhập khóa Gemini');let e=Error();e.missing=true;throw e}
  let saved='';try{saved=localStorage.getItem(this.modelName)||''}catch(_){}
  const names=this.models.includes(saved)?[saved,...this.models.filter(x=>x!==saved)]:this.models.slice();let last;const cutoff=options.deadline||Infinity;function timeout(){let e=Error('timeout');e.timeout=true;return e}function conThoiGian(){if(Date.now()>=cutoff)throw timeout()}async function doi(ms){conThoiGian();await new Promise(r=>setTimeout(r,Math.min(ms,cutoff-Date.now())));conThoiGian()}
  /* Giới hạn cả thời gian nhận headers lẫn đọc thân phản hồi, kể cả khi fetch không chịu hủy. */
  async function deadline(task,controller){conThoiGian();let timer;try{return await Promise.race([task(),new Promise((_,reject)=>{timer=setTimeout(()=>{controller.abort();reject(timeout())},Math.min(30000,cutoff-Date.now()))})])}finally{clearTimeout(timer)}}
  for(const model of names){
    for(let attempt=0;attempt<3;attempt++){
      conThoiGian();
      let r;const controller=new AbortController();
      try{r=await deadline(()=>fetch('https://generativelanguage.googleapis.com/v1beta/models/'+encodeURIComponent(model)+':generateContent',{method:'POST',headers:{'Content-Type':'application/json','x-goog-api-key':key},body:JSON.stringify({contents:[{parts:[{text:prompt}]}],generationConfig:json?{responseMimeType:'application/json'}:{}}),signal:controller.signal}),controller)}
      catch(e){conThoiGian();last=e;H.log.write('AI',model+' — lỗi mạng hoặc quá thời gian — lần '+(attempt+1));if(attempt<2){let delay=attempt===0?2000:5000;H.log.write('Thử lại tự động',model+' — đợi '+delay/1000+' giây');await doi(delay);continue}break}
      H.log.write('AI',model+' — HTTP '+r.status+' — lần '+(attempt+1));
      if(r.status===429||r.status>=500){let e=Error();e.status=r.status;last=e;if(attempt<2){let delay=attempt===0?2000:5000;H.log.write('Thử lại tự động',model+' — '+r.status+' — đợi '+delay/1000+' giây');await doi(delay);continue}break}
      let unavailable=r.status===404;if(!r.ok&&!unavailable){try{const detail=await deadline(()=>r.clone().text(),controller);unavailable=/not available|unavailable/i.test(detail)}catch(e){if(e.timeout){last=e;break}}}
      if(unavailable){last=Object.assign(Error(),{status:404});try{if(saved===model)localStorage.removeItem(this.modelName)}catch(_){}break}
      if(!r.ok){let e=Error();e.status=r.status;throw e}
      let data;try{data=await deadline(()=>r.json(),controller)}catch(e){/* Mất mạng hoặc hết hạn khi đọc thân cũng là lỗi tạm thời. */if(e.timeout||e instanceof TypeError||e.name==='AbortError'){conThoiGian();last=e;H.log.write('AI',model+' — lỗi đọc phản hồi — lần '+(attempt+1));if(attempt<2){let delay=attempt===0?2000:5000;H.log.write('Thử lại tự động',model+' — đợi '+delay/1000+' giây');await doi(delay);continue}break}H.log.write('Lỗi JSON',model+' — phản hồi API không phải JSON');let x=Error();x.badjson=true;throw x}
      let text=data.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('');if(!text){H.log.write('Lỗi JSON',model+' — phản hồi không có nội dung');let e=Error();e.badjson=true;throw e}
      try{localStorage.setItem(this.modelName,model)}catch(_){}return text
    }
  }
  throw last||Object.assign(Error(),{status:404})
}, async compact(){const s=H.state,c=document.getElementById('compact');if(!c.checked||s.lichsu.length<=12||s.so_thieu_du_lieu)return;const old=s.lichsu.slice(0,-6);const t=await this.call('Tóm tắt ngắn bằng tiếng Việt, giữ tên, sự kiện, vật phẩm và nhân quả, không bịa thêm. Tóm tắt cũ: '+(s.tomtat||'')+'; lịch sử: '+JSON.stringify(old),false);s.tomtat=t;s.lichsu=s.lichsu.slice(-6);if(!H.storage.save(s))throw Error('save')}
};
document.addEventListener('DOMContentLoaded',()=>{const f=document.getElementById('api'),compact=document.getElementById('compact'),result=document.getElementById('connection');try{if(f)f.value=localStorage.getItem(gem.keyName)||'';compact.checked=localStorage.getItem('hongduc-compact')!=='false'}catch(_){}if(f)f.addEventListener('input',()=>{try{localStorage.setItem(gem.keyName,f.value.trim())}catch(_){result.textContent='Không lưu được khóa trên thiết bị.'}});compact.addEventListener('change',()=>{try{localStorage.setItem('hongduc-compact',String(compact.checked))}catch(_){}});document.getElementById('connect').addEventListener('click',async function(){if(this.disabled)return;H.log.write('Kiểm tra kết nối','Người chơi bấm kiểm tra / thử lại');if(!gem.key()){H.log.write('Lỗi AI','Chưa nhập khóa Gemini');result.textContent='Chưa nhập khóa Gemini. Hãy nhập khóa rồi thử lại.';return}this.disabled=true;result.textContent='Đang kiểm tra kết nối...';try{await gem.call('Trả lời ngắn: xin chào.',false,{deadline:Date.now()+60000});result.textContent='Kết nối Gemini thành công.'}catch(e){result.textContent=gem.error(e)}finally{this.disabled=false}})});
/* LỊCH SỬ THAY ĐỔI: 03/11/2026 — bốn model dự phòng, retry 503 và chuyển model khi không khả dụng. 05/11/2026 — retry mạng, 429 và 5xx có thời hạn; bảo vệ lịch sử và khóa nút kiểm kết nối. */
})();
