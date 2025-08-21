//4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.

export class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area() : number {
        return this.width * this.height;
    }

    perimeter() : number {
        return (this.width + this.height) * 2;
    }
}