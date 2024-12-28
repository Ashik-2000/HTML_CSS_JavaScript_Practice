let array = [5, 6, 9, 7, 3, 2, 1, 8, 4]

function myFunction(value, index, array){
    return value > 4; 
}

let numbers = array.filter(myFunction)
console.log(array);
console.log(numbers);

