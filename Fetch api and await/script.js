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
// fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(data => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//         id: 1,
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(data => console.log(data))

// // fetch Api Error handling
// fetch("https://httpstat.us/500")
//     .then(res => {
//         console.log(res);
//         if (res.status === 400) {
//             throw new Error("ssauccess");
//         } else if (res.status === 500) {
//             throw new Error('not found')
//         }
//         // if (!res.ok) {
//         //     console.log("ssauccess");
//         // }

//         return res;
//     })
//     .then(() => console.log("success"))
//     .catch(err => console.log(err))
// Success
fetch('http://httpstat.us/200')
    .then((response) => {
        return response;
    })
    .then(() => {
        console.log('success');
    });

// The issue here is that the 'success' shows and the .catch() does NOT run for an error status like 404 or 500
fetch('http://httpstat.us/404')
    .then((response) => {
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    });

// Catch ONLY runs on a network error
fetch('http://hello123.net')
    .then((response) => {
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    });

// Test with response.ok
fetch('http://httpstat.us/404')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Request Failed');
        }
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    });

// Check for specific code
fetch('http://httpstat.us/200')
    .then((response) => {
        if (response.status === 404) {
            throw new Error('Not Found');
        } else if (response.status === 500) {
            throw new Error('Server Error');
        } else if (response.status !== 200) {
            throw new Error('Request Failed');
        }
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    });