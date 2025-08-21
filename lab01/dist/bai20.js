"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = exports.Car1 = void 0;
class Car1 {
    constructor() { }
    start() {
        console.log("Car is starting");
    }
    stop() {
        console.log("Car is stopping");
    }
    getInfo() {
        return "This is a car";
    }
}
exports.Car1 = Car1;
class Bike {
    constructor() { }
    start() {
        console.log("Bike is starting");
    }
    stop() {
        console.log("Bike is stopping");
    }
    getInfo() {
        return "This is a bike";
    }
}
exports.Bike = Bike;
