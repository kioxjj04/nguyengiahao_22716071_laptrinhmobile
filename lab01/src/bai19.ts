//19. Demonstrate method overriding using polymorphism with Animal and subclasses.
export class Animal3 {
    makeSound(): string {
        return "Some generic animal sound";
    }
}

export class Dog2 extends Animal3 {
    makeSound(): string {
        return "Bark";
    }
}

export class Cat2 extends Animal3 {
    makeSound(): string {
        return "Meow";
    }
}
