let cookie = document.getElementById("cookie");
let clickCouter = document.getElementById("clicker__counter");
let speed = document.getElementById("clicker__speed");
let counter = 0;
let firstClick = 0;

cookie.onclick = function() {
	if(counter == 0) {
		firstClick = new Date();
		firstClick = firstClick.getTime();
	}
	counter += 1;

	clickCouter.textContent = counter;

	this.width = 200;
	if (counter % 2) {
		this.width = 100;
	}

	let lastClick = new Date();
	lastClick = lastClick.getTime();

	clickSpeed = counter / ((lastClick - firstClick) / 1000);
	speed.textContent = clickSpeed;
}

