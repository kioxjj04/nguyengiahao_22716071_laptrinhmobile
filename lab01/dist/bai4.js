"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return (this.width + this.height) * 2;
    }
}
exports.Rectangle = Rectangle;
