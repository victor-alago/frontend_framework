const navStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "1em 2em",
	width: "100%",
};

export const naveBar = ({ links = [{ href: "#", text: "Home" }] } = {}) => {
	// Create the nav element
	const navElement = document.createElement("nav");
	
	// Apply styles
	Object.entries(navStyle).forEach(([key, value]) => {
		navElement.style[key] = value;
	});
	
	// Create logo section with image
	const logoSection = document.createElement("div");
	const logoImg = document.createElement("img");
	logoImg.src = "./assets/logo.svg";
	logoImg.alt = "Maxx";
	logoImg.style.height = "40px"; // Adjust size as needed
	logoSection.appendChild(logoImg);
	
	// Create links container
	const linksContainer = document.createElement("div");
	linksContainer.classList.add("nav-links");
	
	// Loop through links array to dynamically generate links
	links.forEach(({ href, text }) => {
		const link = document.createElement("a");
		link.setAttribute("href", href);
		link.innerText = text;
		link.style.color = "white";
		link.style.textDecoration = "none";
		link.style.fontSize = "1.1rem";
		linksContainer.appendChild(link);
	});
	
	// Append the logo section and links container to the navbar
	navElement.appendChild(logoSection);
	navElement.appendChild(linksContainer);
	
	return navElement;
};
