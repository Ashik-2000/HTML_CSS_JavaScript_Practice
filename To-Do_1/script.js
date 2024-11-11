let input = document.querySelector('.inputField')
let btn = document.querySelector('.addBtn')
let tasks = document.querySelector('.tasks')

btn.addEventListener('click',function(){
    var task = document.createElement('p')
    task.innerText = input.value
    tasks.appendChild(tast)
    input.value = ""
})