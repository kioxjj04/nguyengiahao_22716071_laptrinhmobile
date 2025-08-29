"use strict";
//4. Use .then() and .catch() to handle a Promise that returns a random number.
let promiseRandom = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNum = Math.random();
        if (randomNum > 0.5) {
            resolve(randomNum);
        }
        else {
            reject(new Error("Random number is too high"));
        }
    }, 1000);
});
promiseRandom.then((num) => {
    console.log("Random number:", num);
});
