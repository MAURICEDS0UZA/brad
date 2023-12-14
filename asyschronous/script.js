// const timerId = setTimeout(changeText, 3000);
// console.log(timerId)
// function changeText() {
//     document.querySelector('h1').style.color = 'red';
//     document.querySelector('h1').style.border = "solid black 1px"

// };

// document.querySelector('#cancel').addEventListener('click', () => {
//     console.log('clicked cancel')
//     clearTimeout(timerId);
// })

let intervalId;

function startInterval() {
    if (!intervalId) {
        intervalId = setInterval(changeBgColorRandom, 3000);
    }
}

// function changeBgColor() {
//     if (document.body.style.backgroundColor !== 'black') {
//         document.body.style.color = 'white';
//         document.body.style.backgroundColor = 'black';
//     }
//     else {
//         document.body.style.color = 'black';
//         document.body.style.backgroundColor = 'white';

//     }
// }

// get random color
function changeBgColorRandom() {
    const randomIdex = Math.floor(Math.random() * 162323).toString(16);
    console.log(randomIdex)
    document.body.style.backgroundColor = `#${randomIdex}`;
}

function stopInterval() {
    clearInterval(intervalId)
}

document.querySelector('#start').addEventListener('click', startInterval);
document.querySelector('#stop').addEventListener('click', stopInterval);
