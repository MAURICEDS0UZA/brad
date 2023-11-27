// console.log(document.all)
// console.log(document.head.children[4])
// console.log(document.body.children[0])

// console.log(document.URL)
// console.log(document.domain)
// console.log(document.links)
// const output = document.links[0].id = 'google-links'
// console.log(document.links[0].id = 'google-links')
// out = document.getElementById('item-form').setAttribute('class', 'item-list');
// console.log(out)


// get change content 
tite = document.querySelector('div >header>h1')
tite.setAttribute('id', 'app-title')
// console.log(document.getElementById('app-title').id = 'newg')
tite.textContent = 'hello';
tite.innerText = 'hello again';
tite.innerHTML = '<s> hello buddy</s>'
// var appTitle = document.getElementById("app-title");
var appTitle = document.querySelector('#app-title')
console.log(appTitle)

appTitle.style.color = 'red';
// Change the text color to red
appTitle.style.color = "red";
appTitle.style.backgroundColor = "yellow";
appTitle.style.border = "1px black ";

// query selector
tite = document.querySelector('div >header>h1')
console.log(tite)
tite.setAttribute('id', 'app-title')
// console.log()
console.log(document.querySelector('#app-title').innerHTML)
console.log(document.querySelector('h1'))
console.log(document.querySelector('input[type=text]'))
console.log(document.querySelector('li:nth-child(2)').innerText)
var seconditem = (document.querySelector('li:nth-child(2)'))
console.log(seconditem)
// // Set the text color of the second list item to red
// seconditem.style.color = 'red';

console.log(document.querySelector('button[type=submit]').style.backgroundColor = '#954bd6')
console.log(document.querySelector('button[id=clear]').style.backgroundColor = '#954bd6')
console.log(document.querySelector('button[id=clear]').style.color = 'white')
console.log(document.querySelector('#filter').style.backgroundColor = 'rgb(188 216 195)')




