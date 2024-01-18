const url = 'https://jsonplaceholder.typicode.com/todos' + `?_limit=5`

fetch(url)
    .then(res => res.json())
    .then(data => {
        getData(data)
    })
    .catch(err => console.log(`error: ${err}`));

// getting title and status
function getData(data) {
    data.forEach(ele => {
        const div = document.createElement("div");
        div.textContent = `${ele.title}`;
        div.style.border = "1px solid black";
        div.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        document.querySelector("#todo-list").append(div);

    });
}



const btnSubmit = document.querySelector('button[type="submit"]');
btnSubmit.addEventListener(onclick, (e) => { console.log('e') });