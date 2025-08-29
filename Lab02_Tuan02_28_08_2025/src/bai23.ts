//23. Write an async function that fetches a list of todos and filters out those that are not completed. (dont use old function)

let fetchAndFilterTodos = async function() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data: { userId: number; id: number; title: string; completed: boolean; }[] = await response.json();
    return data.filter(todo => todo.completed);
}

fetchAndFilterTodos().then(todos => console.log(todos)).catch(error => console.error(error));