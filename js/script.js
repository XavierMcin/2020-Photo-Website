// INTRO SCREEN





// var pageIntro = document.querySelector('.loader');


// window.addEventListener('load', function(){


// 	pageIntro.classList.add('intro');
// 	pageIntro.classList.add('hide');



// })






// HAMBURGER MENU

var hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function() {

	hamburgerMenu.classList.toggle('clicked');
	


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

var lastScrollTop = 0;

window.addEventListener('scroll', function() {

	var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      console.log('scrolling down');
   } else {
      console.log('scrolling up');
   }






})






// SLIDESHOW


var slide_i = 0;
var slide_img = [ "images/smiley.jpeg", "images/cactus-girl.jpeg", "images/skateboarder.jpeg", "images/urban-fashion.jpeg"];
var slide_elem = document.querySelector('.slideshow img');

function title_slideshow () {

	slide_elem.src=slide_img[slide_i];
	

	if (slide_i < slide_img.length - 1) {
		slide_i++;
		slide_elem.style.opacity = "1";
	} else {
		slide_i = 0;
	}


	setTimeout('title_slideshow()', 3000);

}

window.onload = title_slideshow;







// MODAL WINDOW EVENTS 


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