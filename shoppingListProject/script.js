const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearBtn = document.querySelector('#clear');
const filterItem = document.querySelector(`.filter`)

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
    clearUI();
}

// remove-items
function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm("Are you sure?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
    clearUI();
}

// clear all items
function clearAllItem(e) {
    // itemList.innerHTML = " ";
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    clearUI()
}

// clear filter when items are not avaiable.
function clearUI() {
    const itemli = itemList.querySelectorAll(`li`)
    // check items are present in list
    if (itemli.length === 0) {
        clearBtn.style.display = 'none';
        filterItem.style.display = 'none';
    }
    else {
        clearBtn.style.display = 'block';
        filterItem.style.display = 'block';
    }
}


itemForm.addEventListener('submit', additem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearAllItem);
clearUI()