/* Quay lại MỘT lượt mỗi lần, tối đa BA lượt; chỉ RAM, không vượt cửa chết. */
(function QuayLai(){
'use strict';
const H=window.HongDuc,$=id=>document.getElementById(id),copy=x=>JSON.parse(JSON.stringify(x));
const stack=[];let running=false,dead=false,undoOnly=false,owner=H.state;
const turn=H.story.turn,render=H.story.render,isBusy=H.story.isBusy,die=H.storage.die;
function update(){const b=$('quay-lai');if(b){b.hidden=!stack.length||dead;b.disabled=running||isBusy.call(H.story)||dead;b.textContent='Quay lại ('+stack.length+')'}}
function clear(){stack.length=0;H.story.choLuu=null;undoOnly=false;update()}
function sync(){if(!running&&H.state!==owner){clear();owner=H.state;dead=false}}
/* Chụp mốc id và meta trong cùng transaction, không sao chép toàn bộ cuốn sổ. */
async function mark(){const db=await H.so.open();try{return await new Promise((resolve,reject)=>{const tx=db.transaction(['luot','meta'],'readonly');let last=0,meta=null;const a=tx.objectStore('luot').openCursor(null,'prev'),b=tx.objectStore('meta').get('backup');a.onsuccess=()=>{last=a.result?.key||0};b.onsuccess=()=>{meta=b.result??null};tx.oncomplete=()=>resolve({last,meta:copy(meta),dbName:H.so.dbName});tx.onerror=tx.onabort=()=>reject(tx.error||Error('Không đọc được mốc sổ'))})}finally{db.close()}}
async function cut(m){if(m.dbName!==H.so.dbName)throw Error('Kho sổ đã thay đổi');const db=await H.so.open();try{await new Promise((resolve,reject)=>{const tx=db.transaction(['luot','meta'],'readwrite');tx.objectStore('luot').delete(IDBKeyRange.lowerBound(m.last,true));const meta=tx.objectStore('meta');if(m.meta===null)meta.delete('backup');else meta.put(copy(m.meta),'backup');tx.oncomplete=resolve;tx.onerror=tx.onabort=()=>reject(tx.error||Error('Không khôi phục được sổ'))})}finally{db.close()}}
function profile(){if(!H.state)return;const root=$('profile-data');if(!root)return;const nv=H.state.nhanvat,lich=H.thoiGian.hoSo(H.state),dong=document.createElement('span');root.textContent=nv.ten+' — '+nv.xuatthan+' — '+(nv.canhgioi||'Phàm nhân');dong.className='thoi-gian-ho-so'+(lich.canhBao?' canh-bao-tho':'');dong.textContent=lich.text;root.append(dong)}
H.story.isBusy=function(){return running||isBusy.call(this)};
H.story.render=function(){sync();render.call(this);update()};
H.story.turn=async function(action,opening){
 sync();if(running||isBusy.call(this)||!H.state||dead)return;
 if(undoOnly){$('story-feedback').textContent='Hãy bấm Quay lại để hoàn tất khôi phục trước khi đi tiếp.';return}
 running=true;update();
 try{
  /* Retry kết quả chờ lưu không tạo thêm mốc và không gọi lại AI. */
  if(!this.choLuu){const s=copy(H.state),logs=copy(H.log.read()),m=await mark();stack.push({s,logs,m});if(stack.length>3)stack.shift()}
  await turn.call(this,action,opening);
 }catch(e){$('story-feedback').textContent='Không tạo được bản chụp an toàn. Lượt kể chưa chạy. '+String(e.message||e)}
 finally{owner=H.state;running=false;update()}
};
H.storage.die=function(){dead=true;clear();return die.call(this)};
H.undo={count(){sync();return stack.length},clear,async back(){
 sync();if(running||isBusy.call(H.story)||dead||!H.state||!stack.length)return false;
 running=true;undoOnly=true;update();H.story.choLuu=null;
 const top=stack[stack.length-1];
 try{
  /* Ghi trước save phục hồi; nếu sổ/log lỗi, giữ mốc và khóa hành động mới để retry. */
  const restored=copy(top.s);if(!H.storage.save(restored))throw Error('Không ghi được save phục hồi');
  H.state=restored;owner=restored;await cut(top.m);
  localStorage.setItem(H.log.key,JSON.stringify(top.logs));
  stack.pop();undoOnly=false;render.call(H.story);profile();await H.so.refresh();
  $('story-feedback').textContent='Đã quay lại một lượt.';return true;
 }catch(e){render.call(H.story);profile();$('story-feedback').textContent='Khôi phục chưa hoàn tất. Bấm Quay lại để thử lại: '+String(e.message||e);return false}
 finally{running=false;update()}
}};
document.addEventListener('DOMContentLoaded',()=>{const b=document.createElement('button');b.id='quay-lai';b.type='button';b.className='btn seal-button quay-lai';b.hidden=true;b.addEventListener('click',()=>H.undo.back());$('choices').after(b);update()},{once:true});
})();
