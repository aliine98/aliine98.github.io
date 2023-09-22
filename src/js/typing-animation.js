export { typing };

/**
 * Generates a typing animation for a given text in the HTML element.
 *
 * @param {HTMLElement} textElement - The HTML element where the text will be typed.
 * @param {string} text - The text to be typed.
 */
async function typing(textElement, text) {
    for (let i = 0; i < text.length; i++) {
        await new Promise(resolve => {
            setTimeout(() => {
                textElement.innerHTML += text[i];
                resolve();
            }, 100);
        });
    }
    deleteTyping(text.length, textElement, text);
}

/**
 * Deletes the text in the given textElement by removing characters one by one in a timed loop.
 *
 * @param {number} textLength - The length of the text to be deleted.
 * @param {HTMLElement} textElement - The HTML element containing the text to be deleted.
 * @param {string} text - The text to be deleted.
 */
async function deleteTyping(textLength, textElement, text) {
    for (let i = textLength; i >= 0; i--) {
        await new Promise(resolve => {
            setTimeout(() => {
                const deletingText = textElement.textContent.substring(0, i);
                textElement.textContent = deletingText;
                resolve();
            }, 100);
        });
    }
    typing(textElement, text);
}
