//7. Write a class User with private property name and getter/setter.

export class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    setName(name: string) : void {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}