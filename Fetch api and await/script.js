// fetch("https://api.github.com/users/bradtraversy/repos").then((data) => data.json()).then(res => console.log(res)).catch(err => console.log(err));
fetch("https://api.github.com/users/bradtraversy/repos").then((data) => data.json()).then(res => (document.querySelector("h1").textContent = res[1].name)).catch(err => console.log(err));