// Smooth scrolling for in-page navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.navbar').classList.toggle('active');
});

// Slideshow functionality
let slideIndex = 0;

function showSlides(n) {
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');
  
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides
  slides.forEach(slide => slide.style.display = "none");

  // Remove active class from all dots
  dots.forEach(dot => dot.classList.remove('active'));

  // Show the current slide and activate the corresponding dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add('active');
}

// Navigation control
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Automatically move to the next slide every 3 seconds
function autoSlide() {
  showSlides(slideIndex += 1);
  setTimeout(autoSlide, 3000);
}

// Initialize the first slide and start auto-sliding
showSlides(slideIndex);
autoSlide();
