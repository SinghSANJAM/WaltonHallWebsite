document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider Functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;

    // Show slide
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Auto-slide
    setInterval(nextSlide, 8000); // 12 seconds per slide

    // Event listeners for controls
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-navigation');

    menuToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        menuToggle.classList.toggle('active');
    });

    // Sticky Header
    const header = document.querySelector('.site-header');
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
        header.style.background = '#ffffff'; // Solid white
        header.style.boxShadow = window.scrollY > 100 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none';
    });

    // Smooth scroll for internal anchor links only
    document.querySelectorAll('a[href^="#"][href="#rooms"], a[href^="#"][href="#weddings"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                if (nav.style.display === 'block') {
                    nav.style.display = 'none';
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
});