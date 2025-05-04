window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});

const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const isExpanded = navLinks.classList.contains('active');
    hamburgerBtn.setAttribute('aria-expanded', isExpanded);

    const icon = hamburgerBtn.querySelector('i');
    if (isExpanded) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

const linksInsideMenu = navLinks.querySelectorAll('a');

linksInsideMenu.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');

            hamburgerBtn.setAttribute('aria-expanded', 'false');

            const icon = hamburgerBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

const input = document.getElementById('terminal-input');
const feedback = document.getElementById('feedback');

const sections = {
  about: '#about',
  projects: '#projects',
  skills: '#skills',
  contact: '#contact'
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = input.value.trim().toLowerCase();
    if (sections[command]) {
      document.querySelector(sections[command]).scrollIntoView({ behavior: 'smooth' });
      feedback.textContent = '';
    } else {
        feedback.textContent = `❌ Command not found: Try on of the valid commands.`;
        feedback.style.color = "#f85149";
    }
    input.value = '';
  }
});

const slider = document.querySelector('.projects-slider');
const leftBtn = document.querySelector('.slider-btn.left');
const rightBtn = document.querySelector('.slider-btn.right');

leftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 300, behavior: 'smooth' });
});

document.getElementById('year').textContent = new Date().getFullYear();