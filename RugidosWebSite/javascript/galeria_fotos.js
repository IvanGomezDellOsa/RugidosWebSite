let slideIndex = 0;
showSlides();

function nextSlide() {
  slideIndex++;
  showSlides();
  resetTimer();
}

function prevSlide() {
  slideIndex--;
  showSlides();
  resetTimer();
}

function showCurrentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  resetTimer();
}

function showSlides() {
  const slides = document.querySelectorAll(".galeria_fotos__slides");
  const dotsContainer = document.querySelector(
    ".galeria_fotos__dots_container"
  );

  /* Limpiar los dots existentes */
  dotsContainer.innerHTML = "";

  /* Generar automatica los dots */
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dots");
    dot.setAttribute("onclick", `showCurrentSlide(${i + 1})`);
    dotsContainer.appendChild(dot);
  }

  /* Muestra el slide actual */
  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  /* Agrega la clase 'galeria_fotos__active' al dot del slide actual */
  const dots = document.querySelectorAll(".dots");
  dots[slideIndex].classList.add("galeria_fotos__active");
}

let timer = 7;
const reset_timer = timer;
let intervalId;

function resetTimer() {
  clearInterval(intervalId);
  timer = reset_timer;
  intervalId = setInterval(() => {
    timer--;
    if (timer < 1) {
      nextSlide();
    }
  }, 1000);
}

/* Inicia el primer timer automatico */
resetTimer();
