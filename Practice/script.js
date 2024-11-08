// let grandpa = document.querySelector('.mobile')
let children = document.querySelector('.item')
let parent = children.parentElement
let grandpa = children.closest('.mobile')

console.log(parent)
console.log(grandpa)

let childrenTwo = children.nextElementSibling
let childrenOne = childrenTwo.previousElementSibling
childrenTwo.style.color = 'red'
childrenOne.style.color = 'red'