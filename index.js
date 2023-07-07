const carouselContainer = document.querySelector('.carousel-container');
const slideWidth = carouselContainer.clientWidth;
const carouselSlides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots');

const numSlides = 7; // Nombre de slides à afficher
let slideIndex = 0;

function showSlide(index) {
    const slideWidth = carouselSlides[index].clientWidth;
    carouselContainer.style.transform = `translateX(-${index * slideWidth}px)`;
  }

function createDots() {
  for (let i = 0; i < numSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('carousel-dot');
    if (i === 0) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      slideIndex = i;
      showSlide(slideIndex);
      updateDots();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

createDots();
