let editMode = false;
let editIndex = null;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        if (editMode) {
            document.querySelectorAll('.task-text')[editIndex].innerText = taskText;
            editMode = false;
            editIndex = null;
        } else {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <div class="actions">
                    <button onclick="editTask(this)">✏️</button>
                    <button onclick="deleteTask(this)">❌</button>
                </div>
            `;
            taskList.appendChild(listItem);
        }
        taskInput.value = '';
    }
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('.task-text').innerText;

    document.getElementById('taskInput').value = taskText;
    editMode = true;
    editIndex = Array.from(taskItem.parentElement.children).indexOf(taskItem);
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
