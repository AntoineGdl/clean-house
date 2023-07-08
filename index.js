// BUTTON SCROLL TO TOP
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

function scrollTopSmooth() {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
  document.documentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// NAVBAR FIXED
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".container-header");
    var scrolled = window.scrollY > 0;
    if (scrolled) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  

// CARROUSSEL

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

// BOUTONS SUR LA CARTE NETTOYAGE
document.getElementById("ouvrirModal").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".modal").style.display = "none";
    document.getElementById("poles").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("ouvrirModal2").addEventListener("click", function() {
    document.querySelector(".modal2").style.display = "block";
});

document.querySelector(".close2").addEventListener("click", function() {
    document.querySelector(".modal2").style.display = "none";
    document.getElementById("poles").scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("ouvrirModal3").addEventListener("click", function() {
    document.querySelector(".modal3").style.display = "block";
});

document.querySelector(".close3").addEventListener("click", function() {
    document.querySelector(".modal3").style.display = "none";
    document.getElementById("poles").scrollIntoView({ behavior: 'smooth' });
});

// REDIRECTION DES BOUTONS "contactez-nous"
document.querySelector(".contactez-nous").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
});

document.querySelector(".contact1").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
});
