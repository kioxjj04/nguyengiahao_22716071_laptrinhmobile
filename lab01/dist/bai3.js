"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//3. Create a class Car with properties brand, model, year. Write a method to show car info.
exports.Car = void 0;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    printCar() {
        console.log('Bai 3:' + this.brand, this.model, this.year);
    }
}
exports.Car = Car;
