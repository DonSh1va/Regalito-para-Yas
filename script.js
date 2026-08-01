// Ambient sparkles
const field = document.getElementById('sparkleField');
const colors = ['#ffb3d9', '#b98af5', '#ffd76b'];
for (let i = 0; i < 40; i++) {
  const s = document.createElement('div');
  s.className = 'sparkle';
  s.style.left = Math.random() * 100 + 'vw';
  s.style.bottom = (Math.random() * 20 - 20) + 'vh';
  s.style.background = colors[Math.floor(Math.random() * colors.length)];
  s.style.width = s.style.height = (2 + Math.random() * 3) + 'px';
  s.style.animationDuration = (6 + Math.random() * 8) + 's';
  s.style.animationDelay = (Math.random() * 8) + 's';
  field.appendChild(s);
}

// Gift box burst particles
const giftWrap = document.getElementById('giftWrap');
const burstColors = ['#ff4fa3', '#b98af5', '#ffd76b', '#f5eaff'];
for (let i = 0; i < 18; i++) {
  const p = document.createElement('div');
  p.className = 'burst';
  const angle = (Math.PI * 2 * i) / 18;
  const dist = 90 + Math.random() * 60;
  p.style.setProperty('--bx', Math.cos(angle) * dist + 'px');
  p.style.setProperty('--by', Math.sin(angle) * dist + 'px');
  p.style.background = burstColors[i % burstColors.length];
  giftWrap.appendChild(p);
}

let opened = false;
const titleBlock = document.getElementById('titleBlock');
const preHint = document.getElementById('preHint');
const introBanner = document.getElementById('introBanner');

giftWrap.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  giftWrap.classList.add('opening');

  preHint.style.transition = 'opacity 0.5s ease';
  preHint.style.opacity = '0';
  introBanner.classList.add('hidden');

  setTimeout(() => {
    titleBlock.classList.add('show');
  }, 250);

  setTimeout(() => {
    giftWrap.classList.add('hidden');
  }, 550);

  const slots = ['slot1', 'slot2', 'slot3'];
  slots.forEach((id, idx) => {
    setTimeout(() => {
      document.getElementById(id).classList.add('reveal');
    }, 500 + idx * 260);
  });
});

// Card flip logic + track when all cards have been flipped
const finishBtn = document.getElementById('finishBtn');
const cardIds = ['card1', 'card2', 'card3'];
const flippedSet = new Set();

cardIds.forEach(id => {
  const card = document.getElementById(id);
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
    if (card.classList.contains('flipped')) {
      flippedSet.add(id);
      if (flippedSet.size === cardIds.length) {
        finishBtn.classList.add('show');
      }
    }
  });
});

// Finish button: hide cards, reveal final image + message
const cardsArea = document.getElementById('cardsArea');
const finalScreen = document.getElementById('finalScreen');

finishBtn.addEventListener('click', () => {
  cardsArea.classList.add('fade-out');
  finishBtn.classList.add('fade-out');

  setTimeout(() => {
    cardsArea.classList.add('gone');
    finishBtn.classList.add('gone');
    finalScreen.classList.add('show');
  }, 480);
});
