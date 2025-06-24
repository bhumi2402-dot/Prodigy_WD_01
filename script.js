
const navbar = document.getElementById('navbar');
const menuItems = document.querySelectorAll('.menu-item');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Scroll to the section smoothly
    const sectionId = item.getAttribute('data-section');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
