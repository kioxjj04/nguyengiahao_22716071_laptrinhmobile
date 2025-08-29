//17. Use for await...of to iterate over an array of Promises.

import bai14 from "./bai14";

let bai17 = async () => {
    let promises = [bai14(5), bai14(10), bai14(15)];
    for await (let result of promises) {
        console.log(result);
    }
};

bai17();
