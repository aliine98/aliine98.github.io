import { typing, textElement, text } from "./typing-animation.js";
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

document.querySelector("body").classList.remove("no-js");

function setAriaAttributes() {
    const ariaExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !ariaExpanded);
    nav.setAttribute("aria-hidden", ariaExpanded);
}

function initSwiperCarousel(autoplayValue) {
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
        autoplay: autoplayValue,
        rewind: true,
        keyboard: true,
    });
}

const menuButton = document.querySelector(".header__burger-menu");
const nav = document.querySelector(".header__nav");
const lightSwitch = document.querySelector(".header__dark-light-switch");

lightSwitch.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

//open nav menu
menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    setAriaAttributes();
});

//close nav menu after clicking on a link
const navLinks = document.querySelectorAll(".header__nav-item a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        setAriaAttributes();
    });
});

window.addEventListener("scroll", () => {
    //change header style on scroll
    document.querySelector(".header").classList.toggle("scrolled", window.scrollY > 0);

    //show scroll to top button
    document.querySelector(".scroll-to-top").classList.toggle("show", window.scrollY > 100);

    //mark active link upon scrolling to it's ref section

    function getYPosition(link) {
        const targetSection = document.querySelector(link.getAttribute("href"));
        return targetSection.getBoundingClientRect().top;
    }

    //returns correspondent link of the current visible section
    function getLastVisibleLink(positions) {
        const length = positions.length - 1;
        for (let i = length; i >= 0; i--) {
            if (positions[i] <= 50) {
                return navLinks[i];
            }
        }
        return navLinks[0];
    }

    const positions = [];
    for (let i = 0; i < navLinks.length; i++) {
        positions[i] = getYPosition(navLinks[i]);
    }

    const currentLink = getLastVisibleLink(positions);
    const activeLink = document.querySelector(".active");
    if (activeLink) activeLink.classList.remove("active");
    currentLink.classList.add("active");
});

const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (isReducedMotion) {
    //no animation in the title for media reduced motion
    textElement.textContent = text;

    //init swiper carousel without autoplay
    initSwiperCarousel(false);
} else {
    //init typing animation
    typing();

    //init swiper carousel with autoplay
    initSwiperCarousel({
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    });
}
