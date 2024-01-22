// // // fetch("https://api.github.com/users/bradtraversy/repos").then((data) => data.json()).then(res => console.log(res)).catch(err => console.log(err));
// // fetch("https://api.github.com/users/bradtraversy/repos").then((data) => data.json()).then(res => (document.querySelector("h1").textContent = res[1].name)).catch(err => console.log(err));
// function createPost({ title, body }) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'post',
//         body: JSON.stringify({
//             title,
//             body,
//             userId: 1,
//         }),
//         headers: {
//             'Content-Type': 'application/json; charset=UTF-8',
//             token: '12ns'
//         },
//     })
//         .then(res => res.json())
//         .then(json => console.log(json))
//         .catch(error => console.error('Error:', error));
// }

// createPost({ title: 'hwlllo', body: "this is me" })
fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(data => console.log(data))


fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(data => console.log(data))


