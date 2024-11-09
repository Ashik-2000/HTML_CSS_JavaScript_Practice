window.onload = function () {
    let addTaskBtn = document.querySelector('#addTaskBtn');
    let taskInputField = document.querySelector('#taskInputField');
    let tasks = document.querySelector('.tasks');

    addTaskBtn.addEventListener('click', function () {
        var newTask = document.createElement('p')
        newTask.innerText = taskInputField.value
        tasks.appendChild(newTask)
        taskInputField.value = ""
        newTask.addEventListener('click', function () {
            newTask.style.textDecoration = 'line-through'
        })
        newTask.addEventListener('dblclick', function () {
            tasks.removeChild(newTask)
        })
    })
}