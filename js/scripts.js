console.log('OK');

gsap.from('#pacman' , { duration: 3, translateX: -300, opacity: 0 });

gsap.to('#kite', { 
  duration: 2, 
  rotate: 5, 
  yoyo: true, 
  repeat: -1, 
  ease: "sine.inOut" 
});

gsap.to('.cloud', { 
  duration: 1.5, 
  x: 'random(-20, 20)', 
  y: 'random(-20, 20)', 
  scale: 'random(0.9, 1.1)', 
  repeat: -1, 
  yoyo: true, 
  ease: "sine.inOut" 
});



// Carousel
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
  
      const offset = -currentIndex * 100;
      document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
    }
  
    prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
    nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));
  
});