// Get elements
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const triggerImage = document.getElementById('trigger-image');
const triggerText = document.getElementById('trigger-text');
const introVideo = document.getElementById('intro-video');
const container = document.querySelector('.container');

// Toggle menu function
function toggleMenu() {
    hamburger.classList.toggle('open');
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('open');
}

// Trigger image click function
function handleTriggerClick() {
    // Hide text immediately
    triggerText.style.display = 'none';

    // Add neon pink glow to image
    triggerImage.classList.add('neon-pink');

    // After 1 second, hide image and show video
    setTimeout(() => {
        triggerImage.style.display = 'none';
        introVideo.style.display = 'block';
        introVideo.play();
    }, 1000);
}

// Event listeners
hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
triggerImage.addEventListener('click', handleTriggerClick);

// Close menu when clicking on a menu button (optional, since buttons open new tabs)
document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', () => {
        // Optionally close the menu after clicking
        // toggleMenu();
    });
});
