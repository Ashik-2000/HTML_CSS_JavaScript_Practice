function display(sum) {
    console.log(sum);
}

function calculation(n1, n2, callback){
    sum = n1 + n2;
    if (callback) callback(sum);
    return sum
}

console.log(calculation(15, 5, ))