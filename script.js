// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark/Light Mode Toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Optional: Add animations on scroll
window.addEventListener('scroll', () => {
  document.querySelectorAll('.skill-card, .timeline-item').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){ el.style.opacity = 1; el.style.transform = 'translateY(0)'; }
  });
});

// Initial animation styles
document.querySelectorAll('.skill-card, .timeline-item').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
});
