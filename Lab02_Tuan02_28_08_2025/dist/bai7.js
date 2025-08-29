"use strict";
//7. Use Promise.race() to return whichever Promise resolves first. (make example promise)
const bai7promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved first"), 1000));
const bai7promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved first"), 500));
const bai7promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved first"), 1500));
let racePromise = Promise.race([bai7promise1, bai7promise2, bai7promise3]);
racePromise.then((result) => {
    console.log("Race completed with result:", result);
});
