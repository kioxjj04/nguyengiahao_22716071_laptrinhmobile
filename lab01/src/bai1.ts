//1. Create a class Person with attributes name and age. Write a method to display this information.
export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    printInfo(): void {
        console.log('Bai1: '+this.name, this.age)
    }
}