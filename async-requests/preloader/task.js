let loader = document.getElementById("loader");
let data;
let items = document.getElementById("items");

let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.addEventListener('readystatechange', (e) => {
	if (request.readyState == request.DONE && request.status == 200) {
		data = JSON.parse(request.responseText);
		loader.classList.remove("loader_active");

		for (let valute in data['response']['Valute']) {
			items.insertAdjacentHTML("beforeEnd", `<div class="item"><div class="item__code">${data.response.Valute[valute].CharCode}</div><div class="item__value">${data.response.Valute[valute].Value}</div><div class="item__currency">руб.</div></div>`);
		}
	}
});
request.send();

