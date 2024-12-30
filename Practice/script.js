function generate(a,b){
    return Math.floor(Math.random() * (b - a + 1)+a);
}

let n = generate(1, 6);
console.log(n);
