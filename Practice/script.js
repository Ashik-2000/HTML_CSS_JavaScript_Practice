
var numbers = [1, 5, 6, 7, 2, 6, 9, 8, 3];
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


var show = numbers.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
});

console.log(show);
// numbers.reduce(function(previousValue, currentValue){
//     console.log(previousValue);
//     console.log(currentValue);
// });