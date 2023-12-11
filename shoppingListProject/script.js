const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

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

itemForm.addEventListener('submit', additem)