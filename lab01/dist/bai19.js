"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//19. Demonstrate method overriding using polymorphism with Animal and subclasses.
exports.Cat2 = exports.Dog2 = exports.Animal3 = void 0;
class Animal3 {
    makeSound() {
        return "Some generic animal sound";
    }
}
exports.Animal3 = Animal3;
class Dog2 extends Animal3 {
    makeSound() {
        return "Bark";
    }
}
exports.Dog2 = Dog2;
class Cat2 extends Animal3 {
    makeSound() {
        return "Meow";
    }
}
exports.Cat2 = Cat2;
