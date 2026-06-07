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
  "Happy birthday l ahla w azyan  nousti f denya 🥳🥳🥳❤️❤️❤️ hditlik cadouet 9bl ama famech cadeau y5lik ttdhkr les souvenires eli 3chnehom lkol 7aja t93adlik mba3d tchoufha ttdhkrha fi kol wa9t ....Khw 5mmt na3ml site mzyen hedha lina, so we can always look back on the happiest moments we've shared together—every smile, every laugh, every romantic date, and every precious memory we've created. Anyway, enjoy ,  hope you love it ❤️❤️"
];

const relationshipStart = new Date('2025-09-14T00:00:00');

const memoryPhotos = [
  { src: 'assets/photos/photo1.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo2.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo3.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo4.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo5.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo6.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo7.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo8.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo9.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo10.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo11.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo12.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo13.jpg', title: '', quote: '' },
  { src: 'assets/photos/photo14.jpg', title: '', quote: '' }
];

const videoMemories = [
  { src: 'assets/videos/video1.mp4', title:'' },
  { src: 'assets/videos/video2.mp4', title:'' },
  { src: 'assets/videos/video3.mp4', title:'' },
  { src: 'assets/videos/video4.mp4', title:'' },
  { src: 'assets/videos/video5.mp4', title:'' },
  { src: 'assets/videos/video6.mp4', title:'' },
  { src: 'assets/videos/video7.mp4', title:'' },
  { src: 'assets/videos/video8.mp4', title:'' },
  { src: 'assets/videos/video9.mp4', title:'' },
  { src: 'assets/videos/video10.mp4', title:'' },
  { src: 'assets/videos/video11.mp4', title:'' },
  { src: 'assets/videos/video12.mp4', title:'' },
  { src: 'assets/videos/video13.mp4', title:'' }
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
    romanticAudio.play()
      .then(() => { audioBtn.textContent = 'Pause Music'; })
      .catch(err => console.log("Playback failed:", err));
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

  // =========================
  // 📸 PHOTO STACK (UNCHANGED)
  // =========================
  galleryStack.innerHTML = memoryPhotos.map((item, index) => {
  const rotate = -10 + (index * 2);

  return `
    <div class="stack-card"
         data-index="${index}"
         style="
           top:50%;
           left:50%;
           transform:translate(-50%, -50%) rotate(${rotate}deg);
           z-index:${1000 - index};
         ">
      <img src="${item.src}" alt="${item.title}" />
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

  // =========================
  // 🎥 VIDEO (INSTAGRAM STYLE)
  // =========================
  videoStack.innerHTML = videoMemories.map((item) => {
    return `
      <div class="video-item">
        <video src="${item.src}" playsinline muted controls preload="metadata"></video>
        <div class="stack-label">
          <h3>${item.title}</h3>
        </div>
      </div>
    `;
  }).join('');
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

romanticAudio.addEventListener('error', () => {
  console.error("Audio file not found. Make sure 'assets/music/romantic.mp3' exists.");
});

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
  document.getElementById('letter').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });

  if (romanticAudio.paused) {
    romanticAudio.play()
      .then(() => {
        audioBtn.textContent = 'Pause Music';
      })
      .catch(() => console.log("Playback interaction required"));
  }
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
