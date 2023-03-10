// Define variables for DOM elements
const form = document.querySelector('form');
const taskInput = document.querySelector('#new-task');
const taskList = document.querySelector('ul');

// Define function to add new task
function addTask(event) {
  // Prevent form submission
  event.preventDefault();

  // Get the value of the task input
  const taskText = taskInput.value;

  // Create a new task item with checkbox, label, and delete button
  const newTask = document.createElement('li');
  newTask.innerHTML = `
    <input type="checkbox" id="task-${taskList.children.length + 1}" name="task-${taskList.children.length + 1}">
    <label for="task-${taskList.children.length + 1}">${taskText}</label>
    <button>Delete</button>
  `;

  // Append the new task item to the task list
  taskList.appendChild(newTask);

  // Clear the task input
  taskInput.value = '';
}

// Define function to delete task
function deleteTask(event) {
  // Get the delete button's parent element (the task item)
  const taskItem = event.target.parentElement;

  // Remove the task item from the task list
  taskList.removeChild(taskItem);
}

// Add event listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', function(event) {
  // Check if delete button was clicked
  if (event.target.tagName === 'BUTTON') {
    deleteTask(event);
  }
});
