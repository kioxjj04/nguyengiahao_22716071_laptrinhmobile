//2. Write a class Student extending Person with an additional attribute grade. Add a method to
//display all info.

import { Person } from "./bai1";

export class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }

    introduce() : void {
        console.log('Bai 2: ' + this.name, this.age, this.grade)
    }
}