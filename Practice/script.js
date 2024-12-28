let array = [5, 6, 9, 7, 3, 2, 1, 8, 4]

function myFunction(value, index, array){
    return value * 2; 
}

let numbers = array.map(myFunction)
console.log(array);
console.log(numbers);

