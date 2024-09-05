import restaurantImage from '../assets/restaurant-image.jpg';

// Function to create the homepage
function createHomepage() {
    const content = document.getElementById('content');

    // Create and append headline
    const headline = document.createElement('h1');
    headline.textContent = 'Bienvenue au Petit Gourmand';
    content.appendChild(headline);

    // Create and append image
    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'Our beautiful restaurant';
    image.style.maxWidth = '100%';
    content.appendChild(image);

    // Create and append description
    const description = document.createElement('p');
    description.textContent = 'Experience culinary excellence at our charming restaurant. We offer a delightful blend of flavors, warm ambiance, and exceptional service. Join us for an unforgettable dining experience!';
    content.appendChild(description);
}

// Export the function
export default createHomepage;
