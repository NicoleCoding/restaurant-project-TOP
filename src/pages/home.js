import heroImage from '../assets/jakub-kapusnak-tEVisOXz26Y-unsplash.jpg';
import { pageLoad } from '../pageLoad';

// The module for the home page.
export function getHome() {
    // Elements declarations
    const homeContent = document.createElement('div');
    const homeHeading = document.createElement('h2');
    const heroSection = document.createElement('section');
    const heroText = document.createElement('p');
    const heroButton = document.createElement('button');

    // Adding content and attributes to the elements
    homeHeading.textContent = "Welcome!";
    heroSection.setAttribute('id', 'hero');
    heroText.setAttribute('id', 'hero-text');
    heroText.textContent = "Step into our restaurant and experience the true essence of Italian cooking. From homemade pasta crafted with the finest flour to wood-fired pizzas topped with the freshest ingredients, each dish is a celebration of Italy's culinary traditions. Our menu showcases a diverse array of antipasti, primi, secondi, and dolci, all prepared with passion and precision.";
    heroButton.textContent = "Explore our menu";
    heroButton.setAttribute('class', 'button');
    heroButton.addEventListener('click', (e) => {
        e.preventDefault();
        pageLoad('menu');
        
    });

    // Add background to hero section
    heroSection.style.backgroundImage = `url(${heroImage})`;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';

    // Appending the elements to the home content
    heroSection.appendChild(homeHeading);
    heroSection.appendChild(heroText);
    heroSection.appendChild(heroButton);
    homeContent.appendChild(heroSection);

    return homeContent;
}