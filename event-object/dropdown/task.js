let menuHeader = document.getElementsByClassName("dropdown__value");
let menuList = document.getElementsByClassName("dropdown__list");
let links = document.getElementsByClassName("dropdown__link");

console.log(links)

for(let i = 0; i < links.length; i++){
	links[i].onclick = function() {
	menuHeader[0].textContent = this.textContent;
	menuList[0].className = "dropdown__list";
	return false
	}
}

function dropdown() {

	if(menuList[0].className == "dropdown__list dropdown__list_active") {
	menuList[0].className = "dropdown__list";
	return
	}
	if(menuList[0].className == "dropdown__list") {
	menuList[0].className = "dropdown__list dropdown__list_active";
	return
	}

}


menuHeader[0].addEventListener("click", dropdown);



