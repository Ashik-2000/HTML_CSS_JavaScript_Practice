var arr = [1, 2, 3, 5, 4, 6, 7, 8, 9]

for (x in arr){
    console.log(arr[x]);
    
}

console.log('\n------------------\n');


for (x of arr){
    console.log(x);
    
}