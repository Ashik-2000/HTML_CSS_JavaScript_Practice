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

leapYear1(1988)
leapYear1(1965)
leapYear1("1988")
leapYear1(321.4)
leapYear1(2016)
leapYear1(2064)
leapYear1('fuck')

console.log('ChatGPT');

leapYear2(1988)
leapYear2(1965)
leapYear2("1988")
leapYear2(321.4)
leapYear2(2016)
leapYear2(2064)
leapYear2('fuck')