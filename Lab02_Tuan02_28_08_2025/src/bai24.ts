//24. Write an async function postData() that sends a POST request to a test API.

let postData = async function(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

postData('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 })
    .then(data => console.log(data))