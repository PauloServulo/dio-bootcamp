const form = document.getElementById("task-form");
const list = document.getElementById("list");

form.onsubmit = function (e) {
    e.preventDefault();
	const inputField = document.getElementById('task-input');
    if (inputField.value != '') {
        addTask(inputField.value);
    }
	form.reset();
}

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	list.appendChild(taskContainer);
}