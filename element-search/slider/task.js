let slides = document.getElementsByClassName("slider__item");
let dotes = document.getElementsByClassName("slider__dot");
let prevButton = document.getElementsByClassName("slider__arrow_prev");
let nextbutton = document.getElementsByClassName("slider__arrow_next");
let currentSlide = 0;
let slidesCount = slides.length;

for(let i = 0; i < slidesCount; i++){
	if(slides[i].className == "slider__item slider__item_active") {
		currentSlide = i;
		dotes[currentSlide].className = "slider__dot slider__dot_active";
	}

}

function changeSlide(prevSlide, currentSlide) {
		slides[prevSlide].className = "slider__item";
		dotes[prevSlide].className = "slider__dot";

		slides[currentSlide].className = "slider__item slider__item_active";
		dotes[currentSlide].className = "slider__dot slider__dot_active";
}

for(let z = 0; z < dotes.length; z++){
	dotes[z].onclick = function() {
		let prevSlide = currentSlide;
		currentSlide = z;

		changeSlide(prevSlide, currentSlide);
	}
}

prevButton[0].onclick = function() {
	let prevSlide = currentSlide;

	currentSlide = currentSlide - 1;
	if(currentSlide < 0) {currentSlide = slidesCount - 1;}

	changeSlide(prevSlide, currentSlide);
}

nextbutton[0].onclick = function() {
	let prevSlide = currentSlide;

	currentSlide = currentSlide + 1;
	if(currentSlide > slidesCount - 1) {currentSlide = 0;}

	changeSlide(prevSlide, currentSlide);
}


