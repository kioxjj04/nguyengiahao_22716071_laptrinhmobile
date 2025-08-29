//29. Write an async function queueProcess() that processes tasks sequentially in a queue.

let queueProcess = async () => {
    let tasks = Array.from({ length: 10 }, (_, i) => async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Task ${i + 1} completed`);
    });

    for (let task of tasks) {
        await task();
    }
};

queueProcess();
