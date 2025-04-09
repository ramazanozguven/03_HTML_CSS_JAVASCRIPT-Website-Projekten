let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
};

let cart = document.querySelector(".cart");

document.querySelector("#cart-icon").onclick = () => {
  cart.classList.toggle("active");
  search.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
};

let user = document.querySelector(".user");

document.querySelector("#user-icon").onclick = () => {
  user.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
};


// responsive

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  
  
};

window.onscroll = () => {
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
}











//navbar
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

// slider swiper
var swiper = new Swiper(".new-arrival", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// slider
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".new-arrival", {
    slidesPerView: 1, // Tek seferde kaç slide gösterileceğini belirler
    spaceBetween: 20, // Slide'lar arası mesafe
    loop: true, // Sonsuz döngü
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
});
