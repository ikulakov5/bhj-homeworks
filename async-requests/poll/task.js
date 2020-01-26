let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.addEventListener('readystatechange', (e) => {
	if (request.readyState == request.DONE && request.status == 200) {
		let data = JSON.parse(request.responseText);
		let poll = document.getElementById('poll__title');
		let pollAnswers = document.getElementById('poll__answers');
		poll.textContent = data.data.title;
		for (let variant in data.data.answers) {
			pollAnswers.insertAdjacentHTML("beforeEnd", `<button class="poll__answer">${data.data.answers[variant]}</button>`);
		}

		let answer = document.getElementsByClassName("poll__answer");
		for (let ans of answer) {
			ans.onclick = function() {

				alert('Спасибо, ваш голос засчитан!');

				let req = new XMLHttpRequest();
				req.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
				req.addEventListener('readystatechange', (e) => {
					if (request.readyState == request.DONE && request.status == 200) {
						let stat = JSON.parse(req.responseText);
						console.log(stat);
					}
				});
				req.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
				req.send(`vote=${data.data.id}&answer=2`);
			}
		}

	}
});
request.send();					