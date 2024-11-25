const images = document.querySelectorAll(".carousel__img");
let currentIndex = 0;

function moveCarousel() {
  const currentImg = images[currentIndex];
  const nextIndex = (currentIndex + 1) % images.length;
  const nextImg = images[nextIndex];
  currentImg.classList.remove("active");
  currentImg.classList.add("prev");
  nextImg.classList.add("active");
  setTimeout(() => currentImg.classList.remove("prev"), 500);
  currentIndex = nextIndex;
}

images[0].classList.add("active");

setInterval(moveCarousel, 2000);
