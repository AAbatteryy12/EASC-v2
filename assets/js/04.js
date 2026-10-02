(function(){
  const FEATURE_KEY='EASC_featureData_v1';
  state.featureData=state.featureData||{customScenarios:0,csvRuns:0,ciRuns:0,practiceRuns:0,challengeWins:0,visitedTools:[]};
  function saveFeatureState(){if(window.EASC_saveProgress) window.EASC_saveProgress(false)}
  function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
  function openModal(id){document.getElementById(id)?.classList.add('open')}
  window.openEascFeature=function(tab){
    const m=document.getElementById('eascFeatureModal'); if(!m)return;
    m.classList.add('open'); renderFeatureTab(tab);
    if(!state.featureData.visitedTools.includes(tab)) state.featureData.visitedTools.push(tab);
    saveFeatureState(); renderBadges();
  };
  window.closeEascFeature=function(){document.getElementById('eascFeatureModal')?.classList.remove('open')};
  window.renderFeatureTab=function(tab){
    const title={
      zknown:'Z-TEST FOR KNOWN SD',
      zunknown:'Z-TEST FOR UNKNOWN SD',
      onesamplet:'ONE-SAMPLE T-TEST',
      indttest:'INDEPENDENT-SAMPLE T-TEST',
      pairedt:'PAIRED-SAMPLE T-TEST',
      pearson:'PEARSON r CORRELATION'
    }[tab]||'STATISTICS LAB';
    document.getElementById('eascFeatureHeading').innerText=title;
    const tabs=['zknown','zunknown','onesamplet','indttest','pairedt','pearson'];
    const labels={zknown:'Z KNOWN SD',zunknown:'Z UNKNOWN SD',onesamplet:'ONE-SAMPLE t',indttest:'INDEPENDENT t',pairedt:'PAIRED t',pearson:'PEARSON r'};
    const nav='<div class="easc-tabs">'+tabs.map(t=>`<button class="easc-tab ${t===tab?'active':''}" onclick="renderFeatureTab('${t}')">${labels[t]}</button>`).join('')+'</div>';
    document.getElementById('eascFeatureBody').innerHTML=nav+featureContent(tab);
    if(tab==='pearson') setTimeout(initPearsonLab,40);
    renderAllMath();
  };

  function labInput(id,label,value,step='any'){
    return `<div><label class="easc-label">${label}</label><input id="${id}" type="number" value="${value}" step="${step}" class="easc-input"></div>`;
  }
  function labAlpha(id='labAlpha'){
    return `<div><label class="easc-label">SIGNIFICANCE LEVEL α</label><select id="${id}" class="easc-input"><option value="0.01">0.01</option><option value="0.05" selected>0.05</option><option value="0.10">0.10</option></select></div>`;
  }
  function resultBox(id){
    return `<div id="${id}" class="easc-result mt-3"><span class="easc-muted">Enter the values and calculate.</span></div>`;
  }

  function featureContent(tab){
    if(tab==='zknown') return `<div class="easc-result"><p class="text-xs easc-muted mb-3">Use this procedure when the population standard deviation σ is known.</p><div class="grid md:grid-cols-3 gap-3">${labInput('zkXbar','Sample mean x̄','105')}${labInput('zkMu','Hypothesized mean μ₀','100')}${labInput('zkSigma','Known population SD σ','12')}${labInput('zkN','Sample size n','36','1')}${labAlpha()}</div><button onclick="calcZKnown()" class="btn-cyber px-4 py-2 rounded text-xs mt-3">CALCULATE Z-TEST</button></div>${resultBox('zkResult')}`;
    if(tab==='zunknown') return `<div class="easc-result"><p class="text-xs easc-muted mb-3">Educational z procedure using the sample SD s as an estimate of σ when the population SD is unknown. For small samples, a t-test is generally preferred.</p><div class="grid md:grid-cols-3 gap-3">${labInput('zuXbar','Sample mean x̄','105')}${labInput('zuMu','Hypothesized mean μ₀','100')}${labInput('zuS','Sample SD s','12')}${labInput('zuN','Sample size n','36','1')}${labAlpha()}</div><button onclick="calcZUnknown()" class="btn-cyber px-4 py-2 rounded text-xs mt-3">CALCULATE Z-TEST</button></div>${resultBox('zuResult')}`;
    if(tab==='onesamplet') return `<div class="easc-result"><p class="text-xs easc-muted mb-3">Compare one sample mean with a hypothesized population mean.</p><div class="grid md:grid-cols-3 gap-3">${labInput('otXbar','Sample mean x̄','105')}${labInput('otMu','Hypothesized mean μ₀','100')}${labInput('otS','Sample SD s','12')}${labInput('otN','Sample size n','16','1')}${labAlpha()}</div><button onclick="calcOneSampleT()" class="btn-cyber px-4 py-2 rounded text-xs mt-3">CALCULATE ONE-SAMPLE t</button></div>${resultBox('otResult')}`;
    if(tab==='indttest') return `<div class="easc-result"><p class="text-xs easc-muted mb-3">Compare two independent group means using the Welch independent-samples t-test.</p><div class="grid md:grid-cols-3 gap-3">${labInput('itM1','Group 1 mean','78')}${labInput('itS1','Group 1 SD','8')}${labInput('itN1','Group 1 n','20','1')}${labInput('itM2','Group 2 mean','72')}${labInput('itS2','Group 2 SD','7')}${labInput('itN2','Group 2 n','22','1')}${labAlpha()}</div><button onclick="calcIndependentT()" class="btn-cyber px-4 py-2 rounded text-xs mt-3">CALCULATE INDEPENDENT t</button></div>${resultBox('itResult')}`;
    if(tab==='pairedt') return `<div class="easc-result"><p class="text-xs easc-muted mb-3">Enter paired observations such as before-and-after scores. The test is performed on the paired differences.</p><div class="grid md:grid-cols-2 gap-3">${'<div><label class="easc-label">BEFORE VALUES</label><textarea id="ptBefore" class="easc-input" rows="4">72,75,80,68,77,85</textarea></div><div><label class="easc-label">AFTER VALUES</label><textarea id="ptAfter" class="easc-input" rows="4">78,79,84,74,81,88</textarea></div>'}</div><div class="grid md:grid-cols-2 gap-3 mt-3">${labAlpha()}</div><button onclick="calcPairedT()" class="btn-cyber px-4 py-2 rounded text-xs mt-3">CALCULATE PAIRED t</button></div>${resultBox('ptResult')}`;
    return `<div class="easc-result"><p class="text-xs easc-muted mb-3">Enter paired X and Y values. The lab calculates Pearson's r and constructs a scatterplot with the observed points.</p><div class="grid md:grid-cols-2 gap-3"><div><label class="easc-label">X VALUES</label><textarea id="prX" class="easc-input" rows="5">2,4,5,7,8,10,11,13</textarea></div><div><label class="easc-label">Y VALUES</label><textarea id="prY" class="easc-input" rows="5">4,7,6,10,11,14,13,17</textarea></div></div><div class="flex flex-wrap gap-2 mt-3"><button onclick="calcPearsonLab()" class="btn-cyber px-4 py-2 rounded text-xs">CALCULATE PEARSON r</button><button onclick="randomPearsonData()" class="btn-cyber px-4 py-2 rounded text-xs">GENERATE DATA</button></div></div><div id="prResult" class="easc-result mt-3"></div><div class="easc-result mt-3"><canvas id="pearsonCanvas" class="w-full" style="height:340px"></canvas></div>`;
  }

  function num(id){return Number(document.getElementById(id)?.value)}
  function parseNums(id){return String(document.getElementById(id)?.value||'').split(/[,\s]+/).map(Number).filter(Number.isFinite)}
  function labNormalCDF(z){return 0.5*(1+Math.erf(z/Math.sqrt(2)))}
  function erfApprox(x){const sign=x<0?-1:1;x=Math.abs(x);const a1=.254829592,a2=-.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,p=.3275911;const t=1/(1+p*x);return sign*(1-(((((a5*t+a4)*t)+a3)*t+a2)*t+a1)*t*Math.exp(-x*x))}
  function nCdf(z){return .5*(1+erfApprox(z/Math.sqrt(2)))}
  function critNormal(alpha){return alpha<=.01?2.576:alpha<=.05?1.96:1.645}
  function twoTailNormalP(z){return 2*(1-nCdf(Math.abs(z)))}
  function basicDecision(stat,crit){return Math.abs(stat)>=crit?'REJECT H₀':'FAIL TO REJECT H₀'}
  function renderTestResult(id,title,stat,crit,df,p,formula){
    const decision=basicDecision(stat,crit);
    document.getElementById(id).innerHTML=`<div class="font-orbitron font-bold text-sm mb-2">${title}</div><div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs"><div><span class="easc-muted">Test statistic</span><br><b>${stat.toFixed(4)}</b></div><div><span class="easc-muted">Critical value</span><br><b>±${crit.toFixed(4)}</b></div><div><span class="easc-muted">df</span><br><b>${df==null?'—':df}</b></div><div><span class="easc-muted">Approx. two-tailed p</span><br><b>${p==null?'—':p.toFixed(4)}</b></div></div><div class="mt-3 p-3 rounded-lg" style="border:1px solid var(--easc-border);background:var(--easc-card2)"><b>${decision}</b><div class="text-xs easc-muted mt-1">${formula}</div></div>`;
    renderAllMath();
  }
  window.calcZKnown=function(){const x=num('zkXbar'),mu=num('zkMu'),sig=num('zkSigma'),n=num('zkN'),a=num('labAlpha');if(!(sig>0&&n>0))return;const z=(x-mu)/(sig/Math.sqrt(n));renderTestResult('zkResult','Z-test for known SD',z,critNormal(a),null,twoTailNormalP(z),`$Z=(\\bar{x}-\\mu_0)/(\\sigma/\\sqrt{n})$.`)}
  window.calcZUnknown=function(){const x=num('zuXbar'),mu=num('zuMu'),ss=num('zuS'),n=num('zuN'),a=num('labAlpha');if(!(ss>0&&n>0))return;const z=(x-mu)/(ss/Math.sqrt(n));renderTestResult('zuResult','Z-test for unknown SD',z,critNormal(a),n-1,twoTailNormalP(z),`Educational form: $Z=(\\bar{x}-\\mu_0)/(s/\\sqrt{n})$. For small samples, prefer the one-sample t-test.`)}
  window.calcOneSampleT=function(){const x=num('otXbar'),mu=num('otMu'),ss=num('otS'),n=num('otN');if(!(ss>0&&n>1))return;const t=(x-mu)/(ss/Math.sqrt(n));const df=n-1;const crit=df>=120?critNormal(num('labAlpha')):df>=30?2.04:df>=15?2.13:df>=10?2.23:2.45;renderTestResult('otResult','One-sample t-test',t,crit,df,null,`$t=(\\bar{x}-\\mu_0)/(s/\\sqrt{n})$, with $df=n-1$. Critical value shown is an educational approximation.`)}
  window.calcIndependentT=function(){const m1=num('itM1'),s1=num('itS1'),n1=num('itN1'),m2=num('itM2'),s2=num('itS2'),n2=num('itN2');if(!(s1>0&&s2>0&&n1>1&&n2>1))return;const se=Math.sqrt(s1*s1/n1+s2*s2/n2),t=(m1-m2)/se,df=Math.pow(s1*s1/n1+s2*s2/n2,2)/(Math.pow(s1*s1/n1,2)/(n1-1)+Math.pow(s2*s2/n2,2)/(n2-1));const crit=df>=120?critNormal(num('labAlpha')):df>=30?2.04:df>=15?2.13:df>=10?2.23:2.45;renderTestResult('itResult','Independent-samples t-test (Welch)',t,crit,df.toFixed(1),null,`$t=(\\bar{x}_1-\\bar{x}_2)/\\sqrt{s_1^2/n_1+s_2^2/n_2}$.`)}
  window.calcPairedT=function(){const b=parseNums('ptBefore'),a=parseNums('ptAfter');if(b.length!==a.length||b.length<2){document.getElementById('ptResult').innerHTML='<span class="text-red-400">Enter the same number of paired observations in both lists.</span>';return}const d=a.map((v,i)=>v-b[i]),m=mean(d),ss=sd(d),t=m/(ss/Math.sqrt(d.length)),df=d.length-1;const crit=df>=120?critNormal(num('labAlpha')):df>=30?2.04:df>=15?2.13:df>=10?2.23:2.45;renderTestResult('ptResult','Paired-samples t-test',t,crit,df,null,`Test the mean paired difference: $t=\\bar{d}/(s_d/\\sqrt{n})$.`)}
  window.randomPearsonData=function(){const x=Array.from({length:10},(_,i)=>i+1);const y=x.map(v=>Math.max(1,Math.round(v*1.4+(Math.random()*8-4))));document.getElementById('prX').value=x.join(', ');document.getElementById('prY').value=y.join(', ');calcPearsonLab()}
  function initPearsonLab(){if(document.getElementById('prX'))calcPearsonLab()}
  window.calcPearsonLab=function(){const x=parseNums('prX'),y=parseNums('prY');if(x.length!==y.length||x.length<3){document.getElementById('prResult').innerHTML='<span class="text-red-400">Enter equal X and Y lists with at least 3 pairs.</span>';return}const r=corr(x,y),r2=r*r;document.getElementById('prResult').innerHTML=`<div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs"><div class="easc-result"><span class="easc-muted">n</span><br><b>${x.length}</b></div><div class="easc-result"><span class="easc-muted">Pearson r</span><br><b>${r.toFixed(4)}</b></div><div class="easc-result"><span class="easc-muted">r²</span><br><b>${r2.toFixed(4)}</b></div><div class="easc-result"><span class="easc-muted">Direction</span><br><b>${r>0?'Positive':r<0?'Negative':'None'}</b></div></div><div class="mt-2 text-xs easc-muted">${Math.abs(r)>=.8?'Strong':Math.abs(r)>=.5?'Moderate':Math.abs(r)>=.3?'Weak':'Very weak'} linear association. Correlation does not by itself establish causation.</div>`;drawPearsonCanvas(x,y,r)}
  function drawPearsonCanvas(x,y,r){const c=document.getElementById('pearsonCanvas');if(!c)return;const w=c.clientWidth||700,h=340,d=devicePixelRatio||1;c.width=w*d;c.height=h*d;const ctx=c.getContext('2d');ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,w,h);const cs=getComputedStyle(document.body),border=cs.getPropertyValue('--easc-border'),accent=cs.getPropertyValue('--easc-accent');ctx.strokeStyle=border;ctx.lineWidth=1;const pad=42;ctx.strokeRect(pad,18,w-pad*1.2,h-48);const minX=Math.min(...x),maxX=Math.max(...x),minY=Math.min(...y),maxY=Math.max(...y);const px=v=>pad+(v-minX)/(maxX-minX||1)*(w-pad*1.2),py=v=>h-30-(v-minY)/(maxY-minY||1)*(h-48);ctx.fillStyle=accent;x.forEach((v,i)=>{ctx.beginPath();ctx.arc(px(v),py(y[i]),5,0,Math.PI*2);ctx.fill()});const reg=regression(x,y);ctx.strokeStyle=accent;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(px(minX),py(reg.m*minX+reg.b));ctx.lineTo(px(maxX),py(reg.m*maxX+reg.b));ctx.stroke();ctx.fillStyle=cs.getPropertyValue('--easc-text');ctx.font='12px Inter';ctx.fillText('X',w-28,h-12);ctx.fillText('Y',12,28)}
  // ---------- CSV DATA LAB ----------
  let csvRows=[], csvHeaders=[];
  window.handleCsvUpload=function(e){
    const f=e.target.files?.[0]; if(!f)return;
    const reader=new FileReader(); reader.onload=()=>{try{parseCsv(String(reader.result||''));state.featureData.csvRuns++;saveFeatureState();}catch(err){document.getElementById('csvPreview').innerHTML='<div class="easc-result text-red-500">Could not parse this CSV. Check that it contains a header row and comma-separated values.</div>';}};reader.readAsText(f);
  };
  function parseCsv(text){
    const lines=text.split(/\r?\n/).filter(x=>x.trim()); if(lines.length<2)throw Error('empty');
    const parseLine=line=>{let out=[],cur='',q=false;for(let i=0;i<line.length;i++){const c=line[i];if(c==='"'){if(q&&line[i+1]==='"'){cur+='"';i++;}else q=!q}else if(c===','&&!q){out.push(cur.trim());cur=''}else cur+=c}out.push(cur.trim());return out};
    csvHeaders=parseLine(lines[0]); csvRows=lines.slice(1).map(parseLine).filter(r=>r.length);
    ['csvX','csvY'].forEach(id=>{const el=document.getElementById(id);if(el)el.innerHTML=csvHeaders.map((h,i)=>`<option value="${i}">${esc(h)}</option>`).join('')});
    if(csvHeaders.length>1)document.getElementById('csvY').value='1';
    computeCsvStats();
  }
  function nums(col){return csvRows.map(r=>Number(r[col])).filter(Number.isFinite)}
  function mean(a){return a.length?a.reduce((s,v)=>s+v,0)/a.length:NaN}
  function sd(a){if(a.length<2)return NaN;const m=mean(a);return Math.sqrt(a.reduce((s,v)=>s+(v-m)**2,0)/(a.length-1))}
  function corr(x,y){const n=Math.min(x.length,y.length),xm=mean(x),ym=mean(y);let a=0,b=0,c=0;for(let i=0;i<n;i++){a+=(x[i]-xm)*(y[i]-ym);b+=(x[i]-xm)**2;c+=(y[i]-ym)**2}return a/Math.sqrt(b*c)}
  function regression(x,y){const r=corr(x,y),sx=sd(x),sy=sd(y);const m=r*sy/sx,b=mean(y)-m*mean(x);return {m,b,r}}
  window.computeCsvStats=function(){
    if(!csvRows.length)return;const xi=Number(document.getElementById('csvX').value),yi=Number(document.getElementById('csvY').value);const pairs=csvRows.map(r=>[Number(r[xi]),Number(r[yi])]).filter(p=>Number.isFinite(p[0])&&Number.isFinite(p[1]));const x=pairs.map(p=>p[0]),y=pairs.map(p=>p[1]);const reg=regression(x,y);
    document.getElementById('csvStats').innerHTML=[['N',pairs.length],['Mean X',mean(x).toFixed(3)],['SD X',sd(x).toFixed(3)],['Mean Y',mean(y).toFixed(3)],['SD Y',sd(y).toFixed(3)],['Pearson r',reg.r.toFixed(4)],['Slope m',reg.m.toFixed(4)],['Intercept b',reg.b.toFixed(4)]].map(([k,v])=>`<div class="easc-result"><div class="text-[10px] easc-muted">${k}</div><div class="font-bold">${v}</div></div>`).join('');
    document.getElementById('csvPreview').innerHTML=`<div class="easc-result mt-3"><b>Regression:</b> Y = ${reg.m.toFixed(3)}X ${reg.b>=0?'+':'−'} ${Math.abs(reg.b).toFixed(3)}<div class="overflow-auto mt-2"><table class="easc-table"><thead><tr>${csvHeaders.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${csvRows.slice(0,10).map(r=>`<tr>${csvHeaders.map((_,i)=>`<td>${esc(r[i]??'')}</td>`).join('')}</tr>`).join('')}</tbody></table></div><div class="text-[10px] easc-muted mt-1">Showing up to 10 rows.</div></div>`;
    drawCsvCanvas(x,y,reg);renderAllMath();
  };
  function drawCsvCanvas(x,y,reg){const c=document.getElementById('csvCanvas');if(!c)return;const w=c.clientWidth||600,h=300,d=devicePixelRatio||1;c.width=w*d;c.height=h*d;const ctx=c.getContext('2d');ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,w,h);const minX=Math.min(...x),maxX=Math.max(...x),minY=Math.min(...y),maxY=Math.max(...y);const pad=35,px=v=>pad+(v-minX)/(maxX-minX||1)*(w-2*pad),py=v=>h-pad-(v-minY)/(maxY-minY||1)*(h-2*pad);ctx.strokeStyle=getComputedStyle(document.body).getPropertyValue('--easc-border');ctx.strokeRect(pad,pad,w-2*pad,h-2*pad);ctx.fillStyle=getComputedStyle(document.body).getPropertyValue('--easc-accent');x.forEach((v,i)=>{ctx.beginPath();ctx.arc(px(v),py(y[i]),4,0,Math.PI*2);ctx.fill()});ctx.strokeStyle=getComputedStyle(document.body).getPropertyValue('--easc-accent2');ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(px(minX),py(reg.m*minX+reg.b));ctx.lineTo(px(maxX),py(reg.m*maxX+reg.b));ctx.stroke()}
  function initCsvLab(){if(csvRows.length)computeCsvStats()}

  // ---------- CHI-SQUARE ----------
  window.renderChiMode=function(mode,btn){document.querySelectorAll('#eascFeatureBody .easc-tabs .easc-tab').forEach(x=>x.classList.remove('active'));if(btn)btn.classList.add('active');const b=document.getElementById('chiBody');if(!b)return;if(mode==='gof')b.innerHTML=`<div class="grid md:grid-cols-2 gap-3"><div class="easc-result"><label class="easc-label">OBSERVED COUNTS</label><input id="chiObs" class="easc-input" value="18,22,20,20"><label class="easc-label mt-2">EXPECTED COUNTS</label><input id="chiExp" class="easc-input" value="20,20,20,20"><button onclick="calcChiGof()" class="btn-cyber px-4 py-2 rounded text-xs mt-3">CALCULATE χ²</button></div><div id="chiGofResult" class="easc-result">Enter counts to begin.</div></div>`;else b.innerHTML=`<div class="easc-result"><label class="easc-label">CONTINGENCY TABLE (rows separated by ; columns by commas)</label><textarea id="chiTable" class="easc-input" rows="5">20,30,10;25,25,20;15,20,35</textarea><button onclick="calcChiInd()" class="btn-cyber px-4 py-2 rounded text-xs mt-3">CALCULATE INDEPENDENCE χ²</button></div><div id="chiIndResult" class="easc-result mt-3">Example table is loaded.</div>`}
  window.calcChiGof=function(){const o=document.getElementById('chiObs').value.split(',').map(Number),e=document.getElementById('chiExp').value.split(',').map(Number);if(o.length!==e.length||o.some(v=>!Number.isFinite(v))||e.some(v=>!Number.isFinite(v)||v<=0)){return}const chi=o.reduce((s,v,i)=>s+(v-e[i])**2/e[i],0),df=o.length-1;document.getElementById('chiGofResult').innerHTML=`<div class="font-bold">χ² = ${chi.toFixed(3)}</div><div class="text-xs easc-muted">df = ${df}. Compare this statistic with the appropriate critical value or p-value for your selected α.</div>`;}
  window.calcChiInd=function(){const rows=document.getElementById('chiTable').value.trim().split(';').map(r=>r.split(',').map(Number));if(!rows.length)return;const cols=rows[0].length;if(rows.some(r=>r.length!==cols||r.some(v=>!Number.isFinite(v)||v<0)))return;const rt=rows.map(r=>r.reduce((a,b)=>a+b,0)),ct=Array.from({length:cols},(_,j)=>rows.reduce((s,r)=>s+r[j],0)),n=rt.reduce((a,b)=>a+b,0);let chi=0;rows.forEach((r,i)=>r.forEach((obs,j)=>{const exp=rt[i]*ct[j]/n;chi+=(obs-exp)**2/exp}));const df=(rows.length-1)*(cols-1);document.getElementById('chiIndResult').innerHTML=`<div class="font-bold">χ² = ${chi.toFixed(3)}</div><div class="text-xs easc-muted">df = ${df}. Expected counts are computed from row and column totals.</div>`}

  // ---------- ANOVA ----------
  function parseGroup(id){return document.getElementById(id).value.split(',').map(Number).filter(Number.isFinite)}
  window.calculateAnova=function(){const groups=[parseGroup('anovaA'),parseGroup('anovaB'),parseGroup('anovaC'),parseGroup('anovaD')].filter(g=>g.length);if(groups.length<3){document.getElementById('anovaResult').innerHTML='<div class="easc-result">Enter at least three groups.</div>';return}const all=groups.flat(),gm=mean(all);let ssb=0,ssw=0;groups.forEach(g=>{const m=mean(g);ssb+=g.length*(m-gm)**2;ssw+=g.reduce((s,v)=>s+(v-m)**2,0)});const dfb=groups.length-1,dfw=all.length-groups.length,msb=ssb/dfb,msw=ssw/dfw,F=msb/msw;document.getElementById('anovaResult').innerHTML=`<div class="grid grid-cols-2 md:grid-cols-5 gap-2">${[['Groups',groups.length],['SS Between',ssb.toFixed(3)],['SS Within',ssw.toFixed(3)],['df Between',dfb],['df Within',dfw],['MS Between',msb.toFixed(3)],['MS Within',msw.toFixed(3)],['F',F.toFixed(3)]].map(([k,v])=>`<div class="easc-result"><div class="text-[10px] easc-muted">${k}</div><b>${v}</b></div>`).join('')}</div>`;drawAnovaCurve();}
  window.drawAnovaCurve=function(){const c=document.getElementById('anovaCanvas');if(!c)return;const w=c.clientWidth||500,h=260,d=devicePixelRatio||1;c.width=w*d;c.height=h*d;const ctx=c.getContext('2d');ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,w,h);const ac=getComputedStyle(document.body).getPropertyValue('--easc-accent');ctx.strokeStyle=ac;ctx.lineWidth=2;ctx.beginPath();for(let i=0;i<=200;i++){const x=i/20,y=Math.exp(-x/2)*Math.sqrt(Math.max(x,0));const px=35+(x/10)*(w-50),py=h-25-y*(h-55)*2;if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py)}ctx.stroke();ctx.fillStyle=getComputedStyle(document.body).getPropertyValue('--easc-muted');ctx.font='11px Inter';ctx.fillText('Illustrative F-distribution shape',40,18)}

  // ---------- CI SIMULATOR ----------
  let ciCoverage=[];
  window.runCiSimulation=function(){const mu=Number(document.getElementById('ciMu').value),sigma=Number(document.getElementById('ciSigma').value),n=Math.max(2,Number(document.getElementById('ciN').value)),runs=Math.min(1000,Math.max(1,Number(document.getElementById('ciRuns').value)));ciCoverage=[];let covered=0;const vals=[];for(let k=0;k<runs;k++){let sum=0;for(let i=0;i<n;i++)sum+=mu+sigma*randn();const x=sum/n,se=sigma/Math.sqrt(n),lo=x-1.96*se,hi=x+1.96*se;const ok=mu>=lo&&mu<=hi;if(ok)covered++;ciCoverage.push(ok);vals.push([lo,hi])}state.featureData.ciRuns=(state.featureData.ciRuns||0)+1;saveFeatureState();document.getElementById('ciResult').innerHTML=`<div class="easc-result"><b>${covered} / ${runs}</b> intervals captured μ = ${((covered/runs)*100).toFixed(1)}%. A large number of repetitions should approach the nominal 95% coverage rate.</div>`;drawCiCanvas(vals,mu);}
  function randn(){let u=0,v=0;while(!u)u=Math.random();while(!v)v=Math.random();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)}
  window.drawCiCanvas=function(vals,mu){const c=document.getElementById('ciCanvas');if(!c)return;const w=c.clientWidth||500,h=280,d=devicePixelRatio||1;c.width=w*d;c.height=h*d;const ctx=c.getContext('2d');ctx.setTransform(d,0,0,w?d:1,0,0);ctx.clearRect(0,0,w,h);if(!vals?.length){ctx.fillStyle=getComputedStyle(document.body).getPropertyValue('--easc-muted');ctx.fillText('Run the simulation to display intervals.',20,30);return}const max=Math.min(vals.length,80),shown=vals.slice(0,max);const all=shown.flat(),min=Math.min(...all),maxv=Math.max(...all);const px=v=>35+(v-min)/(maxv-min||1)*(w-50);const py=i=>30+i*((h-50)/Math.max(1,max-1));ctx.strokeStyle=getComputedStyle(document.body).getPropertyValue('--easc-accent2');ctx.beginPath();ctx.moveTo(px(mu),20);ctx.lineTo(px(mu),h-15);ctx.stroke();shown.forEach(([lo,hi],i)=>{ctx.strokeStyle=lo<=mu&&mu<=hi?getComputedStyle(document.body).getPropertyValue('--easc-accent'):'#a94442';ctx.beginPath();ctx.moveTo(px(lo),py(i));ctx.lineTo(px(hi),py(i));ctx.stroke()})}

  // ---------- TYPE I / II ----------
  window.updateErrorLab=function(){const n=Number(document.getElementById('errN')?.value||50),d=Number(document.getElementById('errD')?.value||.5),a=Number(document.getElementById('errAlpha')?.value||.05);const z=1.96;const noncentral=d*Math.sqrt(n);const power=normalCdf(noncentral-z)+normalCdf(-noncentral-z);const p=Math.max(0,Math.min(1,power));document.getElementById('errNVal').innerText=n;document.getElementById('errDVal').innerText=d.toFixed(2);document.getElementById('errAVal').innerText=a;document.getElementById('errPower').innerText=(p*100).toFixed(1)+'%';document.getElementById('errBeta').innerHTML='<b>β</b><br>'+(100-p*100).toFixed(1)+'%';document.getElementById('errAlphaOut').innerHTML='<b>α</b><br>'+(a*100).toFixed(1)+'%'}
  function normalCdf(x){return .5*(1+erf(x/Math.sqrt(2)))}
  function erf(x){const s=x<0?-1:1; x=Math.abs(x);const a1=.254829592,a2=-.284496736,a3=1.421413741,a4=-1.453152027,a5=1.061405429,p=.3275911,t=1/(1+p*x);return s*(1-((((a5*t+a4)*t+a3)*t+a2)*t+a1)*t*Math.exp(-x*x))}

  // ---------- PRACTICE + ELI5 ----------
  let currentPractice=null;
  const practiceBanks=[
    ()=>{const x=Math.floor(Math.random()*20)+20,y=Math.floor(Math.random()*20)+60;return {q:`A learner scored ${x} points on a quiz worth ${y} points. What percentage score did the learner obtain?`,a:(x/y)*100,solution:`Percentage = (${x} ÷ ${y}) × 100 = ${((x/y)*100).toFixed(2)}%.`}},
    ()=>{const a=[10,12,14,16,18],m=mean(a);return {q:`What is the mean of the dataset ${a.join(', ')}?`,a:m,solution:`Add the five values (70) and divide by 5: 70 ÷ 5 = ${m}.`}},
    ()=>{const r=(Math.random()*.5+.4).toFixed(2);return {q:`A study reports Pearson's r = ${r}. Is the linear relationship positive or negative? Enter 1 for positive or 0 for negative.`,a:1,solution:`Because r is greater than 0, the direction is positive.`}}
  ];
  window.generatePracticeProblem=function(){currentPractice=practiceBanks[Math.floor(Math.random()*practiceBanks.length)]();document.getElementById('practiceProblem').innerText=currentPractice.q;document.getElementById('practiceAnswer').value='';document.getElementById('practiceFeedback').innerText='';state.featureData.practiceRuns=(state.featureData.practiceRuns||0)+1;saveFeatureState()}
  window.checkPracticeAnswer=function(){if(!currentPractice){generatePracticeProblem();return}const v=Number(document.getElementById('practiceAnswer').value),ok=Math.abs(v-currentPractice.a)<.05;document.getElementById('practiceFeedback').innerHTML=ok?`<span style="color:#15803d">Correct. ${esc(currentPractice.solution)}</span>`:`<span style="color:#b91c1c">Not yet. Hint: check the numbers and operation. Solution: ${esc(currentPractice.solution)}</span>`}
  window.showEli5=function(){const f=document.getElementById('eliFormula')?.value;const t={mean:'Mean is simply the fair-share number: add all values and divide by how many values you have.',sd:'Standard deviation tells you how spread out the values are around the mean. A small SD means values tend to stay close to the mean.',r:'Pearson r is a number from −1 to +1 that describes the direction and strength of a straight-line relationship.',reg:'The regression equation Y = mx + b is a prediction rule: m tells how much Y changes when X increases by 1, while b is the predicted Y when X is 0.',z:'The Z statistic tells how many standard errors the sample result is away from the value stated in the null hypothesis.'}[f]||'';document.getElementById('eliText').innerText=t}

  // ---------- ANALYTICS ----------
  window.renderEascAnalytics=function(){const completed=[1,2,3,4,5,6].filter(i=>state.progress[i]?.completed).length;const scores=[1,2,3,4,5,6].map(i=>state.progress[i]?.score||0);const avg=scores.reduce((a,b)=>a+b,0)/6;document.getElementById('analyticsSummary').innerHTML=`<div class="space-y-2"><div><b>Learner:</b> ${esc(state.userName)}</div><div><b>Modules completed:</b> ${completed}/6</div><div><b>Average module score:</b> ${avg.toFixed(1)}%</div><div><b>Tools explored:</b> ${state.featureData.visitedTools.length}</div><div><b>CSV analyses:</b> ${state.featureData.csvRuns||0}</div><div><b>CI simulations:</b> ${state.featureData.ciRuns||0}</div><div><b>Practice problems generated:</b> ${state.featureData.practiceRuns||0}</div></div>`}
  window.printEascAnalytics=function(){const c=document.getElementById('analyticsSummary')?.innerHTML||'';const w=window.open('','_blank');if(!w)return;w.document.write('<html><head><title>EAS•C Learning Analytics</title></head><body><h1>EAS•C Learning Analytics</h1>'+c+'</body></html>');w.document.close();w.print()};


  // ---------- LOCAL PEER CHALLENGE ----------
  let blitz={timer:null,idx:0,score:[0,0],questions:[
    {q:'What symbol represents the null hypothesis?',a:'H0',opts:['H0','H1','α']},
    {q:'If r = -0.90, what is the direction?',a:'Negative',opts:['Positive','Negative','No linear']},
    {q:'What does α = 0.05 represent?',a:'Type I risk',opts:['Type I risk','Sample size','Correlation']},
    {q:'In Y = mx + b, what is m?',a:'Slope',opts:['Mean','Slope','Intercept']},
    {q:'A 95% CI is designed to capture the true mean in about what proportion of repeated intervals?',a:'95%',opts:['5%','50%','95%']}
  ]};
  function fillBlitzProfiles(){const ps=getSavedProfiles();['blitzP1','blitzP2'].forEach(id=>{const s=document.getElementById(id);if(s)s.innerHTML=ps.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')});}
  window.startBlitz=function(){const p1=document.getElementById('blitzP1').value,p2=document.getElementById('blitzP2').value;if(!p1||!p2||p1===p2){document.getElementById('blitzGame').innerHTML='<div class="text-red-500">Choose two different saved profiles.</div>';return}blitz.idx=0;blitz.score=[0,0];let active=0;const box=document.getElementById('blitzGame');let left=60;box.innerHTML=`<div class="flex justify-between text-xs"><b id="blitzTurn">PLAYER 1</b><b id="blitzTimer">60</b></div><div id="blitzQ" class="font-bold text-sm my-4"></div><div id="blitzOpts" class="grid gap-2"></div><div class="text-xs easc-muted mt-3">P1: <span id="b1s">0</span> · P2: <span id="b2s">0</span></div>`;function ask(){const q=blitz.questions[blitz.idx%blitz.questions.length];document.getElementById('blitzTurn').innerText='PLAYER '+(active+1);document.getElementById('blitzQ').innerText=q.q;document.getElementById('blitzOpts').innerHTML=q.opts.map(o=>`<button class="easc-tab" onclick="blitzAnswer('${esc(o).replace(/'/g,"\\'")}')">${esc(o)}</button>`).join('')}ask();clearInterval(blitz.timer);blitz.timer=setInterval(()=>{left--;document.getElementById('blitzTimer').innerText=left;if(left<=0){clearInterval(blitz.timer);finish()}},1000);window.blitzAnswer=function(answer){const q=blitz.questions[blitz.idx%blitz.questions.length];if(answer===q.a)blitz.score[active]++;blitz.idx++;active=active?0:1;document.getElementById('b1s').innerText=blitz.score[0];document.getElementById('b2s').innerText=blitz.score[1];if(blitz.idx>=10)finish();else ask()};function finish(){clearInterval(blitz.timer);const win=blitz.score[0]>blitz.score[1]?0:blitz.score[1]>blitz.score[0]?1:-1;if(win>=0)state.featureData.challengeWins=(state.featureData.challengeWins||0)+(win>=0?1:0);saveFeatureState();document.getElementById('blitzGame').innerHTML=`<div class="font-bold text-lg">FINAL SCORE</div><div class="text-2xl my-2">${blitz.score[0]} — ${blitz.score[1]}</div><div>${win===-1?'Tie game!':'Player '+(win+1)+' wins!'}</div>`;renderBadges()}}

  // ---------- SPEED SOLVER BADGE ----------
  state.featureData.comprehensionStart=state.featureData.comprehensionStart||{};
  const originalOpenModuleForSpeed=window.openModule;
  window.openModule=function(mod){state.featureData.comprehensionStart[mod]=Date.now();const r=originalOpenModuleForSpeed.apply(this,arguments);return r};
  const originalCheckCompForSpeed=window.checkComprehension;
  window.checkComprehension=function(mod){const r=originalCheckCompForSpeed.apply(this,arguments);const score=state.progress[mod]?.score||0;const start=state.featureData.comprehensionStart?.[mod]||Date.now();if(score===100 && Date.now()-start<120000)state.featureData.speedSolver=true;saveFeatureState();renderBadges();return r};

  // ---------- BADGES ----------
  const oldBadges=window.BADGES;
  const V23_BADGES=[
    {id:'speed',icon:'fa-stopwatch',name:'SPEED SOLVER',desc:'Finish a comprehension attempt in under 2 minutes.',rule:s=>!!s.featureData?.speedSolver},
    {id:'data',icon:'fa-database',name:'DATA WIZARD',desc:'Run a CSV analysis.',rule:s=>(s.featureData?.csvRuns||0)>=1},
    {id:'streak',icon:'fa-calendar-check',name:'STREAK SCHOLAR',desc:'Open EAS•C on three different dates.',rule:s=>(s.featureData?.loginDays||[]).length>=3},
    {id:'lab',icon:'fa-flask',name:'LAB EXPLORER',desc:'Explore five Statistics Labs.',rule:s=>(s.featureData?.visitedTools||[]).length>=5},
    {id:'challenge',icon:'fa-flag-checkered',name:'BLITZ CHAMPION',desc:'Win a Statistics Blitz challenge.',rule:s=>(s.featureData?.challengeWins||0)>=1}
  ];
  const allBadges=(typeof BADGES!=='undefined'?BADGES:[]).concat(V23_BADGES);
  window.renderBadges=function(){const grid=document.getElementById('badgeGrid');if(!grid)return;grid.innerHTML=allBadges.map(b=>{const unlocked=!!b.rule(state);return `<div class="badge-card ${unlocked?'unlocked':'locked'} p-4 rounded-xl" style="background:var(--easc-card2);border:1px solid ${unlocked?'var(--easc-accent)':'var(--easc-border)'};text-align:center"><div class="w-14 h-14 mx-auto mb-2 rounded-full flex items-center justify-center text-xl" style="background:var(--easc-card);color:${unlocked?'var(--easc-accent)':'var(--easc-muted)'};border:1px solid var(--easc-border)"><i class="fas ${b.icon}"></i></div><div class="font-orbitron text-[10px] font-bold">${b.name}</div><div class="text-[10px] mt-1 easc-muted">${unlocked?'UNLOCKED':'LOCKED'} · ${b.desc}</div></div>`}).join('')}

  // ---------- THREE THEMES ----------
  function applyTheme(theme){if(!['light','dark','grey'].includes(theme))theme='dark';state.theme=theme;document.body.classList.remove('easc-theme-light','easc-theme-dark','easc-theme-grey');document.body.classList.add('easc-theme-'+theme);try{localStorage.setItem('EASC_theme_preference',theme)}catch(e){};updateThemeButtons();saveFeatureState()}
  window.setThemeColor=applyTheme;
  function updateThemeButtons(){const g=document.querySelector('#modalSettings .grid.grid-cols-4');if(!g)return;g.className='grid grid-cols-3 gap-2';g.innerHTML=`<button onclick="setThemeColor('light')" class="easc-tab">☀ LIGHT <span class="text-[9px]">DEFAULT</span></button><button onclick="setThemeColor('dark')" class="easc-tab">◐ DARK</button><button onclick="setThemeColor('grey')" class="easc-tab">◒ GREY</button>`}

  // ---------- MENU / INIT ----------
  function installFeatureHub(){const hub=document.getElementById('eascFeatureHub');if(hub){hub.classList.remove('hidden');const target=document.getElementById('eascStatsContent');if(target&&hub.parentElement!==target)target.appendChild(hub)}}
  function recordLoginDay(){const today=new Date().toISOString().slice(0,10);const arr=state.featureData.loginDays||[];if(!arr.includes(today))arr.push(today);state.featureData.loginDays=arr.slice(-30);saveFeatureState()}
  const oldShowProfileChooser=window.showProfileChooser; window.showProfileChooser=function(){oldShowProfileChooser();installFeatureHub()};
  const oldShowNewProfileForm=window.showNewProfileForm; window.showNewProfileForm=function(){oldShowNewProfileForm()};
  const oldStartLearningTransition=window.startLearningTransition; window.startLearningTransition=function(){oldStartLearningTransition();installFeatureHub()};
  window.addEventListener('DOMContentLoaded',()=>{setTimeout(()=>{installFeatureHub();let savedTheme='';try{savedTheme=localStorage.getItem('EASC_theme_preference')||''}catch(e){};if(!savedTheme) savedTheme='dark';if(!['light','dark','grey'].includes(state.theme))state.theme='dark';applyTheme(savedTheme==='cyan'||savedTheme==='emerald'||savedTheme==='purple'||savedTheme==='amber'?'dark':savedTheme);recordLoginDay();try{showEli5()}catch(e){};try{updateThemeButtons()}catch(e){};try{renderBadges()}catch(e){}},300)});
  const oldOpenFeatureAnalytics=window.openEascFeature;window.openEascFeature=function(tab){oldOpenFeatureAnalytics(tab);if(tab==='analytics')setTimeout(renderEascAnalytics,30);if(tab==='challenge')setTimeout(fillBlitzProfiles,30);if(tab==='chisq')setTimeout(()=>renderChiMode('gof'),30);if(tab==='practice')setTimeout(()=>showEli5(),30)};
  window.addEventListener('resize',()=>{if(document.getElementById('csvCanvas')&&csvRows.length)computeCsvStats();if(document.getElementById('anovaCanvas'))drawAnovaCurve();if(document.getElementById('ciCanvas'))drawCiCanvas();});
})();
