//20. Add a timeout: if the API call takes more than 2 seconds, throw an error.

let fetchUsersTimeout = async (ids: number[]) => {
    let users = await Promise.all(ids.map(id => {
        return Promise.race([
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json()),
            new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 2000))
        ]);
    }));
    return users;
};

fetchUsersTimeout([1, 2, 3]).then(users => console.log(users)).catch(error => console.error(error));