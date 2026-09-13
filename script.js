console.log("Lore Archive Initialized.");
// --- NAVBAR TOGGLE LOGIC ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Meaningful DOM manipulation
    });
}
