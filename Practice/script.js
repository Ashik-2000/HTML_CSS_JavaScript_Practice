function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype = {
    eat() {
        console.log('Person is eating');
    },
    sleep() {
        console.log('Person is sleeping');
    },
    play() {
        console.log('Person is playing');
    },
}



const sakib = new Person("Sakib", 35);
sakib.play();
const tamim = new Person ("Tamim", 25);
tamim.sleep();

