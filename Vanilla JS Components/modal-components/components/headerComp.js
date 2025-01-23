import { naveBar } from "./navBar.js";

export const headerComp = () => {
	const headerElement = document.createElement("header");
	headerElement.style.display = "flex";
	headerElement.style.flexDirection = "column";
	
	// Add the navigation bar to the header
	const navBarElement = naveBar();
	
	// Create a title container for centering
	const titleContainer = document.createElement("div");
	titleContainer.style.textAlign = "center";
	titleContainer.style.padding = "4rem 0";
	
	// Create a title element
	const title = document.createElement("h1");
	title.innerText = "This is a test title";
	title.style.margin = "0";
	title.style.fontSize = "3rem";
	
	// Append elements
	titleContainer.appendChild(title);
	headerElement.appendChild(navBarElement);
	headerElement.appendChild(titleContainer);
	
	return headerElement;
};
