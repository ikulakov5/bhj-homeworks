let menu = document.getElementsByClassName("menu__link");

for(z=0; z < menu.length; z++) {
	menu[z].onclick = function() {
		let sub = menu[z].querySelector(".menu_sub");
		sub.classList += "menu_active";
	}
}
