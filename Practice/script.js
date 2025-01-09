const person = {
    fName: 'Ashik',
    lName: 'Islam',
    language: 'EN',
    get len() {
        return this.fName + ' language is '+ this.language;
    },
    name: function (){
        return this.fName;
    }
}

console.log(person.len);
