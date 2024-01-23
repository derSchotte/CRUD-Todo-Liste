import './../scss/style.scss';
import './saveFile';

// const fs = require('fs');

const form = document.querySelector('#todo-form');
const taskInput = document.querySelector('#task');
const todoList = document.querySelector('#todoList');

let todos = [];

form.addEventListener('submit', addTodo);
todoList.addEventListener('click', toggleTodo);
todoList.addEventListener('click', removeTodo);
todoList.addEventListener('click', editTodo);

renderTodos();

function addTodo(event) {
    event.preventDefault();

    const task = taskInput.value;

    if (task === '') { return; }

    const todo = {
        id: Date.now(),
        task,
        done: false,
    };

    todos.push(todo);

    taskInput.value = '';

    renderTodos();
}

function toggleTodo(event) {
    if (!event.target.matches('li')) { return; }

    const todoId = Number(event.target.dataset.id);
    const todo = todos.find(todo => todo.id === todoId);

    todo.done = !todo.done;

    renderTodos();
}

function editTodo(event) {
    if (!event.target.matches('.edit-todo')) { return; }

    const todoId = Number(event.target.closest('li').dataset.id);
    const todo = todos.find(todo => todo.id === todoId);

    const input = document.createElement('input');
    input.value = todo.task;
    input.classList.add('edit-input');

    const li = event.target.closest('li');
    li.innerHTML = '';
    li.appendChild(input);
    input.focus();

    input.addEventListener('blur', () => {
        todo.task = input.value;
        renderTodos();
    });
}

function removeTodo(event) {
    if (!event.target.matches('.remove-todo')) { return; }

    const todoId = Number(event.target.closest('li').dataset.id);
    todos = todos.filter(todo => todo.id !== todoId);

    renderTodos();
}

function renderTodos() {
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.dataset.id = todo.id;

        if (todo.done) {
            li.classList.add('done');
        }

        const textSpawn = document.createElement('span');
        textSpawn.textContent = todo.task;
        li.appendChild(textSpawn);

        const removeButton = document.createElement('button');

        removeButton.classList.add('remove-todo');
        removeButton.textContent = 'x';

        li.appendChild(removeButton);

        const editButton = document.createElement('button');

        editButton.classList.add('edit-todo');
        editButton.textContent = 'Edit';
        li.appendChild(editButton);

        todoList.appendChild(li);
    });
}