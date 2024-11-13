let input = document.querySelector('.inputField');
let btn = document.querySelector('.addBtn');
let taskContainer = document.querySelector('.taskContainer');
let completedTask = document.querySelector('.completedTask');

const addTask = function(){
    var task = document.createElement('p');
    task.innerText = input.value;
    taskContainer.appendChild(task);
    input.value = '';
    task.addEventListener('click',() => {
        task.style.textDecoration = 'line-through';
    });
    task.addEventListener('dblclick',function () {
        taskContainer.removeChild(task);
        completedTask.appendChild(task);
    });
}



btn.addEventListener('click', addTask);