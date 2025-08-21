"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//16. Create a generic class Box that can store any type of value.
exports.Box = void 0;

class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.Box = Box;
