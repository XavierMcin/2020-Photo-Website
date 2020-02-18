






// HAMBURGER MENU * MOBILE MENU

let hamburgerMenu = document.querySelector('.hamburger-menu');
let mobileMenu = document.querySelector('nav');
let pageDoc = document.querySelector('body');





// DISAPPEARING SCROLL


let topHeader = document.querySelector('header');
let pScroll = window.pageYOffset;
let currP = window.pageYOffset;


window.onscroll = function() {

		currP = window.pageYOffset;


		let cScroll = window.pageYOffset;
		if (pScroll > cScroll) {
		  topHeader.style.top = "0";
		} else {
		  topHeader.style.top = "-50px";
		}
		pScroll = cScroll;

		// console.log(pageYOffset);



};








// MODAL WINDOW EVENTS / SCROLLING PAUSE



let modal = document.querySelector('#photo-modal');
let photo = document.querySelectorAll('.zoom');
let currImg = document.querySelector('.modal-container img');
let prevButton = document.querySelector('#previous'); 
let nextButton = document.querySelector('#next');

let resumeScroll;
let imgInd;



photo.forEach(function(imgLink) {
	imgLink.onclick = function() {
		pageDoc.classList.add('noScroll');
		modal.classList.add('opened');
		newSrc = imgLink.childNodes[1].src;
		currImg.src = newSrc.slice(46);
		imgInd = portraitImgs.indexOf((currImg.src).slice(46));

		pageDoc.style.top = '-' + currP + 'px';
		resumeScroll = currP;
	}
});


if (modal != undefined) {
	modal.onclick = function () {
		pageDoc.classList.remove('noScroll');
		modal.classList.remove('opened');
		pageDoc.style.top = 0;
		window.scrollTo(0, resumeScroll);
	};
};





hamburgerMenu.onclick = function() {
	// console.log(currP);
	// if (pageDoc.classList.contains('noScroll')) {
		
	// 	window.scrollTo(0,1200);
	// } else {
	// 	pageDoc.style.top = '-' + currP + 'px';
	// }
	hamburgerMenu.classList.toggle('clicked');
	mobileMenu.classList.toggle('slideDown');
	pageDoc.classList.toggle('noScroll');
	

}




let portraitImgs = ['images/frontImg1.jpg', 'images/frontImg2.jpg', 'images/frontImg3.jpg', 'images/frontImg4-por.jpg', 'images/frontImg5.jpg', 'images/frontImg6.jpg', 'images/frontImg7-por.jpg', 'images/frontImg8.jpg', 'images/frontImg9.jpg', 'images/frontImg10.jpg', 'images/frontImg11.jpg', 'images/frontImg12-por.jpg', 'images/frontImg13-por.jpg', 'images/frontImg14.jpg'];

let portraitImgsHD = [];
let portraitImgsSuperHD = [];

nextButton.onclick = function() {
	event.stopPropagation();
	if ((portraitImgs[imgInd + 1]).includes("por")) {
		currImg.style.objectFit = "contain";
	} else {
		currImg.style.objectFit = "cover";
	}
	currImg.src = portraitImgs[imgInd + 1];
	imgInd++;

}

prevButton.onclick = function() {
	event.stopPropagation();
	if ((portraitImgs[imgInd - 1]).includes("por")) {
		currImg.style.objectFit = "contain";
	} else {
		currImg.style.objectFit = "cover";
	}
	currImg.src = portraitImgs[imgInd - 1];
	imgInd--;
}










// modalButton.forEach(function(btn) {
// 	btn.onclick = function() {
// 		if (btn.id == 'next') {
// 			event.stopPropagation()
// 			currImg.src = portraitImgs[portraitImgs.indexOf(modalSrc) + 1];
// 		} else {
// 			event.stopPropagation()
// 			currImg.src = portraitImgs[portraitImgs.indexOf(modalSrc) - 1];
// 		}
// 	}
// });





















// let modalHorizontal = document.querySelector('.modal-horizontal');
// let modalTrigger = document.querySelectorAll('.column img');
// let columnHorizontal = document.querySelector('.carousel-cover');
// let imageOne = document.querySelector('.carousel-cell:first-of-type img');
// let imageTwo = document.querySelector('.carousel-cell:nth-of-type(2) img');
// let imageThree = document.querySelector('.carousel-cell:nth-of-type(3) img');
// let imageFour = document.querySelector('.carousel-cell:last-of-type img');
// let stopScroll = document.querySelector('.body.noscroll');








// modalTrigger.forEach(function(elem) {

// 	elem.onclick = function() {

// 		let newElem = elem.src.toString();
// 		let newSlice = newElem.slice(newElem.length - 12,newElem.length - 8);

// 		imageOne.src = 'webphotos/' + newSlice + '-one.jpg';
// 		imageTwo.src = 'webphotos/' + newSlice + '-two.jpg';
// 		imageThree.src = 'webphotos/' + newSlice + '-three.jpg';
// 		imageFour.src = 'webphotos/' + newSlice + '-four.jpg';

// 		pageDoc.style.top = -(pageYOffset) + 'px';
// 		pageDoc.classList.add('noscroll');
// 		modal.style.top = -(pageYOffset) + 'px';
// 		modal.classList.add('open');
// 		// pageDoc.classList.add('noscroll');



// 	};

// });

