import { typing, textElement, text } from "./typing-animation.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

document.querySelector("body").classList.remove("no-js");

//open nav menu
const menuButton = document.querySelector(".header__burger-menu");
menuButton.addEventListener("click", () => {
    const nav = document.querySelector(".header__nav");
    nav.classList.toggle("open");
    const ariaExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !ariaExpanded);
    nav.setAttribute("aria-hidden", ariaExpanded);
});

//change header style on scroll
window.addEventListener("scroll", () => {
    document.querySelector(".header").classList.toggle("scrolled", window.scrollY > 0);
});

//no animation in the title for media reduced motion
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    textElement.textContent = text;
} else {
    //init typing animation
    typing();
}

new Swiper(".swiper", {
    effect: "cards",
    a11y: {
        prevSlideMessage: "Projeto anterior",
        nextSlideMessage: "Próximo projeto",
        paginationBulletMessage: "Ir para projeto {{index}}"
    },
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    rewind: true,
    keyboard: true,
});
