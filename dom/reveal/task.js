let reveal = document.getElementsByClassName("reveal");
console.log(reveal);

function showBanner() {

	for (banner of reveal) {
		let winTop = window.innerHeight;
		let top = banner.getBoundingClientRect().top;
		let bottom = banner.getBoundingClientRect().bottom;
		if(top && bottom < winTop) {
			banner.classList.add("reveal_active");
		} else {
			banner.classList.remove("reveal_active");
		}
		
	}
}

window.addEventListener("scroll", showBanner);