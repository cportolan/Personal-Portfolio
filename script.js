// HEADER (RESPONSIVE)

const menuIcon = document.getElementById('header__icon');
const menuResponsive = document.querySelector('.header__navbar');
const menuLinks = document.querySelectorAll('.header__a');

menuIcon.addEventListener('click', (e) => {
    menuResponsive.classList.toggle('active');
    if (menuResponsive.classList.contains('active')) {
        menuIcon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
    }
});

// Switch Hamburguer to Cross icon (RESPONSIVE NAVBAR)
menuLinks.forEach((e) => {
    e.addEventListener('click', () => {
        menuResponsive.classList.remove('active');
        if (menuResponsive.classList.contains('active')) {
            menuIcon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            menuIcon.classList.replace('fa-xmark', 'fa-bars');
        }
    });
});

// Smooth scroll to the target section
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

