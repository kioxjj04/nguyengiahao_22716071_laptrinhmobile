// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.

let fetchUsers = async (ids: number[]) => {
    let users = await Promise.all(ids.map(id => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(response => response.json());
    }));
    return users;
};

fetchUsers([1, 2, 3]).then(users => console.log(users));
