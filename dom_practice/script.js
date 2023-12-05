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

/*
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
*/

/*
query selector all
const ited = document.querySelectorAll('li')
console.log(ited)
ited.forEach((items) => items.style.color = 'red')

const clearitem = document.getElementById('clear')
console.log(clearitem)
clearitem.style.color = 'green';

const arr = document.getElementsByClassName('items')
const conarr = Array.from(arr);
console.log(conarr)
conarr.forEach((items) => items.style.color = 'green');

console.log(Array.isArray(conarr))
console.log(Array.isArray(arr))
*/
/*

//
const part = document.querySelector('ul');
for (const a of part.children) {
    console.log(a.innerText)
}
//
part.children[2].innerText = 'coffee';
part.firstElementChild.innerText = "Grapes"
part.lastElementChild.innerText = "Tea"

//getting parent from child 
const child = document.querySelector("li");
console.log(child.innerText)
child.parentElement.style.border = `1px solid #ff233f`
child.parentElement.style.paddingTop = `20px`
child.parentElement.style.paddingLeft = `20px`
// sibling relation
const childTwo = document.querySelector("li:nth-child(2)");
childTwo.nextElementSibling.style.color = "yellow"
childTwo.previousElementSibling.style.color = "orange"
childTwo.nextElementSibling.nextElementSibling.style.color = 'red'
console.log(childTwo)

*/

// const part = document.querySelector('ul');
// part.setAttribute('class', 'paren');
// //dom node relationship
// const par = document.querySelector('ul');
// console.log(par.childNodes)
// console.log(par.children)


/*
//create and append element
const dive = document.createElement('div');
console.log(dive)
dive.className = 'my-element';
dive.id = 'my-element'
dive.setAttribute('title', `my-element`)
dive.innerHTML = '<p>hello</p>'
const text = document.createTextNode('world')
dive.append(text)


document.body.append(dive)
const asd = document.querySelectorAll('.my-element >p');
asd.innerText = 'welcome';
dive.append(asd.innerText)
console.log(asd)
*/


// const output = par.childNodes[1];

// output.style.border = '1px solid blue'
// console.log(output)

// const seconditem = document.querySelector('li:nth-child(2)')
// const ou = seconditem.childNodes[0]
// seconditem.style.color = 'green'
// console.log(ou)


// /*create element and appendchild*/
/*
const myItems = document.createElement('li');
myItems.innerHTML = `Eggs
<button class="remove-item btn-link text-red" >
    <i class="fa-solid fa-xmark"></i >
</button>`
document.querySelector('ul').appendChild(myItems)
console.log(myItems)

const myNewItems = document.createElement('li');
const text = document.createTextNode("cheese");
const btn = document.createElement('button');
btn.className = "remove-item btn-link text-red";
const icon = document.createElement('i');
icon.className = "fa-solid fa-xmark";
myNewItems.appendChild(text)
myNewItems.appendChild(btn)
btn.appendChild(icon)
console.log(myNewItems);
document.querySelector('ul').appendChild(myNewItems)
*/

function mylist(items) {
    const myNewItems = document.createElement('li');
    const text = document.createTextNode(items);

    const button = createButton("remove-item btn-link text-red");

    myNewItems.appendChild(text)
    myNewItems.appendChild(button)

    console.log(myNewItems);

    document.querySelector('ul').appendChild(myNewItems)
}

function createButton(classes) {
    const btn = document.createElement('button');
    btn.className = classes;
    const icon = createIcon("fa-solid fa-xmark")
    btn.appendChild(icon)
    return btn;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
mylist('Butter')
mylist('Jam')

// function insertText() {
//     const ele = document.querySelector("li:first-child");
//     const h2 = document.createElement("h2")
//     h2.innerText = 'juice';
//     ele.insertAdjacentElement('beforeend', h2)
//     console.log(ele)
// }
// insertText()
// function inserthtml() {
//     const tagf = document.querySelector("#clear");
//     tagf.insertAdjacentHTML("afterend", "<p>clear again</p>")
// }
// inserthtml()
/*
const ele = document.querySelector('li:nth-child(1)');
// new element
const itemNEW = document.createElement('li');
const btun = document.createElement('button');
const ioc = document.createElement('i');
ioc.setAttribute("id", "fa-solid fa-xmark")
ioc.innerText = '+'
btun.insertAdjacentElement('afterbegin', ioc)
itemNEW.insertAdjacentElement("afterbegin", btun);
btun.className = "remove-item btn-link text-red";
itemNEW.insertAdjacentText("afterbegin", "cashew")
// itemNEW.insertBefore(btun, itemNEW)
ele.parentNode.insertBefore(itemNEW, ele.nextSibling)
console.log(ele.parentNode)
console.log(itemNEW)
*/

/*
//replace element
const add = document.querySelector('button[type=submit]')
console.log(add)

const newAdd = document.createElement('button')
newAdd.setAttribute('class', 'btn')
newAdd.type = 'submit'
newAdd.innerText = "selected items"
console.log(newAdd)

// //option1
// add.replaceWith(newAdd)

//option2
add.outerHTML = `<button class="remove-item btn-link text-red">
<i class="fa-solid fa-xmark"></i>selected-items
</button>`
*/
/*
// //remove element
// const li = document.querySelector(`li:nth-child(2)`)
// li.remove()

// const ul = document.querySelector('ul');
// const li = document.querySelector(`li:nth-child(4)`)
// ul.removeChild(li)
function deletal(index) {

    const li = document.querySelectorAll(`li`)[index - 1]
    console.log(li)
    li.remove()
}
// deletal(1)

const delete1 = (items) => {
    document.querySelectorAll('li')[items - 1].remove()
}
delete1(1)
*/
/*
const itemsBody = document.querySelector('.btn-link').classList
itemsBody.remove('text-red')
console.log(itemsBody) */
/*
function onclear() {
    const itemsList = document.querySelector("ul");
    // itemsList.remove()
    const itemsChild = itemsList.querySelectorAll('li')
    itemsChild.forEach((ite => ite.remove()));
    console.log(itemsChild)
}

const clearBtn = document.querySelector("#clear");
console.log(clearBtn)
clearBtn.addEventListener('click', onclear)

//remove event listner
// setTimeout(() => {
//     clearBtn.removeEventListener('click', onclear)

// }, 5000);
*/

// const itemslist = document.querySelector('ul');
// const items = itemslist.children
// console.log(items)
function doubleClickBg() {
    document.querySelector('body').style.backgroundColor = 'green'
};
function ClickBg() {
    document.querySelector('body').style.backgroundColor = 'blue'
};
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener('click', ClickBg);
clearBtn.addEventListener('dblclick', doubleClickBg);

//right click
const context = () => { document.querySelector('body').style.backgroundColor = 'purple' }
const cleaBtn = document.querySelector("ul>li");
cleaBtn.addEventListener('contextmenu', context)
console.log(cleaBtn.innerHTML)
//mouse up and down
clearBtn.addEventListener('mouseup', () => console.log('hello'))
clearBtn.addEventListener('mousedown', () => console.log('hello heee'))
//wheel
clearBtn.addEventListener('wheel', () => console.log('wheelo'))

//drag
const itemsSecond = document.querySelector("li:nth-child(2)");
itemsSecond.addEventListener('dragstart', () => console.log('start drag'))
itemsSecond.addEventListener('dragend', () => console.log('end drag'))
itemsSecond.addEventListener('drag', () => console.log('only drag'))