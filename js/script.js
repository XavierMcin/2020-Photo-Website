var hamburgerMenu = document.querySelector('.hamburger-menu');
var slideMenu = document.querySelector('aside');

hamburgerMenu.addEventListener('click', function() {

	hamburgerMenu.classList.toggle('clicked');
	slideMenu.classList.toggle('slider');


})





// var pageIntro = document.querySelector('.loader');


// window.addEventListener('load', function(){


// 	pageIntro.classList.add('intro');
// 	pageIntro.classList.add('hide');



// })


var hiddenSlide = document.querySelector('.page-title');

window.addEventListener('scroll', function() {


	if (window.pageYOffset >= 768) {
		// console.log('hello');
		hiddenSlide.classList.add('hidden');
	}


})





/***** MODAL WINDOW EVENTS *****/


var modal = document.querySelector('.modal');
var modalTrigger = document.querySelector('.column img');
var modalImage = document.querySelector('.modal-image')
var pageDoc = document.querySelector('body');







modalTrigger.addEventListener('click', function() {

	modal.classList.add('open');
	modalImage.classList.add('open');
	pageDoc.classList.add('noscroll');

	

})



modal.addEventListener('click', function() {

	modal.classList.remove('open');
	modalImage.classList.remove('open');
	pageDoc.classList.remove('noscroll');



})