const obj = {
    name: 'Ashik',
    age: 24,
    gender: 'Male',
    intro: function(){
        return `Name is ${this.name}, age ${this.age} and gender ${this.gender}.`
    }
}

obj.intro = obj.intro.toString();

console.log(obj.intro);
console.log(JSON.stringify(obj));
