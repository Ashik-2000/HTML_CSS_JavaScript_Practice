let input = document.querySelector('.inputField');
let form = document.querySelector('form');
let dueTasks = document.querySelector('#dueTasks');
let doneTasks = document.querySelector('#doneTasks');


let addTask = function (event) {
    event.preventDefault();
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = input.value;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    dueTasks.appendChild(listItem);
    input.value = "";

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('click', function () {
        let listItem = this.parentNode;
        let deleteBtn = document.createElement('button');

        deleteBtn.innerText = "Delete";
        deleteBtn.className = "deleteBtn";

        listItem.appendChild(deleteBtn);

        let checkBox = listItem.querySelector('input[type="checkbox"]');
        checkBox.remove();
        doneTasks.appendChild(listItem);

        deleteBtn.addEventListener('click', function () {
            let listItem = this.parentNode;
            doneTasks.removeChild(listItem);
        })
    })
}

form.addEventListener('submit', addTask);