function printThis(x, o){
    x = x * 5;
    o.p = 10;

    console.log(x);
    console.log(o.p);
    

    
}

let obj = {
    p : 1,
    q : 2
}

let x = 5;

printThis(x, obj);

console.log(x);
console.log(obj);
