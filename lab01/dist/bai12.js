"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
exports.Fish = exports.Bird = void 0;
class Bird {
    fly() {
        console.log("fly.");
    }
}
exports.Bird = Bird;
class Fish {
    swim() {
        console.log("swim.");
    }
}
exports.Fish = Fish;
