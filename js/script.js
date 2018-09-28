var hamburgerMenu = document.querySelector('.hamburger-menu');
var slideMenu = document.querySelector('aside');

hamburgerMenu.addEventListener('click', function() {

	hamburgerMenu.classList.toggle('clicked');
	slideMenu.classList.toggle('slider');


})