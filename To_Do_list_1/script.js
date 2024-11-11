let input = document.querySelector('.inputField');
let btn = document.querySelector('.addBtn');
let taskContainer = document.querySelector('.taskContainer');

btn.addEventListener('click',function(){
    var task = document.createElement('p');
    task.innerText = input.value;
    taskContainer.appendChild(task);
    input.value = '';
    task.addEventListener('click',function(){
        task.style.textDecoration = 'line-through';
    })
    task.addEventListener('dblclick',function(){
        taskContainer.removeChild(task);
    })
})