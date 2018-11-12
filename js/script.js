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





/***** MODAL WINDOW EVENTS *****/


var modal = document.querySelector('.modal');
var modalTrigger = document.querySelector('.column-one img');
var modalImage = document.querySelector('.modal-image')
var pageDoc = document.querySelector('body');
var firstImg = document.querySelector('.modal-image img:first-of-type');
var secondImg = document.querySelector('.modal-image img:nth-of-type(2)');






modalTrigger.addEventListener('click', function() {

	modal.classList.add('open');
	modalImage.classList.add('open');
	pageDoc.classList.add('noscroll');

	if (modalTrigger.matchesSelector == ('.column img:first-of-type')) {
		firstImg.classList.add('show');
	} else if (modalTrigger.matchesSelector == ('.column img:nth-of-type(2)')) {
		secondImg.classList.add('show');
	}

	

})


modal.addEventListener('click', function() {

	modal.classList.remove('open');
	modalImage.classList.remove('open');
	pageDoc.classList.remove('noscroll');

	if (modalTrigger.matchesSelector == ('.column img:first-of-type')) {
		firstImg.classList.remove('show');
	} else if (modalTrigger.matchesSelector == ('.column img:nth-of-type(2)')) {
		secondImg.classList.remove('show');
	}



})