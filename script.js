const menuIcon = document.querySelector('.menu-icon');
const drawerMenu = document.querySelector('.drawer');
const bodyElement = document.querySelector('body');
const drawerLink = document.querySelectorAll('.drawer-links li a');

//Open Off Screen Menu when Menu clicked
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('active');
  drawerMenu.classList.toggle('active');
  bodyElement.classList.toggle('no-scroll');
});

//Close Menu when links are clicked
drawerLink.forEach((link) => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('active');
    drawerMenu.classList.remove('active');
    bodyElement.classList.remove('no-scroll');
  });
});