document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. MOBILE NAVBAR LOGIC ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    }

    // --- 2. ACCORDION LOGIC ---
    const accordions = document.querySelectorAll('.accordion-btn');

    accordions.forEach(btn => {
        btn.addEventListener('click', function() {
            // Close all other panels for a clean UI experience
            accordions.forEach(otherBtn => {
                if (otherBtn !== this && otherBtn.classList.contains('active')) {
                    otherBtn.classList.remove('active');
                    otherBtn.nextElementSibling.style.maxHeight = null;
                    otherBtn.nextElementSibling.style.padding = "0 1.2rem";
                    otherBtn.nextElementSibling.style.borderColor = "transparent";
                }
            });

            // Toggle current panel
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            
            if (panel.style.maxHeight) {
                // Closing
                panel.style.maxHeight = null;
                panel.style.padding = "0 1.2rem";
                panel.style.borderColor = "transparent";
            } else {
                // Opening
                panel.style.maxHeight = panel.scrollHeight + 30 + "px";
                panel.style.padding = "1.2rem";
                panel.style.borderColor = "var(--accent-glow)";
            }
        });
    });

    // --- 3. FORM VALIDATION LOGIC ---
    const form = document.getElementById('loreForm');
    const nameInput = document.getElementById('scholarName');
    const loreInput = document.getElementById('loreEntry');
    const nameError = document.getElementById('nameError');
    const loreError = document.getElementById('loreError');
    const successMsg = document.getElementById('successMsg');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page reload immediately
            
            let isValid = true;

            // Reset UI states
            nameInput.style.borderColor = "var(--glass-border)";
            loreInput.style.borderColor = "var(--glass-border)";
            nameError.style.display = "none";
            loreError.style.display = "none";
            successMsg.classList.add('hidden');

            // Name Validation (Must not be empty and at least 3 chars)
            if (nameInput.value.trim().length < 3) {
                nameInput.style.borderColor = "#ef4444";
                nameError.textContent = "Please enter a valid scholar name (min 3 characters).";
                nameError.style.display = "block";
                isValid = false;
            }

            // Lore Validation (Must be at least 15 chars)
            if (loreInput.value.trim().length < 15) {
                loreInput.style.borderColor = "#ef4444";
                loreError.textContent = "Your lore entry is too short to be added to the archives.";
                loreError.style.display = "block";
                isValid = false;
            }

            // Success Behavior
            if (isValid) {
                successMsg.classList.remove('hidden');
                form.reset();
                
                // Hide success message after 4 seconds
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 4000);
            }
        });

        // Clear errors dynamically on user input
        [nameInput, loreInput].forEach(input => {
            input.addEventListener('input', () => {
                input.style.borderColor = "var(--glass-border)";
                input.nextElementSibling.style.display = "none";
            });
        });
    }
});
