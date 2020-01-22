let chatBtn = document.getElementsByClassName("chat-widget__side-text");
let chatWidget = document.getElementsByClassName("chat-widget");
let curTime = new Date();
curTime = curTime.getHours() + ":" + curTime.getMinutes();
let answerNum;
let answers = ['Привет', 'Что тебе', 'Ага', 'Не хочу', 'Иди домой', 'Ой все!'];



const messages = document.querySelector( '.chat-widget__messages' );

chatBtn[0].onclick = function() {
	chatWidget[0].classList.add("chat-widget_active");
}

let messageForm = document.getElementById("chat-widget__input");

window.onkeydown = function (event){
	if(event.key == "Enter" && messageForm.value != '') { 
		answerNum = Math.floor(Math.random() * answers.length);
		messages.innerHTML += `
		  <div class="message message_client">
		    <div class="message__time">${curTime}</div>
		    <div class="message__text">
		      ${messageForm.value}
		    </div>
		  </div>
		`;

		messages.innerHTML += `
		  <div class="message">
		    <div class="message__time">${curTime}</div>
		    <div class="message__text">
		      ${answers[answerNum]}
		    </div>
		  </div>
		`;
	messageForm.value = "";
 	}
}
