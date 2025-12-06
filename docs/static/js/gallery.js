let slideIndex = 0;
const slides = document.querySelectorAll('.slide-item');
const dots = document.querySelectorAll('.dot');
const slideContainer = document.querySelector('.gallery-slide');

function showSlide(n) {
  if(n >= slides.length) slideIndex = 0;
  else if(n < 0) slideIndex = slides.length - 1;
  else slideIndex = n;

  const offset = -slideIndex * 100;
  slideContainer.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

// Arrow controls
document.querySelector('.arrow.left').addEventListener('click', () => showSlide(slideIndex - 1));
document.querySelector('.arrow.right').addEventListener('click', () => showSlide(slideIndex + 1));

// Dot controls
function currentSlide(n) { showSlide(n - 1); }

// Initialize
showSlide(slideIndex);

// --- Touch support ---
let startX = 0;
let isDragging = false;

slideContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slideContainer.addEventListener('touchmove', (e) => {
  if(!isDragging) return;
  const deltaX = e.touches[0].clientX - startX;
  slideContainer.style.transform = `translateX(${ -slideIndex*100 + deltaX/slides[0].clientWidth*100 }%)`;
});

slideContainer.addEventListener('touchend', (e) => {
  isDragging = false;
  const diff = e.changedTouches[0].clientX - startX;
  if(diff > 50) showSlide(slideIndex - 1);
  else if(diff < -50) showSlide(slideIndex + 1);
  else showSlide(slideIndex); // snap back
});
