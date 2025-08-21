//14. Create a base class Employee. Extend Manager and Developer with specific methods.
export class Employee {
    name: string;
    position: string;

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }

    getInfo(): string {
        return `${this.name} is a ${this.position}`;
    }
}

export class Manager extends Employee {
    constructor(name: string) {
        super(name, "Manager");
    }

    manage(): void {
        console.log(`${this.name} is managing the team.`);
    }
}

export class Developer extends Employee {
    constructor(name: string) {
        super(name, "Developer");
    }

    code(): void {
        console.log(`${this.name} is writing code.`);
    }
}