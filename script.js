// HEADER (RESPONSIVE)

const iconoMenu = document.getElementById('header__icon');
const menuResponsive = document.querySelector('.navbar__responsive');

// Agrego la clase 'active' para desplegar el menu.
iconoMenu.addEventListener('click', (e) => {
    menuResponsive.classList.toggle('active');
});