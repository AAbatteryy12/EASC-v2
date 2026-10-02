(function(){
const KEY='EASC_progress_v4';
try{const s=JSON.parse(localStorage.getItem(KEY)||'null');if(s)Object.keys(s).forEach(k=>{if(state.progress[k])Object.assign(state.progress[k],s[k])});const nm=localStorage.getItem('EASC_cert_name');if(nm)state.userName=nm}catch(e){}
const done=()=>[1,2,3,4,5].filter(i=>state.progress[i]&&state.progress[i].completed).length;
const NAMES=['Null & Alternative Hypotheses','Level of Significance','Hypothesis Testing','Correlation Analysis','Scatter Plot & Regression'];
function bar(pct){return `<div class="pgbar"><i style="width:${pct}%"></i></div>`}
function refresh(){
try{localStorage.setItem(KEY,JSON.stringify(state.progress))}catch(e){}
const pct=Math.round(done()/5*100);
const set=(id,h)=>{const e=document.getElementById(id);if(e)e.innerHTML=h};
set('pgTop',`<div class="progressRow"><span>Overall progress</span><b>${pct}%</b></div>${bar(pct)}<div class="progressRow" style="margin-top:6px"><span>${done()} of 5 modules completed · Written test ${state.progress[6].completed?('passed at '+state.progress[6].score+'%'):(state.progress[6].score?('attempted, '+state.progress[6].score+'%'):'not yet attempted')}</span></div>`);
set('pgList',NAMES.map((n,i)=>{const p=state.progress[i+1];return `<div class="pgrow"><span>Module ${String(i+1).padStart(2,'0')} — ${n}</span><span style="color:${p.completed?'var(--good)':'var(--muted)'}">${p.completed?'✓ Completed':'In progress'}${p.score?` · ${p.score}%`:''}</span></div>`}).join('')+`<div class="pgrow"><span>Written Test — 150 items</span><span style="color:${state.progress[6].completed?'var(--good)':'var(--muted)'}">${state.progress[6].completed?'✓ Passed':(state.progress[6].score?'Attempted':'Not started')}${state.progress[6].score?` · ${state.progress[6].score}%`:''}</span></div>`);
try{renderBadges()}catch(e){}
const ok=state.progress[6].score>=80;const lock=document.getElementById('certLock'),box=document.getElementById('certBox');
if(lock&&box){lock.style.display=ok?'none':'block';box.style.display=ok?'block':'none';document.getElementById('certStudentName').textContent=String(state.userName).toUpperCase();document.getElementById('certScore').textContent=state.progress[6].score+'%';document.getElementById('certDate').textContent=new Date().toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'})}
}
window.updateUIProgress=refresh;window.EASC_refresh=refresh;
window.markModuleComplete=function(n){state.progress[n].completed=true;refresh();alertBox(`Module ${String(n).padStart(2,'0')} marked complete.`)};
window.EASC_certName=function(v){state.userName=(v.trim()||'Student Learner').toUpperCase();try{localStorage.setItem('EASC_cert_name',state.userName)}catch(e){}document.getElementById('certStudentName').textContent=state.userName};
window.EASC_print=function(){document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));document.getElementById('certificate').classList.add('active');window.print()};
/* nav, pages, progress widgets */
const nav=document.querySelector('.nav');
nav.insertAdjacentHTML('beforeend',`<button onclick="showView('badges',this)">🏅 &nbsp; BADGES</button><button onclick="showView('certificate',this)">🎓 &nbsp; CERTIFICATE</button>`);
const main=document.querySelector('.main');
main.insertAdjacentHTML('beforeend',`<section id="badges" class="page"><div class="top"><div><div class="kicker">EAS•C Achievements</div><h2>BADGES</h2><div class="sub">Complete modules and assessments to unlock badges.</div></div></div><div class="badges" id="badgeGrid"></div></section>
<section id="certificate" class="page certificatePage"><div class="top"><div><div class="kicker">EAS•C Certificate</div><h2>CERTIFICATE OF COMPLETION</h2><div class="sub">Score 80% or higher on the Written Test to unlock your certificate.</div></div></div>
<div id="certLock" class="cyber-card" style="padding:24px;border-radius:16px">🔒 Certificate locked. Pass the Written Test with at least 80%.</div>
<div id="certBox" style="display:none"><p><label class="sub">Name on certificate: <input class="easc-input" style="max-width:320px" value="${state.userName.replace(/"/g,'&quot;')}" oninput="EASC_certName(this.value)"></label></p>
<div class="certificate unlocked" style="padding:45px;text-align:center;border-radius:22px"><div class="kicker">EAS•C — Enhancing Activities in Statistics Courseware</div><h1 class="font-orbitron">CERTIFICATE OF COMPLETION</h1><p>This certifies that</p><div class="name font-orbitron" id="certStudentName"></div><p>has successfully completed the EAS•C statistics courseware with a final assessment score of <b id="certScore"></b>.</p><p class="sub" id="certDate"></p></div>
<p style="margin-top:14px"><button class="btn" onclick="EASC_print()">Print / Save as PDF</button></p></div></section>`);
document.querySelector('#dashboard .top').insertAdjacentHTML('beforeend','<div class="progressBox" id="pgTop"></div>');
document.querySelector('#dashboard').insertAdjacentHTML('beforeend','<div class="section"><h3>Module Progress</h3><div class="cyber-card" style="padding:18px;border-radius:16px" id="pgList"></div></div>');
/* active highlight for module + lab buttons */
window.showView=function(id,btn){document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');document.querySelectorAll('.nav button').forEach(x=>x.classList.remove('active'));if(btn)btn.classList.add('active');else if(id==='moduleView'){const m=document.querySelectorAll('#moduleNav button')[state.currentModule-1];if(m)m.classList.add('active')}window.scrollTo(0,0);refresh()};
document.querySelectorAll('.nav button').forEach(b=>{if(b.getAttribute('onclick')&&b.getAttribute('onclick').indexOf("showView('stats'")===0)b.setAttribute('onclick',"showView('stats',this)")});
refresh();
})();
