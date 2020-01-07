let counter = document.getElementById("timer");

console.log(counter.textContent);

	let hours = counter.textContent.slice(0, 2) * 3600;
	let minutes = counter.textContent.slice(3, 5) * 60;
	let seconds = counter.textContent.slice(6, 9) * 1 + hours + minutes;


function timer() {
	seconds -= 1; 

	let h = seconds / 3600 ^ 0;
	let m = (seconds - h * 3600) / 60 ^ 0 ;
	let s = seconds - h * 3600 - m * 60;
	counter.textContent = (h < 10 ? "0" + h : h) + ":" + ( m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);

	if(counter.textContent == "00:00:00") {
		alert("Вы победили в конкурсе!");
	}
}

setInterval(timer, 1000);
