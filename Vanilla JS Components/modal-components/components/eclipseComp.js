/**
 *
 * @param {string} colorVariant // Defines the color variant of the ellipse: "primary", "secondary", or any custom class
 * @param {boolean} shouldRender // Controls whether the ellipse should be rendered or not
 * @returns {HTMLElement | null} // Returns a styled HTML element representing the ellipse, or null if shouldRender is false
 */
export const eclipseComp = (colorVariant = "primary", shouldRender = true) => {
    // If rendering is disabled, return null
    if (!shouldRender) return null;

    // Create a div element to act as the ellipse
    const eclipseElement = document.createElement("div");

    // Add the base class for styling the ellipse
    eclipseElement.classList.add("eclipse");

    // Add the color variant class
    if (colorVariant) {
        eclipseElement.classList.add(colorVariant);
    }

    // Style the ellipse directly
    eclipseElement.style.width = "100px";
    eclipseElement.style.height = "100px";
    eclipseElement.style.borderRadius = "50%";
    eclipseElement.style.backgroundColor = colorVariant === "primary"
        ? "blue"
        : colorVariant === "secondary"
        ? "red"
        : "gray"; // Default fallback color for custom classes

    return eclipseElement;
};
