"use strict";

// Import necessary components and services
import { button } from "./components/compBtn.js";
import { eclipseComp } from "./components/eclipseComp.js";
import { headerComp } from "./components/headerComp.js";
import { showModal } from "./services/services.js";

// Select the main application container
const app = document.getElementById("app");

// Render the header
const renderHeader = () => {
  const header = headerComp();
  app.appendChild(header);
};

// Render the Eclipse component only if explicitly required
const renderEclipseComp = (shouldRender = false) => {
  if (shouldRender) {
    const eclipse = eclipseComp("secondary");
    app.appendChild(eclipse);
  }
};

// Set up modal buttons
const setupModalTriggers = () => {
  // Create "First Button"
  const firstButton = button(
    "First Button", 
    () => showModal("primary-btn", "The first title is here!", "This is the first button body!"), 
    "secondary-btn"
  );

  // Create "Second Button"
  const secondButton = button(
    "Second Button", 
    () => showModal("secondary-btn", "Some other cool title now!", "This is another text of the body 📳"), 
    "secondary-btn"
  );

  // Create "Third Button"
  const thirdButton = button(
    "Third Button", 
    () => {
      // Create an image container
      const imageContainer = document.createElement("div");
      const img = new Image();
      img.src = "./assets/mountain.jpeg";  // Adjust the path if necessary
      img.alt = "Mountain Image";
      imageContainer.appendChild(img);

      // Show the modal with the image inside
      showModal("third-color", "Third title now", imageContainer);
    }, 
    "secondary-btn"
  );

  // Style the buttons
  [firstButton, secondButton, thirdButton].forEach((btn) => {
    btn.style.margin = "10px";
    btn.style.padding = "10px";
    btn.style.cursor = "pointer";
  });

  // Append buttons in the correct order
  app.appendChild(firstButton);
  app.appendChild(secondButton);
  app.appendChild(thirdButton);
};

// Initialize the application
const initApp = () => {
  renderHeader();
  renderEclipseComp(false); // Disable rendering of the red circle
  setupModalTriggers();
};

// Call the initialization function
initApp();
