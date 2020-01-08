let modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

let closeBtn = document.getElementsByClassName("modal__close modal__close_times");
let close = closeBtn.item(0);
let closeSec = closeBtn.item(1);
close.onclick = function() {
	modalMain.classList.remove("modal_active");
}

let showSuccess = document.getElementsByClassName("show-success");
showSuccess[0].onclick = function() {
	let modalSuccess = document.getElementById("modal_success");
	modalSuccess.classList.add("modal_active");
	closeSec.onclick = function() {
		modalSuccess.classList.remove("modal_active");
	}
}