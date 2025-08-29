"use strict";
//6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
let promise1 = Promise.resolve("First task done");
let promise2 = Promise.resolve("Second task done");
let promise3 = Promise.resolve("Third task done");
let allPromises = Promise.all([promise1, promise2, promise3]).then((messages) => {
    console.log(messages);
});
allPromises.then(() => {
    console.log("All tasks completed");
});
