// Slideshow Functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Scroll Triggered Animation
function handleScrollAnimation() {
  const elements = document.querySelectorAll('[data-animation]');
  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      element.classList.add('in-view');
    } else {
      element.classList.remove('in-view');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation); // Initial load
