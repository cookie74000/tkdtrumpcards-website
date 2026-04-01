// ===== CARD DATA =====
const LEGENDS = {
  bruce: {
    name: 'Bruce Lee',
    title: '🐉 The Dragon · Jeet Kune Do',
    color: '#ff6b00',
    gradient: 'linear-gradient(160deg,#1a0800,#0a0500)',
    stats: { power:88, speed:99, technique:99, flexibility:97, stamina:94, aura:100 },
    svg: `<defs><linearGradient id="blg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff6b00" stop-opacity="0.95"/><stop offset="100%" stop-color="#cc4400" stop-opacity="0.8"/></linearGradient></defs>
      <ellipse cx="55" cy="30" rx="10" ry="11" fill="url(#blg)"/>
      <path d="M55 40 Q60 55 65 70" stroke="url(#blg)" stroke-width="14" stroke-linecap="round" fill="none"/>
      <line x1="58" y1="48" x2="130" y2="45" stroke="url(#blg)" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="133" cy="44" rx="7" ry="6" fill="url(#blg)"/>
      <line x1="55" y1="50" x2="35" y2="60" stroke="url(#blg)" stroke-width="7" stroke-linecap="round"/>
      <line x1="63" y1="68" x2="140" y2="72" stroke="url(#blg)" stroke-width="9" stroke-linecap="round"/>
      <ellipse cx="143" cy="72" rx="9" ry="6" fill="url(#blg)" transform="rotate(-5 143 72)"/>
      <line x1="58" y1="70" x2="48" y2="108" stroke="url(#blg)" stroke-width="9" stroke-linecap="round"/>
      <ellipse cx="90" cy="100" rx="50" ry="8" fill="rgba(255,107,0,0.12)"/>`,
  },
  chuck: {
    name: 'Chuck Norris',
    title: '🤠 The Enforcer · Tang Soo Do',
    color: '#ff6b00',
    gradient: 'linear-gradient(160deg,#1a0500,#0a0200)',
    stats: { power:99, speed:92, technique:96, flexibility:88, stamina:98, aura:97 },
    svg: `<defs><linearGradient id="cng" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff6b00" stop-opacity="0.95"/><stop offset="100%" stop-color="#cc4400" stop-opacity="0.8"/></linearGradient></defs>
      <ellipse cx="90" cy="28" rx="12" ry="13" fill="url(#cng)"/>
      <rect x="80" y="40" width="20" height="30" rx="5" fill="url(#cng)"/>
      <line x1="80" y1="45" x2="45" y2="55" stroke="url(#cng)" stroke-width="9" stroke-linecap="round"/>
      <ellipse cx="42" cy="55" rx="9" ry="7" fill="url(#cng)"/>
      <line x1="100" y1="45" x2="135" y2="35" stroke="url(#cng)" stroke-width="9" stroke-linecap="round"/>
      <ellipse cx="138" cy="33" rx="9" ry="7" fill="url(#cng)" transform="rotate(-20 138 33)"/>
      <line x1="84" y1="70" x2="74" y2="108" stroke="url(#cng)" stroke-width="10" stroke-linecap="round"/>
      <line x1="96" y1="70" x2="106" y2="108" stroke="url(#cng)" stroke-width="10" stroke-linecap="round"/>
      <ellipse cx="90" cy="100" rx="50" ry="8" fill="rgba(255,107,0,0.12)"/>`,
  },
  jackie: {
    name: 'Jackie Chan',
    title: '🎬 The Acrobat · Kung Fu',
    color: '#ff6b00',
    gradient: 'linear-gradient(160deg,#001a08,#000a02)',
    stats: { power:82, speed:96, technique:98, flexibility:99, stamina:90, aura:93 },
    svg: `<defs><linearGradient id="jcg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff6b00" stop-opacity="0.95"/><stop offset="100%" stop-color="#cc4400" stop-opacity="0.8"/></linearGradient></defs>
      <ellipse cx="90" cy="25" rx="10" ry="11" fill="url(#jcg)"/>
      <path d="M88 35 Q85 55 80 75" stroke="url(#jcg)" stroke-width="13" stroke-linecap="round" fill="none"/>
      <line x1="86" y1="42" x2="40" y2="25" stroke="url(#jcg)" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="37" cy="23" rx="7" ry="6" fill="url(#jcg)" transform="rotate(-30 37 23)"/>
      <line x1="90" y1="44" x2="130" y2="60" stroke="url(#jcg)" stroke-width="7" stroke-linecap="round"/>
      <line x1="80" y1="74" x2="55" y2="108" stroke="url(#jcg)" stroke-width="9" stroke-linecap="round"/>
      <line x1="82" y1="74" x2="140" y2="55" stroke="url(#jcg)" stroke-width="9" stroke-linecap="round"/>
      <ellipse cx="143" cy="53" rx="9" ry="6" fill="url(#jcg)" transform="rotate(-10 143 53)"/>
      <ellipse cx="90" cy="100" rx="50" ry="8" fill="rgba(255,107,0,0.12)"/>`,
  },
  ip: {
    name: 'Ip Man',
    title: '🧘 The Grandmaster · Wing Chun',
    color: '#ff6b00',
    gradient: 'linear-gradient(160deg,#0a0a1a,#050508)',
    stats: { power:85, speed:94, technique:100, flexibility:92, stamina:88, aura:99 },
    svg: `<defs><linearGradient id="img" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff6b00" stop-opacity="0.95"/><stop offset="100%" stop-color="#cc4400" stop-opacity="0.8"/></linearGradient></defs>
      <ellipse cx="90" cy="30" rx="9" ry="10" fill="url(#img)"/>
      <rect x="83" y="40" width="14" height="32" rx="4" fill="url(#img)"/>
      <line x1="83" y1="46" x2="55" y2="50" stroke="url(#img)" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="52" cy="50" rx="6" ry="5" fill="url(#img)"/>
      <line x1="97" y1="46" x2="125" y2="50" stroke="url(#img)" stroke-width="7" stroke-linecap="round"/>
      <ellipse cx="128" cy="50" rx="6" ry="5" fill="url(#img)"/>
      <line x1="86" y1="72" x2="80" y2="108" stroke="url(#img)" stroke-width="8" stroke-linecap="round"/>
      <line x1="94" y1="72" x2="100" y2="108" stroke="url(#img)" stroke-width="8" stroke-linecap="round"/>
      <ellipse cx="90" cy="100" rx="50" ry="8" fill="rgba(255,107,0,0.12)"/>`,
  }
};

const GALLERY_CARDS = [
  {
    name: 'Jake Roberts', belt: '● Black Belt 1st Dan', rarity: 'BLACK', rarityClass: 'rarity-black',
    bg: 'linear-gradient(160deg,#1a0a2e,#0a0a1a)', figColor: '#F5C800',
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663205307184/79kvvEBJspWmci3JJyfyv4/jake-roberts_843aec1d.png',
    stats: { power:87, speed:92, technique:85, flexibility:78, stamina:83, aura:76 }
  },
  {
    name: 'Lucas Foster', belt: '● Black Belt 2nd Dan', rarity: 'BLACK', rarityClass: 'rarity-black',
    bg: 'linear-gradient(160deg,#0a1a2e,#0a0a1a)', figColor: '#60a5fa',
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663205307184/79kvvEBJspWmci3JJyfyv4/lucas-foster_c78c86a2.jpg',
    stats: { power:74, speed:88, technique:91, flexibility:69, stamina:80, aura:82 }
  },
  {
    name: 'Gavin Cook', belt: '● Black Belt 5th Dan', rarity: 'BLACK', rarityClass: 'rarity-black',
    bg: 'linear-gradient(160deg,#1a0a0a,#0a0505)', figColor: '#E8001D',
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663205307184/79kvvEBJspWmci3JJyfyv4/gavin-cook_d91f224a.jpg',
    stats: { power:95, speed:89, technique:97, flexibility:88, stamina:94, aura:98 }
  },
  {
    name: 'Bruce Lee', belt: '🐉 The Dragon', rarity: 'LEGEND', rarityClass: 'rarity-legend',
    bg: 'linear-gradient(160deg,#1a0800,#0a0500)', figColor: '#ff6b00',
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663205307184/79kvvEBJspWmci3JJyfyv4/bruce-lee_63995f9d.jpg',
    stats: { power:88, speed:99, technique:99, flexibility:97, stamina:94, aura:100 }
  },
  {
    name: 'Chuck Norris', belt: '🤠 The Enforcer', rarity: 'LEGEND', rarityClass: 'rarity-legend',
    bg: 'linear-gradient(160deg,#1a0500,#0a0200)', figColor: '#ff6b00',
    photo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663205307184/79kvvEBJspWmci3JJyfyv4/chuck-norris_46e9edf3.jpg',
    stats: { power:99, speed:92, technique:96, flexibility:88, stamina:98, aura:97 }
  }
];

function buildCardHTML(card, small = false) {
  const statColors = ['#E8001D','#F5C800','#60a5fa','#a78bfa','#34d399','#f472b6'];
  const statNames = ['Power','Speed','Technique','Flexibility','Stamina','Aura'];
  const statKeys = ['power','speed','technique','flexibility','stamina','aura'];
  const statsHTML = statKeys.map((k,i) => `
    <div class="stat-row">
      <span class="stat-name">${statNames[i]}</span>
      <div class="stat-bar-wrap"><div class="stat-bar" style="width:${card.stats[k]}%;background:linear-gradient(90deg,${statColors[i]},${statColors[i]}88);"></div></div>
      <span class="stat-val">${card.stats[k]}</span>
    </div>`).join('');

  const isLegend = card.rarity === 'LEGEND';
  const legendBorder = isLegend ? 'border-color:rgba(255,107,0,0.4);box-shadow:0 8px 32px rgba(255,107,0,0.2);' : '';
  const beltColor = isLegend ? 'color:#ff6b00;' : 'color:var(--gold-dark);';

  let portraitContent;
  if (card.photo) {
    const demoBadge = isLegend ? `<div style="position:absolute;top:5px;right:5px;background:rgba(255,107,0,0.85);color:#fff;font-size:0.5rem;font-weight:700;padding:2px 5px;border-radius:3px;letter-spacing:0.08em;font-family:'Rajdhani',sans-serif;">DEMO</div>` : '';
    portraitContent = `<div style="position:relative;width:100%;height:100%;">
      <img src="${card.photo}" alt="${card.name}" style="width:100%;height:100%;object-fit:cover;object-position:top center;display:block;"/>
      ${demoBadge}
    </div>`;
  } else {
    const svgFill = card.figColor;
    portraitContent = `<svg viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="35" rx="10" ry="12" fill="${svgFill}" opacity="0.9"/>
      <rect x="82" y="46" width="16" height="28" rx="4" fill="${svgFill}" opacity="0.85"/>
      <line x1="82" y1="52" x2="62" y2="42" stroke="${svgFill}" stroke-width="7" stroke-linecap="round" opacity="0.85"/>
      <line x1="98" y1="52" x2="118" y2="42" stroke="${svgFill}" stroke-width="7" stroke-linecap="round" opacity="0.85"/>
      <line x1="86" y1="74" x2="78" y2="108" stroke="${svgFill}" stroke-width="8" stroke-linecap="round" opacity="0.85"/>
      <line x1="94" y1="74" x2="102" y2="108" stroke="${svgFill}" stroke-width="8" stroke-linecap="round" opacity="0.85"/>
    </svg>`;
  }

  return `<div class="trump-card${isLegend?' legendary':''}" style="width:${small?'160px':'200px'};${legendBorder}">
    <div class="card-header">
      <span class="card-club">${isLegend ? 'LEGENDS' : 'Train TKD'}</span>
      <span class="card-rarity ${card.rarityClass}">${card.rarity}</span>
    </div>
    <div class="card-portrait" style="background:${card.bg};padding:0;overflow:hidden;">${portraitContent}</div>
    <div class="card-name-band">
      <div class="card-name">${card.name}</div>
      <div class="card-belt" style="${beltColor}">${card.belt}</div>
    </div>
    <div class="card-stats">${statsHTML}</div>
  </div>`;
}

function renderGallery() {
  const gallery = document.getElementById('cardGallery');
  if (!gallery) return;
  gallery.innerHTML = GALLERY_CARDS.map(c => buildCardHTML(c)).join('');
}

document.addEventListener('DOMContentLoaded', renderGallery);
