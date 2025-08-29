//21. Use fetch to get data from a public API (e.g.,https://jsonplaceholder.typicode.com/todos/1).

let fetchData = async (id: number) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.json();
};

fetchData(1).then(todo => console.log(todo)).catch(error => console.error(error));
