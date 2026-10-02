        function detailedLesson(num) {
            const lessons = {
                1: {
                    title: 'DISCUSSION: INTRODUCTION TO HYPOTHESIS TESTING',
                    intro: 'Hypothesis testing is a decision-making process for evaluating claims about a population. It is also physically testing an assumption that we can make about a population. A hypothesis is an assumption or conjecture about a population parameter which may or may not be true.',
                    steps: [
                        ['1. Define hypothesis testing', 'It is a decision-making process for evaluating claims about a population and for testing an assumption that we can make about a population.'],
                        ['2. Define a hypothesis', 'A hypothesis is an assumption or conjecture about a population parameter which may or may not be true.'],
                        ['3. Example: Grade 11 mean height', 'Is the mean height of Grade 11 students different from 66 inches? This asks whether the population mean differs from a specific value.'],
                        ['4. Example: Senior male and female height', 'Is the proportion of senior male students whose height is significantly higher than the senior female students? This asks whether a population difference is significant.'],
                        ['5. Form H₀ and H₁', 'The null hypothesis is the initial claim. The alternative hypothesis states the significant difference, effect, change, or relationship being investigated.']
                    ],
                    formula: '$$H_0:\\text{Null Hypothesis}\\qquad H_1:\\text{Alternative Hypothesis}$$',
                    takeaway: 'Start with the population claim, identify the parameter, then state the null hypothesis and alternative hypothesis clearly.'
                },
            2: {
                    title: 'DISCUSSION: LEVEL OF SIGNIFICANCE (α)',
                    intro: 'The level of significance, written as α, is the maximum probability of rejecting a true null hypothesis that the researcher is willing to tolerate. It is selected before the hypothesis test is evaluated.',
                    steps: [
                        ['1. Set α', 'Common choices are 0.10, 0.05, and 0.01. A smaller α requires stronger evidence against H₀.'],
                        ['2. Understand Type I error', 'Rejecting a true H₀ is a Type I error. The significance level α controls this error rate.'],
                        ['3. Connect α to the tail', 'For a two-tailed test, the total α is divided between both tails. For a one-tailed test, the rejection region is placed in one tail.'],
                        ['4. Use critical values or p-values', 'A test statistic beyond the critical boundary, or a p-value less than or equal to α, provides evidence for rejecting H₀.'],
                        ['5. State the decision', 'Say “reject H₀” or “fail to reject H₀.” Avoid saying that H₀ is proven true.']
                    ],
                    formula: '$$p\\text{-value} \\le \\alpha \\;\\Rightarrow\\; \\text{Reject }H_0$$',
                    takeaway: 'α is a decision threshold, not the probability that H₀ is true.'
                },
                3: {
                    title: 'DISCUSSION: HYPOTHESIS TESTING',
                    intro: 'A hypothesis test uses sample evidence to decide whether a population claim is sufficiently inconsistent with the null hypothesis. The calculation and decision should follow a clear sequence.',
                    steps: [
                        ['1. State H₀ and H₁', 'Translate the research problem into mathematical hypotheses and identify the test direction.'],
                        ['2. Choose α', 'Use the significance level given in the problem, commonly 0.05.'],
                        ['3. Select the test statistic', 'Use a Z procedure when its assumptions are appropriate; use a t procedure when population variability is estimated from the sample under the stated conditions.'],
                        ['4. Calculate the statistic', 'Standardize the sample result by comparing it with the hypothesized population value.'],
                        ['5. Decide and conclude', 'Compare the statistic with the critical region or compare the p-value with α, then write the conclusion in the context of the original problem.']
                    ],
                    formula: '$$Z=\\frac{\\bar{x}-\\mu_0}{\\sigma/\\sqrt{n}}\\qquad t=\\frac{\\bar{x}-\\mu_0}{s/\\sqrt{n}}$$',
                    takeaway: 'A statistical decision is only meaningful when it is followed by a plain-language conclusion tied to the research question.'
                },
                4: {
                    title: 'DISCUSSION: CORRELATION ANALYSIS',
                    intro: 'Correlation describes the direction and strength of a linear relationship between two quantitative variables. Pearson’s correlation coefficient r ranges from -1 to +1.',
                    steps: [
                        ['1. Inspect the variables', 'Identify X and Y and consider whether a linear relationship is reasonable.'],
                        ['2. Read the sign', 'A positive r indicates that larger values of one variable tend to accompany larger values of the other; a negative r indicates the opposite direction.'],
                        ['3. Read the magnitude', 'Values of r closer to ±1 indicate stronger linear association; values closer to 0 indicate weaker linear association.'],
                        ['4. Interpret in context', 'Describe both direction and strength using the variables in the problem.'],
                        ['5. Remember causation', 'Correlation alone does not establish that one variable causes the other.']
                    ],
                    formula: '$$r=\\frac{\\sum (x-\\bar{x})(y-\\bar{y})}{\\sqrt{\\sum(x-\\bar{x})^2\\sum(y-\\bar{y})^2}}$$',
                    takeaway: 'Do not interpret the sign without the magnitude, and do not turn correlation into a causal claim.'
                },
                5: {
                    title: 'DISCUSSION: SCATTER PLOT & LINE OF BEST FIT',
                    intro: 'A scatter plot displays paired observations and helps us see the form, direction, and strength of a relationship. A line of best fit summarizes a linear trend and can be used for prediction within an appropriate context.',
                    steps: [
                        ['1. Plot the data', 'Place the explanatory variable on X and the response variable on Y.'],
                        ['2. Look for a pattern', 'Check whether points generally rise, fall, or show little linear structure.'],
                        ['3. Interpret the slope', 'In the model Y = mx + b, m describes the expected change in Y for a one-unit increase in X.'],
                        ['4. Interpret the intercept', 'b is the predicted Y value when X = 0, if X = 0 is meaningful for the context.'],
                        ['5. Use prediction carefully', 'Predictions are most defensible within the observed range; extrapolation beyond the data can be unreliable.']
                    ],
                    formula: '$$Y=mx+b$$',
                    takeaway: 'A regression equation summarizes a trend; it does not automatically prove causation.'
                },
                6: {
                    title: 'DISCUSSION: ASSESSMENT & COURSE REVIEW',
                    intro: 'This assessment checks whether you can connect the major ideas from the courseware: hypotheses, significance levels, testing decisions, correlation, and regression.',
                    steps: [
                        ['1. Read carefully', 'Identify the parameter, claim, and direction before selecting an answer.'],
                        ['2. Recall the decision rule', 'Keep α, critical values, and p-values conceptually separate and apply the rule requested by the problem.'],
                        ['3. Interpret r correctly', 'Use both sign and magnitude when describing correlation.'],
                        ['4. Interpret Y = mx + b', 'Know what the slope and intercept mean in the given context.'],
                        ['5. Review after submission', 'Use the result to identify which concept needs another pass before attempting the assessment again.']
                    ],
                    formula: '$$\\text{Evidence}\\;\\longrightarrow\\;\\text{Statistical decision}\\;\\longrightarrow\\;\\text{Contextual conclusion}$$',
                    takeaway: 'The goal is not just to calculate. The goal is to explain what the statistical result means.'
                }
            };
            const l = lessons[num] || lessons[1];
            return `<section class="lesson-panel mb-5">
                <div class="flex items-center justify-between gap-3 mb-2">
                    <h3 class="text-base md:text-lg">${l.title}</h3>
                    <span class="text-[10px] font-orbitron text-cyan-400/70 tracking-widest">DETAILED LESSON</span>
                </div>
                <p class="text-xs md:text-sm text-cyan-100/90 leading-relaxed mb-4">${l.intro}</p>
                <div class="math-display">${l.formula}</div>
                <div class="space-y-3 mt-4">${l.steps.map(x => `<div class="lesson-step"><div class="font-orbitron text-[11px] text-cyan-300 font-bold">${x[0]}</div><div class="text-xs text-cyan-100/80 leading-relaxed mt-1">${x[1]}</div></div>`).join('')}</div>
                <div class="mt-4 p-3 rounded-lg bg-cyan-950/50 border border-cyan-500/20 text-xs text-cyan-200"><strong class="text-cyan-300">KEY TAKEAWAY:</strong> ${l.takeaway}</div>
            </section>`;
        }


        function setThemeColor(themeName) {
            state.theme = themeName;
            const root = document.documentElement;
            if (themeName === 'cyan') {
                root.style.setProperty('--cyber-bg', '#040b14');
                root.style.setProperty('--cyber-card', '#0a1728');
                root.style.setProperty('--cyber-border', 'rgba(0, 229, 255, 0.25)');
                root.style.setProperty('--cyber-accent', '#00f0ff');
                root.style.setProperty('--cyber-glow', '#0088ff');
                root.style.setProperty('--cyber-dark', '#030810');
                root.style.setProperty('--cyber-text', '#c2e9ff');
            } else if (themeName === 'emerald') {
                root.style.setProperty('--cyber-bg', '#04140b');
                root.style.setProperty('--cyber-card', '#0a2817');
                root.style.setProperty('--cyber-border', 'rgba(0, 255, 136, 0.25)');
                root.style.setProperty('--cyber-accent', '#00ff88');
                root.style.setProperty('--cyber-glow', '#00aa55');
                root.style.setProperty('--cyber-dark', '#031006');
                root.style.setProperty('--cyber-text', '#c2ffdf');
            } else if (themeName === 'purple') {
                root.style.setProperty('--cyber-bg', '#0f0414');
                root.style.setProperty('--cyber-card', '#1a0a28');
                root.style.setProperty('--cyber-border', 'rgba(200, 0, 255, 0.25)');
                root.style.setProperty('--cyber-accent', '#e000ff');
                root.style.setProperty('--cyber-glow', '#8800ff');
                root.style.setProperty('--cyber-dark', '#080310');
                root.style.setProperty('--cyber-text', '#f2c2ff');
            } else if (themeName === 'amber') {
                root.style.setProperty('--cyber-bg', '#140c04');
                root.style.setProperty('--cyber-card', '#281a0a');
                root.style.setProperty('--cyber-border', 'rgba(255, 170, 0, 0.25)');
                root.style.setProperty('--cyber-accent', '#ffaa00');
                root.style.setProperty('--cyber-glow', '#cc6600');
                root.style.setProperty('--cyber-dark', '#100703');
                root.style.setProperty('--cyber-text', '#ffea80');
            }
        }

        let audioCtx = null;

        function initAudio() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
        }

        function playSound(type) {
            if (!state.soundEnabled) return;
            try {
                initAudio();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);
                const now = audioCtx.currentTime;

                if (type === 'click') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(800, now);
                    osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
                    osc.start(now);
                    osc.stop(now + 0.05);
                } else if (type === 'transition') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(300, now);
                    osc.frequency.exponentialRampToValueAtTime(900, now + 0.2);
                    gain.gain.setValueAtTime(0.1, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
                    osc.start(now);
                    osc.stop(now + 0.2);
                } else if (type === 'success') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(523.25, now);
                    osc.frequency.setValueAtTime(659.25, now + 0.1);
                    osc.frequency.setValueAtTime(783.99, now + 0.2);
                    gain.gain.setValueAtTime(0.15, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
                    osc.start(now);
                    osc.stop(now + 0.35);
                } else if (type === 'fail') {
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(250, now);
                    osc.frequency.setValueAtTime(180, now + 0.15);
                    gain.gain.setValueAtTime(0.15, now);

                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                    osc.start(now);
                    osc.stop(now + 0.3);
                }
            } catch (e) {}
        }

        function handleAvatarUpload(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(evt) {
                    state.avatarDataUrl = evt.target.result;
                    const preview = document.getElementById('initAvatarPreview');
                    if (preview) {
                        preview.innerHTML = `<img src="${state.avatarDataUrl}" class="w-full h-full object-cover">`;
                    }
                };
                reader.readAsDataURL(file);
            }
        }

        function completeProfileSetup() {
            const nameVal = document.getElementById('initNameInput').value.trim();
            if (!nameVal) { alert('Please enter your full name.'); return; }
            state.userName = nameVal;
            const id=makeProfileId();
            localStorage.setItem('EASC_currentProfileId',id);
            const profiles=getSavedProfiles();
            profiles.push({id,name:state.userName,avatarDataUrl:state.avatarDataUrl||'',createdAt:new Date().toISOString(),lastUsed:new Date().toISOString()});
            saveSavedProfiles(profiles);
            // New profile starts with a clean learning state.
            state.currentStage='title'; state.currentModule=0;
            Object.keys(state.progress).forEach(k=>{state.progress[k]={completed:false,score:0};});
            applyProfileToHeader();
            playSound('success');
            document.getElementById('stageInit').classList.add('hidden');
            document.getElementById('stageTitle').classList.remove('hidden');
            renderAllMath();
            if(window.EASC_saveProgress) window.EASC_saveProgress(false);
        }

        function startLearningTransition() {
            playSound('transition');
            document.getElementById('stageTitle').classList.add('hidden');
            document.getElementById('stageMenu').classList.remove('hidden');
            document.getElementById('bottomNav').classList.remove('hidden');
            state.currentStage = 'menu';
            updateUIProgress();
            renderAllMath();
        }

        function goToMenu() {
            playSound('transition');
            document.getElementById('stageTitle').classList.add('hidden');
            document.getElementById('stageModule').classList.add('hidden');
            document.getElementById('stageMenu').classList.remove('hidden');
            document.getElementById('bottomNav').classList.remove('hidden');
            state.currentStage = 'menu';
            updateUIProgress();
            renderAllMath();
        }

        function openModule(moduleNum) {
            playSound('click');
            state.currentModule = moduleNum;
            document.getElementById('stageMenu').classList.add('hidden');
            document.getElementById('stageModule').classList.remove('hidden');
            state.currentStage = 'module';

            const container = document.getElementById('moduleContainer');
            const titleHeader = document.getElementById('moduleTitleHeader');

            if (moduleNum === 1) {
                titleHeader.innerText = "MODULE 01: NULL AND ALTERNATIVE HYPOTHESES";
                renderModule1(container);
            } else if (moduleNum === 2) {
                titleHeader.innerText = "MODULE 02: LEVEL OF SIGNIFICANCE";
                renderModule2(container);
            } else if (moduleNum === 3) {
                titleHeader.innerText = "MODULE 03: HYPOTHESIS TESTING";
                renderModule3(container);
            } else if (moduleNum === 4) {
                titleHeader.innerText = "MODULE 04: CORRELATION ANALYSIS";
                renderModule4(container);
            } else if (moduleNum === 5) {
                titleHeader.innerText = "MODULE 05: SCATTER PLOT & REGRESSION";
                renderModule5(container);
            } else if (moduleNum === 6) {
                titleHeader.innerText = "MODULE 06: ASSESSMENT QUIZ";
                renderModule6(container);
            }
            renderAllMath();
        }

        // Fun, interactive learning activity for each module. These are additive and do not replace existing lesson content.
        function funActivityCard(num) {
            const common = `class="w-full rounded-lg border p-2 text-xs easc-input" style="background:var(--easc-card);border-color:var(--easc-border);color:var(--easc-text)"`;
            if (num === 1) return `
                <div class="easc-activity-card p-5 rounded-2xl border-2 space-y-4" style="background:var(--easc-card2);border-color:var(--easc-accent)">
                    <div class="flex items-center justify-between gap-3"><div><div class="font-orbitron font-bold text-sm" style="color:var(--easc-accent)"><i class="fas fa-search mr-2"></i>ACTIVITY 01: HYPOTHESIS DETECTIVE</div><p class="text-xs easc-muted mt-1">Become a statistics detective. Read the clue and identify the correct alternative-hypothesis direction.</p></div><span class="px-2 py-1 rounded text-[9px] font-orbitron" style="background:var(--easc-card);color:var(--easc-accent)">FUN CHALLENGE</span></div>
                    <div class="p-3 rounded-xl" style="background:var(--easc-card);border:1px solid var(--easc-border)"><p class="text-xs leading-relaxed"><b>Case:</b> A school believes its new review program will <b>increase</b> the average mathematics score above 78.</p><p class="text-[11px] easc-muted mt-2">What should the alternative hypothesis be?</p></div>
                    <div class="grid sm:grid-cols-2 gap-2"><select id="fun1Answer" ${common}><option value="">Choose the detective answer...</option><option value="gt">H₁: μ &gt; 78</option><option value="eq">H₁: μ = 78</option><option value="lt">H₁: μ &lt; 78</option><option value="neq">H₁: μ ≠ 78</option></select><button onclick="checkFunActivity(1)" class="btn-cyber px-4 py-2 rounded text-xs font-orbitron">CHECK CLUE</button></div>
                    <div id="fun1Feedback" class="text-xs font-orbitron"></div>
                </div>`;
            if (num === 2) return `
                <div class="easc-activity-card p-5 rounded-2xl border-2 space-y-4" style="background:var(--easc-card2);border-color:var(--easc-accent)">
                    <div class="font-orbitron font-bold text-sm" style="color:var(--easc-accent)"><i class="fas fa-bullseye mr-2"></i>ACTIVITY 02: ALPHA TARGET RANGE</div><p class="text-xs easc-muted">You are the test designer. Choose the significance level that gives the strongest evidence requirement.</p>
                    <div class="grid sm:grid-cols-3 gap-2"><button onclick="checkFunActivity(2,'0.10')" class="btn-cyber p-3 rounded text-xs">α = 0.10</button><button onclick="checkFunActivity(2,'0.05')" class="btn-cyber p-3 rounded text-xs">α = 0.05</button><button onclick="checkFunActivity(2,'0.01')" class="btn-cyber p-3 rounded text-xs">α = 0.01</button></div>
                    <div id="fun2Feedback" class="text-xs font-orbitron"></div>
                </div>`;
            if (num === 3) return `
                <div class="easc-activity-card p-5 rounded-2xl border-2 space-y-4" style="background:var(--easc-card2);border-color:var(--easc-accent)">
                    <div class="font-orbitron font-bold text-sm" style="color:var(--easc-accent)"><i class="fas fa-stopwatch mr-2"></i>ACTIVITY 03: Z-TEST SPEED LAB</div><p class="text-xs easc-muted">Beat the clock by computing the test statistic. Try the values, then reveal your decision.</p>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2"><input id="fun3x" value="82" type="number" step="0.1" placeholder="x̄" ${common}><input id="fun3mu" value="78" type="number" step="0.1" placeholder="μ₀" ${common}><input id="fun3sd" value="10" type="number" step="0.1" placeholder="σ" ${common}><input id="fun3n" value="25" type="number" step="1" placeholder="n" ${common}></div>
                    <button onclick="checkFunActivity(3)" class="btn-cyber px-4 py-2 rounded text-xs font-orbitron">CALCULATE & DECIDE</button><div id="fun3Feedback" class="text-xs font-orbitron"></div>
                </div>`;
            if (num === 4) return `
                <div class="easc-activity-card p-5 rounded-2xl border-2 space-y-4" style="background:var(--easc-card2);border-color:var(--easc-accent)">
                    <div class="font-orbitron font-bold text-sm" style="color:var(--easc-accent)"><i class="fas fa-link mr-2"></i>ACTIVITY 04: CORRELATION MATCH</div><p class="text-xs easc-muted">Match the correlation coefficient to the best interpretation. Think about both direction and strength.</p>
                    <div class="grid sm:grid-cols-2 gap-2"><select id="fun4Answer" ${common}><option value="">Choose an interpretation...</option><option value="strongpos">Strong positive</option><option value="weakneg">Weak negative</option><option value="strongneg">Strong negative</option><option value="none">No linear correlation</option></select><button onclick="checkFunActivity(4)" class="btn-cyber px-4 py-2 rounded text-xs font-orbitron">MATCH IT</button></div>
                    <div class="p-3 rounded-xl text-center font-orbitron" style="background:var(--easc-card);border:1px solid var(--easc-border)">Mystery coefficient: <span style="color:var(--easc-accent);font-size:1.2rem">r = -0.92</span></div><div id="fun4Feedback" class="text-xs font-orbitron"></div>
                </div>`;
            if (num === 5) return `
                <div class="easc-activity-card p-5 rounded-2xl border-2 space-y-4" style="background:var(--easc-card2);border-color:var(--easc-accent)">
                    <div class="font-orbitron font-bold text-sm" style="color:var(--easc-accent)"><i class="fas fa-crystal-ball mr-2"></i>ACTIVITY 05: PREDICTION ARCADE</div><p class="text-xs easc-muted">Use the regression line from the interactive graph to predict Y. Enter an X value and compare your prediction.</p>
                    <div class="grid sm:grid-cols-3 gap-2"><input id="fun5x" type="number" value="150" step="1" placeholder="X value" ${common}><button onclick="checkFunActivity(5)" class="btn-cyber px-4 py-2 rounded text-xs font-orbitron">PREDICT Y</button><div id="fun5Feedback" class="text-xs font-orbitron flex items-center"></div></div>
                </div>`;
            return `
                <div class="easc-activity-card p-5 rounded-2xl border-2 space-y-4" style="background:var(--easc-card2);border-color:var(--easc-accent)">
                    <div class="font-orbitron font-bold text-sm" style="color:var(--easc-accent)"><i class="fas fa-lock-open mr-2"></i>ACTIVITY 06: STATISTICS ESCAPE ROOM</div><p class="text-xs easc-muted">Final challenge! Solve three rapid clues to unlock the escape badge. This is an additional warm-up before the existing assessment.</p>
                    <div class="grid gap-2"><select id="fun6a" ${common}><option value="">Clue 1: Which hypothesis contains equality?</option><option value="h0">H₀</option><option value="h1">H₁</option></select><select id="fun6b" ${common}><option value="">Clue 2: What does r measure?</option><option value="corr">Linear association</option><option value="mean">Only the mean</option></select><select id="fun6c" ${common}><option value="">Clue 3: In Y = mx + b, what is b?</option><option value="int">Y-intercept</option><option value="slope">Slope</option></select></div><button onclick="checkFunActivity(6)" class="btn-cyber px-4 py-2 rounded text-xs font-orbitron">UNLOCK ESCAPE ROOM</button><div id="fun6Feedback" class="text-xs font-orbitron"></div>
                </div>`;
        }

        function checkFunActivity(num, value) {
            const setFeedback=(id,msg,ok)=>{const e=document.getElementById(id);if(e){e.innerHTML=msg;e.style.color=ok?'#16a34a':'#dc2626'}};
            if(num===1){const v=document.getElementById('fun1Answer')?.value; const ok=v==='gt'; setFeedback('fun1Feedback',ok?'✓ Detective solved it! “Increase” points to H₁: μ > 78.':'✗ Re-read the clue: “increase” means greater than.',ok);}
            else if(num===2){const ok=value==='0.01';setFeedback('fun2Feedback',ok?'✓ Bullseye! α = 0.01 requires the strongest evidence of these choices.':'Try again. A smaller α sets a stricter rejection threshold.',ok);}
            else if(num===3){const x=+document.getElementById('fun3x')?.value,mu=+document.getElementById('fun3mu')?.value,sd=+document.getElementById('fun3sd')?.value,n=+document.getElementById('fun3n')?.value;const z=(x-mu)/(sd/Math.sqrt(n));const ok=Number.isFinite(z);setFeedback('fun3Feedback',ok?`✓ Z = ${z.toFixed(3)}. At α = 0.05 for a two-tailed test, ${Math.abs(z)>=1.96?'reject':'fail to reject'} H₀.`:'✗ Enter valid numeric values.',ok);}
            else if(num===4){const ok=document.getElementById('fun4Answer')?.value==='strongneg';setFeedback('fun4Feedback',ok?'✓ Perfect match! r = −0.92 indicates a strong negative linear relationship.':'✗ Look at both the negative sign and the magnitude near 1.',ok);}
            else if(num===5){const x=+document.getElementById('fun5x')?.value;let m=0,b=0;const ms=document.getElementById('m5SlopeSlider');const bi=document.getElementById('m5InterceptSlider');if(ms)m=parseFloat(ms.value);if(bi)b=parseFloat(bi.value);if(!Number.isFinite(m))m=1;if(!Number.isFinite(b))b=0;const y=m*x+b;setFeedback('fun5Feedback',Number.isFinite(y)?`Predicted Y ≈ <b>${y.toFixed(2)}</b> using Y = ${m.toFixed(2)}X + ${b.toFixed(2)}.`:'Enter a valid X value.',Number.isFinite(y));}
            else {const ok=document.getElementById('fun6a')?.value==='h0'&&document.getElementById('fun6b')?.value==='corr'&&document.getElementById('fun6c')?.value==='int';setFeedback('fun6Feedback',ok?'✓ ESCAPED! All three clues are correct.':'✗ One or more locks remain. Check the three clues again.',ok);}
            if(window.EASC_saveProgress) window.EASC_saveProgress(false);
        }

        function module1Activity5(){
            return `
            <div class="easc-activity-card p-5 rounded-2xl border-2 space-y-4" style="background:var(--easc-card2);border-color:var(--easc-accent)">
                <div class="flex items-center justify-between gap-3">
                    <div><div class="font-orbitron font-bold text-sm" style="color:var(--easc-accent)"><i class="fas fa-microscope mr-2"></i>ACTIVITY 01: HYPOTHESIS LAB — 5 CHALLENGES</div>
                    <p class="text-xs easc-muted mt-1">Read each research situation and identify the correct hypothesis or error. Complete all five to earn the activity check.</p></div>
                    <span class="px-2 py-1 rounded text-[9px] font-orbitron" style="background:var(--easc-card);color:var(--easc-accent)">5 ITEMS</span>
                </div>
                <div class="space-y-3">
                    <div><p class="text-xs font-semibold">1. A researcher asks: “Is the mean height of Grade 11 students different from 66 inches?”</p><select id="m1a1" class="w-full rounded-lg p-2 text-xs mt-1" style="background:var(--easc-card);color:var(--easc-text);border:1px solid var(--easc-border)"><option value="">Choose...</option><option value="a">H₀: μ = 66; H₁: μ ≠ 66</option><option value="b">H₀: μ ≠ 66; H₁: μ = 66</option><option value="c">H₀: μ > 66; H₁: μ = 66</option></select></div>
                    <div><p class="text-xs font-semibold">2. A school claims its new program increases the mean mathematics score above 75. What is H₁?</p><select id="m1a2" class="w-full rounded-lg p-2 text-xs mt-1" style="background:var(--easc-card);color:var(--easc-text);border:1px solid var(--easc-border)"><option value="">Choose...</option><option value="a">H₁: μ = 75</option><option value="b">H₁: μ > 75</option><option value="c">H₁: μ < 75</option></select></div>
                    <div><p class="text-xs font-semibold">3. Which statement describes the null hypothesis?</p><select id="m1a3" class="w-full rounded-lg p-2 text-xs mt-1" style="background:var(--easc-card);color:var(--easc-text);border:1px solid var(--easc-border)"><option value="">Choose...</option><option value="a">Initial claim; no significant difference, change, or relationship</option><option value="b">Research claim that an effect definitely exists</option><option value="c">A statement about the sample only</option></select></div>
                    <div><p class="text-xs font-semibold">4. A test rejects H₀ even though H₀ is actually true. What error occurred?</p><select id="m1a4" class="w-full rounded-lg p-2 text-xs mt-1" style="background:var(--easc-card);color:var(--easc-text);border:1px solid var(--easc-border)"><option value="">Choose...</option><option value="a">Type I error</option><option value="b">Type II error</option><option value="c">No error</option></select></div>
                    <div><p class="text-xs font-semibold">5. A test fails to reject H₀ even though H₀ is false. What error occurred?</p><select id="m1a5" class="w-full rounded-lg p-2 text-xs mt-1" style="background:var(--easc-card);color:var(--easc-text);border:1px solid var(--easc-border)"><option value="">Choose...</option><option value="a">Type I error</option><option value="b">Type II error</option><option value="c">Sampling frame error</option></select></div>
                </div>
                <button onclick="checkModule1Activity()" class="btn-cyber px-5 py-2 rounded-lg text-xs font-orbitron">CHECK 5 CHALLENGES</button>
                <div id="m1ActivityFeedback" class="text-xs font-orbitron"></div>
            </div>`;
        }
        function checkModule1Activity(){
            const ans=['a','b','a','a','b']; let score=0;
            ans.forEach((v,i)=>{if(document.getElementById('m1a'+(i+1))?.value===v)score++;});
            const el=document.getElementById('m1ActivityFeedback');
            if(el){el.innerHTML=score===5?'✓ Excellent! You mastered all 5 Module 1 challenges.':'You scored '+score+'/5. Review the lesson and try again.';el.style.color=score===5?'#16a34a':'#dc2626';}
            if(window.EASC_saveProgress) window.EASC_saveProgress(false);
        }

function renderModule1(container) {
            container.innerHTML = detailedLesson(1) + `
<div id="module1VideoLesson" class="easc-video-wrap">
  <div class="cyber-card rounded-xl p-4 border border-cyan-500/30">
    <div class="flex items-center justify-between gap-3 mb-3">
      <div><h3 class="font-orbitron text-cyan-300 font-bold text-sm md:text-base">VIDEO LESSON — MODULE 1</h3><p class="text-xs text-cyan-200/75 mt-1">Watch the lesson directly inside EAS•C.</p></div>
      <span class="text-[10px] uppercase tracking-widest text-cyan-400/70">YouTube</span>
    </div>
    <div class="easc-video-frame">
      <iframe src="https://www.youtube.com/embed/8IxJaU06qJA?rel=1&modestbranding=1" title="Module 1 Video Lesson" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<div class="mt-2 text-[11px] text-cyan-300/70 leading-relaxed">
  <strong>Playback note:</strong> YouTube requires a valid web/app origin for some embedded players.
  If this HTML is opened directly as a <code>file://</code> page and Error 153 appears, the same file
  should be tested through a local web server or loaded in the Android WebView with a valid base URL.
</div>

    </div>
    <div class="easc-video-status">The video plays inside EAS•C. Internet access is required for YouTube streaming.</div>
    <div class="mt-4">
      <div class="flex items-center justify-between mb-2"><h4 class="font-orbitron text-cyan-300 font-bold text-xs">SUGGESTED VIDEOS</h4><span class="text-[10px] text-cyan-400/60">Inside the player</span></div>
      <div class="easc-video-suggestions">
        <div class="easc-video-suggestion"><div class="sv-icon">🧪</div><div class="sv-title">Hypothesis Testing</div><div class="sv-note">Current Module 1 video</div></div>
        <div class="easc-video-suggestion"><div class="sv-icon">H₀ / H₁</div><div class="sv-title">Null &amp; Alternative Hypothesis</div><div class="sv-note">Related YouTube videos appear in the player</div></div>
        <div class="easc-video-suggestion"><div class="sv-icon">⚠️</div><div class="sv-title">Type I &amp; Type II Errors</div><div class="sv-note">Related YouTube videos appear in the player</div></div>
        <div class="easc-video-suggestion"><div class="sv-icon">📊</div><div class="sv-title">Z-Test &amp; Hypothesis Testing</div><div class="sv-note">Related YouTube videos appear in the player</div></div>
      </div>
    </div>
  </div>
</div>
` + funActivityCard(1) + `
                <div class="space-y-6">
                    <div class="p-5 rounded-xl border space-y-4" style="background:var(--easc-card2);border-color:var(--easc-border)">
                    <h4 class="font-orbitron font-bold text-sm" style="color:var(--easc-accent)">HYPOTHESIS TESTING: DEFINITIONS AND DISCUSSION</h4>
                    <p class="text-xs leading-relaxed"><strong>Hypothesis testing</strong> is a decision-making process for evaluating claims about a population.</p>
                    <p class="text-xs leading-relaxed">It is also physically testing an assumption that we can make about a population.</p>
                    <p class="text-xs leading-relaxed"><strong>A hypothesis</strong> is an assumption or conjecture about a population parameter which may or may not be true.</p>
                    <div class="grid md:grid-cols-2 gap-3">
                        <div class="p-3 rounded-lg border" style="border-color:var(--easc-border)"><b>Example 1</b><p class="text-xs mt-1">Is the mean height of Grade 11 students differ from 66 inches?</p></div>
                        <div class="p-3 rounded-lg border" style="border-color:var(--easc-border)"><b>Example 2</b><p class="text-xs mt-1">Is the proportion of senior male students height significantly higher than the senior female students?</p></div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-3">
                        <div class="p-4 rounded-xl border" style="background:var(--easc-card);border-color:var(--easc-border)">
                            <h5 class="font-orbitron font-bold text-xs" style="color:var(--easc-accent)">NULL HYPOTHESIS (H₀)</h5>
                            <p class="text-xs mt-2 leading-relaxed">It is the initial claim. It shows no significant difference, no changes happened, no relationship between two parameters. The independent variable has no effect on the dependent variable.</p>
                            <p class="text-xs mt-2"><strong>Symbol used:</strong> Equality symbol (=)</p>
                        </div>
                        <div class="p-4 rounded-xl border" style="background:var(--easc-card);border-color:var(--easc-border)">
                            <h5 class="font-orbitron font-bold text-xs" style="color:var(--easc-accent)">ALTERNATIVE HYPOTHESIS (H₁)</h5>
                            <p class="text-xs mt-2 leading-relaxed">It shows that there is a significant difference, an effect, change, relationship between a parameter and a specific value. The independent variable has an effect on the dependent variable.</p>
                            <p class="text-xs mt-2"><strong>Symbols used:</strong> Not equal (≠), greater than (&gt;), or less than (&lt;).</p>
                        </div>
                    </div>
                    <div class="p-4 rounded-xl border" style="background:var(--easc-card);border-color:var(--easc-border)">
                        <h5 class="font-orbitron font-bold text-xs" style="color:var(--easc-accent)">TYPE I AND TYPE II ERROR</h5>
                        <div class="grid md:grid-cols-2 gap-3 mt-2">
                            <p class="text-xs leading-relaxed"><strong>Type I Error (α):</strong> rejecting the null hypothesis when the null hypothesis is actually true. In simple terms, we conclude that a significant effect or difference exists when there actually is none.</p>
                            <p class="text-xs leading-relaxed"><strong>Type II Error (β):</strong> failing to reject the null hypothesis when the null hypothesis is actually false. In simple terms, a real effect or difference exists, but the test does not detect sufficient evidence for it.</p>
                        </div>
                    </div>
                </div>

                <div class="easc-activity-card p-5 rounded-2xl border-2 space-y-4" style="background:var(--easc-card2);border-color:var(--easc-accent)">
                    <div class="flex items-center justify-between gap-3"><div><div class="font-orbitron font-bold text-sm" style="color:var(--easc-accent)"><i class="fas fa-microscope mr-2"></i>ACTIVITY 01: HYPOTHESIS LAB — 5 CHALLENGES</div><p class="text-xs easc-muted mt-1">Read each research situation and choose the best answer.</p></div><span class="px-2 py-1 rounded text-[9px] font-orbitron" style="background:var(--easc-card);color:var(--easc-accent)">5 ITEMS</span></div>
                    <div class="space-y-3">
                        <div><p class="text-xs font-semibold">1. “Is the mean height of Grade 11 students different from 66 inches?”</p><select id="m1a1" class="w-full rounded-lg p-2 text-xs mt-1" style="background:var(--easc-card);color:var(--easc-text);border:1px solid var(--easc-border)"><option value="">Choose...</option><option value="a">H₀: μ = 66; H₁: μ ≠ 66</option><option value="b">H₀: μ ≠ 66; H₁: μ = 66</option><option value="c">H₀: μ > 66; H₁: μ = 66</option></select></div>
                        <div><p class="text-xs font-semibold">2. A school claims its new program increases the mean score above 75. What is H₁?</p><select id="m1a2" class="w-full rounded-lg p-2 text-xs mt-1" style="background:var(--easc-card);color:var(--easc-text);border:1px solid var(--easc-border)"><option value="">Choose...</option><option value="a">H₁: μ = 75</option><option value="b">H₁: μ > 75</option><option value="c">H₁: μ < 75</option></select></div>
                        <div><p class="text-xs font-semibold">3. Which statement describes H₀?</p><select id="m1a3" class="w-full rounded-lg p-2 text-xs mt-1" style="background:var(--easc-card);color:var(--easc-text);border:1px solid var(--easc-border)"><option value="">Choose...</option><option value="a">Initial claim; no significant difference, change, or relationship</option><option value="b">Research claim that an effect definitely exists</option><option value="c">A statement about the sample only</option></select></div>
                        <div><p class="text-xs font-semibold">4. A test rejects H₀ even though H₀ is true. Which error?</p><select id="m1a4" class="w-full rounded-lg p-2 text-xs mt-1" style="background:var(--easc-card);color:var(--easc-text);border:1px solid var(--easc-border)"><option value="">Choose...</option><option value="a">Type I error</option><option value="b">Type II error</option><option value="c">No error</option></select></div>
                        <div><p class="text-xs font-semibold">5. A test fails to reject H₀ even though H₀ is false. Which error?</p><select id="m1a5" class="w-full rounded-lg p-2 text-xs mt-1" style="background:var(--easc-card);color:var(--easc-text);border:1px solid var(--easc-border)"><option value="">Choose...</option><option value="a">Type I error</option><option value="b">Type II error</option><option value="c">Sampling frame error</option></select></div>
                    </div>
                    <button onclick="checkModule1Activity()" class="btn-cyber px-5 py-2 rounded-lg text-xs font-orbitron">CHECK 5 CHALLENGES</button><div id="m1ActivityFeedback" class="text-xs font-orbitron"></div>
                </div>

                    <div class="p-5 rounded-xl bg-cyan-950/40 border border-cyan-500/45 space-y-4">
                        <h4 class="font-orbitron font-bold text-cyan-200 text-sm flex items-center">
                            <i class="fas fa-list-ol text-cyan-400 mr-2"></i> Guided Problem Practice (From Video Lesson)
                        </h4>

                        <!-- Problem 1 -->
                        <div class="p-3 rounded-lg bg-cyber-dark border border-cyan-500/30 space-y-2">
                            <div class="font-bold text-xs text-cyan-300">Problem 1:</div>
                            <p class="text-xs text-cyan-100 italic">"A researcher thinks that if median income of a certain community is increased, then the consumption of meat will also increase. Suppose that the average consumption of meat is 45 kilos per year. State the null and alternative hypotheses."</p>
                            <div class="p-2.5 rounded bg-cyan-950/70 border border-cyan-500/30 space-y-1 font-mono text-xs">
                                <div class="text-cyan-200"><strong>$\\text{H}_0$:</strong> $\\mu \\le 45$ (or $\\mu = 45$)</div>
                                <div class="text-cyan-300"><strong>$\\text{H}_1$:</strong> $\\mu > 45$ (Consumption increases)</div>
                                <div class="text-[11px] text-cyan-400/80 font-sans mt-1"><em>Explanation:</em> The phrase "will also increase" indicates a right-tailed directional test where the parameter is greater than the hypothesized value.</div>
                            </div>
                        </div>

                        <!-- Problem 2 -->
                        <div class="p-3 rounded-lg bg-cyber-dark border border-cyan-500/30 space-y-2">
                            <div class="font-bold text-xs text-cyan-300">Problem 2:</div>
                            <p class="text-xs text-cyan-100 italic">"The average grade point average (GPA) of graduating high school seniors is 2.76. A school administrator believes that the GPA of students in the science magnet program is different from 2.76. State the null and alternative hypotheses."</p>
                            <div class="p-2.5 rounded bg-cyan-950/70 border border-cyan-500/30 space-y-1 font-mono text-xs">
                                <div class="text-cyan-200"><strong>$\\text{H}_0$:</strong> $\\mu = 2.76$</div>
                                <div class="text-cyan-300"><strong>$\\text{H}_1$:</strong> $\\mu \\neq 2.76$ (GPA is different)</div>
                                <div class="text-[11px] text-cyan-400/80 font-sans mt-1"><em>Explanation:</em> The keyword "different from" denotes a two-tailed test because the GPA can be either higher or lower than 2.76.</div>
                            </div>
                        </div>

                        <!-- Problem 3 -->
                        <div class="p-3 rounded-lg bg-cyber-dark border border-cyan-500/30 space-y-2">
                            <div class="font-bold text-xs text-cyan-300">Problem 3:</div>
                            <p class="text-xs text-cyan-100 italic">"A manufacturer of energy-saving light bulbs claims that the average life of these bulbs is 1,200 hours. A consumer advocacy group wants to test if the average life is less than 1,200 hours. State the null and alternative hypotheses."</p>
                            <div class="p-2.5 rounded bg-cyan-950/70 border border-cyan-500/30 space-y-1 font-mono text-xs">
                                <div class="text-cyan-200"><strong>$\\text{H}_0$:</strong> $\\mu \\ge 1200$ (or $\\mu = 1200$)</div>
                                <div class="text-cyan-300"><strong>$\\text{H}_1$:</strong> $\\mu < 1200$ (Average life is less than 1,200 hours)</div>
                                <div class="text-[11px] text-cyan-400/80 font-sans mt-1"><em>Explanation:</em> The phrase "less than" indicates a left-tailed directional test.</div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40">
                        <h4 class="font-orbitron font-bold text-cyan-200 text-base mb-3">
                            <i class="fas fa-vial text-cyan-400 mr-2"></i> Interactive Hypothesis Scenario Builder
                        </h4>
                        <label class="block text-xs font-orbitron text-cyan-300 mb-2">Select Research Topic Scenario:</label>
                        <select id="m1ScenarioSelect" onchange="updateM1Scenario()" class="w-full bg-cyan-950 border border-cyan-500/50 rounded-lg p-2 text-xs text-cyan-100 font-orbitron focus:outline-none focus:border-cyan-400 mb-4">
                            <option value="1">1. Meat consumption increases above 45 kilos per year</option>
                            <option value="2">2. Science magnet program GPA is different from 2.76</option>
                            <option value="3">3. Light bulb average life is less than 1,200 hours</option>
                        </select>

                        <div id="m1ScenarioBox" class="p-4 rounded-lg bg-cyber-dark border border-cyan-500/30 space-y-2">
                        </div>
                    </div>

                    <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/50 space-y-3">
                        <h4 class="font-orbitron font-bold text-cyan-200 text-sm flex items-center">
                            <i class="fas fa-question-circle text-cyan-400 mr-2"></i> Guide Questions & Comprehension Check
                        </h4>
                        
                        <div class="space-y-3 text-xs">
                            <div>
                                <p class="text-cyan-100 font-semibold mb-1">Q1: In hypothesis testing, what symbol or relationship does the Null Hypothesis ($\\text{H}_0$) always include?</p>
                                <div class="space-y-1 pl-2">
                                    <label class="block cursor-pointer"><input type="radio" name="gq1" value="a" class="mr-2"> A) Inequality or strictly greater/less than ($>$, $<$)</label>
                                    <label class="block cursor-pointer"><input type="radio" name="gq1" value="b" class="mr-2"> B) Equality or null hypothesis ($=$, $\\le$, $\\ge$)</label>
                                    <label class="block cursor-pointer"><input type="radio" name="gq1" value="c" class="mr-2"> C) Correlation coefficients ($r$)</label>
                                </div>
                            </div>

                            <div>
                                <p class="text-cyan-100 font-semibold mb-1">Q2: When a problem specifies that a parameter is "different from" a target value, which test type is indicated for $\\text{H}_1$?</p>
                                <div class="space-y-1 pl-2">
                                    <label class="block cursor-pointer"><input type="radio" name="gq2" value="a" class="mr-2"> A) Right-tailed test ($>$)</label>
                                    <label class="block cursor-pointer"><input type="radio" name="gq2" value="b" class="mr-2"> B) Left-tailed test ($<$)</label>
                                    <label class="block cursor-pointer"><input type="radio" name="gq2" value="c" class="mr-2"> C) Two-tailed test ($\\neq$)</label>
                                </div>
                            </div>
                        </div>
                        <button onclick="checkGuideAnswers(1)" class="btn-cyber font-orbitron text-xs px-4 py-2 rounded text-cyan-100 mt-2">CHECK ANSWERS</button>
                        <div id="gqFeedback1" class="text-xs font-orbitron mt-1"></div>
                    </div>

                    <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40">
                        <h4 class="font-orbitron font-bold text-cyan-200 text-base mb-3">
                            <i class="fas fa-th-large text-cyan-400 mr-2"></i> Decision Matrix: Type I ($\\alpha$) vs Type II ($\\beta$) Error
                        </h4>
                        <div class="grid grid-cols-3 gap-2 text-center text-xs font-orbitron">
                            <div class="p-2 bg-transparent"></div>
                            <div class="p-2 bg-cyan-950 rounded border border-cyan-500/30 text-cyan-300">$\\text{H}_0$ is ACTUALLY TRUE</div>
                            <div class="p-2 bg-cyan-950 rounded border border-cyan-500/30 text-cyan-300">$\\text{H}_0$ is ACTUALLY FALSE</div>

                            <div class="p-2 bg-cyan-950 rounded border border-cyan-500/30 text-cyan-300 flex items-center justify-center">REJECT $\\text{H}_0$</div>
                            <div class="p-3 bg-red-950/60 rounded border border-red-500/50 text-red-200">
                                <div class="font-bold">TYPE I ERROR ($\\alpha$)</div>
                                <div class="text-[10px] opacity-80">False Positive</div>
                            </div>
                            <div class="p-3 bg-emerald-950/60 rounded border border-emerald-500/50 text-emerald-200">
                                <div class="font-bold">CORRECT DECISION</div>
                                <div class="text-[10px] opacity-80">Power ($1 - \\beta$)</div>
                            </div>

                            <div class="p-2 bg-cyan-950 rounded border border-cyan-500/30 text-cyan-300 flex items-center justify-center">FAIL TO REJECT $\\text{H}_0$</div>
                            <div class="p-3 bg-emerald-950/60 rounded border border-emerald-500/50 text-emerald-200">
                                <div class="font-bold">CORRECT DECISION</div>
                                <div class="text-[10px] opacity-80">Confidence ($1 - \\alpha$)</div>
                            </div>
                            <div class="p-3 bg-red-950/60 rounded border border-red-500/50 text-red-200">
                                <div class="font-bold">TYPE II ERROR ($\\beta$)</div>
                                <div class="text-[10px] opacity-80">False Negative</div>
                            </div>
                        </div>
                    </div>

                    <button onclick="markModuleComplete(1)" class="btn-cyber font-orbitron text-xs px-6 py-2.5 rounded-lg text-cyan-100 float-right">
                        <i class="fas fa-check-circle mr-1"></i> MARK MODULE COMPLETE
                    </button>
                </div>
            `;
            updateM1Scenario();
            renderAllMath();
        }

        function updateM1Scenario() {
            playSound('click');
            const val = document.getElementById('m1ScenarioSelect').value;
            const box = document.getElementById('m1ScenarioBox');
            if (!box) return;
            if (val === '1') {
                box.innerHTML = `
                    <div class="text-xs text-cyan-300 font-bold mb-1">Problem 1: Meat Consumption (Right-Tailed Test)</div>
                    <div class="text-xs text-emerald-400 font-mono"><strong class="text-cyan-200">$\\text{H}_0$:</strong> $\\mu \\le 45$ (Average meat consumption is at most 45 kilos)</div>
                    <div class="text-xs text-cyan-300 font-mono"><strong class="text-cyan-200">$\\text{H}_1$:</strong> $\\mu > 45$ (Average meat consumption increases above 45 kilos)</div>
                `;
            } else if (val === '2') {
                box.innerHTML = `
                    <div class="text-xs text-cyan-300 font-bold mb-1">Problem 2: Student GPA (Two-Tailed Test)</div>
                    <div class="text-xs text-emerald-400 font-mono"><strong class="text-cyan-200">$\\text{H}_0$:</strong> $\\mu = 2.76$ (Average GPA equals 2.76)</div>
                    <div class="text-xs text-cyan-300 font-mono"><strong class="text-cyan-200">$\\text{H}_1$:</strong> $\\mu \\neq 2.76$ (Average GPA is different from 2.76)</div>
                `;
            } else if (val === '3') {
                box.innerHTML = `
                    <div class="text-xs text-cyan-300 font-bold mb-1">Problem 3: Light Bulb Life (Left-Tailed Test)</div>
                    <div class="text-xs text-emerald-400 font-mono"><strong class="text-cyan-200">$\\text{H}_0$:</strong> $\\mu \\ge 1200$ (Average life is at least 1,200 hours)</div>
                    <div class="text-xs text-cyan-300 font-mono"><strong class="text-cyan-200">$\\text{H}_1$:</strong> $\\mu < 1200$ (Average life is less than 1,200 hours)</div>
                `;
            }
            renderAllMath();
        }

        function checkGuideAnswers(mod) {
            playSound('click');
            const fb = document.getElementById(`gqFeedback${mod}`);
            if (mod === 1) {
                const q1 = document.querySelector('input[name="gq1"]:checked');
                const q2 = document.querySelector('input[name="gq2"]:checked');
                if (q1 && q2 && q1.value === 'b' && q2.value === 'c') {
                    fb.className = "text-xs font-orbitron mt-1 text-emerald-400 font-bold";
                    fb.innerHTML = `<i class="fas fa-check-circle mr-1"></i> Excellent! Both answers are correct.`;
                    playSound('success');
                } else {
                    fb.className = "text-xs font-orbitron mt-1 text-red-400 font-bold";
                    fb.innerHTML = `<i class="fas fa-times-circle mr-1"></i> Incorrect. Review the lesson definitions and try again.`;
                    playSound('fail');
                }
            } else if (mod === 2) {
                const q1 = document.querySelector('input[name="m2_q1"]:checked');
                if (q1 && q1.value === 'b') {
                    fb.className = "text-xs font-orbitron mt-1 text-emerald-400 font-bold";
                    fb.innerHTML = `<i class="fas fa-check-circle mr-1"></i> Correct! $\\alpha = 0.05$ corresponds to a 5% risk of Type I error.`;
                    playSound('success');
                } else {
                    fb.className = "text-xs font-orbitron mt-1 text-red-400 font-bold";
                    fb.innerHTML = `<i class="fas fa-times-circle mr-1"></i> Incorrect. $\\alpha$ is the threshold probability of rejecting a true null hypothesis.`;
                    playSound('fail');
                }
            } else if (mod === 3) {
                const q1 = document.querySelector('input[name="m3_q1"]:checked');
                if (q1 && q1.value === 'a') {
                    fb.className = "text-xs font-orbitron mt-1 text-emerald-400 font-bold";
                    fb.innerHTML = `<i class="fas fa-check-circle mr-1"></i> Correct! Absolute value $|Z| \\ge 1.96$ crosses the critical threshold.`;
                    playSound('success');
                } else {
                    fb.className = "text-xs font-orbitron mt-1 text-red-400 font-bold";
                    fb.innerHTML = `<i class="fas fa-times-circle mr-1"></i> Incorrect. Rejection occurs when the test statistic falls in the critical tail region.`;
                    playSound('fail');
                }
            } else if (mod === 4) {
                const q1 = document.querySelector('input[name="m4_q1"]:checked');
                if (q1 && q1.value === 'b') {
                    fb.className = "text-xs font-orbitron mt-1 text-emerald-400 font-bold";
                    fb.innerHTML = `<i class="fas fa-check-circle mr-1"></i> Correct! Pearson's $r$ ranges strictly between -1 and +1.`;
                    playSound('success');
                } else {
                    fb.className = "text-xs font-orbitron mt-1 text-red-400 font-bold";
                    fb.innerHTML = `<i class="fas fa-times-circle mr-1"></i> Incorrect. Review the bounds of correlation coefficients.`;
                    playSound('fail');
                }
            } else if (mod === 5) {
                const q1 = document.querySelector('input[name="m5_q1"]:checked');
                if (q1 && q1.value === 'c') {
                    fb.className = "text-xs font-orbitron mt-1 text-emerald-400 font-bold";
                    fb.innerHTML = `<i class="fas fa-check-circle mr-1"></i> Correct! The slope ($m$) determines the steepness and direction of the best-fit line.`;
                    playSound('success');
                } else {
                    fb.className = "text-xs font-orbitron mt-1 text-red-400 font-bold";
                    fb.innerHTML = `<i class="fas fa-times-circle mr-1"></i> Incorrect. Re-examine the components of $Y = mx + b$.`;
                    playSound('fail');
                }
            }
            renderAllMath();
        }

        function renderModule2(container) {
            container.innerHTML = detailedLesson(2) + funActivityCard(2) + `<div id="module2VideoLesson" class="easc-video-wrap"><div class="cyber-card rounded-xl p-4 border border-cyan-500/30"><div class="flex items-center justify-between gap-3 mb-3"><div><h3 class="font-orbitron text-cyan-300 font-bold text-sm md:text-base">VIDEO LESSON — MODULE 2</h3><p class="text-xs text-cyan-200/75 mt-1">Level of Significance, α and Critical Regions</p></div><span class="text-[10px] uppercase tracking-widest text-cyan-400/70">YouTube</span></div><div class="easc-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/D3qFmPn1pgM?rel=0" title="Module 2 — Level of Significance" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe></div><div class="easc-video-status">Plays inside EAS•C. Internet access is required for YouTube streaming.</div></div></div>
                <div class="space-y-4">
                    <div class="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                        <h4 class="font-orbitron text-cyan-300 font-bold mb-2">Lesson Overview: Significance Level ($\\alpha$) & Critical Regions</h4>
                        <p class="text-xs text-cyan-200/90 leading-relaxed mb-3">
                            The significance level $\\alpha$ is the threshold set by researchers before conducting a test. Common values include $0.05$ ($5\\%$) and $0.01$ ($1\\%$). If our computed test statistic falls inside the rejection region (the outer tails defined by critical values), we reject $\\text{H}_0$.
                        </p>
                        <p class="text-xs text-cyan-300 font-bold mb-1">Real-Life Example:</p>
                        <p class="text-xs text-cyan-200/80">
                            In clinical trials for a new vaccine, setting $\\alpha = 0.01$ ensures there is only a 1% chance of claiming the vaccine is effective when it actually provides no protection.
                        </p>
                    </div>

                    <p class="text-xs text-cyan-200/80">
                        Adjust controls to see critical z-values and shaded rejection regions dynamically.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40">
                        <div>
                            <label class="block text-xs font-orbitron text-cyan-300 mb-1">Select Significance Level ($\\alpha$):</label>
                            <div class="flex space-x-2">
                                <button onclick="setM2Alpha(0.01)" id="btnAlpha01" class="btn-cyber font-orbitron text-xs px-3 py-1.5 rounded text-cyan-100 flex-1">$\\alpha = 0.01$</button>
                                <button onclick="setM2Alpha(0.05)" id="btnAlpha05" class="btn-cyber font-orbitron text-xs px-3 py-1.5 rounded text-cyan-100 flex-1">$\\alpha = 0.05$</button>
                                <button onclick="setM2Alpha(0.10)" id="btnAlpha10" class="btn-cyber font-orbitron text-xs px-3 py-1.5 rounded text-cyan-100 flex-1">$\\alpha = 0.10$</button>
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-orbitron text-cyan-300 mb-1">Tail Direction:</label>
                            <select id="m2TailSelect" onchange="drawM2Curve()" class="w-full bg-cyan-950 border border-cyan-500/50 rounded p-1.5 text-xs text-cyan-100 font-orbitron focus:outline-none">
                                <option value="two">Two-Tailed Test ($\\neq$)</option>
                                <option value="right">One-Tailed Right ($>$)</option>
                                <option value="left">One-Tailed Left ($<$)</option>
                            </select>
                        </div>
                    </div>

                    <div class="relative w-full h-64 border border-cyan-500/40 rounded-xl bg-cyber-dark overflow-hidden flex flex-col items-center justify-center p-2">
                        <canvas id="m2Canvas" class="w-full h-full"></canvas>
                    </div>

                    <div id="m2StatsBox" class="p-3 rounded-lg bg-cyan-950/50 border border-cyan-500/30 font-orbitron text-xs text-cyan-200 flex justify-around text-center">
                        <div>Alpha Level: <span id="m2DispAlpha" class="text-cyan-400 font-bold">0.05</span></div>
                        <div>Critical Z-Value(s): <span id="m2DispZ" class="text-cyan-400 font-bold">$\\pm 1.96$</span></div>
                        <div>Confidence Level: <span id="m2DispConf" class="text-cyan-400 font-bold">95%</span></div>
                    </div>

                    <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/50 space-y-3">
                        <h4 class="font-orbitron font-bold text-cyan-200 text-sm flex items-center">
                            <i class="fas fa-question-circle text-cyan-400 mr-2"></i> Guide Questions & Comprehension Check
                        </h4>
                        <div class="space-y-3 text-xs">
                            <div>
                                <p class="text-cyan-100 font-semibold mb-1">Q1: What does a two-tailed significance test with $\\alpha = 0.05$ imply about the rejection region?</p>
                                <div class="space-y-1 pl-2">
                                    <label class="block cursor-pointer"><input type="radio" name="m2_q1" value="a" class="mr-2"> A) All 5% of the rejection area is in the right tail</label>
                                    <label class="block cursor-pointer"><input type="radio" name="m2_q1" value="b" class="mr-2"> B) The 5% rejection area is split equally across both tails ($2.5\\%$ each)</label>
                                    <label class="block cursor-pointer"><input type="radio" name="m2_q1" value="c" class="mr-2"> C) There is no rejection region in a two-tailed test</label>
                                </div>
                            </div>
                        </div>
                        <button onclick="checkGuideAnswers(2)" class="btn-cyber font-orbitron text-xs px-4 py-2 rounded text-cyan-100 mt-2">CHECK ANSWERS</button>
                        <div id="gqFeedback2" class="text-xs font-orbitron mt-1"></div>
                    </div>

                    <button onclick="markModuleComplete(2)" class="btn-cyber font-orbitron text-xs px-6 py-2.5 rounded-lg text-cyan-100 float-right">
                        <i class="fas fa-check-circle mr-1"></i> MARK MODULE COMPLETE
                    </button>
                </div>
            `;
            state.m2Alpha = 0.05;
            setTimeout(drawM2Curve, 50);
            renderAllMath();
        }

        function setM2Alpha(val) {
            playSound('click');
            state.m2Alpha = val;
            drawM2Curve();
            renderAllMath();
        }

        function drawM2Curve() {
            const canvas = document.getElementById('m2Canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            const width = canvas.width;
            const height = canvas.height;
            const alpha = state.m2Alpha || 0.05;
            const tail = document.getElementById('m2TailSelect') ? document.getElementById('m2TailSelect').value : 'two';

            ctx.clearRect(0, 0, width, height);

            let critZLeft = null;
            let critZRight = null;

            if (tail === 'two') {
                if (alpha === 0.01) { critZLeft = -2.576; critZRight = 2.576; }
                else if (alpha === 0.05) { critZLeft = -1.96; critZRight = 1.96; }
                else { critZLeft = -1.645; critZRight = 1.645; }
            } else if (tail === 'right') {
                if (alpha === 0.01) critZRight = 2.326;
                else if (alpha === 0.05) critZRight = 1.645;
                else critZRight = 1.282;
            } else {
                if (alpha === 0.01) critZLeft = -2.326;
                else if (alpha === 0.05) critZLeft = -1.645;
                else critZLeft = -1.282;
            }

            const mean = width / 2;
            const stdDev = width / 8;

            ctx.beginPath();
            ctx.moveTo(0, height - 30);

            for (let x = 0; x <= width; x++) {
                const z = (x - mean) / stdDev;
                const y = Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
                const canvasY = height - 30 - y * (height - 60) * 2;
                ctx.lineTo(x, canvasY);
            }

            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--cyber-accent').trim() || '#00f0ff';
            ctx.lineWidth = 3;
            ctx.stroke();

            for (let x = 0; x <= width; x++) {
                const z = (x - mean) / stdDev;
                const isReject = (critZLeft && z <= critZLeft) || (critZRight && z >= critZRight);

                if (isReject) {
                    const y = Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI);
                    const canvasY = height - 30 - y * (height - 60) * 2;
                    ctx.beginPath();
                    ctx.moveTo(x, height - 30);
                    ctx.lineTo(x, canvasY);
                    ctx.strokeStyle = 'rgba(255, 50, 50, 0.6)';
                    ctx.stroke();
                }
            }

            ctx.beginPath();
            ctx.moveTo(0, height - 30);
            ctx.lineTo(width, height - 30);
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--cyber-accent').trim() || '#00f0ff';
            ctx.font = '11px Orbitron';
            ctx.fillText('Z = 0', mean - 12, height - 10);

            if (document.getElementById('m2DispAlpha')) document.getElementById('m2DispAlpha').innerText = alpha;
            let zText = '';
            if (critZLeft && critZRight) zText = `±${Math.abs(critZRight)}`;
            else if (critZRight) zText = `+${critZRight}`;
            else zText = `${critZLeft}`;
            if (document.getElementById('m2DispZ')) document.getElementById('m2DispZ').innerText = zText;
            if (document.getElementById('m2DispConf')) document.getElementById('m2DispConf').innerText = `${((1 - alpha) * 100).toFixed(0)}%`;
        }

        function renderModule3(container) {
            container.innerHTML = detailedLesson(3) + funActivityCard(3) + `
                <div class="space-y-4">
                    <div class="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                        <h4 class="font-orbitron text-cyan-300 font-bold mb-2">Lesson Overview: Hypothesis Testing Engine (Z-Test)</h4>
                        <p class="text-xs text-cyan-200/90 leading-relaxed mb-3">
                            The Z-test standardizes sample data against hypothesized population parameters. The test statistic formula is $Z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}$. If our computed $Z$ exceeds critical boundaries, we reject the null hypothesis.
                        </p>
                        <p class="text-xs text-cyan-300 font-bold mb-1">Real-Life Example:</p>
                        <p class="text-xs text-cyan-200/80">
                            An educational board tests whether a district's average SAT score ($\\bar{x} = 105$) is significantly higher than the national average ($\\mu_0 = 100$) given sample standard deviation $\\sigma = 15$ and $n = 36$ students.
                        </p>
                    </div>

                    <p class="text-xs text-cyan-200/80">
                        Enter sample and population parameters below to perform a hypothesis test and calculate the test statistic and decision.
                    </p>

                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40">
                        <div>
                            <label class="block text-[11px] font-orbitron text-cyan-300">Sample Mean ($\\bar{x}$):</label>
                            <input type="number" id="m3Xbar" value="105" class="w-full bg-cyan-950 border border-cyan-500/50 rounded p-1.5 text-xs text-cyan-100 font-orbitron focus:outline-none">
                        </div>
                        <div>
                            <label class="block text-[11px] font-orbitron text-cyan-300">Null Mean ($\\mu_0$):</label>
                            <input type="number" id="m3Mu" value="100" class="w-full bg-cyan-950 border border-cyan-500/50 rounded p-1.5 text-xs text-cyan-100 font-orbitron focus:outline-none">
                        </div>
                        <div>
                            <label class="block text-[11px] font-orbitron text-cyan-300">Std Dev ($\\sigma$ or $s$):</label>
                            <input type="number" id="m3Sd" value="15" class="w-full bg-cyan-950 border border-cyan-500/50 rounded p-1.5 text-xs text-cyan-100 font-orbitron focus:outline-none">
                        </div>
                        <div>
                            <label class="block text-[11px] font-orbitron text-cyan-300">Sample Size ($n$):</label>
                            <input type="number" id="m3N" value="36" class="w-full bg-cyan-950 border border-cyan-500/50 rounded p-1.5 text-xs text-cyan-100 font-orbitron focus:outline-none">
                        </div>
                    </div>

                    <button onclick="calculateM3Test()" class="w-full btn-cyber font-orbitron text-xs py-2.5 rounded-lg text-cyan-100">
                        <i class="fas fa-calculator mr-1"></i> COMPUTE TEST STATISTIC & DECISION
                    </button>

                    <div id="m3ResultBox" class="p-4 rounded-xl bg-cyber-dark border border-cyan-500/40 space-y-2">
                        <div class="text-xs text-cyan-400 font-orbitron">Click compute above to view results.</div>
                    </div>

                    <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/50 space-y-3">
                        <h4 class="font-orbitron font-bold text-cyan-200 text-sm flex items-center">
                            <i class="fas fa-question-circle text-cyan-400 mr-2"></i> Guide Questions & Comprehension Check
                        </h4>
                        <div class="space-y-3 text-xs">
                            <div>
                                <p class="text-cyan-100 font-semibold mb-1">Q1: Under what condition do we reject $\\text{H}_0$ in a two-tailed test at $\\alpha = 0.05$?</p>
                                <div class="space-y-1 pl-2">
                                    <label class="block cursor-pointer"><input type="radio" name="m3_q1" value="a" class="mr-2"> A) When $|Z| \\ge 1.96$</label>
                                    <label class="block cursor-pointer"><input type="radio" name="m3_q1" value="b" class="mr-2"> B) When $Z = 0$</label>
                                    <label class="block cursor-pointer"><input type="radio" name="m3_q1" value="c" class="mr-2"> C) When standard error is negative</label>
                                </div>
                            </div>
                        </div>
                        <button onclick="checkGuideAnswers(3)" class="btn-cyber font-orbitron text-xs px-4 py-2 rounded text-cyan-100 mt-2">CHECK ANSWERS</button>
                        <div id="gqFeedback3" class="text-xs font-orbitron mt-1"></div>
                    </div>

                    <button onclick="markModuleComplete(3)" class="btn-cyber font-orbitron text-xs px-6 py-2.5 rounded-lg text-cyan-100 float-right">
                        <i class="fas fa-check-circle mr-1"></i> MARK MODULE COMPLETE
                    </button>
                </div>
            `;
            renderAllMath();
        }

        function calculateM3Test() {
            playSound('click');
            const xbar = parseFloat(document.getElementById('m3Xbar').value) || 0;
            const mu = parseFloat(document.getElementById('m3Mu').value) || 0;
            const sd = parseFloat(document.getElementById('m3Sd').value) || 1;
            const n = parseFloat(document.getElementById('m3N').value) || 1;

            const se = sd / Math.sqrt(n);
            const z = (xbar - mu) / se;
            const critZ = 1.96;

            const reject = Math.abs(z) >= critZ;

            document.getElementById('m3ResultBox').innerHTML = `
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 font-orbitron text-xs text-cyan-200 mb-2">
                    <div>Standard Error (SE): <span class="text-cyan-400 font-bold">${se.toFixed(3)}</span></div>
                    <div>Test Statistic (Z): <span class="text-cyan-400 font-bold">${z.toFixed(3)}</span></div>
                    <div>Critical Value ($Z_{\\text{crit}}$): <span class="text-cyan-400 font-bold">$\\pm 1.96$</span></div>
                </div>
                <div class="p-3 rounded-lg ${reject ? 'bg-red-950/60 border border-red-500/50 text-red-200' : 'bg-emerald-950/60 border border-emerald-500/50 text-emerald-200'}">
                    <div class="font-orbitron font-bold text-sm">${reject ? 'REJECT NULL HYPOTHESIS ($\\text{H}_0$)' : 'FAIL TO REJECT NULL HYPOTHESIS ($\\text{H}_0$)'}</div>
                    <div class="text-xs opacity-90 mt-1">
                        ${reject 
                            ? `Because calculated $|Z|$ (${Math.abs(z).toFixed(2)}) $\\ge 1.96$, there is statistically significant evidence to reject $\\text{H}_0$ at $\\alpha = 0.05$.` 
                            : `Because calculated $|Z|$ (${Math.abs(z).toFixed(2)}) $< 1.96$, sample evidence is not strong enough to reject $\\text{H}_0$ at $\\alpha = 0.05$.`}
                    </div>
                </div>
            `;
            renderAllMath();
        }

        function renderModule4(container) {
            container.innerHTML = detailedLesson(4) + funActivityCard(4) + `
                <div class="space-y-4">
                    <div class="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                        <h4 class="font-orbitron text-cyan-300 font-bold mb-2">Lesson Overview: Correlation Analysis (Pearson's $r$)</h4>
                        <p class="text-xs text-cyan-200/90 leading-relaxed mb-3">
                            Pearson's correlation coefficient ($r$) measures the strength and direction of linear association between two quantitative variables. It ranges from $-1.0$ (perfect negative) to $+1.0$ (perfect positive), with $0$ indicating no linear correlation.
                        </p>
                        <p class="text-xs text-cyan-300 font-bold mb-1">Real-Life Example:</p>
                        <p class="text-xs text-cyan-200/80">
                            Analyzing the relationship between weekly study hours and final exam grades among university students ($r \\approx +0.78$ indicating a strong positive correlation).
                        </p>
                    </div>

                    <p class="text-xs text-cyan-200/80">
                        Adjust the correlation coefficient slider ($r$) below to observe scatter point alignment and strength of relationship.
                    </p>

                    <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 space-y-2">
                        <div class="flex justify-between font-orbitron text-xs text-cyan-300">
                            <span>Correlation Coefficient ($r$):</span>
                            <span id="m4RDisp" class="text-cyan-400 font-bold">+0.75</span>
                        </div>
                        <input type="range" id="m4RSlider" min="-1" max="1" step="0.05" value="0.75" oninput="drawM4Scatter()" class="w-full accent-cyan-400 cursor-pointer">
                    </div>

                    <div class="relative w-full h-64 border border-cyan-500/40 rounded-xl bg-cyber-dark overflow-hidden flex items-center justify-center p-2">
                        <canvas id="m4Canvas" class="w-full h-full"></canvas>
                    </div>

                    <div id="m4StrengthBox" class="p-3 rounded-lg bg-cyan-950/50 border border-cyan-500/30 font-orbitron text-xs text-cyan-200 text-center">
                        Strength: <span id="m4StrengthText" class="text-cyan-400 font-bold">Strong Positive Correlation</span>
                    </div>

                    <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/50 space-y-3">
                        <h4 class="font-orbitron font-bold text-cyan-200 text-sm flex items-center">
                            <i class="fas fa-question-circle text-cyan-400 mr-2"></i> Guide Questions & Comprehension Check
                        </h4>
                        <div class="space-y-3 text-xs">
                            <div>
                                <p class="text-cyan-100 font-semibold mb-1">Q1: What does a correlation coefficient $r = -0.92$ signify?</p>
                                <div class="space-y-1 pl-2">
                                    <label class="block cursor-pointer"><input type="radio" name="m4_q1" value="a" class="mr-2"> A) Weak positive association</label>
                                    <label class="block cursor-pointer"><input type="radio" name="m4_q1" value="b" class="mr-2"> B) Strong negative linear relationship</label>
                                    <label class="block cursor-pointer"><input type="radio" name="m4_q1" value="c" class="mr-2"> C) Inverse causality with zero scatter</label>
                                </div>
                            </div>
                        </div>
                        <button onclick="checkGuideAnswers(4)" class="btn-cyber font-orbitron text-xs px-4 py-2 rounded text-cyan-100 mt-2">CHECK ANSWERS</button>
                        <div id="gqFeedback4" class="text-xs font-orbitron mt-1"></div>
                    </div>

                    <button onclick="markModuleComplete(4)" class="btn-cyber font-orbitron text-xs px-6 py-2.5 rounded-lg text-cyan-100 float-right">
                        <i class="fas fa-check-circle mr-1"></i> MARK MODULE COMPLETE
                    </button>
                </div>
            `;
            setTimeout(drawM4Scatter, 50);
            renderAllMath();
        }

        function drawM4Scatter() {
            const canvas = document.getElementById('m4Canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            const slider = document.getElementById('m4RSlider');
            const r = slider ? parseFloat(slider.value) : 0.75;
            if (document.getElementById('m4RDisp')) {
                document.getElementById('m4RDisp').innerText = (r >= 0 ? '+' : '') + r.toFixed(2);
            }

            let strengthStr = '';
            const absR = Math.abs(r);
            if (absR >= 0.8) strengthStr = (r > 0 ? 'Strong Positive' : 'Strong Negative');
            else if (absR >= 0.4) strengthStr = (r > 0 ? 'Moderate Positive' : 'Moderate Negative');
            else if (absR > 0.1) strengthStr = (r > 0 ? 'Weak Positive' : 'Weak Negative');
            else strengthStr = 'No Linear Correlation';

            const strengthTextElem = document.getElementById('m4StrengthText');
            if (strengthTextElem) strengthTextElem.innerText = strengthStr;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0a1728';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw grid lines
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
            ctx.lineWidth = 1;
            for (let i = 0; i < canvas.width; i += 40) {
                ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
            }
            for (let j = 0; j < canvas.height; j += 40) {
                ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(canvas.width, j); ctx.stroke();
            }

            // Draw scatter points
            const numPoints = 50;
            for (let i = 0; i < numPoints; i++) {
                const xVal = Math.random() * (canvas.width - 40) + 20;
                // y depends on x and r
                const normalizedX = (xVal - canvas.width / 2) / (canvas.width / 2);
                const noise = (Math.random() - 0.5) * 2 * (1 - absR * 0.8);
                const normalizedY = normalizedX * r + noise;
                const yVal = canvas.height / 2 - normalizedY * (canvas.height / 2 - 20);

                ctx.beginPath();
                ctx.arc(xVal, yVal, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#00f0ff';
                ctx.shadowColor = '#00f0ff';
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        }

        function renderModule5(container) {
            container.innerHTML = detailedLesson(5) + funActivityCard(5) + `
                <div class="space-y-4">
                    <div class="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                        <h4 class="font-orbitron text-cyan-300 font-bold mb-2">Lesson Overview: Scatter Plot & Line of Best Fit ($Y = mx + b$)</h4>
                        <p class="text-xs text-cyan-200/90 leading-relaxed mb-3">
                            Linear regression models the relationship between a dependent variable ($Y$) and independent variable ($X$) using the slope-intercept equation $Y = mx + b$. The slope ($m$) and intercept ($b$) are calculated via least-squares minimization.
                        </p>
                        <p class="text-xs text-cyan-300 font-bold mb-1">Real-Life Example:</p>
                        <p class="text-xs text-cyan-200/80">
                            Predicting employee monthly productivity output ($Y$) based on years of technical experience ($X$).
                        </p>
                    </div>

                    <p class="text-xs text-cyan-200/80">
                        Adjust slope ($m$) and intercept ($b$) sliders below to fit the regression line to the generated sample data points.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40">
                        <div>
                            <div class="flex justify-between font-orbitron text-xs text-cyan-300 mb-1">
                                <span>Slope ($m$):</span>
                                <span id="m5SlopeDisp" class="text-cyan-400 font-bold">1.20</span>
                            </div>
                            <input type="range" id="m5SlopeSlider" min="-3" max="3" step="0.1" value="1.2" oninput="drawM5Regression()" class="w-full accent-cyan-400 cursor-pointer">
                        </div>
                        <div>
                            <div class="flex justify-between font-orbitron text-xs text-cyan-300 mb-1">
                                <span>Y-Intercept ($b$):</span>
                                <span id="m5InterceptDisp" class="text-cyan-400 font-bold">50.0</span>
                            </div>
                            <input type="range" id="m5InterceptSlider" min="0" max="150" step="5" value="50" oninput="drawM5Regression()" class="w-full accent-cyan-400 cursor-pointer">
                        </div>
                    </div>

                    <div class="relative w-full h-64 border border-cyan-500/40 rounded-xl bg-cyber-dark overflow-hidden flex items-center justify-center p-2">
                        <canvas id="m5Canvas" class="w-full h-full"></canvas>
                    </div>

                    <div id="m5EquationBox" class="p-3 rounded-lg bg-cyan-950/50 border border-cyan-500/30 font-orbitron text-xs text-cyan-200 text-center">
                        Regression Model Equation: <span id="m5EqText" class="text-cyan-400 font-bold">$Y = 1.20X + 50.0$</span>
                    </div>

                    <div class="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/50 space-y-3">
                        <h4 class="font-orbitron font-bold text-cyan-200 text-sm flex items-center">
                            <i class="fas fa-question-circle text-cyan-400 mr-2"></i> Guide Questions & Comprehension Check
                        </h4>
                        <div class="space-y-3 text-xs">
                            <div>
                                <p class="text-cyan-100 font-semibold mb-1">Q1: In the regression equation $Y = mx + b$, what does the coefficient $m$ represent?</p>
                                <div class="space-y-1 pl-2">
                                    <label class="block cursor-pointer"><input type="radio" name="m5_q1" value="a" class="mr-2"> A) The variance of sample residuals</label>
                                    <label class="block cursor-pointer"><input type="radio" name="m5_q1" value="b" class="mr-2"> B) The vertical intercept at $X = 0$</label>
                                    <label class="block cursor-pointer"><input type="radio" name="m5_q1" value="c" class="mr-2"> C) The slope (rate of change in $Y$ per unit change in $X$)</label>
                                </div>
                            </div>
                        </div>
                        <button onclick="checkGuideAnswers(5)" class="btn-cyber font-orbitron text-xs px-4 py-2 rounded text-cyan-100 mt-2">CHECK ANSWERS</button>
                        <div id="gqFeedback5" class="text-xs font-orbitron mt-1"></div>
                    </div>

                    <button onclick="markModuleComplete(5)" class="btn-cyber font-orbitron text-xs px-6 py-2.5 rounded-lg text-cyan-100 float-right">
                        <i class="fas fa-check-circle mr-1"></i> MARK MODULE COMPLETE
                    </button>
                </div>
            `;
            setTimeout(drawM5Regression, 50);
            renderAllMath();
        }

        function drawM5Regression() {
            const canvas = document.getElementById('m5Canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;

            const slopeSlider = document.getElementById('m5SlopeSlider');
            const intSlider = document.getElementById('m5InterceptSlider');
            const m = slopeSlider ? parseFloat(slopeSlider.value) : 1.2;
            const b = intSlider ? parseFloat(intSlider.value) : 50;

            if (document.getElementById('m5SlopeDisp')) document.getElementById('m5SlopeDisp').innerText = (m >= 0 ? '+' : '') + m.toFixed(1);
            if (document.getElementById('m5InterceptDisp')) document.getElementById('m5InterceptDisp').innerText = b.toFixed(1);
            if (document.getElementById('m5EqText')) document.getElementById('m5EqText').innerHTML = `$Y = ${m.toFixed(1)}X + ${b.toFixed(1)}$`;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0a1728';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw grid
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
            ctx.lineWidth = 1;
            for (let i = 0; i < canvas.width; i += 40) {
                ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
            }
            for (let j = 0; j < canvas.height; j += 40) {
                ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(canvas.width, j); ctx.stroke();
            }

            // Fixed mock sample points
            const points = [
                {x: 20, y: 70}, {x: 40, y: 95}, {x: 60, y: 110}, {x: 80, y: 150},
                {x: 100, y: 165}, {x: 130, y: 200}, {x: 160, y: 230}, {x: 190, y: 260},
                {x: 220, y: 285}, {x: 260, y: 320}
            ];

            // Draw regression line
            ctx.beginPath();
            const startX = 0;
            const startY = canvas.height - (b + m * startX);
            const endX = canvas.width;
            const endY = canvas.height - (b + m * endX);
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = '#00f0ff';
            ctx.lineWidth = 3;
            ctx.shadowColor = '#00f0ff';
            ctx.shadowBlur = 10;
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Draw points
            points.forEach(p => {
                const px = p.x * (canvas.width / 300);
                const py = canvas.height - p.y * (canvas.height / 350);
                ctx.beginPath();
                ctx.arc(px, py, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#ff00ff';
                ctx.shadowColor = '#ff00ff';
                ctx.shadowBlur = 6;
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            renderAllMath();
        }

        function renderModule6(container) {
            container.innerHTML = detailedLesson(6) + funActivityCard(6) + `
                <div class="space-y-6">
                    <div class="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                        <h4 class="font-orbitron text-cyan-300 font-bold mb-2">Module 06: Comprehensive Assessment Quiz</h4>
                        <p class="text-xs text-cyan-200/90 leading-relaxed">
                            Test your complete mastery of EAS•C course materials covering hypothesis formulation, significance thresholds, Z-tests, correlation coefficients, and linear regression models. Score 80% or higher to unlock your official course certificate.
                        </p>
                    </div>

                    <div id="quizFormContainer" class="space-y-4">
                        <!-- Q1 -->
                        <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 space-y-2">
                            <div class="font-orbitron font-bold text-xs text-cyan-200">Question 1: Which symbol is standard for the Null Hypothesis?</div>
                            <div class="space-y-1.5 text-xs pl-2">
                                <label class="block cursor-pointer"><input type="radio" name="q1" value="a" class="mr-2"> A) $\\text{H}_1$</label>
                                <label class="block cursor-pointer"><input type="radio" name="q1" value="b" class="mr-2"> B) $\\text{H}_0$</label>
                                <label class="block cursor-pointer"><input type="radio" name="q1" value="c" class="mr-2"> C) $\\alpha$</label>
                            </div>
                        </div>

                        <!-- Q2 -->
                        <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 space-y-2">
                            <div class="font-orbitron font-bold text-xs text-cyan-200">Question 2: What does a significance level of $\\alpha = 0.05$ represent?</div>
                            <div class="space-y-1.5 text-xs pl-2">
                                <label class="block cursor-pointer"><input type="radio" name="q2" value="a" class="mr-2"> A) A 5% risk of committing a Type I error</label>
                                <label class="block cursor-pointer"><input type="radio" name="q2" value="b" class="mr-2"> B) 95% power of rejecting a false null hypothesis</label>
                                <label class="block cursor-pointer"><input type="radio" name="q2" value="c" class="mr-2"> C) A 95% probability of a Type II error</label>
                            </div>
                        </div>

                        <!-- Q3 -->
                        <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 space-y-2">
                            <div class="font-orbitron font-bold text-xs text-cyan-200">Question 3: What value range does Pearson's correlation coefficient ($r$) span?</div>
                            <div class="space-y-1.5 text-xs pl-2">
                                <label class="block cursor-pointer"><input type="radio" name="q3" value="a" class="mr-2"> A) $0$ to $+\\infty$</label>
                                <label class="block cursor-pointer"><input type="radio" name="q3" value="b" class="mr-2"> B) $-1$ to $+1$</label>
                                <label class="block cursor-pointer"><input type="radio" name="q3" value="c" class="mr-2"> C) $-100$ to $+100$</label>
                            </div>
                        </div>

                        <!-- Q4 -->
                        <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 space-y-2">
                            <div class="font-orbitron font-bold text-xs text-cyan-200">Question 4: In the linear regression equation $Y = mx + b$, what does $b$ stand for?</div>
                            <div class="space-y-1.5 text-xs pl-2">
                                <label class="block cursor-pointer"><input type="radio" name="q4" value="a" class="mr-2"> A) Slope gradient</label>
                                <label class="block cursor-pointer"><input type="radio" name="q4" value="b" class="mr-2"> B) Vertical Y-intercept</label>
                                <label class="block cursor-pointer"><input type="radio" name="q4" value="c" class="mr-2"> C) Residual standard error</label>
                            </div>
                        </div>

                        <!-- Q5 -->
                        <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 space-y-2">
                            <div class="font-orbitron font-bold text-xs text-cyan-200">Question 5: When do we reject the null hypothesis ($\\text{H}_0$) in a Z-test at $\\alpha = 0.05$?</div>
                            <div class="space-y-1.5 text-xs pl-2">
                                <label class="block cursor-pointer"><input type="radio" name="q5" value="a" class="mr-2"> A) When $|Z| \\ge 1.96$</label>
                                <label class="block cursor-pointer"><input type="radio" name="q5" value="b" class="mr-2"> B) When $Z = 0$</label>
                                <label class="block cursor-pointer"><input type="radio" name="q5" value="c" class="mr-2"> C) When sample size $n < 30$</label>
                            </div>
                        </div>

                        <button onclick="submitQuiz()" class="w-full btn-cyber font-orbitron font-bold text-sm py-3 rounded-xl text-cyan-100 tracking-wider mt-4">
                            SUBMIT ASSESSMENT QUIZ
                        </button>
                    </div>

                    <div id="quizResultBox" class="hidden space-y-4">
                        <!-- Score Output -->
                    </div>
                </div>
            `;
            renderAllMath();
        }

        function submitQuiz() {
            playSound('click');
            const q1 = document.querySelector('input[name="q1"]:checked');
            const q2 = document.querySelector('input[name="q2"]:checked');
            const q3 = document.querySelector('input[name="q3"]:checked');
            const q4 = document.querySelector('input[name="q4"]:checked');
            const q5 = document.querySelector('input[name="q5"]:checked');

            let score = 0;
            if (q1 && q1.value === 'b') score++;
            if (q2 && q2.value === 'a') score++;
            if (q3 && q3.value === 'b') score++;
            if (q4 && q4.value === 'b') score++;
            if (q5 && q5.value === 'a') score++;

            const percent = (score / 5) * 100;
            state.progress[6].completed = true;
            state.progress[6].score = percent;

            const resBox = document.getElementById('quizResultBox');
            const formCont = document.getElementById('quizFormContainer');
            if (formCont) formCont.classList.add('hidden');
            if (resBox) {
                resBox.classList.remove('hidden');
                resBox.innerHTML = `
                    <div class="p-6 rounded-xl ${percent >= 80 ? 'bg-emerald-950/60 border border-emerald-500/50 text-emerald-200' : 'bg-red-950/60 border border-red-500/50 text-red-200'} text-center space-y-3">
                        <div class="font-orbitron font-bold text-2xl">${percent >= 80 ? 'ASSESSMENT PASSED!' : 'ASSESSMENT FAILED'}</div>
                        <div class="text-lg font-orbitron">Your Score: ${score}/5 (${percent}%)</div>
                        <p class="text-xs opacity-90 max-w-md mx-auto">
                            ${percent >= 80 
                                ? 'Congratulations! You have successfully passed the EAS•C assessment quiz with 80% or higher. Your certificate is now unlocked!' 
                                : 'You scored below 80%. Review the module lessons and try again to unlock your certificate.'}
                        </p>
                        <button onclick="openModal('modalCertificate')" class="btn-cyber font-orbitron text-xs px-6 py-2.5 rounded-lg text-cyan-100 inline-block mt-2">
                            VIEW CERTIFICATE
                        </button>
                    </div>
                `;
            }

            if (percent >= 80) playSound('success');
            else playSound('fail');
            updateUIProgress();
            renderAllMath();
        }

        function markModuleComplete(modNum) {
            playSound('success');
            state.progress[modNum].completed = true;
            state.progress[modNum].score = 100;
            updateUIProgress();
            alertBox(`Module 04: Marked complete successfully!`);
        }

        const BADGES = [
            {id:'first', icon:'fa-play', name:'FIRST STEP', desc:'Enter the courseware.', rule:s=>s.progress[1].completed||s.progress[2].completed||s.progress[3].completed||s.progress[4].completed||s.progress[5].completed||s.progress[6].completed},
            {id:'hypothesis', icon:'fa-balance-scale', name:'HYPOTHESIS READY', desc:'Complete Module 01.', rule:s=>s.progress[1].completed},
            {id:'significance', icon:'fa-bullseye', name:'SIGNIFICANCE SEEKER', desc:'Complete Module 02.', rule:s=>s.progress[2].completed},
            {id:'tester', icon:'fa-vial', name:'TESTING ANALYST', desc:'Complete Module 03.', rule:s=>s.progress[3].completed},
            {id:'correlation', icon:'fa-project-diagram', name:'CORRELATION PRO', desc:'Complete Module 04.', rule:s=>s.progress[4].completed},
            {id:'regression', icon:'fa-chart-line', name:'REGRESSION BUILDER', desc:'Complete Module 05.', rule:s=>s.progress[5].completed},
            {id:'perfect', icon:'fa-star', name:'ASSESSMENT ACE', desc:'Score 100% on Module 06.', rule:s=>s.progress[6].score===100},
            {id:'master', icon:'fa-trophy', name:'EAS•C MASTER', desc:'Complete all five modules and the Assessment.', rule:s=>[1,2,3,4,5,6].every(i=>s.progress[i].completed)}
        ];
        function renderBadges() {
            const grid=document.getElementById('badgeGrid');
            if(!grid) return;
            grid.innerHTML=BADGES.map(b=>{
                const unlocked=!!b.rule(state);
                return `<div class="badge-card ${unlocked?'unlocked':'locked'} p-4 rounded-xl bg-cyan-950/40 border ${unlocked?'border-cyan-400/60':'border-cyan-500/20'} text-center">
                    <div class="w-14 h-14 mx-auto mb-2 rounded-full ${unlocked?'bg-cyan-900 text-cyan-300':'bg-slate-900 text-slate-500'} border border-cyan-500/30 flex items-center justify-center text-xl"><i class="fas ${b.icon}"></i></div>
                    <div class="font-orbitron text-[10px] font-bold ${unlocked?'text-cyan-200':'text-slate-500'}">${b.name}</div>
                    <div class="text-[10px] mt-1 ${unlocked?'text-cyan-400/80':'text-slate-600'}">${unlocked?'UNLOCKED':'LOCKED'} · ${b.desc}</div>
                </div>`;
            }).join('');
        }

        function updateUIProgress() {
            let completedCount = 0;
            let totalScoreSum = 0;
            renderBadges();
            const listContainer = document.getElementById('progressModuleList');
            if (listContainer) listContainer.innerHTML = '';

            for (let i = 1; i <= 6; i++) {
                const mod = state.progress[i];
                if (mod.completed) completedCount++;
                totalScoreSum += mod.score;

                if (listContainer) {
                    listContainer.innerHTML += `
                        <div class="flex items-center justify-between p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-xs font-orbitron">
                            <span class="text-cyan-200">Module 0${i}</span>
                            <span class="${mod.completed ? 'text-emerald-400 font-bold' : 'text-cyan-400/60'}">
                                ${mod.completed ? `Completed (${mod.score}%)` : 'Pending'}
                            </span>
                        </div>
                    `;
                }

                const statusEl = document.getElementById(`m${i}Status`);
                if (statusEl) {
                    statusEl.innerText = mod.completed ? 'Completed' : 'Ready';
                    statusEl.className = mod.completed ? 'text-emerald-400 font-bold' : 'text-cyan-400';
                }
            }

            const overallPercent = Math.round(totalScoreSum / 6);
            if (document.getElementById('overallProgressPercent')) {
                document.getElementById('overallProgressPercent').innerText = overallPercent + '%';
            }
            if (document.getElementById('overallProgressBar')) {
                document.getElementById('overallProgressBar').style.width = overallPercent + '%';
            }

            // Check Certificate unlock
            const certLocked = document.getElementById('certLockedMessage');
            const certPrintArea = document.getElementById('certificatePrintArea');
            const isQuizPassed = state.progress[6].completed && state.progress[6].score >= 80;

            if (certLocked && certPrintArea) {
                if (isQuizPassed) {
                    certLocked.classList.add('hidden');
                    certPrintArea.classList.remove('hidden');
                } else {
                    certLocked.classList.remove('hidden');
                    certPrintArea.classList.add('hidden');
                }
            }
        }

        function openModal(modalId) {
            playSound('click');
            const m = document.getElementById(modalId);
            if (m) m.classList.remove('hidden');
            if (modalId === 'modalBadges') renderBadges();
            if (modalId === 'modalCertificate') {
                const today = new Date().toLocaleDateString();
                const dateEl = document.getElementById('certDate');
                if (dateEl) dateEl.innerText = today;
            }
            renderAllMath();
        }

        function closeModal(modalId) {
            playSound('click');
            const m = document.getElementById(modalId);
            if (m) m.classList.add('hidden');
        }

        function alertBox(msg) {
            // Custom non-blocking toast/alert notification
            const div = document.createElement('div');
            div.className = "fixed bottom-5 right-5 z-50 cyber-card p-4 rounded-xl border border-cyan-400 text-xs font-orbitron text-cyan-200 shadow-[0_0_20px_rgba(0,240,255,0.3)] animate-bounce";
            div.innerHTML = `<i class="fas fa-info-circle text-cyan-400 mr-2"></i> ${msg}`;
            document.body.appendChild(div);
            setTimeout(() => div.remove(), 3500);
        }

        function updateCertName() {
            const nameInput = document.getElementById('certNameInput');
            const certName = document.getElementById('certStudentName');
            if (nameInput && certName) {
                certName.innerText = nameInput.value.trim() || state.userName;
            }
        }

        function printCertificate() {
            window.print();
        }

        function toggleAudio() {
            state.soundEnabled = !state.soundEnabled;
            const dot = document.getElementById('soundToggleDot');
            if (dot) {
                dot.style.transform = state.soundEnabled ? 'translateX(24px)' : 'translateX(0px)';
            }
            playSound('click');
        }

        function toggleParticles() {
            state.particlesEnabled = !state.particlesEnabled;
            const dot = document.getElementById('particleToggleDot');
            const canvas = document.getElementById('bgCanvas');
            if (dot) {
                dot.style.transform = state.particlesEnabled ? 'translateX(24px)' : 'translateX(0px)';
            }
            if (canvas) {
                canvas.style.display = state.particlesEnabled ? 'block' : 'none';
            }
            playSound('click');
        }

        function resetAllProgress() {
            if (confirm('Are you sure you want to reset all learning progress?')) {
                state.progress = {
                    1: { completed: false, score: 0 },
                    2: { completed: false, score: 0 },
                    3: { completed: false, score: 0 },
                    4: { completed: false, score: 0 },
                    5: { completed: false, score: 0 },
                    6: { completed: false, score: 0 }
                };
                updateUIProgress();
                closeModal('modalSettings');
                goToMenu();
            }
        }

        // Background canvas particles & title preview animation
        const bgCanvas = document.getElementById('bgCanvas');
        const bgCtx = bgCanvas ? bgCanvas.getContext('2d') : null;
        let particles = [];

        function initBgCanvas() {
            if (!bgCanvas) return;
            bgCanvas.width = window.innerWidth;
            bgCanvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < 60; i++) {
                particles.push({
                    x: Math.random() * bgCanvas.width,
                    y: Math.random() * bgCanvas.height,
                    vx: (Math.random() - 0.5) * 0.6,
                    vy: (Math.random() - 0.5) * 0.6,
                    radius: Math.random() * 2 + 1
                });
            }
        }

        function animateBg() {
            if (bgCtx && state.particlesEnabled && bgCanvas) {
                bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
                bgCtx.fillStyle = 'rgba(0, 240, 255, 0.4)';
                bgCtx.strokeStyle = 'rgba(0, 240, 255, 0.1)';

                for (let i = 0; i < particles.length; i++) {
                    let p = particles[i];
                    p.x += p.vx;
                    p.y += p.vy;
                    if (p.x < 0 || p.x > bgCanvas.width) p.vx *= -1;
                    if (p.y < 0 || p.y > bgCanvas.height) p.vy *= -1;

                    bgCtx.beginPath();
                    bgCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    bgCtx.fill();

                    for (let j = i + 1; j < particles.length; j++) {
                        let p2 = particles[j];
                        let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                        if (dist < 100) {
                            bgCtx.beginPath();
                            bgCtx.moveTo(p.x, p.y);
                            bgCtx.lineTo(p2.x, p2.y);
                            bgCtx.stroke();
                        }
                    }
                }
            }

            // Title preview canvas animation
            const tCanvas = document.getElementById('titlePreviewCanvas');
            if (tCanvas) {
                const tCtx = tCanvas.getContext('2d');
                tCanvas.width = tCanvas.offsetWidth;
                tCanvas.height = tCanvas.offsetHeight;
                tCtx.clearRect(0, 0, tCanvas.width, tCanvas.height);

                tCtx.beginPath();
                tCtx.moveTo(0, tCanvas.height / 2);
                for (let x = 0; x < tCanvas.width; x++) {
                    const y = tCanvas.height / 2 + Math.sin(x * 0.03 + Date.now() * 0.003) * 20 * Math.cos(x * 0.01);
                    tCtx.lineTo(x, y);
                }
                tCtx.strokeStyle = '#00f0ff';
                tCtx.lineWidth = 2;
                tCtx.stroke();
            }

            requestAnimationFrame(animateBg);
        }

        window.addEventListener('resize', initBgCanvas);
        window.onload = function() {
            initBgCanvas();
            animateBg();
            updateUIProgress();
            renderAllMath();
        };
    

        /* ================================================================
           EAS•C 2.2c LEARNING-GATE / INTERACTIVE-GUIDE ENHANCEMENT
           - Sequential module unlocking
           - Five-question comprehension gate per module
           - Dropdown guide questions for interactive visualizations
           - Fixed Module 05 regression canvas
        ================================================================= */
        const MODULE_UNLOCK_RULES = {
            1: { required: null },
            2: { required: 1 },
            3: { required: 2 },
            4: { required: 3 },
            5: { required: 4 },
            6: { required: 5 }
        };

        const COMPREHENSION_BANK = {
            1: [
                ['A researcher asks whether the mean height of Grade 11 students differs from 66 inches. Which pair correctly represents the hypotheses?', 'a', ['H₀: μ = 66 and H₁: μ ≠ 66','H₀: μ ≠ 66 and H₁: μ = 66','H₀: μ > 66 and H₁: μ = 66']],
                ['Which statement best describes the null hypothesis in this lesson?', 'b', ['It always states that the research claim is true','It is the initial claim and represents no significant difference, no change, or no relationship','It can only use a greater-than symbol']],
                ['A school investigates whether a new teaching method has an effect on students’ test scores. Which statement belongs in the alternative hypothesis?', 'c', ['The independent variable has no effect on the dependent variable','There is no change in the dependent variable','The independent variable has an effect on the dependent variable']],
                ['Which symbols can be used for the alternative hypothesis when the research claim states that a parameter is different, greater, or less than a specific value?', 'a', ['≠, >, or <','Only =','Only ≤ and ≥']],
                ['Which statement correctly distinguishes Type I and Type II errors?', 'c', ['Type I means failing to reject a false H₀; Type II means rejecting a true H₀','Both errors mean rejecting a true H₀','Type I means rejecting a true H₀; Type II means failing to reject a false H₀']]
            ],
            2: [
                ['What does α represent?', 'b', ['sample size','significance level / Type I error threshold','correlation strength']],
                ['For a two-tailed α = 0.05 test, how is α distributed?', 'c', ['5% in the center','95% in the tails','2.5% in each tail']],
                ['What happens when α becomes smaller?', 'a', ['stronger evidence is required to reject H₀','the sample automatically becomes larger','H₀ becomes true']],
                ['At α = 0.05, the confidence level is usually what?', 'b', ['5%','95%','50%']],
                ['Which result supports rejection of H₀?', 'c', ['p-value > α','p-value = 1','p-value ≤ α']]
            ],
            3: [
                ['What is the purpose of a test statistic?', 'a', ['standardize the sample result relative to H₀','calculate the participant name','draw a pie chart']],
                ['Which formula is the Z statistic used in this courseware?', 'b', ['Z = (x̄ + μ₀)/(σ√n)','Z = (x̄ − μ₀)/(σ/√n)','Z = σ/(x̄ − μ₀)']],
                ['At α = 0.05 for a two-tailed Z test, what are the critical values?', 'c', ['±1.00','±2.58','±1.96']],
                ['If |Z| is beyond the critical boundary, what is the decision?', 'a', ['Reject H₀','Accept H₀ as proven','Ignore the sample']],
                ['What should follow the statistical decision?', 'b', ['a conclusion in the context of the problem','a new unrelated hypothesis','a change in sample size']]
            ],
            4: [
                ['What range can Pearson’s r take?', 'c', ['0 to 100','−100 to +100','−1 to +1']],
                ['What does a positive r indicate?', 'a', ['a positive linear direction','a negative linear direction','no possible relationship']],
                ['What does |r| close to 1 indicate?', 'b', ['weak linear association','strong linear association','proof of causation']],
                ['What does r close to 0 indicate?', 'c', ['perfect positive correlation','perfect negative correlation','little or no linear correlation']],
                ['Does correlation by itself prove causation?', 'a', ['No','Yes','Only when r is positive']]
            ],
            5: [
                ['In Y = mx + b, what does m represent?', 'b', ['the intercept','the slope','the sample size']],
                ['In Y = mx + b, what does b represent?', 'a', ['the Y-intercept','the slope','the correlation coefficient']],
                ['What does a positive slope mean?', 'c', ['Y decreases as X increases','there is no relationship','predicted Y tends to increase as X increases']],
                ['Where is a regression prediction generally safest?', 'b', ['far outside the observed data','within the observed X range','only at X = 0']],
                ['Does a best-fit line automatically prove causation?', 'a', ['No','Yes','Only if the slope is large']]
            ],
            6: [
                ['Which hypothesis represents the null hypothesis?', 'b', ['H₁','H₀','α']],
                ['What does α = 0.05 mean?', 'a', ['a 5% Type I error threshold','a 95% Type I error threshold','a 5% sample size']],
                ['What is the range of Pearson’s r?', 'c', ['0 to 1','−100 to 100','−1 to +1']],
                ['What does m represent in Y = mx + b?', 'b', ['intercept','slope','p-value']],
                ['For a two-tailed Z test at α = 0.05, when is H₀ rejected?', 'a', ['when |Z| ≥ 1.96','when Z = 0','when |Z| < 1.96']]
            ]
        };

        const GRAPH_GUIDES = {
            2: {
                title: 'INTERACTIVE GRAPH GUIDE',
                questions: [
                    ['If the graph is set to a two-tailed α = 0.05 test, where should the rejection areas appear?', 'b', ['Only on the right','In both tails','Only on the left']],
                    ['If α changes from 0.05 to 0.01, what should happen to the rejection region?', 'c', ['It becomes wider','It disappears','It becomes more extreme/narrower']],
                    ['For a right-tailed test, where is the rejection region?', 'a', ['Right tail','Left tail','Center only']],
                    ['For a left-tailed test, where is the rejection region?', 'b', ['Right tail','Left tail','Both tails']],
                    ['What does the shaded tail area represent?', 'c', ['The sample mean','The population size','The rejection region controlled by α']]
                ]
            },
            4: {
                title: 'INTERACTIVE SCATTERPLOT GUIDE',
                questions: [
                    ['When r moves toward +1, what happens to the points?', 'a', ['They align more strongly upward','They align more strongly downward','They become perfectly horizontal']],
                    ['When r moves toward −1, what direction does the pattern follow?', 'c', ['Upward','Random','Downward']],
                    ['What does r ≈ 0 suggest?', 'b', ['A strong linear relationship','Little or no linear relationship','Perfect negative correlation']],
                    ['Which feature tells you direction?', 'a', ['The sign of r','The canvas size','The number of grid lines']],
                    ['Which feature tells you strength?', 'c', ['The student name','The axis labels only','The magnitude |r|']]
                ]
            },
            5: {
                title: 'INTERACTIVE REGRESSION GUIDE',
                questions: [
                    ['If the slope m increases while b stays fixed, what happens to the line?', 'b', ['It becomes flatter','It becomes steeper upward','It becomes horizontal']],
                    ['If m is negative, what direction does the line move as X increases?', 'c', ['Upward','No direction','Downward']],
                    ['If b increases while m stays fixed, what happens?', 'a', ['The line shifts upward','The line rotates around the origin','The line disappears']],
                    ['What does one unit increase in X mean in the model?', 'b', ['X becomes zero','Predicted Y changes by m units','Y must equal b']],
                    ['What should you avoid when predicting far outside the observed data?', 'c', ['Using X values','Reading the equation','Extrapolation']]
                ]
            }
        };
