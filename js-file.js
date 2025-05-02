// Task form elements
const input = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskList = document.querySelector('#task-list');

// Done-button function
function doneBtn(tasktext) {
    const btn = document.createElement('button');
    btn.textContent = 'Done';
    btn.classList.add('btn-done');

    btn.addEventListener('click', () => {
        // Mark task visually as completed
        tasktext.style.textDecoration = 'line-through';
        tasktext.style.color = 'gray';
    });

    return btn;
}

// Remove-button function
function removeBtn(taskList, newtask) {
    const btn = document.createElement('button');
    btn.textContent = 'Remove';
    btn.classList.add('btn-remove');

    btn.addEventListener('click', () => {
        // Remove the task from the list
        taskList.removeChild(newtask);
    });

    return btn;
}

// Add task button click
addTaskBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form default behavior

    const value = input.value.trim();
    if (value !== '') {
        // Create new task item
        const newtask = document.createElement('li');
        taskList.appendChild(newtask); // Add to task list
        newtask.classList.add('new-task');
        input.value = ''; // Clear input

        // Creat a span for task test
        const tasktext = document.createElement('span');
        tasktext.textContent = value;
        newtask.appendChild(tasktext);

        // Add "Done" and "Remove" buttons to the task
        newtask.appendChild(doneBtn(tasktext));
        newtask.appendChild(removeBtn(taskList, newtask));
    }
});