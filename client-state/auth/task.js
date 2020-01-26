let form = document.getElementById('signin');
let login = document.getElementById('signin__form');
let welcome = document.getElementById('welcome');
let loginBtn = document.getElementById('signin__btn');
let id = document.getElementById('user_id');


form.classList.add('signin_active');

window.onload = function() {
	if(localStorage.user) {
		welcome.classList.add('welcome_active');
		form.classList.remove('signin_active');
		id.innerText = localStorage.user;
	}
}




loginBtn.addEventListener('click', (e) => {
	let formData = new FormData(login);
	e.preventDefault();
	let request = new XMLHttpRequest();
	request.open('POST', ' https://netology-slow-rest.herokuapp.com/auth.php');
	request.send(formData);
	request.addEventListener('readystatechange', function() {	
		if(request.readyState === 4 && request.status === 200) {
			let data = JSON.parse(request.responseText);
			if(data.success == false) {
				console.log('Неверный логин/пароль');
			} else {
				welcome.classList.add('welcome_active');
				form.classList.remove('signin_active');
				id.innerText = data.user_id;
				localStorage.setItem('user', data.user_id);
			}
		}	
	});

});