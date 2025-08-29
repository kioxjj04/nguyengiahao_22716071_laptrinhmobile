// 12. Write an async function that calls simulateTask(2000) and logs the result. (bai5)

import { simulateTask } from "./bai5";

let bai5Async = async () => {
    let result = await simulateTask(2000);
    console.log(result);
};

bai5Async();
