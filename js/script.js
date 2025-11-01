const burgerMenuBtn = document.getElementById('burgerMenuBtn');
const burgerMenu = document.getElementById('burgerMenu');
const mainNav = document.getElementById('mainNav');

burgerMenuBtn.addEventListener('click', function () {
  mainNav.style.display = 'block';
  burgerMenuBtn.style.display = 'none';
});