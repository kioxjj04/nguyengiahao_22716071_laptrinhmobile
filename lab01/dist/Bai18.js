"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
exports.MathUtil = void 0;

class MathUtil {
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}
exports.MathUtil = MathUtil;
