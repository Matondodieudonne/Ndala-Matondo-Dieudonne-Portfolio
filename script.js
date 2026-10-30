const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const year = document.getElementById('year');
const contactForm = document.getElementById('contact-form');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  const navLinks = navMenu.querySelectorAll('a');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = [...document.querySelectorAll('main section[id]')];

  const setActiveLink = () => {
    const scrollPosition = window.scrollY + 180;

    let activeId = 'home';

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === '#' + activeId;
      link.classList.toggle('active', isActive);
    });
  };

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const button = contactForm.querySelector('button');
    const originalText = button.textContent;

    button.textContent = 'Message envoyé';
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      contactForm.reset();
    }, 2200);
  });
}
