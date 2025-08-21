"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
exports.Cat = exports.Dog = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("Gau gau");
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meo meo");
    }
}
exports.Cat = Cat;
