"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Create an abstract class Shape with method area(). Implement Square and Circle.
exports.Circle = exports.Square = exports.Shape = void 0;
class Shape {
}
exports.Shape = Shape;
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
}
exports.Square = Square;
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
exports.Circle = Circle;
