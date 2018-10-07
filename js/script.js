var hamburgerMenu = document.querySelector('.hamburger-menu');
var slideMenu = document.querySelector('aside');

hamburgerMenu.addEventListener('click', function() {

	hamburgerMenu.classList.toggle('clicked');
	slideMenu.classList.toggle('slider');


})


var pageIntro = document.querySelector('.loader');


window.addEventListener('load', function(){


	pageIntro.classList.add('intro');


})