"use strict";
//30. Use async/await + Promise.allSettled() to handle multiple API calls and display their success/failure status.
// let fetchMultipleAPICalls = async (ids: number[]) => {
//     let promises = ids.map(id => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`));
//     let results = await Promise.allSettled(promises);
//     results.forEach((result: PromiseSettledResult<Response>, index: number) => {
//         if (result.status === "fulfilled") {
//             console.log(`Task ${ids[index]} succeeded:`, result.value);
//         } else {
//             console.error(`Task ${ids[index]} failed:`, result.reason);
//         }
//     });
// };
// fetchMultipleAPICalls([1, 2, 3, 4, 5]);
