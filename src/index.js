// index.j
import createAbout from "./about.js";
import createHomepage from "./content.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";
import "./styles.css";

function cleanContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

cleanContent();
createHomepage();

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    cleanContent();
    createHomepage();
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    cleanContent();
    createMenu();
});

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
    cleanContent();
    createAbout();
});

const contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", () => {
    cleanContent();
    createContact();
});