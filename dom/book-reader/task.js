let controls = document.getElementsByClassName("font-size");
let book = document.querySelector(".book");
controls = Array.from(controls);

const sizeOfText = ["book_fs-small", "", "book_fs-big"];

function changeSize() {

	for (let older of controls) {
	if(older.getElementsByClassName("font-size_active")) {
		older.classList.remove("font-size_active");
		}
	}

	this.classList.add("font-size_active");

	let indexActiveSize = controls.findIndex(e => e.classList.contains('font-size_active'));
	let checkClass = sizeOfText[indexActiveSize];
	book.classList.add(checkClass);

	return false
}

for (let active of controls) {
	active.onclick = changeSize;
}

// почему этот код не работает?
// for (let active of controls) {
// 	active.addEventListener("click", changeSize);
// }

