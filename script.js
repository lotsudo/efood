const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {

  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
  overlay.classList.toggle('active');

});

overlay.addEventListener('click', closeMenu);

function closeMenu() {

  burger.classList.remove('active');
  navMenu.classList.remove('active');
  overlay.classList.remove('active');

}