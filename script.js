// HEADER (RESPONSIVE)

const iconoMenu = document.getElementById('header__icon');
const menuResponsive = document.querySelector('.header__navbar');

// Agrego la clase 'active' para desplegar el menu.
iconoMenu.addEventListener('click', (e) => {
    menuResponsive.classList.toggle('active');
});