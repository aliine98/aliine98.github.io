import { typing, textElement, text } from "./typing-animation.js";

document.querySelector("body").classList.remove("no-JS");

//open nav menu
const menuButton = document.querySelector(".header__burger-menu");
menuButton.addEventListener("click", () => {
    document.querySelector(".header__nav").classList.toggle("open");
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
