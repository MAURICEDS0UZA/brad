// // fetch("https://api.github.com/users/bradtraversy/repos").then((data) => data.json()).then(res => console.log(res)).catch(err => console.log(err));
// fetch("https://api.github.com/users/bradtraversy/repos").then((data) => data.json()).then(res => (document.querySelector("h1").textContent = res[1].name)).catch(err => console.log(err));
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'post',
    body: JSON.stringify({
        title: 'foo',
        body: 'basddr',
        userId: 1,
    }),
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));


