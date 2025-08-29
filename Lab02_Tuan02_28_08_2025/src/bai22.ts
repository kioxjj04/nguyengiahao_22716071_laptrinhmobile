//22. Call the API multiple times and log the results.

let fetchDatas = async (ids: number[]) => {
    let todos = await Promise.all(ids.map(async id => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return response.json();
    }));
    return todos;
};

fetchDatas([4, 5, 6]).then(todos => console.log(todos)).catch(error => console.error(error));
