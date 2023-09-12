import { typing, textElement, text } from "./typing-animation.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

document.querySelector("body").classList.remove("no-js");

const menuButton = document.querySelector(".header__burger-menu");
const nav = document.querySelector(".header__nav");

function setAriaAttributes() {
    const ariaExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !ariaExpanded);
    nav.setAttribute("aria-hidden", ariaExpanded);
}

//open nav menu
menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    setAriaAttributes();
});

//close nav menu after clicking on a link
const navLinks = document.querySelectorAll(".header__nav-list a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        setAriaAttributes();
    });
});

window.addEventListener("scroll", () => {
    //change header style on scroll
    document.querySelector(".header").classList.toggle("scrolled", window.scrollY > 0);

    //show scroll to top icon
    document.querySelector(".scroll-to-top").classList.toggle("show", window.scrollY > 100);
});

//no animation in the title for media reduced motion
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    textElement.textContent = text;
} else {
    //init typing animation
    typing();
}

//Swiper slide carousel
new Swiper(".swiper", {
    effect: "cards",
    cardsEffect: {
        perSlideOffset: 7,
        perSlideRotate: 1,
    },
    a11y: {
        prevSlideMessage: "Projeto anterior",
        nextSlideMessage: "Próximo projeto",
        paginationBulletMessage: "Ir para projeto {{index}}",
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
