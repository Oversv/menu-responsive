// Selección de los Items del DOM
const menuBtn = document.querySelector('.toggle-menu'),
	  menu = document.querySelector('.main-nav'),
	  menuNav = document.querySelector('.main-menu'),
	  navItems = document.querySelectorAll('.main-menu__item');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
	menuBtn.classList.toggle('close');
	menu.classList.toggle('show');
	menuNav.classList.toggle('show');
	navItems.forEach(item => item.classList.toggle('show'));
}