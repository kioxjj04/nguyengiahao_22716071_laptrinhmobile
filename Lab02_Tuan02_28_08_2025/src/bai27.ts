//27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.

let fetchWithRetry = async (url: string, retries: number) => {
    for (let i = 0; i < retries; i++) {
        try {
            let response = await fetch(url);
            if (!response.ok) throw new Error("Network response was not ok");
            return await response.json();
        } catch (error) {
            if (error instanceof Error) {
                console.error(`Attempt ${i + 1} failed: ${error.message}`);
            } else {
                console.error(`Attempt ${i + 1} failed: Unknown error`);
            }
        }
    }
    throw new Error(`Failed to fetch ${url} after ${retries} attempts`);
};

fetchWithRetry('https://jsonplaceholder.typicode.com/todos/1', 3)
    .then(data => console.log(data))
    .catch(error => console.error(error));