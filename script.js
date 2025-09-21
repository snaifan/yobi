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
    
    document.addEventListener('DOMContentLoaded', () => {
    const videos = [
        { id: 'd5RjxPesLcU', title: 'Tomato Growth Journey', desc: 'Watch my tomato plants thrive and learn patience in growth.' },
        { id: 'VIDEO_ID_2', title: 'Harvesting Tips', desc: 'Practical techniques from my farm to boost your yield and mindset.' },
        { id: 'VIDEO_ID_3', title: 'Growth Mindset Lessons', desc: 'Farm-inspired strategies to nurture your personal and professional growth.' }
    ];
    const videoGrid = document.querySelector('.video-grid');
    videos.forEach(video => {
        videoGrid.innerHTML += `
            <div class="video-card">
                <iframe src="https://www.youtube.com/embed/${video.id}" title="${video.title}" frameborder="0" allowfullscreen loading="lazy"></iframe>
                <h3>${video.title}</h3>
                <p>${video.desc}</p>
            </div>
        `;
    });
    // Existing ScrollReveal and other code...
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
    
    ScrollReveal().reveal('.thought-image', { delay: 300, duration: 1000, opacity: 0, easing: 'ease-in-out' });
    
    ScrollReveal().reveal('.video-card', { delay: 200, duration: 1000, opacity: 0, distance: '20px', origin: 'bottom', interval: 200 });

    ScrollReveal().reveal('.hero-background-image', { delay: 200, duration: 1000, opacity: 0, easing: 'ease-in-out' });
    // Final CTA Animations
ScrollReveal().reveal('.final-cta h2', { origin: 'top', delay: 100, duration: 1000, opacity: 0 });
ScrollReveal().reveal('.final-cta p', { origin: 'top', delay: 200, duration: 1000, opacity: 0 });
ScrollReveal().reveal('.cta-buttons', { origin: 'bottom', delay: 300, duration: 1000, opacity: 0 });
ScrollReveal().reveal('.cta-image', { origin: 'bottom', delay: 400, duration: 1000, opacity: 0 });

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
        
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'your-id');
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribe-form');
    const message = document.getElementById('form-message');
    if (form && message) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(form);
            fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    message.style.display = 'block';
                    message.textContent = 'Thank you!';
                    message.style.color = 'green';
                    form.reset();
                } else {
                    message.style.display = 'block';
                    message.textContent = 'Oops! Something went wrong.';
                    message.style.color = 'red';
                }
            });
        });
    }
});

document.querySelector('.footer p').innerHTML = `&copy; ${new Date().getFullYear()} AT Fields. All Rights Reserved.`;

document.querySelectorAll('.cta-buttons .btn').forEach(button => {
    button.addEventListener('click', () => {
        console.log(`CTA clicked: ${button.textContent}`);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Copyright Year
    document.querySelector('#year').textContent = new Date().getFullYear();

    // Offerings Preview Animations (Homepage)
    ScrollReveal().reveal('.product-card', { origin: 'bottom', delay: 200, duration: 1000, opacity: 0, interval: 200 });
    ScrollReveal().reveal('.center-btn-wrapper', { origin: 'bottom', delay: 400, duration: 1000, opacity: 0 });

    // Offerings Full Animations (offerings.html)
    ScrollReveal().reveal('.offerings-card', { origin: 'bottom', delay: 200, duration: 1000, opacity: 0, interval: 200 });
});

const offerings = [
    { id: 'blueprint', title: 'The Rooted Growth Blueprint', desc: '...', price: '$149', img: 'images/The Rooted Growth Blueprint.jpg', alt: 'The Rooted Growth Blueprint' },
    // Add more
];
const grid = document.querySelector('.offerings-grid');
if (grid) {
    offerings.forEach(o => {
        grid.innerHTML += `<div class="offerings-card" id="${o.id}">...</div>`;
    });
}

document.querySelectorAll('.offerings-card .btn').forEach(button => {
    button.addEventListener('click', () => console.log(`Offering clicked: ${button.textContent}`));
});

const solutionCTA = document.querySelector('.solution-text .btn');
if (solutionCTA) {
    solutionCTA.addEventListener('click', () => console.log('Problem-Solution CTA clicked'));
}

const posts = [
    { title: 'Why Small Beginnings Matter', date: 'June 15, 2025', tags: 'Starting Small', excerpt: 'Every great story...', img: 'images/small-beginnings.jpg', url: 'posts/why-small-beginnings-matter.html' },
    // Add more
];
const blogGrid = document.querySelector('.blog-grid');
if (blogGrid) {
    posts.forEach(post => {
        blogGrid.innerHTML += `<article class="blog-card">...</article>`;
    });
}

document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', () => console.log(`Blog post clicked: ${link.textContent}`));
});

