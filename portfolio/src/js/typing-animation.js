export { typing, textElement, text };

const textElement = document.querySelector(".home__title--highlight");
const text = textElement.dataset.text;

/**
 * Simulates typing effect by gradually displaying characters of a text from html data attribute.
 * @returns None
 */
async function typing() {
    for (let i = 0; i < text.length; i++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                textElement.innerHTML += text[i];
                resolve();
            }, 100);
        });
    }
    deleteTyping(text.length);
}

/**
 * Deletes the typing effect by gradually removing characters from the text element.
 * @param {number} textLength - The length of the text to delete.
 * @returns None
 */
async function deleteTyping(textLength) {
    for (let i = textLength; i >= 0; i--) {
        await new Promise((resolve) => {
            setTimeout(() => {
                const deletingText = textElement.textContent.substring(0, i);
                textElement.textContent = deletingText;
                resolve();
            }, 100);
        });
    }
    typing();
}
