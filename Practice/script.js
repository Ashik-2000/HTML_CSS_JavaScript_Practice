const personMethods = {
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

function Person(name, age){
    let person = {};

    person.name = name;
    person.age = age;

    person.eat = personMethods.eat;
    person.sleep = personMethods.sleep;
    person.play = personMethods.play;
    
    return person;
}

const sakib = Person("Sakib", 35);
const tamim = Person ("Tamim", 25);

