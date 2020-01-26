let modal = document.getElementById('subscribe-modal');

// const getCookie = (name) => {
// 	const value = "; " + document.cookie;
// 	let parts = value.split("; " + name + "=");
// 	if (parts.length === 2) {
// 		return parts
// 		.pop()
// 		.split(";")
// 		.shift();
// 	}
// }



window.onload = function() {
	modal.classList.add('modal_active');
}

let closeBtn = modal.querySelector('.modal__close_times');

closeBtn.addEventListener('click', (e) => {
	modal.classList.remove('modal_active');
	document.cookie = 'modal=close';
});