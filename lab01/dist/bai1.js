"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//1. Create a class Person with attributes name and age. Write a method to display this information.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log('Bai1: ' + this.name, this.age);
    }
}
exports.Person = Person;
