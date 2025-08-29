"use strict";
//3. Write a function that rejects a Promise with the error "Something went wrong" after 1 second.
let promiseError = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Something went wrong"));
    }, 1000);
});
promiseError.catch((error) => {
    console.error(error.message);
});
