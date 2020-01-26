let taskInput = document.getElementById("task__input");
let tasks = document.getElementById("tasks__list");
let addBtn = document.getElementById("tasks__add");


addBtn.addEventListener("click", (e) => {
	if(taskInput.value != '') {

		tasks.innerHTML += `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`;
		taskInput.value = '';

		e.preventDefault();
	}

});

let tasksListing = document.getElementById('tasks__list');

tasksListing.onclick = (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.target.parentElement.remove();
    }
}


