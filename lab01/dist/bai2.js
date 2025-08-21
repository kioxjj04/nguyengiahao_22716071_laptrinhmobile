"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//2. Write a class Student extending Person with an additional attribute grade. Add a method to
//display all info.
exports.Student = void 0;
const bai1_1 = require("./bai1");
class Student extends bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    introduce() {
        console.log('Bai 2: ' + this.name, this.age, this.grade);
    }
}
exports.Student = Student;
