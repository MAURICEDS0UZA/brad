// // fetch("https://api.github.com/users/bradtraversy/repos").then((data) => data.json()).then(res => console.log(res)).catch(err => console.log(err));
// fetch("https://api.github.com/users/bradtraversy/repos").then((data) => data.json()).then(res => (document.querySelector("h1").textContent = res[1].name)).catch(err => console.log(err));
function createPost({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
        body: JSON.stringify({
            title,
            body,
            userId: 1,
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            token: '12ns'
        },
    })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}

createPost({ title: 'hwlllo', body: "this is me" })