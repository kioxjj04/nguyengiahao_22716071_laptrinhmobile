// 8. Create a Promise chain: square the number 2, then double it, then add 5.

let promiseChain = Promise.resolve(2)
    .then((value) => {
        console.log("Square:", value);
        return value * value; // Square the number
    })
    .then((value) => {
        console.log("Double:", value);
        return value * 2; // Double the result
    })
    .then((value) => {
        console.log("Add 5:", value);
        return value + 5; // Add 5
    })
    .then((value) => {
        console.log("Result:", value);
    });

promiseChain;