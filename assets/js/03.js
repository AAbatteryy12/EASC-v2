// EAS•C adaptation: wrap every module with the four required components and keep all modules unlocked.
const _render1=renderModule1,_render2=renderModule2,_render3=renderModule3,_render4=renderModule4,_render5=renderModule5,_render6=renderModule6;
function componentStrip(n){return `<div class="component-strip"><div class="component-chip"><b>OBJECTIVES</b><span>Specific learning targets for the module.</span></div><div class="component-chip"><b>CONTENT</b><span>Lesson, examples, explanations, formulas, and discussion.</span></div><div class="component-chip"><b>ACTIVITY</b><span>Interactive activity, practice, or simulation.</span></div><div class="component-chip"><b>PERFORMANCE</b><span>4-choice performance items with detailed feedback.</span></div></div>`}
function renderModule6(container){_render6(container);renderAllMath(container)}
function appendInteractiveGuide(num){
  const data=GRAPH_GUIDES[num]; if(!data) return;
  const host=document.getElementById('moduleContainer'); if(!host) return;
  const wrap=document.createElement('section'); wrap.className='activity guideBlock';
  wrap.innerHTML=`<h3 style="color:var(--cyan2);margin-top:0">${data.title}</h3><p class="sub">Answer all five guide questions. Feedback appears after each choice.</p><div class="guideQuestions"></div>`;
  const qbox=wrap.querySelector('.guideQuestions');
  data.questions.forEach((q,i)=>{const d=document.createElement('div');d.className='interact';d.innerHTML=`<b>${i+1}. ${q[0]}</b><div class="choices">${q[2].map((o,j)=>`<button type="button" onclick="checkGuideAnswer(${num},${i},${j},this)">${String.fromCharCode(97+j)}) ${o}</button>`).join('')}</div><div id="guideFb_${num}_${i}" class="feedback"></div>`;qbox.appendChild(d)});
  host.appendChild(wrap);
}
window.checkGuideAnswer=function(num,i,j,btn){const q=GRAPH_GUIDES[num]?.questions[i];if(!q)return;const box=document.getElementById(`guideFb_${num}_${i}`);document.querySelectorAll(`#guideFb_${num}_${i}`).forEach(()=>{});if(j===q[1].charCodeAt(0)-97){btn.classList.add('correct');box.className='feedback show good';box.textContent='✓ Correct. '+q[0]}else{btn.classList.add('wrong');box.className='feedback show bad';box.textContent='✗ Review the concept and try again.'}};
function appendComprehension(num){
  const bank=COMPREHENSION_BANK[num]; if(!bank) return;
  const host=document.getElementById('moduleContainer'); if(!host) return;
  const wrap=document.createElement('section'); wrap.className='activity comprehensionBlock';
  wrap.innerHTML=`<h3 style="color:var(--cyan2);margin-top:0">COMPREHENSION CHECK</h3><p class="sub">Five questions with immediate feedback. You may retry without needing a perfect score.</p><div class="comprehensionQuestions"></div><div id="compScore_${num}" class="feedback"></div>`;
  const qbox=wrap.querySelector('.comprehensionQuestions');
  bank.forEach((q,i)=>{const d=document.createElement('div');d.className='interact';d.innerHTML=`<b>${i+1}. ${q[0]}</b><div class="choices">${q[2].map((o,j)=>`<button type="button" onclick="checkComprehension(${num},${i},${j},this)">${String.fromCharCode(97+j)}) ${o}</button>`).join('')}</div><div id="compFb_${num}_${i}" class="feedback"></div>`;qbox.appendChild(d)});
  host.appendChild(wrap);
}
window.checkComprehension=function(num,i,j,btn){const q=COMPREHENSION_BANK[num]?.[i];if(!q)return;const correct=q[1].charCodeAt(0)-97;const box=document.getElementById(`compFb_${num}_${i}`);if(j===correct){btn.classList.add('correct');box.className='feedback show good';box.textContent='✓ Correct. '+q[0]}else{btn.classList.add('wrong');box.className='feedback show bad';box.textContent='✗ Not quite. Review the lesson and try again.'}};
function openModule(num){state.currentModule=num;const c=document.getElementById('moduleContainer');const title=document.getElementById('moduleTitle');document.getElementById('moduleKicker').textContent='MODULE '+String(num).padStart(2,'0');const titles=['NULL AND ALTERNATIVE HYPOTHESES','LEVEL OF SIGNIFICANCE','HYPOTHESIS TESTING','CORRELATION ANALYSIS','SCATTER PLOT & REGRESSION','ASSESSMENT'];title.textContent=titles[num-1];if(num===1)_render1(c);else if(num===2)_render2(c);else if(num===3)_render3(c);else if(num===4)_render4(c);else if(num===5)_render5(c);else renderModule6(c);c.insertAdjacentHTML('afterbegin',componentStrip(num));setTimeout(()=>{if(num<=5){appendInteractiveGuide(num);appendComprehension(num)}if(num===5&&typeof drawM5Regression==='function')drawM5Regression();renderAllMath(c)},80);showView('moduleView',null)}
// All modules are deliberately unlocked at startup.
function updateModuleLocks(){}
function moduleIsUnlocked(num){return true}
