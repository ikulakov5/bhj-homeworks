let tabs = document.getElementsByClassName("tab");
let contents = document.getElementsByClassName("tab__content");
tabs = Array.from(tabs);
contents = Array.from(contents);


for(let i = 0; i < tabs.length; i++){

	tabs[i].onclick = function() {

		let indexActiveTab = tabs.findIndex(el => el.className === 'tab tab_active');
		tabs[indexActiveTab].className = "tab";
		let indexActiveContent = contents.findIndex(el => el.className === 'tab__content tab__content_active');
		contents[indexActiveContent].className = "tab__content";

		tabs[i].className = "tab tab_active";
		contents[i].className = "tab__content tab__content_active";


		return false
	}
}