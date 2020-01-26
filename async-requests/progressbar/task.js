let progress = document.getElementById('progress');
let form = document.getElementById('form');
let formData = new FormData(form);
let send = document.getElementById('send');

send.onclick = function() {
	let request = new XMLHttpRequest();
	request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	request.addEventListener('readystatechange', (e) => {
		e.preventDefault();
		if(request.readyState == 1 && request.status === 200) {
			progress.value = 0.1;
	    } else if(request.readyState == 2 && request.status === 200) {
			progress.value = 0.3;
		} else if(request.readyState == 3 && request.status === 200) {
			progress.value = 0.8;
		} else if(request.readyState == 4 && request.status === 200) {
			progress.value = 1;
		}
		
	});
	request.send(formData);
	return false
}