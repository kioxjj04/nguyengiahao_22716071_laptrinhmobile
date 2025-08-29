//28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).

let batchProcess = async () => {
    let tasks = Array.from({ length: 5 }, (_, i) => async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Task ${i + 1} completed`);
    });

    for (let i = 0; i < tasks.length; i += 5) {
        await Promise.all(tasks.slice(i, i + 5).map(task => task()));
    }
};

batchProcess();
