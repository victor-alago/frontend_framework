import { button } from "./compBtn.js";

/**
 * Creates a modal component.
 * @param {string} titleText - Title text for the modal.
 * @param {string|HTMLElement} bodyText - Modal body text or node.
 * @param {string} className - Class name for modal styling purposes.
 * @returns {HTMLElement} - The complete modal element.
 */
export const modalComp = (
  titleText = "Default title",
  bodyText = "Default body",
  className = ""
) => {
  // Validate className for invalid characters
  if (className && !/^[a-zA-Z0-9-_ ]+$/.test(className)) {
    throw new Error(`Invalid className: ${className}`);
  }

  const divElement = document.createElement("div");
  divElement.setAttribute("tabindex", "-1");
  divElement.classList.add("overlay-modal", "d-none");

  // Close modal when clicking outside
  divElement.addEventListener("click", (e) => {
    if (e.target === divElement) {
      divElement.classList.add("d-none");
    }
  });

  // Modal content container
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  if (className) modalContent.classList.add(className);

  // Modal header
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("h2");
  modalTitle.innerText = titleText;

  const closeButton = button("X", () => {
    divElement.classList.add("d-none");
  }, "btn-close");

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  // Modal body
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  if (typeof bodyText === "string") {
    modalBody.innerText = bodyText;
  } else if (bodyText instanceof HTMLElement) {
    modalBody.appendChild(bodyText);  // Add image or any other HTML element
  } else {
    throw new Error("Invalid bodyText: Must be a string or HTMLElement");
  }

  // Modal footer
  const modalFooter = document.createElement("footer");
  modalFooter.classList.add("modal-footer");

  const actionButton = button("OK", () => {
    console.log("Action performed!");
    divElement.classList.add("d-none");
  }, "btn-action");

  modalFooter.appendChild(actionButton);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  divElement.appendChild(modalContent);

  return divElement;
};
