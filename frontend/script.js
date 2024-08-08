// Toggling the access form (Sign In/Sign Up form)
let accessForm = document.querySelector(".access-form-container");

document.querySelector("#access-btn")?.addEventListener("click", () => {
  accessForm?.classList.toggle("active");
});

document.querySelector("#close-access-btn")?.addEventListener("click", () => {
  accessForm?.classList.remove("active");
});

// Toggling the search form
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn")?.addEventListener("click", () => {
  searchForm?.classList.toggle("active");
});

// Handling scroll events for the header
window.addEventListener("scroll", () => {
  searchForm?.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header .header-2")?.classList.add("active");
  } else {
    document.querySelector(".header .header-2")?.classList.remove("active");
  }
});

// Handling page load events for the header
window.addEventListener("load", () => {
  if (window.scrollY > 80) {
    document.querySelector(".header .header-2")?.classList.add("active");
  } else {
    document.querySelector(".header .header-2")?.classList.remove("active");
  }

  fadeOut();
});

// Loader and fade out functions
function loader() {
  document.querySelector(".loading-container")?.classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 4000);
}

// Swiper Initialization Function
function initializeSwiper(selector, options) {
  return new Swiper(selector, {
    ...options,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
  });
}

// Swiper for courses
initializeSwiper(".courses-slider", {
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Swiper for featured courses
initializeSwiper(".featured-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    450: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

// Swiper for student reviews
initializeSwiper(".reviews-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Swiper for instructor reviews
var swiper = new Swiper(".instructors-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
