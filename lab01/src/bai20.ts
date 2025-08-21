//20. Write a Vehicle interface and implement it in Car and Bike classes.
export interface Vehicle {
    start(): void;
    stop(): void;
    getInfo(): string;
}

export class Car1 implements Vehicle {

    constructor() {}

    start(): void {
        console.log("Car is starting");
    }

    stop(): void {
        console.log("Car is stopping");
    }

    getInfo(): string {
        return "This is a car";
    }
}

export class Bike implements Vehicle {

    constructor() {}

    start(): void {
        console.log("Bike is starting");
    }

    stop(): void {
        console.log("Bike is stopping");
    }

    getInfo(): string {
        return "This is a bike";
    }
}
