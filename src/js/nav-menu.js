export { toggleNavMenu, closeNavMenu, markActiveLink };

/**
 * Retrieves the vertical position of the target section associated with the given link.
 *
 * @param {HTMLElement} link - The link element that points to the target section.
 * @return {number} The vertical position of the target section.
 */
function getYPosition(link) {
    const targetSection = document.querySelector(link.getAttribute("href"));
    return targetSection.getBoundingClientRect().top;
}

/**
 * Generate the positions of each navigation link.
 *
 * @param {NodeListOf<HTMLElement>} navLinks - An array of navigation links.
 * @return {Array<number>} An array of positions for each navigation link.
 */
function getPositions(navLinks) {
    const positions = [];
    for (let i = 0; i < navLinks.length; i++) {
        positions[i] = getYPosition(navLinks[i]);
    }
    return positions;
}

/**
 * Finds and returns the last visible link in the navigation menu.
 *
 * @param {Array<number>} positions - An array of positions for each navigation link.
 * @param {NodeListOf<HTMLElement>} navLinks - An array of navigation links.
 * @return {HTMLElement} The last visible link in the navigation menu.
 */
function getLastVisibleLink(positions, navLinks) {
    const length = positions.length - 1;
    for (let i = length; i >= 0; i--) {
        if (positions[i] <= 100) {
            return navLinks[i];
        }
    }
    return navLinks[0];
}

/**
 * Marks the active link in the navigation menu.
 *
 * @param {NodeListOf<HTMLElement>} navLinks - An array of navigation links.
 */
function markActiveLink(navLinks) {
    const currentLink = getLastVisibleLink(getPositions(navLinks), navLinks);
    const activeLink = document.querySelector(".active");
    if (activeLink) activeLink.classList.remove("active");
    currentLink.classList.add("active");
}

/**
 * Toggles the visibility of the navigation menu when the menu button is clicked.
 *
 * @param {HTMLElement} menuButton - The menu button element.
 * @param {HTMLElement} nav - The navigation element.
 */
function toggleNavMenu(menuButton, nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("open");
        setAriaAttributes(menuButton, nav);
    });
}

/**
 * Sets the ARIA attributes for menu button and navigation
 *
 * @param {HTMLElement} menuButton - The menu button element.
 * @param {HTMLElement} nav - The navigation element.
 */
function setAriaAttributes(menuButton, nav) {
    const ariaExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !ariaExpanded);
    nav.setAttribute("aria-hidden", ariaExpanded);
}

/**
 * Closes the navigation menu when a link is clicked.
 *
 * @param {NodeListOf<HTMLElement>} navLinks - An array of navigation links.
 * @param {HTMLElement} menuButton - The menu button element.
 * @param {HTMLElement} nav - The navigation element.
 */
function closeNavMenu(navLinks, menuButton, nav) {
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            setAriaAttributes(menuButton, nav);
        });
    });
}
