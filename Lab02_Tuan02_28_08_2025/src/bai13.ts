//13. Handle errors using try/catch with async/await.

import { promise } from "./bai1";

let bai13 = async () => {
    try {
        let result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

bai13();
