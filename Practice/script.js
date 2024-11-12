let input = document.querySelector('.input');
let result = document.querySelector('.result');
let thanks = document.querySelector('.thanks');

function show () {
    result.innerHTML = this.value;
    setTimeout(() => {
        thanks.innerHTML = `You have typed: ${this.value}`;
    },1000);
}

input.addEventListener('keyup',show);