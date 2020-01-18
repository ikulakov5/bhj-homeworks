let subMenu = document.getElementsByClassName("menu_sub");
	let menuExistSub = [];


for(let i = 0; i < subMenu.length; i++){
	let parentList = subMenu[i].parentElement;
	menuExistSub[i] = parentList.querySelector("a.menu__link");

	menuExistSub[i].onclick = function() {
		for(let z = 0; z < subMenu.length; z++){
			subMenu[z].className = "menu menu_sub";
		}
		subMenu[i].className = "menu menu_sub menu_active";
		return false;
	}
}
