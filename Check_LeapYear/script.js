
function checkLeapYear() {
    const input = document.getElementById("inputField").value;
    if (input === "" || isNaN(input) || !Number.isInteger(Number(input))) {
        document.getElementById("output").innerHTML = "Please enter a valid year.";
        return;
    }
    var year = Number(input);
    if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) {
        document.getElementById("output").innerHTML = "This is a Leap Year."
    }
    else {
        document.getElementById("output").innerHTML = "This is not a Leap Year."
    }
}