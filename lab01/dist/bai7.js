"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//7. Write a class User with private property name and getter/setter.
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
