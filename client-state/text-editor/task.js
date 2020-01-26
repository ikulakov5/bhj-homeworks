let editor = document.getElementById('editor');

window.onload = function(){
	if(localStorage.formText != '')
	editor.value = localStorage.formText;
}

editor.addEventListener('input', (e) => {
		localStorage.setItem('formText', editor.value);
});


