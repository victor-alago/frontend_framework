import { modalComp } from "../components/modalComp.js";

// Reference to the application container
const app = document.getElementById("app");
let currentModal;

/**
 * Shows a modal with the provided class name, title, and body content.
 *
 * @param {string} className - Class name for the modal style.
 * @param {string} titleText - The title text to be shown in the modal.
 * @param {string|HTMLElement} bodyText - The body text or HTML element to be displayed in the modal.
 */
export const showModal = (className, titleText, bodyText) => {
  // Close and clean up any existing modal
  if (currentModal) {
    currentModal.classList.add("d-none");
    currentModal.remove();
  }

  // If the className is "third-color" and an image is part of the body, handle that properly
  if (className === "third-color" && bodyText instanceof HTMLElement) {
    bodyText.classList.add("modal-image-container");  // Add custom class for styling if needed
  }

  // Dynamically create modal using modalComp with the passed title, body, and className
  const modalElement = modalComp(titleText, bodyText, className);

  app.appendChild(modalElement);

  currentModal = document.querySelector(".overlay-modal");
  if (currentModal) {
    currentModal.classList.remove("d-none");
  }

  // Attach a listener to close modal properly
  const closeButton = document.querySelector(".btn");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      if (currentModal) {
        currentModal.classList.add("d-none");
        currentModal.remove();
      }
    });
  }
};
