/* EAS•C multipage router: each page renders one view; navigation = real page loads */
(function(){
const PAGE=document.body.dataset.page||'index';
const PARTS=['objectives','content','activity','performance'];
const FILE={dashboard:'dashboard.html',stats:'statslab.html',badges:'badges.html',certificate:'certificate.html',settings:'settings.html'};
const PAGEOF={dashboard:'dashboard',stats:'statslab',badges:'badges',certificate:'certificate',settings:'settings'};
const modURL=n=>n===6?'written-test.html':'module'+n+'.html';
const curMod=PAGE==='written-test'?6:(/^module(\d)$/.test(PAGE)?+RegExp.$1:0);
const _show=window.showView,_open=window.openModule,_part=window.EASC_openPart,_mark=window.EASC_markNav;
let boot=true;
window.showView=function(id,btn){
  if(boot)return _show(id,btn);
  if(FILE[id]){ if(PAGEOF[id]===PAGE)return _show(id,btn); location.href=FILE[id]; return }
  return _show(id,btn);
};
window.openModule=function(n){ if(boot||n===curMod)return _open(n); location.href=modURL(n); };
window.EASC_openPart=function(n,k){ if(n===curMod)return _part(n,k); location.href=modURL(n)+'#'+PARTS[k]; };
window.enterCourse=function(){ location.href='dashboard.html'; };
window.EASC_markNav=function(){
  _mark();
  if(curMod&&curMod<6&&window.PARTIDX&&PARTIDX[curMod]!=null){try{history.replaceState(null,'','#'+PARTS[PARTIDX[curMod]])}catch(e){}}
};
function gotoHash(){
  const k=PARTS.indexOf((location.hash||'').slice(1));
  if(k<0||!curMod||curMod>5)return;
  let t=0;const iv=setInterval(()=>{ if(document.getElementById('pagerTrack'+curMod)||++t>50){clearInterval(iv);if(window.EASC_gotoPart&&document.getElementById('pagerTrack'+curMod))EASC_gotoPart(curMod,k)} },80);
}
function start(){
  try{buildModuleNav()}catch(e){}
  if(PAGE==='index')return;
  if(curMod){ _open(curMod); gotoHash(); }
  else{
    const id=Object.keys(PAGEOF).find(k=>PAGEOF[k]===PAGE)||'dashboard';
    const btn=id==='dashboard'?document.getElementById('navDash'):document.querySelector('.nav>button[onclick*="\''+id+'\'"]');
    _show(id,btn);
  }
}
start();
boot=false;
window.addEventListener('hashchange',gotoHash);
})();
