function Person(name, age){
    let person = Object.create(Person.prototype);

    person.name = name;
    person.age = age;

    return person;
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



const sakib = Person("Sakib", 35);
sakib.play();
const tamim = Person ("Tamim", 25);
tamim.sleep();

