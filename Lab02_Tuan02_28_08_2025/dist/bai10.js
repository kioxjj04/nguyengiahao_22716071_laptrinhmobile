"use strict";
//10. Use .finally() to log "Done" when a Promise finishes (success or failure).
let finalPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Final result");
    }, 1000);
});
finalPromise
    .then((result) => {
    console.log("Success:", result);
})
    .finally(() => {
    console.log("Done");
});
