import { typing } from "./typing-animation.js";
import { toggleNavMenu, closeNavMenu, markActiveLink } from "./nav-menu.js";
import { initSwiperCarousel } from "./init-swiper.js";

document.querySelector("body").classList.remove("no-js");

const menuButton = document.querySelector(".header__burger-menu");
const nav = document.querySelector(".header__nav");
const navLinks = document.querySelectorAll(".header__nav-item a");
const textElement = document.querySelector(".home__title--highlight");
const text = textElement.dataset.text;
const lightSwitch = document.querySelector(".header__dark-light-switch");

//change theme
lightSwitch.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

//open/close nav menu upon clicking on burger menu
toggleNavMenu(menuButton, nav);

//close nav menu after clicking on a link
closeNavMenu(navLinks, menuButton, nav);

window.addEventListener("scroll", () => {
    //change header style on scroll
    document.querySelector(".header").classList.toggle("scrolled", window.scrollY > 0);

    //show scroll to top button
    document.querySelector(".scroll-to-top").classList.toggle("show", window.scrollY > 100);

    //mark active link upon scrolling to it's ref section
    markActiveLink(navLinks);
});

const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (isReducedMotion) {
    //no animation in the title for media reduced motion
    textElement.textContent = text;

    //init swiper carousel without autoplay
    initSwiperCarousel(false);
} else {
    //init typing animation
    typing(textElement, text);

    //init swiper carousel with autoplay
    initSwiperCarousel({
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    });
}
