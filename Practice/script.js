let increaseBtn = document.querySelector('#increaseBtn');
let decreaseBtn = document.querySelector('#decreaseBtn');
let result = document.querySelector('.result');

let number = 0;

increaseBtn.addEventListener('click', function () {
    number++;
    result.textContent = number;
})

decreaseBtn.addEventListener('click', function () {
    number--;
    result.textContent = number;
})