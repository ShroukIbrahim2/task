const Uuid = require('uuid');
const faker = require('faker');

class Person {


    constructor(name, age, email, gender = Gender.Male) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email=email;
        this.id = Uuid.v4();
    }

    // a static method that creates a fake person
    static fake() {
        return new Person(faker.name.findName(), faker.datatype.number(100),faker.internet.email());
    }

}

const Gender = {
    Male: "Male",
    Female: "Female"
}

module.exports = Person;
