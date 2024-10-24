// JavaScript for Mobile Menu functionality

// Selecting elements
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelectorAll('.mobile-menu a');
const closeButton = document.querySelector('.close-menu');

// Function to show the mobile menu
function showMenu() {
    mobileMenu.classList.add('active');
}

// Function to hide the mobile menu
function hideMenu() {
    mobileMenu.classList.remove('active');
}

// Event listeners
menuToggle.addEventListener('click', showMenu);
closeButton.addEventListener('click', hideMenu);

// Hide menu and scroll to section when a menu link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior for smooth scroll
        hideMenu();

        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
