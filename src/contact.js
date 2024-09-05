function createContact() {
    const content = document.getElementById("content");
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact Us";
    contact.appendChild(contactTitle);

    const contactDescription = document.createElement("p");
    contactDescription.textContent = "Contact us at info@restaurant.com or call us at +33 1 42 68 53 00.";
    contact.appendChild(contactDescription);

    content.appendChild(contact);
}

export default createContact;