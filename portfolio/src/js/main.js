(() => {
    //open nav menu
    const menuButton = document.querySelector(".header__burger-menu");
    menuButton.addEventListener("click", () => {
        const nav = document.querySelector(".header__nav");
        nav.classList.toggle("open");
    });

    //change header style on scroll
    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        header.classList.toggle("scrolled", window.scrollY > 0);
    });
})();
