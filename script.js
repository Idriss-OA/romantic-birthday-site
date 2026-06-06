const preloader = document.getElementById('preloader');
const loverName = document.getElementById('loverName');
const openSurpriseBtn = document.getElementById('openSurpriseBtn');
const giftBox = document.getElementById('giftBox');
const giftMessage = document.getElementById('giftMessage');
const typewriterText = document.getElementById('typewriterText');
const audioBtn = document.getElementById('audioBtn');
const romanticAudio = document.getElementById('romanticAudio');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const galleryStack = document.getElementById('galleryStack');
const videoStack = document.getElementById('videoStack');
const openMemoryButton = document.getElementById('openMemoryButton');
const openVideoButton = document.getElementById('openVideoButton');
const loveCounter = document.getElementById('loveCounter');
const easterEggStar = document.getElementById('easterEggStar');
const hero = document.getElementById('welcome');
let writerIndex = 0;
const letterLines = [
  "My sweetest love,",
  "\n\nOn this special day my heart is overflowing with gratitude for you.",
  "Every moment we share becomes a cherished story written in golden light.",
  "Your smile turns ordinary days into unforgettable dreams.",
  "Thank you for making my life softer, warmer, and infinitely more beautiful.",
  "\n\nHappy Birthday, my princess. May this year bring you the magic you bring to me. ❤️"
];

const relationshipStart = new Date('2025-09-14T00:00:00');

const memoryPhotos = [
  { src: 'assets/photos/photo1.jpg', title: 'Sunset promise', quote: 'The sky glowed just like my heart the moment I saw you.' },
  { src: 'assets/photos/photo2.jpg', title: 'Early laughter', quote: 'Our first laugh together felt like the start of forever.' },
  { src: 'assets/photos/photo3.jpg', title: 'Hand in hand', quote: 'Every step we take together becomes my favorite path.' },
  { src: 'assets/photos/photo4.jpg', title: 'Soft whispers', quote: 'Your whispers are the melody that makes my spirit light.' },
  { src: 'assets/photos/photo5.jpg', title: 'Midnight magic', quote: 'Even the quietest nights feel golden with you by my side.' },
  { src: 'assets/photos/photo6.jpg', title: 'Sweet surprise', quote: 'Your surprise smiles are the sweetest chapters in our story.' },
  { src: 'assets/photos/photo7.jpg', title: 'Warm embrace', quote: 'One hug from you is enough to color my whole day.' },
  { src: 'assets/photos/photo8.jpg', title: 'Carefree joy', quote: 'The little moments with you become my strongest memories.' },
  { src: 'assets/photos/photo9.jpg', title: 'Starry night', quote: 'Under the stars, I always feel closest to your heart.' },
  { src: 'assets/photos/photo10.jpg', title: 'Golden hour', quote: 'The light around us is brightest when you are near.' },
  { src: 'assets/photos/photo11.jpg', title: 'Dreamy together', quote: 'Every shared dream feels like a promise already kept.' },
  { src: 'assets/photos/photo12.jpg', title: 'Playful pause', quote: 'Our laughter is the spark I want to keep forever.' },
  { src: 'assets/photos/photo13.jpg', title: 'Gentle moments', quote: 'Your gentle love is the safest place I know.' },
  { src: 'assets/photos/photo14.jpg', title: 'Forever us', quote: 'The best part of every day is the part that includes you.' }
];

const videoMemories = [
  { src: 'assets/videos/video1.mp4', title: 'First dance', quote: 'The way we moved felt like a scene from our own love story.' },
  { src: 'assets/videos/video2.mp4', title: 'Sweet laugh', quote: 'Your laughter becomes an echo I hope never fades.' },
  { src: 'assets/videos/video3.mp4', title: 'Golden hour', quote: 'The light was perfect, but you made it unforgettable.' },
  { src: 'assets/videos/video4.mp4', title: 'Beach stroll', quote: 'Walking with you is my favorite kind of adventure.' },
  { src: 'assets/videos/video5.mp4', title: 'Cozy moment', quote: 'Our quiet moments are the ones I cherish most.' },
  { src: 'assets/videos/video6.mp4', title: 'Sunrise joy', quote: 'Every new morning feels brighter because of you.' },
  { src: 'assets/videos/video7.mp4', title: 'Happy together', quote: 'Your smile moves me more than words ever could.' },
  { src: 'assets/videos/video8.mp4', title: 'Capturing us', quote: 'Every frame is a reminder that you are my favorite view.' },
  { src: 'assets/videos/video9.mp4', title: 'Laughing hearts', quote: 'Our shared laughter is the sweetest soundtrack of us.' },
  { src: 'assets/videos/video10.mp4', title: 'Quiet kiss', quote: 'The softest moments with you feel like home.' },
  { src: 'assets/videos/video11.mp4', title: 'Radiant joy', quote: 'You bring light and warmth into every second.' },
  { src: 'assets/videos/video12.mp4', title: 'Dream chase', quote: 'I love chasing life’s best moments right by your side.' },
  { src: 'assets/videos/video13.mp4', title: 'My heartbeat', quote: 'Every scene with you makes my heart feel complete.' }
];

function fadeOutPreloader() {
  preloader.style.opacity = '0';
  setTimeout(() => preloader.remove(), 700);
}

function revealName() {
  loverName.textContent = 'Amor';
  loverName.parentElement.classList.add('name-animated');
}

function toggleAudio() {
  if (romanticAudio.paused) {
    romanticAudio.play();
    audioBtn.textContent = 'Pause Music';
  } else {
    romanticAudio.pause();
    audioBtn.textContent = 'Play Music';
  }
}

function openGift() {
  giftBox.classList.toggle('open');
  giftMessage.classList.toggle('open');
  setTimeout(() => {
    giftBox.classList.add('open');
    giftMessage.classList.add('open');
  }, 10);
}

function typeLetter() {
  const fullText = letterLines.join('\n');
  if (writerIndex >= fullText.length) return;
  typewriterText.textContent = fullText.slice(0, writerIndex + 1);
  writerIndex += 1;
  setTimeout(typeLetter, 45);
}

function calculateLoveTime() {
  const now = new Date();
  const diff = now - relationshipStart;
  const minutes = Math.floor(diff / 60000);
  const days = Math.floor(minutes / 1440);
  const hours = Math.floor((minutes % 1440) / 60);
  const remainMinutes = minutes % 60;
  loveCounter.textContent = `${days} days, ${hours} hours, ${remainMinutes} minutes`;
}

function showLightbox(src) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightbox.classList.add('open');
}

function hideLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
}

function createCardPosition(index) {
  const top = 8 + (index * 5) % 45;
  const left = 6 + (index * 9) % 58;
  const rotate = -16 + (index * 7) % 32;
  return { top, left, rotate };
}

function revealNextCard(card) {
  card.classList.add('gone');
  const parent = card.parentElement;
  const remaining = parent.querySelectorAll('.stack-card:not(.gone)');
  if (remaining.length === 0) {
    const endNote = document.createElement('p');
    endNote.className = 'stack-end-message';
    endNote.textContent = 'All of our memories have been revealed. Scroll up to relive them again anytime.';
    parent.appendChild(endNote);
  }
}

function buildMemories() {
  if (!galleryStack || !videoStack) return;

  galleryStack.innerHTML = memoryPhotos.map((item, index) => {
    const { top, left, rotate } = createCardPosition(index);
    return `
      <div class="stack-card" data-index="${index}" style="top:${top}%; left:${left}%; transform: rotate(${rotate}deg); z-index:${1000 - index};">
        <img src="${item.src}" alt="${item.title}" />
        <div class="stack-label">
          <h3>${item.title}</h3>
          <p>${item.quote}</p>
        </div>
      </div>
    `;
  }).join('');

  videoStack.innerHTML = videoMemories.map((item, index) => {
    const { top, left, rotate } = createCardPosition(index);
    return `
      <div class="stack-card" data-index="${index}" style="top:${top}%; left:${left}%; transform: rotate(${rotate}deg); z-index:${1000 - index};">
        <video src="${item.src}" playsinline muted controls preload="metadata"></video>
        <div class="stack-label">
          <h3>${item.title}</h3>
          <p>${item.quote}</p>
        </div>
      </div>
    `;
  }).join('');

  galleryStack.querySelectorAll('.stack-card').forEach((card) => {
    card.addEventListener('click', () => revealNextCard(card));
  });

  videoStack.querySelectorAll('.stack-card').forEach((card) => {
    card.addEventListener('click', () => {
      const video = card.querySelector('video');
      if (video) video.pause();
      revealNextCard(card);
    });
  });
}

function openMemorySection() {
  if (galleryStack) {
    galleryStack.classList.remove('hidden');
    galleryStack.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function openVideoSection() {
  if (videoStack) {
    videoStack.classList.remove('hidden');
    videoStack.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'cursor-heart';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);
  requestAnimationFrame(() => {
    heart.style.transform = 'translate(-50%, -50%) scale(1.7)';
    heart.style.opacity = '0';
  });
  setTimeout(() => heart.remove(), 1000);
}

function spawnPetals() {
  const container = document.querySelector('.rose-petals');
  for (let i = 0; i < 15; i += 1) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDelay = `${Math.random() * 12}s`;
    petal.style.opacity = `${0.4 + Math.random() * 0.6}`;
    container.appendChild(petal);
  }
}

function revealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.glass-section, .hero-content, .gift-card, .finale-shell').forEach((section) => {
    observer.observe(section);
  });
}

function addCursorHearts() {
  document.addEventListener('mousemove', (event) => {
    if (event.clientX % 12 === 0) createHeart(event.clientX, event.clientY);
  });
  document.addEventListener('touchstart', (event) => {
    const touch = event.touches[0];
    createHeart(touch.clientX, touch.clientY);
  });
}

function activateEasterEgg() {
  alert('Secret love note: Your laugh is my favorite sound, and your love is my greatest gift.');
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(fadeOutPreloader, 1400);
  setTimeout(revealName, 800);
  setTimeout(typeLetter, 1800);
  calculateLoveTime();
  setInterval(calculateLoveTime, 60000);
  spawnPetals();
  revealOnScroll();
  addCursorHearts();
  buildMemories();

  if (openMemoryButton) {
    openMemoryButton.addEventListener('click', openMemorySection);
  }

  if (openVideoButton) {
    openVideoButton.addEventListener('click', openVideoSection);
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', hideLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) hideLightbox();
    });
  }
});

openSurpriseBtn.addEventListener('click', () => {
  document.getElementById('surprise').scrollIntoView({ behavior: 'smooth' });
  openGift();
});

giftBox.addEventListener('click', openGift);

audioBtn.addEventListener('click', toggleAudio);

easterEggStar.addEventListener('click', activateEasterEgg);

window.addEventListener('scroll', () => {
  const top = window.scrollY;
  const hearts = document.querySelectorAll('.cursor-heart');
  hearts.forEach((heart, index) => {
    heart.style.transform = `translate(-50%, -50%) translateY(${top * 0.01 + index}px)`;
  });
});
