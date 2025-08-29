//15. Call multiple async functions sequentially using await.

import bai14 from "./bai14";

let bai15 = async () => {
    let result1 = await bai14(5);
    console.log(result1);
    let result2 = await bai14(10);
    console.log(result2);
};

bai15();
