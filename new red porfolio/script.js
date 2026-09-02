document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const hoverElements = document.querySelectorAll('a, button, input, textarea, .project-image-wrapper, .hamburger');

    // Only enable custom cursor on desktop
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovering');
            });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll('.fade-up, .reveal-text');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Optional: Add simple parallax effect to image placeholders
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    window.addEventListener('scroll', () => {
        imagePlaceholders.forEach(img => {
            const speed = 0.15;
            const yPos = -(window.scrollY * speed);
            // Apply a slight transform for parallax
            img.style.transform = `translateY(${yPos * 0.1}px)`;
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const mobileNavbar = document.querySelector('.navbar');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            if(mobileNavbar) mobileNavbar.classList.toggle('menu-open');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                if(mobileNavbar) mobileNavbar.classList.remove('menu-open');
            });
        });
    }
});
