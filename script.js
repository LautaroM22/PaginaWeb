// Swiper para el slider principal
var swiper1 = new Swiper(".mySwiper-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".mySwiper-1 .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mySwiper-1 .swiper-button-next",
    prevEl: ".mySwiper-1 .swiper-button-prev",
  },
});

// Swiper para los productos (uno por cada tab)
var swiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".mySwiper-2 .swiper-button-next",
    prevEl: ".mySwiper-2 .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// Actualiza el Swiper cuando se cambia de pestaña (tab)
let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function (input) {
  input.addEventListener("change", function () {
    let id = input.value;
    let thisSwiper = document.getElementById("swiper" + id);
    if (thisSwiper && thisSwiper.swiper) {
      thisSwiper.swiper.update();
    }
  });
});
