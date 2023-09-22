import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";
export { initSwiperCarousel };

/**
 * Initializes a Swiper carousel with the given autoplay value.
 *
 * @param {boolean | Object} autoplayValue - The value indicating whether the carousel should autoplay.
 */
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
