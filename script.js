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
const galleryGrid = document.getElementById('galleryGrid');
const carouselWindow = document.getElementById('carouselWindow');
const photoAlbumOverlay = document.getElementById('photoAlbumOverlay');
const photoScroller = document.getElementById('photoScroller');
const openPhotoAlbumBtn = document.getElementById('openPhotoAlbumBtn');
const albumClose = document.getElementById('albumClose');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
let slides = [];
const loveCounter = document.getElementById('loveCounter');
const easterEggStar = document.getElementById('easterEggStar');
const hero = document.getElementById('welcome');
let currentSlide = 0;
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

// Using your uploaded local images for the album.
const photoUrls = [
  'assets/photos/photo1.jpg',
  'assets/photos/photo2.jpg',
  'assets/photos/photo3.jpg',
  'assets/photos/photo4.jpg'
];

const photoCaptions = [
  'Every memory with you is a chapter of our forever.',
  'Your smile makes every day feel like a dream.',
  'Together we turn ordinary moments into magic.',
  'You are my favorite story, my heart, my home.'
];

const memoryMessages = [
  'Each smile with you is a new favorite memory.',
  'Our laughter still echoes in every corner of my heart.',
  'Life is softer when I am holding your hand.',
  'The warmest moments are the ones with you.'
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
  if (!romanticAudio.src) {
    alert('Add a romantic tune to assets/music/romantic.mp3 for the audio player.');
    return;
  }
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
  lightboxImage.src = src;
  lightbox.classList.add('open');
}

function hideLightbox() {
  lightbox.classList.remove('open');
}

function buildPhotoSets() {
  if (!galleryGrid || !carouselWindow || !photoScroller) return;

  galleryGrid.innerHTML = photoUrls.map((url, index) => `
    <div class="gallery-card lightbox-trigger" data-src="${url}">
      <img src="${url}" alt="Memory ${index + 1}" />
      <div class="photo-label">
        <h3>Memory ${index + 1}</h3>
        <p>${photoCaptions[index] || ''}</p>
      </div>
    </div>
  `).join('');

  carouselWindow.innerHTML = photoUrls.map((url, index) => `
    <div class="carousel-slide${index === 0 ? ' active' : ''}" data-index="${index}">
      <img src="${url}" alt="Sweet Moment ${index + 1}" />
      <p>${memoryMessages[index] || photoCaptions[index] || ''}</p>
    </div>
  `).join('');

  photoScroller.innerHTML = photoUrls.map((url, index) => `
    <div class="photo-frame">
      <img src="${url}" alt="Album ${index + 1}" />
      <p>${photoCaptions[index] || ''}</p>
    </div>
  `).join('');

  slides = document.querySelectorAll('.carousel-slide');
  document.querySelectorAll('.lightbox-trigger').forEach((item) => {
    item.addEventListener('click', () => showLightbox(item.dataset.src));
  });
}

function openAlbum() {
  const gallerySection = document.getElementById('galleryGrid');
  if (gallerySection) gallerySection.classList.remove('hidden');
  photoAlbumOverlay.classList.add('open');
}

function closeAlbum() {
  photoAlbumOverlay.classList.remove('open');
}

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
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
  buildPhotoSets();
});

openSurpriseBtn.addEventListener('click', () => {
  document.getElementById('surprise').scrollIntoView({ behavior: 'smooth' });
  openGift();
});

giftBox.addEventListener('click', openGift);

audioBtn.addEventListener('click', toggleAudio);

lightboxClose.addEventListener('click', hideLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) hideLightbox();
});

if (openPhotoAlbumBtn) {
  openPhotoAlbumBtn.addEventListener('click', openAlbum);
}

if (albumClose) {
  albumClose.addEventListener('click', closeAlbum);
}

prevSlide.addEventListener('click', () => changeSlide(-1));
nextSlide.addEventListener('click', () => changeSlide(1));

easterEggStar.addEventListener('click', activateEasterEgg);

window.addEventListener('scroll', () => {
  const top = window.scrollY;
  const hearts = document.querySelectorAll('.cursor-heart');
  hearts.forEach((heart, index) => {
    heart.style.transform = `translate(-50%, -50%) translateY(${top * 0.01 + index}px)`;
  });
});
