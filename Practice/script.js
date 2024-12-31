function leapYear1(a) {
    const year = Number(a)
    if (isNaN(year)) {
        console.log(a + ' is not a number');
    }
    else if (!Number.isInteger(year)) {
        console.log(year + ' is not a Integer');
    }
    else {
        if ((year % 4 == 0) || (year % 100 == 0 && year % 400 == 0)) {
            console.log(year + ' is a leapYear');
        }
        else {
            console.log(year + ' is not a leapYear');
        }
    }
}

function leapYear2(a) {
    const year = Number(a); // Convert input to a number
    if (isNaN(year)) {
        console.log(a + ' is not a valid number');
    } else if (!Number.isInteger(year)) {
        console.log(a + ' is not an integer'); 
    } else {
        // Correct leap year calculation
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            console.log(year + ' is a leap year');
        } else {
            console.log(year + ' is not a leap year');
        }
    }
}

console.log('My function');

leapYear1(1900);


console.log('ChatGPT');

leapYear2(1900);

let n = 1900;

if (n % 4 ==0){
    if (n % 100 == 0) {
        console.log('Not LeapYear');
    }
    else if (n % 400 ==0){
        console.log('LeapYear');
        
    }
}
else{
    console.log('Not LeapYear');
    
}
