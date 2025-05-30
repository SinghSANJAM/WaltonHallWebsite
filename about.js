document.addEventListener('DOMContentLoaded', () => {
  // Text Reveal on Scroll
  const revealElements = document.querySelectorAll('.reveal-text');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideIn 0.8s ease forwards';
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => observer.observe(el));

  // Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  mobileToggle.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    mobileToggle.classList.toggle('active');
  });

  // Accessibility: Keyboard Support
  const interactiveElements = document.querySelectorAll('.nav-link, .nav-button, .social-icon, .mobile-menu-toggle');
  interactiveElements.forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });
});