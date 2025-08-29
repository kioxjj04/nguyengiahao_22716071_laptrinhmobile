//9. Write a Promise that reads an array after 1 second and filters even numbers.

let arrayPromise = new Promise<number[]>((resolve) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 1000);
});

arrayPromise.then((array) => {
    const evenNumbers = array.filter((num) => num % 2 === 0);
    console.log("Even numbers:", evenNumbers);
});