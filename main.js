// Initialization for ES Users
import {
  Collapse,
  Dropdown,
  Carousel,
  Ripple,
  initTWE,
} from "./tw-elements.es.min.js";

initTWE({ Collapse, Dropdown, Carousel, Ripple });

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  spaceBetween: 5,
  // freeMode: true,
  Infinity: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
