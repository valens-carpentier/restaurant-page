import pizzaImage from '../assets/pizza-image.jpeg';
import burgerImage from '../assets/burger-image.jpeg';
import pastaImage from '../assets/pasta-image.jpeg';
import saladImage from '../assets/salad-image.jpeg';

function createMenu() {
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);

    const menuItems = [
        { name: "Burger", description: "A juicy burger with fries", price: 10, image: burgerImage },
        { name: "Pizza", description: "A delicious pizza with a side salad", price: 12, image: pizzaImage },
        { name: "Pasta", description: "A delicious pasta with garlic bread", price: 15, image: pastaImage },
        { name: "Salad", description: "A fresh garden salad with vinaigrette", price: 10, image: saladImage },
    ];

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;
        menuItem.appendChild(itemDescription);

        const itemPrice = document.createElement("span");
        itemPrice.textContent = `$${item.price}`;
        menuItem.appendChild(itemPrice);

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;
        menuItem.appendChild(itemImage);

        menu.appendChild(menuItem);
    });

    content.appendChild(menu);
}

export default createMenu;