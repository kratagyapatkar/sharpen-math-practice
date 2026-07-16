// ── STATE ──────────────────────────────────────────────────────────────────
const state = {
  mode: null,
  difficulty: 'easy',
  totalCount: 5,
  questions: [],
  currentIdx: 0,
  score: 0,
  wrongCount: 0,
  answered: false,
  attempts: 0,
  startTime: null,
  elapsed: 0,
  timerInterval: null,
  lastMode: null,
  lastDifficulty: null,
  lastCount: null,
};

// ── STREAK ─────────────────────────────────────────────────────────────────
function loadStreak() {
  const data = JSON.parse(localStorage.getItem('sharpen_streak') || '{}');
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (data.lastDate === today || data.lastDate === yesterday) return data.count || 0;
  return 0;
}

function saveStreak() {
  const today = new Date().toDateString();
  const data = JSON.parse(localStorage.getItem('sharpen_streak') || '{}');
  const count = data.lastDate === today ? data.count : (data.count || 0) + 1;
  localStorage.setItem('sharpen_streak', JSON.stringify({ lastDate: today, count }));
  return count;
}

// ── HELPERS ────────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function formatTime(secs) {
  if (secs < 60) return secs + 's';
  return Math.floor(secs / 60) + 'm ' + (secs % 60) + 's';
}

// ── INIT ───────────────────────────────────────────────────────────────────
document.getElementById('streak-count').textContent = loadStreak();

// ── HOME: mode selection ───────────────────────────────────────────────────
document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    state.mode = card.dataset.mode;
    startSession();
  });
});

// ── HOME: difficulty pills ─────────────────────────────────────────────────
document.querySelectorAll('#difficulty-select .pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('#difficulty-select .pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.difficulty = pill.dataset.value;
  });
});

// ── HOME: question count pills ─────────────────────────────────────────────
document.querySelectorAll('#count-select .pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('#count-select .pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.totalCount = parseInt(pill.dataset.value);
  });
});

// ── REFERENCE TABLE TOGGLE ─────────────────────────────────────────────────
document.getElementById('ref-toggle').addEventListener('click', () => {
  const wrap = document.getElementById('ref-table-wrap');
  wrap.classList.toggle('open');
});

// ── START SESSION ──────────────────────────────────────────────────────────
function startSession() {
  if (!state.mode) return;

  state.questions = getQuestions(state.mode, state.difficulty, state.totalCount);
  state.currentIdx = 0;
  state.score = 0;
  state.wrongCount = 0;
  state.elapsed = 0;
  state.startTime = Date.now();

  // save for replay
  state.lastMode = state.mode;
  state.lastDifficulty = state.difficulty;
  state.lastCount = state.totalCount;

  showScreen('screen-question');
  startTimer();
  renderQuestion();
}

// ── TIMER ──────────────────────────────────────────────────────────────────
function startTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    document.getElementById('timer-display').textContent = formatTime(state.elapsed);
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerInterval);
}

// ── RENDER QUESTION ────────────────────────────────────────────────────────
function renderQuestion() {
  const q = state.questions[state.currentIdx];
  const total = state.questions.length;
  const idx = state.currentIdx;

  // header progress
  document.getElementById('progress-fill').style.width = ((idx / total) * 100) + '%';
  document.getElementById('progress-label').textContent = (idx + 1) + ' / ' + total;

  // category tag
  document.getElementById('q-category-tag').textContent = q.category || '';

  // question text
  document.getElementById('q-text').textContent = q.q;

  // show/hide reference table — only for Powers & Roots questions
  const refWrap = document.getElementById('ref-table-wrap');
  const isRootsQ = q.category === 'Powers & Roots';
  if (isRootsQ) {
    refWrap.classList.remove('hidden');
    // collapse it on each new question (let user toggle)
    refWrap.classList.remove('open');
  } else {
    refWrap.classList.add('hidden');
    refWrap.classList.remove('open');
  }

  // feedback reset
  const feedback = document.getElementById('q-feedback');
  feedback.textContent = '';
  feedback.className = 'q-feedback';

  // next & solve btns
  document.getElementById('btn-next').classList.add('hidden');
  document.getElementById('btn-solve').classList.add('hidden');

  // options
  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  state.answered = false;
  state.attempts = 0;

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.id = 'opt-' + i;
    btn.textContent = opt;
    btn.addEventListener('click', () => handleAnswer(i, q));
    grid.appendChild(btn);
  });

  // re-animate q-main
  const qMain = document.querySelector('#screen-question .q-main');
  qMain.style.animation = 'none';
  requestAnimationFrame(() => { qMain.style.animation = ''; });
}

// ── HANDLE ANSWER ──────────────────────────────────────────────────────────
function handleAnswer(chosen, q) {
  if (state.answered) return;

  const correct = q.answer;
  const feedback = document.getElementById('q-feedback');
  const allBtns = document.querySelectorAll('.option-btn');
  const btn = document.getElementById('opt-' + chosen);

  if (chosen === correct) {
    state.answered = true;
    allBtns.forEach(b => b.disabled = true);
    allBtns[correct].classList.add('correct');
    
    // Only count score if it was right on the first try, or maybe even on any try?
    // Let's count it if they got it before failing the question.
    if (state.attempts === 0) state.score++;
    
    feedback.textContent = '✓ Correct!';
    feedback.className = 'q-feedback correct-msg';
    document.getElementById('btn-next').classList.remove('hidden');
  } else {
    state.attempts++;
    btn.classList.add('wrong');
    btn.classList.add('shake');
    btn.disabled = true;

    if (state.attempts >= 3) {
      state.answered = true;
      state.wrongCount++;
      allBtns.forEach(b => b.disabled = true);
      
      feedback.textContent = 'Out of attempts! Click Solve to see the answer.';
      feedback.className = 'q-feedback wrong-msg';
      document.getElementById('btn-solve').classList.remove('hidden');
    } else {
      feedback.textContent = `✗ Incorrect. ${3 - state.attempts} attempts left.`;
      feedback.className = 'q-feedback wrong-msg';
    }
  }
}

// ── SOLVE BUTTON ───────────────────────────────────────────────────────────
document.getElementById('btn-solve').addEventListener('click', () => {
  const q = state.questions[state.currentIdx];
  const allBtns = document.querySelectorAll('.option-btn');
  
  allBtns[q.answer].classList.add('correct');
  
  const feedback = document.getElementById('q-feedback');
  feedback.textContent = 'The correct answer is: ' + q.options[q.answer];
  feedback.className = 'q-feedback correct-msg';

  document.getElementById('btn-solve').classList.add('hidden');
  document.getElementById('btn-next').classList.remove('hidden');
});

// ── NEXT QUESTION ──────────────────────────────────────────────────────────
document.getElementById('btn-next').addEventListener('click', () => {
  state.currentIdx++;
  if (state.currentIdx >= state.questions.length) {
    finishSession();
  } else {
    renderQuestion();
  }
});

// ── FINISH ─────────────────────────────────────────────────────────────────
function finishSession() {
  stopTimer();
  saveStreak();

  const total = state.questions.length;
  const pct = Math.round((state.score / total) * 100);

  let emoji = '🎯', title = 'Solid work!';
  if (pct === 100)    { emoji = '🏆'; title = 'Perfect score!'; }
  else if (pct >= 80) { emoji = '🎉'; title = 'Well done!'; }
  else if (pct >= 60) { emoji = '👍'; title = 'Keep going!'; }
  else if (pct >= 40) { emoji = '💪'; title = 'Keep practising!'; }
  else                { emoji = '📚'; title = 'More reps needed!'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-sub').textContent =
    'You got ' + state.score + ' out of ' + total + ' correct.';

  document.getElementById('stat-correct').textContent = state.score;
  document.getElementById('stat-wrong').textContent = state.wrongCount;
  document.getElementById('stat-time').textContent = formatTime(state.elapsed);
  document.getElementById('stat-accuracy').textContent = pct + '%';

  document.getElementById('streak-count').textContent = loadStreak();
  showScreen('screen-results');
}

// ── RESULTS ACTIONS ────────────────────────────────────────────────────────
document.getElementById('btn-again').addEventListener('click', () => {
  state.mode = state.lastMode;
  state.difficulty = state.lastDifficulty;
  state.totalCount = state.lastCount;
  startSession();
});

document.getElementById('btn-home').addEventListener('click', () => {
  state.mode = null;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  showScreen('screen-home');
});

// ── BACK BUTTON ────────────────────────────────────────────────────────────
document.getElementById('btn-back').addEventListener('click', () => {
  stopTimer();
  state.mode = null;
  document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
  showScreen('screen-home');
});

// ── SPIN WHEEL ─────────────────────────────────────────────────────────────
const SEGMENTS = [
  { mode: 'math',      label: 'Maths',    icon: '∑',  bg: '#FFC300', fg: '#111111' },
  { mode: 'reasoning', label: 'Reasoning',icon: '◈',  bg: '#111111', fg: '#FFC300' },
  { mode: 'roots',     label: 'Powers',   icon: '√',  bg: '#E6AF00', fg: '#111111' },
  { mode: 'mixed',     label: 'Mixed',    icon: '⚡', bg: '#2C2C2C', fg: '#FFC300' },
];

const canvas   = document.getElementById('wheel-canvas');
const ctx      = canvas.getContext('2d');
const N        = SEGMENTS.length;
const SEG_ANG  = (Math.PI * 2) / N;
let   wheelRot = 0;     // current accumulated rotation (radians)
let   spinning = false;

function drawWheel(rot) {
  const W  = canvas.width;
  const H  = canvas.height;
  const cx = W / 2;
  const cy = H / 2;
  const R  = Math.min(W, H) / 2 - 6;

  ctx.clearRect(0, 0, W, H);

  for (let i = 0; i < N; i++) {
    const seg   = SEGMENTS[i];
    const start = rot + i * SEG_ANG - Math.PI / 2;
    const end   = start + SEG_ANG;
    const mid   = start + SEG_ANG / 2;

    // segment fill
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, R, start, end);
    ctx.closePath();
    ctx.fillStyle = seg.bg;
    ctx.fill();
    ctx.strokeStyle = '#F9F5EB';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // icon + label
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(mid);

    // icon (placed closer to rim)
    ctx.font = '500 15px "Jost", sans-serif';
    ctx.fillStyle = seg.fg;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(seg.icon, R * 0.62, -10);

    // label
    ctx.font = '700 11px "Jost", sans-serif';
    ctx.letterSpacing = '0.04em';
    ctx.fillText(seg.label.toUpperCase(), R * 0.62, 6);

    ctx.restore();
  }

  // centre hub
  ctx.beginPath();
  ctx.arc(cx, cy, 18, 0, Math.PI * 2);
  ctx.fillStyle = '#F9F5EB';
  ctx.fill();
  ctx.strokeStyle = '#FFC300';
  ctx.lineWidth = 3;
  ctx.stroke();

  // dot in hub
  ctx.beginPath();
  ctx.arc(cx, cy, 5, 0, Math.PI * 2);
  ctx.fillStyle = '#FFC300';
  ctx.fill();
}

function getWinner(rot) {
  // The pointer is at top (12 o'clock). Segment 0 starts at -π/2 + rot.
  // We need which segment is aligned with 12 o'clock (angle 0 from top).
  const norm = (((- rot) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  return SEGMENTS[Math.floor(norm / SEG_ANG) % N];
}

function spinWheel() {
  if (spinning) return;
  spinning = true;

  const hint = document.getElementById('wheel-hint');
  hint.textContent = '🎰 Spinning…';
  hint.classList.remove('winning');

  // 6–10 full rotations + random landing angle
  const extra = (6 + Math.floor(Math.random() * 5)) * Math.PI * 2
              + Math.random() * Math.PI * 2;
  const target    = wheelRot + extra;
  const startRot  = wheelRot;
  const duration  = 4200;
  const startTime = performance.now();

  function easeOut(t) { return 1 - Math.pow(1 - t, 4); }

  function frame(now) {
    const t = Math.min((now - startTime) / duration, 1);
    wheelRot = startRot + (target - startRot) * easeOut(t);
    drawWheel(wheelRot);

    if (t < 1) {
      requestAnimationFrame(frame);
    } else {
      wheelRot = target;
      spinning = false;
      const winner = getWinner(wheelRot);

      hint.textContent = `🎯 ${winner.label}! Starting in a moment…`;
      hint.classList.add('winning');

      setTimeout(() => {
        document.querySelectorAll('.mode-card').forEach(c => c.classList.remove('selected'));
        const card = document.querySelector(`[data-mode="${winner.mode}"]`);
        if (card) card.classList.add('selected');
        state.mode = winner.mode;
        startSession();
        hint.textContent = 'Tap or swipe to spin';
        hint.classList.remove('winning');
      }, 1400);
    }
  }

  requestAnimationFrame(frame);
}

// spin when canvas is clicked or swiped
canvas.addEventListener('click', spinWheel);

let touchStartX = 0;
let touchStartY = 0;

canvas.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

canvas.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  const touchEndY = e.changedTouches[0].screenY;
  
  const dx = Math.abs(touchEndX - touchStartX);
  const dy = Math.abs(touchEndY - touchStartY);
  
  if (dx > 20 || dy > 20) {
    spinWheel();
  }
});

// initial draw
drawWheel(0);
