let array = [5, 6, 9, 7, 3, 2, 1, 8, 4]
array.sort(function(a, b){
    return 0.5 - Math.random();
});
console.log(array);

