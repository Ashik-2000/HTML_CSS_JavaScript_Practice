const payment = true;
const marks = 70;

function enroll(callback) {
    console.log("Couse enrollment is in progress.");

    setTimeout(() => {
        if (payment) {
            callback();
        } else {
            console.log("Payment Failed.")
        }
    }, 2000);
}

function progress(callback) {
    console.log("Course on progress...");
    setTimeout(() => {
        if (marks >= 80) {
            callback();
        } else {
            console.log("You could not get enough marks to get the certificate.");
        }
    }, 3000);
}

function getCertificate() {
    console.log('Preparing your certificate.');
    setTimeout(() => {
        console.log('Congrats!!! you got the certificate.')
    }, 1000);
}

enroll(function () {
    progress(getCertificate);
});