let modal = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close');

let getCookie = (name) => {
	let value = "; " + document.cookie;
	let parts = value.split("; " + name + "=");
	if (parts.length === 2) {
	  return parts
	  .pop()
	  .split(";")
	  .shift();
	  }
}

window.onload = function() {
if (getCookie('user')) {
  return
} else {
    modal.classList.toggle('modal_active');
    close.onclick = function() {
	    document.cookie = 'user=' + encodeURIComponent('close');
	    modal.classList.toggle('modal_active');
    }
  }
}