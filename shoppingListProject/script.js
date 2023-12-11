const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');


function additem(e) {
    e.preventDefault();

    // validate value
    const newItem = itemInput.value;
    if (newItem === "") {
        alert(`Enter the value`);
        return;
    }
    const li = document.createElement('li');
    const button = createbutton("remove-item btn-link text-red");

    // createbutton with icon appended
    function createbutton(classes) {
        const button = document.createElement('button');
        button.setAttribute("class", classes);
        const icon = createIcon("fa-solid fa-xmark")
        button.appendChild(icon)
        return button;
    }

    // create icon 
    function createIcon(classes) {
        const icon = document.createElement('i');
        icon.setAttribute("class", classes);
        return icon;
    }
    itemInput.value = '';
    //append button 
    li.appendChild(document.createTextNode(newItem))
    li.appendChild(button);
    itemList.appendChild(li)
}

// remove-items
function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
        console.log(`clicked!`);
    }
}

// clear all items
function clearAllItem(e) {
    console.log(itemList.firstChild)
    // itemList.innerHTML = " ";
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

}

itemForm.addEventListener('submit', additem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearAllItem)