// INTRO SCREEN





// var pageIntro = document.querySelector('.loader');


// window.addEventListener('load', function(){


// 	pageIntro.classList.add('intro');
// 	pageIntro.classList.add('hide');



// })






// HAMBURGER MENU * MOBILE MENU

var hamburgerMenu = document.querySelector('.hamburger-menu');
var mobileMenu = document.querySelector('nav');
var pageDoc = document.querySelector('body');

hamburgerMenu.addEventListener('click', function() {

	hamburgerMenu.classList.toggle('clicked');
	mobileMenu.classList.toggle('slideDown');
	pageDoc.classList.toggle('noscroll');


})




// DISAPPEARING SCROLL


var hiddenSlide = document.querySelector('.page-title');

window.addEventListener('scroll', function() {


	if (window.pageYOffset >= 768) {
		// console.log('hello');
		hiddenSlide.classList.add('hidden');
	}


})


// DISAPPEARING HEADER













// SLIDESHOW
















// MODAL WINDOW EVENTS 


var modal = document.querySelector('.modal');
var modalTrigger = document.querySelectorAll('.column img');
var modalImage = document.querySelector('.modal-image');
var currentImg = document.querySelector('.modal-image img');
var pageDoc = document.querySelector('body');







modalTrigger.forEach(function(elem) {

	elem.addEventListener('click', function() {

		modal.classList.add('open');
		modalImage.classList.add('open');
		pageDoc.classList.add('noscroll');

		currentImg.src = this.src;

	});

});



modal.addEventListener('click', function() {

	modal.classList.remove('open');
	modalImage.classList.remove('open');
	pageDoc.classList.remove('noscroll');



});