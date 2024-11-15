let input = document.querySelector('.inputField');
let form = document.querySelector('form');
let dueTasks = document.querySelector('#dueTasks');
let doneTasks = document.querySelector('#doneTasks');

let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(input.value);
    dueTasks.appendChild(listItem);
    input.value = "";
    clickCheckBox(listItem, completeTask);
}

let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');

    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";

    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    doneTasks.appendChild(listItem);

    clickDeletebtn(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    doneTasks.removeChild(listItem);
}

let clickCheckBox = function (listitem, completetask) {
    let checkBox = listitem.querySelector('input[type="checkbox"]');
    checkBox.onchange = completetask;
}

let clickDeletebtn = function (listitem, deletetask) {
    let deleteBtn = listitem.querySelector('button');
    deleteBtn.onclick = deletetask;
}

form.addEventListener('submit', addTask);