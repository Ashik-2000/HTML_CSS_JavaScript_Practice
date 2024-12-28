let array = [5, 6, 9, 7, 3, 2, 1, 8, 4]

function myFunction(total, value, index, array){
    console.log(total);
    return total + value;
    
}

let number = array.reduce(myFunction)
console.log(number);

