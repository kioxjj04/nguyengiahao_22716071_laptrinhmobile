"use strict";
//1. Create a Promise that returns the string "Hello Async" after 2 seconds.
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise = void 0;
let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
exports.promise = promise;
promise.then((message) => {
    console.log(message);
});
