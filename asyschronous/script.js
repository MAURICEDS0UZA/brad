const timerId = setTimeout(changeText, 3000);
console.log(timerId)
function changeText() {
    document.querySelector('h1').style.color = 'red';
    document.querySelector('h1').style.border = "solid black 1px"

};

document.querySelector('#cancel').addEventListener('click', () => {
    console.log('clicked cancel')
    clearTimeout(timerId);
})