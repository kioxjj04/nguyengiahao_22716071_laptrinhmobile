"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//14. Create a base class Employee. Extend Manager and Developer with specific methods.
exports.Developer = exports.Manager = exports.Employee = void 0;
class Employee {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    getInfo() {
        return `${this.name} is a ${this.position}`;
    }
}
exports.Employee = Employee;
class Manager extends Employee {
    constructor(name) {
        super(name, "Manager");
    }
    manage() {
        console.log(`${this.name} is managing the team.`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    constructor(name) {
        super(name, "Developer");
    }
    code() {
        console.log(`${this.name} is writing code.`);
    }
}
exports.Developer = Developer;
