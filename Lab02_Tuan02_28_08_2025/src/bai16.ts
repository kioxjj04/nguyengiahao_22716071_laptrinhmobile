//16. Call multiple async functions in parallel using Promise.all().

import bai14 from "./bai14";

let bai16 = async () => {
    let results = await Promise.all([bai14(5), bai14(10), bai14(15)]);
    console.log(results);
};

bai16();
