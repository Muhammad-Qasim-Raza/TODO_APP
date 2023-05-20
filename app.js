// Wrap the code in an event listener for the 'DOMContentLoaded' event:
document.addEventListener('DOMContentLoaded', function () {

    // Retrieve the necessary elements from the HTML document:
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');


    // Add an event listener to the form for the 'submit' event:
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const todoText = input.value.trim();

        if (todoText !== '') {
            const todoItem = createTodoItem(todoText);
            list.appendChild(todoItem);
            input.value = '';
        }
    });


    // Add an event listener to the list for the 'click' event:
    list.addEventListener('click', function (event) {
        const target = event.target;
        const todoItem = target.closest('.todo-item');

        if (target.classList.contains('btn-done')) {
            todoItem.querySelector('.todo-text').classList.toggle('done');
            target.classList.toggle('active');
        } else if (target.classList.contains('btn-edit')) {
            const todoText = todoItem.querySelector('.todo-text').textContent;
            const updatedText = prompt('Edit todo', todoText);

            if (updatedText !== null && updatedText.trim() !== '') {
                todoItem.querySelector('.todo-text').textContent = updatedText.trim();
            }
        } else if (target.classList.contains('btn-delete')) {
            todoItem.remove();
        }
    });


    // Define the createTodoItem function to create a new todo item:
    function createTodoItem(text) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const todoText = document.createElement('span');
        todoText.classList.add('todo-text');
        todoText.textContent = text;

        const todoActions = document.createElement('div');
        todoActions.classList.add('todo-actions');

        const doneButton = createButton('Done', 'btn-done');
        const editButton = createButton('Edit', 'btn-edit');
        const deleteButton = createButton('Delete', 'btn-delete');

        todoActions.appendChild(doneButton);
        todoActions.appendChild(editButton);
        todoActions.appendChild(deleteButton);

        todoItem.appendChild(todoText);
        todoItem.appendChild(todoActions);

        return todoItem;
    }


    // Define the createButton function to create a button element:
    function createButton(text, className) {
        const button = document.createElement('button');
        button.textContent = text;
        button.classList.add(className);
        return button;
    }
});