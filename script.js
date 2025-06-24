document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty hash links

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile navigation toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            // Toggle between hamburger and close icon
            const icon = menuToggle.querySelector('i');
            if (navList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close nav when a link is clicked (for mobile)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Highlight active navigation link based on current page
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath ||
            (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // --- ScrollReveal Animations ---
    // Initialize ScrollReveal with custom defaults
    ScrollReveal({
        distance: '60px',
        duration: 1000,
        easing: 'cubic-bezier(.215, .61, .355, 1)',
        interval: 100,
        reset: false
    });

    // Apply specific animations
    // Hero Section elements
    ScrollReveal().reveal('.hero-content h1', { origin: 'bottom', delay: 200 });
    ScrollReveal().reveal('.hero-content h2', { origin: 'bottom', delay: 400 });
    ScrollReveal().reveal('.hero-content .btn', { origin: 'bottom', delay: 600 });

    // Section Titles (from top)
    ScrollReveal().reveal('.problem-solution h2, .offerings-preview h2, .testimonials h2, .final-cta p, .page-hero h1, .page-hero p', { origin: 'top', delay: 100 });

    // Main content blocks (from bottom, staggered)
    ScrollReveal().reveal('.problem-text, .solution-text, .product-card, .testimonial-card, .blog-card, .offerings-card, .contact-info, .contact-form-wrapper', { origin: 'bottom', interval: 150 });

    // About Page specific animations
    ScrollReveal().reveal('.about-image', { origin: 'left', delay: 300 });
    ScrollReveal().reveal('.about-text', { origin: 'right', delay: 400 });

    // Footer elements (fade in)
    ScrollReveal().reveal('.footer-nav, .social-icons, .footer p', { origin: 'bottom', delay: 50, interval: 50 });
});
//contact form
const form = document.getElementById("subscribe-form");
        const message = document.getElementById("form-message");
        form.addEventListener("submit", function(e){
            e.preventDefault();
            const data = new FormData(form);
            fetch(form.action, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    message.style.display = "block";
                    message.textContent = "Thank you!";
                    message.style.color = "green";
                    form.reset();
                } else {
                    message.textContent = "Oops! Something went wrong.";
                    message.style.color = "red";
                    message.style.display = "block";
                }
            });
        });