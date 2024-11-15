let input = document.querySelector('.inputField');
let form = document.querySelector('form');
let tasks = document.querySelector('#dueTasks');
let completedTask = document.querySelector('#doneTasks');

let createTask = function(task){
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    checkbox.type = 'checkbox';
    label.innerText = task;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(input.value);
    tasks.appendChild(listItem);
    input.value = "";
}


form.addEventListener('submit', addTask);