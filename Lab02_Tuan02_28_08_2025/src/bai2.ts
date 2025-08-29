//2. Write a function that returns a Promise resolving with the number 10 after 1 second.

let promiseNumber = new Promise<number>((resolve) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});

promiseNumber.then((num) => {
    console.log(num);
});
