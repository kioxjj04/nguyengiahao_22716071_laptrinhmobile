//28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
export class Animal1 {
    public makeSound(): string {
        return "Some generic animal sound";
    }
}
export class Dog1 extends Animal1 {
    public makeSound(): string {
        return "Bark";
    }
}
export class Cat1 extends Animal1 {
    public makeSound(): string {
        return "Meow";
    }
}