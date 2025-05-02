// Task form elements
const input = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskList = document.querySelector('#task-list');

// Done-button function
function doneBtn(newtask) {
    const btn = document.createElement('button');
    btn.textContent = 'Done';

    btn.addEventListener('click', () => {
        // Mark task visually as completed
        newtask.style.textDecoration = 'line-through';
        newtask.style.color = 'gray';
    });

    return btn;
}

// Remove-button function
function removeBtn(taskList, newtask) {
    const btn = document.createElement('button');
    btn.textContent = 'Remove';

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
        newtask.textContent = value;
        taskList.appendChild(newtask); // Add to task list
        input.value = ''; // Clear input

        // Add "Done" and "Remove" buttons to the task
        newtask.appendChild(doneBtn(newtask));
        newtask.appendChild(removeBtn(taskList, newtask));
    }
});
