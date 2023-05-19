document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.carousel-slide');
    var currentSlide = 0;
    var carouselPrev = document.querySelector('.carousel-prev');
    var carouselNext = document.querySelector('.carousel-next');
  
    function showSlide(n) {
      slides[currentSlide].style.display = 'none';
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = 'block';
    }
  
    carouselPrev.addEventListener('click', function() {
      showSlide(currentSlide - 1);
    });
  
    carouselNext.addEventListener('click', function() {
      showSlide(currentSlide + 1);
    });
  
    showSlide(currentSlide);
  });
  