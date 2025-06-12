  let currentSlide = 0;
const carouselInner = document.getElementById('carouselInner');
const totalSlides = carouselInner.children.length;
let autoSlideInterval = null;

function showSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
  resetAutoSlide();
}

function prevSlide() {
  showSlide(currentSlide - 1);
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// 初始化自动轮播
startAutoSlide();