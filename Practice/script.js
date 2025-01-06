let x = 'k';

try {
    if (x == 0 ) throw "empty.";
    if (x > 50 ) throw "Too Large.";
    if (x < 10 ) throw "Too small.";
    if (isNaN(x)) throw "Not a number.";
} catch (error) {
    console.log(error);
}

