const status = false;

console.log('Task 1');

const promise = new Promise(function(resolve, reject){
    setTimeout(function() {
        if(status){
            resolve('Task 2');
        } else{
            reject('failed');
        }
    }, 2000);
});


console.log('Task 3');