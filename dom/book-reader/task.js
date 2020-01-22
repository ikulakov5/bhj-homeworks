let controls = document.getElementsByClassName("font-size");
let book = document.querySelector(".book");
controls = Array.from(controls);

const sizeOfText = ["book_fs-small", " ", "book_fs-big"];

function changeSize() {

	for (let older of controls) {
	if(older.getElementsByClassName("font-size_active")) {
		older.classList.remove("font-size_active");
		}
	}

	if(book.getElementsByClassName("book_fs-small") || book.getElementsByClassName("book_fs-big")) {
		book.classList.remove("book_fs-small");
		book.classList.remove("book_fs-big");
		}

	this.classList.add("font-size_active");

	let indexActiveSize = controls.findIndex(e => e.classList.contains('font-size_active'));
	let checkClass = sizeOfText[indexActiveSize];

	if(indexActiveSize != 1) { book.classList.add(checkClass); }

	return false
}

for (let active of controls) {
	active.onclick = changeSize;
}


