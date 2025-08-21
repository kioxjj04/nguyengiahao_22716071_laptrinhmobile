"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
//27. Create a class Teacher that extends Person. Add subject attribute and introduce method.
const bai1_1 = require("./bai1");
class Teacher extends bai1_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I teach ${this.subject}.`);
    }
}
exports.Teacher = Teacher;
