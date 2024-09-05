import passardImage from '../assets/passard-image.jpeg';

function createAbout() {
    const content = document.getElementById("content");
    const about = document.createElement("div");
    about.classList.add("about");

    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = "About Us";
    about.appendChild(aboutTitle);

    const description = document.createElement("p");
    description.textContent = "Experience culinary excellence at our charming restaurant. We offer a delightful blend of flavors, warm ambiance, and exceptional service. Join us for an unforgettable dining experience!";
    about.appendChild(description);
    
    const image = document.createElement("img");
    image.src = passardImage;
    image.alt = "Chef Alfredo Passard";
    image.style.maxWidth = "100%";
    about.appendChild(image);

    content.appendChild(about);
}

export default createAbout;