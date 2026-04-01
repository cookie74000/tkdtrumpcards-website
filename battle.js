// ===== BATTLE LOGIC =====

let currentLegend = 'bruce';

function doBattle(mode, stat, playerVal, oppVal, e) {
  const prefix = mode === 'student' ? 's' : 'l';
  const resultEl = document.getElementById(`${prefix}-result`);
  const playerCard = document.getElementById(`${prefix}-card-player`);
  const oppCard = mode === 'student'
    ? document.getElementById('s-card-opponent')
    : document.getElementById('l-card-legend');

  // Highlight stat rows on both cards
  document.querySelectorAll(`#${prefix}-card-player .stat-row`).forEach(r => {
    r.classList.toggle('highlighted', r.dataset.stat === stat);
  });
  if (oppCard) {
    oppCard.querySelectorAll('.stat-row').forEach(r => {
      r.classList.toggle('highlighted', r.dataset.stat === stat);
    });
  }

  // Mark selected button
  const btns = mode === 'student'
    ? document.querySelectorAll('.battle-stat-selector .stat-pick-btn')
    : document.querySelectorAll('#panel-legend .battle-stat-selector .stat-pick-btn');
  btns.forEach(b => b.classList.remove('selected','win','lose','draw'));
  if (e && e.currentTarget) {
    const btn = e.currentTarget;
    if (playerVal > oppVal) btn.classList.add('win');
    else if (playerVal < oppVal) btn.classList.add('lose');
    else btn.classList.add('draw');
  }

  // Result
  playerCard.classList.remove('win-glow','lose-fade');
  if (oppCard) oppCard.classList.remove('win-glow','lose-fade');
  resultEl.className = 'battle-result';

  if (playerVal > oppVal) {
    resultEl.textContent = `🏆 YOU WIN! ${playerVal} vs ${oppVal}`;
    resultEl.classList.add('win');
    playerCard.classList.add('win-glow');
    if (oppCard) oppCard.classList.add('lose-fade');
  } else if (playerVal < oppVal) {
    resultEl.textContent = `💀 YOU LOSE! ${playerVal} vs ${oppVal}`;
    resultEl.classList.add('lose');
    if (oppCard) oppCard.classList.add('win-glow');
    playerCard.classList.add('lose-fade');
  } else {
    resultEl.textContent = `🤝 DRAW! ${playerVal} vs ${oppVal}`;
    resultEl.classList.add('draw');
  }
}

function resetBattle(mode) {
  const prefix = mode === 'student' ? 's' : 'l';
  document.getElementById(`${prefix}-result`).textContent = '';
  document.getElementById(`${prefix}-result`).className = 'battle-result';
  document.getElementById(`${prefix}-card-player`).classList.remove('win-glow','lose-fade');
  const opp = mode === 'student'
    ? document.getElementById('s-card-opponent')
    : document.getElementById('l-card-legend');
  if (opp) opp.classList.remove('win-glow','lose-fade');
  document.querySelectorAll(`#${prefix}-card-player .stat-row`).forEach(r => r.classList.remove('highlighted'));
  if (opp) opp.querySelectorAll('.stat-row').forEach(r => r.classList.remove('highlighted'));
  const btns = document.querySelectorAll(
    mode === 'student'
      ? '#panel-student .stat-pick-btn'
      : '#panel-legend .battle-stat-selector .stat-pick-btn'
  );
  btns.forEach(b => b.classList.remove('selected','win','lose','draw'));
}

function selectLegend(key) {
  currentLegend = key;
  const legend = LEGENDS[key];

  // Update button states
  ['bruce','chuck','jackie','ip'].forEach(k => {
    const btn = document.getElementById(`btn-${k}`);
    if (btn) btn.classList.toggle('selected', k === key);
  });

  // Update legend card
  const nameEl = document.getElementById('legend-name');
  const titleEl = document.getElementById('legend-title');
  const portraitEl = document.getElementById('legend-portrait');
  const svgEl = document.getElementById('legend-svg');
  const statsEl = document.getElementById('legend-stats');
  const clubEl = document.getElementById('legend-club-label');

  if (nameEl) nameEl.textContent = legend.name;
  if (titleEl) { titleEl.textContent = legend.title; titleEl.style.color = legend.color; }
  if (portraitEl) portraitEl.style.background = legend.gradient;
  // Swap real photo
  const photoEl = document.getElementById('legend-photo');
  if (photoEl && legend.photo) { photoEl.src = legend.photo; photoEl.alt = legend.name; }
  if (svgEl) svgEl.innerHTML = '';
  if (clubEl) clubEl.textContent = 'LEGENDS';

  // Update stats
  if (statsEl) {
    const statKeys = ['power','speed','technique','flexibility','stamina','aura'];
    const statNames = ['Power','Speed','Technique','Flexibility','Stamina','Aura'];
    statsEl.innerHTML = statKeys.map((k,i) => `
      <div class="stat-row" data-stat="${k}" data-val="${legend.stats[k]}">
        <span class="stat-name">${statNames[i]}</span>
        <div class="stat-bar-wrap"><div class="stat-bar" style="width:${legend.stats[k]}%;background:linear-gradient(90deg,#ff6b00,#ff9944);"></div></div>
        <span class="stat-val">${legend.stats[k]}</span>
      </div>`).join('');
  }

  // Update battle buttons with new opponent values
  const statKeys = ['power','speed','technique','flexibility','stamina','aura'];
  statKeys.forEach(k => {
    const btn = document.getElementById(`lbtn-${k}`);
    if (btn) {
      const playerVal = 87; // Jamie's base
      const oppVal = legend.stats[k];
      btn.setAttribute('onclick', `doBattle('legend','${k}',${playerVal},${oppVal},event)`);
    }
  });

  // Reset battle state
  resetBattle('legend');
}
