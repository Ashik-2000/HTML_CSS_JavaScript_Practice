let newTask = document.querySelector('#new-task')
let form = document.querySelector('form')
let todoUL = document.querySelector('#items')
let completeUL = document.querySelector('.complete-list ul')

let createTast = function (task) {
    let listItem = document.createElement('li')
    let checkBox = document.createElement('input')
    let label = document.createElement('label')

    label.innerText = task
    checkBox.type = 'checkbox'

    listItem.appendChild(checkBox)
    listItem.appendChild(label)

    return listItem
}

let addTast = function (event) {
    let listItem = createTast(newTask.value)
}