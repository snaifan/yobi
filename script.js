// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            console.log('Toggled menu, active:', navList.classList.contains('active')); // Debug
        });

        // Close menu when a link is clicked
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                console.log('Link clicked, menu closed'); // Debug
            });
        });
    } else {
        console.log('Menu toggle or nav list not found'); // Debug if elements are missing
    }

    // Highlight active navigation link based on current page
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Dynamic video grid
    const videos = [
        { id: 'd5RjxPesLcU', title: 'Tomato Growth Journey', desc: 'Watch my tomato plants thrive and learn patience in growth.' },
        { id: 'VIDEO_ID_2', title: 'Harvesting Tips', desc: 'Practical techniques from my farm to boost your yield and mindset.' },
        { id: 'VIDEO_ID_3', title: 'Growth Mindset Lessons', desc: 'Farm-inspired strategies to nurture your personal and professional growth.' }
    ];
    const videoGrid = document.querySelector('.video-grid');
    if (videoGrid) {
        videos.forEach(video => {
            videoGrid.innerHTML += `
                <div class="video-card">
                    <iframe src="https://www.youtube.com/embed/${video.id}" title="${video.title}" frameborder="0" allowfullscreen loading="lazy"></iframe>
                    <h3>${video.title}</h3>
                    <p>${video.desc}</p>
                </div>
            `;
        });
    }

    // ScrollReveal Animations
    ScrollReveal({
        distance: '60px',
        duration: 1000,
        easing: 'cubic-bezier(.215, .61, .355, 1)',
        interval: 100,
        reset: false
    });

    // Hero Section animations
    ScrollReveal().reveal('.hero-content h1', { origin: 'bottom', delay: 200 });
    ScrollReveal().reveal('.hero-content h2', { origin: 'bottom', delay: 400 });
    ScrollReveal().reveal('.hero-content .btn', { origin: 'bottom', delay: 600 });

    // Section Titles
    ScrollReveal().reveal('.problem-solution h2, .offerings-preview h2, .testimonials h2, .final-cta p, .page-hero h1, .page-hero p', { origin: 'top', delay: 100 });

    // Main content blocks
    ScrollReveal().reveal('.problem-text, .solution-text, .product-card, .testimonial-card, .blog-card, .offerings-card, .contact-info, .contact-form-wrapper', { origin: 'bottom', interval: 150 });

    // About Page animations
    ScrollReveal().reveal('.about-image', { origin: 'left', delay: 300 });
    ScrollReveal().reveal('.about-text', { origin: 'right', delay: 400 });

    // Footer animations
    ScrollReveal().reveal('.footer-nav, .social-icons, .footer p', { origin: 'bottom', delay: 50, interval: 50 });

    // Additional animations
    ScrollReveal().reveal('.thought-image', { delay: 300, duration: 1000, opacity: 0, easing: 'ease-in-out' });
    ScrollReveal().reveal('.video-card', { delay: 200, duration: 1000, opacity: 0, distance: '20px', origin: 'bottom', interval: 200 });
    ScrollReveal().reveal('.hero-background-image', { delay: 200, duration: 1000, opacity: 0, easing: 'ease-in-out' });
    ScrollReveal().reveal('.final-cta h2', { origin: 'top', delay: 100, duration: 1000, opacity: 0 });
    ScrollReveal().reveal('.final-cta p', { origin: 'top', delay: 200, duration: 1000, opacity: 0 });
    ScrollReveal().reveal('.cta-buttons', { origin: 'bottom', delay: 300, duration: 1000, opacity: 0 });
    ScrollReveal().reveal('.cta-image', { origin: 'bottom', delay: 400, duration: 1000, opacity: 0 });
    ScrollReveal().reveal('.product-card', { origin: 'bottom', delay: 200, duration: 1000, opacity: 0, interval: 200 });
    ScrollReveal().reveal('.center-btn-wrapper', { origin: 'bottom', delay: 400, duration: 1000, opacity: 0 });
    ScrollReveal().reveal('.offerings-card', { origin: 'bottom', delay: 200, duration: 1000, opacity: 0, interval: 200 });
    ScrollReveal().reveal('.tomato-tips h2', { origin: 'top', delay: 100, duration: 1000, opacity: 0 });
    ScrollReveal().reveal('.tomato-tips .section-intro', { origin: 'top', delay: 200, duration: 1000, opacity: 0 });
    ScrollReveal().reveal('.tip-card', { origin: 'bottom', delay: 300, duration: 1000, opacity: 0, interval: 200 });

    // Contact form submission
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
            }).catch(error => {
                message.style.display = 'block';
                message.textContent = 'Error: Please try again later.';
                message.style.color = 'red';
                console.error('Fetch error:', error);
            });
        });
    }

    // Dynamic Footer Year
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.innerHTML = `&copy; ${new Date().getFullYear()} AT Fields. All Rights Reserved.`;
    }

    // CTA button logging
    document.querySelectorAll('.cta-buttons .btn').forEach(button => {
        button.addEventListener('click', () => {
            console.log(`CTA clicked: ${button.textContent}`);
        });
    });

    // Offerings and blog dynamic content
    const offerings = [
        { id: 'blueprint', title: 'The Rooted Growth Blueprint', desc: '...', price: '$149', img: 'images/The Rooted Growth Blueprint.jpg', alt: 'The Rooted Growth Blueprint' }
        // Add more offerings as needed
    ];
    const grid = document.querySelector('.offerings-grid');
    if (grid) {
        offerings.forEach(o => {
            grid.innerHTML += `<div class="offerings-card" id="${o.id}"><img src="${o.img}" alt="${o.alt}" loading="lazy"><h3>${o.title}</h3><p>${o.desc}</p><div class="card-actions"><span class="price">${o.price}</span><a href="#" class="btn btn-small">Buy Now</a></div></div>`;
        });
        document.querySelectorAll('.offerings-card .btn').forEach(button => {
            button.addEventListener('click', () => console.log(`Offering clicked: ${button.textContent}`));
        });
    }

    const solutionCTA = document.querySelector('.solution-text .btn');
    if (solutionCTA) {
        solutionCTA.addEventListener('click', () => console.log('Problem-Solution CTA clicked'));
    }

    const posts = [
        { title: 'Why Small Beginnings Matter', date: 'June 15, 2025', tags: 'Starting Small', excerpt: 'Every great story...', img: 'images/small-beginnings.jpg', url: 'posts/why-small-beginnings-matter.html' }
        // Add more posts as needed
    ];
    const blogGrid = document.querySelector('.blog-grid');
    if (blogGrid) {
        posts.forEach(post => {
            blogGrid.innerHTML += `<article class="blog-card"><img src="${post.img}" alt="${post.title}" loading="lazy"><div class="card-content"><h3>${post.title}</h3><p class="post-meta">By Brian Atsinwa | ${post.date} | ${post.tags}</p><p>${post.excerpt}</p><a href="${post.url}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a></div></article>`;
        });
        document.querySelectorAll('.read-more').forEach(link => {
            link.addEventListener('click', () => console.log(`Blog post clicked: ${link.textContent}`));
        });
    }

    // Analytics for CTAs
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', () => console.log(`Primary CTA clicked: ${btn.textContent}`));
    });
    document.querySelectorAll('.read-more').forEach(link => {
        link.addEventListener('click', () => console.log(`Read More clicked: ${link.getAttribute('href')}`));
    });
    document.querySelectorAll('.back-to-blog-btn').forEach(btn => {
        btn.addEventListener('click', () => console.log('Back to Blog clicked'));
    });
    document.querySelectorAll('.social-icons a').forEach(icon => {
        icon.addEventListener('click', () => console.log(`Social icon clicked: ${icon.getAttribute('aria-label')}`));
    });

    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'your-id');
});

// Dynamic Copyright Year (alternative placement if needed)
document.querySelector('#year')?.textContent = new Date().getFullYear();