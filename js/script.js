console.log("Lore Archive Initialized.");
// --- NAVBAR TOGGLE LOGIC ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Meaningful DOM manipulation
    });
}

// --- ACCORDION LOGIC (For about.html) ---
const accBtns = document.querySelectorAll('.accordion-btn');
accBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// --- FORM VALIDATION LOGIC (For contact.html) ---
const form = document.getElementById('loreForm');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop page reload
        
        const nameVal = document.getElementById('scholarName').value.trim();
        const loreVal = document.getElementById('loreEntry').value.trim();
        let isValid = true;

        if (nameVal === "") {
            document.getElementById('nameError').style.display = "block";
            isValid = false;
        } else {
            document.getElementById('nameError').style.display = "none";
        }

        if (loreVal === "") {
            document.getElementById('loreError').style.display = "block";
            isValid = false;
        } else {
            document.getElementById('loreError').style.display = "none";
        }

        if (isValid) {
            alert("Lore successfully inscribed into the archives!");
            form.reset();
        }
    });
}
