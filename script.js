const lightbox = document.getElementById("lightbox");
let slideIndex = 1;
showSlide(slideIndex);

const openModal = () => (lightbox.style.display = "flex");

const toSlide = n => showSlide((slideIndex = n));

function showSlide(n) {
  const slides = document.getElementsByClassName("modal__slide");
  const closeIcon = document.getElementById("close");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  closeIcon.addEventListener("click", () => (lightbox.style.display = "none"));
}
