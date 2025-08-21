//29. Create an interface Movable with method move(). Implement it in Car and Robot.
export interface Movable {
    move(): void;
}
export class Car2 implements Movable {

    constructor() {}

    move(): void {
        console.log("Car is moving");
    }
}
export class Robot implements Movable {

    constructor() {}
    move(): void {
        console.log("Robot is moving");
    }
}