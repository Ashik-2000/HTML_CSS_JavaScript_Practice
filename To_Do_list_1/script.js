let input = document.querySelector('.inputField');
let form = document.querySelector('form');
let dueTasks = document.querySelector('#dueTasks');
let doneTasks = document.querySelector('#doneTasks');

let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');

    checkbox.type = 'checkbox';
    label.innerText = task;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(input.value);
    dueTasks.appendChild(listItem);
    input.value = "";
    clickCheckBox(listItem, completedTask);
}

let completedTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'deleteBtn';

    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    doneTasks.appendChild(listItem);
    clickDeleteBtn(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    doneTasks.removeChild(listItem);
}

let clickCheckBox = function(listitem, completetask){
    let checkBox = listitem.querySelector('input[type="checkbox"]');
    checkBox.onchange = completetask;
}
let clickDeleteBtn = function(listitem, deletetask){
    let deleteBtn = listitem.querySelector('button');
    deleteBtn.onclick = deletetask;
}



form.addEventListener('submit', addTask);