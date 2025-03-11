const carouselSlides = document.getElementById('carouselSlides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('#carouselSlides > div');
let currentIndex = 0;
const totalSlides = slides.length;

// Function to update the carousel
function updateCarousel() {
  carouselSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Show previous slide
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
  updateCarousel();
});

// Show next slide
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

// Auto-slide every 5 seconds (optional)
setInterval(() => {
  currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
  updateCarousel();
}, 5000);
