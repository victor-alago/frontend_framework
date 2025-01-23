/**
 *
 * @param {string} text // text to display inside the button
 * @param {function} onclick // function to run whenever clicked
 * @param {string} className // additional classes for the button: "primary-btn" | "secondary-btn" | "third-color"
 * @returns HTMLButtonElement
 */

export const button = (text, onclick, className) => {
    // Create the button element
    const btnElem = document.createElement("button");

    // Set the button text
    btnElem.innerText = text;

    // Add the provided className for styling
    if (className) {
        btnElem.classList.add(className);
    }

    // Attach the click event listener
    if (typeof onclick === "function") {
        btnElem.addEventListener("click", onclick);
    }

    // Return the constructed button element
    return btnElem;
};
