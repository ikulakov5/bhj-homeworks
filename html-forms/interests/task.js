let lists = document.querySelectorAll("ul.interests_active");

for (list of lists) {
	let headEl = list.parentElement.getElementsByClassName("interest__check");

	headEl[0].onchange = function() {
		for (var i = 1; i < headEl.length; i++) {
			headEl[i].checked = headEl[0].checked;
		}
	}
}