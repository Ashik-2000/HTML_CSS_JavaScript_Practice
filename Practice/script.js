let arr = [];
increment = 0;

let container = document.querySelector('.container');

while(increment < 10000){
    arr.push(++increment)
}

container.innerHTML = arr.join('');