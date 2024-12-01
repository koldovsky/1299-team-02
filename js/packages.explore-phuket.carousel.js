let nextDom = document.getElementById("arrows__next");
let prevDom = document.getElementById("arrows__prev");
let carouselDom = document.querySelector(".explore__carousel");
let listItemsDom = document.querySelector(
  ".explore__carousel .explore__carousel-list"
);
let thumbnailDom = document.querySelector(
  ".explore__carousel .explore__carousel-thumbnail"
);

nextDom.onclick = function () {
  showSlider("arrows__next");
};

prevDom.onclick = function () {
  showSlider("arrows__prev");
};

let timeRunning = 2500;
let runTimeOut;
const timeOutNext = 15000;
let runAutoRun = (setInterval(() => {
  nextDom.click();
}, timeOutNext));

function showSlider(type) {
  let itemsSlider = document.querySelectorAll(
    ".explore__carousel .explore__carousel-list .carousel__item"
  );
  let itemsThumbnail = document.querySelectorAll(
    ".explore__carousel .explore__carousel-thumbnail .carousel__item"
  );

  if (type === "arrows__next") {
    listItemsDom.appendChild(itemsSlider[0]);
    thumbnailDom.appendChild(itemsThumbnail[0]);
    carouselDom.classList.add("arrows__next");
  } else {
    const positionLastItem = itemsSlider.length - 1;
    listItemsDom.prepend(itemsSlider[positionLastItem]);
    thumbnailDom.prepend(itemsThumbnail[positionLastItem]);
    carouselDom.classList.add("arrows__prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("arrows__next");
    carouselDom.classList.remove("arrows__prev");
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setInterval(() => {
    nextDom.click();
  }, timeOutNext);
}

// const images = document.querySelectorAll(".carousel__img");
// let currentIndex = 0;

// function moveCarousel() {
//   const currentImg = images[currentIndex];
//   const nextIndex = (currentIndex + 1) % images.length;
//   const nextImg = images[nextIndex];
//   currentImg.classList.remove("active");
//   currentImg.classList.add("prev");
//   nextImg.classList.add("active");
//   setTimeout(() => currentImg.classList.remove("prev"), 500);
//   currentIndex = nextIndex;
// }

// images[0].classList.add("active");

// setInterval(moveCarousel, 3000);

// function moveCarousel() {
//     const gallery = document.querySelector(".explore__gallery");
//     const items = gallery.querySelectorAll(".carousel__img");

//     if (items.length > 1) {
//         const firstImg = items[0];
//         gallery.appendChild(firstImg);
//     }
// }

// setInterval(moveCarousel, 3000);
