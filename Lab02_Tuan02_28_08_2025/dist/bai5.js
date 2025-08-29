"use strict";
// 5. Create a function simulateTask(time) 
// that returns a Promise resolving with "Task done" after time ms.
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask = void 0;
let simulateTask = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
};
exports.simulateTask = simulateTask;
simulateTask(2000).then((message) => console.log(message));
