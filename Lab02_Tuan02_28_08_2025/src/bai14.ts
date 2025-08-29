//14. Write an async function that takes a number, waits 1 second, and returns the number × 3.

let bai14 = async (num: number) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return num * 3;
};

bai14(5).then(result => console.log(result));

export default bai14;