const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url + `?_limit=5`)
    .then(res => res.json())
    .then(data => {
        getData(data)
    })
    .catch(err => console.log(`error: ${err}`));

// getting title and status
function getData(data) {
    data.forEach(ele => { addToDom(ele) });
}

function addToDom(ele) {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    div.textContent = `${ele.title}`;
    console.log(ele.completed)
    // change color for complted status
    if (ele.completed) {
        div.style.backgroundColor = `#2fcc16`;
    } else {
        div.style.backgroundColor = `#edc566`;
    }
    // add to Dom
    document.querySelector("#todo-list").append(div);
}


const createTodo = (e) => {
    e.preventDefault();

    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false,
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => addToDom(data));
};

document.querySelector('#todo-form').addEventListener('submit', createTodo);