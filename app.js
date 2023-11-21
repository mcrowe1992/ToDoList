// ToDo class
class ToDo {
    constructor(text) {
        this.text = text;
        this.isComplete = false;
    }
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = new ToDo(taskText);
        tasks.push(newTask);
        displayTasks();
        taskInput.value = '';
    }
}

// Function to display tasks
function displayTasks() {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = task.isComplete ? 'task completed' : 'task';
        taskElement.innerHTML = `
            <input type="checkbox" onchange="toggleTask(${index})" ${task.isComplete ? 'checked' : ''}>
            <span>${task.text}</span>
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskContainer.appendChild(taskElement);
    });
}

// Function to toggle task completion
function toggleTask(index) {
    tasks[index].isComplete = !tasks[index].isComplete;
    displayTasks();
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Array to store tasks
const tasks = [];

// Initial display of tasks
displayTasks();