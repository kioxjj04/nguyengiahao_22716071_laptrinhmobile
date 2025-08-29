//18. Write an async function fetchUser(id) that simulates an API call (resolves a user object after 1 second).

let fetchUser = async (id: number) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { id, name: "User" + id };
};

fetchUser(1).then(user => console.log(user));