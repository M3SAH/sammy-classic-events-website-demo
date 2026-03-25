document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('mobile-overlay');

    menuBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    const closeMenu = () => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // 2. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('navbar');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animation
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});