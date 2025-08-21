"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat1 = exports.Dog1 = exports.Animal1 = void 0;
//28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
class Animal1 {
    makeSound() {
        return "Some generic animal sound";
    }
}
exports.Animal1 = Animal1;
class Dog1 extends Animal1 {
    makeSound() {
        return "Bark";
    }
}
exports.Dog1 = Dog1;
class Cat1 extends Animal1 {
    makeSound() {
        return "Meow";
    }
}
exports.Cat1 = Cat1;
